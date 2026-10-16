import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projectCatalog } from "@/lib/projects";
import styles from "../Projects.module.css";

export function generateStaticParams() {
  return projectCatalog.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.name, description: project.summary };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className={`${styles.detail} ${styles[project.accent]}`}>
      <section className={styles.hero}>
        {project.image && <div className={styles.heroImage}><Image src={project.image} alt={`${project.name} visual artwork`} fill sizes="100vw" priority /></div>}
        <div className={styles.heroShade} />
        <div className={styles.heroOrbit} aria-hidden="true" />
        <div className={styles.heroText}>
          <Link className={styles.back} href="/projects">← All projects</Link>
          <p className={styles.eyebrow}>{project.category} / {project.world}</p>
          <h1>{project.name}</h1>
          <p className={styles.statement}>{project.statement}</p>
        </div>
      </section>
      <section className={styles.detailBody}>
        <div>
          <p className={styles.eyebrow}>PROJECT OVERVIEW</p>
          <h2>A world in development.</h2>
          <p className={styles.synopsis}>{project.summary}</p>
          <p className={styles.format}>{project.format}</p>
          <div className={styles.links}>
            {project.links.map((link) => <Link key={link.href} href={link.href}>{link.label} ↗</Link>)}
            {project.id === "fractured-genesis" && <Link href="/stories">Explore the stories ↗</Link>}
            {project.id !== "vexa" && project.id !== "fractured-genesis" && <Link href="/contact">Follow the development ↗</Link>}
          </div>
        </div>
        <aside className={styles.focus}>
          <p className={styles.eyebrow}>EXPLORE THE CONCEPT</p>
          {project.focus.map((point, index) => <div className={styles.focusItem} key={point}><span>0{index + 1}</span><p>{point}</p></div>)}
          <p className={styles.editorialNote}>This project page will expand as its public character art, scenes, videos, and production material are added.</p>
        </aside>
      </section>
      <section className={styles.nextSection}>
        <p className={styles.eyebrow}>CONTINUE EXPLORING</p>
        <div className={styles.nextList}>
          {projectCatalog.filter(({ id }) => id !== project.id).slice(0,3).map((other) => <Link href={`/projects/${other.id}`} key={other.id}>{other.name}<span>↗</span></Link>)}
        </div>
      </section>
    </div>
  );
}
