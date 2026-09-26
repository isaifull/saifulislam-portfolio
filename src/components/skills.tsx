import { skillGroups } from "@/lib/site";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="shell py-6 sm:py-8">
        <div className="flex items-center justify-between gap-4">
          <p className="kicker">03 / Practice</p>

          <span className="text-[0.6rem] font-semibold tracking-[0.14em] text-muted uppercase sm:hidden">
            Swipe →
          </span>
        </div>

        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="skills-heading"
            className="font-display text-3xl leading-none tracking-[-0.04em] text-fg sm:text-4xl"
          >
            Skills
          </h2>

          <p className="max-w-md text-xs leading-relaxed text-muted sm:text-sm">
            Climate, sustainability, risk, finance, and business execution.
          </p>
        </div>

        <div className="mt-6 flex gap-0 overflow-x-auto border-t border-border md:grid md:grid-cols-3 md:overflow-visible">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                min-w-[80vw]
                shrink-0
                py-5
                pr-7
                md:min-w-0
                md:px-6
                md:py-6
                md:first:pl-0
                md:last:pr-0
                md:border-r
                md:border-border
                md:last:border-r-0
              "
            >
              <h3 className="kicker">{group.title}</h3>

              <ul className="mt-4 space-y-3.5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-display text-base leading-tight tracking-[-0.01em] text-fg sm:text-lg">
                      {item.name}
                    </p>

                    <p className="mt-0.5 max-w-sm text-[0.7rem] leading-[1.45] text-muted sm:text-xs">
                      {item.note}
                    </p>
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