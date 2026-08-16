import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  {
    title: "Private family seating",
    body: "Screened seating for families who would rather not share a room with the rest of the restaurant.",
  },
  {
    title: "Built for groups",
    body: "Long tables and platters sized for eight or more, so nobody is ordering around a small table.",
  },
  {
    title: "Comfortable and unhurried",
    body: "No turning of tables. Children are welcome, and the pace is yours to set.",
  },
];

export function FamilyDining() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Family & private dining"
            title="Made for family moments"
            intro="Relax, share and enjoy your meal in a comfortable setting designed for families and groups."
          />

          <Reveal delay={80}>
            <dl className="mt-10 space-y-6">
              {points.map((point) => (
                <div key={point.title} className="border-t border-rule-strong pt-5">
                  <dt className="font-display text-xl text-navy">{point.title}</dt>
                  <dd className="mt-2 text-[0.9375rem] leading-[1.7] text-muted">
                    {point.body}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <ButtonLink href="/private-dining" size="lg">
                Explore Private Dining
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7">
          <figure className="relative">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11]">
              <Image
                src="/images/restaurant/mixed-kabab-platter.jpg"
                alt="The Special Mixed Kabab Platter laid out across a long serving plate for a shared table"
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline gap-3 text-[0.75rem] tracking-[0.12em] text-muted uppercase">
              <span className="numeral text-sm">67</span>
              Special Mixed Kabab Platter — one plate, one table
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
