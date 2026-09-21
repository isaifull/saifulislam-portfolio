import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { categories, projects, type Category } from "@/lib/site";

type Filter = "All" | Category;

export function Work() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="work" aria-labelledby="work-heading">
      <div className="shell section-y pb-10 sm:pb-12">
        <p className="kicker">01 / Selected Work</p>

        <h2
          id="work-heading"
          className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] text-fg"
        >
          Building evidence, not claims.
        </h2>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-sm leading-normal text-muted">
  A selection of work across climate, risk, finance, research, and
  business operations. Different problems, one approach: understand the
  system, test the evidence, and turn analysis into action.
</p> 

          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => {
              const isActive = filter === category;
              return (
                <Button
                  key={category}
                  type="button"
                  variant="chip"
                  active={isActive}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        {visible.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={projects.findIndex((p) => p.slug === project.slug)}
            featured={filter === "All" && index === 0}
          />
        ))}
      </div>
    </section>
  );
}