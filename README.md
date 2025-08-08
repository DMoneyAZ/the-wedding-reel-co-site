
# The Wedding Reel Co. — Landing Site

A Next.js 14 + Tailwind landing page for The Wedding Reel Co.

- Uses Node 20 via `"engines": { "node": "20.x" }` so Vercel auto-selects the right runtime.
- Includes `.npmrc` with `legacy-peer-deps=true` to avoid peer dependency install errors.

## Local Dev

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Contact Form (Formspree)

1. Create a free account at https://formspree.io
2. Create a **New Form** → you'll get a form ID like `mnqeabcd`.
3. Open `app/page.tsx` and replace `YOUR_FORM_ID` in the form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
4. Deploy and you're done.

## Deploy to Vercel

1. Create a new GitHub repo and upload the **contents** of this folder.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Next.js**. Build command: `next build`. Output: `.next` (defaults are fine).
4. After deploy, add your domain `theweddingreelco.com` in the Vercel project → **Domains**.
5. Update DNS at Squarespace to the records Vercel provides.
