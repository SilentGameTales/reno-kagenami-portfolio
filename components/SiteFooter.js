import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-mark">
            <Image src="/images/reno-emblem.png" alt="Ren’ō Kagenami emblem" fill sizes="58px" />
          </div>
          <p className="eyebrow">REN’Ō KAGENAMI</p>
          <p className="footer-copy">Original projects, visual stories, music, and motion by Kahlil.</p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <Link href="/projects">Projects</Link>
          <Link href="/worlds#fractured-genesis">Fractured Genesis</Link>
          <Link href="/characters">Character Archive</Link>
          <Link href="/music">VEXA</Link>
        </div>
        <div>
          <p className="footer-heading">Follow</p>
          <a href="https://www.tiktok.com/@silentsynthtales" target="_blank" rel="noreferrer">TikTok · @silentsynthtales</a>
          <a href="https://www.instagram.com/silentsynthtales" target="_blank" rel="noreferrer">Instagram · @silentsynthtales</a>
          <a href="mailto:silentgametales@gmail.com">Email · silentgametales@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ren’ō Kagenami</span>
        <span>The creator identity of Kahlil</span>
      </div>
    </footer>
  );
}
