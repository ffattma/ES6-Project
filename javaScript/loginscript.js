document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("errorMessage");

            const storedEmail = localStorage.getItem("email");
            const storedPassword = localStorage.getItem("password");

            if (email === storedEmail && password === storedPassword) {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "index.html";
            } else {
                errorMessage.textContent = "Invalid email or password.";
            }
        });
    }
});
