// This file contains the main application logic for the TTS application.
// It handles button click events to trigger text-to-speech functionality
// and manages the stop functionality for the speech.

const textLines = [
    "Line 1: Welcome to the TTS App!",
    "Line 2: This application uses text-to-speech technology.",
    "Line 3: You can listen to various lines of text.",
    "Line 4: Click the buttons to hear the text read aloud.",
    "Line 5: Enjoy the experience of listening to text.",
    "Line 6: This app is built using JavaScript and Tailwind CSS.",
    "Line 7: You can stop the speech at any time.",
    "Line 8: Make sure your volume is turned up.",
    "Line 9: Have fun exploring the features!",
    "Line 10: Thank you for using the TTS App!"
];

let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;

function speakText(text) {
    if (currentUtterance) {
        speechSynthesis.cancel(); // Stop any ongoing speech
    }
    currentUtterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(currentUtterance);
}

function stopSpeech() {
    if (currentUtterance) {
        speechSynthesis.cancel();
        currentUtterance = null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    textLines.forEach((line, index) => {
        const button = document.createElement('button');
        button.textContent = `Read Line ${index + 1}`;
        button.className = "m-2 p-2 bg-blue-500 text-white rounded";
        button.onclick = () => speakText(line);
        document.body.appendChild(button);
    });

    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop Speech';
    stopButton.className = "m-2 p-2 bg-red-500 text-white rounded";
    stopButton.onclick = stopSpeech;
    document.body.appendChild(stopButton);
});