REN'O KAGENAMI — INTERACTIVE ASTRA NOCTRYA ATLAS UPDATE

This patch adds the Phase 1 interactive atlas to /worlds using the finalized map images supplied in chat.

INCLUDED
- Known World overview map with clickable continent hotspots
- Seven living-world continent maps:
  * Imperial Heartlands
  * Verdant Shard
  * Pale Expanse
  * Ashbound Divide
  * The Great Sands
  * Tidemother Reaches
  * Dracoa
- Stillwake map as a separate plane beneath the living world
- Tidemother Reaches underwater-city atlas
- Zoom controls and drag-to-pan when zoomed
- Established-map-point markers and information panel
- Responsive/mobile layout
- prefers-reduced-motion support

REGION TRANSITIONS
- Verdant Shard: gust + leaves
- Great Sands: sandstorm
- Pale Expanse: frost/whiteout + snow
- Ashbound Divide: molten fractures + ash/embers
- Imperial Heartlands: golden cartographic sigil
- Tidemother Reaches: water refraction + bubbles
- Dracoa: storm clouds + lightning
- Stillwake: analogue static, scanlines, RGB tearing, red Kaosu takeover

STILLWAKE
The atlas explicitly identifies Stillwake as a plane beneath the living world and clarifies that the red mist/flows are Kaosu, not literal blood.

INSTALL
1. Extract this ZIP.
2. Copy its contents into your site root, for example:
   D:\reno-kagenami-portfolio
3. Allow Windows to merge folders and replace app/globals.css and app/worlds/page.js.
4. Run:
   npm run build
5. If the build passes, publish:
   git add app/worlds/page.js app/globals.css components/InteractiveAstraAtlas.js public/images/astra-maps
   git commit -m "Add interactive Astra Noctrya world atlas"
   git push

No new npm packages are required.
