import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cuisines } from "@/lib/data/navigation";
import { menu } from "@/lib/data/menu";
import { formatMenuNumber } from "@/lib/utils";

function rangeFor(sectionId: string) {
  const section = menu.find((entry) => entry.id === sectionId);
  if (!section || section.items.length === 0) return null;
  const numbers = section.items.map((item) => item.no);
  return {
    section,
    label: `${formatMenuNumber(Math.min(...numbers))}–${formatMenuNumber(
      Math.max(...numbers)
    )}`,
  };
}

export function Cuisines() {
  const columns = cuisines
    .map((cuisine) => ({ ...cuisine, range: rangeFor(cuisine.sectionId) }))
    .filter((cuisine) => cuisine.range);

  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Beyond the catch"
          title="More than seafood"
          intro="Seafood is the specialty, not the whole story. One menu runs from charcoal-grilled hamour to Persian kubideh, Hyderabadi chicken and Thai green curry — so a table of seven rarely has to compromise."
        />
      </div>

      {/* A band of vertical panels rather than a card grid: on phones it scrolls
          sideways, on desktop the seven cuisines divide the full width. */}
      <Reveal className="mt-14">
        <div className="no-scrollbar overflow-x-auto border-y border-rule">
          <ul className="flex min-w-max lg:min-w-0">
            {columns.map((cuisine) => (
              <li
                key={cuisine.label}
                className="w-[16rem] shrink-0 border-r border-rule last:border-r-0 sm:w-[18rem] lg:w-auto lg:flex-1"
              >
                <Link
                  href={`/menu#${cuisine.sectionId}`}
                  className="group relative flex h-full min-h-[19rem] flex-col justify-between p-7 transition-colors duration-500 hover:bg-ivory lg:min-h-[23rem] lg:p-8"
                >
                  <span className="numeral text-xs tracking-[0.14em]">
                    No. {cuisine.range!.label}
                  </span>

                  <span>
                    <span className="block font-display text-[1.75rem] leading-tight text-navy transition-colors duration-300 group-hover:text-ocean lg:text-[2rem]">
                      {cuisine.label}
                    </span>
                    <span
                      className="arabic mt-2 block text-sm text-muted"
                      dir="rtl"
                    >
                      {cuisine.range!.section.nameAr}
                    </span>
                    <span className="mt-4 block text-[0.875rem] leading-[1.65] text-muted">
                      {cuisine.note}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-6 block h-px w-8 origin-left bg-gold transition-transform duration-500 ease-out group-hover:scale-x-[3.5]"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
