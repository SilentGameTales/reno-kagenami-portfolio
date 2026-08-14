"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./CharacterVisualWheel.module.css";

function relativeOffset(index, active, total) {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

export default function CharacterVisualWheel({ images, name }) {
  const cleanImages = useMemo(() => Array.from(new Set(images.filter(Boolean))), [images]);
  const [active, setActive] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const dragRef = useRef(null);

  const total = cleanImages.length;
  const next = () => setActive((value) => (value + 1) % total);
  const previous = () => setActive((value) => (value - 1 + total) % total);

  useEffect(() => {
    if (!viewerOpen) return;
    function onKey(event) {
      if (event.key === "Escape") setViewerOpen(false);
      if (event.key === "ArrowRight" && total > 1) next();
      if (event.key === "ArrowLeft" && total > 1) previous();
      if (event.key === "+" || event.key === "=") setZoom((value) => Math.min(3, +(value + .25).toFixed(2)));
      if (event.key === "-") setZoom((value) => Math.max(1, +(value - .25).toFixed(2)));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewerOpen, total]);

  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [active]);

  if (!total) return null;

  function handleWheel(event) {
    if (total < 2) return;
    if (Math.abs(event.deltaY) < 8 && Math.abs(event.deltaX) < 8) return;
    event.preventDefault();
    if ((event.deltaY || event.deltaX) > 0) next(); else previous();
  }

  function pointerDown(event) {
    if (zoom <= 1) return;
    dragRef.current = { startX: event.clientX, startY: event.clientY, panX: pan.x, panY: pan.y };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }

  function pointerMove(event) {
    if (!dragRef.current || zoom <= 1) return;
    const dx = event.clientX - dragRef.current.startX;
    const dy = event.clientY - dragRef.current.startY;
    setPan({ x: dragRef.current.panX + dx, y: dragRef.current.panY + dy });
  }

  function pointerUp() {
    dragRef.current = null;
  }

  return (
    <>
      <div className={styles.shell} onWheel={handleWheel}>
        <button type="button" className={`${styles.arrow} ${styles.left}`} onClick={previous} disabled={total < 2} aria-label="Previous image">‹</button>
        <div className={styles.stage} aria-label={`${name} visual showcase`}>
          {cleanImages.map((src, index) => {
            const offset = relativeOffset(index, active, total);
            const visible = Math.abs(offset) <= 2;
            const isActive = offset === 0;
            return (
              <button
                type="button"
                key={src}
                className={`${styles.card} ${isActive ? styles.active : ""}`}
                style={{ "--offset": offset, "--distance": Math.abs(offset), "--z": 10 - Math.abs(offset), opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
                onClick={() => isActive ? setViewerOpen(true) : setActive(index)}
                aria-label={isActive ? `Open ${name} image ${index + 1}` : `Center ${name} image ${index + 1}`}
              >
                <Image src={src} alt={`${name} visual ${index + 1}`} fill sizes="(max-width: 760px) 76vw, 560px" className={styles.image} />
                {isActive ? <span className={styles.zoomHint}>Click to inspect</span> : null}
              </button>
            );
          })}
        </div>
        <button type="button" className={`${styles.arrow} ${styles.right}`} onClick={next} disabled={total < 2} aria-label="Next image">›</button>
      </div>
      <div className={styles.counter}>{active + 1} / {total}</div>

      {viewerOpen ? (
        <div className={styles.viewer} role="dialog" aria-modal="true" aria-label={`${name} image viewer`}>
          <button className={styles.close} type="button" onClick={() => setViewerOpen(false)} aria-label="Close image viewer">×</button>
          {total > 1 ? <button className={`${styles.viewerArrow} ${styles.viewerLeft}`} onClick={previous} type="button" aria-label="Previous image">‹</button> : null}
          <div className={styles.viewerCanvas} onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerUp} onPointerCancel={pointerUp}>
            <div className={styles.viewerImageWrap} style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`, cursor: zoom > 1 ? "grab" : "default" }}>
              <Image src={cleanImages[active]} alt={`${name} visual ${active + 1}`} fill sizes="100vw" className={styles.viewerImage} priority />
            </div>
          </div>
          {total > 1 ? <button className={`${styles.viewerArrow} ${styles.viewerRight}`} onClick={next} type="button" aria-label="Next image">›</button> : null}
          <div className={styles.viewerControls}>
            <button type="button" onClick={() => setZoom((value) => Math.max(1, +(value - .25).toFixed(2)))} disabled={zoom <= 1}>−</button>
            <span>{Math.round(zoom * 100)}%</span>
            <button type="button" onClick={() => setZoom((value) => Math.min(3, +(value + .25).toFixed(2)))} disabled={zoom >= 3}>+</button>
            <button type="button" onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }}>Reset</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
