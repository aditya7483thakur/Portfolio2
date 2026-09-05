import { useEffect, useState } from "react";
import About from "./components/About";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Stack from "./components/Stack";
import Work from "./components/Work";
import { sectionIds } from "./content";
import { useActiveSection } from "./hooks/useActiveSection";

const LEGACY_PATHS = {
  "/about": "about",
  "/skills": "stack",
  "/projects": "work",
  "/resume": "contact",
};

export default function App() {
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    const target = LEGACY_PATHS[path];
    if (target) {
      window.history.replaceState(null, "", `/#${target}`);
      document.getElementById(target)?.scrollIntoView();
    } else if (window.location.hash) {
      const id = window.location.hash.slice(1);
      document.getElementById(id)?.scrollIntoView();
    }
  }, []);

  return (
    <div className="page">
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navigation active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="main" id="content">
        <Hero />
        <Experience />
        <Work />
        <Stack />
        <Community />
        <About />
        <Contact />
      </main>
    </div>
  );
}
