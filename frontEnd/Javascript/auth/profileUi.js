// profileUi.js
import { getCurrentUser } from "./authService.js";

document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");

    // Pas connecté → redirection
    if (!token) {
        window.location.href = "inscription.html";
        return;
    }

    // Récupérer l'utilisateur via /me
    const user = await getCurrentUser();
    if (!user) {
        // Token invalide ou expiré → redirection
        localStorage.removeItem("token");
        window.location.href = "inscription.html";
        return;
    }

    // Mise à jour des infos dans la page (seulement si présents)
    const profileInfo = document.querySelector(".profile-info h2");
    const profileBadge = document.querySelector(".profile-badge");

    if (profileInfo) profileInfo.textContent = `${user.prenomUtilisateur} ${user.nomUtilisateur}`;
    if (profileBadge) profileBadge.textContent = user.role;

    // Déconnexion
    const logoutLink = document.querySelector(".nav-link");
    if (logoutLink) {
        logoutLink.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("token");
            window.location.href = "accueil.html";
        });
    }

    // Gestion dynamique du deuxième onglet
    const btnDynamic = document.getElementById("btn-dynamic");
    if (btnDynamic) {
        if (user.role === "Proprietaire") {
            btnDynamic.textContent = "Mon animal";
            btnDynamic.addEventListener("click", () => {
                window.location.href = "monProfilAnimal.html"; // page pour les propriétaires
            });
        } else {
            btnDynamic.textContent = "Mes critères";
            btnDynamic.addEventListener("click", () => {
                window.location.href = "criteres.html"; // page pour les adoptants
            });
        }
    }

    // Gestion des onglets fixes quand on est déjà sur monProfilAnimal ou criteres
    const btnProfile = document.getElementById("btn-profile");
    if (btnProfile) {
        btnProfile.addEventListener("click", () => {
            window.location.href = "monProfil.html";
        });
    }

    const btnCriteres = document.getElementById("btn-criteres");
if (btnCriteres) {
    btnCriteres.addEventListener("click", () => {
        window.location.href = "criteres.html"; 
    });
}

});
