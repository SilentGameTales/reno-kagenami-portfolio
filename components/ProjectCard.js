import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ href, image, eyebrow, title, copy, tone = "gold", priority = false }) {
  return (
    <Link href={href} className={`project-card tone-${tone}`}>
      <Image src={image} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" priority={priority} />
      <div className="project-card__shade" />
      <div className="project-card__content">
        <p className="eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        <p>{copy}</p>
        <span>Explore project ↗</span>
      </div>
    </Link>
  );
}
