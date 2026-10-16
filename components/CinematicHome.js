"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { projectCatalog } from "@/lib/projects";
import styles from "./CinematicHome.module.css";

const socialLinks = [
  { label: "Instagram", handle: "@renokagenami", href: "https://www.instagram.com/renokagenami/", glyph: "◎" },
  { label: "TikTok", handle: "@renokagenami", href: "https://www.tiktok.com/@renokagenami", glyph: "♪" },
  { label: "YouTube", handle: "@renokagenami", href: "https://www.youtube.com/@renokagenami", glyph: "▶" }
];

const scenes = [
  {
    id: "intro", label: "Ren’ō", kicker: "THE CREATOR ARCHIVE", title: "Ren’ō Kagenami",
    copy: "Original worlds. Characters. Music. Cinematic storytelling. Enter an expanding creative archive directed by Kahlil.",
    eyebrow: "Creator of worlds, characters, music, and stories.", tone: "orange", icon: "/images/home-nav/blue-king.png",
    image: "/images/home/reno-kagenami-hero.png", portrait: true,
    actions: [{ href: "#featured-projects", label: "Explore the projects" }, { href: "/characters", label: "Meet the characters" }]
  },
  {
    id: "fractured-genesis", label: "Fractured Genesis", kicker: "FLAGSHIP DARK FANTASY SERIES", title: "Fractured Genesis",
    copy: "Enter Astra Noctrya, a world whose true history was erased. As Kaosu spreads, seven lives converge beneath the shadow of The Edit.",
    eyebrow: "Where history was rewritten, seven souls will write it again.", tone: "violet", icon: "/images/home-nav/gold-queen.png",
    image: "/images/astra-noctrya.jpg",
    actions: [{ href: "/projects/fractured-genesis", label: "Enter Fractured Genesis" }, { href: "/worlds#astra-noctrya", label: "Explore the world" }]
  },
  {
    id: "parallax-zero", label: "Parallax Zero", kicker: "OPEN-WORLD SCIENCE FANTASY RPG", title: "Parallax Zero",
    copy: "One sibling remembers two travelers. Reality insists there was only one. Follow the Zeroth Wanderer into the vast world of Khaelora.",
    eyebrow: "Reality has already lost someone.", tone: "cyan", icon: "/images/home-nav/crystal-two.png",
    actions: [{ href: "/projects/parallax-zero", label: "Discover Parallax Zero" }, { href: "#other-worlds", label: "See more worlds" }]
  },
  {
    id: "still-rising", label: "Still Rising", kicker: "SCI-FI ACTION · ACADEMY · SURVIVAL", title: "Still Rising",
    copy: "By 2080, civilization has rebuilt behind fortified walls. In an age of Z Drives and monsters, a student carries a power that should not exist.",
    eyebrow: "Humanity survived. The mystery did not.", tone: "amber", icon: "/images/home-nav/red-king.png",
    actions: [{ href: "/projects/still-rising", label: "Discover Still Rising" }, { href: "#other-worlds", label: "See more worlds" }]
  },
  {
    id: "echoes", label: "Echoes of Hollow’s Edge", kicker: "DARK FANTASY · ANIME + GAME", title: "Echoes of Hollow’s Edge",
    copy: "Gene returns to the snowy ruins of Zandar. His journey through Callius begins where the world he knew ends.",
    eyebrow: "Some echoes survive the silence.", tone: "frost", icon: "/images/home-nav/silver-jack.png",
    actions: [{ href: "/projects/echoes-of-hollows-edge", label: "Discover Echoes" }, { href: "#other-worlds", label: "See more worlds" }]
  },
  {
    id: "vexa", label: "VEXA", kicker: "ORIGINAL MUSIC · VISUAL PERFORMANCE", title: "VEXA",
    copy: "A music-first identity where every release can become a performance, a visual world, or a story of its own.",
    eyebrow: "Music with a world around it.", tone: "silver", icon: "/images/home-nav/noctrya-crest.png",
    image: "/images/vexa-stage.png",
    actions: [{ href: "/music", label: "Enter VEXA" }, { href: "#vexa-feature", label: "View the showcase" }]
  }
];

const featuredCharacters = [
  { name: "Ren’ō Kagenami", id: "reno", image: "/images/astra-roster/reno-kagenami-roster.png" },
  { name: "Jin’var", id: "jinvar", image: "/images/astra-roster/jinvar-roster.png" },
  { name: "Izanara Nozomi", id: "izanara-nozomi", image: "/images/astra-roster/izanara-nozomi-roster.png" },
  { name: "Nysera", id: "nysera", image: "/images/astra-roster/nysera-full-power-roster.png" },
  { name: "King Felix IV", id: "king-felix-iv", image: "/images/astra-roster/king-felix-iv-roster.png" },
  { name: "Queen of Spades", id: "queen-of-spades", image: "/images/astra-roster/queen-of-spades-roster.png" },
  { name: "Akatsuki Shūya Komoriuta", id: "akatsuki-shuya-komoriuta", image: "/images/astra-roster/akatsuki-shuya-komoriuta-roster.png" },
  { name: "The Red Warden", id: "red-warden", image: "/images/astra-roster/red-warden-roster.png" }
];

const archiveEntries = [
  { name: "Fractured Genesis", category: "WORLD & CHARACTER CINEMATICS", note: "Animation concepts and character sequences", href: "/projects/fractured-genesis", tone: "violet" },
  { name: "Parallax Zero", category: "GAME OPENING CONCEPTS", note: "Opening and character visual development", href: "/projects/parallax-zero", tone: "cyan" },
  { name: "Tsukihana Kurogane", category: "CHARACTER CINEMATICS", note: "Sword forms and anime scene development", href: "/stories", tone: "red" }
];

export default function CinematicHome() {
  const [active, setActive] = useState(0);
  const [featured, setFeatured] = useState(0);
  const stageRef = useRef(null);
  const touchStart = useRef(null);
  const wheelLock = useRef(0);
  const stageVisible = useRef(true);

  const goTo = useCallback((index) => setActive(Math.max(0, Math.min(scenes.length - 1, index))), []);
  const step = useCallback((delta) => setActive((previous) => Math.max(0, Math.min(scenes.length - 1, previous + delta))), []);

  useEffect(() => {
    if (!stageRef.current || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(([entry]) => { stageVisible.current = entry.intersectionRatio > .55; }, { threshold: [.1, .55, .8] });
    observer.observe(stageRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (!stageVisible.current || event.altKey || event.ctrlKey || event.metaKey) return;
      const target = event.target;
      if (target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"].includes(target.tagName))) return;
      if (event.key === "ArrowRight") { event.preventDefault(); step(1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); step(-1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  const onWheel = (event) => {
    if (Math.abs(event.deltaY) < 28 || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    const delta = event.deltaY > 0 ? 1 : -1;
    const next = active + delta;
    if (next < 0 || next >= scenes.length) return; // let normal page scrolling escape the first/last scene
    event.preventDefault();
    const now = Date.now();
    if (now - wheelLock.current < 700) return;
    wheelLock.current = now;
    goTo(next);
  };

  const onTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };
  const onTouchEnd = (event) => {
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) >= 52 && Math.abs(dx) > Math.abs(dy) * 1.15) step(dx < 0 ? 1 : -1);
  };

  const selectedProject = projectCatalog[featured];

  return (
    <div className={styles.homeRoot}>
      <section ref={stageRef} className={styles.stage} onWheel={onWheel} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} aria-label="Cinematic introduction to Ren’ō Kagenami’s projects">
        {scenes.map((scene, index) => {
          const isActive = active === index;
          return (
            <article key={scene.id} className={`${styles.scene} ${styles[`tone_${scene.tone}`]} ${isActive ? styles.sceneActive : ""}`} aria-hidden={!isActive} inert={!isActive}>
              {scene.image && (
                <div className={`${styles.visual} ${scene.portrait ? styles.visualPortrait : ""}`}>
                  <Image src={scene.image} alt={isActive ? `${scene.label} visual` : ""} fill sizes="100vw" priority={index === 0} className={styles.visualImage} />
                </div>
              )}
              <div className={styles.sceneAtmosphere} aria-hidden="true"><span /><i /><b /></div>
              <div className={styles.sceneShade} />
              <div className={styles.sceneContent}>
                <p className={styles.sceneIndex}>CHAPTER {String(index + 1).padStart(2, "0")} / {String(scenes.length).padStart(2, "0")}</p>
                <p className={styles.sceneKicker}>{scene.kicker}</p>
                <h1>{scene.title}</h1>
                <p className={styles.sceneEyebrow}>{scene.eyebrow}</p>
                <p className={styles.sceneCopy}>{scene.copy}</p>
                <div className={styles.sceneActions}>
                  {scene.actions.map((action, a) => (
                    <Link className={a === 0 ? styles.primaryAction : styles.secondaryAction} href={action.href} key={action.href + action.label} tabIndex={isActive ? 0 : -1}>
                      {action.label} <span aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </div>
                {index === 0 && <p className={styles.projectTicker}>FRACTURED GENESIS <span>✦</span> PARALLAX ZERO <span>✦</span> STILL RISING <span>✦</span> ECHOES OF HOLLOW’S EDGE <span>✦</span> VEXA</p>}
              </div>
            </article>
          );
        })}
        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => step(-1)} disabled={active === 0} aria-label="Previous introduction scene"><span aria-hidden="true">‹</span></button>
        <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => step(1)} disabled={active === scenes.length - 1} aria-label="Next introduction scene"><span aria-hidden="true">›</span></button>
        <nav className={styles.symbolNav} aria-label="Choose introduction scene">
          <div className={styles.navCrest} aria-hidden="true"><Image src="/images/home-nav/noctrya-crest.png" alt="" fill sizes="42px" /></div>
          <span className={styles.activeLabel}>{scenes[active].label}</span>
          <div className={styles.symbolRow}>
            {scenes.map((scene, index) => (
              <button key={scene.id} onClick={() => goTo(index)} className={`${styles.symbolButton} ${index === active ? styles.symbolActive : ""}`} aria-label={`Show ${scene.label}`} aria-current={active === index ? "step" : undefined} title={scene.label}>
                <span className={styles.symbolImage}><Image src={scene.icon} alt="" fill sizes="52px" /></span>
              </button>
            ))}
          </div>
          <div className={styles.progress} aria-hidden="true"><span style={{ width: `${((active + 1) / scenes.length) * 100}%` }} /></div>
        </nav>
        <a className={styles.scrollDiscover} href="#featured-projects">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
      </section>

      <section id="featured-projects" className={styles.featuredSection} aria-labelledby="featured-heading">
        <div className={styles.sectionShell}>
          <header className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>THE CREATOR’S WORLDS / 01</p><h2 id="featured-heading">Choose your next reality.</h2></div>
            <p>Each project has its own world, characters, atmosphere, and creative direction. Select one to discover its story.</p>
          </header>
          <div className={styles.projectSelector}>
            <div className={styles.projectRail} role="group" aria-label="Select a featured project">
              {projectCatalog.map((project, index) => <button type="button" className={`${styles.projectRailButton} ${featured === index ? styles.projectRailActive : ""}`} onClick={() => setFeatured(index)} key={project.id} aria-pressed={featured === index}><span>{project.number}</span><strong>{project.name}</strong><small>{project.category}</small></button>)}
            </div>
            <article className={`${styles.featuredPanel} ${styles[`tone_${selectedProject.accent}`]}`} key={selectedProject.id}>
              <div className={styles.featuredArtwork} aria-hidden="true">
                {selectedProject.image && <Image src={selectedProject.image} alt="" fill sizes="(max-width: 900px) 100vw, 55vw" />}
                <div className={styles.featuredHalo} />
              </div>
              <div className={styles.featuredPanelContent}>
                <p className={styles.eyebrow}>{selectedProject.category} · {selectedProject.world}</p>
                <h3>{selectedProject.name}</h3>
                <p className={styles.featuredStatement}>{selectedProject.statement}</p>
                <p>{selectedProject.summary}</p>
                <Link className={styles.inlineAction} href={`/projects/${selectedProject.id}`}>Explore this project <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          </div>
          <div className={styles.viewAll}><Link href="/projects">View the complete project directory <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section id="fractured-genesis" className={styles.genesisSection} aria-labelledby="genesis-heading">
        <div className={styles.genesisBackdrop}><Image src="/images/astra-noctrya.jpg" alt="" fill sizes="100vw" /></div>
        <div className={styles.sectionShell}>
          <div className={styles.genesisTop}>
            <div><p className={styles.eyebrow}>FLAGSHIP UNIVERSE / 02</p><h2 id="genesis-heading">Fractured<br/>Genesis.</h2><p className={styles.genesisTagline}>A series set in the world of <strong>Astra Noctrya</strong>.</p></div>
            <div className={styles.genesisBrief}><p>History itself has been rewritten. As Kaosu spreads across the continents, forbidden truths, competing ideals, and seven destinies draw closer.</p><div className={styles.genesisLinks}><Link href="/worlds#astra-noctrya">Explore the living atlas ↗</Link><Link href="/characters">Enter the character archive ↗</Link><Link href="/projects/fractured-genesis">About the series ↗</Link></div></div>
          </div>
          <div className={styles.characterHeading}><span>SELECTED DOSSIERS</span><Link href="/characters">FULL ROSTER ↗</Link></div>
          <div className={styles.characterRail}>{featuredCharacters.map(({ name, id, image }) => <Link href={`/characters/${id}`} key={id} className={styles.characterLink}><span className={styles.characterPortrait}><Image src={image} alt={name} fill sizes="110px" /></span><span>{name}</span></Link>)}</div>
          <p className={styles.archiveHint}>Character dossiers retain the portrait roster, connected lore, forms, and cinematic visual archives.</p>
        </div>
      </section>

      <section id="other-worlds" className={styles.otherSection} aria-labelledby="other-heading">
        <div className={styles.sectionShell}>
          <header className={styles.sectionHeading}><div><p className={styles.eyebrow}>BEYOND ASTRA NOCTRYA / 03</p><h2 id="other-heading">Other worlds.<br/>Different rules.</h2></div><p>Three distinct narrative projects, each with a growing canon and its own future in animation, games, or fiction.</p></header>
          <div className={styles.otherGrid}>
            {projectCatalog.slice(1,4).map((project) => <Link key={project.id} className={`${styles.otherCard} ${styles[`tone_${project.accent}`]}`} href={`/projects/${project.id}`}><div className={styles.cardAtmosphere} aria-hidden="true"/><span className={styles.cardNumber}>{project.number} / {project.category}</span><div><p>{project.world}</p><h3>{project.name}</h3><p className={styles.cardStatement}>{project.statement}</p><span className={styles.cardAction}>Enter project ↗</span></div></Link>)}
          </div>
        </div>
      </section>

      <section id="cinematics" className={styles.cinemaSection} aria-labelledby="cinema-heading">
        <div className={styles.sectionShell}>
          <header className={styles.sectionHeading}><div><p className={styles.eyebrow}>VISUAL STORYTELLING / 04</p><h2 id="cinema-heading">Cinematic archive.</h2></div><p>From animated character moments to opening sequences and worldbuilding tests. A dedicated home for the moving-image side of the archive.</p></header>
          <div className={styles.filmGrid}>{archiveEntries.map((entry,index) => <Link className={`${styles.filmCard} ${styles[`tone_${entry.tone}`]}`} key={entry.name} href={entry.href}><div className={styles.filmGraphic} aria-hidden="true"><span>{String(index+1).padStart(2,"0")}</span></div><p>{entry.category}</p><h3>{entry.name}</h3><span>{entry.note}</span><strong>Explore project ↗</strong></Link>)}</div>
          <div className={styles.cinemaNote}><p>Video player collection is being curated. No placeholder films or autoplaying media are presented as published releases.</p><a href="https://www.youtube.com/@renokagenami" target="_blank" rel="noopener noreferrer">Visit the YouTube channel ↗</a></div>
        </div>
      </section>

      <section id="vexa-feature" className={styles.vexaSection} aria-labelledby="vexa-heading">
        <div className={styles.vexaArt}><Image src="/images/vexa-stage.png" alt="VEXA music performance artwork" fill sizes="(max-width: 900px) 100vw, 65vw" /></div>
        <div className={styles.sectionShell}><div className={styles.vexaContent}><p className={styles.eyebrow}>MUSIC & IDENTITY / 05</p><h2 id="vexa-heading">VEXA</h2><p className={styles.vexaTag}>Music with a world around it.</p><p>Original songs, visual concepts, performance artwork, and a growing gallery. The music archive remains the place to listen and explore the full collection.</p><Link className={styles.inlineAction} href="/music">Explore VEXA’s music and visual archive ↗</Link></div></div>
      </section>

      <section id="stories" className={styles.storiesSection} aria-labelledby="stories-heading">
        <div className={styles.sectionShell}>
          <header className={styles.sectionHeading}><div><p className={styles.eyebrow}>THE WRITTEN ARCHIVE / 06</p><h2 id="stories-heading">Stories worth entering.</h2></div><p>Discover the narratives behind the visuals through a dedicated reader with chapters, chronology, and the worlds they inhabit.</p></header>
          <div className={styles.storyGrid}>
            <Link href="/stories/reno-kagenami" className={styles.storyCard}><span>ORIGIN CHRONICLE</span><h3>Ren’ō Kagenami:<br/>The First Light</h3><p>Read the origin chronicle.</p><b>READ STORY ↗</b></Link>
            <Link href="/stories" className={`${styles.storyCard} ${styles.tsukihanaCard}`}><span>SKYRIM-INSPIRED FAN FICTION</span><h3>Tsukihana Kurogane:<br/>The Moon That Cuts the Night</h3><p>Enter the story archive.</p><b>EXPLORE STORIES ↗</b></Link>
          </div>
        </div>
      </section>

      <section id="follow" className={styles.socialSection} aria-labelledby="social-heading"><div className={styles.sectionShell}><div className={styles.socialIntro}><p className={styles.eyebrow}>THE CHANNELS / 07</p><h2 id="social-heading">Follow the worlds<br/>as they grow.</h2><p>Character reveals, animation experiments, music, art, and ongoing development—all under the Ren’ō Kagenami handle.</p></div><div className={styles.socialGrid}>{socialLinks.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer" className={styles.socialCard}><span className={styles.socialGlyph} aria-hidden="true">{link.glyph}</span><span><b>{link.label}</b><small>{link.handle}</small></span><span className={styles.socialArrow} aria-hidden="true">↗</span></a>)}</div></div></section>

      <section className={styles.finalSection} aria-label="More destinations"><div className={styles.sectionShell}><p className={styles.eyebrow}>YOUR NEXT DESTINATION</p><h2>Where will you go next?</h2><div className={styles.portalGrid}>{[["/projects","Projects"],["/worlds","Astra Noctrya"],["/characters","Characters"],["/stories","Stories"],["/music","VEXA"],["/about","About"]].map(([href,label],index) => <Link key={href} href={href}><span>{String(index+1).padStart(2,"0")}</span><strong>{label}</strong><span aria-hidden="true">↗</span></Link>)}</div></div></section>
    </div>
  );
}
