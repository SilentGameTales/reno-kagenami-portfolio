# Before the Lights — new cinematic media

This branch updates the independent AI portfolio's homepage and Before the Lights case study to use **8 replacement stills and a 30-second video preview**.

## Upload target

`portfolio-site/public/media/vexa/before-the-lights/`

Upload the following **binary files** to this directory on branch `feature/before-lights-new-visuals-video-20261105`:

- `01_wall_lean.webp`
- `02_floor_candles.webp`
- `03_hallway_walk.webp`
- `04_cafe_window.webp`
- `05_cafe_coffee_close.webp`
- `06_cafe_reflective.webp`
- `07_rain_street_front.webp`
- `08_crosswalk_back.webp`
- `before-the-lights-preview.mp4`

These files are supplied in the prepared ZIP archive. **Extract it before uploading.** Upload only the eight .webp images and one .mp4 video; the manifest and notes are for reference.

The existing `Before_The_Lights_preview.mp3` is kept and referenced by the music player. Do not replace that MP3.

## Pre-release verification

- [ ] 8 new WebP files exist at the exact path.
- [ ] MP4 exists and plays (30 sec, 1920 × 1080, H.264/AAC stereo).
- [ ] Homepage hero collage and Before the Lights project card show new artwork.
- [ ] `/vexa` hero, video preview, 8-image gallery and lightbox work on phone and desktop.
- [ ] Original audio player remains working.
- [ ] Terror in Resonance remains unaffected.
- [ ] Only the standalone `kahlil-ai-portfolio` Vercel project is released when PR is merged.

**Do not merge before the binary assets have been uploaded.** The HTML references them by path; missing uploads will show broken media.
