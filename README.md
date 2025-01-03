# 🎬 Movie Manager - Application de Gestion de Films

## 📝 Description du Projet

Movie Manager est une application web moderne développée avec React qui permet aux utilisateurs de découvrir, rechercher et gérer des films. L'application utilise l'API TMDb (The Movie Database) pour fournir des données actualisées sur les films.

🌐 **Demo en ligne**: [Movie Manager App](https://bhwayjoo.github.io/badr_react/)

## 🚀 Fonctionnalités Principales

### 1. Page d'Accueil (/)
- Affichage des films populaires en temps réel
- Interface responsive avec grille de films
- Affichage des posters, titres, années et notes
- Animation au survol avec synopsis

### 2. Recherche de Films (/recherche)
- Barre de recherche intuitive
- Résultats en temps réel
- Filtrage par titre
- Affichage des résultats dans une grille responsive

### 3. Ajout de Films (/ajouter)
- Formulaire d'ajout de film
- Validation des champs
- Champs obligatoires et optionnels
- Interface utilisateur intuitive

### 4. Détails des Films (/film/:id)
- Vue détaillée des informations du film
- Affichage du poster en grand format
- Informations complètes (synopsis, date, durée, genres)
- Design responsive et adaptatif

## 🛠️ Technologies Utilisées

- **Frontend Framework**: React.js avec Vite
- **Router**: React Router v6
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **API**: TMDb (The Movie Database)
- **Déploiement**: GitHub Pages

## 📱 Responsive Design

L'application est entièrement responsive et optimisée pour :
- 📱 Smartphones
- 📱 Tablettes
- 💻 Ordinateurs de bureau
- 🖥️ Grands écrans

## 🎨 Design et UI/UX

### Thème de Couleurs
- Couleurs principales : Ambre et Brun
- Palette harmonieuse et chaleureuse
- Contraste optimal pour la lisibilité
- Transitions et animations fluides

### Composants UI
- Navigation responsive avec menu hamburger
- Cartes de films interactives
- Formulaires optimisés pour mobile
- Messages d'état (loading, erreur, succès)

## 📂 Structure du Projet

```
movie-manager/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Search.jsx
│   │   ├── AddMovie.jsx
│   │   └── MovieDetails.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
├── public/
└── package.json
```

## 🚀 Installation et Démarrage

1. **Cloner le repository**
   ```bash
   git clone https://github.com/bhwayjoo/badr_react.git
   cd movie-manager
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer l'application en mode développement**
   ```bash
   npm run dev
   ```

4. **Construire pour la production**
   ```bash
   npm run build
   ```

## 🔑 Configuration de l'API

L'application utilise l'API TMDb. Pour la faire fonctionner :
1. Créez un compte sur [TMDb](https://www.themoviedb.org/)
2. Obtenez une clé API
3. Configurez la clé dans `src/services/api.js`

## 📱 Captures d'écran

### Vue Mobile
- Navigation mobile avec menu hamburger
- Interface adaptée aux petits écrans
- Boutons et éléments tactiles optimisés

### Vue Desktop
- Layout optimisé pour grands écrans
- Grille de films responsive
- Navigation horizontale complète

## 🔄 Mises à jour futures envisagées

- [ ] Système d'authentification
- [ ] Liste de favoris
- [ ] Notation des films
- [ ] Commentaires utilisateurs
- [ ] Mode hors ligne
- [ ] Support multilingue

## 👨‍💻 Développement

Ce projet a été développé dans le cadre d'une évaluation des compétences en React JS, mettant l'accent sur :
- La maîtrise des concepts React
- La gestion d'état
- Le routing
- L'intégration d'API
- Le responsive design
- Les bonnes pratiques de développement

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🤝 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou à me contacter directement.
