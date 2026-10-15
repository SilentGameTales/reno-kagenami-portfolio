import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT THE CREATOR"
        title="Hi, I’m Kahlil."
        copy="I create original fantasy worlds, character-driven stories, music identities, game concepts, and cinematic visual experiences under the name Ren’ō Kagenami."
      />

      <section className="about-grid section-shell">
        <div className="about-emblem">
          <Image src="/images/reno-emblem.png" alt="Ren’ō Kagenami flame emblem" fill sizes="360px" priority />
        </div>
        <div className="about-copy">
          <p>
            Ren’ō was my first character. Over time, his name became large enough to hold everything else: Fractured Genesis,
            Parallax Zero, Still Rising, Echoes of Hollow’s Edge, VEXA, Tsukihana Kurogane, character archives, music videos,
            manga concepts, fight choreography, and the worlds still waiting to be built.
          </p>
          <p>
            My process moves between writing and visual development. A character may begin as a single image, then gain a history,
            a voice, a combat style, a soundtrack, and a place inside a larger mythology. AI is part of that workflow, but the direction—
            the rules, continuity, emotional logic, and final shape—remains deliberate.
          </p>
          <blockquote>
            I am not building isolated images. I am building evidence that these worlds exist.
          </blockquote>
          <div className="button-row">
            <Link className="button button-primary" href="/projects">Explore the projects</Link>
            <a className="button button-ghost" href="https://www.tiktok.com/@silentsynthtales" target="_blank" rel="noreferrer">TikTok ↗</a>
            <a className="button button-ghost" href="https://www.instagram.com/silentsynthtales" target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
        </div>
      </section>

      <section className="section-shell process-section">
        <p className="eyebrow">THE PROCESS</p>
        <div className="process-grid">
          <article><span>01</span><h3>World Rule</h3><p>Define the law the story cannot escape.</p></article>
          <article><span>02</span><h3>Character Wound</h3><p>Build the person around what they hide, want, or refuse to lose.</p></article>
          <article><span>03</span><h3>Visual Language</h3><p>Shape silhouette, palette, setting, motion, and recurring symbols.</p></article>
          <article><span>04</span><h3>Scene & Sound</h3><p>Turn the concept into prose, manga, animation prompts, music, and film.</p></article>
        </div>
      </section>
    </>
  );
}
