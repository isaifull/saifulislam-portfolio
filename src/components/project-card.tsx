import { cn } from "@/lib/utils";
import type { Project } from "@/lib/site";

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

export function ProjectCard({
  project,
  index,
  featured = false,
}: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const href = project.href ?? "#contact";
  const cta = project.cta ?? "Write";
  const external = href.startsWith("http");
  const isVideo = project.image.toLowerCase().endsWith(".mp4");
  const isEdc = project.slug === "edc";

  return (
    <article className="project-card group border-t border-border">
      <a
        href={href}
        className={cn(
          "grid overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-bg md:grid-cols-2",
          featured ? "md:min-h-[19rem]" : "md:min-h-[16rem]",
        )}
        aria-label={`${project.title}: ${project.summary}`}
        {...(external
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-surface",
            isEdc && "bg-[#ffb20a]",
          )}
        >
          {isVideo ? (
            <video
              src={project.image}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={project.alt}
              className="project-image media size-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] md:absolute md:inset-0"
            />
          ) : (
            <img
              src={project.image}
              alt={project.alt}
              loading="lazy"
              className={cn(
                "project-image media size-full transition-transform duration-700 ease-[var(--ease-out-soft)] md:absolute md:inset-0",
                isEdc ? "object-contain" : "object-cover",
              )}
            />
          )}
        </div>

        <div className="flex flex-col justify-center bg-bg px-5 py-5 transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-1 sm:px-8 sm:py-6">
          <p className="kicker">
            {number} / {project.category} · {project.year}
          </p>

          <h3 className="mt-3 font-display text-4xl leading-[0.95] tracking-[-0.035em] text-fg sm:text-[2.75rem]">
            {project.title}
          </h3>

          <p className="mt-3 overflow-hidden text-ellipsis whitespace-nowrap font-display text-base italic leading-tight tracking-[-0.01em] text-muted sm:text-lg">
            {project.deck}
          </p>

          <p className="project-copy mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:text-base">
            {project.summary}
          </p>

          <p className="mt-5 text-[0.65rem] font-semibold tracking-[0.16em] text-fg uppercase">
            {project.client} · {cta}
          </p>
        </div>
      </a>
    </article>
  );
} 