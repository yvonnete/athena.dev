import { ProfileMap } from "./ProfileMap";

interface HeroProps {
  theme: "dark" | "light";
}

export function Hero({ theme }: HeroProps) {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="dot" />
              Software Developer · Frontend · UI/UX
            </div>
            <h1 className="hero-title">
              Hi! I'm <span className="grad">  Athena <br />Yvonnete Sabang</span>
              <br />
            </h1>
            <p className="hero-desc">
              I&apos;m a software developer passionate about building practical
              and user-friendly applications. I work across frontend, UI/UX
              design and full-stack development, with a focus on clean,
              intuitive, and user-focused digital experiences. I currently
              work as Office Staff at DM8 Composites in Danao, Cebu.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View Work</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn btn-ghost">
                Let&apos;s Talk
              </a>
            </div>
          </div>
          <ProfileMap theme={theme} />
        </div>
      </div>
    </section>
  );
}
