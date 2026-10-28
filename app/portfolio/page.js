import Link from "next/link";
import Image from "next/image";
import styles from "./Portfolio.module.css";

export const metadata = {
  title: "AI Creative Portfolio",
  description:
    "AI-assisted creative production, virtual artist direction, original-world development, and multimodal evaluation projects by Kahlil, the creator behind Ren’ō Kagenami.",
};

const projects = [
  {
    number: "01",
    category: "MULTIMODAL ARTIST DEVELOPMENT",
    title: "VEXA",
    subtitle: "Virtual artist identity and music-led visual campaigns",
    description:
      "An original virtual artist developed through character direction, music concepts, visual identity systems, cover campaigns, and performance concepts. The work demonstrates a consistent creative vision across multiple formats.",
    contributions: ["Creative direction", "Character consistency", "Music and visual concepts"],
    status: "Creative archive available; production reel in development",
    href: "/music",
    linkText: "Explore VEXA",
    image: "/images/vexa-stage.png",
    tone: "silver",
  },
  {
    number: "02",
    category: "AI-ASSISTED ANIME PREPRODUCTION",
    title: "Fractured Genesis",
    subtitle: "Original dark-fantasy world, scripts, characters, and scene concepts",
    description:
      "An original series set in Astra Noctrya. Its development includes story and continuity planning, character reference standards, storyboard concepts, and AI voice experimentation.",
    contributions: ["Narrative direction", "Visual continuity", "Voice and scene development"],
    status: "Concept development and reference archive; animation sample planned",
    href: "/projects/fractured-genesis",
    linkText: "Explore Fractured Genesis",
    image: "/images/astra-noctrya.jpg",
    tone: "violet",
  },
  {
    number: "03",
    category: "GAME-ADJACENT IP DEVELOPMENT",
    title: "Still Rising",
    subtitle: "Science-fantasy characters, world systems, and visual development",
    description:
      "An original science-fantasy property with an established cast, powers, factions, and narrative systems. A game-production handoff sample will be built from this material.",
    contributions: ["Worldbuilding", "Character systems", "Creative briefs"],
    status: "Original IP development; asset handoff sample planned",
    href: "/projects/still-rising",
    linkText: "Explore Still Rising",
    image: null,
    tone: "amber",
  },
  {
    number: "04",
    category: "GAME CONCEPT DEVELOPMENT",
    title: "Parallax Zero",
    subtitle: "Original action RPG concept and world direction",
    description:
      "An original science-fantasy game concept developed around a central narrative premise, playable-character identities, world regions, and early creative systems.",
    contributions: ["Game concept direction", "Narrative systems", "World and character development"],
    status: "Concept work; production-ready mockups planned",
    href: "/projects/parallax-zero",
    linkText: "Explore Parallax Zero",
    image: null,
    tone: "cyan",
  },
];

const roles = [
  "AI Creative Producer",
  "AI Content & Video Creator",
  "Generative AI Creative Specialist",
  "Game Creative / AI Art Workflows",
  "Multimodal Content Evaluation",
  "Creative Operations",
];

const phases = [
  {
    n: "01",
    title: "Define",
    description: "Set the creative brief, audience, visual references, story requirements, and production constraints.",
  },
  {
    n: "02",
    title: "Generate",
    description: "Develop AI-assisted visual, narrative, audio, and motion options while keeping the original direction in control.",
  },
  {
    n: "03",
    title: "Review",
    description: "Compare outputs for continuity, clarity, composition, technical issues, and suitability for the final deliverable.",
  },
  {
    n: "04",
    title: "Refine",
    description: "Revise prompts and assets, organize approved versions, and prepare material for publishing or downstream production.",
  },
];

export default function PortfolioPage() {
  return (
    <div className={styles.portfolio}>
      <section className={styles.hero} aria-labelledby="portfolio-title">
        <div className={styles.orb} aria-hidden="true" />
        <div className={styles.shell}>
          <p className={styles.eyebrow}>REN’Ō KAGENAMI / PROFESSIONAL CREATIVE PORTFOLIO</p>
          <h1 id="portfolio-title">
            Original worlds.<br />
            <em>Directed with AI.</em>
          </h1>
          <p className={styles.intro}>
            I’m Kahlil, the independent creator behind Ren’ō Kagenami. I develop
            original music identities, cinematic story worlds, and cross-media concepts
            through AI-assisted creative workflows, direction, and iterative review.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#selected-work">Explore selected work <span aria-hidden="true">↗</span></a>
            <Link className={styles.secondary} href="/contact">Contact me</Link>
          </div>
          <p className={styles.note}>
            Original independent projects. This portfolio distinguishes current work
            from production samples still in development.
          </p>
        </div>
      </section>

      <section className={styles.roles} aria-label="Career focus areas">
        <div className={styles.shell}>
          <p className={styles.kicker}>AREAS OF FOCUS</p>
          <div className={styles.roleList}>
            {roles.map((role) => <span key={role}>{role}</span>)}
          </div>
        </div>
      </section>

      <section className={styles.work} id="selected-work" aria-labelledby="work-heading">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>SELECTED ORIGINAL WORK / 2026</p>
              <h2 id="work-heading">Creative work with a production mindset.</h2>
            </div>
            <p>
              The projects below show the foundations of my visual, audio, narrative,
              and game-adjacent practice. Each will grow into a fuller case study as
              final clips, iterations, and documented deliverables are completed.
            </p>
          </div>
          <div className={styles.grid}>
            {projects.map((project) => (
              <article className={styles.card} key={project.number}>
                <div className={styles.visual + " " + styles[project.tone]}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title + " project artwork"}
                      fill
                      sizes="(max-width: 760px) 100vw, 50vw"
                      className={styles.image}
                    />
                  ) : (
                    <span className={styles.typographicArt} aria-hidden="true">{project.title}</span>
                  )}
                  <span className={styles.visualIndex}>{project.number} / REN’Ō</span>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.category}>{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className={styles.subtitle}>{project.subtitle}</p>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.contributions.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <p className={styles.status}><strong>Status:</strong> {project.status}</p>
                  <Link className={styles.viewLink} href={project.href}>{project.linkText} <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-heading">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>METHOD / ITERATIVE CREATIVE DIRECTION</p>
              <h2 id="process-heading">How I approach production.</h2>
            </div>
            <p>
              AI tools accelerate exploration. Creative direction, consistency
              checks, and the decision about what is ready to use remain essential.
            </p>
          </div>
          <div className={styles.phaseGrid}>
            {phases.map((phase) => (
              <div className={styles.phase} key={phase.n}>
                <span>{phase.n}</span>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.lab} aria-labelledby="lab-heading">
        <div className={styles.shell + " " + styles.labInner}>
          <div>
            <p className={styles.eyebrow}>NEXT CASE STUDIES / IN DEVELOPMENT</p>
            <h2 id="lab-heading">Beyond the final image.</h2>
            <p>
              The next additions will include a VEXA short-form video breakdown,
              a Fractured Genesis script-to-scene study, a game asset handoff
              example, and a multimodal evaluation worksheet using real comparison data.
            </p>
          </div>
          <div className={styles.labList}>
            <div><span>01</span><strong>Video production</strong><small>Script, storyboard, shots, finished edit</small></div>
            <div><span>02</span><strong>Creative workflow</strong><small>Brief, tools, prompt iterations, revisions</small></div>
            <div><span>03</span><strong>Evaluation & QA</strong><small>Rubrics, issue classification, before/after evidence</small></div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>AVAILABLE FOR CREATIVE OPPORTUNITIES</p>
          <h2>Building worlds.<br /><em>Building workflows.</em></h2>
          <p>
            Interested in AI-assisted video production, multimodal content,
            original-IP development, and creative quality evaluation.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
            <Link className={styles.secondary} href="/projects">See the full creative archive</Link>
          </div>
          <p className={styles.social}>Creator identity: @renokagenami · Virtual artist: @VEXAOfficialbyReno</p>
        </div>
      </section>
    </div>
  );
}
