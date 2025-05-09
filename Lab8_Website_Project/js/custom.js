function showMotivation() {
    const messages = [
        "Believe in yourself — you're capable of amazing things.",
        "Great things never come from comfort zones.",
        "Push yourself, because no one else is going to do it for you.",
        "Success is the sum of small efforts, repeated day in and day out.",
        "Your journey is just beginning — stay focused and unstoppable."
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageBox = document.getElementById('motivation-message');
    if (messageBox) {
        messageBox.textContent = randomMessage;
    }
}
