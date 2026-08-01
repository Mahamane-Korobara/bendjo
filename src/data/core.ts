/**
 * Primitives partagées entre le rendu serveur et le script du panier.
 *
 * Module volontairement feuille : il n'importe rien et n'exporte que des
 * valeurs minuscules. Le tiroir panier l'importe côté client, et tout ce qui
 * vit ici part donc dans le navigateur — d'où la règle : aucune donnée
 * éditoriale, aucun tracé SVG. Ceux-là restent dans site.ts et products.ts,
 * qui réexportent d'ici pour que les consommateurs n'aient rien à savoir.
 */

export const WA_NUMBER = '2290162014161';

/** Construit un lien WhatsApp avec le message déjà encodé. */
export const wa = (text: string) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

/**
 * 1500 → « 1 500 ». Espace insécable : le nombre ne se coupe jamais en fin de
 * ligne, et le rendu est identique côté serveur et côté navigateur.
 */
export function formatFCFA(n: number): string {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
