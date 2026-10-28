import Link from "next/link";
import styles from "./page.module.css";
import AlbumPlayer, { AlbumCover } from "./AlbumPlayer";
import PromoGallery from "./PromoGallery";

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
          <p className={styles.kicker}>ALBUM CASE STUDY 02 / EIGHT-TRACK MUSIC COLLECTION</p>
          <div className={styles.heroGrid}>
            <div>
              <h1>Terror <em>in</em><br/>Resonance.</h1>
              <p className={styles.intro}>An interconnected supernatural-horror music project built around contrasting synthetic vocal leads, escalating sound design, and a distinctive dark cinematic visual language.</p>
              <div className={styles.pills}>
                <span>Original music project</span><span>8-track narrative</span><span>Multivocal direction</span>
              </div>
            </div>
            <AlbumCover />
          </div>
          <p className={styles.disclosure}>The official cover, eight audio tracks, and six-image promotional gallery have been uploaded to the development branch. This case study distinguishes finished creative assets and verified file properties from future production plans.</p>
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
          <p className={styles.kicker}>EIGHT TRACKS / 33:44.88 TOTAL</p>
          <h2>The tracklist.</h2>
          <AlbumPlayer />
          <p className={styles.hint}>Technical verification: all eight WAV files are PCM 16-bit, stereo, 44.1 kHz. Source sample peaks measured between −0.16 and −0.09 dBFS. These data establish file properties; they do not constitute a mastering verdict or subjective listening score.</p>
        </div>
      </section>
      <section className={styles.section} id="campaign-visuals">
        <div className={styles.shell}>
          <p className={styles.kicker}>PROMOTIONAL VISUALS / SIX-FRAME CAMPAIGN</p>
          <div className={styles.split}>
            <h2>Behind the walls. <br/>Into the cathedral.</h2>
            <p>A connected series of widescreen stills moves from VEXA's confinement in a dark wooden cavity toward the cold architecture of an abandoned cathedral. Each image explores a different camera position, spatial scale, and emotional beat.</p>
          </div>
          <PromoGallery />
        </div>
      </section>
      <section className={[styles.section, styles.dark].join(" ")}>
        <div className={styles.shell}>
          <p className={styles.kicker}>CREATIVE-OPERATIONS CASE STUDY</p>
          <div className={styles.split}>
            <h2>From sound to image.</h2>
            <p>The original audio masters, streaming previews, official cover, and six selected promotional stills are documented. The next additions will focus on track-specific production prompts, decision logs, and real comparative quality reviews.</p>
          </div>
          <div className={styles.deliverables}>
            <article><span>01</span><h3>Album sound</h3><p>Eight original tracks verified, with prepared streaming copies and measured runtimes. Per-song production prompts can be added as they are documented.</p><small>Eight audio tracks uploaded to the preview branch</small></article>
            <article><span>02</span><h3>Visual campaign</h3><p>Official cover and six selected promotional stills follow one visual progression: hidden passage, escape, cathedral nave, marble stairs, and lectern.</p><small>Official cover and six promotional stills uploaded</small></article>
            <article><span>03</span><h3>Creative QA</h3><p>Documented technical file checks, plus planned qualitative review of visual consistency, vocal casting, motif continuity, and mix clarity.</p><small>Technical baseline captured / listening rubric next</small></article>
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
