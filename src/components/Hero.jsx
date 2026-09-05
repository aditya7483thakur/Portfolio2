import { hero, site } from "../content";

export default function Hero() {
  return (
    <section className="section hero" id="home" aria-label="Home">
      <p className="mono hero-kicker">{hero.role}</p>
      <h1 className="hero-name">
        Aditya
        <br />
        <em>Kumar</em>
        <span className="dot">.</span>
      </h1>
      <div className="hero-copy">
        <h2>{hero.headline}</h2>
        <p>{hero.lede}</p>
      </div>
      <div className="hero-actions">
        <a className="btn btn-primary" href={hero.primaryCta.href}>
          {hero.primaryCta.label}
        </a>
        <a
          className="btn btn-ghost"
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <div className="text-links">
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <dl className="proofs">
        {hero.proofs.map((proof) => (
          <div className="proof" key={proof.label}>
            <strong>{proof.value}</strong>
            <span>{proof.label}</span>
          </div>
        ))}
      </dl>
    </section>
  );
}
