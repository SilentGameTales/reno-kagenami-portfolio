import Link from "next/link";
import { notFound } from "next/navigation";
import { stories, getStory, getStoryEntries, getStoryEntry } from "@/lib/stories";

export function generateStaticParams() {
  return stories.flatMap((story) => getStoryEntries(story).map((entry) => ({ storyId: story.id, chapterId: entry.id })));
}

export async function generateMetadata({ params }) {
  const { storyId, chapterId } = await params;
  const story = getStory(storyId); const chapter = getStoryEntry(story, chapterId);
  if (!story || !chapter) return {};
  return { title: `${chapter.title} — ${story.name}`, description: `${chapter.number} from ${story.name}: ${story.title}` };
}

export default async function StoryChapterPage({ params }) {
  const { storyId, chapterId } = await params;
  const story = getStory(storyId); const chapter = getStoryEntry(story, chapterId);
  if (!story || !chapter) notFound();
  const entries = getStoryEntries(story);
  const index = entries.findIndex((entry) => entry.id === chapter.id);
  const prev = index > 0 ? entries[index - 1] : null;
  const next = index < entries.length - 1 ? entries[index + 1] : null;

  return (
    <article className={`reader-page reader-page--${story.accent}`}>
      <header className="reader-masthead section-shell">
        <Link className="profile-back" href={`/stories/${story.id}`}>← {story.name} archive</Link>
        <p className="eyebrow">{chapter.section.label} · {chapter.number}</p>
        <h1>{chapter.title}</h1>
        <p>{story.title}</p>
      </header>

      <div className="section-shell reader-layout">
        <aside className="reader-directory">
          <p className="eyebrow">DIRECTORY</p>
          <nav>
            {story.sections.map((section) => <div key={section.id}><strong>{section.label}</strong>{section.chapters.map((entry) => <Link key={entry.id} className={entry.id === chapter.id ? "active" : ""} href={`/stories/${story.id}/${entry.id}`}>{entry.number.replace("Chapter ","")} · {entry.title}</Link>)}</div>)}
            {story.epilogue && <div><strong>EPILOGUE</strong><Link className={chapter.id === "epilogue" ? "active" : ""} href={`/stories/${story.id}/epilogue`}>{story.epilogue.title}</Link></div>}
          </nav>
        </aside>

        <div className="reader-copy">
          <div className="reader-ornament">✦</div>
          {chapter.content.map((paragraph, i) => {
            const isTechnique = /^[A-Z][A-Za-z’' -]+:\s/.test(paragraph) && paragraph.length < 100;
            const isQuote = paragraph.startsWith('“') && paragraph.endsWith('”');
            return isQuote ? <blockquote key={i}>{paragraph}</blockquote> : isTechnique ? <p className="reader-technique" key={i}>{paragraph}</p> : <p key={i}>{paragraph}</p>;
          })}
          <div className="reader-endmark">✦</div>
        </div>
      </div>

      <nav className="section-shell reader-prev-next" aria-label="Chapter navigation">
        {prev ? <Link href={`/stories/${story.id}/${prev.id}`}><small>PREVIOUS</small><strong>{prev.title}</strong></Link> : <span />}
        {next ? <Link href={`/stories/${story.id}/${next.id}`}><small>NEXT</small><strong>{next.title}</strong></Link> : <Link href={`/stories/${story.id}`}><small>RETURN</small><strong>Story archive</strong></Link>}
      </nav>
    </article>
  );
}
