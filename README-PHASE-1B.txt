REN'O KAGENAMI PORTFOLIO — CHARACTER EXPERIENCE PHASE 1B
=========================================================

WHAT THIS UPDATE ADDS
- Expands the live Astra Noctrya archive from 30 to 42 dossier routes.
- Adds source-backed dossiers for:
  Iris (pre-timeskip)
  Iris (post-timeskip)
  Vael'thryn
  Thalassar Veyr
  Raizen
  Kaelis Virex / Patchbreaker
  Zayd
  The King of Seconds
  The War God
  Hachi
  Maven
  Ren'o Kagenami — artifact-collector disguise
- Connects form / era / identity groups:
  Nysera Diminished <-> Nysera Full Power
  Iris Pre-Timeskip <-> Iris Post-Timeskip
  Ren'o Kagenami <-> Artifact-Collector Disguise
- Adds distinct transitions for hammer, rot, storm, null-field, sand,
  chronomancy, War God causality, pathology, and disguise states.
- Upgrades the visual wheel to accept structured gallery entries and
  automatically create category filters when future OpenArt galleries use
  categories such as Portraits, Combat, Abilities, Forms, and Story Moments.
- Adds the connected Notion character-index shortcut to the archive.
- Adds available Notion page links to supported character dossiers.

CANON SAFETY
Eight uploaded portraits remain staged but are not published as full dossiers yet:
- Mei
- Rei
- Eko
- Thirteen
- The Hemal Leviathan
- Zelie
- Mokuzai
- Amara — Transformed Form

Their identities/portraits are preserved, but the currently available source material
was not sufficient to build full bios without inventing canon. They can be promoted
later as soon as their dossiers or approved profile details are supplied.

NOTION IMPORTANT
The included Notion links are the connected workspace page URLs discovered from the
user's Notion workspace. Visitors may be asked to sign in unless those pages are
explicitly shared to the web in Notion. Before treating them as public lore links,
verify each desired page's Notion Share -> Publish / Share to web setting.

INSTALLATION
1. Extract this ZIP.
2. Copy the contents of the extracted folder directly into:
   D:\reno-kagenami-portfolio
3. Merge folders and replace matching files.
4. Run:
   npm run build
5. If the build passes:
   git add app/characters/[id]/page.js components/AstraCharacterRoster.js components/AstraCharacterRoster.module.css components/CharacterDossier.js components/CharacterDossier.module.css components/CharacterVisualWheel.js components/CharacterVisualWheel.module.css components/CharacterPortalLink.module.css lib/characters.js lib/characterExperience.js
   git commit -m "Expand Astra dossiers and connect character forms"
   git push

NOTES
- No npm packages are required.
- app/globals.css is not replaced.
- The 50 roster portrait assets are not duplicated in this patch because Phase 1
  already installed them on the current project.
- The homepage redesign is still intentionally deferred until the new Ren'o hero
  artwork and separate navigation-symbol assets are ready.
- A full Next.js production build could not be run in this environment because the
  extracted working copy does not contain node_modules. Data integrity checks passed:
  42 unique character IDs, all relationship links valid, all form-group IDs valid,
  and all 42 published dossiers have matching installed roster portraits/transitions.
