# Ren’ō Kagenami Portfolio — Story Archive Build

A modern React + Next.js creator portfolio for Kahlil’s original worlds, fiction, character archives, music, visual development, and AI-assisted storytelling.

## What is included in this build

- Ren’ō Kagenami creator identity and flame crest branding
- Responsive cinematic homepage and interactive creator hub
- Astra Noctrya world section
- Tsukihana Kurogane world and character archive
- 20 Astra Noctrya full character profile routes
- Character search and faction filters
- Clickable relationship links that move between connected character records
- VEXA music section with cover artwork and playable audio
- About and contact pages
- **New Stories navigation tab**
- **Ren’ō Kagenami: The First Light interactive story archive**
  - 8 divisions
  - 38 reading entries (Prologue + Chapters 1–37)
  - Separate epilogue reading page
  - Full chapter text from the Origin Chronicle document
- **Tsukihana Kurogane: The Moon That Cuts the Night interactive story archive**
  - 3 acts
  - 36 chapters
  - Full chapter text from the revised Volume I document
- Individual chapter URLs, sticky desktop directory, mobile chapter navigation, and previous/next controls
- Connected story-to-character lore links for the Ren’ō archive

## Easiest way to install it on Windows

### 1. Install Node.js
Go to the official Node.js website and install the current LTS version. Node.js 20 or newer is recommended.

### 2. Extract the ZIP
Right-click the downloaded ZIP and choose **Extract All**.

Open the extracted `reno-kagenami-portfolio` folder.

### 3. Open a terminal inside the website folder
In Windows File Explorer, click the address bar while you are inside the `reno-kagenami-portfolio` folder, type:

```text
cmd
```

Press Enter.

A Command Prompt window should open already pointed at the correct folder.

### 4. Install the website packages
Type:

```bash
npm install
```

Wait for it to finish.

### 5. Start the website
Type:

```bash
npm run dev
```

When the terminal says the server is ready, open:

```text
http://localhost:3000
```

## Important URLs

- `/` — Home
- `/worlds` — Worlds
- `/characters` — interactive Astra Noctrya character archive
- `/stories` — story library
- `/stories/reno-kagenami` — Ren’ō Kagenami story archive
- `/stories/tsukihana-kurogane` — Tsukihana Kurogane story archive
- `/music` — VEXA
- `/about` — About Kahlil / Ren’ō Kagenami creator identity
- `/contact` — Contact and social links

Story chapter routes are generated automatically, for example:

```text
/stories/reno-kagenami/chapter-1
/stories/reno-kagenami/chapter-37
/stories/reno-kagenami/epilogue
/stories/tsukihana-kurogane/chapter-1
/stories/tsukihana-kurogane/chapter-36
```

## Production build

```bash
npm run build
npm start
```

## Deploying with Vercel

1. Create a GitHub repository.
2. Upload the contents of this project folder.
3. Sign in to Vercel.
4. Import the GitHub repository.
5. Leave the detected Next.js settings alone and deploy.

## Editing the archive

- Site pages: `app/`
- Shared components: `components/`
- Character data: `lib/characters.js`
- Story data: `lib/stories.json`
- Story helpers: `lib/stories.js`
- Images: `public/images/`
- Main styling: `app/globals.css`

The story documents have already been converted into structured chapter data for the website, so you do not need the original DOCX files to run the site.
"# reno-kagenami-portfolio" 
