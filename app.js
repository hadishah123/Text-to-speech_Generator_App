let voices = [];

function populateVoices() {
    // Get all available voices from the speech synthesis API
    voices = window.speechSynthesis.getVoices();
    
    const voiceSelect = document.getElementById('voice');
    
    // Clear current voice options
    voiceSelect.innerHTML = '';
    
    // Populate voice dropdown with available voices
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

// Populate voices when they are loaded
if (typeof speechSynthesis !== 'undefined') {
    speechSynthesis.onvoiceschanged = populateVoices;
}

// Populate voices on page load
populateVoices();

function convertTextToSpeech() {
    // Get the text from the textarea
    const text = document.getElementById('text').value;

    // Get the selected pitch value from the dropdown
    const pitch = document.getElementById('pitch').value;

    // Get the selected voice from the dropdown
    const selectedVoice = document.getElementById('voice').value;
    
    // Check if the browser supports the Web Speech API
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(text);
        
        // Set properties for pitch, rate, and voice
        speech.pitch = parseFloat(pitch); // Convert pitch to float
        speech.rate = 1; // You can keep rate fixed or make it adjustable similarly
        
        // Find and assign the selected voice
        const voice = voices.find(v => v.name === selectedVoice);
        if (voice) {
            speech.voice = voice;
        }
        
        // Speak the text
        window.speechSynthesis.speak(speech);
    } else {
        alert('Your browser does not support text to speech!');
    }
}


// Toggle between light and dark themes
function toggleTheme() {
    // Get the body element
    const body = document.body;

    // Toggle the dark-mode class
    body.classList.toggle('dark-mode');

    // Change the theme button icon based on the mode
    const themeButton = document.getElementById('theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = '🌞'; // Sun icon for light mode
    } else {
        themeButton.textContent = '🌙'; // Moon icon for dark mode
    }
}
