import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-mark"><Image src="/images/reno-emblem.png" alt="Ren’ō Kagenami emblem" fill sizes="58px" /></div>
          <p className="eyebrow">REN’Ō KAGENAMI</p>
          <p className="footer-copy">Original worlds, visual stories, music, and motion by Kahlil.</p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <Link href="/projects">All projects</Link>
          <Link href="/projects/fractured-genesis">Fractured Genesis</Link>
          <Link href="/worlds">Astra Noctrya</Link>
          <Link href="/characters">Character Archive</Link>
          <Link href="/music">VEXA</Link>
        </div>
        <div>
          <p className="footer-heading">Connect</p>
          <a href="mailto:silentgametales@gmail.com">Email</a>
          <a href="https://www.tiktok.com/@renokagenami" target="_blank" rel="noopener noreferrer">TikTok · @renokagenami</a>
          <a href="https://www.instagram.com/renokagenami/" target="_blank" rel="noopener noreferrer">Instagram · @renokagenami</a>
          <a href="https://www.youtube.com/@renokagenami" target="_blank" rel="noopener noreferrer">YouTube · @renokagenami</a>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Ren’ō Kagenami</span><span>The creator identity of Kahlil</span></div>
    </footer>
  );
}
