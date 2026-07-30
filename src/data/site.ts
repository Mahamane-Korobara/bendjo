/**
 * Coordonnées et comptes officiels BenDjo.
 * Source unique : header, footer, page contact et page à propos lisent ici.
 */

export const PHONE_DISPLAY = '+229 01 62 01 41 61';
export const PHONE_TEL = '+2290162014161';
export const WA_NUMBER = '2290162014161';
export const EMAIL = 'bendjobenin@gmail.com';
export const CITY = 'Cotonou, Bénin';
export const FOUNDED = 2025;

export const wa = (text: string) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export interface Social {
    label: string;
    handle: string;
    /** laisser vide tant que l'URL n'est pas confirmée : l'entrée est alors masquée */
    href: string;
    icon: string;
}

const ICONS = {
    facebook:
        'M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6A19 19 0 0 0 14.7 2.5c-2.4 0-4 1.5-4 4.2v1.8H8V12h2.7v9.5H14V12h2.6l.4-3.5H14Z',
    linkedin:
        'M4.5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 9h3v12H3V9Zm6 0h2.9v1.7h.05a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.65 2 3.65 4.7V21h-3v-5.5c0-1.3 0-3-1.85-3s-2.1 1.4-2.1 2.9V21H9V9Z',
    tiktok:
        'M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1 0-5.18c.27 0 .52.04.77.12v-3.2a5.9 5.9 0 0 0-.77-.05A5.72 5.72 0 0 0 4.14 15.3a5.72 5.72 0 0 0 5.72 5.7 5.72 5.72 0 0 0 5.72-5.7V9.01a7.35 7.35 0 0 0 4.28 1.37V7.3a4.29 4.29 0 0 1-3.26-1.48Z',
};

export const SOCIALS: Social[] = [
    {
        label: 'Facebook',
        handle: 'BenDjoBenin',
        href: 'https://facebook.com/BenDjoBenin',
        icon: ICONS.facebook,
    },
    {
        label: 'LinkedIn',
        handle: 'company/bendjo',
        href: 'https://linkedin.com/company/bendjo',
        icon: ICONS.linkedin,
    },
    {
        // TODO — en attente de l'URL exacte communiquée par BenDjo
        label: 'TikTok',
        handle: '',
        href: '',
        icon: ICONS.tiktok,
    },
];

/** Seuls les comptes dont l'URL est confirmée sont affichés. */
export const ACTIVE_SOCIALS = SOCIALS.filter((s) => s.href !== '');

export const NAV = [
    { num: '01', label: 'Accueil', href: '/' },
    { num: '02', label: 'À propos', href: '/a-propos' },
    { num: '03', label: 'Services', href: '/services' },
    { num: '04', label: 'Nos infusions', href: '/nos-infusions' },
    { num: '05', label: 'Contact', href: '/contact' },
];
