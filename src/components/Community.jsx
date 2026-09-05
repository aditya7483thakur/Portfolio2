import { community } from "../content";

export default function Community() {
  return (
    <section className="section reveal" id="community" aria-labelledby="community-heading">
      <header className="section-head">
        <p className="mono">05 / Community</p>
        <h2 id="community-heading">Mostly the other side of the table</h2>
      </header>
      <p className="comm-intro">{community.intro}</p>
      <div className="comm-stats">
        {community.stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <b>{stat.label}</b>
            <p>{stat.note}</p>
          </div>
        ))}
      </div>
      <div className="comm-cols">
        <div className="block">
          <h3>Leadership & mentoring</h3>
          {community.leadership.map((item) => (
            <article className="lead-item" key={item.title}>
              <h4>{item.title}</h4>
              <time>{item.dates}</time>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="block">
          <h3>Hackathons I participated in</h3>
          {community.built.map((item) => (
            <article className="build-item" key={item.name}>
              <h4>{item.name}</h4>
              <span className="ctx">{item.context}</span>
              <p>{item.body}</p>
              <div className="build-links">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
