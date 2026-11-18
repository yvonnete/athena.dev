import { useEffect, useState } from "react";
import { useReveal } from "./hooks/useReveal";
import { Contact } from "./components/Contact";
import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MeshBackground } from "./components/MeshBackground";
import { Navbar } from "./components/Navbar";
import { NeonCursor } from "./components/NeonCursor";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">(
    () => document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );

  useReveal();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <>
      <NeonCursor />
      <MeshBackground />
      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")
        }
      />
      <main>
        <Hero theme={theme} />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
