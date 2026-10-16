ASTRA NOCTRYA — VISUAL ARCHIVE BATCH 1

This patch populates the existing Character Visual Wheel with the first 16 completed showcase galleries.

Characters included:
- Ren'ō Kagenami
- Jin'var
- Alaster
- Akatsuki Shūya Komoriuta
- Hikari Starbright
- Lanissa
- Clover
- Knight of Hearts
- Two of Diamonds
- Pyrion & Noira — The Polar Twins
- Valentina
- Aurelios Vantheir — The Sin Eater
- Dr. Laana Rhee
- Amaya
- King Felix IV
- Mei

Total new showcase images: 114

Files changed:
- lib/characterExperience.js
- public/images/astra-showcase/**

The update uses the gallery/filter system already present on the character dossiers. No component, global CSS, package, or homepage changes are included.

INSTALL
1. Extract this patch.
2. Copy the contents into your project root:
   D:\reno-kagenami-portfolio
3. Allow folders/files to merge/replace when prompted.
4. Run:

   cd /d D:\reno-kagenami-portfolio
   npm run build

5. If the build passes:

   git add lib/characterExperience.js public/images/astra-showcase
   git commit -m "Add first Astra character visual archives"
   git push

VALIDATION PERFORMED
- Built against the current GitHub lib/characterExperience.js blob SHA:
  95901983a2cd64036c9b3f47d445ef286445f706
- node --check passed for lib/characterExperience.js
- Verified 114 gallery references are unique and all 114 referenced image files exist in the patch
- Full Next.js production build was not run in this environment
