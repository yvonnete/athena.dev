import { socials } from "../data/socials";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-card reveal">
          <SectionHeader
            centered
            reveal={false}
            label="// 05 &nbsp; Connect"
            title={<>Let&apos;s<br />Connect</>}
            description="Find me on GitHub, Discord, or email."
          />
          <div className="contact-actions">
            <a href="mailto:athenayvonnete@gmail.com" className="btn btn-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email Me
            </a>
            <a
              href="https://github.com/yvonnete"
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </div>
          <div className="social-row">
            {socials.map((social) => (
              <a
                href={social.href}
                className="social-btn"
                target="_blank"
                rel="noreferrer"
                key={social.name}
              >
                {social.icon} {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
