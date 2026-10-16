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

function normalizeImage(item, index, name) {
  if (typeof item === "string") {
    return { src: item, style: "cinematic", category: "Showcase", label: `${name} visual ${index + 1}` };
  }
  return {
    src: item?.src,
    style: item?.style || "cinematic",
    category: item?.category || "Showcase",
    label: item?.label || `${name} visual ${index + 1}`,
  };
}

export default function CharacterVisualWheel({ images, name }) {
  const archive = useMemo(() => {
    const seen = new Set();
    return (images || [])
      .map((item, index) => normalizeImage(item, index, name))
      .filter((item) => {
        if (!item.src || seen.has(item.src)) return false;
        seen.add(item.src);
        return true;
      });
  }, [images, name]);

  const hasOfficial = archive.some((item) => item.style === "official");
  const hasCinematic = archive.some((item) => item.style === "cinematic");
  const [artFilter, setArtFilter] = useState("all");
  const [category, setCategory] = useState("All");
  const styleImages = useMemo(
    () => artFilter === "all" ? archive : archive.filter((item) => item.style === artFilter),
    [archive, artFilter]
  );
  const categories = useMemo(() => ["All", ...Array.from(new Set(styleImages.map((item) => item.category)))], [styleImages]);
  const cleanImages = useMemo(
    () => category === "All" ? styleImages : styleImages.filter((item) => item.category === category),
    [styleImages, category]
  );

  function chooseArtFilter(next) {
    setArtFilter(next);
    setCategory("All");
  }

  const [active, setActive] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const dragRef = useRef(null);

  const total = cleanImages.length;
  const next = () => total && setActive((value) => (value + 1) % total);
  const previous = () => total && setActive((value) => (value - 1 + total) % total);

  useEffect(() => {
    setActive(0);
    setViewerOpen(false);
  }, [category, artFilter]);

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
      {hasOfficial && hasCinematic ? (
        <div className={styles.artGalleryFilters} role="group" aria-label="Filter visual archive by art style">
          <span>ART STYLE</span>
          <button type="button" aria-pressed={artFilter === "all"} className={artFilter === "all" ? styles.artGalleryActive : ""} onClick={() => chooseArtFilter("all")}>All artwork</button>
          <button type="button" aria-pressed={artFilter === "official"} className={artFilter === "official" ? styles.artGalleryActive : ""} onClick={() => chooseArtFilter("official")}>Official 2D</button>
          <button type="button" aria-pressed={artFilter === "cinematic"} className={artFilter === "cinematic" ? styles.artGalleryActive : ""} onClick={() => chooseArtFilter("cinematic")}>Cinematic</button>
        </div>
      ) : null}
      {categories.length > 2 ? (
        <div className={styles.categories} aria-label="Visual archive categories">
          {categories.map((item) => (
            <button type="button" key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={category === item ? styles.categoryActive : ""}>
              {item}
            </button>
          ))}
        </div>
      ) : null}

      <div className={styles.shell} onWheel={handleWheel}>
        <button type="button" className={`${styles.arrow} ${styles.left}`} onClick={previous} disabled={total < 2} aria-label="Previous image">‹</button>
        <div className={styles.stage} aria-label={`${name} visual showcase`}>
          {cleanImages.map((item, index) => {
            const offset = relativeOffset(index, active, total);
            const visible = Math.abs(offset) <= 2;
            const isActive = offset === 0;
            return (
              <button
                type="button"
                key={item.src}
                className={`${styles.card} ${isActive ? styles.active : ""}`}
                style={{ "--offset": offset, "--distance": Math.abs(offset), "--z": 10 - Math.abs(offset), opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
                onClick={() => isActive ? setViewerOpen(true) : setActive(index)}
                aria-label={isActive ? `Open ${item.label}` : `Center ${item.label}`}
              >
                <Image src={item.src} alt={item.label} fill sizes="(max-width: 760px) 76vw, 560px" className={styles.image} />
                {isActive ? <span className={styles.zoomHint}>Click to inspect</span> : null}
              </button>
            );
          })}
        </div>
        <button type="button" className={`${styles.arrow} ${styles.right}`} onClick={next} disabled={total < 2} aria-label="Next image">›</button>
      </div>
      <div className={styles.counter}>{active + 1} / {total} · {cleanImages[active]?.category} · {cleanImages[active]?.style === "official" ? "Official 2D" : "Cinematic"}</div>

      {viewerOpen ? (
        <div className={styles.viewer} role="dialog" aria-modal="true" aria-label={`${name} image viewer`}>
          <button className={styles.close} type="button" onClick={() => setViewerOpen(false)} aria-label="Close image viewer">×</button>
          {total > 1 ? <button className={`${styles.viewerArrow} ${styles.viewerLeft}`} onClick={previous} type="button" aria-label="Previous image">‹</button> : null}
          <div className={styles.viewerCanvas} onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerUp} onPointerCancel={pointerUp}>
            <div className={styles.viewerImageWrap} style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`, cursor: zoom > 1 ? "grab" : "default" }}>
              <Image src={cleanImages[active].src} alt={cleanImages[active].label} fill sizes="100vw" className={styles.viewerImage} priority />
            </div>
          </div>
          {total > 1 ? <button className={`${styles.viewerArrow} ${styles.viewerRight}`} onClick={next} type="button" aria-label="Next image">›</button> : null}
          <div className={styles.viewerMeta}>{cleanImages[active].label}</div>
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
