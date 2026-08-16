import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-[3px] font-sans font-semibold " +
  "tracking-[0.06em] uppercase transition-[background-color,color,border-color,box-shadow,transform] " +
  "duration-300 ease-out select-none active:translate-y-px disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ocean text-white shadow-[0_1px_2px_rgba(16,42,67,0.16)] hover:bg-deepsea hover:shadow-[0_8px_22px_-10px_rgba(11,79,108,0.7)]",
  outline:
    "border border-rule-strong bg-transparent text-navy hover:border-ocean hover:text-ocean",
  ghost: "text-navy hover:text-ocean",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.6875rem]",
  lg: "h-[3.25rem] px-7 text-xs",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const isExternal = /^(https?:|tel:|mailto:)/.test(href);
  const classes = buttonClass(variant, size, className);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
