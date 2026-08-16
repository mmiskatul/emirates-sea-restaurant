import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { LocationSection } from "@/components/location/LocationSection";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { addressLines, site } from "@/lib/data/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Call Emirates Sea Restaurant on +971 4 220 8686, or find us at Heirs Abdul Ghafoor Building, 49 51A Street, Al Rashidiya, Dubai. Open daily 12:30 PM – 12:30 AM.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call, or just come in"
        crumb="Contact"
        intro="The fastest way to reach the restaurant is the phone — someone on the floor will answer, and they can tell you what came in that day."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={`tel:${site.phone.tel}`} size="lg">
            <Phone className="size-4" aria-hidden="true" />
            {site.phone.display}
          </ButtonLink>
          <ButtonLink href={site.maps.directions} variant="outline" size="lg">
            <Navigation className="size-4" aria-hidden="true" />
            Get Directions
          </ButtonLink>
        </div>
      </PageHero>

      <section className="bg-paper py-16 lg:py-24">
        <div className="shell grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          <Card icon={<Phone className="size-4" aria-hidden="true" />} label="Phone">
            <a
              href={`tel:${site.phone.tel}`}
              className="link-underline font-display text-xl text-navy hover:text-ocean"
            >
              {site.phone.display}
            </a>
          </Card>

          <Card icon={<Mail className="size-4" aria-hidden="true" />} label="Email">
            <a
              href={`mailto:${site.email}`}
              className="link-underline text-[0.9375rem] break-all text-charcoal hover:text-ocean"
            >
              {site.email}
            </a>
          </Card>

          <Card icon={<Clock className="size-4" aria-hidden="true" />} label="Opening hours">
            <p className="text-[0.9375rem] text-charcoal">
              {site.hours.displayDays}
              <br />
              {site.hours.displayTime}
            </p>
            <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
              {site.hours.note}
            </p>
          </Card>

          <Card icon={<MapPin className="size-4" aria-hidden="true" />} label="Address">
            <address className="text-[0.9375rem] leading-[1.75] text-charcoal not-italic">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </Card>
        </div>

        <Reveal className="shell mt-10">
          <p className="max-w-3xl text-[0.9375rem] leading-[1.8] text-muted">
            Makani <span className="tabular-nums text-charcoal">{site.address.makani}</span>{" "}
            is a UAE address code — type it into Google Maps or a taxi app and it
            will bring you to the door rather than the block. The restaurant is{" "}
            {site.address.landmark.toLowerCase()}.
          </p>
        </Reveal>
      </section>

      <LocationSection eyebrow="On the map" heading="Getting to the restaurant" />

      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
    </>
  );
}

function Card({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-paper p-6 lg:p-7">
      <p className="eyebrow flex items-center gap-2.5 text-muted">
        <span className="text-gold">{icon}</span>
        {label}
      </p>
      <div className="mt-4">{children}</div>
    </div>
  );
}
