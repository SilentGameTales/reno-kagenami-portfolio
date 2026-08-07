import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Worlds" };

const continents = [
  ["Imperial Heartlands", "The political core of Astra Noctrya, protected by royal wards and rotting beneath false order."],
  ["Verdant Shard", "A continent shaped by the World Tree, ancient roots, and powers older than recorded history."],
  ["Pale Expanse", "A monastic frozen land where the Oracle waits beyond the snow and remembers what history lost."],
  ["Ashbound Divide", "A scarred region of ruin, ash, and forgotten machines where survival strips identity to the bone."],
  ["Tidemother Reaches", "An oceanic civilization closed to outsiders, watched by powers sleeping beneath the water."]
];

const tsukihanaCharacters = [
  {
    name: "Tsukihana Kurogane",
    title: "The Moon That Cuts the Night · Base Form",
    image: "/images/tsukihana-characters/tsukihana-base.png",
    accent: "crimson",
    summary: "A disciplined swordswoman carrying fragmented memories and a quiet instinct for survival. Her restraint is not weakness; it is the sheath around something violent and ancient."
  },
  {
    name: "Tsukihana Kurogane",
    title: "Crimson Awakening · Transformed Form",
    image: "/images/tsukihana-characters/tsukihana-awakened.png",
    accent: "blood",
    summary: "When the buried power breaks through, crimson-black markings consume her face and arm. Her speed, force, and magical absorption surge while control begins to fray."
  },
  {
    name: "Katana",
    title: "Sword Master of Whiterun",
    image: "/images/tsukihana-characters/katana.png",
    accent: "night",
    summary: "A composed master swordswoman whose first duel with Tsukihana ends in a hard-earned draw. She becomes a traveling ally, rival, and stabilizing blade at Tsukihana’s side."
  },
  {
    name: "Kaidan",
    title: "The Scarred Wanderer",
    image: "/images/tsukihana-characters/kaidan.png",
    accent: "stone",
    summary: "A battle-tested swordsman marked by old wounds and colder roads. Kaidan’s guarded nature hides fierce loyalty and the instincts of someone who has survived too many ambushes."
  },
  {
    name: "Kelsa Iceheart",
    title: "The Frost Barbarian",
    image: "/images/tsukihana-characters/kelsa-iceheart.png",
    accent: "frost",
    summary: "The warmer, more outspoken Iceheart twin. Kelsa leads with her heart and a frost-forged warhammer, protecting her sister with direct force and unshakable loyalty."
  },
  {
    name: "Anja Iceheart",
    title: "The Frost Witch",
    image: "/images/tsukihana-characters/anja-iceheart.png",
    accent: "frost",
    summary: "The elder Iceheart twin and the pair’s strategist. Anja combines frost magic, restoration, and surgical planning, remaining calm until someone threatens what she protects."
  },
  {
    name: "Raya",
    title: "The Emerald Vanguard",
    image: "/images/tsukihana-characters/raya.png",
    accent: "forest",
    summary: "A poised warrior encountered beside Remiel in Markarth. Raya carries herself with noble restraint, reading danger before it moves and answering pressure without flinching."
  },
  {
    name: "Inigo",
    title: "The Shadowfang",
    image: "/images/tsukihana-characters/inigo.png",
    accent: "violet",
    summary: "A sharp-witted Khajiit duelist whose sarcasm never weakens his loyalty. He reads danger, moves silently, and stands beside his companions when the road turns murderous."
  },
  {
    name: "Auri",
    title: "The Leafwhisper",
    image: "/images/tsukihana-characters/auri.png",
    accent: "forest",
    summary: "A playful Bosmeri scout with predatory instincts beneath the smile. Auri tracks what others miss, vanishes into foliage, and turns the forest itself into an accomplice."
  },
  {
    name: "Remiel",
    title: "The Logicweaver",
    image: "/images/tsukihana-characters/remiel.png",
    accent: "gold",
    summary: "A relentlessly curious Dwemer specialist who solves ruins the way other people solve arguments. Her tools, gauntlets, and improvisation can turn dead machinery into an ally."
  },
  {
    name: "Lucien",
    title: "The Silver Scholar",
    image: "/images/tsukihana-characters/lucien.png",
    accent: "frost",
    summary: "A measured scholar and strategist who searches beneath appearances for the truth. Lucien brings historical knowledge, light magic, and a steady voice when instinct alone is not enough."
  },
  {
    name: "Aku",
    title: "The Calamity King",
    image: "/images/tsukihana-characters/aku.png",
    accent: "crimson",
    summary: "The half-human, half-Daedric leader of the Seven Calamities. Aku pursues peace through absolute order, wielding adaptive magic and the shape-shifting Thronebreaker relic."
  },
  {
    name: "Minette",
    title: "The Calamity of Time",
    image: "/images/tsukihana-characters/minette.png",
    accent: "gold",
    summary: "An Altmer chronomancer who treats battle as an equation. Her Astral Staff, Aion, bends perception, inertia, probability, and the branching echoes of possible futures."
  },
  {
    name: "Sareth",
    title: "The Calamity of Ash",
    image: "/images/tsukihana-characters/sareth.png",
    accent: "ember",
    summary: "An ancient Dunmer pyromancer who sees destruction as natural law. His infernal spear, Vulkaris, channels ash, magma, and the buried fury of Red Mountain."
  },
  {
    name: "Selene",
    title: "The Calamity of Shadows",
    image: "/images/tsukihana-characters/selene.png",
    accent: "violet",
    summary: "A silent Khajiit infiltrator whose patience is more dangerous than speed. She moves through darkness with twin eclipse daggers and leaves no witness behind."
  },
  {
    name: "Ormuk",
    title: "The Calamity of Stone",
    image: "/images/tsukihana-characters/ormuk.png",
    accent: "stone",
    summary: "A towering Orsimer judge who commands earth and gravity. His colossal hammer divides into two levitating scales that establish a twenty-meter field of crushing verdicts."
  },
  {
    name: "Eryx",
    title: "The Calamity of Blood",
    image: "/images/tsukihana-characters/eryx.png",
    accent: "blood",
    summary: "A soft-spoken hemomancer who reads blood as information, power, and art. He fights barehanded, shaping spilled crimson into weapons, chains, curses, and obedient constructs."
  },
  {
    name: "Onias",
    title: "The Calamity of Storms",
    image: "/images/tsukihana-characters/onias.png",
    accent: "storm",
    summary: "A disciplined Redguard warrior who conducts thunder like choreography. His twin fan blades carve wind, redirect lightning, and turn the battlefield into a living storm front."
  },
  {
    name: "Han",
    title: "The Calamity of the Forest",
    image: "/images/tsukihana-characters/han.png",
    accent: "forest",
    summary: "A calculating druidic hunter who treats the wild as ally and weapon. His chained hookblades extend through roots, beasts, decay, and patient ambushes."
  },
  {
    name: "Mei Kaminaru",
    title: "The Calamity of Frost",
    image: "/images/tsukihana-characters/mei.png",
    accent: "frost",
    summary: "A masked master of frost and movement whose origins remain buried. She wields a chained sickle with surgical precision and holds loyalty only to the Calamities."
  },
  {
    name: "Noctis Arontis",
    title: "The Last Dragonborn",
    image: "/images/tsukihana-characters/noctis.png",
    accent: "night",
    summary: "A grim Dragonborn warrior marked by fate from birth. Once tied to the Calamities, Noctis chose freedom and now walks Skyrim as Tsukihana’s dangerous, uneasy ally."
  }
];

export default function WorldsPage() {
  return (
    <>
      <PageHero
        eyebrow="ORIGINAL WORLDS"
        title="Enter the archive."
        copy="Each world has its own visual language, mythology, and rules. Nothing exists in isolation; every power leaves a cost behind."
      />

      <section id="astra-noctrya" className="world-feature section-shell world-violet">
        <div className="world-feature__image">
          <Image src="/images/astra-noctrya.jpg" alt="Astra Noctrya illustrated world poster" fill sizes="(max-width: 900px) 100vw, 45vw" />
        </div>
        <div className="world-feature__copy">
          <p className="eyebrow">ASTRA NOCTRYA</p>
          <h2>The stars remember. The world forgets.</h2>
          <p>
            Astra Noctrya is a dark fantasy universe shaped by Ren’ō Kagenami, hidden by Nyxara’s reality-altering Edit,
            and carried forward by characters who inherit wounds they do not fully understand.
          </p>
          <div className="world-stat-grid">
            <div><strong>5</strong><span>Continents</span></div>
            <div><strong>7</strong><span>Fated souls</span></div>
            <div><strong>1</strong><span>Buried creator</span></div>
          </div>
          <Link className="button button-primary" href="/characters">Open character archive</Link>
        </div>
      </section>

      <section className="section-shell continent-section">
        <p className="eyebrow">THE FIVE CONTINENTS</p>
        <div className="continent-grid">
          {continents.map(([name, copy], index) => (
            <article key={name}>
              <span>0{index + 1}</span>
              <h3>{name}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tsukihana" className="world-feature section-shell world-crimson world-feature--reverse">
        <div className="world-feature__image">
          <Image src="/images/tsukihana.jpg" alt="Tsukihana Kurogane book cover" fill sizes="(max-width: 900px) 100vw, 45vw" />
        </div>
        <div className="world-feature__copy">
          <p className="eyebrow">TSUKIHANA KUROGANE</p>
          <h2>The Moon That Cuts the Night.</h2>
          <p>
            A dark fantasy journey through Skyrim following Tsukihana, a swordswoman carrying fragmented memories,
            crimson power, and a past that begins to move the moment the Calamities find her.
          </p>
          <blockquote>“The road did not ask whether she was ready. It only opened its mouth.”</blockquote>
          <a className="button button-ghost" href="mailto:silentgametales@gmail.com?subject=Tsukihana%20Kurogane">Ask about the project</a>
        </div>
      </section>

      <section className="tsukihana-roster">
        <div className="section-shell">
          <div className="roster-heading">
            <div>
              <p className="eyebrow">CHARACTERS OF THE JOURNEY</p>
              <h2>Steel, masks, and old debts.</h2>
            </div>
            <p>
              Allies, rivals, and living disasters move around Tsukihana’s path. Each profile will expand as the story archive grows.
            </p>
          </div>

          <div className="tsukihana-character-grid">
            {tsukihanaCharacters.map((character, index) => (
              <article className={`tsukihana-character-card accent-${character.accent}`} key={character.name}>
                <div className="tsukihana-character-card__image">
                  <Image
                    src={character.image}
                    alt={`${character.name}, ${character.title}`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                </div>
                <div className="tsukihana-character-card__content">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{character.title}</p>
                  <h3>{character.name}</h3>
                  <p className="character-summary">{character.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
