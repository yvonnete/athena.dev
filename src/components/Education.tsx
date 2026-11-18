import { education } from "../data/education";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education">
      <div className="container">
        <SectionHeader
          label="// 03 &nbsp; Education"
          title="Education"
          description="My academic background and professional training."
        />
        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-item reveal" key={item.title}>
              <div className="timeline-dot" />
              <div className="timeline-date">{item.date}</div>
              <h3 className="timeline-role">{item.title}</h3>
              {item.institution && (
                <div className="timeline-company">{item.institution}</div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
