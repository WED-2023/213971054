document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let statusMessage = document.getElementById("statusMessage");

    // Validation: Ensure all fields are filled
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
    $(document).ready(function () {
        $("#menu a").click(function (e) {
            e.preventDefault();
            var target = $($.attr(this, 'href'));
            $('html, body').animate({
                scrollTop: target.offset().top - 50 // Adjust 50 to the height of your navbar
            }, 500);
        });
    });


});