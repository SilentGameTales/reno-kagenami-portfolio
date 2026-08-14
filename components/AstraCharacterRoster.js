"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { characters, getFaction } from "@/lib/characters";
import { getCharacterPortrait, getCharacterTransition, getCharacterFormGroup } from "@/lib/characterExperience";
import CharacterPortalLink from "./CharacterPortalLink";
import styles from "./AstraCharacterRoster.module.css";

export default function AstraCharacterRoster() {
  const [query, setQuery] = useState("");
  const [faction, setFaction] = useState("All");

  const factions = useMemo(() => ["All", ...Array.from(new Set(characters.map(getFaction))).sort()], []);
  const filtered = useMemo(() => characters.filter((character) => {
    const factionMatch = faction === "All" || getFaction(character) === faction;
    const haystack = `${character.name} ${character.title} ${getFaction(character)} ${(character.tags || []).join(" ")}`.toLowerCase();
    return factionMatch && haystack.includes(query.trim().toLowerCase());
  }), [faction, query]);

  return (
    <>
      <section className={styles.hero}>
        <div className="section-shell">
          <p className="eyebrow">ASTRA NOCTRYA · CHARACTER ARCHIVE</p>
          <h1>Choose a soul. Open the record.</h1>
          <p className={styles.lede}>Every portrait is a gateway into a full character dossier, connected forms, relationships, and an expanding visual archive.</p>
        </div>
      </section>

      <section className={`section-shell ${styles.controls}`} aria-label="Character archive filters">
        <label className={styles.search}>
          <span>SEARCH THE ARCHIVE</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, title, faction, ability…" />
        </label>
        <div className={styles.filters}>
          {factions.map((item) => (
            <button type="button" key={item} className={faction === item ? styles.active : ""} onClick={() => setFaction(item)}>{item}</button>
          ))}
        </div>
        <small>{filtered.length} records visible</small>
      </section>

      <section className={`section-shell ${styles.roster}`}>
        {filtered.map((character) => {
          const portrait = getCharacterPortrait(character);
          const formGroup = getCharacterFormGroup(character.id);
          return (
            <article className={styles.entry} key={character.id}>
              <CharacterPortalLink
                href={`/characters/${character.id}`}
                transition={getCharacterTransition(character.id)}
                className={`${styles.portraitLink} ${styles[`accent_${character.accent}`] || ""}`}
                ariaLabel={`Open ${character.name} dossier`}
              >
                <span className={styles.ring} />
                <span className={styles.portraitFrame}>
                  <Image src={portrait} alt={character.name} fill sizes="(max-width: 640px) 42vw, 190px" className={styles.portrait} />
                </span>
                <span className={styles.aura} />
              </CharacterPortalLink>
              <div className={styles.copy}>
                <p>{getFaction(character)}</p>
                <h2>{character.name}</h2>
                <span>{character.title}</span>
                {formGroup ? <small>{formGroup.members.length} connected forms / states</small> : null}
              </div>
            </article>
          );
        })}
      </section>

      {filtered.length === 0 ? <section className={`section-shell ${styles.empty}`}><h2>No records found.</h2><p>Try another search term or faction.</p></section> : null}
    </>
  );
}
