import { experience } from "../content";

export default function Experience() {
  return (
    <section className="section reveal" id="experience" aria-labelledby="experience-heading">
      <header className="section-head">
        <p className="mono">02 / Experience</p>
        <h2 id="experience-heading">Where the work happened</h2>
      </header>
      <ol className="exp-list">
        {experience.map((job) => (
          <li className="exp-item" key={`${job.org}-${job.role}`}>
            <div className="exp-meta">
              <time>{job.dates}</time>
              <div>{job.location}</div>
            </div>
            <div>
              <h3>
                {job.role}
                <span className="org"> · {job.org}</span>
              </h3>
              <p>{job.summary}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {job.stack?.length ? (
                <ul className="tags">
                  {job.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
