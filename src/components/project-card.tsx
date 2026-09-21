import { cn } from "@/lib/utils";
import type { Project } from "@/lib/site";

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const href = project.href ?? "#contact";
  const cta = project.cta ?? "Write";
  const external = href.startsWith("http");

  return (
    <article className="project-card group border-t border-border">
      <a
        href={href}
        className={cn(
          "grid overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-bg md:grid-cols-2",
          featured ? "md:min-h-[22rem]" : "md:min-h-[18rem]", 
        )}
        aria-label={`${project.title}: ${project.summary}`}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        <div className="relative overflow-hidden bg-surface">
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            className="project-image media aspect-photo size-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] md:absolute md:inset-0 md:aspect-auto"
          />
        </div>
       <div className="flex flex-col justify-center bg-bg px-5 py-6 transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-1 sm:px-8 sm:py-8">
            {number} / {project.category} · {project.year} 
          </p>
          <h3 className="mt-3 font-display text-3xl leading-tight tracking-[-0.03em] text-fg">
            {project.title}
          </h3>
          <p className="mt-3 font-display text-xl italic text-muted">{project.deck}</p>
          <p className="project-copy mt-4 max-w-xl text-sm leading-normal text-muted sm:text-base">
            {project.summary}
          </p>
          <p className="mt-6 text-xs tracking-[0.16em] text-fg uppercase">
            {project.client} · {cta}
          </p>
        </div>
      </a>
    </article>
  );
}
