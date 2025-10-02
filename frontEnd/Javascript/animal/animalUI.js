// animalUi.js
import { getCurrentUser } from "../auth/authService.js";

document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "inscription.html";
        return;
    }

    const user = await getCurrentUser();
    if (!user || user.role !== "Proprietaire") {
        window.location.href = "criteres.html";
        return;
    }

    const btnProfile = document.getElementById("btn-profile");
    if (btnProfile) {
        btnProfile.addEventListener("click", () => {
            window.location.href = "monProfil.html";
        });
    }

    const content = document.querySelector(".content-area");

    try {
        const res = await fetch("http://localhost:5237/api/animals/mine", {
            headers: { "Authorization": `Bearer ${token}` }
        });

        let animal = null;
        
        // Si 404, c'est normal : pas d'animal
        if (res.status === 404) {
            animal = null;
        } else if (res.ok) {
            animal = await res.json();
        } else {
            throw new Error("Impossible de charger l'animal.");
        }

        if (!animal) {
            // Pas d'animal → bouton ajouter
            content.innerHTML = `
                <div class="text-center mt-5">
                    <p>Vous n'avez pas encore enregistré d'animal.</p>
                    <button class="btn-add-animal" id="btn-add-animal">Ajouter mon animal</button>
                </div>
            `;
            document.getElementById("btn-add-animal").addEventListener("click", () => {
                window.location.href = "ajouterAnimal.html";
            });
        } else {
            // Animal existant → affichage
            content.innerHTML = `
                <div class="animal-header">
                    <div class="animal-avatar">
                        <i class="fas fa-paw"></i>
                    </div>
                    <div class="animal-info">
                        <h2>${animal.nomAnimal}</h2>
                        <p class="animal-details">${animal.race}, ${animal.age} ans</p>
                        <a href="#" class="view-photos-link">voir plus de photos</a>
                    </div>
                </div>
                <div class="description-section">
                    <textarea class="description-box">${animal.descriptionAnimal || ""}</textarea>
                </div>
                <button class="btn btn-modify-animal mt-3">Modifier mon animal</button>
            `;
        }
    } catch (err) {
        console.error("Erreur:", err);
        content.innerHTML = `<p class="text-danger">Erreur lors du chargement de l'animal.</p>`;
    }
});