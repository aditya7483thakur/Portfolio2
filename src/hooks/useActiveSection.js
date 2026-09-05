import { useEffect, useState } from "react";

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? "home");

  useEffect(() => {
    const update = () => {
      const lastId = ids[ids.length - 1];
      const scrolledToEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 32;

      if (scrolledToEnd && lastId) {
        setActive(lastId);
        return;
      }

      const line = Math.min(window.innerHeight * 0.22, 180);
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = id;
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return active;
}
