import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Terror in Resonance — AI Album Case Study",
  description: "Original eight-track supernatural horror album concept and multimodal creative direction for VEXA, under the Ren’ō Kagenami creative identity.",
};

const tracks = [
  {no:"01",name:"The First Transmission",vocal:"Male lead"},
  {no:"02",name:"Whispers Through the Static",vocal:"Duet"},
  {no:"03",name:"The Woman in the Walls",vocal:"VEXA lead"},
  {no:"04",name:"Footsteps Without Shadows",vocal:"Male lead"},
  {no:"05",name:"The Devil’s Frequency",vocal:"Duet"},
  {no:"06",name:"Lullaby for the Hollow",vocal:"VEXA lead"},
  {no:"07",name:"When the Dead Sing",vocal:"Duet"},
  {no:"08",name:"Terror in Resonance",vocal:"Duet"},
];

const pillars = [
  {title:"Connected narrative",copy:"Eight songs form an escalating supernatural-horror sequence. The track order is part of the storytelling rather than a random set of singles."},
  {title:"Directed voice casting",copy:"Male-led songs, duet performances, and VEXA-led tracks alternate across the album to develop different perspectives in the same haunting narrative."},
  {title:"Recurring sonic language",copy:"The creative brief uses a recurring four-note motif, increasingly oppressive pulse, resonance harmonies, and dark melodic Brooklyn drill / cinematic gothic R&B."},
  {title:"Visual identity",copy:"A ruined cathedral, crimson fog, fractured stained glass, spectral imagery, and premium gothic streetwear guide the album's campaign artwork."},
];

export default function TerrorInResonancePage() {
  return (
    <div className={styles.album}>
      <header className={styles.hero}>
        <div className={styles.shell}>
          <Link href="/portfolio/vexa" className={styles.back}>← VEXA production case studies</Link>
          <p className={styles.kicker}>ALBUM CASE STUDY 02 / EIGHT-TRACK CONCEPT</p>
          <div className={styles.heroGrid}>
            <div>
              <h1>Terror <em>in</em><br/>Resonance.</h1>
              <p className={styles.intro}>An interconnected supernatural-horror music project built around contrasting synthetic vocal leads, escalating sound design, and a distinctive dark cinematic visual language.</p>
              <div className={styles.pills}>
                <span>Original music project</span><span>8-track narrative</span><span>Multivocal direction</span>
              </div>
            </div>
            <div className={styles.albumVisual} aria-label="Conceptual placeholder inspired by the album's cathedral, crimson resonance, and spectral atmosphere. Final cover not yet uploaded.">
              <div className={styles.rose} aria-hidden="true"/>
              <div className={styles.visualTitle}><span>V E X A</span><strong>TERROR<br/>IN<br/>RESONANCE</strong><small>Visual direction board · final cover pending</small></div>
            </div>
          </div>
          <p className={styles.disclosure}>This page documents the established creative concept and track plan. Individual album audio files and original cover art are not yet hosted here, and no delivery metrics or unverified tool-specific production claims are presented.</p>
        </div>
      </header>
      <section className={styles.section}>
        <div className={styles.shell}>
          <p className={styles.kicker}>CREATIVE BRIEF / ALBUM ARCHITECTURE</p>
          <div className={styles.split}>
            <h2>One story.<br/>Eight transmissions.</h2>
            <p>Instead of treating each track as an isolated release, the project organizes the music as a rising sequence of encounters and disturbances. VEXA's voice shares the record with male and duet leads, giving its soundscape multiple dramatic perspectives. The visual direction connects psychological horror with streetwear and gothic architecture.</p>
          </div>
          <div className={styles.pillars}>
            {pillars.map((item,i)=><article key={item.title}><span>{String(i+1).padStart(2,"0")}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
          </div>
        </div>
      </section>
      <section className={[styles.section, styles.dark].join(" ")}>
        <div className={styles.shell}>
          <p className={styles.kicker}>APPROVED EIGHT-TRACK SEQUENCE</p>
          <h2>The tracklist.</h2>
          <div className={styles.tracks}>
            {tracks.map(t=><div className={styles.track} key={t.no}><span className={styles.number}>{t.no}</span><strong>{t.name}</strong><small>{t.vocal}</small></div>)}
          </div>
          <p className={styles.hint}>Voice labels reflect the planned lead/duet structure. Final mixes, audio runtimes, and streaming embeds will be added only after the source tracks are checked.</p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.shell}>
          <p className={styles.kicker}>CREATIVE-OPERATIONS CASE STUDY</p>
          <div className={styles.split}>
            <h2>From sound to image.</h2>
            <p>The case-study expansion will present original music and visual assets beside the decisions behind them: narrative briefs, vocal-style constraints, approved wardrobe and cover references, generation iterations, consistency checks, and final media selection.</p>
          </div>
          <div className={styles.deliverables}>
            <article><span>01</span><h3>Album sound</h3><p>Track-by-track playback and documented music prompts, with no invented measurements.</p><small>Media integration upcoming</small></article>
            <article><span>02</span><h3>Visual campaign</h3><p>Official album artwork, photorealistic VEXA styling, and selected approved outfit concepts.</p><small>Original image upload upcoming</small></article>
            <article><span>03</span><h3>Creative QA</h3><p>Visual consistency, contrast between voices, motif continuity, mix clarity, and reviewer notes.</p><small>Formal comparison rubric upcoming</small></article>
          </div>
        </div>
      </section>
      <section className={styles.close}>
        <div className={styles.shell}>
          <p className={styles.kicker}>REN’Ō KAGENAMI / MULTIMODAL MUSIC PRODUCTION</p>
          <h2>Eight tracks. <em>One haunting frequency.</em></h2>
          <Link className={styles.cta} href="/portfolio/vexa">Explore Before the Lights and VEXA <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </div>
  );
}
