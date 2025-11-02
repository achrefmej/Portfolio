# 📱 Portfolio Achref Mejri - Version Mobile & Desktop

Portfolio professionnel avec **version desktop** complète et **version mobile** immersive et innovante.

[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react)](https://reactjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-6.5.1-FF0055?logo=framer)](https://www.framer.com/motion/)
[![i18next](https://img.shields.io/badge/i18next-25.5.2-26A69A)](https://www.i18next.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ✨ Fonctionnalités

### 🖥️ **Version Desktop**
- Navigation moderne avec glassmorphism
- Pages : Accueil, À Propos, Projets, CV
- Animations Framer Motion
- Mode Sombre/Clair
- Multi-langues (FR/EN/AR)
- Téléchargement CV (FR/EN)

### 📱 **Version Mobile** (Nouveau !)
- **Navigation innovante** :
  - Top bar avec logo et menu hamburger
  - Bottom navigation (4 onglets)
  - Menu full screen avec paramètres
- **Toutes les fonctionnalités desktop** :
  - Pages adaptées : Hero, About, Projects, Resume, Contact
  - Typewriter effect avec traductions
  - Filtres de projets horizontaux
  - Timeline expérience/formation
  - Formulaire de contact avec validation
- **Design moderne** :
  - Glassmorphism et gradients animés
  - Animations fluides 60fps
  - Micro-interactions
- **Performance optimisée** :
  - Détection mobile avancée
  - Lazy loading
  - Code splitting

---

## 🚀 Installation

### Prérequis
- Node.js >= 14
- npm ou yarn

### Étapes

```bash
# 1. Cloner le repository
git clone https://github.com/achrefmej/Portfolio.git
cd Portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm start
```

Le site s'ouvre automatiquement sur `http://localhost:3000`

---

## 📱 Tester la Version Mobile

### Chrome DevTools (Recommandé)
1. Ouvrir Chrome DevTools : **F12**
2. Activer le mode mobile : **Ctrl+Shift+M**
3. Sélectionner un appareil : **Samsung Galaxy S20 Ultra**
4. Rafraîchir : **Ctrl+R**

### Vérifications
✅ Badge vert en haut à droite : **"📱 MOBILE"**  
✅ Navigation en haut (logo + menu) et en bas (4 onglets)  
✅ Typewriter qui écrit les titres en rotation  
✅ Toutes les pages accessibles

---

## 📂 Structure du Projet

```
Portfolio/
├── public/                          # Fichiers publics
│   ├── favicon.png
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── Assets/                      # Images, CV, etc.
│   │   ├── avatar_ach.png
│   │   ├── cv_2025_mejri_fr.pdf
│   │   ├── cv_2025_mejri_ang.pdf
│   │   └── Projects/                # Images de projets
│   ├── components/
│   │   ├── Mobile/                  # 📱 Composants Mobile
│   │   │   ├── MobileNavbar.js     # Navigation top + bottom + menu
│   │   │   ├── MobileHero.js       # Page accueil
│   │   │   ├── MobileAbout.js      # Page à propos
│   │   │   ├── MobileProjects.js   # Page projets
│   │   │   ├── MobileResume.js     # Page CV
│   │   │   ├── MobileContact.js    # Formulaire contact
│   │   │   └── MobileFooter.js     # Footer
│   │   ├── Home/                    # 🖥️ Composants Desktop Home
│   │   ├── About/                   # 🖥️ Composants Desktop About
│   │   ├── Projects/                # 🖥️ Composants Desktop Projects
│   │   ├── Resume/                  # 🖥️ Composants Desktop Resume
│   │   ├── ui/                      # Composants UI réutilisables
│   │   │   ├── MobileTypewriter.js # Effet typewriter mobile
│   │   │   ├── ThemeSwitch.js      # Switch dark/light
│   │   │   ├── LanguageSwitcher.js # Sélecteur de langue
│   │   │   └── CVDownloader.js     # Téléchargement CV
│   │   ├── Navbar.js                # Navigation desktop
│   │   └── Footer.js                # Footer desktop
│   ├── hooks/
│   │   ├── useResponsive.js         # Détection mobile/desktop
│   │   └── useMobileOptimization.js # Optimisations performance
│   ├── context/
│   │   └── ThemeContext.js          # Context pour le thème
│   ├── i18n/
│   │   ├── index.js                 # Configuration i18n
│   │   └── locales/
│   │       ├── fr.json              # Traductions français
│   │       ├── en.json              # Traductions anglais
│   │       └── ar.json              # Traductions arabe
│   ├── styles/
│   │   ├── mobile.css               # Styles mobile (800+ lignes)
│   │   ├── modern.css               # Styles modernes
│   │   └── rtl.css                  # Support RTL (arabe)
│   ├── App.js                       # Composant principal
│   └── index.js                     # Point d'entrée
├── MOBILE_FEATURES.md               # 📄 Liste complète des fonctionnalités
├── FIX_TYPEWRITER_MOBILE.md         # 📄 Correction typewriter
├── SUMMARY_MOBILE_COMPLETE.md       # 📄 Résumé complet
├── TEST_GUIDE_MOBILE.md             # 📄 Guide de test
├── FIX_SUMMARY.md                   # 📄 Résumé des corrections
└── README.md                        # 📄 Ce fichier
```

---

## 🌐 Technologies Utilisées

### Frontend
- **React 17** - Framework JavaScript
- **React Router v6** - Routing
- **Framer Motion 6.5.1** - Animations
- **Styled Components** - CSS-in-JS
- **React Icons** - Icônes

### Internationalisation
- **i18next 25.5.2** - Traductions (FR/EN/AR)
- **react-i18next** - React bindings

### Utilities
- **React Hot Toast** - Notifications
- **AOS** - Scroll animations

---

## 📱 Compatibilité Mobile

### Navigateurs
✅ Chrome Mobile (Android)  
✅ Safari iOS  
✅ Firefox Mobile  
✅ Samsung Internet  
✅ Opera Mobile

### Appareils Testés
✅ iPhone SE (375px)  
✅ iPhone 12/13/14 (390px)  
✅ iPhone 14 Plus (428px)  
✅ Samsung Galaxy S20 Ultra (412px)  
✅ Google Pixel (411px)  
✅ iPad Mini (768px)

### Systèmes
✅ iOS 13+  
✅ Android 8+  
✅ iPadOS 13+

---

## 🎨 Personnalisation

### Changer les Couleurs
Modifier les variables CSS dans `src/styles/modern.css` :

```css
:root {
  --primary-500: #a855f7;  /* Violet */
  --accent-cyan: #06b6d4;  /* Cyan */
  --accent-rose: #f43f5e;  /* Rose */
}
```

### Modifier les Traductions
Éditer les fichiers dans `src/i18n/locales/` :
- `fr.json` - Français
- `en.json` - Anglais
- `ar.json` - Arabe

### Ajouter une Langue
1. Créer `src/i18n/locales/[code].json`
2. Ajouter la langue dans `src/i18n/index.js`
3. Ajouter l'option dans `LanguageSwitcher.js`

---

## 📄 Scripts Disponibles

```bash
# Démarrer le serveur de développement
npm start

# Build pour la production
npm run build

# Lancer les tests
npm test

# Éjecter la configuration (irreversible)
npm run eject
```

---

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Déployer le dossier build/
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Ajouter dans package.json:
# "homepage": "https://[username].github.io/[repo]"
npm run build
npm run deploy
```

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| **MOBILE_FEATURES.md** | Liste complète des fonctionnalités mobile |
| **FIX_TYPEWRITER_MOBILE.md** | Détails de la correction du typewriter |
| **SUMMARY_MOBILE_COMPLETE.md** | Résumé complet du projet mobile (3,400+ lignes) |
| **TEST_GUIDE_MOBILE.md** | Guide de test étape par étape |
| **FIX_SUMMARY.md** | Résumé concis des corrections |

---

## 🐛 Problèmes Connus & Solutions

### Le site affiche la version desktop sur mobile
**Solution :**
1. Vérifier que DevTools est en mode mobile (Ctrl+Shift+M)
2. Rafraîchir avec Ctrl+Shift+R (hard refresh)
3. Vider le cache : `localStorage.clear()` dans la console

### Typewriter ne s'affiche pas
**Solution :**
1. Vérifier la console pour des erreurs
2. Vérifier que les traductions sont chargées
3. Rafraîchir la page

### Menu hamburger ne s'ouvre pas
**Solution :**
1. Vérifier la console pour des erreurs
2. Cliquer plusieurs fois
3. Rafraîchir la page

---

## 📈 Performance

### Métriques Lighthouse
- **Performance** : > 90
- **Accessibility** : > 90
- **Best Practices** : > 90
- **SEO** : > 90

### Optimisations
✅ Lazy loading des images  
✅ Code splitting par route  
✅ Minification CSS/JS  
✅ Caching agressif  
✅ Animations GPU-accelerated

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 👤 Auteur

**Achref Mejri**

- Portfolio : [https://achrefmejri.com](https://achrefmejri.com)
- GitHub : [@achrefmej](https://github.com/achrefmej)
- LinkedIn : [Achref Mejri](https://www.linkedin.com/in/achref-mejri-53061425b/)
- Email : achref.mejri@example.com

---

## 🙏 Remerciements

- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [i18next](https://www.i18next.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Styled Components](https://styled-components.com/)

---

## 📊 Stats du Projet

- **3,400+ lignes** de code mobile
- **50+ pages** de documentation
- **3 langues** supportées
- **15+ composants** mobiles
- **100% responsive**

---

**Développé avec ❤️ par Achref Mejri**  
*Version 1.0 - Octobre 2025*