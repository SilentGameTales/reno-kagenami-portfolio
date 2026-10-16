"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { characters, getFaction } from "@/lib/characters";
import { getCharacterDisplayArt, getCharacterRosterArt, getCharacterOfficialArt, getCharacterTransition, getCharacterFormGroup, notionCharacterIndexUrl } from "@/lib/characterExperience";
import CharacterPortalLink from "./CharacterPortalLink";
import { useArtStylePreference } from "./useArtStylePreference";
import styles from "./AstraCharacterRoster.module.css";

export default function AstraCharacterRoster() {
  const [query, setQuery] = useState("");
  const [faction, setFaction] = useState("All");
  const [artStyle, chooseArtStyle] = useArtStylePreference();

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
          <p className="eyebrow">FRACTURED GENESIS · ASTRA NOCTRYA CHARACTER ARCHIVE</p>
          <h1>Choose a soul. Open the record.</h1>
          <p className={styles.lede}>Every portrait is a gateway into a full character dossier, connected forms, relationships, and an expanding visual archive.</p>
          <div className={styles.heroActions}><a href={notionCharacterIndexUrl} target="_blank" rel="noreferrer">Open Notion character index ↗</a></div>
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
        <div className={styles.artFilter} role="group" aria-label="Choose character portrait art style">
          <span>PORTRAIT STYLE</span>
          <div className={styles.artFilterOptions}>
            <button type="button" aria-pressed={artStyle === "official"} className={artStyle === "official" ? styles.artFilterActive : ""} onClick={() => chooseArtStyle("official")}>Official 2D</button>
            <button type="button" aria-pressed={artStyle === "cinematic"} className={artStyle === "cinematic" ? styles.artFilterActive : ""} onClick={() => chooseArtStyle("cinematic")}>Cinematic</button>
          </div>
          <p>Official 2D art is available for 19 characters. Others keep their existing portraits.</p>
        </div>
        <small>{filtered.length} records visible</small>
      </section>

      <section className={`section-shell ${styles.roster}`}>
        {filtered.map((character) => {
          const portrait = getCharacterRosterArt(character, artStyle);
          const isOfficial = artStyle === "official" && Boolean(getCharacterOfficialArt(character));
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
                  <Image src={portrait} alt={character.name} fill sizes="(max-width: 640px) 42vw, 190px" className={`${styles.portrait} ${isOfficial ? styles.portraitOfficial : ""}`} />
                </span>
                <span className={styles.aura} />
              </CharacterPortalLink>
              <div className={styles.copy}>
                <p>{getFaction(character)} {isOfficial ? "· 2D" : ""}</p>
                <h2>{character.name}</h2>
                <span>{character.title}</span>
                {formGroup ? <small>{formGroup.members.length} connected · {formGroup.label}</small> : null}
              </div>
            </article>
          );
        })}
      </section>

      {filtered.length === 0 ? <section className={`section-shell ${styles.empty}`}><h2>No records found.</h2><p>Try another search term or faction.</p></section> : null}
    </>
  );
}
