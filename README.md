# BenDjo — site vitrine

Site de **BenDjo**, marque béninoise de produits alimentaires fondée en 2025 à Cotonou :
infusions du terroir (hibiscus, citronnelle, basilic), petit-déjeuner livré en entreprise
et service traiteur.

_« La marque qui vous reconnecte à vos origines. »_

---

## Sommaire

- [Stack et parti pris](#stack-et-parti-pris)
- [Démarrer](#démarrer)
- [Structure](#structure)
- [Où vivent les données](#où-vivent-les-données)
- [Le parcours de commande](#le-parcours-de-commande)
- [Système de design](#système-de-design)
- [Images](#images)
- [Accessibilité](#accessibilité)
- [Déploiement](#déploiement)
- [En attente côté BenDjo](#en-attente-côté-bendjo)

---

## Stack et parti pris

|                 |                                                             |
| --------------- | ----------------------------------------------------------- |
| **Framework**   | [Astro 7](https://docs.astro.build) — sortie 100 % statique |
| **Dépendances** | `astro`, `@astrojs/sitemap`. C'est tout.                    |
| **Styles**      | CSS natif, un seul fichier (`src/styles/global.css`)        |
| **JavaScript**  | ~3 Ko en ligne, aucun framework client                      |
| **Node**        | ≥ 22.12 (imposé par Astro 7)                                |

Trois principes structurent le code :

1. **Aucun framework côté client.** Le site est un ensemble de pages statiques. Le seul
   JavaScript est celui du panier et du menu — écrit à la main, sans dépendance.
2. **Amélioration progressive.** Le menu, le panier et le formulaire de contact
   fonctionnent tous sans JavaScript, avec un comportement de repli documenté à chaque
   fois dans le code.
3. **Une seule source pour chaque donnée.** Prix, numéro WhatsApp, coordonnées, contenu
   des produits : tout vit dans `src/data/`, jamais en dur dans une page.

---

## Démarrer

```sh
npm install
npm run dev        # http://localhost:4321
```

| Commande          | Effet                                          |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Serveur de développement, rechargement à chaud |
| `npm run build`   | Génère le site statique dans `dist/`           |
| `npm run preview` | Sert `dist/` en local, tel qu'il sera déployé  |

> **Note :** si Node est en dessous de 22.12, le build échoue. `node -v` pour vérifier.

---

## Structure

```
src/
├── data/                    ← la source de vérité, voir plus bas
│   ├── core.ts              ← primitives partagées serveur ET client
│   ├── products.ts          ← les 3 infusions
│   └── site.ts              ← coordonnées, réseaux, navigation
├── layouts/
│   └── Layout.astro         ← <head>, métadonnées, footer, panier
├── components/
│   ├── Header.astro         ← nav + menu mobile + icône panier
│   ├── Footer.astro
│   ├── CartDrawer.astro     ← tiroir panier (présent sur toutes les pages)
│   ├── Reassurance.astro    ← bandeau à 3 arguments, 3 variantes
│   └── icons/WhatsApp.astro
├── pages/                   ← une page = une route
│   ├── index.astro          ← /
│   ├── a-propos.astro       ← /a-propos
│   ├── services.astro       ← /services
│   ├── nos-infusions.astro  ← /nos-infusions   (le catalogue)
│   └── contact.astro        ← /contact
└── styles/
    └── global.css           ← tout le CSS, découpé par bandeaux de commentaires

public/                      ← servi tel quel à la racine du domaine
├── favicon.ico, apple-touch-icon.png, icon-512.png
├── robots.txt
└── images/bendjo/           ← toutes les images du site
```

---

## Où vivent les données

C'est le point le plus important pour intervenir sur le site. **Rien ne doit être écrit
en dur dans une page.**

### `src/data/core.ts`

Module volontairement minuscule et sans import : c'est **le seul que le script du panier
charge côté client**. Tout ce qui y vit part dans le navigateur — donc aucune donnée
éditoriale, aucun tracé SVG.

```ts
WA_NUMBER; // '2290162014161'
wa(texte); // → https://wa.me/…?text=… (message encodé)
formatFCFA(1500); // → '1 500'  (espace insécable)
```

### `src/data/site.ts`

Coordonnées, réseaux sociaux, navigation. Réexporte `WA_NUMBER` et `wa()` depuis `core`,
pour que les composants n'aient qu'une adresse à connaître.

```ts
(PHONE_DISPLAY, PHONE_TEL, EMAIL, CITY, CITY_SHORT);
SOCIALS; // Facebook, LinkedIn, TikTok
ACTIVE_SOCIALS; // uniquement ceux dont l'URL est renseignée
NAV; // les 5 entrées du menu
```

> Un réseau dont le `href` est vide est **automatiquement masqué** partout (footer,
> contact, à propos). C'est le cas de TikTok aujourd'hui : renseigner l'URL suffit à
> le faire apparaître, sans toucher au balisage.

### `src/data/products.ts`

Les trois infusions, avec pour chacune : identifiant, nom latin, accroche, description,
bienfaits, conditionnement, mode de préparation, moment de la journée, prix, photo, et
une mention de précaution optionnelle (seul l'hibiscus en a une).

```ts
products; // le tableau
packPrice; // somme des trois — calculée, jamais saisie
```

**Changer un prix se fait à un seul endroit.** Il se répercute sur le catalogue, le
panier, le pack, le footer, la FAQ et le bandeau de réassurance. Les pages qui
affirment « le même prix pour les trois » vérifient d'abord que c'est vrai.

---

## Le parcours de commande

Il n'y a **ni paiement en ligne, ni base de données**. Tout converge vers WhatsApp.

```
Catalogue ──[Ajouter au panier]──▶ Tiroir panier ──[Commander]──▶ WhatsApp
                                   (localStorage)                 message pré-rempli
```

- Le panier vit dans `localStorage`, sous la clé `bendjo-cart`.
- Il est **synchronisé entre les onglets ouverts** (événement `storage`).
- À la lecture, les entrées inconnues et les quantités invalides sont écartées.
- Le compteur de la navigation reflète le total, sur toutes les pages.
- Sans JavaScript, l'icône panier reste un lien vers le catalogue.

### L'attribut `data-wa-generic`

Point de vigilance. Quand le panier n'est pas vide, le script **réécrit le message** de
tout lien portant `data-wa-generic` pour y mettre le récapitulatif de commande.

| Mettre `data-wa-generic`                                                                             | Ne PAS le mettre                                                                               |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Liens **de commande** : « Commander sur WhatsApp » du hero, de la nav, du footer, du bloc de clôture | Liens **de conversation** : « Nous écrire », « J'ai une question », « Demander pour ma ville » |

Si on l'ajoute par erreur sur un lien de contact, un visiteur qui demande _si vous livrez
chez lui_ enverra un bon de commande à la place.

---

## Système de design

### Ruptures responsives

Deux paliers, et deux seulement, pour l'essentiel du site :

| Palier      | Ce qui bascule                                                   |
| ----------- | ---------------------------------------------------------------- |
| **1000 px** | Menu burger, colonnes → une seule, bandeau de réassurance empilé |
| **680 px**  | Derniers resserrements (typographie, marges, wordmark)           |

Trois paliers locaux subsistent (1440, 560, 480) : ce sont des ajustements ponctuels,
commentés comme tels dans le CSS. Ne pas en ajouter d'autres sans raison.

### Couleurs

Les variables globales sont en tête de `global.css` :

```css
--bg        #FAF0E2   crème de fond
--title     #4A2C18   brun des titres
--accent    #E8912D   safran des accents
--green     #4B7F52   vert de marque
--green-ink #3C6A43   vert foncé (contraste AA sur crème)
--muted     #6B5A4A   gris chaud du texte secondaire
```

Chaque produit et chaque service porte un **accent** décliné en trois teintes, déclaré
une seule fois :

```css
--pal-rouge-*   hibiscus, infusions
--pal-ambre-*   citronnelle, petit-déjeuner
--pal-rose-*    basilic
--pal-vert-*    traiteur
```

Une classe comme `.plant-hibiscus` ou `.jump-traiteur` mappe ces variables vers
`--c-bg`, `--c-soft` et `--c-ink`, que tout le reste du CSS consomme.

### Typographie

`Fraunces` (titres) et `Inter` (corps), servies par [Bunny Fonts](https://fonts.bunny.net)
— sans cookie, contrairement à Google Fonts. Chargement non bloquant, avec un repli
`<noscript>`.

---

## Images

Toutes dans `public/images/bendjo/`, en **WebP**.

**Trois règles :**

1. **Toujours** renseigner `width` et `height` sur les `<img>`, avec le vrai ratio du
   fichier. C'est ce qui évite les décalages de mise en page au chargement.
2. Compresser avant d'ajouter. Repère : **~100 Ko** pour une photo pleine largeur.
   Trois images sont arrivées à 1,5 Mo chacune, pour un rendu identique à 100 Ko.
3. Une image purement décorative masquée en mobile doit passer par le **CSS**
   (`background-image` dans une media query), pas par une balise `<img>` en
   `display: none` — le navigateur la télécharge quand même.

```sh
# Recompression type
python3 -c "
from PIL import Image
im = Image.open('photo.webp'); im.thumbnail((1200, 1200), Image.LANCZOS)
im.save('photo.webp', 'WEBP', quality=82, method=6)"
```

L'image de partage (`og-cover.webp`, 1200×630) est celle qui s'affiche quand un lien du
site est envoyé sur WhatsApp ou LinkedIn.

---

## Accessibilité

Ce qui est en place et ne doit pas régresser :

- **Lien d'évitement** en tête de chaque page (premier `Tab`).
- **Menu mobile pilotable au clavier** : c'est la case à cocher qui porte le focus et
  s'active à la barre d'espace ; les deux `<label>` ne sont que sa représentation
  visuelle, d'où leur `aria-hidden`. La passer en `display: none` la sortirait de
  l'ordre de tabulation et rendrait le menu inouvrable.
- **`inert`** sur l'arrière-plan quand le menu ou le panier est ouvert.
- **Anneau de focus** sur tout élément actionnable, avec une variante ambre sur les
  fonds sombres.
- **`prefers-reduced-motion`** respecté : les animations sont coupées, et les éléments
  qu'elles faisaient apparaître sont rendus visibles d'emblée.
- Aucun contenu en mouvement automatique.
- Page active signalée par `aria-current="page"`, en desktop comme en mobile.

---

## Déploiement

Cible : **Vercel**, en site statique. `vercel.json` définit déjà les en-têtes :

- Politique de sécurité de contenu (CSP) complète
- `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
- Cache immuable d'un an sur `/images/*`

Le domaine de production est déclaré dans `astro.config.mjs` (`site`). Il sert de base
aux URL canoniques, aux métadonnées de partage et au sitemap — **le changer met les
trois à jour**.

```sh
npm run build     # → dist/
```

---

## En attente côté BenDjo

| Sujet                     | État                                                                                                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| URL TikTok                | L'entrée est prête dans `site.ts`, masquée tant que `href` est vide                                                                                            |
| Prix de 1 500 FCFA        | À confirmer — le brief demandait explicitement validation                                                                                                      |
| Modes de préparation      | Doses, températures et durées ont été rédigés faute de source ; à valider                                                                                      |
| Bienfaits du packaging    | « Enzymes digestives » et les mentions de vitamine E reprennent l'emballage, mais ne résistent pas à une vérification scientifique. À arbitrer avec la marque. |
| Parcours de Bénédite Lovi | Non communiqué ; rien n'a été inventé                                                                                                                          |
