"use client";

import { useState } from "react";
import styles from "./media.module.css";

const base = "/media/vexa/before-the-lights/";
const shots = [
  ["01_official_cover.webp", "Official cover", "Candlelit apartment and rain", "cover"],
  ["02_rainlit_closeup.webp", "Rainlit close-up", "Close camera position with rain-lit windows"],
  ["03_rainlit_three_quarter.webp", "Moody apartment portrait", "Three-quarter framing and atmosphere"],
  ["04_front_tilt.webp", "Front three-quarter", "Face structure with head tilt"],
  ["05_front_direct.webp", "Direct gaze", "Front-facing expression and eye-color consistency"],
  ["06_front_contemplative.webp", "Contemplative", "Close framing and emotional body language"],
  ["07_back_storm.webp", "Facing the rain", "Back-facing environmental composition"],
  ["08_turn_over_shoulder.webp", "Over the shoulder", "Rear three-quarter portrait"],
  ["09_window_profile.webp", "At the window", "Side-profile storytelling beat"],
];
const bars = [9,8,8,20,15,9,18,21,10,13,26,22,10,29,20,29,33,27,33,32,35,21,29,38,22,22,21,37,26,19,41,32,17,39,34,30,26,39,29,23,34,15,12,18,35,22,14,28,31,29,35,22,29,34,35,30,24,41,31,17,23,33,29,25,40,22,22,38,32,30,30,34,26,28,24,11,13,18,23,19,14,28,24,17,36,26,25,39,23,28,22,39,22,13,14,11,14,12,16,19,26,33,27,27,32,30,17,31,35,30,17,37,27,21,33,19,17,20,23,5];

export default function BeforeLightsMedia() {
  const [audioState, setAudioState] = useState("loading");
  const [missingImages, setMissingImages] = useState({});
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.wrap}>
      <div className={styles.heroGrid}>
        <div className={styles.cover}>
          {!missingImages[0] ? (
            <img src={base + shots[0][0]} alt="VEXA Before the Lights official single cover in a candlelit room" onError={() => setMissingImages(s => ({...s, 0:true}))}/>
          ) : (
            <div className={styles.coverFallback}><span>VEXA</span><strong>Before<br/>the Lights</strong><small>Official cover — upload pending</small></div>
          )}
        </div>
        <div className={styles.listen}>
          <p className={styles.label}>ORIGINAL AI-ASSISTED MUSIC / MUREKA AI</p>
          <h3>Before the Lights</h3>
          <p className={styles.muted}>VEXA · Dark melodic Brooklyn drill / R&B · 4:03</p>
          <div className={styles.waveform} aria-label="Amplitude overview from the final WAV file">
            {bars.map((n, i) => <span key={i} style={{height: n + "px"}} />)}
          </div>
          {audioState !== "missing" ? (
            <audio
              controls
              preload="metadata"
              src={base + "Before_The_Lights_preview.mp3"}
              onLoadedMetadata={() => setAudioState("ready")}
              onError={() => setAudioState("missing")}
              aria-label="Play Before the Lights by VEXA"
              className={styles.player}
            >
              Your browser does not support audio playback.
            </audio>
          ) : (
            <p className={styles.pending} role="status">The audio is packaged and ready for GitHub media upload. This player will become available automatically when the file is deployed.</p>
          )}
          <p className={styles.tech}>Source: 44.1 kHz stereo WAV · 243.71 s · AI-generated singing and instrumental by Mureka AI, under human creative direction.</p>
          <p className={styles.note}>The waveform reflects the actual uploaded recording. Visual and listening quality evaluation remains separate from automated file checks.</p>
        </div>
      </div>
      <div className={styles.galleryHead}>
        <div><p className={styles.label}>SELECTED VISUAL CAMPAIGN</p><h3>Nine frames, one identity.</h3></div>
        <p>Official cover plus eight approved portrait studies. Click a frame to enlarge it after the image files have been uploaded.</p>
      </div>
      <div className={styles.gallery}>
        {shots.map(([file,title,description],i) => (
          <button
            type="button"
            key={file}
            className={styles.shot}
            onClick={() => {if (!missingImages[i]) setSelected(i);}}
            aria-label={title + ": " + description}
            disabled={!!missingImages[i]}
          >
            <div className={styles.shotImage}>
              {!missingImages[i] ? (
                <img
                  src={base + file}
                  alt={title + ": " + description}
                  loading="lazy"
                  onError={() => setMissingImages(s=>({...s,[i]:true}))}
                />
              ) : (
                <span className={styles.shotFallback}>{String(i+1).padStart(2,"0")}<small>Image upload pending</small></span>
              )}
            </div>
            <span className={styles.shotTitle}>{String(i+1).padStart(2,"0")} · {title}</span>
            <span className={styles.shotDesc}>{description}</span>
          </button>
        ))}
      </div>
      {selected !== null && !missingImages[selected] && (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Expanded VEXA image" onClick={() => setSelected(null)}>
          <button className={styles.close} type="button" onClick={() => setSelected(null)} aria-label="Close image">Close ×</button>
          <img src={base + shots[selected][0]} alt={shots[selected][1]} onClick={e=>e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
