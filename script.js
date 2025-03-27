document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let statusMessage = document.getElementById("statusMessage");

    if (name === "" || email === "" || message === "") {
        statusMessage.style.color = "red";
        statusMessage.textContent = "All fields are required!";
        return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        statusMessage.style.color = "red";
        statusMessage.textContent = "Invalid email format!";
        return;
    }

    // Simulate sending message
    statusMessage.style.color = "green";
    statusMessage.textContent = "Message sent successfully!";

    // Clear form
    document.getElementById("contactForm").reset();
});
