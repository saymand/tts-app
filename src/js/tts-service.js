// This file contains the service functions that interact with the TTS API.

const API_URL = 'https://api.elevenlabs.io/v1/text-to-speech'; // Replace with the actual API endpoint
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

export const initializeTTS = () => {
    // Initialization logic if needed
};

export const synthesizeSpeech = async (text) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({ text })
        });

        if (!response.ok) {
            throw new Error('Failed to synthesize speech');
        }

        const audioData = await response.json();
        const audioUrl = audioData.audio_url; // Adjust based on actual response structure
        playAudio(audioUrl);
    } catch (error) {
        console.error('Error:', error);
    }
};

const playAudio = (url) => {
    const audio = new Audio(url);
    audio.play();
};

export const stopSpeech = () => {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
};