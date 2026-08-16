import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Numbered because this genuinely is a sequence — the order a plate travels
 * through the restaurant, from the market to your table.
 */
const pillars = [
  {
    step: "01",
    title: "Fresh ingredients",
    body: "Fish, prawns, crab and lobster are bought for the day's service and kept whole until they are ordered. If something is not right, it does not go on the grill.",
  },
  {
    step: "02",
    title: "Authentic flavors",
    body: "Seven kitchens' worth of technique under one roof — charcoal for the grills, a tandoor for the breads, a wok for the Szechuan, and gravies ground rather than opened.",
  },
  {
    step: "03",
    title: "Warm hospitality",
    body: "Arabian in temperament: you are shown the catch, given time to decide, and never rushed off a table you have settled into.",
  },
];

export function Experience() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="How a plate gets here"
          title="Three things we do not shortcut"
        />

        <ol className="mt-14 grid gap-px border border-rule bg-rule md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal
              as="li"
              key={pillar.step}
              delay={index * 110}
              className="bg-paper p-8 lg:p-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="numeral text-[2.75rem]">{pillar.step}</span>
                <span className="h-px flex-1 bg-rule" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-[1.6rem] leading-tight">
                {pillar.title}
              </h3>
              <p className="mt-4 text-[0.9375rem] leading-[1.8] text-muted">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
