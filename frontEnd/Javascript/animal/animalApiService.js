// animalApiService.js

const API_BASE_URL = "http://localhost:5237/api";

export async function getTypesAnimaux() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_BASE_URL}/referencedata/types-animaux`, {
        headers: { "Authorization": `Bearer ${token}` }
    });
    
    if (!res.ok) throw new Error("Erreur lors du chargement des types d'animaux");
    return await res.json();
}

export async function getTaillesAnimaux() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_BASE_URL}/referencedata/tailles-animaux`, {
        headers: { "Authorization": `Bearer ${token}` }
    });
    
    if (!res.ok) throw new Error("Erreur lors du chargement des tailles");
    return await res.json();
}

export async function getNiveauxActivites() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_BASE_URL}/referencedata/niveaux-activites`, {
        headers: { "Authorization": `Bearer ${token}` }
    });
    
    if (!res.ok) throw new Error("Erreur lors du chargement des niveaux d'activité");
    return await res.json();
}

export async function createAnimal(animalData) {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_BASE_URL}/animals`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(animalData)
    });
    
    if (!res.ok) throw new Error("Erreur lors de la création de l'animal");
    return await res.json();
}

export async function getMyAnimal() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_BASE_URL}/animals/mine`, {
        headers: { "Authorization": `Bearer ${token}` }
    });
    
    if (res.status === 404) return null;
    if (!res.ok) throw new Error("Erreur lors du chargement de l'animal");
    return await res.json();
}

export async function getTemperaments() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_BASE_URL}/referencedata/temperaments`, {
        headers: { "Authorization": `Bearer ${token}` }
    });
    
    if (!res.ok) throw new Error("Erreur lors du chargement des tempéraments");
    return await res.json();
}

export async function getTypesLogement() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_BASE_URL}/referencedata/types-logement`, {
        headers: { "Authorization": `Bearer ${token}` }
    });
    
    if (!res.ok) throw new Error("Erreur lors du chargement des types de logement");
    return await res.json();
}