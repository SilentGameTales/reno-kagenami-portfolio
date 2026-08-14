"use client";

import Image from "next/image";
import Link from "next/link";
import CharacterPortalLink from "./CharacterPortalLink";
import CharacterVisualWheel from "./CharacterVisualWheel";
import { getCharacterGallery, getCharacterPortrait, getCharacterTransition, getCharacterNotionUrl } from "@/lib/characterExperience";
import { getFaction } from "@/lib/characters";
import styles from "./CharacterDossier.module.css";

export default function CharacterDossier({ character, related, forms }) {
  const portrait = getCharacterPortrait(character);
  const gallery = getCharacterGallery(character);
  const notionUrl = getCharacterNotionUrl(character.id);

  return (
    <article className={`${styles.page} ${styles[`accent_${character.accent}`] || ""}`}>
      <section className={styles.hero}>
        <Image className={styles.heroBackdrop} src={character.image} alt="" fill sizes="100vw" priority />
        <div className={styles.heroShade} />
        <div className={`section-shell ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <Link className={styles.back} href="/characters">← Character archive</Link>
            <p className="eyebrow">ASTRA NOCTRYA DOSSIER · {getFaction(character)}</p>
            <h1>{character.name}</h1>
            <p className={styles.title}>{character.title}</p>
            <blockquote>{character.quoteType ? <><small>{character.quoteType}</small>{character.quote}</> : <>“{character.quote}”</>}</blockquote>
          </div>
          <div className={styles.medallionWrap}>
            <div className={styles.medallion}><Image src={portrait} alt={character.name} fill sizes="(max-width: 760px) 68vw, 360px" className={styles.medallionImage} priority /></div>
          </div>
        </div>
      </section>

      {forms?.length > 1 ? (
        <section className={`section-shell ${styles.formsSection}`}>
          <div>
            <p className="eyebrow">CONNECTED FORMS / STATES</p>
            <h2>One identity. Multiple states.</h2>
          </div>
          <div className={styles.formRail}>
            {forms.map((form) => {
              const active = form.id === character.id;
              return (
                <CharacterPortalLink key={form.id} href={`/characters/${form.id}`} transition={getCharacterTransition(form.id)} className={`${styles.formLink} ${active ? styles.formActive : ""}`} ariaLabel={`Open ${form.name} ${form.title}`}>
                  <span className={styles.formPortrait}><Image src={getCharacterPortrait(form)} alt={form.name} fill sizes="88px" /></span>
                  <span><strong>{form.name}</strong><small>{form.title}</small></span>
                </CharacterPortalLink>
              );
            })}
          </div>
        </section>
      ) : null}

      <section className={`section-shell ${styles.overview}`}>
        <div className={styles.bio}>
          <p className="eyebrow">BIOGRAPHY</p>
          <h2>Inside the record.</h2>
          <p>{character.copy}</p>
          {notionUrl ? <a className={styles.notionButton} href={notionUrl} target="_blank" rel="noreferrer">View extended lore in Notion ↗</a> : null}
        </div>
        <div className={styles.facts}>
          {character.details.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className={`section-shell ${styles.showcaseHeading}`}>
          <div><p className="eyebrow">VISUAL ARCHIVE</p><h2>Explore the character.</h2></div>
          <p>Use the arrows, mouse wheel, or swipe gestures to move through the archive. Open the centered image for a full-screen view with zoom.</p>
        </div>
        <div className={`section-shell ${styles.showcase}`}>
          <CharacterVisualWheel images={gallery} name={character.name} />
        </div>
      </section>

      <section className={`section-shell ${styles.tags}`}>
        <p className="eyebrow">ARCHIVE INDEX</p>
        <div>{character.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </section>

      <section className={`section-shell ${styles.related}`}>
        <div className={styles.relatedHeading}><div><p className="eyebrow">CONNECTED LORE</p><h2>Follow the relationship trail.</h2></div><Link href="/characters">View all characters →</Link></div>
        <div className={styles.relatedGrid}>
          {related.map((entry) => (
            <CharacterPortalLink key={entry.id} href={`/characters/${entry.id}`} transition={getCharacterTransition(entry.id)} className={styles.relatedCard} ariaLabel={`Open ${entry.name} dossier`}>
              <span className={styles.relatedPortrait}><Image src={getCharacterPortrait(entry)} alt={entry.name} fill sizes="150px" /></span>
              <span className={styles.relatedCopy}><small>{entry.title}</small><strong>{entry.name}</strong></span>
            </CharacterPortalLink>
          ))}
        </div>
      </section>
    </article>
  );
}
