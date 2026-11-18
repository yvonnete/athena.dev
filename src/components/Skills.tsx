import type { CSSProperties } from "react";
import { skills } from "../data/skills";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeader
          label="// 01 &nbsp; Focus"
          title={<>Focus Areas<br />&amp; Tech Stack</>}
          description="I work across frontend, UI/UX design and full-stack development, with a focus on clean, intuitive, and user-focused digital experiences."
        />
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card reveal"
              key={skill.name}
              style={
                {
                  "--accent-local": skill.accent,
                  transitionDelay: `${index * 80}ms`,
                } as CSSProperties
              }
            >
              <span className="skill-icon">{skill.icon}</span>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-desc">{skill.description}</div>
              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
