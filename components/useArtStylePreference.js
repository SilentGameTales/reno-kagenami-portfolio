"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "reno-kagenami-fractured-genesis-art-style";

export function useArtStylePreference() {
  const [artStyle, setArtStyle] = useState("official");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "official" || saved === "cinematic") setArtStyle(saved);
    } catch {
      // Restricted storage must not block artwork switching.
    }
  }, []);

  function chooseArtStyle(next) {
    if (next !== "official" && next !== "cinematic") return;
    setArtStyle(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The current page's selection still works without persistence.
    }
  }

  return [artStyle, chooseArtStyle];
}
