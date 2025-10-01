// authUi.js
import { handleRegister } from "./authService.js";

// Fonction utilitaire pour afficher un message Bootstrap
function showMessage(message, type = "success") {
    const messageBox = document.getElementById("messageBox");
    messageBox.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show mt-3" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Récupération des champs du formulaire
            const nom = document.querySelector('input[placeholder="Nom"]').value;
            const prenom = document.querySelector('input[placeholder="Prénom"]').value;
            const email = document.querySelector('input[placeholder="Adresse e-mail"]').value;
            const password = document.querySelector('input[placeholder="Mot de passe"]').value;

            // rôle via le bouton actif
            const activeBtn = document.querySelector(".btn-toggle.active");
            const role = activeBtn?.textContent.trim() === "Propriétaire" ? "Proprietaire" : "Adoptant";

            // photo (optionnelle)
            const photoInput = document.getElementById("photo-input");
            const photoProfil = photoInput?.files[0]?.name || null;

            // Appel au service d'inscription
            const { success, message } = await handleRegister(nom, prenom, email, password, role, photoProfil);

            if (success) {
                showMessage("Bienvenue " + prenom + " Votre compte a été créé avec succès.", "success");

                // Redirection après 2 secondes vers le profil
                setTimeout(() => {
                    window.location.href = "monProfil.html";
                }, 2000);
            } else {
                showMessage("Erreur lors de l'inscription : " + message, "danger");
            }
        });
    }

    // gestion du toggle des boutons rôle
    document.querySelectorAll(".btn-toggle").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".btn-toggle").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    // gestion affichage du fichier choisi
    const photoInput = document.getElementById("photo-input");
    if (photoInput) {
        photoInput.addEventListener("change", () => {
            if (photoInput.files && photoInput.files[0]) {
                const fileName = photoInput.files[0].name;
                const uploadDiv = photoInput.previousElementSibling;
                uploadDiv.querySelector(".photo-upload-text").textContent = fileName;
                uploadDiv.style.borderColor = "var(--accent-color)";
                uploadDiv.style.backgroundColor = "#F8F9FA";
            }
        });
    }
});
