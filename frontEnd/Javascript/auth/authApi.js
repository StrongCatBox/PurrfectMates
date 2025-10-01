// authApi.js
const API_URL = "http://localhost:5237/api/auth"; // adapte ton port si besoin

export async function register(userData) {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Erreur API");
        }

        return await response.json();
    } catch (error) {
        console.error("Erreur API register:", error.message);
        return null;
    }
}

export async function login(credentials) {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Erreur API");
        }

        return await response.json();
    } catch (error) {
        console.error("Erreur API login:", error.message);
        return null;
    }
}

export async function me(token) {
    try {
        const response = await fetch(`${API_URL}/me`, {
            headers: { "Authorization": `Bearer ${token}` },
        });

        if (!response.ok) {
            throw new Error("Impossible de récupérer l'utilisateur.");
        }

        return await response.json();
    } catch (error) {
        console.error("Erreur API me:", error.message);
        return null;
    }
}
