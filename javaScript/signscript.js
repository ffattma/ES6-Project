document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById("registrationForm");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const fullName = document.getElementById("fullName").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const errorMessage = document.getElementById("errorMessage");

            const nameRegex = /^[a-zA-Z\s]{3,30}$/;
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if (!nameRegex.test(fullName)) {
                errorMessage.textContent = "Full Name must be 3-30 letters only.";
                return;
            }
            if (!emailRegex.test(email)) {
                errorMessage.textContent = "Invalid email format.";
                return;
            }
            if (!passwordRegex.test(password)) {
                errorMessage.textContent = "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
                return;
            }
            if (password !== confirmPassword) {
                errorMessage.textContent = "Passwords do not match!";
                return;
            }

            localStorage.setItem("fullName", fullName);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            window.location.href = "login.html";
        });
    }
});
