REN’Ō KAGENAMI — UNIVERSE HUB / HOMEPAGE PHASE 3
================================================

This is a focused overlay patch for the EXISTING Next.js site. It is not a standalone project.
Copy the contents of this folder into your existing project root:
  D:\reno-kagenami-portfolio

IMPORTANT CANON / BRANDING:
- Fractured Genesis = name of the SERIES / franchise.
- Astra Noctrya = name of the WORLD in which Fractured Genesis takes place.
- /worlds remains the existing living atlas / world page.

WHAT IS INCLUDED:
- 6-scene cinema introduction: creator, Fractured Genesis, Parallax Zero,
  Still Rising, Echoes of Hollow's Edge, VEXA.
- Large emblem-based scene navigation (desktop/mobiles), arrows, swipe, wheel,
  keyboard navigation and reduced-motion support.
- Scrollable homepage layers: 5-project selector; flagship world+character
  gateway; other projects; cinematic archive editorial staging; VEXA; story
  reader links; @renokagenami social links; final quick portals.
- /projects project directory and /projects/[slug] detailed public intros
  for five properties. New copy is based on canon in connected Notion workspaces.
- Site header/footer updated, including Projects nav and updated Instagram,
  TikTok, and YouTube creator handles.
- About/Contact and SEO branding updated.
- Characters route metadata now brands the series while retaining the world.

KEY SAFEGUARDS:
- No new npm dependencies.
- Existing atlas, character dossier system, VEXA player and galleries, story
  reader, app/globals.css, and the source images are not replaced.
- Existing images from previously installed patches are reused. Required:
  /images/home/reno-kagenami-hero.png
  /images/astra-noctrya.jpg
  /images/vexa-stage.png
  /images/astra-roster/reno-kagenami-roster.png
  /images/astra-roster/jinvar-roster.png
  /images/astra-roster/izanara-nozomi-roster.png
  /images/astra-roster/nysera-full-power-roster.png
  /images/astra-roster/king-felix-iv-roster.png
  /images/astra-roster/queen-of-spades-roster.png
  /images/astra-roster/akatsuki-shuya-komoriuta-roster.png
  /images/astra-roster/red-warden-roster.png
- The Cinematic Archive is an editorial destination with project links, not
  a set of fake playable videos. Add actual YouTube embeds / video sources
  after confirming public video URLs.
- The VEXA track list is UNCHANGED; replace only after selecting tracks.
- Individual character 2D artwork is NOT re-mapped in this patch; the current
  dossiers/galleries are preserved for the next artwork batch.
- No private Notion page URLs were included in public code. Public project
  descriptions were grounded in Notion canon only.

FILES ADDED:
  app/projects/page.js
  app/projects/[slug]/page.js
  app/projects/Projects.module.css
  lib/projects.js

FILES REPLACED:
  app/page.js
  app/layout.js
  app/about/page.js
  app/contact/page.js
  app/characters/page.js
  components/CinematicHome.js
  components/CinematicHome.module.css
  components/SiteHeader.js
  components/SiteFooter.js

DEPLOYMENT (Windows Command Prompt):
1. Back up or commit your current project.
2. Extract this ZIP and copy the contents (app/, components/, lib/) into
   D:\reno-kagenami-portfolio, preserving directory structure.
3. Open Command Prompt:

   cd /d D:\reno-kagenami-portfolio
   npm run build

4. If the build passes:

   git add app/page.js app/layout.js app/about/page.js app/contact/page.js app/characters/page.js app/projects components/CinematicHome.js components/CinematicHome.module.css components/SiteHeader.js components/SiteFooter.js lib/projects.js
   git commit -m "Expand creator homepage into multi-project universe hub"
   git push

A Vercel project linked to the GitHub branch will deploy from the push.

VALIDATION PERFORMED:
- Syntax-checked the new JS and JSX using TypeScript transpilation.
- Verified all CSS classes referenced by CinematicHome.js exist.
- Checked required image paths against the known installed image archives.
- Did NOT run a full Next.js production build here; existing project npm
  dependencies were unavailable in the working container. Run npm run build
  in your project before pushing.
