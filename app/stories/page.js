import Image from "next/image";
import Link from "next/link";
import { stories, getStoryEntries } from "@/lib/stories";

export const metadata = {
  title: "Story Archive",
  description: "Interactive fiction archive for Ren’ō Kagenami and Tsukihana Kurogane."
};

export default function StoriesPage() {
  return (
    <>
      <section className="page-hero section-shell story-index-hero">
        <p className="eyebrow">INTERACTIVE STORY ARCHIVE</p>
        <h1>Enter the worlds through the chapters.</h1>
        <p className="lede">Long-form fiction now lives beside the character codex. Open a story, choose an act or division, jump directly to a chapter, and follow the connected lore without leaving the archive.</p>
      </section>

      <section className="section-shell story-library-grid">
        {stories.map((story) => {
          const entries = getStoryEntries(story).filter((entry) => entry.id !== "epilogue");
          return (
            <Link className={`story-library-card story-library-card--${story.accent}`} href={`/stories/${story.id}`} key={story.id}>
              <div className="story-library-card__image">
                <Image src={story.image} alt={`${story.name}: ${story.title}`} fill sizes="(max-width: 800px) 100vw, 50vw" priority />
              </div>
              <div className="story-library-card__shade" />
              <div className="story-library-card__copy">
                <p className="eyebrow">{story.credit}</p>
                <h2>{story.name}</h2>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <div className="story-card-stats">
                  {story.stats.slice(0,2).map((stat) => <span key={stat.label}><strong>{stat.value}</strong>{stat.label}</span>)}
                </div>
                <span className="story-enter">Open story archive →</span>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
