import { useId, useState } from "react";
import { projects } from "../content";

function pad(index) {
  return String(index + 1).padStart(2, "0");
}

function Case({ project, layout, featured, index }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();

  return (
    <article className={`case ${layout}${open ? " is-open" : ""}`}>
      <div className="case-media">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading={featured ? "eager" : "lazy"}
          decoding="async"
          width="1600"
          height="900"
        />
      </div>
      <div className="case-body">
        <p className="mono case-kicker">
          {pad(index)} / {project.kind}
        </p>
        <h3>{project.name}</h3>
        <p className="lead">{project.problem}</p>
        <div className="case-details" id={detailsId}>
          <div className="case-details-inner">
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
          </div>
        </div>
        <button
          type="button"
          className="case-more"
          aria-expanded={open}
          aria-controls={detailsId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Hide details −" : "View details +"}
        </button>
        <div className="case-links">
          <a
            className="btn btn-primary"
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
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
  return (
    <section className="section reveal" id="work" aria-labelledby="work-heading">
      <header className="section-head">
        <p className="mono">03 / Selected work</p>
        <h2 id="work-heading">Things I actually shipped</h2>
      </header>
      <div className="work-list">
        {projects.map((project, index) => (
          <Case
            key={project.name}
            project={project}
            index={index}
            featured={index === 0}
            layout={index % 2 === 0 ? "featured" : "split reverse"}
          />
        ))}
      </div>
    </section>
  );
}
