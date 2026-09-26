import { type FormEvent, type ReactNode, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site, social } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Fields>;

const empty: Fields = {
  name: "",
  email: "",
  message: "",
};

function validate(values: Fields): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "A name helps me reply.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "That email does not look right.";
  }

  if (values.message.trim().length < 12) {
    errors.message = "A little more context, please.";
  }

  return errors;
}

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const next = validate(values);
    setErrors(next);

    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(
      `Note from ${values.name.trim()}`,
    );

    const body = encodeURIComponent(
      `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`,
    );

    window.location.href =
      `mailto:${site.email}?subject=${subject}&body=${body}`;

    setSent(true);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="shell grid gap-8 py-6 sm:py-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="kicker">04 / Correspondence</p>

          <h2
            id="contact-heading"
            className="mt-3 font-display text-3xl leading-none tracking-[-0.04em] text-fg sm:text-4xl"
          >
            Contact
          </h2>

          <p className="mt-5 max-w-md font-display text-xl leading-[1.08] tracking-[-0.02em] italic text-muted sm:text-[1.35rem]">
            A note is enough. Have a business problem, climate question,
            research idea, or startup worth discussing?
          </p>

          <div className="mt-6">
            <p className="kicker">Visit</p>

            <ul className="mt-2 space-y-1.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-8 items-center gap-2 text-fg underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent"
                >
                  Email
                  <ArrowUpRight
                    className="size-3.5"
                    aria-hidden="true"
                  />
                </a>
              </li>

              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-8 items-center gap-2 text-muted underline decoration-border underline-offset-4 transition-colors hover:text-fg hover:decoration-accent"
                  >
                    {item.label}
                    <ArrowUpRight
                      className="size-3.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          {sent ? (
            <div
              className="rounded-xl border border-border bg-paper px-6 py-7 sm:px-8"
              role="status"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-accent text-accent-fg">
                <Check className="size-4" aria-hidden="true" />
              </span>

              <p className="mt-4 font-display text-xl tracking-tight text-fg">
                Received. Thank you.
              </p>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                I will write back to {values.email} as soon as I can.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "name-error" : undefined
                    }
                    onChange={(event) =>
                      setValues((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                  />
                </Field>

                <Field id="email" label="Email" error={errors.email}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "email-error" : undefined
                    }
                    onChange={(event) =>
                      setValues((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                  />
                </Field>
              </div>

              <Field
                id="message"
                label="Message"
                error={errors.message}
              >
                <Textarea
                  id="message"
                  name="message"
                  value={values.message}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                />
              </Field>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-subtle">
                  Usually replies within a few days.
                </p>

                <Button type="submit">Send note</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>

      {children}

      {error ? (
        <p
          id={`${id}-error`}
          className="text-xs text-accent"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
} 