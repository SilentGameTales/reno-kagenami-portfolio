export default function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="page-hero section-shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{copy}</p>
    </section>
  );
}
