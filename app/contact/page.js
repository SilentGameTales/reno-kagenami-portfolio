import PageHero from "@/components/PageHero";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT · FOLLOW"
        title="Stay connected to the work."
        copy="Follow new character art, music, cinematic experiments, and project development—or reach out directly for creative conversations and collaborations."
      />
      <section id="socials" className="contact-grid section-shell">
        <a className="contact-card" href="https://www.tiktok.com/@silentsynthtales" target="_blank" rel="noreferrer">
          <span>TIKTOK</span>
          <strong>@silentsynthtales</strong>
          <small>Music, cinematic clips, character visuals, and short-form storytelling ↗</small>
        </a>
        <a className="contact-card" href="https://www.instagram.com/silentsynthtales" target="_blank" rel="noreferrer">
          <span>INSTAGRAM</span>
          <strong>@silentsynthtales</strong>
          <small>Visual archive, character art, and project imagery ↗</small>
        </a>
        <a className="contact-card" href="mailto:silentgametales@gmail.com">
          <span>EMAIL</span>
          <strong>silentgametales@gmail.com</strong>
          <small>Project inquiries and collaborations ↗</small>
        </a>
      </section>
    </>
  );
}
