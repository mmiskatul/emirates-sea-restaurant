import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/data/site";

export function ReservationCta() {
  return (
    <section className="border-y border-rule bg-ivory">
      <div className="shell py-20 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-gold" aria-hidden="true" />
            Reservations
            <span className="h-px w-6 bg-gold" aria-hidden="true" />
          </p>

          <h2 className="mt-6 text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.05]">
            Your table is waiting
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-[1.8] text-muted">
            Planning a family dinner, seafood feast or special gathering? Reserve
            your table and enjoy the Emirates Sea Restaurant experience.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/reservation" size="lg">
              Reserve a Table
            </ButtonLink>
            <ButtonLink href={`tel:${site.phone.tel}`} variant="outline" size="lg">
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phone.display}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
