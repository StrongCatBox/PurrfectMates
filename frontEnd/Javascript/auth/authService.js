// authService.js
import { register, login, me } from "./authApi.js";

export async function handleRegister(nom, prenom, email, password, role, photoProfil) {
    const result = await register({
        Nom: nom,
        Prenom: prenom,
        Email: email,
        MotDePasse: password,
        Role: role,
        PhotoProfilUtilisateur: photoProfil || null,
    });

    if (result?.token) {
        localStorage.setItem("token", result.token); //  connexion auto
        return { success: true, message: "Inscription réussie" };
    }

    return { success: false, message: "Impossible de créer le compte" };
}

export async function handleLogin(email, password) {
    const result = await login({ email, password });

    if (result?.token) {
        localStorage.setItem("token", result.token);
        return { success: true, message: "Connexion réussie !" };
    }

    return { success: false, message: "Email ou mot de passe incorrect." };
}

export async function getCurrentUser() {
    const token = localStorage.getItem("token");
    return token ? await me(token) : null;
}
