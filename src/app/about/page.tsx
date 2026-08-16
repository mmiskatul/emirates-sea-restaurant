import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { ReservationCta } from "@/components/home/ReservationCta";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/ui/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { menu, menuItemCount } from "@/lib/data/menu";

export const metadata = pageMetadata({
  title: "About",
  description:
    "How Emirates Sea Restaurant cooks: whole fish and lobster to order, seven kitchens under one roof, and a dining room built for families in Al Rashidiya, Dubai.",
  path: "/about",
});

const chapters = [
  {
    id: "story",
    title: "Our story",
    body: [
      "Emirates Sea Restaurant sits on 51A Street in Al Rashidiya, a short drive from Dubai International Airport and a neighbourhood restaurant in the truest sense — most of the room on any given evening lives within a few minutes of it.",
      "The building is purpose-built for the business, with gold lobsters flanking the crest above the door and the name carried in both English and Arabic. Inside, the room is laid out for groups rather than couples: long tables, wide aisles, and seating that can be closed off when a family would rather keep to themselves.",
    ],
  },
  {
    id: "philosophy",
    title: "Seafood philosophy",
    body: [
      "The kitchen is built around a simple rule: seafood should be shown before it is cooked. Hamour, pomfret, sherry and sea bream are priced by size rather than by portion, because you choose the fish and it goes straight to the charcoal.",
      "Lobster is handled the same way. Whether it is grilled, thermidor, Szechuan, Manchurian, dynamite or turned into a biryani, the price follows the animal — the menu says so in print, and so does this website.",
    ],
  },
  {
    id: "quality",
    title: "Quality and freshness",
    body: [
      "Prawns, crab, mussels, squid and salmon are bought for the day's service. Nothing on the seafood list is built to be held over, which is why the platters — deluxe, medium and small — are sized around what a table will actually finish in one sitting.",
      "Gravies and masalas are ground rather than opened, breads are baked to order in the tandoor, and juices are pressed when they are ordered.",
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality",
    body: [
      "Service here is Arabian in temperament: you are greeted, shown the catch, given time, and not moved along. Tables are not turned. If a family wants to sit for three hours over a platter and a pot of tea, that is the intended use of the room.",
    ],
  },
  {
    id: "family",
    title: "Family dining",
    body: [
      "Private and screened seating is available for families and larger groups, and children are genuinely welcome rather than tolerated. The kitchen will scale a platter, split a grill, or send out something plain for a child without being asked twice.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A seafood house in Al Rashidiya"
        arabic="مطعم بحر الإمارات"
        crumb="About"
        intro="Emirates Sea Restaurant is known for seafood, and cooks a good deal more besides — Arabic, Indian, Chinese, Continental, Persian and Thai, all from one kitchen, all on one menu."
      />

      <section className="bg-paper py-16 lg:py-24">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="space-y-16">
              {chapters.map((chapter, index) => (
                <Reveal
                  as="article"
                  key={chapter.id}
                  id={chapter.id}
                  className="scroll-mt-32"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="numeral text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-rule" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.4rem)] leading-tight">
                    {chapter.title}
                  </h2>
                  {chapter.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="mt-5 text-[1.0625rem] leading-[1.85] text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-32">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/restaurant/hamour-grilled.jpg"
                  alt="Charcoal-grilled hamour fillets plated on a banana leaf"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 flex items-baseline gap-3 text-[0.75rem] tracking-[0.12em] text-muted uppercase">
                <span className="numeral text-sm">61</span>
                Hamour, priced by size
              </p>
            </Reveal>
          </aside>
        </div>
      </section>

      <section id="variety" className="border-t border-rule bg-ivory py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Our culinary variety"
            title="Seven kitchens, one menu"
            intro={`${menuItemCount} dishes across ${menu.length} sections. The breadth is deliberate: a table of eight in Al Rashidiya rarely wants the same thing, and nobody should have to eat somewhere else.`}
          />

          <Reveal className="mt-12 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((section) => (
              <div key={section.id} className="bg-paper p-6">
                <p className="numeral text-xs tracking-[0.14em]">
                  {section.items.length} dishes
                </p>
                <h3 className="mt-3 font-display text-xl text-navy">
                  {section.name}
                </h3>
                <p className="arabic mt-1 text-sm text-muted" dir="rtl">
                  {section.nameAr}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <ButtonLink href="/menu" size="lg">
              Read the full menu
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <ReservationCta />
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
    </>
  );
}
