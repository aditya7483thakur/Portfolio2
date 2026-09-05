import { about } from "../content";

export default function About() {
  return (
    <section className="section reveal" id="about" aria-labelledby="about-heading">
      <header className="section-head">
        <p className="mono">06 / About</p>
        <h2 id="about-heading">The person in the loop</h2>
      </header>
      <div className="about-grid">
        <div className="about-copy">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="facts">
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
