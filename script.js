document.getElementById('continue-btn').addEventListener('click', function() {
    const textBox = document.getElementById('text-box');
    const alertDiv = document.querySelector('.block-1');
    const messageBox = document.getElementById('message-box');
    
    // Show the text box and message box
    textBox.style.display = 'block';
    messageBox.style.display = 'block';
    
    // Hide the button
    this.style.display = 'none';
    
    // Remove the alert div
    if (alertDiv) {
        alertDiv.style.opacity = '0'; // Add a fade-out effect
        setTimeout(() => {
            alertDiv.remove();
        }, 300); // Wait for the fade-out effect to complete
    }
});