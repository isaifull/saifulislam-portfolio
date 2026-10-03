import { useState } from "react";

import {
  categories,
  projects,
  type Category,
} from "@/lib/site";
import { ProjectCard } from "@/components/project-card";

type Filter = "All" | Category;

const labels: Record<Filter, string> = {
  All: "All",
  Climate: "Climate",
  "Risk & Controls": "Risk",
  "Research & Finance": "Research",
  "Finance & Ventures": "Finance",
};

export function Work() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter,
        );

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative z-20"
    >
      <div className="shell py-7 sm:py-9">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="min-w-0">
            <p className="kicker">01 / Selected work</p>

            <h2
              id="work-heading"
              className="mt-3 font-display text-3xl leading-none tracking-[-0.04em] text-fg sm:text-4xl"
            >
              Building evidence, not claims.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              A selection of work across climate, risk, finance, research,
              and business operations. Different problems, one approach:
              understand the system, test the evidence, and turn analysis
              into action.
            </p>
          </div>

          <nav
            aria-label="Filter work by category"
            className="relative z-30 shrink-0 pointer-events-auto"
          >
            <div className="flex flex-nowrap items-center gap-5 whitespace-nowrap">
              {categories.map((category) => {
                const active = activeFilter === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveFilter(category)}
                    aria-pressed={active}
                    className={`
                      pointer-events-auto
                      cursor-pointer
                      border-b
                      pb-1
                      text-xs
                      tracking-[0.08em]
                      uppercase
                      transition-colors
                      ${
                        active
                          ? "border-accent font-semibold text-fg"
                          : "border-transparent text-muted hover:text-fg"
                      }
                    `}
                  >
                    {labels[category]}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            featured={index === 0}
          />
        ))}
      </div>
    </section>
  );
} 