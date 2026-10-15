import Link from "next/link";
import PageHero from "@/components/PageHero";
import styles from "./ProjectsHub.module.css";

export const metadata = {
  title: "Projects",
  description: "Explore Fractured Genesis, Parallax Zero, Still Rising, Echoes of Hollow’s Edge, and VEXA."
};

const projects = [
  {
    index: "01",
    title: "Fractured Genesis",
    type: "FLAGSHIP SERIES · DARK FANTASY",
    status: "ACTIVE ARCHIVE",
    tone: "genesis",
    copy: "A character-driven dark-fantasy series set in Astra Noctrya, where rewritten history, divine interference, fractured continents, and inherited wounds collide.",
    actions: [["/worlds#fractured-genesis", "Enter the world archive"], ["/characters", "Open character dossiers"]]
  },
  {
    index: "02",
    title: "Parallax Zero",
    type: "GAME PROJECT · SCI-FANTASY",
    status: "IN DEVELOPMENT",
    tone: "parallax",
    copy: "A developing game project set on Khaelora, beginning in the modern city of Renovah and expanding through its own cast, systems, mysteries, and visual identity.",
    actions: []
  },
  {
    index: "03",
    title: "Still Rising",
    type: "ORIGINAL PROJECT",
    status: "ARCHIVE OPENING SOON",
    tone: "rising",
    copy: "Still Rising is joining the official project archive. Its dedicated story, characters, visual language, and media presentation will be added in the next expansion pass.",
    actions: []
  },
  {
    index: "04",
    title: "Echoes of Hollow’s Edge",
    type: "ORIGINAL PROJECT",
    status: "ARCHIVE OPENING SOON",
    tone: "echoes",
    copy: "Echoes of Hollow’s Edge is now part of the official project slate, with its dedicated world, cast, key art, and story material reserved for the next expansion.",
    actions: []
  },
  {
    index: "05",
    title: "VEXA",
    type: "MUSIC · PERFORMANCE · VISUAL IDENTITY",
    status: "ACTIVE ARCHIVE",
    tone: "vexa",
    copy: "A cinematic artist identity built through original songs, visual eras, fashion, performance concepts, cover art, and narrative music videos.",
    actions: [["/music", "Open the music archive"]]
  }
];

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <PageHero
        eyebrow="PROJECTS · UNIVERSES · MUSIC"
        title="One creator. Multiple worlds."
        copy="Each series, game concept, and music identity gets its own visual language while remaining connected through the Ren’ō Kagenami archive."
      />
      <section className={`section-shell ${styles.intro}`}>
        <p className="eyebrow">THE PROJECT SLATE</p>
        <h2>Choose where to enter.</h2>
        <p>Fractured Genesis is the current flagship archive. The rest of the slate is being established now so future characters, cinematics, music, and story material have a permanent home.</p>
      </section>
      <section className={`section-shell ${styles.grid}`}>
        {projects.map((project) => (
          <article key={project.title} className={`${styles.card} ${styles[`tone_${project.tone}`]}`}>
            <div className={styles.topline}><span>{project.index}</span><span>{project.status}</span></div>
            <p className={styles.type}>{project.type}</p>
            <h2>{project.title}</h2>
            <p className={styles.copy}>{project.copy}</p>
            {project.actions.length ? (
              <div className={styles.actions}>
                {project.actions.map(([href,label],i)=><Link key={href} href={href} className={i===0?styles.primary:styles.secondary}>{label}<span>↗</span></Link>)}
              </div>
            ) : <div className={styles.pending}>Dedicated project page coming next.</div>}
          </article>
        ))}
      </section>
      <section className={`section-shell ${styles.follow}`}>
        <div><p className="eyebrow">FOLLOW DEVELOPMENT</p><h2>See the archive grow between site updates.</h2></div>
        <div>
          <a href="https://www.tiktok.com/@silentsynthtales" target="_blank" rel="noreferrer">TikTok · @silentsynthtales ↗</a>
          <a href="https://www.instagram.com/silentsynthtales" target="_blank" rel="noreferrer">Instagram · @silentsynthtales ↗</a>
        </div>
      </section>
    </div>
  );
}
