import { HeroScene } from "@/components/hero-scene";
import { site } from "@/lib/site";

const [firstName, ...lastParts] = site.name.split(" ");
const lastName = lastParts.join(" ");

export function Hero() {
  return (
    <section
      id="top"
     className="hero relative overflow-visible bg-bg" 
      aria-labelledby="hero-heading"
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      <div
        className="hero-network pointer-events-none absolute inset-0 block"
        aria-hidden="true"
      >
        <HeroScene />
      </div>

      <div className="shell relative z-10 pt-7 pb-7 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-9">
        <p className="kicker">
          {site.origin} · {site.location}
        </p>

        <div className="mt-12 max-w-4xl lg:mt-16">
          <p className="kicker text-accent">
            Climate · Sustainability · Finance
          </p>

          <h1
            id="hero-heading"
            className="mt-5 font-display text-[clamp(3.8rem,7vw,6.5rem)] leading-[0.88] tracking-[-0.055em] text-fg"
          >
            {firstName} 
            <span className="italic"> {lastName}</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed tracking-[-0.01em] text-fg sm:text-lg">
            {site.lead}
          </p>
        </div>
      </div>
    </section>
  );
} 