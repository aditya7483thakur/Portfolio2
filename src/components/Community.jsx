import { community } from "../content";

function Photo({ photo, className = "" }) {
  return (
    <figure className={`comm-photo ${className}`.trim()}>
      <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
      <figcaption>
        <b>{photo.caption}</b>
        <span>{photo.note}</span>
      </figcaption>
    </figure>
  );
}

export default function Community() {
  const featured = community.photos.filter((photo) => photo.featured);
  const portraits = community.photos.filter((photo) => photo.shape === "portrait");
  const landscapes = community.photos.filter((photo) => photo.shape === "landscape");

  return (
    <section className="section reveal" id="community" aria-labelledby="community-heading">
      <header className="section-head">
        <p className="mono">05 / Community</p>
        <h2 id="community-heading">{community.heading}</h2>
      </header>
      <div className="comm-shot">
        {community.stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <b>{stat.label}</b>
          </div>
        ))}
        <p className="comm-intro">{community.body}</p>
      </div>
      {community.photos?.length ? (
        <div className="comm-photos">
          <p className="mono comm-photos-kicker">On the ground</p>
          {featured.map((photo) => (
            <Photo key={photo.src} photo={photo} className="is-lead" />
          ))}
          {portraits.length ? (
            <div className="comm-photos-grid is-portraits">
              {portraits.map((photo) => (
                <Photo key={photo.src} photo={photo} />
              ))}
            </div>
          ) : null}
          {landscapes.length ? (
            <div className="comm-photos-grid is-wide">
              {landscapes.map((photo) => (
                <Photo key={photo.src} photo={photo} />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
