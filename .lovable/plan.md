

## Repenser la section Services : images + texte

### Objectif
Remplacer les icones rondes par des images de rituels fournies par l'utilisateur, et adapter la mise en page des cartes pour mettre en valeur ces images.

### Nouvelle mise en page des cartes

Chaque carte de service passera d'un format "icone ronde + texte centre" a un format "image en haut + texte en dessous" :

```text
+---------------------------+
|                           |
|     [Image du rituel]     |
|     (aspect-ratio 4:3,    |
|      coins arrondis)      |
|                           |
+---------------------------+
|  Titre du service         |
|  Description              |
|  - Feature 1              |
|  - Feature 2              |
|  - Feature 3              |
|  [Bouton Consulter]       |
+---------------------------+
```

La grille reste 1 colonne sur mobile, 2 sur tablette, 3 sur desktop.

### Modifications

**1. Copier l'image fournie dans le projet**
- Copier `user-uploads://Retour….jpeg` vers `src/assets/service-retour-aime.jpeg`

**2. Modifier `src/components/Services.tsx`**
- Ajouter un champ `image` dans chaque objet du tableau `services`
- Pour "Retour de l'Etre Aime" : utiliser l'image fournie (import depuis `@/assets/service-retour-aime.jpeg`)
- Pour les 5 autres services : utiliser une image placeholder temporaire (`/placeholder.svg`) en attendant que l'utilisateur fournisse les photos
- Remplacer le bloc icone ronde par un composant `<img>` avec :
  - `aspect-ratio` via la classe Tailwind `aspect-[4/3]`
  - `object-cover` pour un recadrage propre
  - Coins arrondis en haut de la carte (`rounded-t-lg`)
- Retirer le padding du `CardHeader` en haut pour que l'image soit bord a bord
- Conserver le reste du contenu (titre, description, features, bouton)

### Ce qui ne change pas
- Le contenu textuel (titres, descriptions, features)
- La logique de reservation (BookingModal)
- Les animations hover sur les cartes
- La grille responsive

### Prochaines etapes (apres validation)
L'utilisateur pourra fournir les images pour les 5 autres services et elles seront integrees de la meme maniere.

