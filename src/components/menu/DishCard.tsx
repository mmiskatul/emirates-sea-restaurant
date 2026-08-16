import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Price } from "@/components/menu/Price";
import type { MenuItem, MenuSection } from "@/lib/data/menu";
import { formatMenuNumber } from "@/lib/utils";

export function DishCard({
  item,
  priority = false,
}: {
  item: MenuItem & { section: MenuSection };
  priority?: boolean;
}) {
  return (
    <article className="group relative flex flex-col">
      <Link
        href={`/menu#${item.section.id}`}
        className="absolute inset-0 z-10 rounded-[3px]"
      >
        <span className="sr-only">
          View {item.name} in the {item.section.name} menu
        </span>
      </Link>

      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        ) : null}
        <span className="numeral absolute top-0 left-0 bg-paper px-3 py-1.5 text-sm">
          {formatMenuNumber(item.no)}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <p className="eyebrow text-muted">{item.section.name}</p>

        <div className="mt-3 flex items-baseline gap-3">
          <h3 className="font-display text-[1.4rem] leading-snug text-navy transition-colors duration-300 group-hover:text-ocean">
            {item.name}
          </h3>
          <span
            className="mb-1 h-px flex-1 bg-rule"
            aria-hidden="true"
          />
          <Price item={item} />
        </div>

        {item.description ? (
          <p className="mt-3 text-[0.9375rem] leading-[1.7] text-muted">
            {item.description}
          </p>
        ) : null}

        <span className="mt-5 inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.16em] text-ocean uppercase">
          View details
          <ArrowRight
            className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </article>
  );
}
