// Encryption algorithms list (for random output generation)
const algorithms = ['AES', 'DES', 'TripleDES', 'Rabbit', 'RC4'];

// Function to generate random confidence scores for algorithms
function generateRandomConfidenceScores() {
    return algorithms.map(algo => ({
        name: algo,
        confidence: Math.random() * 100 // Generate random confidence between 0% and 100%
    })).sort((a, b) => b.confidence - a.confidence); // Sort in descending order
}

// Event listener for the analyze button
document.getElementById('analyzeBtn').addEventListener('click', () => {
    // Generate random results
    const results = generateRandomConfidenceScores();
    
    // Display results and update the confidence chart
    displayResults(results);
    updateConfidenceChart(results);
});

// Function to display results
function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Top identified algorithm: <strong>${results[0].name}</strong> (${results[0].confidence.toFixed(2)}% confidence)</p>
        <p>Other possible algorithms:</p>
        <ul>
            ${results.slice(1).map(r => `<li>${r.name}: ${r.confidence.toFixed(2)}%</li>`).join('')}
        </ul>
    `;
}

// Function to update the confidence chart
function updateConfidenceChart(results) {
    const chartDiv = document.getElementById('confidenceChart');
    chartDiv.innerHTML = ''; // Clear previous chart

    results.forEach((result, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = '0%';
        
        const label = document.createElement('div');
        label.className = 'bar-label';
        label.textContent = `${result.name}\n${result.confidence.toFixed(1)}%`;
        
        bar.appendChild(label);
        chartDiv.appendChild(bar);

        // Animate the bar height based on confidence percentage
        gsap.to(bar, {
            height: `${result.confidence}%`,
            duration: 1,
            ease: 'power2.out',
            delay: index * 0.1
        });
    });
}

// Initial animation
gsap.from('#app', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('h1', {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power3.out',
    delay: 0.5
});

gsap.from('.bg-white', {
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    ease: 'back.out(1.7)',
    stagger: 0.2,
    delay: 0.7
});
