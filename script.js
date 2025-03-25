document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('continue-btn').addEventListener('click', function() {
        const textBox = document.getElementById('text-box');
        const messageBox = document.getElementById('message-box');
        const alert = document.getElementById('alert-block-container');
        
        // Show the text box and message box
        textBox.style.display = 'block';
        messageBox.style.display = 'block';
        
        // Hide the button
        this.style.display = 'none';
        
        // Remove the alert div
        if (alert) {
            alert.style.opacity = '0'; // Add a fade-out effect
            setTimeout(() => {
                alert.remove();
            }, 300); // Wait for the fade-out effect to complete
        }
    });



});