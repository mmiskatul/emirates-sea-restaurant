import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  arabic,
  intro,
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  arabic?: string;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-6 bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.08]">
        {title}
      </h2>

      {arabic ? (
        <p className="arabic mt-3 text-lg text-muted" dir="rtl">
          {arabic}
        </p>
      ) : null}

      {intro ? (
        <p className="mt-5 text-[1.0625rem] leading-[1.75] text-muted">{intro}</p>
      ) : null}

      {children}
    </Reveal>
  );
}
