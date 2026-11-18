import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeader
          label="// 02 &nbsp; Work"
          title={<>Featured<br />Projects</>}
          description="A few applications focused on practical, user-friendly solutions."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              index={index}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
