"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["/", "Home"],
  ["/worlds", "Worlds"],
  ["/characters", "Characters"],
  ["/stories", "Stories"],
  ["/music", "Music"],
  ["/about", "About"],
  ["/contact", "Contact"]
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <Image src="/images/reno-emblem.png" alt="Ren’ō Kagenami emblem" fill sizes="38px" priority />
          </span>
          <span>
            <strong>REN’Ō KAGENAMI</strong>
            <small>CREATOR IDENTITY</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          {links.map(([href, label]) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={active ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
