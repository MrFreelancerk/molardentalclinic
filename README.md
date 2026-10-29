# molardentalclinic

Website for **Molar Dental Hospital** — a multi-speciality dental hospital near Shivaji Statue Junction, Indresham Road, Bachuguda, Patancheru, Hyderabad 502319. Open all seven days, 9:00 AM – 2:00 PM and 5:00 PM – 9:00 PM.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- lucide-react icons

## Pages

| Route | Description |
| --- | --- |
| `/` | Home: hero with treatment counters, services, why-us, dentists, patient journey, reviews, FAQ, location & contact |
| `/services` | Hub listing all eight treatments |
| `/services/[slug]` | Detail page per treatment (root canal, implants, aligners, braces, zirconia crowns, digital RVG X-ray, whitening, extraction) |
| `/contact` | Phone, email, address, hours, directions and enquiry form |

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run lint     # eslint
npx tsc --noEmit # type check
```

## Structure

- `src/app` — routes, metadata, global theme tokens (`globals.css`)
- `src/components` — page sections and shared UI (navbar, footer, booking modal, theme toggle)
- `src/data/services.ts` — all treatment content and per-page SEO copy
- `public` — logo, hero and clinic photography (optimised JPEGs)

## Theming

Light and dark themes are driven by CSS custom properties (`--page`, `--card`, `--line`, `--ink`, …) defined in `src/app/globals.css`. The `dark` class on `<html>` swaps the token values, so components never hardcode a surface colour. The chosen theme is stored in `localStorage` (`molar-theme`) and applied before first paint to avoid a flash.

## Contact

- Phone: +91 91339 33392 / +91 78939 83913
- Email: molardentalhospital@gmail.com
