REN'O KAGENAMI WEBSITE — VEXA GALLERY + CHARACTER ART FIXES

This patch contains:
- VEXA Visual Showcase: 30 images
- Click-to-open fullscreen lightbox
- Zoom in/out controls (100%–300%)
- Previous/next browsing
- Keyboard navigation (Esc, left/right arrows, +/-)
- Mobile swipe navigation
- Corrected art for Joker, Jack of Clubs, Haka no Ken, and The High Priestess

INSTALL:
1. Copy the contents of this patch into the ROOT of D:\reno-kagenami-portfolio
2. Allow Windows to merge folders and replace matching files.
3. Run: npm run build
4. If the build passes:
   git add app/music/page.js app/globals.css components/VexaGallery.js public/images/vexa-showcase public/images/astra-characters/joker.png public/images/astra-characters/jack-of-clubs.png public/images/astra-characters/haka-no-ken.png public/images/astra-characters/high-priestess.png
   git commit -m "Add VEXA visual showcase and correct character artwork"
   git push

Vercel should redeploy automatically.
