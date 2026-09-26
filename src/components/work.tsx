import { useState } from "react";

import {
  categories,
  projects,
  type Category,
} from "@/lib/site";
import { ProjectCard } from "@/components/project-card";

const categoryLabels: Record<"All" | Category, string> = {
  All: "All",
  Climate: "Climate",
  "Risk & Controls": "Risk",
  "Research & Finance": "Research",
  "Finance & Ventures": "Finance",
};

export function Work() {
  const [activeCategory, setActiveCategory] =
    useState<"All" | Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory,
        );

  return (
    <section id="work" aria-labelledby="work-heading">
      <div className="shell py-7 sm:py-9">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="min-w-0">
            <p className="kicker">01 / Selected work</p>

            <h2
              id="work-heading"
              className="mt-3 font-display text-4xl leading-none tracking-[-0.04em] text-fg sm:text-4xl"
            >
              Building evidence, not claims.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              A selection of work across climate, risk, finance, research,
              and business operations. Different problems, one approach.
              Understand the system, test the evidence, and turn analysis
              into action.
            </p>
          </div>

          <nav
            aria-label="Filter work by category"
            className="shrink-0"
          >
            <div className="flex flex-nowrap items-center gap-4 whitespace-nowrap text-xs sm:gap-5">
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={
                      active
                        ? "border-b border-accent pb-1 font-semibold tracking-[0.08em] text-fg uppercase"
                        : "pb-1 tracking-[0.08em] text-muted uppercase transition-colors hover:text-fg"
                    }
                    aria-pressed={active}
                  >
                    {categoryLabels[category]}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        {filteredProjects.map((project, index) => (
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