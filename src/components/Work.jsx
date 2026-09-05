import { projects } from "../content";

function Case({ project, layout }) {
  return (
    <article className={`case ${layout}`}>
      <div className="case-media">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading={project.featured ? "eager" : "lazy"}
          width="1280"
          height="800"
        />
      </div>
      <div className="case-body">
        <p className="mono case-kicker">
          {project.featured ? "Featured  ·  " : ""}
          {project.kind}
        </p>
        <h3>{project.name}</h3>
        <p className="lead">{project.problem}</p>
        <p className="why">{project.interesting}</p>
        <ul className="detail-list">
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <ul className="tags">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="case-links">
          <a
            className="btn btn-primary"
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live demo
          </a>
          <a
            className="btn btn-ghost"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const [featured, ...rest] = projects;

  return (
    <section className="section reveal" id="work" aria-labelledby="work-heading">
      <header className="section-head">
        <p className="mono">03 / Selected work</p>
        <h2 id="work-heading">Things I actually shipped</h2>
      </header>
      <div className="work-list">
        <Case project={featured} layout="featured" />
        {rest.map((project, index) => (
          <Case
            key={project.name}
            project={project}
            layout={index % 2 === 0 ? "split reverse" : "split"}
          />
        ))}
      </div>
    </section>
  );
}
