

# Refonte des couleurs : fond blanc, texte noir, touches de couleur

## Objectif
Passer du theme sombre actuel ("Terre et Mystere") a un theme clair avec :
- Fond blanc
- Texte noir
- Des touches de couleur attrayantes (orange dore, ambre, rouge terre) pour les boutons, titres et accents

## Fichiers concernes (14 fichiers)

### 1. Variables CSS - `src/index.css`
Le coeur du changement. Toutes les variables CSS seront reecrites pour un theme clair :
- `--background` : blanc pur (0 0% 100%)
- `--foreground` : noir/gris tres fonce (0 0% 10%)
- `--card` : gris tres clair pour les cartes
- `--muted` : gris clair pour les zones secondaires
- `--border` : gris clair pour les bordures
- Les couleurs d'accent (sunset-orange, golden-amber, earth-red) sont conservees pour donner de la vie au site
- `--primary` et `--accent` restent dans les tons chauds (orange/ambre)
- Suppression du bloc `.dark` devenu inutile

### 2. Animations Tailwind - `tailwind.config.ts`
- Mise a jour des animations `glow` pour qu'elles soient visibles sur fond blanc (ombres plus subtiles)

### 3. Boutons - `src/components/ui/button.tsx`
- Variante `mystical` : garder le degrade orange/rouge avec texte blanc
- Variante `spiritual` : adapter pour fond clair (bordure coloree, fond transparent, texte sombre)

### 4. Header - `src/components/Header.tsx`
- Fond blanc semi-transparent avec backdrop-blur
- Liens en noir, hover en orange
- Logo degrade orange/ambre conserve

### 5. Hero - `src/components/Hero.tsx`
- Fond blanc
- Sous-titre en gris fonce au lieu de `desert-sand`
- Statistiques en couleur d'accent conservees

### 6. Services - `src/components/Services.tsx`
- Cartes sur fond blanc/gris tres clair
- Titres en couleur d'accent
- Points de liste en orange

### 7. Temoignages - `src/components/Testimonials.tsx`
- Cartes sur fond blanc
- Etoiles dorees conservees
- Badges en orange clair

### 8. Contact - `src/components/Contact.tsx`
- Formulaire sur fond blanc avec bordures grises
- Champs de saisie avec bordures claires
- Icones colorees conservees

### 9. Footer - `src/components/Footer.tsx`
- Le footer reste sombre (fond fonce) pour le contraste
- Texte blanc/gris clair
- Accents orange conserves

### 10. Page Merci - `src/pages/ThankYou.tsx`
- Fond blanc, texte noir
- Accents colores conserves

### 11-13. Pages legales - `src/pages/MentionsLegales.tsx`, `Confidentialite.tsx`, `CGV.tsx`
- Suppression de `prose-invert` (passage en prose clair)
- Titres en couleur d'accent
- Texte en gris fonce

### 14. Admin Dashboard - `src/components/admin/AdminDashboard.tsx`
- Adaptation automatique via les variables CSS (pas de changement de code necessaire)

## Details techniques

Les changements principaux sont concentres dans `src/index.css` (variables CSS). La plupart des composants utilisent les classes Tailwind semantiques (`bg-background`, `text-foreground`, `bg-card`, etc.) qui s'adapteront automatiquement.

Les references directes aux couleurs custom (`text-golden-amber`, `text-sunset-orange`, `border-earth-red`, etc.) seront conservees car ces couleurs d'accent restent dans la palette.

Le footer conservera un fond sombre pour creer un beau contraste en bas de page.

