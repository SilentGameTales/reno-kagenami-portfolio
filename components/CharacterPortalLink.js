"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./CharacterPortalLink.module.css";

export default function CharacterPortalLink({ href, transition, className = "", children, ariaLabel }) {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const theme = transition?.theme || "default";

  function handleClick(event) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    if (active) return;
    setActive(true);
    window.setTimeout(() => router.push(href), 620);
  }

  return (
    <>
      <a href={href} onClick={handleClick} className={className} aria-label={ariaLabel}>
        {children}
      </a>
      {active ? (
        <div className={`${styles.portal} ${styles[`theme_${theme}`] || styles.theme_default}`} aria-hidden="true">
          <div className={styles.flash} />
          <div className={styles.ring} />
          <div className={styles.ringTwo} />
          <div className={styles.sweep} />
          <div className={styles.particles}>
            {Array.from({ length: 18 }).map((_, index) => <span key={index} style={{ "--i": index }} />)}
          </div>
          <p>{transition?.label || "Opening archive"}</p>
        </div>
      ) : null}
    </>
  );
}
