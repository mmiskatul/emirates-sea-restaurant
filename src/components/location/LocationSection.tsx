import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { addressLines, site } from "@/lib/data/site";

export function LocationSection({
  heading = "Visit Emirates Sea Restaurant",
  eyebrow = "Find us",
}: {
  heading?: string;
  eyebrow?: string;
}) {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={eyebrow}
            title={heading}
            intro="Ten minutes from Dubai International Airport, just off 51A Street near Bin Sougat Centre. Parking is on the street directly in front of the restaurant."
          />

          <Reveal delay={80} className="mt-10 space-y-8">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
              <address className="text-[0.9375rem] leading-[1.85] text-charcoal not-italic">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a
                href={`tel:${site.phone.tel}`}
                className="link-underline font-display text-2xl text-navy transition-colors hover:text-ocean"
              >
                {site.phone.display}
              </a>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
              <div className="text-[0.9375rem] leading-[1.85] text-charcoal">
                <p>
                  {site.hours.displayDays} · {site.hours.displayTime}
                </p>
                <p className="mt-1 text-[0.8125rem] text-muted">{site.hours.note}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href={site.maps.directions} size="lg">
                <Navigation className="size-4" aria-hidden="true" />
                Get Directions
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

        <Reveal delay={120}>
          <div className="h-full min-h-[22rem] overflow-hidden border border-rule bg-sand">
            <iframe
              src={site.maps.embed}
              title={`Map showing ${site.name} in ${site.address.district}, ${site.address.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[22rem] w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
