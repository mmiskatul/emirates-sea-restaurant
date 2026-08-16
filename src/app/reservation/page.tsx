import { Clock, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ReservationForm } from "@/components/reservation/ReservationForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { addressLines, site } from "@/lib/data/site";

export const metadata = pageMetadata({
  title: "Reserve a Table",
  description:
    "Request a table at Emirates Sea Restaurant in Al Rashidiya, Dubai. Family and private seating available — or call +971 4 220 8686 to book directly.",
  path: "/reservation",
});

export default function ReservationPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Request a table"
        crumb="Reservation"
        intro="Send the details and the restaurant will call you back to confirm. If you want the table held tonight, calling is always faster."
      />

      <section className="bg-paper py-16 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ReservationForm />
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-display text-2xl text-navy">
                Booking directly
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-[1.8] text-muted">
                A phone call reaches the floor immediately, and whoever answers
                can tell you what came in that day and whether private seating is
                free at the time you want.
              </p>

              <dl className="mt-8 space-y-6 border-t border-rule pt-6">
                <div className="flex gap-4">
                  <Phone className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <dt className="text-[0.6875rem] font-semibold tracking-[0.16em] text-muted uppercase">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${site.phone.tel}`}
                        className="link-underline font-display text-xl text-navy hover:text-ocean"
                      >
                        {site.phone.display}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <dt className="text-[0.6875rem] font-semibold tracking-[0.16em] text-muted uppercase">
                      Hours
                    </dt>
                    <dd className="mt-1 text-[0.9375rem] text-charcoal">
                      {site.hours.displayDays} · {site.hours.displayTime}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <dt className="text-[0.6875rem] font-semibold tracking-[0.16em] text-muted uppercase">
                      Address
                    </dt>
                    <dd className="mt-1">
                      <address className="text-[0.9375rem] leading-[1.75] text-charcoal not-italic">
                        {addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 border-t border-rule pt-6">
                <p className="text-[0.8125rem] leading-[1.7] text-muted">
                  Groups of eight or more, and anything needing private seating,
                  are best arranged by phone so the restaurant can hold the right
                  corner of the room.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([{ name: "Reservation", path: "/reservation" }])}
      />
    </>
  );
}
