"use client";

import { useEffect, useRef, useState } from "react";

const maps = {
  world: {
    title: "Astra Noctrya",
    subtitle: "The Known World",
    image: "/images/astra-maps/known-world.png",
    transition: "imperial",
    description: "Explore the known continents of the living world. Select a region to enter its dedicated atlas view, or descend beyond the living world into Stillwake.",
  },
  imperial: {
    title: "Imperial Heartlands",
    subtitle: "Central continent of the living world",
    image: "/images/astra-maps/imperial-heartlands.png",
    transition: "imperial",
    accent: "gold",
    description: "The broad political and population center of Astra Noctrya: fertile plains, branching rivers, forest belts, mountain chains, and the Imperial Capital at its heart.",
    markers: [
      { id: "imperial-capital", label: "Imperial Capital", x: 50.7, y: 44.5, type: "City", copy: "The established capital at the center of the Imperial Heartlands and the seat of imperial power." },
      { id: "arid-sea", label: "Arid Sea", x: 48.5, y: 94, type: "Sea", copy: "The southern sea separating the Imperial Heartlands from The Great Sands." },
    ],
  },
  verdant: {
    title: "Verdant Shard",
    subtitle: "World Tree continent",
    image: "/images/astra-maps/verdant-shard.png",
    transition: "verdant",
    accent: "green",
    description: "A living continent of immense forests, rivers, cliffs, waterfalls, and mountain highlands organized around the ancient World Tree.",
    markers: [
      { id: "world-tree", label: "World Tree", x: 47, y: 34, type: "Natural Wonder", copy: "The primordial World Tree at the center of the Verdant Shard, older than recorded imperial systems." },
      { id: "yaju-sea-west", label: "Yajū Sea", x: 8, y: 43, type: "Sea", copy: "The sea surrounding the Verdant Shard and separating it from neighboring continents." },
    ],
  },
  pale: {
    title: "Pale Expanse",
    subtitle: "Frozen northern continent",
    image: "/images/astra-maps/pale-expanse.png",
    transition: "pale",
    accent: "ice",
    description: "A vast frozen continent of glaciers, fractured ice shelves, mountain ranges, and windswept white plains surrounded by the Glacial Sea.",
    markers: [
      { id: "celestial-vault", label: "Celestial Vault", x: 51, y: 31.5, type: "Sacred Site", copy: "The established Celestial Vault deep within the Pale Expanse." },
      { id: "glacial-sea", label: "Glacial Sea", x: 48.5, y: 83.5, type: "Sea", copy: "The dark, ice-choked sea surrounding the Pale Expanse." },
    ],
  },
  ashbound: {
    title: "Ashbound Divide",
    subtitle: "Volcanic ruin continent",
    image: "/images/astra-maps/ashbound-divide.png",
    transition: "ashbound",
    accent: "ember",
    description: "A broken volcanic continent of black rock, lava channels, smoking vents, deep craters, ancient ruins, and jagged coastal cliffs.",
    markers: [
      { id: "smeltering-sea", label: "Smeltering Sea", x: 83, y: 80, type: "Sea", copy: "The established sea bordering the Ashbound Divide." },
    ],
  },
  tidemother: {
    title: "Tidemother Reaches",
    subtitle: "Oceanic continent",
    image: "/images/astra-maps/tidemother-reaches.png",
    transition: "tidemother",
    accent: "tide",
    description: "An oceanic civilization spread across island chains, reefs, deep currents, and immense blue waters. A second atlas layer lies beneath the surface.",
    markers: [
      { id: "sea-of-souls", label: "Sea of Souls", x: 17.5, y: 29, type: "Sea", copy: "The established sea surrounding the Tidemother island chains." },
      { id: "underwater-city", label: "Underwater City", x: 62, y: 54, type: "Deep Atlas", copy: "Descend below the surface to explore the dedicated underwater-city atlas.", action: "underwater" },
    ],
  },
  dracoa: {
    title: "Dracoa",
    subtitle: "Storm-wreathed continent",
    image: "/images/astra-maps/dracoa.png",
    transition: "dracoa",
    accent: "storm",
    description: "A violent, elevated land of dark mountains, storm systems, broken floating masses, lava-lit fractures, and dragons moving through the clouds.",
    markers: [],
  },
  greatSands: {
    title: "The Great Sands",
    subtitle: "Southern desert continent",
    image: "/images/astra-maps/great-sands.png",
    transition: "sands",
    accent: "sand",
    description: "A separate southern continent dominated by enormous dune fields, mesas, rocky badlands, oases, ancient ruins, and harsh coastal desert terrain.",
    markers: [
      { id: "arid-sea-south", label: "Arid Sea", x: 49.5, y: 8.5, type: "Sea", copy: "The established northern sea between The Great Sands and the Imperial Heartlands." },
    ],
  },
  stillwake: {
    title: "Stillwake",
    subtitle: "Realm of Kaosu · beneath the living world",
    image: "/images/astra-maps/stillwake.png",
    transition: "stillwake",
    accent: "kaosu",
    description: "Stillwake is its own plane of existence beneath the living world. Its red mist, rivers, and blood-like flows are Kaosu—not literal blood. Evil creatures inhabit the realm, but Kaosu is the realm’s defining substance and can sometimes leak upward into the living world.",
    markers: [
      { id: "nyxara-prison", label: "Nyxara’s Prison", x: 18.2, y: 31.5, type: "Sealed Prison", copy: "The enormous webbed orb in the upper-left reaches of Stillwake, pulsing with red energy and containing the sealed Nyxara." },
      { id: "hemal-palace", label: "Hemal Palace", x: 74.6, y: 23.5, type: "Landmark", copy: "An established palace rising above the Kaosu-soaked terrain of Stillwake." },
      { id: "sorrow-fields", label: "Sorrow Fields", x: 53.1, y: 63.5, type: "Region", copy: "The established Sorrow Fields across Stillwake’s central broken plateaus." },
      { id: "bloodlet-falls", label: "Bloodlet Falls", x: 88, y: 56, type: "Landmark", copy: "An established named fall within Stillwake. Despite the blood-like appearance of the flow, the surrounding red substance is Kaosu." },
      { id: "kaosu", label: "Kaosu", x: 83, y: 88, type: "Realm Substance", copy: "The red mist and flows that permeate Stillwake. Kaosu is unique to the plane and is sometimes mistaken for literal blood." },
    ],
  },
  underwater: {
    title: "Tidemother Reaches",
    subtitle: "Underwater City",
    image: "/images/astra-maps/tidemother-underwater-city.png",
    transition: "tidemother",
    accent: "deep",
    description: "A dedicated deep-city atlas beneath the Tidemother Reaches, organized around its central spire, circular districts, elevated causeways, kelp forests, and abyss-facing structures.",
    parent: "tidemother",
    markers: [
      { id: "pearl-spire", label: "The Pearl Spire", x: 51.8, y: 19, type: "Landmark", copy: "The towering central spire of the underwater city." },
      { id: "coral-gardens", label: "Coral Gardens", x: 34.2, y: 20.5, type: "District", copy: "The established Coral Gardens district." },
      { id: "shellward", label: "Shellward", x: 75.5, y: 18, type: "District", copy: "The established Shellward district." },
      { id: "kelp-forests", label: "Kelp Forests", x: 18.2, y: 39.5, type: "Natural Region", copy: "Dense kelp forests bordering the city’s western structures." },
      { id: "currentward", label: "Currentward", x: 92, y: 44, type: "District", copy: "The established Currentward district on the city’s eastern edge." },
      { id: "sapphire-causeway", label: "The Sapphire Causeway", x: 21.4, y: 66.2, type: "Route", copy: "An established causeway linking outer structures into the city." },
      { id: "tidescrown-market", label: "The Tidescrown Market", x: 84.5, y: 67.5, type: "District", copy: "The established market district in the lower-right portion of the city." },
      { id: "abyssal-gate", label: "The Abyssal Gate", x: 52.2, y: 87.5, type: "Landmark", copy: "The established Abyssal Gate at the city’s lower edge." },
    ],
  },
};

const worldHotspots = [
  { id: "dracoa", label: "Dracoa", x: 2.5, y: 3.5, w: 27, h: 24 },
  { id: "pale", label: "Pale Expanse", x: 35, y: 5, w: 32, h: 26 },
  { id: "verdant", label: "Verdant Shard", x: 2.5, y: 29, w: 27, h: 33 },
  { id: "imperial", label: "Imperial Heartlands", x: 30, y: 31, w: 38, h: 40 },
  { id: "tidemother", label: "Tidemother Reaches", x: 71, y: 24, w: 27, h: 55 },
  { id: "ashbound", label: "Ashbound Divide", x: 2.5, y: 61, w: 27, h: 36 },
  { id: "greatSands", label: "The Great Sands", x: 32, y: 72, w: 43, h: 26 },
];

const navOrder = ["imperial", "verdant", "pale", "ashbound", "greatSands", "tidemother", "dracoa"];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function TransitionLayer({ type }) {
  return (
    <div className={`atlas-transition atlas-transition--${type}`} aria-hidden="true">
      {type === "verdant" && <div className="atlas-leaf-field">{Array.from({ length: 22 }, (_, i) => <i key={i} style={{ "--i": i }} />)}</div>}
      {type === "sands" && <div className="atlas-sand-field">{Array.from({ length: 30 }, (_, i) => <i key={i} style={{ "--i": i }} />)}</div>}
      {type === "pale" && <div className="atlas-snow-field">{Array.from({ length: 34 }, (_, i) => <i key={i} style={{ "--i": i }} />)}</div>}
      {type === "ashbound" && <div className="atlas-ember-field">{Array.from({ length: 24 }, (_, i) => <i key={i} style={{ "--i": i }} />)}</div>}
      {type === "imperial" && <div className="atlas-imperial-sigil"><span /><span /><span /></div>}
      {type === "tidemother" && <div className="atlas-water-field">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ "--i": i }} />)}</div>}
      {type === "dracoa" && <div className="atlas-storm-field"><i /><i /><i /></div>}
      {type === "stillwake" && <><div className="atlas-static-noise" /><div className="atlas-scanlines" /><div className="atlas-rgb-tear" /></>}
    </div>
  );
}

export default function InteractiveAstraAtlas() {
  const [activeId, setActiveId] = useState("world");
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState("imperial");
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const dragRef = useRef(null);
  const timersRef = useRef([]);

  const active = maps[activeId];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener?.("change", sync);
    return () => media.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => () => timersRef.current.forEach(clearTimeout), []);

  function travel(targetId, effectOverride) {
    if (!maps[targetId] || transitioning || targetId === activeId) return;
    timersRef.current.forEach(clearTimeout);
    const effect = effectOverride || maps[targetId].transition || "imperial";
    const duration = reducedMotion ? 180 : effect === "stillwake" ? 2300 : 1450;
    setTransitionType(effect);
    setTransitioning(true);
    setSelectedMarker(null);
    const swap = setTimeout(() => {
      setActiveId(targetId);
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }, Math.round(duration * 0.52));
    const done = setTimeout(() => setTransitioning(false), duration);
    timersRef.current = [swap, done];
  }

  function goBack() {
    if (activeId === "underwater") return travel("tidemother", "tidemother");
    travel("world", active.transition);
  }

  function zoomBy(delta) {
    setZoom((value) => {
      const next = clamp(Number((value + delta).toFixed(2)), 1, 2.5);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  }

  function onPointerDown(event) {
    if (zoom <= 1 || event.button !== 0) return;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    dragRef.current = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y };
  }

  function onPointerMove(event) {
    if (!dragRef.current || zoom <= 1) return;
    const dx = event.clientX - dragRef.current.x;
    const dy = event.clientY - dragRef.current.y;
    const limit = 240 * (zoom - 1);
    setPan({
      x: clamp(dragRef.current.panX + dx, -limit, limit),
      y: clamp(dragRef.current.panY + dy, -limit, limit),
    });
  }

  function stopDrag(event) {
    if (dragRef.current) event.currentTarget.releasePointerCapture?.(event.pointerId);
    dragRef.current = null;
  }

  function activateMarker(marker) {
    if (marker.action === "underwater") {
      travel("underwater", "tidemother");
      return;
    }
    setSelectedMarker(marker);
  }

  return (
    <section className={`astra-atlas atlas-${active.accent || "world"}`} aria-label="Interactive Astra Noctrya atlas">
      <div className="atlas-heading">
        <div>
          <p className="eyebrow">INTERACTIVE WORLD ATLAS</p>
          <h2>Explore Astra Noctrya.</h2>
          <p>Enter each continent through a transition shaped by the region itself. Zoom into dedicated maps, inspect established landmarks, and descend beneath the living world into Stillwake.</p>
        </div>
        <div className="atlas-plane-control">
          <span>PLANE ACCESS</span>
          <button type="button" onClick={() => travel("stillwake", "stillwake")} disabled={transitioning || activeId === "stillwake"}>
            Descend to Stillwake
          </button>
        </div>
      </div>

      <div className="atlas-shell">
        <div className="atlas-viewport-wrap">
          <div className="atlas-toolbar">
            <div>
              {activeId !== "world" && <button type="button" className="atlas-tool atlas-tool--back" onClick={goBack}>← Known World</button>}
              {activeId === "underwater" && <button type="button" className="atlas-tool" onClick={() => travel("tidemother", "tidemother")}>Surface Map</button>}
            </div>
            <div className="atlas-zoom-tools" aria-label="Map zoom controls">
              <button type="button" onClick={() => zoomBy(-0.25)} disabled={zoom <= 1}>−</button>
              <span>{Math.round(zoom * 100)}%</span>
              <button type="button" onClick={() => zoomBy(0.25)} disabled={zoom >= 2.5}>+</button>
              <button type="button" onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }} disabled={zoom === 1}>Reset</button>
            </div>
          </div>

          <div
            className={`atlas-viewport ${zoom > 1 ? "is-zoomed" : ""}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stopDrag}
            onPointerCancel={stopDrag}
          >
            <div
              className="atlas-map-canvas"
              style={{ transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})` }}
            >
              <img src={active.image} alt={`${active.title} — ${active.subtitle}`} draggable="false" />

              {activeId === "world" && worldHotspots.map((spot) => (
                <button
                  key={spot.id}
                  type="button"
                  className={`atlas-region-hotspot hotspot-${maps[spot.id].transition}`}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%`, width: `${spot.w}%`, height: `${spot.h}%` }}
                  onClick={() => travel(spot.id)}
                  aria-label={`Enter ${spot.label}`}
                >
                  <span>{spot.label}</span>
                </button>
              ))}

              {activeId !== "world" && active.markers?.map((marker) => (
                <button
                  key={marker.id}
                  type="button"
                  className={`atlas-marker ${marker.action ? "atlas-marker--portal" : ""} ${selectedMarker?.id === marker.id ? "is-active" : ""}`}
                  style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                  onClick={() => activateMarker(marker)}
                  aria-label={marker.action ? `Open ${marker.label}` : `Show details for ${marker.label}`}
                >
                  <i />
                  <span>{marker.label}</span>
                </button>
              ))}
            </div>

            {transitioning && <TransitionLayer type={transitionType} />}
          </div>

          <div className="atlas-map-caption">
            <div>
              <span>{active.subtitle}</span>
              <strong>{active.title}</strong>
            </div>
            <p>{zoom > 1 ? "Drag to pan the enlarged map." : activeId === "world" ? "Select a continent directly on the map." : "Select a pulsing marker to inspect established atlas details."}</p>
          </div>
        </div>

        <aside className="atlas-info-panel">
          <div className="atlas-info-panel__header">
            <span>{selectedMarker?.type || active.subtitle}</span>
            <h3>{selectedMarker?.label || active.title}</h3>
          </div>
          <p>{selectedMarker?.copy || active.description}</p>

          {activeId === "stillwake" && (
            <div className="atlas-kaosu-note">
              <strong>KAOSU ≠ BLOOD</strong>
              <p>The pervasive red mist and blood-like flows are Kaosu, a substance native to Stillwake that can sometimes leak into the living world.</p>
            </div>
          )}

          {activeId === "tidemother" && (
            <button type="button" className="atlas-deep-button" onClick={() => travel("underwater", "tidemother")}>
              Descend to Underwater City ↓
            </button>
          )}

          {activeId !== "world" && active.markers?.length > 0 && (
            <div className="atlas-marker-index">
              <span>ESTABLISHED MAP POINTS</span>
              {active.markers.map((marker) => (
                <button key={marker.id} type="button" onClick={() => activateMarker(marker)}>
                  <i /> {marker.label}
                </button>
              ))}
            </div>
          )}

          {activeId === "world" && (
            <div className="atlas-region-index">
              {navOrder.map((id) => (
                <button key={id} type="button" onClick={() => travel(id)}>
                  <span>{maps[id].title}</span>
                  <small>Enter →</small>
                </button>
              ))}
            </div>
          )}
        </aside>
      </div>

      <div className="atlas-footnote">
        <span>Living World</span><i /> <span>The Veil</span><i /> <strong>Stillwake lies beneath</strong>
      </div>
    </section>
  );
}
