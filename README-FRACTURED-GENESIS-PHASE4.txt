FRACTURED GENESIS — PHASE 4: CHARACTER ARCHIVE 2.0
===================================================

PURPOSE
Upgrade the character roster/dossiers with 19 owner-supplied official 2D designs
WITHOUT overwriting or removing their existing cinematic portrait or showcase art.
Fractured Genesis is the SERIES; Astra Noctrya is the WORLD.

UPDATES
- 19 official full-body 2D images added, unchanged from supplied originals.
- 19 optimized 800x800 close-ups derived from those exact images for circular roster portraits.
- Roster: Official 2D / Cinematic portrait-style toggle, retained across archive/dossier pages
  in browser localStorage. Characters without an official 2D image keep their cinematic art.
- Dossier: Official 2D / Cinematic switch for the 19 mapped characters. Full-body art
  uses a dedicated contained display, so hair, outfits and weapons are not cropped.
  Cinematic selection restores the familiar circular medallion.
- Existing dossier background, biography, forms/eras, Notion links and related-lore navigation preserved.
- Visual Archive: new first-level filter All artwork / Official 2D / Cinematic.
  Existing second-level scene categories (Combat, Abilities, Portraits, Research,
  etc.) remain dynamic and can be combined with the art-style filter.
- All original cinematic entries (114 additional showcase frames plus roster/dossier imagery)
  remain accessible. No image references removed, no new npm packages, no global CSS replacement.
- Character archive labels reflect Fractured Genesis / Astra Noctrya.

CHARACTER / IMAGE MAP (OWNER-CONFIRMED)
- Ren'ō Kagenami: 6764.jpg             - King Felix IV: 6774.jpg
- Izanara Nozomi: 6765.jpg            - Queen of Spades: 6804.png
- Jin'var: 6766.jpg                   - The Joker: 6805.png
- Alaster: 6767.jpg                   - Nysera (full power): 6809.png
- Akatsuki Shūya Komoriuta: 6768.jpg  - Iris (younger): 6808.png
- Hikari Starbright: 6769.jpg         - The High Priestess: 6815.png
- Lanissa: 6770.jpg                   - The Hierophant: 6814.png
- Clover: 6771.jpg                    - The Red Warden: 6813.png
- Aurelios Vantheir / Sin Eater: 6772.jpg - The Magician: 6812.png
- Alice: 6773.jpg

Files included in this patch (copy all into your existing project root):
  app/characters/page.js
  components/AstraCharacterRoster.js
  components/AstraCharacterRoster.module.css
  components/CharacterDossier.js
  components/CharacterDossier.module.css
  components/CharacterVisualWheel.js
  components/CharacterVisualWheel.module.css
  components/useArtStylePreference.js                  [NEW]
  lib/characterExperience.js
  public/images/fractured-genesis/official-2d/*        [NEW]
  public/images/fractured-genesis/official-2d/portraits/* [NEW]

INSTALL (Windows Command Prompt)
1. Download and extract this ZIP.
2. Open the extracted Phase 4 folder.
3. Copy its app, components, lib, and public folders into:
     D:\reno-kagenami-portfolio
   Merge folders and approve replacement of the named files.
4. From Command Prompt:
     cd /d D:\reno-kagenami-portfolio
     npm run build
5. After a successful build:
     git add app/characters/page.js components/AstraCharacterRoster.js components/AstraCharacterRoster.module.css components/CharacterDossier.js components/CharacterDossier.module.css components/CharacterVisualWheel.js components/CharacterVisualWheel.module.css components/useArtStylePreference.js lib/characterExperience.js public/images/fractured-genesis/official-2d
     git commit -m "Upgrade Fractured Genesis character archive with official 2D art"
     git push
6. Open /characters and verify the Official 2D / Cinematic toggle, then open
   Ren'ō, Nysera and Iris dossiers and test both their artwork/gallery filters.

NOTES
- Do NOT remove public/images/astra-showcase/ or existing character portraits.
- Nysera 2D image is assigned to full-power Nysera, not diminished Nysera.
- Iris 2D image is assigned to younger Iris, not post-timeskip Iris.
- The Sin Eater maps to Aurelios Vantheir's existing dossier, not a duplicate.
- Public Notion links continue to require the appropriate Notion sharing permissions.

VALIDATION
- All 19 full-body images and 19 circular close-ups are present.
- All 19 character IDs match published dossiers (50 total character dossiers in baseline).
- All 114 prior cinematic showcase assets remain referenced and present.
- No duplicate/missing gallery references detected.
- JS/JSX parsing passed for all modified components and library files.
- CSS parsed successfully for all modified CSS Modules.
- Full Next.js production build was not run here because this copy does not have
  installed Next.js project dependencies; run npm run build in your local repo.

SOURCE BASELINE
- Built from the current GitHub character component/library versions checked this turn:
  components/CharacterDossier.js, CharacterVisualWheel.js, AstraCharacterRoster.js,
  lib/characterExperience.js, and lib/characters.js. Other project files are untouched.
