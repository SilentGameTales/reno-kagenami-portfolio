import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = { title: "VEXA — Music" };

const visuals = [
  ["/images/vexa-white.png", "Editorial"],
  ["/images/vexa-soft.png", "Soft Warning"],
  ["/images/vexa-street.png", "Street Mode"],
  ["/images/vexa-black.png", "No Permission"],
  ["/images/vexa-stage.png", "Performance"]
];

const releases = [
  { title: "Soft Warning", cover: "/music/covers/soft-warning.png", audio: "/music/audio/soft-warning.mp3", mood: "Late-night R&B · intimate" },
  { title: "Your Burdens", cover: "/music/covers/your-burdens.png", audio: "/music/audio/your-burdens.mp3", mood: "Soulful · healing" },
  { title: "We Run It", cover: "/music/covers/we-run-it.png", audio: "/music/audio/we-run-it.wav", mood: "K-pop rap · dominant" },
  { title: "Not Enough", cover: "/music/covers/not-enough.png", audio: "/music/audio/not-enough.wav", mood: "Melancholic R&B" },
  { title: "No Permission", cover: "/music/covers/no-permission.png", audio: "/music/audio/no-permission.mp3", mood: "Defiant · dark pop" },
  { title: "Lost Love", cover: "/music/covers/lost-love.png", audio: "/music/audio/lost-love.mp3", mood: "Romantic · aching" },
  { title: "In This Dark", cover: "/music/covers/in-this-dark.png", audio: "/music/audio/in-this-dark.mp3", mood: "Neon noir · intense" },
  { title: "I AM VEXA", cover: "/music/covers/i-am-vexa.png", audio: "/music/audio/i-am-vexa.mp3", mood: "Signature anthem" },
  { title: "Blue Rain", cover: "/music/covers/blue-rain.png", audio: "/music/audio/blue-rain.mp3", mood: "Atmospheric · midnight" },
  { title: "Breakdown", cover: "/music/covers/breakdown.png", audio: "/music/audio/breakdown.wav", mood: "Vulnerable · fierce" }
];

export default function MusicPage() {
  return (
    <div className="music-page">
      <PageHero
        eyebrow="VEXA · MUSIC PROJECT"
        title="Precision with a pulse."
        copy="VEXA is a cinematic K-pop and R&B artist identity developed through songwriting, visual direction, fashion, and narrative music videos."
      />

      <section className="vexa-hero section-shell">
        <div className="vexa-hero__copy">
          <p className="eyebrow">THE ARTIST</p>
          <h2>Soft voice. Sharp warning.</h2>
          <p>
            Heterochromia, controlled movement, and a voice that can cut from intimate R&B into hard melodic rap.
            Every release is designed as a complete visual era, not a disconnected single.
          </p>
          <div className="release-list">
            <span>R&B</span><span>K-pop</span><span>Rap</span><span>Cinematic Pop</span>
          </div>
        </div>
        <div className="vexa-hero__image">
          <Image src="/images/vexa-white.png" alt="VEXA in a modern white editorial outfit" fill sizes="(max-width: 900px) 100vw, 45vw" priority />
        </div>
      </section>

      <section className="section-shell discography-section">
        <div className="discography-heading">
          <div><p className="eyebrow">DISCOGRAPHY</p><h2>Ten visual eras. One voice.</h2></div>
          <p>Each release pairs an original track with a dedicated cover, mood, and visual identity. Press play directly from the archive.</p>
        </div>
        <div className="release-grid">
          {releases.map((release, index) => (
            <article className="release-card" key={release.title}>
              <div className="release-card__cover">
                <Image src={release.cover} alt={`${release.title} cover art by VEXA`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              </div>
              <div className="release-card__meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{release.title}</h3><p>{release.mood}</p></div>
              </div>
              <audio controls preload="none" src={release.audio}>Your browser does not support audio playback.</audio>
            </article>
          ))}
        </div>
      </section>

      <section className="visual-strip" aria-label="VEXA visual archive">
        {visuals.map(([image, label]) => (
          <figure key={image}>
            <Image src={image} alt={`VEXA — ${label}`} fill sizes="(max-width: 700px) 80vw, 22vw" />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </section>

      <section className="section-shell music-statement">
        <p className="eyebrow">VISUAL DIRECTION</p>
        <h2>Every room becomes a stage.</h2>
        <p>
          Penthouse windows, rain-lit glass, minimalist interiors, and performance sets become recurring pieces of VEXA’s visual language.
          The camera remains close enough to catch restraint—the pause before a line, the weight behind a held note, the shift from softness into control.
        </p>
        <div className="button-row">
          <a className="button button-primary" href="https://www.tiktok.com/@silentsynthtales" target="_blank" rel="noreferrer">Watch on TikTok</a>
          <a className="button button-ghost" href="https://www.instagram.com/silentsynthtales" target="_blank" rel="noreferrer">View Instagram</a>
        </div>
      </section>
    </div>
  );
}
