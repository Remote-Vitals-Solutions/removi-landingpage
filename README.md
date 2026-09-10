# Removi – Landing Page

Marketing site for **Removi** (Remote Vitals Solutions), a health-tech startup out of
DTU (Technical University of Denmark) building a wrist-worn continuous ECG wearable
for detecting atrial fibrillation outside the clinic.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- TypeScript
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
app/
  layout.tsx              Root layout, fonts, metadata
  page.tsx                Single-page scroll layout
  globals.css             Tailwind theme + design tokens
  components/
    Navbar.tsx            Logo + contact CTA
    AnimateIn.tsx         Scroll-reveal wrapper
    StickyProduct.tsx     Sticky product visualisation
    Forms.tsx             Contact / waitlist form
public/                   Static assets
```

The site is a single linear scroll — hero, problem, product, team, partners — with no
section navigation in the navbar by design.

## Contributing

See [`AGENTS.md`](./AGENTS.md) for conventions. Note that this project tracks a recent
Next.js release; check `node_modules/next/dist/docs/` rather than relying on older
Next.js knowledge.

## License

See [`LICENSE`](./LICENSE). All rights reserved.
