import Link from "next/link";
import styles from "./page.module.css";
export const metadata = {title:"VEXA — Before the Lights | AI Production Case Study",description:"AI-assisted original music and visual campaign directed by Reno Kagenami: ChatGPT lyric and image work, Mureka AI music production."};
const workflow=[
["01","Concept and lyrics","Kahlil established the song direction and collaborated with ChatGPT on lyrics and refinement."],
["02","Music generation","A specific Mureka AI style format guided the generated music and virtual vocal performance."],
["03","Visual development","ChatGPT assisted with the cover and eight supporting portraits in a rain-soaked apartment setting."],
["04","Quality review","Image selection centered on character identity, heterochromia, atmosphere, framing, and technical consistency."]];
export default function VexaCaseStudy(){
return <div className={styles.page}>
<section className={styles.hero}><div className={styles.shell}>
<Link href="/portfolio" className={styles.back}>← Back to AI Portfolio</Link>
<p className={styles.eyebrow}>CASE STUDY 01 / ORIGINAL VIRTUAL ARTIST</p>
<h1>Before <em>the Lights.</em></h1>
<p className={styles.lead}>An original music and visual campaign for VEXA, developed with human-directed storytelling, ChatGPT-assisted lyrics and imagery, and Mureka AI-generated music and vocals.</p>
<p className={styles.notice}>Completed: finished song, official cover artwork, and eight supporting portraits. Media files remain in private review and are not yet published to this website. Animated video work is a planned deliverable, not a completed claim.</p>
</div></section>
<section className={styles.section}><div className={styles.shell}>
<p className={styles.eyebrow}>CREDITS / TRANSPARENT ATTRIBUTION</p><h2>Who did what.</h2>
<div className={styles.cards}>
<article><small>CREATIVE DIRECTION</small><h3>Reno Kagenami / Kahlil</h3><p>Concept, artist identity, musical style specification, asset selection and iterative creative review.</p></article>
<article><small>LYRICS + ARTWORK</small><h3>ChatGPT</h3><p>AI-assisted lyric development and visual generation for the cover and supporting stills.</p></article>
<article><small>MUSIC + VOCAL GENERATION</small><h3>Mureka AI</h3><p>The finished track and VEXA's virtual singing performance were generated from a specified style format.</p></article>
</div>
</div></section>
<section className={[styles.section,styles.alt].join(" ")}><div className={styles.shell}>
<p className={styles.eyebrow}>CREATIVE CHALLENGE</p><h2>One recognizable artist across many angles.</h2>
<p className={styles.lead}>The campaign is set inside a dim apartment overlooking a rain-soaked city. Warm candlelight contrasts with the cold windows while front, side and back compositions maintain VEXA's recognizable face, short black bob and distinctive blue-and-amber eyes.</p>
<Link href="/music" className={styles.link}>Explore the existing VEXA archive ↗</Link>
</div></section>
<section className={styles.section}><div className={styles.shell}>
<p className={styles.eyebrow}>PRODUCTION WORKFLOW</p><h2>Direction. Generation. Review.</h2>
<div className={styles.steps}>{workflow.map(([num,title,detail])=><article key={num}><small>{num}</small><h3>{title}</h3><p>{detail}</p></article>)}</div>
</div></section>
<section className={[styles.section,styles.alt].join(" ")}><div className={styles.shell}>
<p className={styles.eyebrow}>IMAGE + AUDIO EVALUATION</p><h2>Review criteria.</h2>
<p className={styles.lead}>Review the anatomical right icy-blue eye and left amber-gold eye (accounting for viewpoint), facial proportions, wardrobe and environment continuity, hands and jewelry, frame crops, and audible production quality.</p>
<p className={styles.notice}>Criteria are documented, but scores and quantitative performance metrics have not been invented. The next version will add real before-and-after evidence, exact style-prompt documentation, approved public media embeds, and completed motion examples.</p>
<Link href="/contact" className={styles.link}>Contact the creator ↗</Link>
</div></section>
</div>;
}