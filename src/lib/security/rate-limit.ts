type Entry = { count: number; resetAt: number } // La structure de données pour stocker le nombre de tentatives et le moment où le compteur sera réinitialisé

const attempts = new Map<string, Entry>() // Une Map pour stocker les tentatives de chaque adresse IP

const WINDOW_MS = 60 * 60 * 1000 // 1 heure
const MAX_REQUESTS = 5 // Nombre maximum de tentatives autorisées par fenêtre de temps

/*
* Cette fonction vérifie si une adresse IP a dépassé le nombre maximum de tentatives autorisées dans la fenêtre de temps spécifiée.
* @param ip L'adresse IP de l'utilisateur
* @returns Un objet indiquant si la tentative est autorisée ou non
*/ 

export function rateLimit(ip: string): { success: boolean } {
    const now = Date.now()
    const entry = attempts.get(ip)

    // Si aucune entrée n'existe pour cette IP ou si la fenêtre de temps est écoulée, réinitialiser le compteur
    if (!entry || now > entry.resetAt) {
        attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS })
        return { success: true }
    }

    // Si le nombre de tentatives a dépassé la limite, retourner un échec
    if (entry.count >= MAX_REQUESTS) {
        return { success: false }
    }

    entry.count += 1
    return { success: true }
}