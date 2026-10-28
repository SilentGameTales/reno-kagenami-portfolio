"use client";

import { useEffect, useState } from "react";
import styles from "./PromoGallery.module.css";

const base = "/media/vexa/terror-in-resonance/promotional/";

const frames = [
  {
    file: "01_wall_first_contact.webp",
    title: "Inside the Walls",
    description: "A claustrophobic view from the wooden passage where VEXA is trapped.",
    alt: "VEXA lying on her side inside a cobwebbed wooden cavity, facing the viewer with blue and amber eyes.",
    wide: true,
    category: "I / THE CONFINEMENT"
  },
  {
    file: "02_wall_hidden_observer.webp",
    title: "The Hidden Observer",
    description: "An intimate, close overhead composition from the chamber.",
    alt: "Close overhead portrait of VEXA within a narrow dark wood enclosure, surrounded by cobwebs.",
    category: "II / THE SEARCH"
  },
  {
    file: "03_wall_reaching_out.webp",
    title: "Reaching Through",
    description: "She braces herself against the timbers, searching for a way out.",
    alt: "VEXA reaches toward the camera through an opening between broken timbers and cobwebs.",
    category: "III / THE ESCAPE"
  },
  {
    file: "04_cathedral_nave.webp",
    title: "The Abandoned Nave",
    description: "The setting opens into a vast, cold cathedral lit by scattered candles.",
    alt: "Back view of VEXA moving through an abandoned Gothic cathedral with candlelight and a distant blue window.",
    category: "IV / THE ARRIVAL"
  },
  {
    file: "05_stairwell_ascent.webp",
    title: "The Stairwell",
    description: "A high-angle perspective follows her through the cathedral's worn stone stairway.",
    alt: "High-angle view of VEXA ascending a marble staircase in the dark abandoned cathedral.",
    category: "V / THE ASCENT"
  },
  {
    file: "06_lectern_reckoning.webp",
    title: "At the Lectern",
    description: "A quieter side-profile portrait closes the sequence.",
    alt: "Side view of VEXA with her hand resting on her head while standing behind a carved wooden church lectern.",
    wide: true,
    category: "VI / THE RECKONING"
  }
];

export default function PromoGallery() {
  const [missing, setMissing] = useState({});
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected === null) return;
    function onKeyDown(event) {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected(i => i === null ? null : (i + 1) % frames.length);
      if (event.key === "ArrowLeft") setSelected(i => i === null ? null : (i - 1 + frames.length) % frames.length);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <div className={styles.wrap}>
      <div className={styles.intro}>
        <p>
          A six-frame visual sequence exploring isolation, escape, and the gothic
          environment of <em>Terror in Resonance</em>. Images are approved promotional
          stills; no completed video footage is implied.
        </p>
        <span>06 ART-DIRECTED FRAMES / 16:9</span>
      </div>
      <div className={styles.grid}>
        {frames.map((frame, i) => (
          <button
            key={frame.file}
            type="button"
            className={[styles.card, frame.wide ? styles.wide : ""].filter(Boolean).join(" ")}
            onClick={() => { if (!missing[i]) setSelected(i); }}
            disabled={!!missing[i]}
            aria-label={"View " + frame.title + " promotional still"}
          >
            <div className={styles.visual}>
              {!missing[i] ? (
                <img
                  src={base + frame.file}
                  alt={frame.alt}
                  loading="lazy"
                  onError={() => setMissing(old => ({ ...old, [i]: true }))}
                />
              ) : (
                <div className={styles.fallback}>
                  <span>0{i + 1} / 06</span>
                  <small>Visual prepared · upload pending</small>
                </div>
              )}
              <span className={styles.number}>0{i + 1} / 06</span>
            </div>
            <div className={styles.caption}>
              <div>
                <span className={styles.category}>{frame.category}</span>
                <h3>{frame.title}</h3>
                <p>{frame.description}</p>
              </div>
              <span className={styles.expand} aria-hidden="true">↗</span>
            </div>
          </button>
        ))}
      </div>
      <p className={styles.qualityNote}>
        Visual continuity review: the character's dark hair, blue-and-amber
        heterochromia, black distressed wardrobe, cold shadows, and candlelight
        anchor the sequence. Fine details such as face shape, eye-side accuracy,
        jewelry, hands, and camera perspective require image-by-image scrutiny.
      </p>
      {selected !== null && !missing[selected] && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={"Expanded image: " + frames[selected].title}
          onClick={() => setSelected(null)}
        >
          <div className={styles.modalControls} onClick={e => e.stopPropagation()}>
            <button type="button" onClick={() => setSelected(i => (i - 1 + frames.length) % frames.length)} aria-label="Previous image">←</button>
            <span>{String(selected + 1).padStart(2,"0")} / {String(frames.length).padStart(2,"0")}</span>
            <button type="button" onClick={() => setSelected(i => (i + 1) % frames.length)} aria-label="Next image">→</button>
            <button type="button" onClick={() => setSelected(null)} aria-label="Close expanded image">Close ×</button>
          </div>
          <img src={base + frames[selected].file} alt={frames[selected].alt} onClick={e => e.stopPropagation()} />
          <p className={styles.modalCaption}>{frames[selected].title}</p>
        </div>
      )}
    </div>
  );
}
