"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function IntroMark() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 2100);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-mark" aria-hidden="true">
      <div className="intro-mark__halo" />
      <div className="intro-mark__image">
        <Image src="/images/reno-emblem.png" alt="" fill sizes="180px" priority />
      </div>
      <p>REN’Ō KAGENAMI</p>
    </div>
  );
}
