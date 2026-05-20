import { useEffect, useState } from "react";

export default function useScrollSpy() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "certificates", "publications"];

      for (const id of sections.reverse()) {
        const el = document.getElementById(id);

        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}
