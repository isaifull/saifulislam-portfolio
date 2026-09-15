import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y < 80) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled
          ? "border-border bg-bg/95 backdrop-blur-md"
          : "border-transparent bg-bg",
      )}
    >
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-sm focus:bg-fg focus:px-3 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to work
      </a>
      <div className="shell flex h-14 items-center justify-between gap-4 sm:h-16">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-fg"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {site.name.split(" ")[0]}
          <span className="italic text-accent"> {site.name.split(" ")[1]}</span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-0.5 sm:gap-1">
          {nav.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex min-h-11 items-center px-2.5 text-sm transition-colors duration-150 sm:px-3",
                  isActive ? "text-fg" : "text-fg/70 hover:text-fg",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-2.5 bottom-2 h-px bg-accent transition-opacity duration-200 sm:inset-x-3",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
