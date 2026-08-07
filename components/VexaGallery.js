"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function VexaGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const touchStart = useRef(null);

  const isOpen = activeIndex !== null;
  const activeImage = isOpen ? images[activeIndex] : null;

  const close = () => {
    setActiveIndex(null);
    setZoom(1);
  };

  const move = (direction) => {
    if (!images.length) return;
    setActiveIndex((current) => {
      if (current === null) return 0;
      return (current + direction + images.length) % images.length;
    });
    setZoom(1);
  };

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "+" || event.key === "=") setZoom((value) => Math.min(3, value + 0.25));
      if (event.key === "-") setZoom((value) => Math.max(1, value - 0.25));
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div className="vexa-showcase-grid">
        {images.map((src, index) => (
          <button
            className="vexa-showcase-card"
            key={src}
            type="button"
            aria-label={`Open VEXA showcase image ${index + 1} of ${images.length}`}
            onClick={() => {
              setActiveIndex(index);
              setZoom(1);
            }}
          >
            <Image
              src={src}
              alt={`VEXA visual showcase portrait ${index + 1}`}
              fill
              sizes="(max-width: 650px) 50vw, (max-width: 1050px) 33vw, 25vw"
            />
            <span className="vexa-showcase-card__veil" aria-hidden="true" />
            <span className="vexa-showcase-card__icon" aria-hidden="true">＋</span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="vexa-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="VEXA image viewer"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
          onTouchStart={(event) => {
            touchStart.current = event.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const endX = event.changedTouches[0]?.clientX ?? touchStart.current;
            const delta = endX - touchStart.current;
            if (Math.abs(delta) > 55 && zoom === 1) move(delta < 0 ? 1 : -1);
            touchStart.current = null;
          }}
        >
          <div className="vexa-lightbox__topbar">
            <span>{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
            <div className="vexa-lightbox__tools">
              <button type="button" onClick={() => setZoom((value) => Math.max(1, value - 0.25))} aria-label="Zoom out">−</button>
              <span>{Math.round(zoom * 100)}%</span>
              <button type="button" onClick={() => setZoom((value) => Math.min(3, value + 0.25))} aria-label="Zoom in">＋</button>
              <button className="vexa-lightbox__close" type="button" onClick={close} aria-label="Close image viewer">×</button>
            </div>
          </div>

          <button className="vexa-lightbox__nav vexa-lightbox__nav--prev" type="button" onClick={() => move(-1)} aria-label="Previous image">‹</button>

          <div className={`vexa-lightbox__stage${zoom > 1 ? " is-zoomed" : ""}`}>
            <div className="vexa-lightbox__image" style={{ transform: `scale(${zoom})` }}>
              <Image src={activeImage} alt={`VEXA visual showcase portrait ${activeIndex + 1}`} fill sizes="100vw" priority />
            </div>
          </div>

          <button className="vexa-lightbox__nav vexa-lightbox__nav--next" type="button" onClick={() => move(1)} aria-label="Next image">›</button>
        </div>
      )}
    </>
  );
}
