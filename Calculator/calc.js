const resultDisplay = document.getElementById('result');
let currentValue = '';
let prevValue = '';
let operator = '';

function calculate(num1, operator, num2) {
  let result;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '^':
      result = Math.pow(num1, num2);
      break;
    case 'sqrt':
      result = Math.sqrt(num1);
      break;
    case 'sin':
      result = Math.sin(num1 * Math.PI / 180);
      break;
    case 'cos':
      result = Math.cos(num1 * Math.PI / 180);
      break;
    case 'tan':
      result = Math.tan(num1 * Math.PI / 180);
      break;
    case 'log':
      result = Math.log10(num1);
      break;
    default:
      result = 'Invalid operation';
  }

  return result;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (value === 'clear') {
      currentValue = '';
      prevValue = '';
      operator = '';
      resultDisplay.value = '';
    } else if (value === 'backspace') {
      currentValue = currentValue.slice(0, -1);
      resultDisplay.value = currentValue;
    } else if (value === '=') {
      if (currentValue && prevValue && operator) {
        const result = calculate(prevValue, operator, currentValue);
        resultDisplay.value = result;
        currentValue = result.toString();
        prevValue = '';
        operator = '';
      }
    } else if (isNaN(value) && value !== '.') {
      operator = value;
      prevValue = currentValue;
      currentValue = '';
    } else {
      currentValue += value;
      resultDisplay.value = currentValue;
    }
  });
});