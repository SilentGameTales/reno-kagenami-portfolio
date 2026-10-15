"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./CinematicHome.module.css";

const scenes = [
  {
    id: "intro",
    label: "Introduction",
    kicker: "CREATOR IDENTITY · ORIGINAL WORLDS · VISUAL STORYTELLING",
    title: "Ren’ō Kagenami",
    copy: "A creator archive built through character-driven fiction, cinematic art, music, and interconnected worlds.",
    image: "/images/home/reno-kagenami-hero.png",
    imageAlt: "Ren’ō Kagenami with dark hair, glowing golden eyes, and a black mantle illuminated by golden-orange light",
    icon: "/images/home-nav/blue-king.png",
    tone: "blue",
    portrait: true,
    actions: [
      { href: "/projects", label: "Explore the projects", primary: true },
      { href: "/characters", label: "Open the character archive" }
    ]
  },
  {
    id: "fractured-genesis",
    label: "Fractured Genesis",
    kicker: "FLAGSHIP DARK-FANTASY SERIES",
    title: "A world that survived being rewritten.",
    copy: "Enter Fractured Genesis, a dark-fantasy series set across Astra Noctrya, and follow characters moving through a history altered by The Edit.",
    image: "/images/astra-noctrya.jpg",
    imageAlt: "Cinematic artwork representing Fractured Genesis and the world of Astra Noctrya",
    icon: "/images/home-nav/gold-queen.png",
    tone: "gold",
    actions: [
      { href: "/worlds#fractured-genesis", label: "Enter Fractured Genesis", primary: true },
      { href: "/characters", label: "Meet the characters" }
    ]
  },
  {
    id: "vexa",
    label: "VEXA",
    kicker: "MUSIC · PERFORMANCE · VISUAL IDENTITY",
    title: "Music with a world around it.",
    copy: "Enter VEXA’s evolving catalog of cinematic releases, visual concepts, cover art, and performance-driven storytelling.",
    image: "/images/vexa-stage.png",
    imageAlt: "VEXA performing beneath dramatic stage lighting",
    icon: "/images/home-nav/silver-jack.png",
    tone: "silver",
    actions: [
      { href: "/music", label: "Enter VEXA’s catalog", primary: true },
      { href: "/music#vexa-showcase-title", label: "View the visual archive" }
    ]
  },
  {
    id: "stories",
    label: "Stories",
    kicker: "FICTION · CHRONICLES · INTERACTIVE READING",
    title: "Every world leaves a record.",
    copy: "Read the Ren’ō Kagenami origin chronicle, enter Tsukihana Kurogane’s dark-fantasy journey, and follow the archive as it expands.",
    image: "/images/tsukihana.jpg",
    imageAlt: "Tsukihana Kurogane in a dark moonlit fantasy setting",
    icon: "/images/home-nav/crystal-two.png",
    tone: "crystal",
    actions: [
      { href: "/stories", label: "Open the story archive", primary: true },
      { href: "/stories/reno-kagenami", label: "Read The First Light" }
    ]
  },
  {
    id: "creator",
    label: "Creator",
    kicker: "Kahlil · WRITING · DIRECTION · WORLD-BUILDING",
    title: "The work behind the worlds.",
    copy: "Explore the creator process behind the characters, story systems, music, visual development, and AI-assisted production workflow.",
    image: "/images/reno-emblem.png",
    imageAlt: "Ren’ō Kagenami creator emblem glowing against a dark background",
    icon: "/images/home-nav/red-king.png",
    tone: "red",
    emblem: true,
    actions: [
      { href: "/about", label: "Meet the creator", primary: true },
      { href: "/contact", label: "Contact" }
    ]
  }
];

const quickLinks = [
  ["/projects", "Projects", "Fractured Genesis, Parallax Zero, Still Rising, Echoes of Hollow’s Edge, and VEXA"],
  ["/characters", "Characters", "Circular roster, dossiers, forms, and visual archives"],
  ["/stories", "Stories", "Chronicles, chapters, and interactive reading"],
  ["/music", "Music", "VEXA releases and visual identity"],
  ["/about", "Creator", "Process, tools, direction, and creative identity"]
];

export default function CinematicHome() {
  const [active, setActive] = useState(0);
  const wheelLock = useRef(0);
  const touchStart = useRef(null);

  const goTo = useCallback((index) => {
    setActive(Math.max(0, Math.min(scenes.length - 1, index)));
  }, []);

  const step = useCallback((direction) => {
    setActive((current) => Math.max(0, Math.min(scenes.length - 1, current + direction)));
  }, []);

  useEffect(() => {
    const handleKey = (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [step]);

  const handleWheel = (event) => {
    if (Math.abs(event.deltaY) < 22) return;

    const direction = event.deltaY > 0 ? 1 : -1;
    const next = active + direction;
    if (next < 0 || next >= scenes.length) return;

    const now = Date.now();
    if (now - wheelLock.current < 680) {
      event.preventDefault();
      return;
    }

    wheelLock.current = now;
    event.preventDefault();
    goTo(next);
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(deltaX) < 52 || Math.abs(deltaX) < Math.abs(deltaY)) return;
    step(deltaX < 0 ? 1 : -1);
  };

  const current = scenes[active];

  return (
    <div className={styles.homeRoot}>
      <section
        className={styles.stage}
        aria-label="Ren’ō Kagenami interactive introduction"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.sceneStack}>
          {scenes.map((scene, index) => {
            const isActive = index === active;
            return (
              <article
                key={scene.id}
                className={`${styles.scene} ${styles[`tone_${scene.tone}`]} ${isActive ? styles.sceneActive : ""}`}
                aria-hidden={!isActive}
              >
                <div className={`${styles.visual} ${scene.portrait ? styles.visualPortrait : ""} ${scene.emblem ? styles.visualEmblem : ""}`}>
                  <Image
                    src={scene.image}
                    alt={isActive ? scene.imageAlt : ""}
                    fill
                    sizes="100vw"
                    priority={index === 0}
                    className={styles.visualImage}
                  />
                </div>
                <div className={styles.visualShade} />
                <div className={styles.ambient} aria-hidden="true" />

                <div className={styles.sceneContent}>
                  <div className={styles.sceneMeta}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{scene.label}</span>
                  </div>
                  <p className={styles.kicker}>{scene.kicker}</p>
                  <h1>{scene.title}</h1>
                  <p className={styles.copy}>{scene.copy}</p>
                  <div className={styles.actions}>
                    {scene.actions.map((action) => (
                      <Link
                        key={action.href + action.label}
                        href={action.href}
                        className={action.primary ? styles.primaryAction : styles.secondaryAction}
                        tabIndex={isActive ? 0 : -1}
                      >
                        {action.label}
                        <span aria-hidden="true">↗</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => step(-1)}
          disabled={active === 0}
          aria-label="Previous homepage section"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => step(1)}
          disabled={active === scenes.length - 1}
          aria-label="Next homepage section"
        >
          <span aria-hidden="true">›</span>
        </button>

        <div className={styles.symbolNav} aria-label="Homepage sections">
          <div className={styles.navCrest} aria-hidden="true">
            <Image src="/images/home-nav/noctrya-crest.png" alt="" fill sizes="72px" />
          </div>
          <p className={styles.activeLabel}>{current.label}</p>
          <div className={styles.symbolRow}>
            {scenes.map((scene, index) => (
              <button
                key={scene.id}
                type="button"
                onClick={() => goTo(index)}
                className={`${styles.symbolButton} ${styles[`symbol_${scene.tone}`]} ${index === active ? styles.symbolActive : ""}`}
                aria-label={`Open ${scene.label} section`}
                aria-current={index === active ? "step" : undefined}
              >
                <span className={styles.symbolImage}>
                  <Image src={scene.icon} alt="" fill sizes="58px" />
                </span>
              </button>
            ))}
          </div>
          <div className={styles.progress} aria-hidden="true">
            <span style={{ width: `${((active + 1) / scenes.length) * 100}%` }} />
          </div>
        </div>

        <div className={styles.interactionHint} aria-hidden="true">
          <span>← →</span>
          <span>ARROWS · SWIPE · SCROLL</span>
        </div>
      </section>

      <section className={styles.quickSection} aria-labelledby="quick-access-heading">
        <div className={styles.quickShell}>
          <div className={styles.quickHeading}>
            <div>
              <p>QUICK ACCESS</p>
              <h2 id="quick-access-heading">Go deeper into the archive.</h2>
            </div>
            <span>Choose a destination without replaying the introduction.</span>
          </div>
          <div className={styles.quickGrid}>
            {quickLinks.map(([href, title, copy], index) => (
              <Link href={href} className={styles.quickCard} key={href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>
          <div className={styles.socialBar}>
            <p>FOLLOW THE WORK</p>
            <div>
              <a href="https://www.tiktok.com/@silentsynthtales" target="_blank" rel="noreferrer">TikTok · @silentsynthtales ↗</a>
              <a href="https://www.instagram.com/silentsynthtales" target="_blank" rel="noreferrer">Instagram · @silentsynthtales ↗</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
