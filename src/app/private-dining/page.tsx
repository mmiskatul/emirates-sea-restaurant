import Image from "next/image";
import { Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/ui/JsonLd";
import { LocationSection } from "@/components/location/LocationSection";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/data/site";
import { itemByNumber } from "@/lib/data/menu";
import { Price } from "@/components/menu/Price";
import { formatMenuNumber } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Private & Family Dining",
  description:
    "Private family seating, group tables and celebration dining at Emirates Sea Restaurant, Al Rashidiya, Dubai. Call +971 4 220 8686 to plan your visit.",
  path: "/private-dining",
  image: "/images/restaurant/mixed-kabab-platter.jpg",
});

const occasions = [
  {
    title: "Family gatherings",
    body: "Screened seating away from the main floor, so a large family can eat without an audience. Children are welcome and the pace is yours.",
  },
  {
    title: "Celebrations",
    body: "Birthdays, graduations and homecomings. Tell us the headcount and whether you want the table laid before you arrive.",
  },
  {
    title: "Group and corporate meals",
    body: "Long tables for teams and colleagues, with platters ordered ahead so the food arrives together rather than in waves.",
  },
  {
    title: "Quiet weeknight dinners",
    body: "The room is calmest early in the evening — a good time to be shown the catch and take your time over it.",
  },
];

/** Platters that actually work for a group, taken straight from the menu. */
const groupPlatters = [35, 36, 37, 67, 78].map(itemByNumber).filter(Boolean);

export default function PrivateDiningPage() {
  return (
    <>
      <PageHero
        eyebrow="Private & family dining"
        title="A room you can close around your table"
        crumb="Private Dining"
        intro="Privacy is the thing families ask us about most. The dining room is laid out so a group can be given its own corner, and the kitchen is set up to feed that corner from one platter rather than eleven separate plates."
      />

      <section className="bg-paper py-16 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/images/restaurant/mixed-kabab-platter.jpg"
                alt="A long shared platter of mixed kababs set for a group table"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="What to expect"
              title="Comfortable, private, unhurried"
              intro="No minimum spend, no set menu, no time limit on the table. Call ahead and say how many you are and whether you want to be tucked away — that is usually the whole conversation."
            />

            <Reveal delay={80}>
              <dl className="mt-10 space-y-6">
                {occasions.map((occasion) => (
                  <div key={occasion.title} className="border-t border-rule pt-5">
                    <dt className="font-display text-xl text-navy">
                      {occasion.title}
                    </dt>
                    <dd className="mt-2 text-[0.9375rem] leading-[1.7] text-muted">
                      {occasion.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-rule bg-ivory py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Ordering for a group"
            title="Five plates that feed a table"
            intro="Ask for these by number. Whole lobster and whole fish are priced by size, so the kitchen will show you what came in before anything is cooked."
          />

          <Reveal className="mt-12 border-t border-rule-strong">
            <ul>
              {groupPlatters.map((item) => (
                <li
                  key={item!.no}
                  className="flex items-baseline gap-4 border-b border-rule py-5"
                >
                  <span className="numeral w-9 shrink-0 text-sm">
                    {formatMenuNumber(item!.no)}
                  </span>
                  <span className="font-display text-[1.25rem] text-navy">
                    {item!.name}
                  </span>
                  <span className="mb-1 h-px flex-1 bg-rule" aria-hidden="true" />
                  <Price item={item!} className="shrink-0" />
                </li>
              ))}
            </ul>
          </Reveal>

          {site.showPrices ? (
            <Reveal className="mt-5">
              <p className="text-[0.8125rem] text-muted">{site.priceNote}</p>
            </Reveal>
          ) : null}
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <div className="shell">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              Plan your visit
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
            </p>
            <h2 className="mt-6 text-[clamp(2rem,4.6vw,3rem)] leading-[1.08]">
              Tell us how many, and when
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.8] text-muted">
              For groups of eight or more, calling is faster than a form — the
              restaurant can confirm private seating on the spot.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/reservation" size="lg">
                Plan Your Visit
              </ButtonLink>
              <ButtonLink
                href={`tel:${site.phone.tel}`}
                variant="outline"
                size="lg"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call Restaurant
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <LocationSection eyebrow="Getting here" heading="Where to find us" />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Private Dining", path: "/private-dining" },
        ])}
      />
    </>
  );
}
