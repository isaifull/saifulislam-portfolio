import { skillGroups, skillRibbon } from "@/lib/site";

export function Skills() {
  const loop = [...skillRibbon, ...skillRibbon];

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="border-y border-border bg-paper py-6">
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track gap-10 px-8">
            {loop.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="font-display text-2xl tracking-tight text-fg/80 whitespace-nowrap"
              >
                {item}
                <span className="ml-10 text-accent">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="shell section-y">
        <p className="kicker">03 / Practice</p>
        <h2
          id="skills-heading"
          className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] text-fg"
        >
          Skills
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-normal text-muted">
          Grouped the way the work happens: assurance in the field, analysis on
          the desk, writing that carries both.
        </p>
        <div className="mt-12 grid gap-0 border-t border-border md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border-b border-border py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <h3 className="kicker">{group.title}</h3>
              <ul className="mt-6 space-y-6">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-display text-xl tracking-tight text-fg">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm leading-normal text-muted">{item.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
