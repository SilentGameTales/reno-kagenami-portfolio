// Curated official 2D art. Only characters whose supplied full-body artwork has
// been positively identified appear here. Related forms/eras remain independent.
export const characterOfficialArt = {
  "reno": "/images/fractured-genesis/official-2d/reno.jpg",
  "izanara": "/images/fractured-genesis/official-2d/izanara.jpg",
  "jinvar": "/images/fractured-genesis/official-2d/jinvar.jpg",
  "alaster": "/images/fractured-genesis/official-2d/alaster.jpg",
  "akatsuki-shuya-komoriuta": "/images/fractured-genesis/official-2d/akatsuki-shuya-komoriuta.jpg",
  "hikari-starbright": "/images/fractured-genesis/official-2d/hikari-starbright.jpg",
  "lanissa": "/images/fractured-genesis/official-2d/lanissa.jpg",
  "clover": "/images/fractured-genesis/official-2d/clover.jpg",
  "aurelios-vantheir": "/images/fractured-genesis/official-2d/aurelios-vantheir.jpg",
  "alice": "/images/fractured-genesis/official-2d/alice.jpg",
  "king-felix-iv": "/images/fractured-genesis/official-2d/king-felix-iv.jpg",
  "queen-of-spades": "/images/fractured-genesis/official-2d/queen-of-spades.png",
  "joker": "/images/fractured-genesis/official-2d/joker.png",
  "nysera": "/images/fractured-genesis/official-2d/nysera.png",
  "iris": "/images/fractured-genesis/official-2d/iris.png",
  "high-priestess": "/images/fractured-genesis/official-2d/high-priestess.png",
  "hierophant": "/images/fractured-genesis/official-2d/hierophant.png",
  "red-warden": "/images/fractured-genesis/official-2d/red-warden.png",
  "magician": "/images/fractured-genesis/official-2d/magician.png",
};

// Dedicated face and upper-body crops for the circular navigation portraits.
export const characterOfficialPortraits = {
  "akatsuki-shuya-komoriuta": "/images/fractured-genesis/official-2d/portraits/akatsuki-shuya-komoriuta-portrait.webp",
  "alaster": "/images/fractured-genesis/official-2d/portraits/alaster-portrait.webp",
  "alice": "/images/fractured-genesis/official-2d/portraits/alice-portrait.webp",
  "aurelios-vantheir": "/images/fractured-genesis/official-2d/portraits/aurelios-vantheir-portrait.webp",
  "clover": "/images/fractured-genesis/official-2d/portraits/clover-portrait.webp",
  "hierophant": "/images/fractured-genesis/official-2d/portraits/hierophant-portrait.webp",
  "high-priestess": "/images/fractured-genesis/official-2d/portraits/high-priestess-portrait.webp",
  "hikari-starbright": "/images/fractured-genesis/official-2d/portraits/hikari-starbright-portrait.webp",
  "iris": "/images/fractured-genesis/official-2d/portraits/iris-portrait.webp",
  "izanara": "/images/fractured-genesis/official-2d/portraits/izanara-portrait.webp",
  "jinvar": "/images/fractured-genesis/official-2d/portraits/jinvar-portrait.webp",
  "joker": "/images/fractured-genesis/official-2d/portraits/joker-portrait.webp",
  "king-felix-iv": "/images/fractured-genesis/official-2d/portraits/king-felix-iv-portrait.webp",
  "lanissa": "/images/fractured-genesis/official-2d/portraits/lanissa-portrait.webp",
  "magician": "/images/fractured-genesis/official-2d/portraits/magician-portrait.webp",
  "nysera": "/images/fractured-genesis/official-2d/portraits/nysera-portrait.webp",
  "queen-of-spades": "/images/fractured-genesis/official-2d/portraits/queen-of-spades-portrait.webp",
  "red-warden": "/images/fractured-genesis/official-2d/portraits/red-warden-portrait.webp",
  "reno": "/images/fractured-genesis/official-2d/portraits/reno-portrait.webp",
};

export function getCharacterRosterArt(character, style = "official") {
  return style === "official" ? characterOfficialPortraits[character.id] || getCharacterPortrait(character) : getCharacterPortrait(character);
}

export function getCharacterOfficialArt(characterOrId) {
  const id = typeof characterOrId === "string" ? characterOrId : characterOrId?.id;
  return characterOfficialArt[id] || null;
}

// Safe fallback: characters still awaiting 2D sheets retain their existing art.
export function getCharacterDisplayArt(character, style = "official") {
  return style === "official"
    ? getCharacterOfficialArt(character) || getCharacterPortrait(character)
    : getCharacterPortrait(character);
}

export const characterPortraits = {
  reno: "/images/astra-roster/reno-kagenami-roster.png",
  jinvar: "/images/astra-roster/jinvar-roster.png",
  izanara: "/images/astra-roster/izanara-nozomi-roster.png",
  nyxara: "/images/astra-roster/nyxara-roster.png",
  "queen-of-spades": "/images/astra-roster/queen-of-spades-roster.png",
  "king-felix-iv": "/images/astra-roster/king-felix-iv-roster.png",
  "laana-rhee": "/images/astra-roster/laana-rhee-roster.png",
  amaya: "/images/astra-roster/amaya-roster.png",
  "elara-viremont": "/images/astra-roster/elara-viremont-roster.png",
  "aurelios-vantheir": "/images/astra-roster/aurelios-vantheir-roster.png",
  "hikari-starbright": "/images/astra-roster/hikari-starbright-roster.png",
  clover: "/images/astra-roster/clover-roster.png",
  lanissa: "/images/astra-roster/lanissa-roster.png",
  alice: "/images/astra-roster/alice-roster.png",
  "akatsuki-shuya-komoriuta": "/images/astra-roster/akatsuki-shuya-komoriuta-roster.png",
  "red-warden": "/images/astra-roster/red-warden-roster.png",
  alaster: "/images/astra-roster/alaster-roster.png",
  zephari: "/images/astra-roster/zephari-roster.png",
  "pyrion-and-noira": "/images/astra-roster/pyrion-noira-roster.png",
  "knight-of-hearts": "/images/astra-roster/knight-of-hearts-roster.png",
  joker: "/images/astra-roster/joker-roster.png",
  nysera: "/images/astra-roster/nysera-full-power-roster.png",
  "nysera-diminished": "/images/astra-roster/nysera-diminished-roster.png",
  hierophant: "/images/astra-roster/hierophant-roster.png",
  magician: "/images/astra-roster/magician-roster.png",
  "haka-no-ken": "/images/astra-roster/haka-no-ken-roster.png",
  "high-priestess": "/images/astra-roster/high-priestess-roster.png",
  valentina: "/images/astra-roster/valentina-roster.png",
  "two-of-diamonds": "/images/astra-roster/two-of-diamonds-roster.png",
  "jack-of-clubs": "/images/astra-roster/jack-of-clubs-roster.png",
  iris: "/images/astra-roster/iris-young-roster.png",
  "iris-older": "/images/astra-roster/iris-older-roster.png",
  que: "/images/astra-roster/que-roster.png",
  "thalassar-veyr": "/images/astra-roster/thalassar-veyr-roster.png",
  raizen: "/images/astra-roster/raizen-roster.png",
  patchbreaker: "/images/astra-roster/patchbreaker-roster.png",
  zayd: "/images/astra-roster/zayd-roster.png",
  "king-of-seconds": "/images/astra-roster/king-of-seconds-roster.png",
  "war-god": "/images/astra-roster/war-god-roster.png",
  hachi: "/images/astra-roster/hachi-roster.png",
  maven: "/images/astra-roster/maven-roster.png",
  "reno-old-man": "/images/astra-roster/reno-old-man-roster.png",
  "amaya-transformed": "/images/astra-roster/amaya-transformed-roster.png",
  mei: "/images/astra-roster/mei-roster.png",
  rei: "/images/astra-roster/rei-roster.png",
  eko: "/images/astra-roster/eko-roster.png",
  mokuzai: "/images/astra-roster/mokuzai-roster.png",
  zelie: "/images/astra-roster/zelie-roster.png",
  "hemal-leviathan": "/images/astra-roster/hemal-leviathan-roster.png",
  rangar: "/images/astra-roster/rangar-roster.png",
};

// Portraits that are visually locked but do not yet have enough canonical dossier
// information to publish as independent records. They can be promoted later without
// reorganizing the asset library.
export const futurePortraits = {};

export const characterTransitions = {
  reno: { theme: "dawn", label: "Oath of Dawn" },
  jinvar: { theme: "shadow", label: "Shadow Sovereign" },
  izanara: { theme: "celestial", label: "Celestial Vault" },
  nyxara: { theme: "kaosu", label: "The Edit" },
  "queen-of-spades": { theme: "cards", label: "Spade Verdict" },
  "king-felix-iv": { theme: "imperial", label: "Lion's Protection" },
  "laana-rhee": { theme: "research", label: "La-Sol Resonance" },
  amaya: { theme: "tide", label: "Moon Tide" },
  "elara-viremont": { theme: "frost", label: "Absolute Zero" },
  "aurelios-vantheir": { theme: "chains", label: "Burden Transmutation" },
  "hikari-starbright": { theme: "radiant", label: "Radiant Blade" },
  clover: { theme: "ledger", label: "White Ledger" },
  lanissa: { theme: "speed", label: "Truthrunner" },
  alice: { theme: "halo", label: "Halo Key" },
  "akatsuki-shuya-komoriuta": { theme: "blood", label: "Crimson Witness" },
  "red-warden": { theme: "warden", label: "Bloodline Weapon" },
  alaster: { theme: "inferno", label: "Inferno Wind" },
  zephari: { theme: "alchemy", label: "Violet Catalyst" },
  "pyrion-and-noira": { theme: "duality", label: "Polar Twins" },
  "knight-of-hearts": { theme: "heart", label: "Crimson Fang" },
  joker: { theme: "joker", label: "Black Meridian" },
  nysera: { theme: "cosmic", label: "Witness State" },
  "nysera-diminished": { theme: "cosmic", label: "Diminished Witness" },
  hierophant: { theme: "faith", label: "Faith-Bound" },
  magician: { theme: "arcane", label: "Knowledge Regulator" },
  "haka-no-ken": { theme: "slash", label: "Sword of the Grave" },
  "high-priestess": { theme: "ritual", label: "Stillwake Rite" },
  valentina: { theme: "thread", label: "Cadaver Threadcraft" },
  "two-of-diamonds": { theme: "liquid", label: "Adaptive Breach" },
  "jack-of-clubs": { theme: "club", label: "Umbral Reliquary" },
  iris: { theme: "hammer", label: "Warhammer Impact" },
  "iris-older": { theme: "hammer", label: "Timeskip Impact" },
  que: { theme: "slash", label: "Adaptive Duel" },
  "thalassar-veyr": { theme: "tide", label: "Crown Current" },
  raizen: { theme: "storm", label: "Thunder Verdict" },
  patchbreaker: { theme: "null", label: "Null Field" },
  zayd: { theme: "sand", label: "Great Sands" },
  "king-of-seconds": { theme: "chronos", label: "Second Dominion" },
  "war-god": { theme: "war", label: "Red Causality" },
  hachi: { theme: "tide", label: "Scholar-Guard" },
  maven: { theme: "pathology", label: "Diagnosis" },
  "reno-old-man": { theme: "disguise", label: "Curator's Veil" },
  "amaya-transformed": { theme: "tide", label: "Moon Tide Ascension" },
  mei: { theme: "clinic", label: "Silent Diagnosis" },
  rei: { theme: "clinic", label: "Trauma Ward" },
  eko: { theme: "echo", label: "Resonance" },
  mokuzai: { theme: "verdant", label: "World Tree Memory" },
  zelie: { theme: "siren", label: "False Tide" },
  "hemal-leviathan": { theme: "hemal", label: "Eternal Slumber" },
  rangar: { theme: "storm", label: "Demonic Surge" },
};

export const characterFormGroups = [
  {
    key: "nysera-states",
    label: "Power State",
    description: "Nysera's diminished manifestation and full-power presence.",
    members: ["nysera-diminished", "nysera"],
  },
  {
    key: "iris-eras",
    label: "Era",
    description: "Pre-timeskip Iris and her later post-timeskip presentation.",
    members: ["iris", "iris-older"],
  },
  {
    key: "reno-identities",
    label: "Identity / Disguise",
    description: "The First Light and Ren’ō's elderly artifact-collector cover identity.",
    members: ["reno", "reno-old-man"],
  },
  {
    key: "amaya-forms",
    label: "Transformation",
    description: "Amaya's base scholar-guard form and her Moon Tide transformation.",
    members: ["amaya", "amaya-transformed"],
  },
];

// Add OpenArt showcase images here over time. Each item may use a category such
// as Portraits, Combat, Abilities, Forms, or Story Moments. The visual wheel will
// build its category filters automatically.
export const characterGalleryArchive = {
  reno: [
    { src: "/images/astra-showcase/reno/reno-01.png", category: "Abilities", label: "Dawn aura manifestation" },
    { src: "/images/astra-showcase/reno/reno-02.png", category: "Combat", label: "Forward strike" },
    { src: "/images/astra-showcase/reno/reno-03.png", category: "Abilities", label: "Radiant sigil" },
    { src: "/images/astra-showcase/reno/reno-04.png", category: "Combat", label: "Ground impact" },
    { src: "/images/astra-showcase/reno/reno-05.png", category: "Portraits", label: "First Light close-up" },
    { src: "/images/astra-showcase/reno/reno-06.png", category: "Combat", label: "Dawn rush" },
    { src: "/images/astra-showcase/reno/reno-07.png", category: "Abilities", label: "Oath of Dawn flare" },
  ],
  jinvar: [
    { src: "/images/astra-showcase/jinvar/jinvar-01.png", category: "Combat", label: "Shadow blade sweep" },
    { src: "/images/astra-showcase/jinvar/jinvar-02.png", category: "Portraits", label: "Shadow Sovereign close-up" },
    { src: "/images/astra-showcase/jinvar/jinvar-03.png", category: "Combat", label: "Abyssal arc" },
    { src: "/images/astra-showcase/jinvar/jinvar-04.png", category: "Combat", label: "Shadow draw" },
    { src: "/images/astra-showcase/jinvar/jinvar-05.png", category: "Abilities", label: "Umbral manifestation" },
    { src: "/images/astra-showcase/jinvar/jinvar-06.png", category: "Combat", label: "Abyss stance" },
    { src: "/images/astra-showcase/jinvar/jinvar-07.png", category: "Combat", label: "Shadow pursuit" },
    { src: "/images/astra-showcase/jinvar/jinvar-08.png", category: "Abilities", label: "Sovereign veil" },
  ],
  alaster: [
    { src: "/images/astra-showcase/alaster/alaster-01.png", category: "Combat", label: "Inferno stance" },
    { src: "/images/astra-showcase/alaster/alaster-02.png", category: "Combat", label: "Flame-line guard" },
    { src: "/images/astra-showcase/alaster/alaster-03.png", category: "Combat", label: "Close-range strike" },
    { src: "/images/astra-showcase/alaster/alaster-04.png", category: "Combat", label: "Inferno sweep" },
    { src: "/images/astra-showcase/alaster/alaster-05.png", category: "Combat", label: "Heavy blade rush" },
    { src: "/images/astra-showcase/alaster/alaster-06.png", category: "Combat", label: "Airborne assault" },
    { src: "/images/astra-showcase/alaster/alaster-07.png", category: "Abilities", label: "Inferno wind ring" },
  ],
  "akatsuki-shuya-komoriuta": [
    { src: "/images/astra-showcase/akatsuki-shuya-komoriuta/akatsuki-shuya-komoriuta-01.png", category: "Combat", label: "Crimson advance" },
    { src: "/images/astra-showcase/akatsuki-shuya-komoriuta/akatsuki-shuya-komoriuta-02.png", category: "Combat", label: "Blood-forged strike" },
    { src: "/images/astra-showcase/akatsuki-shuya-komoriuta/akatsuki-shuya-komoriuta-03.png", category: "Abilities", label: "Crimson Witness release" },
    { src: "/images/astra-showcase/akatsuki-shuya-komoriuta/akatsuki-shuya-komoriuta-04.png", category: "Abilities", label: "Blood current surge" },
    { src: "/images/astra-showcase/akatsuki-shuya-komoriuta/akatsuki-shuya-komoriuta-05.png", category: "Combat", label: "Crimson counter" },
    { src: "/images/astra-showcase/akatsuki-shuya-komoriuta/akatsuki-shuya-komoriuta-06.png", category: "Portraits", label: "Crimson Witness close-up" },
    { src: "/images/astra-showcase/akatsuki-shuya-komoriuta/akatsuki-shuya-komoriuta-07.png", category: "Abilities", label: "Blood-thread grasp" },
  ],
  "hikari-starbright": [
    { src: "/images/astra-showcase/hikari-starbright/hikari-starbright-01.png", category: "Combat", label: "Radiant blade sweep" },
    { src: "/images/astra-showcase/hikari-starbright/hikari-starbright-02.png", category: "Abilities", label: "Starburst guard" },
    { src: "/images/astra-showcase/hikari-starbright/hikari-starbright-03.png", category: "Combat", label: "Forward lunge" },
    { src: "/images/astra-showcase/hikari-starbright/hikari-starbright-04.png", category: "Combat", label: "Low radiant arc" },
    { src: "/images/astra-showcase/hikari-starbright/hikari-starbright-05.png", category: "Abilities", label: "Star sigil barrier" },
    { src: "/images/astra-showcase/hikari-starbright/hikari-starbright-06.png", category: "Combat", label: "Radiant pursuit" },
    { src: "/images/astra-showcase/hikari-starbright/hikari-starbright-07.png", category: "Combat", label: "Starbright stance" },
  ],
  lanissa: [
    { src: "/images/astra-showcase/lanissa/lanissa-01.png", category: "Movement", label: "Night rooftop sprint" },
    { src: "/images/astra-showcase/lanissa/lanissa-02.png", category: "Movement", label: "Gargoyle perch" },
    { src: "/images/astra-showcase/lanissa/lanissa-03.png", category: "Movement", label: "Wall-run descent" },
    { src: "/images/astra-showcase/lanissa/lanissa-04.png", category: "Movement", label: "Moonlit traverse" },
    { src: "/images/astra-showcase/lanissa/lanissa-05.png", category: "Movement", label: "Rooftop landing" },
    { src: "/images/astra-showcase/lanissa/lanissa-06.png", category: "Movement", label: "Forward vault" },
    { src: "/images/astra-showcase/lanissa/lanissa-07.png", category: "Portraits", label: "Truthrunner close-up" },
  ],
  clover: [
    { src: "/images/astra-showcase/clover/clover-01.png", category: "Movement", label: "Moonlit flight" },
    { src: "/images/astra-showcase/clover/clover-02.png", category: "Movement", label: "Rooftop descent" },
    { src: "/images/astra-showcase/clover/clover-03.png", category: "Abilities", label: "Feathered reach" },
    { src: "/images/astra-showcase/clover/clover-04.png", category: "Movement", label: "Aerial glide" },
    { src: "/images/astra-showcase/clover/clover-05.png", category: "Portraits", label: "Courier close-up" },
    { src: "/images/astra-showcase/clover/clover-06.png", category: "Movement", label: "Wing sweep" },
    { src: "/images/astra-showcase/clover/clover-07.png", category: "Movement", label: "Skyline passage" },
  ],
  "knight-of-hearts": [
    { src: "/images/astra-showcase/knight-of-hearts/knight-of-hearts-01.png", category: "Combat", label: "Heartbreaker punch" },
    { src: "/images/astra-showcase/knight-of-hearts/knight-of-hearts-02.png", category: "Combat", label: "Crimson guard" },
    { src: "/images/astra-showcase/knight-of-hearts/knight-of-hearts-03.png", category: "Combat", label: "Low fighting stance" },
    { src: "/images/astra-showcase/knight-of-hearts/knight-of-hearts-04.png", category: "Combat", label: "Charging strike" },
    { src: "/images/astra-showcase/knight-of-hearts/knight-of-hearts-05.png", category: "Combat", label: "Airborne impact" },
    { src: "/images/astra-showcase/knight-of-hearts/knight-of-hearts-06.png", category: "Combat", label: "Close-range blow" },
    { src: "/images/astra-showcase/knight-of-hearts/knight-of-hearts-07.png", category: "Combat", label: "Crimson fist surge" },
  ],
  "two-of-diamonds": [
    { src: "/images/astra-showcase/two-of-diamonds/two-of-diamonds-01.png", category: "Abilities", label: "Diamond shard projection" },
    { src: "/images/astra-showcase/two-of-diamonds/two-of-diamonds-02.png", category: "Combat", label: "Rooftop breach" },
    { src: "/images/astra-showcase/two-of-diamonds/two-of-diamonds-03.png", category: "Abilities", label: "Crystal field" },
    { src: "/images/astra-showcase/two-of-diamonds/two-of-diamonds-04.png", category: "Abilities", label: "Shard volley" },
    { src: "/images/astra-showcase/two-of-diamonds/two-of-diamonds-05.png", category: "Combat", label: "Adaptive breach stance" },
    { src: "/images/astra-showcase/two-of-diamonds/two-of-diamonds-06.png", category: "Combat", label: "Diamond rush" },
    { src: "/images/astra-showcase/two-of-diamonds/two-of-diamonds-07.png", category: "Abilities", label: "Prismatic arm formation" },
  ],
  "pyrion-and-noira": [
    { src: "/images/astra-showcase/pyrion-and-noira/pyrion-and-noira-01.png", category: "Duo", label: "Polar convergence" },
    { src: "/images/astra-showcase/pyrion-and-noira/pyrion-and-noira-02.png", category: "Duo", label: "Dual-field stance" },
    { src: "/images/astra-showcase/pyrion-and-noira/pyrion-and-noira-03.png", category: "Combat", label: "Twin pursuit" },
    { src: "/images/astra-showcase/pyrion-and-noira/pyrion-and-noira-04.png", category: "Abilities", label: "Gold and violet orbit" },
    { src: "/images/astra-showcase/pyrion-and-noira/pyrion-and-noira-05.png", category: "Combat", label: "Polar collapse" },
    { src: "/images/astra-showcase/pyrion-and-noira/pyrion-and-noira-06.png", category: "Abilities", label: "Twin surge" },
    { src: "/images/astra-showcase/pyrion-and-noira/pyrion-and-noira-07.png", category: "Portraits", label: "Polar Twins" },
  ],
  valentina: [
    { src: "/images/astra-showcase/valentina/valentina-01.png", category: "Story Moments", label: "Threadcraft laboratory" },
    { src: "/images/astra-showcase/valentina/valentina-02.png", category: "Story Moments", label: "Puppetmaster at work" },
    { src: "/images/astra-showcase/valentina/valentina-03.png", category: "Portraits", label: "Controlled composure" },
    { src: "/images/astra-showcase/valentina/valentina-04.png", category: "Portraits", label: "Puppetmaster close-up" },
    { src: "/images/astra-showcase/valentina/valentina-05.png", category: "Abilities", label: "Cadaver threads" },
    { src: "/images/astra-showcase/valentina/valentina-06.png", category: "Story Moments", label: "Threaded subjects" },
    { src: "/images/astra-showcase/valentina/valentina-07.png", category: "Abilities", label: "Surgical marionette ring" },
  ],
  "aurelios-vantheir": [
    { src: "/images/astra-showcase/aurelios-vantheir/aurelios-vantheir-01.png", category: "Abilities", label: "Burden chain manifestation" },
    { src: "/images/astra-showcase/aurelios-vantheir/aurelios-vantheir-02.png", category: "Abilities", label: "Eclipse restraint" },
    { src: "/images/astra-showcase/aurelios-vantheir/aurelios-vantheir-03.png", category: "Portraits", label: "Sin Eater close-up" },
    { src: "/images/astra-showcase/aurelios-vantheir/aurelios-vantheir-04.png", category: "Abilities", label: "Chains of transmutation" },
    { src: "/images/astra-showcase/aurelios-vantheir/aurelios-vantheir-05.png", category: "Abilities", label: "Burden release" },
    { src: "/images/astra-showcase/aurelios-vantheir/aurelios-vantheir-06.png", category: "Portraits", label: "Violet halo" },
    { src: "/images/astra-showcase/aurelios-vantheir/aurelios-vantheir-07.png", category: "Abilities", label: "Sin-bearing throne" },
  ],
  "laana-rhee": [
    { src: "/images/astra-showcase/laana-rhee/laana-rhee-01.png", category: "Story Moments", label: "Clinical assessment" },
    { src: "/images/astra-showcase/laana-rhee/laana-rhee-02.png", category: "Research", label: "Divine integration analysis" },
    { src: "/images/astra-showcase/laana-rhee/laana-rhee-03.png", category: "Story Moments", label: "La-Sol corridor" },
    { src: "/images/astra-showcase/laana-rhee/laana-rhee-04.png", category: "Research", label: "Observation deck notes" },
    { src: "/images/astra-showcase/laana-rhee/laana-rhee-05.png", category: "Research", label: "Creator-class vial" },
    { src: "/images/astra-showcase/laana-rhee/laana-rhee-06.png", category: "Research", label: "Energy chamber calibration" },
    { src: "/images/astra-showcase/laana-rhee/laana-rhee-07.png", category: "Research", label: "Genetic synthesis review" },
    { src: "/images/astra-showcase/laana-rhee/laana-rhee-08.png", category: "Portraits", label: "Lead researcher" },
  ],
  amaya: [
    { src: "/images/astra-showcase/amaya/amaya-01.png", category: "Research", label: "Tidemother archive study" },
    { src: "/images/astra-showcase/amaya/amaya-02.png", category: "Combat", label: "Moon Tide umbrella sweep" },
    { src: "/images/astra-showcase/amaya/amaya-03.png", category: "Portraits", label: "Tidemother scholar" },
    { src: "/images/astra-showcase/amaya/amaya-04.png", category: "Abilities", label: "Current constellation" },
    { src: "/images/astra-showcase/amaya/amaya-05.png", category: "Abilities", label: "Waterform orbit" },
    { src: "/images/astra-showcase/amaya/amaya-06.png", category: "Movement", label: "Archive passage" },
    { src: "/images/astra-showcase/amaya/amaya-07.png", category: "Story Moments", label: "Tidemother window" },
  ],
  "king-felix-iv": [
    { src: "/images/astra-showcase/king-felix-iv/king-felix-iv-01.png", category: "Royal", label: "Imperial march" },
    { src: "/images/astra-showcase/king-felix-iv/king-felix-iv-02.png", category: "Royal", label: "War-room command" },
    { src: "/images/astra-showcase/king-felix-iv/king-felix-iv-03.png", category: "Royal", label: "Lion throne hall" },
    { src: "/images/astra-showcase/king-felix-iv/king-felix-iv-04.png", category: "Royal", label: "King on the throne" },
    { src: "/images/astra-showcase/king-felix-iv/king-felix-iv-05.png", category: "Royal", label: "Imperial procession" },
    { src: "/images/astra-showcase/king-felix-iv/king-felix-iv-06.png", category: "Portraits", label: "Felix IV close-up" },
    { src: "/images/astra-showcase/king-felix-iv/king-felix-iv-07.png", category: "Combat", label: "Lionfang charge" },
    { src: "/images/astra-showcase/king-felix-iv/king-felix-iv-08.png", category: "Combat", label: "Lionfang guard" },
  ],
  mei: [
    { src: "/images/astra-showcase/mei/mei-01.png", category: "Portraits", label: "Medicinal garden study" },
    { src: "/images/astra-showcase/mei/mei-02.png", category: "Research", label: "Anatomical research notes" },
    { src: "/images/astra-showcase/mei/mei-03.png", category: "Healing", label: "Rinne Pulse visualization" },
    { src: "/images/astra-showcase/mei/mei-04.png", category: "Healing", label: "Bedside life-force treatment" },
    { src: "/images/astra-showcase/mei/mei-05.png", category: "Research", label: "Herbal preparation" },
    { src: "/images/astra-showcase/mei/mei-06.png", category: "Healing", label: "Precision diagnosis" },
  ],
};

// These are the user's connected Notion workspace URLs. Before relying on them
// for public visitors, enable public sharing on each Notion page you want exposed.
export const notionCharacterIndexUrl = "https://app.notion.com/p/fef663111a4483a2aabc01394f76bef6?pvs=204";

export const characterNotionLinks = {
  reno: "https://app.notion.com/p/bb6663111a448370a138814ed406b94f?pvs=204",
  izanara: "https://app.notion.com/p/1a4663111a448296b2ef81cd152044c4?pvs=204",
  nyxara: "https://app.notion.com/p/3b5663111a448130b339c9f5994c8e3e?pvs=204",
  "laana-rhee": "https://app.notion.com/p/3b5663111a44815eade5ec0caa3af5db?pvs=204",
  zephari: "https://app.notion.com/p/3b5663111a44813bbe59cfc7dc106559?pvs=204",
  nysera: "https://app.notion.com/p/3b5663111a4481eeb500e72b2f435e04?pvs=204",
  "nysera-diminished": "https://app.notion.com/p/3b5663111a4481eeb500e72b2f435e04?pvs=204",
  alice: "https://app.notion.com/p/3b5663111a4481ebb935df7585e40b26?pvs=204",
  "war-god": "https://app.notion.com/p/3b5663111a4481909634c3ab366aaabe?pvs=204",
  zayd: "https://app.notion.com/p/3b5663111a44810d9905f00f1fe6ee30?pvs=204",
  "thalassar-veyr": "https://app.notion.com/p/3b5663111a4481abaa0fc3beaefa9655?pvs=204",
  iris: "https://app.notion.com/p/3b5663111a4481d58973f74ec810ee91?pvs=204",
  "iris-older": "https://app.notion.com/p/3b5663111a4481d58973f74ec810ee91?pvs=204",
  hachi: "https://app.notion.com/p/3b5663111a4481ba8324f0b7dab36196?pvs=204",
  patchbreaker: "https://app.notion.com/p/3b5663111a4481cb9cdaf4bb33bc4dcf?pvs=204",
  raizen: "https://app.notion.com/p/3b5663111a448138bd93e5729d16a422?pvs=204",
  amaya: "https://app.notion.com/p/3b5663111a44812aa65de69144197707?pvs=204",
  "amaya-transformed": "https://app.notion.com/p/3b5663111a44812aa65de69144197707?pvs=204",
  mei: "https://app.notion.com/p/3be663111a44813fb682d5d95b9c0e89?pvs=204",
  rei: "https://app.notion.com/p/3be663111a44816a9e97e3870ff0a866?pvs=204",
  eko: "https://app.notion.com/p/3be663111a4481a69201e942e08191cd?pvs=204",
  mokuzai: "https://app.notion.com/p/3be663111a448112b63aca20bd7236b8?pvs=204",
  zelie: "https://app.notion.com/p/3bd663111a448119ab6df7dc13d5a52b?pvs=204",
  "hemal-leviathan": "https://app.notion.com/p/3b5663111a448123b04cf98076520ad9?pvs=204",
  rangar: "https://app.notion.com/p/3bd663111a4481c08d1bc1472a40ab90?pvs=204",
  jinvar: "https://app.notion.com/p/0a9663111a448334bf4601a6c3a8924d?pvs=204",
  "queen-of-spades": "https://app.notion.com/p/3b5663111a44812282fac6bdaddcfa78?pvs=204",
  "king-felix-iv": "https://app.notion.com/p/3b5663111a4481ac9abee388c1cc6262?pvs=204",
  "elara-viremont": "https://app.notion.com/p/3b5663111a448150b087c4406757bccb?pvs=204",
  "aurelios-vantheir": "https://app.notion.com/p/3b5663111a44814f9ca2e942a18f4157?pvs=204",
  "hikari-starbright": "https://app.notion.com/p/263663111a4482168bfb810a29d84345?pvs=204",
  clover: "https://app.notion.com/p/3b5663111a4481899119fd2a56a1334b?pvs=204",
  lanissa: "https://app.notion.com/p/3b5663111a4481588397f4bd07aeb850?pvs=204",
  "akatsuki-shuya-komoriuta": "https://app.notion.com/p/3b5663111a44814586dce5ee946c3c48?pvs=204",
  "red-warden": "https://app.notion.com/p/3b5663111a44810cad2edf7c878ad24a?pvs=204",
  alaster: "https://app.notion.com/p/3ef663111a44830eac22015fc72fa02f?pvs=204",
  "knight-of-hearts": "https://app.notion.com/p/3b5663111a4481e3aad1ea84b2d2b869?pvs=204",
  joker: "https://app.notion.com/p/3b5663111a44811cb361fb7bf9af65a5?pvs=204",
  "haka-no-ken": "https://app.notion.com/p/3b5663111a4481e2a824f96510686891?pvs=204",
  "high-priestess": "https://app.notion.com/p/3b5663111a4481d5931dc40c04ac516f?pvs=204",
  "two-of-diamonds": "https://app.notion.com/p/3b5663111a4481aabe67fbffcd48daf7?pvs=204",
  "king-of-seconds": "https://app.notion.com/p/3be663111a4481b28676f7f75c076f3a?pvs=204",
};

export function getCharacterPortrait(character) {
  return characterPortraits[character.id] || character.image;
}

export function getCharacterTransition(id) {
  return characterTransitions[id] || { theme: "default", label: "Archive Transition" };
}

export function getCharacterGallery(character) {
  const officialArt = getCharacterOfficialArt(character);
  const portrait = getCharacterPortrait(character);
  const defaults = [
    officialArt ? { src: officialArt, style: "official", category: "Official 2D", label: `${character.name} — official full-body design` } : null,
    portrait ? { src: portrait, style: "cinematic", category: "Portraits", label: `${character.name} — cinematic roster portrait` } : null,
    character.image && character.image !== portrait
      ? { src: character.image, style: "cinematic", category: "Dossier", label: "Cinematic dossier artwork" }
      : null,
  ].filter(Boolean);

  // Keep all pre-existing cinematic categories and their scene descriptions.
  const extras = (characterGalleryArchive[character.id] || []).map((item, index) =>
    typeof item === "string"
      ? { src: item, style: "cinematic", category: "Showcase", label: `${character.name} showcase ${index + 1}` }
      : { ...item, style: item.style || "cinematic" }
  );

  const seen = new Set();
  return [...defaults, ...extras].filter((item) => {
    if (!item?.src || seen.has(item.src)) return false;
    seen.add(item.src);
    return true;
  });
}

export function getCharacterFormGroup(id) {
  return characterFormGroups.find((group) => group.members.includes(id)) || null;
}

export function getCharacterNotionUrl(id) {
  return characterNotionLinks[id] || null;
}
