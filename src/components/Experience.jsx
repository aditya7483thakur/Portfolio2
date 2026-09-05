import { useId, useState } from "react";
import { experience } from "../content";

function pad(index) {
  return String(index + 1).padStart(2, "0");
}

function jobKey(job) {
  return `${job.org}-${job.role}-${job.dates}`;
}

function ExperienceEntry({ job, open, onToggle, panelId, headingId }) {
  const className = [
    "exp-item",
    job.current ? "is-current" : "",
    job.light ? "is-light" : "",
    open ? "is-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={className}>
      <h3 className="exp-heading" id={headingId}>
        <button
          type="button"
          className="exp-trigger"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="exp-meta">
            <time dateTime={job.end ? `${job.start}/${job.end}` : job.start}>
              {job.dates}
            </time>
            <span className="exp-place">{job.location}</span>
            {job.current ? (
              <span className="exp-now">
                <span className="exp-now-dot" aria-hidden="true" />
                Current
              </span>
            ) : null}
          </span>
          <span className="exp-head">
            <span className="exp-titles">
              <span className="exp-role">{job.role}</span>
              <span className="exp-company">{job.org}</span>
            </span>
            <span className="exp-chevron" aria-hidden="true">
              →
            </span>
          </span>
        </button>
      </h3>
      <div
        className="exp-panel"
        id={panelId}
        role="region"
        aria-labelledby={headingId}
      >
        <div className="exp-panel-inner">
          <p className="exp-summary">{job.summary}</p>
          {job.stack?.length ? (
            <ul className="exp-stack">
              {job.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          <ol className="exp-evidence">
            {job.points.map((point, index) => (
              <li key={point}>
                <span className="exp-num" aria-hidden="true">
                  {pad(index)}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ol>
          {job.impact?.length ? (
            <dl className="exp-impact">
              {job.impact.map((item) => (
                <div key={item.label}>
                  <dt className="visually-hidden">{item.label}</dt>
                  <dd>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </div>
    </li>
  );
}

export default function Experience() {
  const uid = useId();
  const defaultKey = experience.find((job) => job.current)?.dates
    ? jobKey(experience.find((job) => job.current))
    : jobKey(experience[0]);
  const [openKey, setOpenKey] = useState(defaultKey);

  return (
    <section className="section reveal" id="experience" aria-labelledby="experience-heading">
      <header className="section-head">
        <p className="mono">02 / Experience</p>
        <h2 id="experience-heading">Where the work happened</h2>
      </header>
      <ol className="exp-list">
        {experience.map((job, index) => {
          const key = jobKey(job);
          return (
            <ExperienceEntry
              key={key}
              job={job}
              open={openKey === key}
              onToggle={() => setOpenKey((current) => (current === key ? "" : key))}
              panelId={`${uid}-panel-${index}`}
              headingId={`${uid}-heading-${index}`}
            />
          );
        })}
      </ol>
    </section>
  );
}
