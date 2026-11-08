import { site } from "@/lib/site";

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
      </div>
    </footer>
  );
} 