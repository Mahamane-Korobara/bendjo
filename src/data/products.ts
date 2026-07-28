export interface Brew {
    /** valeur affichée en gros : « 1 c. à s. » */
    v: string;
    /** libellé sous la valeur : « pour 25 cl » */
    l: string;
}

export interface Product {
    id: string;
    num: string;
    tag: string;
    latin: string;
    name: string;
    tagline: string;
    note: string;
    benefits: string[];
    /** conditionnement, tel qu'indiqué sur le packaging */
    format: string;
    /** mention de précaution, affichée seulement si la plante en demande une */
    caution?: string;
    brew: Brew[];
    moment: string;
    /** prix unitaire en FCFA, entier — la source pour l'affichage et les totaux */
    price: number;
    photo: string;
}

export const products: Product[] = [
    {
        id: 'hibiscus',
        num: '01',
        tag: 'Bissap',
        latin: 'Hibiscus sabdariffa',
        name: 'Hibiscus',
        tagline: 'Rouge profond, acidulé.',
        note: 'Les calices séchés libèrent une infusion écarlate, franchement acidulée, qui se boit aussi bien brûlante que glacée. C’est l’infusion qui réveille la journée.',
        benefits: ['Vitamine C', 'Calcium', 'Magnésium', 'Potassium'],
        format: 'Boîte de 10 sachets',
        caution:
            'Déconseillé pendant la grossesse et l’allaitement. Si vous suivez un traitement contre l’hypertension, le diabète ou le paludisme, ou une contraception hormonale, demandez l’avis de votre médecin.',
        brew: [
            { v: '1 c. à s.', l: 'pour 25 cl' },
            { v: '95 °C', l: 'température' },
            { v: '5–7 min', l: 'infusion' },
        ],
        moment: 'Le matin',
        price: 1500,
        photo: '/images/bendjo/p-hibiscus.webp',
    },
    {
        id: 'citronnelle',
        num: '02',
        tag: '3-en-1',
        latin: 'Cymbopogon citratus',
        name: 'Citronnelle',
        tagline: 'Citronnée, chaude, épicée.',
        note: 'Citronnelle, clou de girofle et feuille de laurier réunis dans une même infusion. Un trio vif et réconfortant, à prendre après le repas pour purifier et digérer.',
        benefits: ['Vitamine E', 'Magnésium', 'Enzymes digestives', 'Antioxydants'],
        format: 'Boîte de 10 sachets',
        brew: [
            { v: '1 c. à s.', l: 'pour 25 cl' },
            { v: '95 °C', l: 'température' },
            { v: '7–10 min', l: 'infusion' },
        ],
        moment: 'Après le repas',
        price: 1500,
        photo: '/images/bendjo/p-citronnelle.webp',
    },
    {
        id: 'basilic',
        num: '03',
        tag: 'Sérénité',
        latin: 'Ocimum gratissimum',
        name: 'Basilic',
        tagline: 'Vert poivré, apaisant.',
        note: 'Le basilic africain donne une infusion herbacée, légèrement poivrée, qui aide à décompresser. Le rituel du soir, 30 minutes avant de dormir.',
        benefits: ['Vitamine A', 'Vitamine E', 'Vitamine C', 'Digestion facilitée'],
        format: 'Boîte de 10 sachets',
        brew: [
            { v: '1 c. à s.', l: 'pour 25 cl' },
            { v: '90 °C', l: 'température' },
            { v: '5 min', l: 'infusion' },
        ],
        moment: 'Le soir',
        price: 1500,
        photo: '/images/bendjo/p-basilic.webp',
    },
];

/** Prix du trio complet — calculé, jamais saisi à la main. */
export const packPrice = products.reduce((sum, p) => sum + p.price, 0);

/**
 * 1500 → « 1 500 ». Espace insécable : le nombre ne se coupe jamais en fin de ligne,
 * et le rendu est identique côté serveur et côté navigateur.
 */
export function formatFCFA(n: number): string {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export const WHATSAPP_BASE = 'https://wa.me/2290162014161?text=';
