import { ArrowDown } from "lucide-react";

import { HeroScene } from "@/components/hero-scene";
import { site } from "@/lib/site";

const [firstName, ...lastParts] = site.name.split(" ");
const lastName = lastParts.join(" ");

const nodes = [
  { label: "CLIMATE", x: "60%", y: "29%", delay: "0s" },
  { label: "RISK", x: "67%", y: "16%", delay: "0.8s" },
  { label: "BUSINESS", x: "78%", y: "58%", delay: "1.6s" },
  { label: "CAPITAL", x: "34%", y: "76%", delay: "2.4s" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="hero relative flex min-h-[100svh] flex-col justify-start overflow-hidden bg-bg lg:justify-center"
      aria-labelledby="hero-heading"
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      <div
        className="hero-network pointer-events-none absolute inset-0 block"
        aria-hidden="true"
      >
        <HeroScene />

        {nodes.map((node) => (
          <div
            key={node.label}
            className="hero-label"
            style={{
              left: node.x,
              top: node.y,
              animationDelay: node.delay,
            }}
          >
            <span className="hero-label-dot" />
            {node.label}
          </div>
        ))}
      </div>

      <div className="shell relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="flex items-center justify-between gap-4">
          <p className="kicker">
            {site.origin} · {site.location}
          </p>

          <p className="kicker hidden sm:block">
            {site.currently}
          </p>
        </div>

        <div className="mt-12 max-w-4xl lg:mt-20">
          <p className="kicker text-accent">
            Climate · Sustainability · Finance
          </p>

          <h1
            id="hero-heading"
            className="mt-5 font-display text-display leading-[0.88] tracking-[-0.055em] text-fg"
          >
            {firstName}
            <span className="italic"> {lastName}</span>
          </h1>

          <div className="mt-7 max-w-2xl">
            <p className="max-w-xl text-lg leading-relaxed tracking-[-0.01em] text-fg sm:text-xl">
              {site.lead}
            </p>

            <p className="mt-3 max-w-xl text-sm leading-normal text-muted sm:text-base">
              Internal audit · Climate research · Decarbonization · ESG risk ·
              Sustainable finance
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-end justify-between gap-8 sm:mt-16">
          <a
            href="#work"
            className="inline-flex min-h-11 items-center gap-3 text-sm tracking-wide text-fg uppercase"
          >
            <span className="flex h-10 w-px items-start bg-fg">
              <span className="scroll-cue block h-10 w-px bg-fg" />
            </span>

            Scroll to work

            <ArrowDown
              className="size-4"
              aria-hidden="true"
            />
          </a>

          <p className="hidden max-w-xs text-right text-xs leading-relaxed text-subtle lg:block">
            Researching how environmental problems become business, risk, and
            investment decisions.
          </p>
        </div>
      </div>
    </section>
  );
} 