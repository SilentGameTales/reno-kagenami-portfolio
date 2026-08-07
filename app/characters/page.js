"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { characters, getFaction } from "@/lib/characters";

const factions = ["All", "Core Cast", "Black Meridian", "Truthrunner Network", "Stillwake", "Imperial Crown", "Cosmic Forces", "Independent"];

export default function CharactersPage() {
  const [active, setActive] = useState(characters[0]);
  const [faction, setFaction] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => characters.filter((character) => {
    const factionMatch = faction === "All" || getFaction(character) === faction;
    const haystack = `${character.name} ${character.title} ${(character.tags || []).join(" ")}`.toLowerCase();
    return factionMatch && haystack.includes(query.trim().toLowerCase());
  }), [faction, query]);

  const stageCharacter = filtered.some((entry) => entry.id === active.id) ? active : (filtered[0] || active);

  return (
    <>
      <section className="page-hero section-shell">
        <p className="eyebrow">CHARACTER ARCHIVE</p>
        <h1>Every power leaves a scar.</h1>
        <p className="lede">The Astra Noctrya codex connects biographies, factions, abilities, and relationship trails. Filter the archive, open a record, then follow the people tied to it.</p>
      </section>

      <section className="section-shell character-filter-bar" aria-label="Character archive filters">
        <label className="character-search"><span>SEARCH</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, title, ability…" /></label>
        <div className="faction-filter-list">{factions.map((item) => <button className={faction === item ? "active" : ""} onClick={() => setFaction(item)} key={item}>{item}</button>)}</div>
        <small>{filtered.length} records visible</small>
      </section>

      {filtered.length > 0 ? <section className={`character-stage character-stage--${stageCharacter.accent}`}>
        <div className="section-shell character-stage__grid">
          <div className="character-tabs" role="tablist" aria-label="Character profiles">
            {filtered.map((character) => <button type="button" role="tab" aria-selected={stageCharacter.id === character.id} key={character.id} onClick={() => setActive(character)}><span>{character.name}</span><small>{character.title}</small></button>)}
          </div>
          <div className="character-portrait"><Image src={stageCharacter.image} alt={stageCharacter.name} fill sizes="(max-width: 900px) 100vw, 45vw" priority /></div>
          <div className="character-copy" aria-live="polite">
            <p className="eyebrow">{getFaction(stageCharacter)} · {stageCharacter.title}</p><h2>{stageCharacter.name}</h2><p>{stageCharacter.copy}</p>
            <div className="character-stats">{stageCharacter.details.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
            <blockquote>{stageCharacter.quoteType ? <><small>{stageCharacter.quoteType}</small>{stageCharacter.quote}</> : <>“{stageCharacter.quote}”</>}</blockquote>
            <div className="archive-tags">{stageCharacter.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <Link className="button button-primary profile-open-button" href={`/characters/${stageCharacter.id}`}>Open full profile</Link>
          </div>
        </div>
      </section> : <section className="section-shell archive-empty"><h2>No records found.</h2><p>Try another faction or search term.</p></section>}

      <section className="section-shell character-directory">
        <div className="hub-section-heading"><div><p className="eyebrow">ASTRA NOCTRYA DIRECTORY</p><h2>Choose a record.</h2></div><p>Every portrait opens into a complete character file. Relationship links inside each profile continue directly into connected lore.</p></div>
        <div className="character-directory-grid">{filtered.map((character) => <Link className={`directory-card directory-card--${character.accent}`} href={`/characters/${character.id}`} key={character.id}><div className="directory-card__image"><Image src={character.image} alt={character.name} fill sizes="(max-width: 700px) 100vw, 25vw" /></div><div className="directory-card__shade" /><div className="directory-card__copy"><p>{getFaction(character)} · {character.title}</p><h3>{character.name}</h3><span>Open archive →</span></div></Link>)}</div>
      </section>
    </>
  );
}
