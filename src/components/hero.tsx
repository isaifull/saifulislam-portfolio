import { ArrowDown } from "lucide-react";
import { site } from "@/lib/site";

const [firstName, ...lastParts] = site.name.split(" ");
const lastName = lastParts.join(" ");

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center bg-bg"
      aria-labelledby="hero-heading"
    >
      <div className="shell py-24 sm:py-28">
        <div className="flex items-center justify-between gap-4">
          <p className="kicker">
            {site.origin} · {site.location}
          </p>
          <p className="kicker hidden sm:block">{site.currently}</p>
        </div>

        <h1
          id="hero-heading"
          className="mt-10 font-display text-display leading-tight tracking-[-0.04em] text-fg"
        >
          {firstName}
          <span className="italic"> {lastName}</span>
        </h1>

        <p className="mt-6 font-display text-2xl leading-snug tracking-tight text-fg sm:text-3xl">
          {site.role}
        </p>
        <p className="mt-2 text-base text-muted sm:text-lg">
          Internal auditor · Climate-tech researcher
        </p>

        <p className="mt-8 max-w-xl text-sm leading-normal text-muted sm:text-base">
          {site.lead}
        </p>

        <div className="mt-10">
          <a
            href="#work"
            className="inline-flex min-h-11 items-center gap-3 text-sm tracking-wide text-fg uppercase"
          >
            <span className="flex h-10 w-px items-start bg-fg">
              <span className="scroll-cue block h-10 w-px bg-fg" />
            </span>
            Scroll to work
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
