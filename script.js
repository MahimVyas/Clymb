document.addEventListener("DOMContentLoaded", function () {
    const continueBtn = document.getElementById("continue-btn");
    const textBox = document.getElementById("text-box");
    const messageBox = document.getElementById("message-box");
    const alertBox = document.getElementById("alert-block-container");

    if (!continueBtn || !textBox || !messageBox) return; // Prevent errors if elements are missing

    continueBtn.addEventListener("click", function () {
        textBox.style.display = "block";
        messageBox.style.display = "block";
        this.style.display = "none"; // Hide button

        if (alertBox) {
            alertBox.style.opacity = "0"; // Fade-out effect
            setTimeout(() => alertBox.remove(), 300);
        }
    });
});
