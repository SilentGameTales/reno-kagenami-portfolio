"use client";

import { useState } from "react";
import { albumTracks, albumMediaBase } from "./trackData";
import styles from "./media.module.css";

export function AlbumCover() {
  const [imageMissing, setImageMissing] = useState(false);
  return (
    <div className={styles.cover}>
      {!imageMissing ? (
        <img
          src={albumMediaBase + "terror_in_resonance_album_cover.webp"}
          alt="Official Terror in Resonance album cover: VEXA and a male counterpart in front of a cathedral beneath a crimson eclipse, surrounded by spectral figures."
          className={styles.coverImg}
          onError={() => setImageMissing(true)}
        />
      ) : (
        <div className={styles.coverFallback}>
          <span>V E X A</span>
          <strong>TERROR<br />IN<br />RESONANCE</strong>
          <small>Official artwork upload pending</small>
        </div>
      )}
    </div>
  );
}

export default function AlbumPlayer() {
  const [selected, setSelected] = useState(0);
  const [unavailable, setUnavailable] = useState({});
  const current = albumTracks[selected];
  return (
    <div className={styles.playerShell}>
      <div className={styles.nowPlaying}>
        <div>
          <span className={styles.eyebrow}>ALBUM LISTENING ROOM / {current.no} OF 08</span>
          <h3>{current.title}</h3>
          <p>{current.vocal} · {current.duration} · Stereo, 44.1 kHz source</p>
        </div>
        <div className={styles.indicator} aria-hidden="true"><span /><span /><span /><span /><span /></div>
      </div>
      {unavailable[selected] ? (
        <div className={styles.unavailable} role="status">The audio is prepared but this file has not yet reached the website. Once the media upload deploys, this track will be available here.</div>
      ) : (
        <audio
          key={current.file}
          className={styles.audio}
          controls
          preload="metadata"
          src={albumMediaBase + current.file}
          onError={() => setUnavailable(prev => ({ ...prev, [selected]: true }))}
          aria-label={"Listen to " + current.title + " from Terror in Resonance"}
        >
          Your browser does not support audio playback.
        </audio>
      )}
      <p className={styles.playerNote}>Select a track below, then press play. No automatic playback or simultaneous tracks.</p>
      <div className={styles.rows} role="group" aria-label="Select album track">
        {albumTracks.map((track, i) => (
          <button
            type="button"
            key={track.no}
            className={[styles.row, selected === i ? styles.active : ""].filter(Boolean).join(" ")}
            onClick={() => setSelected(i)}
            aria-pressed={selected === i}
            aria-label={"Select track " + track.no + ": " + track.title}
          >
            <span className={styles.number}>{selected === i ? "♫" : track.no}</span>
            <span className={styles.name}>{track.title}</span>
            <span className={styles.vocal}>{track.vocal}</span>
            <span className={styles.length}>{track.duration}</span>
          </button>
        ))}
      </div>
      <p className={styles.caption}>Media credits: original album direction by Ren’ō Kagenami. The final uploaded WAVs were supplied by the creator and converted to smaller MP3 copies for online playback. Vocal categories are from the planned album sequence, not automated vocal-identification results.</p>
    </div>
  );
}
