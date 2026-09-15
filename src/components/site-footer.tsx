import { photoCredits, site, social } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg text-fg">
      <div className="shell section-y">
        <p className="font-display text-display leading-tight tracking-[-0.05em]">
          {site.name.split(" ")[0]}
          <span className="italic text-accent"> {site.name.split(" ")[1]}</span>
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <p className="max-w-sm text-sm leading-normal text-muted md:col-span-5">
            Sustainability strategy, internal audit, and climate-tech research.
            Based in {site.location}.
          </p>
          <div className="grid grid-cols-2 gap-8 md:col-span-7">
            <div>
              <p className="kicker">Visit</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all underline decoration-border underline-offset-4 hover:decoration-accent"
                  >
                    {site.email}
                  </a>
                </li>
                {social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-border underline-offset-4 hover:decoration-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="kicker">Index</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#work" className="hover:text-accent">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-accent">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-accent">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-accent">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 text-xs tracking-wide text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.year} {site.name}. Field notes and selected work.</p>
          <p>Set in Newsreader and Figtree.</p>
        </div>
        <p className="mt-6 max-w-3xl text-[0.6875rem] leading-normal text-subtle/80">
          Photographs:{" "}
          {photoCredits.map((item, index) => (
            <span key={item.href}>
              {index > 0 ? "; " : null}
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border underline-offset-2 hover:text-muted hover:decoration-accent"
              >
                {item.label}
              </a>
              {` (${item.credit})`}
            </span>
          ))}
          . Via Wikimedia Commons.
        </p>
      </div>
    </footer>
  );
}
