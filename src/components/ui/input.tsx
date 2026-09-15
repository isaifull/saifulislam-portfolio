import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md border border-border bg-paper px-3.5 text-sm text-fg shadow-[var(--shadow-border)]",
        "placeholder:text-subtle",
        "transition-[box-shadow,border-color] duration-150 ease-out",
        "focus-visible:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
