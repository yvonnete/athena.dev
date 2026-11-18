import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="project-card reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`project-thumb ${project.thumbnailGradient}`}>
        {project.thumbnailImage ? (
          <img
            className="project-thumb-image"
            src={project.thumbnailImage}
            alt={`${project.title} login page screenshot`}
          />
        ) : (
          <div className="project-thumb-inner">{project.emoji}</div>
        )}
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        {project.links.length > 0 && (
          <div className="project-footer">
            <div className="project-links">
              {project.links.map((link) => (
                <a
                  href={link.href}
                  className="icon-btn"
                  title={link.title}
                  aria-label={`${project.title} ${link.title}`}
                  target="_blank"
                  rel="noreferrer"
                  key={link.title}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
