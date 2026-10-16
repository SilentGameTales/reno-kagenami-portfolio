REN'O KAGENAMI — 30 CHARACTER ASTRA NOCTRYA UPDATE

This patch expands the existing 20-profile character archive to 30 profiles.

Added characters:
- The Joker
- Nysera
- Nysera — Diminished Form
- The Hierophant
- The Magician
- Haka no Ken
- The High Priestess
- Valentina
- Two of Diamonds
- Jack of Clubs

Also updated:
- Relationship links across the original and new profiles
- Character faction support
- Cosmic Forces faction filter
- All 10 matching character image assets

INSTALL
1. Extract this ZIP.
2. Copy the contents of this folder into your existing D:\reno-kagenami-portfolio folder.
3. Choose Replace/Overwrite when Windows asks.
4. Open Command Prompt in D:\reno-kagenami-portfolio.
5. Run:

   npm run build

6. Confirm the build now shows 30 character routes. Next.js will usually display:

   /characters/reno
   /characters/jinvar
   /characters/izanara
   [+27 more paths]

7. Then publish:

   git add lib/characters.js app/characters/page.js public/images/astra-characters
   git commit -m "Expand Astra Noctrya archive to 30 characters"
   git push

Vercel should redeploy www.renokagenami.com automatically after the push.
