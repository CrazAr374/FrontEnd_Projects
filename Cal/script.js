let displayValue = '0';
let historyValue = '';

function updateDisplay() {
    const resultElement = document.getElementById('result');
    const historyElement = document.getElementById('history');
    
    resultElement.innerText = displayValue;
    historyElement.innerText = historyValue;
    resultElement.style.transform = 'scale(1.05)';
    setTimeout(() => {
        resultElement.style.transform = 'scale(1)';
    }, 100);
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    historyValue = '';
    updateDisplay();
}

function calculate() {
    try {
        historyValue = displayValue + ' =';
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        animateButtonPress(key);
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        animateButtonPress(key);
        appendToDisplay(key);
    } else if (key === '.' || key === '(' || key === ')') {
        animateButtonPress(key);
        appendToDisplay(key);
    } else if (key === 'Enter') {
        animateButtonPress('=');
        calculate();
    } else if (key === 'Escape') {
        animateButtonPress('C');
        clearDisplay();
    } else if (key === 'Backspace') {
        displayValue = displayValue.slice(0, -1);
        if (displayValue === '') {
            displayValue = '0';
        }
        updateDisplay();
    }
});

function animateButtonPress(key) {
    const button = document.querySelector(`button:not(.operator):not(.clear):not(.equals):nth-child(n+5)`);
    if (button) {
        button.classList.add('button-press');
        setTimeout(() => {
            button.classList.remove('button-press');
        }, 150);
    }
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('button-press');
        setTimeout(() => {
            this.classList.remove('button-press');
        }, 150);
    });
});

updateDisplay();