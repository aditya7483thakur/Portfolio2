import { stack } from "../content";

export default function Stack() {
  return (
    <section className="section reveal" id="stack" aria-labelledby="stack-heading">
      <header className="section-head">
        <p className="mono">04 / Stack</p>
        <h2 id="stack-heading">Tools the work is made with</h2>
      </header>
      <dl className="stack-grid">
        {stack.map((group) => (
          <div className="stack-row" key={group.label}>
            <dt>{group.label}</dt>
            <dd>{group.items.join("  ·  ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
