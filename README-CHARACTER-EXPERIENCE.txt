REN'O KAGENAMI PORTFOLIO — CHARACTER EXPERIENCE PHASE 1
========================================================

WHAT THIS UPDATE CHANGES
- Replaces the Astra Noctrya character archive with circular clickable portraits.
- Adds character-specific transition overlays before opening each dossier.
- Rebuilds character pages as cinematic dossiers.
- Adds an interactive horizontal visual wheel.
- Adds fullscreen image viewing with:
  - zoom from 100% to 300%
  - previous / next controls
  - keyboard arrows
  - +/- zoom
  - Escape to close
  - drag-to-pan while zoomed
- Adds a Forms / States framework.
- Nysera's Diminished and Full-Power states are connected now as the first working example.
- Adds all 50 portraits supplied so the remaining characters can be wired into the archive later without redoing the asset structure.
- Adds an optional Notion-link hook. Links remain hidden until public Notion share URLs are approved.

IMPORTANT
This is PHASE 1 of the redesign.
The homepage scene-navigation redesign is intentionally NOT included yet because the new Ren'o hero image and the individual navigation-symbol assets are still pending.

INSTALLATION
1. Extract this ZIP.
2. Copy the contents of the extracted folder directly into:
   D:\reno-kagenami-portfolio
3. Merge folders and replace matching files.
4. Run:
   npm run build
5. If the build passes:
   git add app/characters components lib/characterExperience.js public/images/astra-roster
   git commit -m "Redesign Astra character archive and dossiers"
   git push

NOTES
- No new npm packages are required.
- This patch does not replace app/globals.css.
- The existing character canon remains in lib/characters.js; this update changes presentation rather than rewriting character bios.
- New OpenArt gallery images can be added later by expanding getCharacterGallery() / gallery mappings in lib/characterExperience.js.
- Public Notion links can be added to characterNotionLinks in lib/characterExperience.js.
