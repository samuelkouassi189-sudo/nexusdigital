# 🚀 Mettre Maison Lumière en ligne sur TON Vercel (guide débutant)

Pas besoin d'être développeur. Suis les étapes dans l'ordre, comme une recette.
Tu vas faire : **GitHub** (pour héberger le code) puis **Vercel** (pour le site).
Tout se fait avec des clics dans le navigateur. ⏱️ ~10 minutes.

---

## PARTIE 1 — Mettre le code sur GitHub (sans terminal)

### 1. Crée un compte GitHub (gratuit)
- Va sur **https://github.com** → clique **Sign up**
- Choisis un identifiant, un email, un mot de passe. C'est gratuit.

### 2. Crée un "dépôt" (un dossier en ligne pour ton code)
- En haut à droite, clique le **+** → **New repository**
- **Repository name** : `maison-lumiere`
- Laisse en **Public** (ou Private, au choix)
- Clique **Create repository**

### 3. Envoie les fichiers du projet
Sur la page du dépôt vide, clique le lien :
**"uploading an existing file"** (ou bouton **Add file → Upload files**).

- Fais glisser **TOUS les fichiers du projet** dans la fenêtre
  (le dossier `src`, `public`, `index.html`, `package.json`, `vercel.json`, etc.)
- ⚠️ **N'envoie PAS** les dossiers `node_modules` ni `dist` (inutiles, trop lourds).
- En bas, clique **Commit changes**.

✅ Ton code est maintenant sur GitHub !

---

## PARTIE 2 — Connecter Vercel à GitHub

### 4. Crée un compte Vercel (gratuit)
- Va sur **https://vercel.com** → **Sign Up**
- Choisis **"Continue with GitHub"** (le plus simple : ça relie tout)
- Autorise Vercel à accéder à GitHub.

### 5. Importe ton projet
- Sur Vercel, clique **Add New… → Project**
- Tu vois la liste de tes dépôts GitHub → trouve **maison-lumiere** → clique **Import**

### 6. Déploie
- Vercel détecte tout seul que c'est un projet **Vite** ✅
- Ne touche à rien (tout est déjà réglé grâce au fichier `vercel.json`)
- Clique le gros bouton **Deploy**
- Attends ~1 minute… 🎉

➡️ Vercel t'affiche l'adresse de **TON** site, en ligne sur **TON** compte !

---

## ✨ Bonus : les mises à jour automatiques

Maintenant, dès que tu changes un fichier sur GitHub, Vercel **remet ton site à jour tout seul**. Magique.

---

## ❓ Besoin d'aide ?
Si une étape coince, dis-moi **à quelle étape** tu es bloqué et je te guide. 👍

---

### Réglages techniques (déjà configurés, pour info)
| Réglage           | Valeur          |
|-------------------|-----------------|
| Framework         | Vite            |
| Build Command     | `npm run build` |
| Output Directory  | `dist`          |
| Install Command   | `npm install`   |
