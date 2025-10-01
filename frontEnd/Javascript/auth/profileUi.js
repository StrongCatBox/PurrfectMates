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

    // Mise à jour des infos dans la page
    document.querySelector(".profile-info h2").textContent = `${user.prenomUtilisateur} ${user.nomUtilisateur}`;
    document.querySelector(".profile-badge").textContent = user.role;

    // Déconnexion
    const logoutLink = document.querySelector(".nav-link");
    logoutLink.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        window.location.href = "accueil.html";
    });

    // Gestion dynamique du deuxième onglet
    const btnDynamic = document.getElementById("btn-dynamic");

    if (user.role === "Proprietaire") {
        btnDynamic.textContent = "Mon animal";
        btnDynamic.addEventListener("click", () => {
            window.location.href = "monAnimal.html"; // page pour les propriétaires
        });
    } else {
        btnDynamic.textContent = "Mes critères";
        btnDynamic.addEventListener("click", () => {
            window.location.href = "criteres.html"; // page pour les adoptants
        });
    }
});

// Gestion du switch des onglets (visuel uniquement)
window.switchTab = function (tab) {
    const tabs = document.querySelectorAll('.profile-tab');
    tabs.forEach(t => t.classList.remove('active'));

    if (tab === 'profile') {
        tabs[0].classList.add('active');
    } else if (tab === 'animal') {
        tabs[1].classList.add('active');
    }
};
