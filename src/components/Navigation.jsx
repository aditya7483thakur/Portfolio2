import { useEffect, useRef } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import { nav, site } from "../content";

function pad(index) {
  return String(index + 1).padStart(2, "0");
}

export default function Navigation({ active, menuOpen, setMenuOpen }) {
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setMenuOpen]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    if (menuOpen) {
      firstLinkRef.current?.focus();
    }
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home">
          Aditya<span>.</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          <span className="visually-hidden">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>
        </button>
      </header>

      {menuOpen ? (
        <div className="overlay" id="mobile-nav" role="dialog" aria-modal="true" aria-label="Site">
          <nav>
            <ul className="overlay-list">
              {nav.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    ref={index === 0 ? firstLinkRef : undefined}
                    aria-current={active === item.id ? "true" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="idx">{pad(index)}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="overlay-meta">
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${site.email}`}>Email</a>
          </div>
        </div>
      ) : null}

      <aside className="rail" aria-label="Primary">
        <a className="rail-brand" href="#home">
          Aditya<span>.</span>
        </a>
        <nav className="rail-nav" aria-label="Sections">
          {nav.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={item.label}
              aria-current={active === item.id ? "true" : undefined}
              title={item.label}
            >
              <span className="idx">{pad(index)}</span>
            </a>
          ))}
        </nav>
        <div className="rail-social">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email Aditya">
            <FiMail />
          </a>
        </div>
      </aside>
    </>
  );
}
