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
          <p className="footer-copy">Original worlds, visual stories, music, and motion by Kahlil.</p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <Link href="/worlds">Worlds</Link>
          <Link href="/characters">Character Archive</Link>
          <Link href="/music">VEXA</Link>
        </div>
        <div>
          <p className="footer-heading">Connect</p>
          <a href="mailto:silentgametales@gmail.com">Email</a>
          <a href="https://www.tiktok.com/@silentsynthtales" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://www.instagram.com/silentsynthtales" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ren’ō Kagenami</span>
        <span>The creator identity of Kahlil</span>
      </div>
    </footer>
  );
}
