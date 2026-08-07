import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stories, getStory, getStoryEntries } from "@/lib/stories";
import { getCharacter } from "@/lib/characters";

export function generateStaticParams() { return stories.map((story) => ({ storyId: story.id })); }

export async function generateMetadata({ params }) {
  const { storyId } = await params;
  const story = getStory(storyId);
  if (!story) return {};
  return { title: `${story.name}: ${story.title}`, description: story.description };
}

export default async function StoryArchivePage({ params }) {
  const { storyId } = await params;
  const story = getStory(storyId);
  if (!story) notFound();
  const first = getStoryEntries(story)[0];
  const related = (story.relatedCharacters || []).map(getCharacter).filter(Boolean);

  return (
    <article className={`story-archive story-archive--${story.accent}`}>
      <section className="story-archive-hero">
        <Image className="story-archive-hero__image" src={story.image} alt={`${story.name}: ${story.title}`} fill sizes="100vw" priority />
        <div className="story-archive-hero__veil" />
        <div className="section-shell story-archive-hero__content">
          <Link className="profile-back" href="/stories">← Story archive</Link>
          <p className="eyebrow">{story.credit}</p>
          <h1>{story.name}</h1>
          <h2>{story.title}</h2>
          <p>{story.subtitle}</p>
          <div className="story-hero-actions">
            <Link className="button button-primary" href={`/stories/${story.id}/${first.id}`}>Begin reading</Link>
            <a className="button button-ghost" href="#directory">Open chapter directory</a>
          </div>
        </div>
      </section>

      <section className="section-shell story-intro-grid">
        <div>
          <p className="eyebrow">THE ARCHIVE</p>
          <h2>A story built to be explored.</h2>
          <p className="lede">{story.description}</p>
        </div>
        <div className="story-stat-panel">
          {story.stats.map((stat) => <div key={stat.label}><span>{stat.label}</span><strong>{stat.value}</strong></div>)}
        </div>
      </section>

      <section id="directory" className="story-directory-shell">
        <div className="section-shell">
          <div className="hub-section-heading">
            <div><p className="eyebrow">CHAPTER DIRECTORY</p><h2>Jump anywhere in the story.</h2></div>
            <p>Every entry opens as a focused reading page with previous/next navigation and a persistent route back to the full archive.</p>
          </div>
          <div className="story-section-list">
            {story.sections.map((section) => (
              <section className="story-section-block" key={section.id}>
                <div className="story-section-heading"><span>{section.label}</span><h3>{section.title}</h3><small>{section.chapters.length} {section.chapters.length === 1 ? "entry" : "chapters"}</small></div>
                <div className="story-chapter-grid">
                  {section.chapters.map((chapter, index) => (
                    <Link href={`/stories/${story.id}/${chapter.id}`} className="story-chapter-link" key={chapter.id}>
                      <span>{String(index + 1).padStart(2,"0")}</span>
                      <div><small>{chapter.number}</small><strong>{chapter.title}</strong></div>
                      <b>→</b>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
            {story.epilogue && (
              <section className="story-section-block story-epilogue-block">
                <div className="story-section-heading"><span>EPILOGUE</span><h3>{story.epilogue.title}</h3><small>Closing scene</small></div>
                <Link href={`/stories/${story.id}/epilogue`} className="story-chapter-link"><span>∞</span><div><small>Epilogue</small><strong>{story.epilogue.title}</strong></div><b>→</b></Link>
              </section>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && <section className="section-shell story-related-lore">
        <div className="hub-section-heading"><div><p className="eyebrow">CONNECTED LORE</p><h2>Follow the people inside the story.</h2></div><Link className="text-link" href="/characters">Character codex →</Link></div>
        <div className="story-related-grid">
          {related.map((character) => <Link href={`/characters/${character.id}`} className="story-related-card" key={character.id}><div><Image src={character.image} alt={character.name} fill sizes="240px" /></div><p>{character.title}</p><h3>{character.name}</h3></Link>)}
        </div>
      </section>}
    </article>
  );
}
