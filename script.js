// Array of quotes
const quotes = [
    "Write less, do more. — jQuery",
    "JavaScript: The world's most misunderstood language. — Douglas Crockford",
    "The web is the most important platform. — Brendan Eich",
    "Always bet on JavaScript. — Chris Heilmann",
    "JavaScript is everywhere! — Anonymous"
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display a random quote
function displayRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerText = getRandomQuote();
}

// Event listener for the button
document.getElementById('newQuoteButton').addEventListener('click', displayRandomQuote);

// Display a random quote on initial load
window.onload = displayRandomQuote;
