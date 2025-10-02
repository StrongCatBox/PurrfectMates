import { login } from "./authApi.js";

// fonction pour afficher un message bootstrap
function showMessage(message, type = "danger") {
    const box = document.getElementById("messageBox");
    box.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show mt-3" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    const result = await login({ email, password });

    if (result?.token) {
        localStorage.setItem("token", result.token);
        window.location.href = "monProfil.html";
    } else {
        showMessage("Email ou mot de passe incorrect.", "danger");
    }
});

});
