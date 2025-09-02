document.addEventListener("DOMContentLoaded", function() {
    // This is a simple script to welcome the user.
    // In a real application, you would get the user's name after they log in.
    const welcomeName = document.getElementById("welcome-name");
    
    if (welcomeName) {
        // For demonstration, we'll just keep it as "Hi, User".
        // You can later replace "User" with the actual user's name.
        welcomeName.textContent = "Hi, Dr. Smith";
    }
});