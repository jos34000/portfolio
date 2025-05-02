# Boiler Plate Next.js

Ce projet est un starter Next.js moderne, prêt à l'emploi avec :

- Authentification avancée (Better Auth, providers sociaux, validation email)
- Prisma ORM (PostgreSQL, MySQL, MongoDB, etc.)
- UI moderne avec Shadcn UI, Radix UI et Tailwind CSS
- Gestion d'état URL avec nuqs
- Optimisation Web Vitals (LCP, CLS, FID)
- TypeScript strict et bonnes pratiques
- pnpm pour la gestion des dépendances

## Démarrage rapide

1. Installe les dépendances :

```bash
pnpm install
```

2. Configure ton fichier `.env` (voir `.env.example` si présent) :

- Variables d'authentification (providers, clés, etc.)
- `DATABASE_URL` pour Prisma
- `NEXT_PUBLIC_AUTH_BASE_URL` pour l'auth côté client

3. Lance le serveur de développement :

```bash
pnpm dev
```

Ouvre [http://localhost:3000](http://localhost:3000) pour voir l'application.

## Structure du projet

- `app/` : Pages et routes Next.js (App Router)
- `components/` : Composants UI réutilisables (Shadcn, Radix, Tailwind)
- `lib/` : Auth, mails, helpers, Prisma client
- `prisma/` : Modèles de données Prisma

## Fonctionnalités principales

- Auth.js (Better Auth) avec validation email, providers sociaux (GitHub, Google)
- Prisma ORM, migrations automatiques
- UI accessible et moderne (Shadcn, Radix, Tailwind)
- Emails transactionnels (Resend)
- Sécurité et bonnes pratiques TypeScript

## Déploiement

Déploie facilement sur [Vercel](https://vercel.com/) ou toute plateforme compatible Node.js.

## Ressources utiles

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [pnpm](https://pnpm.io/)

---

**Auteur :** Jocelyn Sainson
