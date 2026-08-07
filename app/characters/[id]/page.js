import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { characters, getCharacter, getRelatedCharacters, getFaction } from "@/lib/characters";

export function generateStaticParams() {
  return characters.map((character) => ({ id: character.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const character = getCharacter(id);
  if (!character) return {};
  return {
    title: `${character.name} | Ren’ō Kagenami Character Archive`,
    description: character.copy,
  };
}

export default async function CharacterProfilePage({ params }) {
  const { id } = await params;
  const character = getCharacter(id);
  if (!character) notFound();

  const currentIndex = characters.findIndex((entry) => entry.id === character.id);
  const explicitRelated = getRelatedCharacters(character.id);
  const related = explicitRelated.length ? explicitRelated.slice(0, 4) : [1, 2, 3].map((offset) => characters[(currentIndex + offset) % characters.length]);

  return (
    <article className={`profile-page profile-page--${character.accent}`}>
      <section className="profile-hero">
        <Image className="profile-hero__image" src={character.image} alt={character.name} fill sizes="100vw" priority />
        <div className="profile-hero__veil" />
        <div className="section-shell profile-hero__content">
          <Link className="profile-back" href="/characters">← Character archive</Link>
          <p className="eyebrow">ASTRA NOCTRYA CHARACTER FILE · {getFaction(character)}</p>
          <h1>{character.name}</h1>
          <p className="profile-title">{character.title}</p>
          <blockquote>{character.quoteType ? <><small>{character.quoteType}</small>{character.quote}</> : <>“{character.quote}”</>}</blockquote>
        </div>
      </section>

      <section className="section-shell profile-overview">
        <div className="profile-overview__intro">
          <p className="eyebrow">BIOGRAPHY</p>
          <h2>Inside the record.</h2>
          <p>{character.copy}</p>
        </div>
        <div className="profile-facts">
          {character.details.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="profile-dossier">
        <div className="section-shell profile-dossier__grid">
          <div>
            <p className="eyebrow">STORY FUNCTION</p>
            <h2>Why this character matters.</h2>
          </div>
          <div className="profile-dossier__cards">
            <article>
              <span>01</span>
              <h3>Presence</h3>
              <p>{character.name} changes the emotional temperature of every scene they enter. Their power is inseparable from the history, fear, or conviction driving them.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Conflict</h3>
              <p>Their greatest danger is never limited to an enemy. It is the cost attached to their own methods, loyalties, and the force they are willing to unleash.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Archive Status</h3>
              <p>This profile is part of the expanding Astra Noctrya codex. Abilities, relationships, appearances, and alternate forms can be added as the canon develops.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell profile-tags-section">
        <p className="eyebrow">ARCHIVE INDEX</p>
        <div className="profile-tag-cloud">
          {character.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </section>

      <section className="section-shell related-records">
        <div className="hub-section-heading">
          <div>
            <p className="eyebrow">RELATIONSHIP LINKS</p>
            <h2>Follow the connected lore.</h2>
          </div>
          <Link className="text-link" href="/characters">View all characters →</Link>
        </div>
        <div className="related-records-grid">
          {related.map((entry) => (
            <Link className={`related-record related-record--${entry.accent}`} href={`/characters/${entry.id}`} key={entry.id}>
              <div className="related-record__image"><Image src={entry.image} alt={entry.name} fill sizes="(max-width: 700px) 100vw, 33vw" /></div>
              <div className="related-record__shade" />
              <div className="related-record__copy">
                <p>{entry.title}</p>
                <h3>{entry.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
