import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-fg text-bg hover:bg-accent hover:text-accent-fg rounded-pill px-5 py-3 text-sm",
        ghost:
          "rounded-pill border border-border-strong bg-transparent px-5 py-3 text-sm text-fg hover:bg-surface",
        chip: "min-h-11 rounded-pill border border-border px-4 py-2 text-xs tracking-wide uppercase",
        link: "rounded-sm px-0 py-1 text-sm text-fg underline decoration-border-strong underline-offset-4 hover:decoration-fg",
      },
      active: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "chip",
        active: true,
        class: "border-fg bg-fg text-bg",
      },
      {
        variant: "chip",
        active: false,
        class: "bg-transparent text-muted hover:border-border-strong hover:text-fg",
      },
    ],
    defaultVariants: {
      variant: "primary",
      active: false,
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, active, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, active }), className)} {...props} />
  );
}

export { Button, buttonVariants };
