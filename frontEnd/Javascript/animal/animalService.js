// animalService.js
import * as animalApi from './animalApiService.js';

export async function loadAllReferenceData() {
    try {
        const [types, tailles, niveaux, temperaments, logements] = await Promise.all([
            animalApi.getTypesAnimaux(),
            animalApi.getTaillesAnimaux(),
            animalApi.getNiveauxActivites(),
            animalApi.getTemperaments(),
            animalApi.getTypesLogement()
        ]);

        console.log("Temperaments:", temperaments);
        console.log("Logements:", logements);

        return { types, tailles, niveaux, temperaments, logements };
    } catch (err) {
        console.error("Erreur lors du chargement des données de référence:", err);
        throw err;
    }
}

export function populateSelect(selectElement, data, valueField, textField) {
    if (!selectElement) return;

    // Garder l'option vide
    selectElement.innerHTML = '<option value="" disabled selected></option>';

    // Ajouter les options
    data.forEach(item => {
        const option = document.createElement("option");
        option.value = item[valueField];
        option.textContent = item[textField];
        selectElement.appendChild(option);
    });
}

export function populateCheckboxes(containerId, data, valueField, textField, nameAttribute) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Container ${containerId} introuvable`);
        return;
    }

    container.innerHTML = '';

    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'checkbox-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = nameAttribute;
        checkbox.id = `${nameAttribute}-${item[valueField]}`;
        checkbox.value = item[valueField];
        
        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = item[textField];
        
        div.appendChild(checkbox);
        div.appendChild(label);
        container.appendChild(div);
    });
}

export function buildAnimalDataFromForm(formData) {
    return {
        nomAnimal: formData.get("nom"),
        age: parseInt(formData.get("age")),
        race: formData.get("race"),
        descriptionAnimal: formData.get("description"),
        typeAnimalId: parseInt(formData.get("type-animal")),
        tailleAnimalId: parseInt(formData.get("taille")),
        niveauActiviteId: parseInt(formData.get("niveau-activite"))
    };
}

export async function submitAnimal(animalData) {
    try {
        await animalApi.createAnimal(animalData);
        return { success: true };
    } catch (err) {
        console.error("Erreur lors de la soumission:", err);
        return { success: false, error: err.message };
    }
}