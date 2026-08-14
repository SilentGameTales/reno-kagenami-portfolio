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
};

export const futurePortraits = {
  "mei": "/images/astra-roster/mei-roster.png",
  "iris-young": "/images/astra-roster/iris-young-roster.png",
  "maven": "/images/astra-roster/maven-roster.png",
  "rei": "/images/astra-roster/rei-roster.png",
  "reno-old-man": "/images/astra-roster/reno-old-man-roster.png",
  "eko": "/images/astra-roster/eko-roster.png",
  "iris-older": "/images/astra-roster/iris-older-roster.png",
  "vaelthryn": "/images/astra-roster/vaelthryn-roster.png",
  "thalassar-veyr": "/images/astra-roster/thalassar-veyr-roster.png",
  "thirteen": "/images/astra-roster/thirteen-roster.png",
  "hachi": "/images/astra-roster/hachi-roster.png",
  "hemal-leviathan": "/images/astra-roster/hemal-leviathan-roster.png",
  "raizen": "/images/astra-roster/raizen-roster.png",
  "zelie": "/images/astra-roster/zelie-roster.png",
  "patchbreaker": "/images/astra-roster/patchbreaker-roster.png",
  "mokuzai": "/images/astra-roster/mokuzai-roster.png",
  "zayd": "/images/astra-roster/zayd-roster.png",
  "king-of-seconds": "/images/astra-roster/king-of-seconds-roster.png",
  "amara-transformed": "/images/astra-roster/amara-transformed-roster.png",
  "war-god": "/images/astra-roster/war-god-roster.png",
};

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
};

export const characterFormGroups = [
  {
    key: "nysera-states",
    label: "Power State",
    members: ["nysera-diminished", "nysera"],
  },
];

// Add public Notion share links here as they are approved for website visitors.
export const characterNotionLinks = {};

export function getCharacterPortrait(character) {
  return characterPortraits[character.id] || character.image;
}

export function getCharacterTransition(id) {
  return characterTransitions[id] || { theme: "default", label: "Archive Transition" };
}

export function getCharacterGallery(character) {
  const portrait = getCharacterPortrait(character);
  return [...new Set([portrait, character.image].filter(Boolean))];
}

export function getCharacterFormGroup(id) {
  return characterFormGroups.find((group) => group.members.includes(id)) || null;
}

export function getCharacterNotionUrl(id) {
  return characterNotionLinks[id] || null;
}
