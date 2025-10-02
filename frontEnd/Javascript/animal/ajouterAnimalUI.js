// ajouterAnimalUI.js
import { getCurrentUser } from "../auth/authService.js";
import * as animalService from './animalService.js';

document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "inscription.html";
        return;
    }

    const user = await getCurrentUser();
    if (!user) {
        localStorage.removeItem("token");
        window.location.href = "inscription.html";
        return;
    }

    // Charger les données de référence dans les selects
    await initializeForm();

    // Gestion des onglets
    const btnProfile = document.getElementById("btn-profile");
    if (btnProfile) {
        btnProfile.addEventListener("click", () => {
            window.location.href = "monProfil.html";
        });
    }

    const btnAnimal = document.getElementById("btn-animal");
    if (btnAnimal) {
        btnAnimal.classList.add("active");
    }

    // Gestion du formulaire
    const form = document.getElementById("animal-form");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }

    // Gestion photo upload
    const photoInput = document.getElementById("photo-input");
    if (photoInput) {
        photoInput.addEventListener("change", () => {
            if (photoInput.files && photoInput.files[0]) {
                const fileName = photoInput.files[0].name;
                const uploadDiv = photoInput.previousElementSibling;
                const textElement = uploadDiv.querySelector(".photo-upload-text");
                if (textElement) {
                    textElement.textContent = fileName;
                }
                uploadDiv.style.borderColor = "var(--accent-color)";
                uploadDiv.style.backgroundColor = "#F8F9FA";
            }
        });
    }
});

async function initializeForm() {
    try {
        const { types, tailles, niveaux, temperaments, logements } = await animalService.loadAllReferenceData();

        // Remplir les selects
        const selectType = document.getElementById("select-type-animal");
        const selectTaille = document.getElementById("select-taille");
        const selectNiveau = document.getElementById("select-niveau-activite");

        animalService.populateSelect(selectType, types, "idTypeAnimal", "nomTypeAnimal");
        animalService.populateSelect(selectTaille, tailles, "idTailleAnimal", "nomTaille");
        animalService.populateSelect(selectNiveau, niveaux, "idNiveauActivite", "nomActivite");

        // Remplir les checkboxes - utilisez les vrais noms de propriétés
        animalService.populateCheckboxes(
            'checkbox-list-temperaments',
            temperaments, 
            "idTemperament", 
            "nomTemperament",  // Vérifiez ce nom dans la console
            "temperaments"
        );
        
        animalService.populateCheckboxes(
            'checkbox-list-logements',
            logements, 
            "idTypeLogement", 
            "typeLogementNom",  // Basé sur votre capture d'écran
            "logements"
        );

    } catch (err) {
        console.error("Erreur chargement formulaire:", err);
        alert("Erreur lors du chargement du formulaire");
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const animalData = animalService.buildAnimalDataFromForm(formData);

    console.log("Données envoyées:", animalData);

    const result = await animalService.submitAnimal(animalData);

    if (result.success) {
        alert("Animal ajouté avec succès !");
        window.location.href = "monProfilAnimal.html";
    } else {
        alert("Erreur lors de l'ajout de l'animal.");
    }
}