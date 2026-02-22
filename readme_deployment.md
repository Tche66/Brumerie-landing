# 🍺 Brumerie - Landing Page MVP

Landing page pour la plateforme Brumerie de social commerce sécurisé en Afrique.

## ✨ Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Formulaire de contact avec Formspree (xkovnoqy)
- ✅ Boutons de contact direct (WhatsApp et Email)
- ✅ Animations fluides avec Framer Motion
- ✅ Optimisé pour mobile

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build
```

## 📦 Déploiement

### Option 1 : Netlify (Gratuit)
1. Allez sur netlify.com
2. Connectez votre compte GitHub
3. Importez ce projet
4. Déployez !

### Option 2 : Vercel (Gratuit - Recommandé)
1. Allez sur vercel.com
2. Créez un compte
3. Cliquez sur "Add New Project"
4. Importez ce dossier
5. Déployez !

## 📧 Configuration

### Formulaire de contact
Le formulaire utilise Formspree avec l'ID : `xkovnoqy`
- Les soumissions arrivent directement par email
- Limite gratuite : 50 soumissions/mois

### Contacts directs
- **WhatsApp**: +225 55 65 41 867
- **Email**: brumerieciv.email@gmail.com

Pour modifier ces informations, éditez le fichier :
`src/app/components/ContactForm.tsx`

## 🎨 Structure du projet

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── LiveShopping.tsx
│   │   ├── TrustFeatures.tsx
│   │   ├── MobileMoneySection.tsx
│   │   ├── ContactForm.tsx  ← NOUVEAU !
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   └── App.tsx
└── styles/
```

## 🔧 Modifications importantes

### Formulaire ajouté
- Nouveau composant `ContactForm.tsx` avec validation
- Intégré entre `MobileMoneySection` et `CTASection`
- ID `#contact-form` pour le scroll automatique

### Boutons modifiés
- Hero : "Rejoindre le MVP" et "Devenir vendeur" → scrollent vers le formulaire
- CTA Section : "Rejoindre Brumerie" et "Je m'inscris" → scrollent vers le formulaire

### Supprimé
- Boutons "App Store" et "Google Play" (pas encore nécessaires pour MVP)

## 📱 Contact

Pour toute question sur le projet Brumerie :
- WhatsApp Business : +225 55 65 41 867
- Email : brumerieciv.email@gmail.com

---

**Développé pour Brumerie - Social Commerce Sécurisé d'Afrique** 🍺
