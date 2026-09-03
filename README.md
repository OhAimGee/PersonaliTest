# 🧠 PersonaliTest

**PersonaliTest** est une application web statique proposant trois tests de personnalité complémentaires — **MBTI**, **Big Five (OCEAN)** et **Ennéagramme** — pour une compréhension approfondie de son propre profil psychologique.

Le site fonctionne **entièrement en local, sans serveur** : il suffit d'ouvrir `index.html` dans un navigateur. Aucune donnée personnelle n'est envoyée où que ce soit.

## ✨ Fonctionnalités

- **3 tests complémentaires** (~25 min au total) :
  - 🧩 **MBTI** – 16 profils de personnalité sur 4 dimensions (40 questions, format A/B, ~8 min)
  - 📊 **Big Five (OCEAN)** – Ouverture, Conscience, Extraversion, Agréabilité, Neuroticisme (50 questions)
  - ⭕ **Ennéagramme** – 9 types de personnalité (45 questions)
- **Sauvegarde automatique locale** : la progression est stockée dans le `localStorage` du navigateur, permettant de **reprendre** le test là où on l'a laissé.
- **Résultats détaillés** : synthèse combinée des 3 tests, interprétation personnalisée pour chaque dimension.
- **Export PDF** des résultats via l'impression navigateur (mise en page dédiée `@media print`).
- **Thème clair / sombre**.
- **100% local et confidentiel** : aucune donnée n'est transmise à un serveur.

## 🗂️ Structure du projet

```
PersonaliTest/
├── index.html                          # Point d'entrée de l'application
├── styles/                             # Feuilles de style (dont styles d'impression)
├── scripts/
│   ├── main.js                         # Logique principale / navigation entre écrans
│   ├── ui.js                           # Gestion de l'interface, thèmes, progression
│   ├── tests/                          # Un module par test
│   │   ├── mbti.js
│   │   ├── bigfive.js
│   │   └── enneagramme.js
│   ├── scoring/                        # Calcul des scores par test
│   │   ├── mbtiScoring.js
│   │   ├── bigfiveScoring.js
│   │   └── enneagrammeScoring.js
│   └── interpretation/                 # Génération des interprétations et de la synthèse
│       ├── mbtiInterpretation.js
│       ├── bigfiveInterpretation.js
│       ├── enneagrammeInterpretation.js
│       └── synthese.js
└── assets/
    └── data/                           # Banques de questions (MBTI, Big Five, Ennéagramme)
```

## 🚀 Utilisation

1. Téléchargez ou clonez ce dépôt.
2. Ouvrez le fichier `index.html` dans votre navigateur (Chrome, Firefox, Edge ou Safari).
3. Renseignez votre prénom et nom, puis cliquez sur **Commencer les tests**.
4. Enchaînez les 3 tests (MBTI → Big Five → Ennéagramme). Votre progression est sauvegardée automatiquement : vous pouvez fermer l'onglet et reprendre plus tard via **Reprendre**.
5. Consultez la synthèse de votre profil de personnalité et exportez-la en PDF si besoin.

## 🛠️ Stack technique

- **HTML5 / CSS3**
- **JavaScript vanilla** (aucun framework, aucune dépendance externe)
- **Web Storage API** (`localStorage`) pour la persistance locale
- **`window.print()`** + CSS `@media print` / `@page` pour l'export PDF

## 👤 Auteur

Développé par **Raphaël Legros**.

- LinkedIn : [Raphaël Legros](https://www.linkedin.com/in/raphaellegros51/)
