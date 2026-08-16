import { DishCard } from "@/components/menu/DishCard";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { menuItemCount, signatureDishes } from "@/lib/data/menu";
import { site } from "@/lib/data/site";

export function SignatureDishes() {
  return (
    <section className="border-y border-rule bg-ivory py-20 lg:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Signature dishes"
            title="From the sea to your table"
            intro={`Six plates the kitchen is known for, out of ${menuItemCount} on the menu. The number beside each dish is the one printed on the menu — order by it.`}
            className="max-w-xl"
          />
          <Reveal className="hidden lg:block">
            <ButtonLink href="/menu" variant="outline">
              See the full menu
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((item, index) => (
            <Reveal key={item.no} delay={(index % 3) * 90}>
              <DishCard item={item} priority={index < 3} />
            </Reveal>
          ))}
        </div>

        {site.showPrices ? (
          <Reveal className="mt-12 border-t border-rule pt-5">
            <p className="text-[0.8125rem] leading-relaxed text-muted">
              {site.priceNote}
            </p>
          </Reveal>
        ) : null}

        <Reveal className="mt-10 lg:hidden">
          <ButtonLink href="/menu" variant="outline" size="lg" className="w-full">
            See the full menu
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
