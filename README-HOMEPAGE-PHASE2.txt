REN'O KAGENAMI PORTFOLIO — CINEMATIC HOMEPAGE PHASE 2
======================================================

WHAT THIS UPDATE DOES
- Replaces the long homepage/project-card layout with a cinematic five-scene introduction.
- Uses the new Ren'o Kagenami portrait as the opening hero artwork.
- Adds large left/right scene navigation arrows.
- Supports keyboard left/right arrows, horizontal swipe, and mouse-wheel scene changes.
- Uses the supplied custom emblems as the homepage navigation indicators.
- Inactive symbols dim; the active symbol enlarges and glows in its native color.
- Uses the purple Astra/Noctrya crest as the visual anchor above the navigation strip.
- Adds smooth crossfades, image drift, ambient particles, and scene-colored lighting.
- Adds a compact Quick Access section below the cinematic introduction for direct navigation.
- Keeps the existing global stylesheet untouched; all new homepage styling is isolated in a CSS module.
- Includes reduced-motion support and responsive mobile behavior.

HOMEPAGE SYMBOL MAPPING
1. Blue King emblem  -> Introduction
2. Gold Queen emblem -> Astra Noctrya
3. Silver Jack       -> VEXA
4. Crystal Two       -> Stories
5. Red King emblem   -> Creator / About
Purple crest         -> Navigation anchor / universe mark

INSTALLATION
1. Extract this ZIP.
2. Copy the contents of the extracted folder directly into:
   D:\reno-kagenami-portfolio
3. Merge folders and replace matching files.
4. Run:
   npm run build
5. If the build passes:
   git add app/page.js components/CinematicHome.js components/CinematicHome.module.css public/images/home public/images/home-nav
   git commit -m "Add cinematic homepage navigation"
   git push

NOTES
- No new npm packages are required.
- app/globals.css is NOT replaced.
- Existing Worlds, Characters, Stories, Music, About, Contact, Atlas, VEXA gallery, and character dossier systems are not rewritten.
- The VEXA visual-archive shortcut targets the existing vexa-showcase-title anchor on /music.
