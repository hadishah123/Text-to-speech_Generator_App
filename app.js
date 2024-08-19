function convertTextToSpeech() {
    // Get the text from the textarea
    const text = document.getElementById('text').value;

    // Check if the browser supports the Web Speech API
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(text);
        
        // Set some properties if needed (e.g., voice, pitch, rate)
        speech.pitch = 1;
        speech.rate = 1;
        
        // Speak the text
        window.speechSynthesis.speak(speech);
    } else {
        alert('Your browser does not support text to speech!');
    }
}