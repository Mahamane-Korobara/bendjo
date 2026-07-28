# BenDjo — Prompts images · section « À propos » de la page d'accueil

La section est une mosaïque de 5 tuiles. Trois sont déjà remplies :

| Tuile | Contenu | État |
|---|---|---|
| Grande photo (col. 1, haut) | matière première / geste de préparation | **à générer → IMAGE A** |
| Carte chiffres foncée (col. 1, bas) | 2025 · ~50 entreprises | typographique, rien à générer |
| Carte texte rose (col. 2, haut) | « Deux métiers, une même exigence » | typographique, rien à générer |
| Petite photo (col. 2, bas) | séchage à l'ombre | **à générer → IMAGE B** |
| Carte verte pleine hauteur (col. 3) | visuel détouré + « Le terroir avant tout » | **à générer → IMAGE C** |

En attendant, les trois emplacements affichent des images existantes recadrées
(`corner-top.webp`, `corner-bottom.webp`, `p-hibiscus.webp`) — c'est visiblement
provisoire. Aucun visuel du hero n'est réutilisé.

**Rappel des références couleur (brief officiel, section 2) :**

```
Kraft / brun carton .... #C89B6B
Vert feuille ........... #4B7F52   (couleur principale de marque)
Rouge hibiscus ......... #D64545
Orange citronnelle ..... #E08A2E
Rose basilic ........... #E895A3
Crème / fond clair ..... #F5EFE6
Fond image .............. #FDFBF7  (crème très clair)
```

⚠️ Les deux images seront affichées en `object-fit: cover` dans une tuile aux angles
arrondis : **le sujet doit rester au centre, avec une marge de sécurité sur les bords**,
sinon le recadrage le coupera.

---

## IMAGE A — grande tuile, colonne 1

**Fichier cible : `/public/images/bendjo/about-atelier.webp`**
**Format : carré (1:1)**

```
Photographie documentaire premium, format carré, style publicitaire chaleureux.

SUJET : deux mains féminines à la peau noire, manches d'un vêtement en tissu
écru naturel, en train de trier des fleurs d'hibiscus séchées rouge profond
étalées sur un grand plateau en osier tressé. Le geste est précis, attentif,
saisi en pleine action. Autour du plateau, sur la même table en bois clair,
des brins de citronnelle liés en bottes, des feuilles de basilic fraîches,
des clous de girofle et des feuilles de laurier, disposés en petits tas
séparés comme un poste de travail organisé. Quelques sachets de tisane en
papier kraft brun clair, vides et pliés, attendent d'être remplis.

IMPORTANT : aucun texte, aucun logo, aucune lettre lisible nulle part — ni
sur les sachets, ni sur les vêtements, ni sur les contenants. Les sachets
kraft restent vierges. Visage non visible : cadrage sur les mains, le
plateau et la table. Sujet centré avec de la marge sur les quatre bords.

STYLE : naturel, artisanal, premium, terroir africain béninois, fier et
chaleureux. Sensation de savoir-faire manuel et de matière première brute.
Lumière douce et diffuse venant de la gauche, ombres portées légères, rendu
photo réaliste haute définition, mise au point nette sur les mains.

PALETTE : fond crème chaud très clair (#FDFBF7), table en bois clair, osier
naturel ; accents rouge hibiscus (#D64545) pour les fleurs, vert feuille
(#4B7F52) pour la citronnelle et le basilic, kraft (#C89B6B) pour les
sachets. Ambiance chaude, jamais froide ni bleutée.

CADRAGE : vue en légère plongée à 45°, composition centrée et équilibrée,
marge de sécurité sur les bords (l'image sera recadrée en carré dans une
tuile aux angles arrondis).

À ÉVITER : épices indiennes (curcuma en poudre, cannelle, cardamome, cumin),
plateau en laiton doré style thali indien, ambiance de marché indien, texte
ou logo lisible, gants en latex, plan de travail en inox industriel, décor
chargé. Rester 100% identité béninoise BenDjo et plantes réelles (hibiscus,
citronnelle, basilic, girofle, laurier).
```

---

## IMAGE B — petite tuile, colonne 2

**Fichier cible : `/public/images/bendjo/about-sechage.webp`**
**Format : paysage 4:3**

```
Photographie documentaire premium, format paysage 4:3, style publicitaire
chaleureux.

SUJET : des plantes en train de sécher à l'ombre, suspendues et étalées.
Au premier plan, des bottes de citronnelle verte liées par de la ficelle de
jute, pendues tête en bas à une tringle en bois. Juste derrière, sur des
claies en osier tressé superposées, des fleurs d'hibiscus rouge profond et
des feuilles de basilic étalées en couche fine. La scène est baignée d'une
lumière indirecte et douce, à l'abri du soleil direct — on doit sentir que
le séchage est lent et à l'ombre.

IMPORTANT : aucun texte, aucun logo, aucune lettre lisible nulle part.
Aucune personne visible. Sujet centré avec de la marge sur les quatre bords.

STYLE : naturel, artisanal, patient, terroir africain béninois. Atmosphère
calme et aérée, poussière de lumière dans l'air. Rendu photo réaliste haute
définition, faible profondeur de champ (les bottes de citronnelle nettes,
l'arrière-plan doucement flou).

PALETTE : fond crème chaud très clair (#FDFBF7) et bois clair ; vert feuille
(#4B7F52) dominant pour la citronnelle et le basilic, rouge hibiscus
(#D64545) en touches, kraft (#C89B6B) pour l'osier et la ficelle. Lumière
chaude, jamais froide ni bleutée.

CADRAGE : vue frontale légèrement décentrée, composition équilibrée, marge
de sécurité sur les bords (l'image sera recadrée en 4:3 dans une tuile aux
angles arrondis).

À ÉVITER : épices indiennes (curcuma en poudre, cannelle, cardamome, cumin),
plateau en laiton doré style thali indien, ambiance de marché indien, soleil
direct et ombres dures, séchoir électrique ou matériel industriel, texte ou
logo lisible. Rester 100% identité béninoise BenDjo et plantes réelles
(hibiscus, citronnelle, basilic, girofle, laurier).
```

---

## IMAGE C — carte verte pleine hauteur, colonne 3

**Fichier cible : `/public/images/bendjo/about-terroir.webp`**
**Format : carré (1:1) — sujet détouré, fond uni**

⚠️ Contrairement aux images A et B, celle-ci n'est **pas** recadrée : elle est posée
telle quelle sur un fond vert foncé, avec une ombre portée. Le fond doit donc être
parfaitement uni et clair pour être détouré proprement.

```
Photographie produit premium, format carré, style publicitaire chaleureux.

SUJET : un bouquet composé des trois plantes BenDjo réunies et liées ensemble
par une ficelle de jute naturelle, comme une gerbe posée à plat : des brins
de citronnelle verte élancés, des fleurs d'hibiscus séchées rouge profond, et
des tiges de basilic frais aux larges feuilles vertes. Quelques clous de
girofle et deux feuilles de laurier sont glissés dans le lien. La composition
est dense au centre et s'aère vers les extrémités, avec quelques éléments
détachés qui semblent flotter légèrement autour, ombres portées douces.

IMPORTANT : aucun texte, aucun logo, aucune lettre lisible, aucun emballage,
aucune boîte, aucun sachet — uniquement les plantes brutes et la ficelle.
Aucune main, aucune personne. Le sujet doit être entièrement contenu dans le
cadre avec une marge nette tout autour.

STYLE : naturel, brut, premium, terroir africain béninois, fier et chaleureux.
Sensation de récolte fraîche réunie à la main. Lumière douce et diffuse venant
du haut, ombres portées courtes, rendu photo réaliste haute définition, très
net sur toute la composition.

PALETTE : fond crème chaud très clair, uni et sans texture (#FDFBF7), sans
surface ni table visible — le sujet doit sembler posé sur du vide clair pour
un détourage facile. Accents vert feuille (#4B7F52) pour la citronnelle et
le basilic, rouge hibiscus (#D64545) pour les fleurs, kraft (#C89B6B) pour
la ficelle.

CADRAGE : vue du dessus à plat (flat lay), composition centrée et équilibrée,
marge généreuse et régulière sur les quatre bords (l'image sera détourée et
posée sur un fond vert foncé).

À ÉVITER : épices indiennes (curcuma en poudre, cannelle, cardamome, cumin),
plateau en laiton doré style thali indien, ambiance de marché indien, table
en bois ou nappe visible, ombre portée dure, texte ou logo lisible, boîte ou
sachet dans le cadre. Rester 100% identité béninoise BenDjo et plantes
réelles (hibiscus, citronnelle, basilic, girofle, laurier).
```

---

## Après génération

1. Pour l'**IMAGE C uniquement** : détourer le fond (fond transparent), puisqu'elle
   est posée sur le vert foncé. A et B gardent leur fond, elles sont recadrées.
2. Convertir en **WebP** (les images du site le sont toutes).
3. Redimensionner : **IMAGE A → 900×900**, **IMAGE B → 900×675**, **IMAGE C → 700×700**.
   Inutile d'aller au-delà, les tuiles font au maximum 380 px de large en écran retina.
4. Déposer dans `/public/images/bendjo/` :

   ```
   about-atelier.webp     (IMAGE A)
   about-sechage.webp     (IMAGE B)
   about-terroir.webp     (IMAGE C — détourée)
   ```

5. Me le dire : je remplace les trois visuels provisoires, je pose les bons
   `width`/`height` (pas de décalage au chargement) et je rédige les `alt`.
