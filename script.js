// JavaScript for displaying dynamic date and time
function updateDateTime() {
    const dateTimeElement = document.querySelector('.datetime');
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const formattedDate = now.toLocaleString('en-US', options);
    dateTimeElement.textContent = formattedDate;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
const dynamicTextElement = document.getElementById('dynamic-text');
const strings = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "I have a joke on programming, but it only works on my computer.",
    "Programming is 10% writing code and 90% understanding why it's not working.",
    "The only valid measurement of code quality: WTFs per minute.",
    "If at first you don't succeed, call it version 1.0.",
    "Why do programmers prefer iOS development over Android development? Because on iOS, there are no Java exceptions.",
    "Real programmers count from 0.",
    "Programmer (noun): A machine that turns coffee into code.",
    "Software developers like to solve problems. If there are no problems handily available, they will create their own problems.",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "I’m not a great programmer; I’m just a good programmer with great habits.",
    "It’s not a bug, it’s an undocumented feature.",
    "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
    "The best error message is the one that never shows up.",
    "Why do Java developers wear glasses? Because they don't C#!",
    "Why don't programmers like nature? It has too many bugs.",
    "I don’t always test my code, but when I do, I do it in production.",
    "A user interface is like a joke. If you have to explain it, it's not that good."
];; // Add your desired strings here
let stringIndex = 0;

function updateDynamicText() {
    dynamicTextElement.textContent = strings[stringIndex];
    stringIndex = (stringIndex + 1) % strings.length;
}

setInterval(updateDynamicText, 10000); // Change text every 30 seconds

// Initial update
updateDynamicText();