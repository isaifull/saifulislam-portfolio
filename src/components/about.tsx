import { about } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      className="bg-paper" 
      aria-labelledby="about-heading"
    >
      <div className="shell grid gap-6 py-7 sm:py-9 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <p className="kicker">02 / About</p>

          <h2
            id="about-heading"
            className="mt-3 font-display text-4xl leading-none tracking-[-0.04em] text-fg sm:text-5xl"
          >
            About
          </h2>
        </div>

        <div className="lg:col-span-8">
          <p className="max-w-3xl font-display text-xl leading-[1.05] tracking-[-0.02em] italic text-muted sm:text-[1.45rem]">
            {about.lead}
          </p>

          <div className="mt-5 max-w-3xl space-y-3.5 text-[0.9rem] leading-[1.58] text-muted sm:text-[0.95rem]">
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 