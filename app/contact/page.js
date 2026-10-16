import PageHero from "@/components/PageHero";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT" title="Let’s build something memorable." copy="For creative conversations, collaborations, or questions about a project, reach out through email or the social channels below." />
      <section className="contact-grid section-shell">
        <a className="contact-card" href="mailto:silentgametales@gmail.com"><span>EMAIL</span><strong>silentgametales@gmail.com</strong><small>Project inquiries and collaborations ↗</small></a>
        <a className="contact-card" href="https://www.tiktok.com/@renokagenami" target="_blank" rel="noopener noreferrer"><span>TIKTOK</span><strong>@renokagenami</strong><small>Music, visuals, and short-form storytelling ↗</small></a>
        <a className="contact-card" href="https://www.instagram.com/renokagenami/" target="_blank" rel="noopener noreferrer"><span>INSTAGRAM</span><strong>@renokagenami</strong><small>Visual archive and project imagery ↗</small></a>
        <a className="contact-card" href="https://www.youtube.com/@renokagenami" target="_blank" rel="noopener noreferrer"><span>YOUTUBE</span><strong>@renokagenami</strong><small>Cinematics, trailers, and creative updates ↗</small></a>
      </section>
    </>
  );
}
