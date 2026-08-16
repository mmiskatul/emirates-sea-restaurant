import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Marks a block for the scroll-reveal observer set up in RevealScript.
 * Server component — the reveal itself is one shared observer, not per-element JS.
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
  ...rest
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <Tag
      data-reveal=""
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={cn(className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
