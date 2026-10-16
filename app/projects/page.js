import Link from "next/link";
import { projectCatalog } from "@/lib/projects";
import styles from "./Projects.module.css";

export const metadata = {
  title: "Projects & Worlds",
  description: "Explore Fractured Genesis, Parallax Zero, Still Rising, Echoes of Hollow’s Edge, and VEXA by Ren’ō Kagenami."
};

export default function ProjectsPage() {
  return (
    <div className={styles.directory}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>THE REN’Ō ARCHIVE / 05 CREATIVE WORLDS</p>
        <h1>Different worlds. One creator.</h1>
        <p>Step into stories, games, visual experiences, and music identities. Each project is a separate creative world with its own direction and developing archive.</p>
      </div>
      <div className={styles.entries}>
        {projectCatalog.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className={`${styles.entry} ${styles[project.accent]}`}>
            <div className={styles.mark} aria-hidden="true"><span>{project.number}</span></div>
            <div>
              <p className={styles.type}>{project.category} / {project.world}</p>
              <h2>{project.name}</h2>
              <p>{project.statement}</p>
            </div>
            <span className={styles.arrow} aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
      <p className={styles.bottom}><Link href="/">← Return to the cinematic homepage</Link></p>
    </div>
  );
}
