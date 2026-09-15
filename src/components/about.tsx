import { about, site } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      className="border-y border-border bg-paper"
      aria-labelledby="about-heading"
    >
      <div className="shell section-y grid gap-12 lg:grid-cols-12 lg:gap-16">
        <figure className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-xl bg-surface">
            <img
              src={about.portrait}
              alt={about.portraitAlt}
              loading="lazy"
              className="media aspect-portrait w-full object-cover"
            />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-pill border border-border bg-bg px-3 py-1.5 text-xs tracking-[0.16em] text-fg uppercase">
              <span className="size-1.5 rounded-pill bg-accent" aria-hidden="true" />
              {site.currently}
            </span>
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between gap-4">
            <span className="kicker">{about.caption}</span>
            <span className="font-display text-sm italic text-subtle">Fig. 01</span>
          </figcaption>
        </figure>

        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="kicker">02 / {about.kicker}</p>
          <h2
            id="about-heading"
            className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] text-fg"
          >
            About
          </h2>
          <p className="mt-8 font-display text-xl leading-snug italic text-muted">
            {about.lead}
          </p>
          <div className="mt-8 max-w-prose space-y-5 text-base leading-normal text-muted">
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {about.previously.map((item) => (
              <div key={item.place}>
                <dt className="kicker">{item.year}</dt>
                <dd className="mt-2 font-display text-lg leading-snug text-fg">{item.place}</dd>
                <p className="mt-1 text-sm text-muted">{item.role}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
