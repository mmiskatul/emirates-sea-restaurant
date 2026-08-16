import type { MenuItem } from "@/lib/data/menu";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

/**
 * Prices come from the restaurant's printed menu. Where the menu says the dish
 * is priced by size, we say the same rather than guessing a number.
 */
export function Price({ item, className }: { item: MenuItem; className?: string }) {
  if (!site.showPrices) return null;

  if (item.price === null) {
    return (
      <span
        className={cn(
          "font-sans text-[0.6875rem] font-semibold tracking-[0.12em] text-muted uppercase",
          className
        )}
      >
        {item.priceNote ?? "Ask the kitchen"}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "font-display text-[1.0625rem] tabular-nums text-navy",
        className
      )}
    >
      <span className="mr-1 font-sans text-[0.625rem] font-semibold tracking-[0.14em] text-muted">
        {site.currency}
      </span>
      {item.price}
    </span>
  );
}
