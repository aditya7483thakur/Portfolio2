import { contact, site } from "../content";

export default function Contact() {
  return (
    <section className="section contact reveal" id="contact" aria-labelledby="contact-heading">
      <p className="mono contact-kicker">07 / Contact</p>
      <p className="contact-line">{contact.line}</p>
      <h2 id="contact-heading">
        Let&apos;s build<span className="dot">.</span>
      </h2>
      <div className="contact-links">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={site.resume} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Aditya Kumar</p>
    </section>
  );
}
