# Portfolio Personnel - Stanislas Delannoy

Site web personnel pour présenter mes projets de développement et compétences techniques.

## 🚀 Aperçu

Ce portfolio présente mes projets de développement, compétences techniques et informations de contact de manière moderne et professionnelle.

## ✨ Fonctionnalités

- **Design responsive** - Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Navigation fluide** - Menu de navigation avec ancres et scroll smooth
- **Sections interactives** :
  - Présentation personnelle avec animation de typage
  - Galerie de projets avec descriptions et technologies utilisées
  - Formulaire de contact fonctionnel
  - Section compétences avec icônes
- **Animations CSS** - Effets visuels et transitions fluides
- **Performance optimisée** - Code léger et chargement rapide

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS et Flexbox/Grid
- **JavaScript ES6** - Interactivité et animations
- **Font Awesome** - Icônes vectorielles
- **Google Fonts** - Typographie (Inter)

## 📁 Structure du projet

```
portfollio/
├── index.html          # Page principale
├── styles.css          # Feuilles de style
├── script.js           # Scripts JavaScript
├── README.md          # Documentation
└── .gitignore         # Fichiers à ignorer par Git
```

## 🚀 Installation et utilisation

### Méthode 1: Déploiement direct
1. Clonez le repository
```bash
git clone https://github.com/stanislasdelannoy/portfollio.git
cd portfollio
```

2. Ouvrez `index.html` dans votre navigateur

### Méthode 2: Serveur local (recommandé)
1. Utilisez un serveur local pour éviter les problèmes de CORS :
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (npx)
npx serve .

# Avec PHP
php -S localhost:8000
```

2. Ouvrez http://localhost:8000 dans votre navigateur

## 📱 GitHub Pages

Ce site est configuré pour être déployé automatiquement sur GitHub Pages :

1. Allez dans les paramètres du repository
2. Section "Pages" 
3. Source : "Deploy from a branch"
4. Branch : "main" / folder : "/ (root)"
5. Le site sera accessible à : `https://stanislasdelannoy.github.io/portfollio`

## 🎨 Personnalisation

### Modifier les informations personnelles
- Éditez `index.html` pour changer le contenu des sections
- Modifiez les liens vers vos réseaux sociaux dans `script.js`
- Ajoutez vos projets dans la section projets

### Modifier le design
- Variables CSS dans `styles.css` (ligne 8-18) pour les couleurs
- Polices dans les imports Google Fonts (HTML ligne 8)
- Animations et transitions dans `styles.css`

### Ajouter des projets
Dupliquez ce bloc dans la section projets :
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-code"></i>
    </div>
    <div class="project-content">
        <h3>Nom du projet</h3>
        <p>Description du projet...</p>
        <div class="project-tech">
            <span class="tech-tag">Technologie 1</span>
            <span class="tech-tag">Technologie 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn btn-sm">Code</a>
            <a href="#" class="btn btn-sm btn-secondary">Demo</a>
        </div>
    </div>
</div>
```

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter via le formulaire sur le site ou directement par email.

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

💡 **Conseil** : Personnalisez ce portfolio selon vos besoins et n'hésitez pas à ajouter vos propres projets et expériences !