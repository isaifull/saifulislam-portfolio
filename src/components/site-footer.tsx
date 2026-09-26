import { photoCredits, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-bg text-fg"> 
      <div className="shell py-6 sm:py-7"> 
        <div className="flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs tracking-wide text-subtle">
            © {site.year} {site.name}. Selected work and field notes.
          </p>

          <p className="text-xs tracking-wide text-subtle">
            Newsreader · Figtree
          </p>
        </div>

        <p className="mt-5 max-w-4xl text-[0.6875rem] leading-relaxed text-subtle/80">
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
              </a>{" "}
              ({item.credit})
            </span>
          ))}
          .
        </p>
      </div>
    </footer>
  );
} 