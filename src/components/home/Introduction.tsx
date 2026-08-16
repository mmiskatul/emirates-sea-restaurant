import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  "Fresh Seafood",
  "Family Dining",
  "Private Seating",
  "Warm Hospitality",
];

export function Introduction() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/restaurant/hamour-grilled.jpg"
              alt="Charcoal-grilled hamour served on a banana leaf with fries and a carved garnish"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          {/* Menu number as caption: this is a dish you can actually order. */}
          <div className="absolute -bottom-px left-0 flex items-end gap-3 bg-paper py-4 pr-6">
            <span className="numeral text-4xl leading-none">61</span>
            <span className="pb-1 font-sans text-[0.6875rem] font-semibold tracking-[0.16em] text-muted uppercase">
              Hamour, grilled
            </span>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Why people come back"
            title="A seafood experience worth sharing"
            intro="The kitchen works the way a seafood house should: whole fish shown at the table, lobster and crab cooked to order, and gravies built the same morning they are served. Around that sits a broad menu, because a family rarely arrives wanting only one thing."
          />

          <Reveal delay={80}>
            <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.75] text-muted">
              Tables are set for groups rather than couples, with quieter seating
              for families who want it. Service is unhurried and Arabic in
              temperament — you are expected to stay a while.
            </p>

            <ul className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 border-b border-rule pb-4 text-[0.9375rem] text-navy"
                >
                  <Check className="size-4 shrink-0 text-ocean" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
