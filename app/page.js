import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { characters } from "@/lib/characters";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <Image
          className="home-hero__image"
          src="/images/reno-hero.png"
          alt="Ren’ō Kagenami, a dark-haired figure wearing black armor illuminated by golden-orange energy"
          fill
          sizes="100vw"
          priority
        />
        <div className="home-hero__veil" />
        <div className="home-hero__embers" aria-hidden="true" />
        <div className="home-hero__content section-shell">
          <p className="eyebrow">ORIGINAL WORLDS · MUSIC · VISUAL STORYTELLING</p>
          <h1>Stories should feel like places you survived.</h1>
          <p>
            Ren’ō Kagenami is the creator identity of Kahlil—building character-driven worlds through fiction,
            concept art, music, anime-inspired filmmaking, and AI-assisted creative direction.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="#interactive-hub">Enter the interactive hub</Link>
            <Link className="button button-ghost" href="/about">Meet the creator</Link>
          </div>
        </div>
        <span className="scroll-cue">SCROLL TO EXPLORE</span>
      </section>

      <section className="section-shell intro-copy reveal-section">
        <div>
          <p className="eyebrow">THE ARCHIVE</p>
          <h2>One identity. Many universes.</h2>
        </div>
        <p>
          Every project begins with a character, a wound, or a question. From the fractured continents of Astra
          Noctrya to VEXA’s precision-built music persona, each work is developed as part of a living creative archive.
        </p>
      </section>

      <section className="section-shell project-grid">
        <ProjectCard
          href="/worlds#astra-noctrya"
          image="/images/astra-noctrya.jpg"
          eyebrow="FLAGSHIP DARK FANTASY UNIVERSE"
          title="Astra Noctrya"
          copy="A world rewritten by The Edit, where seven souls move beneath a history that has forgotten its creator."
          tone="violet"
          priority
        />
        <ProjectCard
          href="/music"
          image="/images/vexa-stage.png"
          eyebrow="MUSIC · PERFORMANCE · VISUAL IDENTITY"
          title="VEXA"
          copy="A genre-fluid artist project built through cinematic visuals, Korean-English songwriting, and narrative music videos."
          tone="silver"
        />
        <ProjectCard
          href="/stories/tsukihana-kurogane"
          image="/images/tsukihana.jpg"
          eyebrow="DARK FANTASY NOVEL"
          title="Tsukihana Kurogane"
          copy="A moonlit sword, a buried power, and a road through Skyrim stained by the Calamities."
          tone="crimson"
        />
        <ProjectCard
          href="/stories/reno-kagenami"
          image="/images/reno-hero.png"
          eyebrow="ORIGIN CHRONICLE"
          title="Ren’ō Kagenami: The First Light"
          copy="From La-Sol 7 to five thousand years without sky, follow the complete origin chronicle of the creator identity’s first character."
          tone="gold"
        />
      </section>

      <section id="interactive-hub" className="interactive-hub">
        <div className="section-shell">
          <div className="hub-section-heading">
            <div>
              <p className="eyebrow">INTERACTIVE CREATOR HUB</p>
              <h2>Choose where the archive opens.</h2>
            </div>
            <p>Move between worlds, character records, music releases, and the creator process without losing the thread connecting them.</p>
          </div>

          <div className="hub-navigation-grid">
            <Link className="hub-navigation-card hub-navigation-card--worlds" href="/worlds">
              <span>01</span><p>WORLDS</p><h3>Explore the settings</h3><small>Continents, stories, factions, and project hubs.</small>
            </Link>
            <Link className="hub-navigation-card hub-navigation-card--characters" href="/characters">
              <span>02</span><p>CHARACTERS</p><h3>Open the codex</h3><small>Interactive bios and full character dossiers.</small>
            </Link>
            <Link className="hub-navigation-card hub-navigation-card--music" href="/music">
              <span>03</span><p>MUSIC</p><h3>Enter VEXA’s catalog</h3><small>Cover art, playable releases, and visual identity.</small>
            </Link>
            <Link className="hub-navigation-card hub-navigation-card--creator" href="/stories">
              <span>04</span><p>STORIES</p><h3>Read the archive</h3><small>Interactive acts, chapters, and connected lore.</small>
            </Link>
            <Link className="hub-navigation-card hub-navigation-card--creator" href="/about">
              <span>05</span><p>CREATOR</p><h3>See how it is built</h3><small>Writing, world-building, character design, and direction.</small>
            </Link>
          </div>

          <div className="hub-featured-records">
            <div className="hub-featured-records__heading">
              <p className="eyebrow">FEATURED ASTRA RECORDS</p>
              <Link className="text-link" href="/characters">View complete directory →</Link>
            </div>
            <div className="hub-record-grid">
              {characters.slice(0, 5).map((character) => (
                <Link className={`hub-record hub-record--${character.accent}`} href={`/characters/${character.id}`} key={character.id}>
                  <div className="hub-record__image"><Image src={character.image} alt={character.name} fill sizes="(max-width: 700px) 100vw, 20vw" /></div>
                  <div className="hub-record__shade" />
                  <div className="hub-record__copy"><p>{character.title}</p><h3>{character.name}</h3></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="section-shell manifesto__inner">
          <div className="manifesto__mark">
            <Image src="/images/reno-emblem.png" alt="" fill sizes="240px" />
          </div>
          <div>
            <p className="eyebrow">THE CREATOR MARK</p>
            <h2>Built from the First Light.</h2>
            <p>
              The flame crest began as Ren’ō Kagenami’s symbol. Now it marks every world, song, scene, and visual idea
              created under the name.
            </p>
            <Link className="text-link" href="/about">Read the creator statement →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
