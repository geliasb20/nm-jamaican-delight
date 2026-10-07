# N&M Jamaican Delight II

Complete standalone Next.js App Router + TypeScript + Tailwind CSS + Framer Motion project. Includes the original hero image and illustrative food collage, self-hosted fonts, responsive page, ordering links, reviews, about, and location sections. No OpenAI branding, login, SDK, API key, Spline viewer or external image-host dependency. This export has not been deployed to your Vercel account.

## Run locally

Install Node.js 24 LTS, extract the ZIP, then open a terminal in the folder containing package.json:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production commands:

```sh
npm run build
npm run start
```

Type check: `npm run typecheck`.

## GitHub → Vercel

1. Create a GitHub repository named `nm-jamaican-delight-ii`. It may be private; the website can still be public.
2. Upload the extracted contents, including app/, components/, public/, package.json, package-lock.json and configuration files. Put package.json at the repository root. Upload files, not the ZIP. Do not upload node_modules/ or .next/.
3. Visit https://vercel.com/new, connect GitHub and import this repository into the intended team.
4. Framework: Next.js. Root Directory: repository root. Node: 24.x. Install: `npm ci`. Build: `npm run build`. Leave Output Directory on the Next.js default (not public or dist). No environment variables are needed.
5. Click Deploy. Share the stable production `.vercel.app` URL shown on the project dashboard.
6. In Settings → Deployment Protection, ensure the production domain is public without Vercel Authentication or a password. Preview deployments may stay protected. Test the production URL in a signed-out/incognito browser.
7. Optional: Settings → Domains to connect your own domain; follow Vercel's displayed DNS instructions.

Subsequent pushes to the production branch (usually main) trigger deployments. Use a commercial-compatible Vercel plan such as Pro for this restaurant site; Hobby is restricted to personal, non-commercial use.

## v0 → Vercel

1. Push the project to GitHub using the steps above.
2. In https://v0.app, use Import from GitHub and select your repository. ZIP import is another option if available in your account.
3. Keep the project as-is. Suggested prompt: “Import this complete Next.js project as-is. Preserve all assets, design and animation timings. Do not redesign it or add branding.”
4. Check the preview, then select Publish in the chat header. Confirm your Vercel team/project, public production visibility and domain.
5. Complete Publish and test the production URL signed out. GitHub-backed publishing may involve a pull request/merge and must satisfy repository branch rules.

GitHub directly to Vercel is the shortest path if you only need hosting. This project's source contains no platform badge.

## Edit the project

- app/page.tsx — home route.
- app/layout.tsx — metadata and stylesheet.
- app/globals.css — Tailwind v4, preserved custom styling, responsive layouts, hero gradient mask, golden glow and float animation.
- components/restaurant-page.tsx — complete page markup, copy, URLs, mobile navigation.
- components/flavor-ticker.tsx — two identical sequences, a 40-second linear right-to-left infinite loop and independent 6-second spins. Each sequence fills at least a viewport. Reduced-motion preferences stop the ticker; a pause/restart control is included.
- public/images/hero-jerk-chicken.jpg — supplied hero image.
- public/images/food.png — original illustrative four-card food collage.
- app/icon.svg — restaurant favicon.
- postcss.config.mjs — Tailwind v4 setup; no tailwind.config.js is needed.
- package-lock.json — reproducible dependency versions for npm ci.

Fonts are served locally via Fontsource packages. Custom CSS and Tailwind utilities preserve the existing design. No Google Fonts request is needed at runtime or build time.

## Content notes

The ordering/menu links retain the original Uber Eats listing; checkout takes place there. Address, phone, ownership labels, 4.1 rating, 360+ review count, testimonials and 10 AM opening time are carried over from supplied content, not a live data feed. Confirm these business details before public launch. Full weekly/closing hours were not supplied, so visitors are directed to call. Nonfunctional social-profile buttons were omitted; add real URLs when available. The food-card imagery is illustrative.

## Official references

- https://vercel.com/docs/git/vercel-for-github
- https://vercel.com/docs/deployment-protection
- https://vercel.com/docs/plans/hobby
- https://v0.app/docs/git-import
- https://v0.app/docs/deployments
