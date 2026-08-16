import Image from "next/image";
import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* A single ivory field behind the right half keeps the page white while
          giving the photograph an edge to sit against. */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-1/2 bg-ivory lg:block"
      />

      <div className="shell relative grid items-center gap-10 pt-10 pb-14 lg:grid-cols-12 lg:gap-14 lg:pt-16 lg:pb-24">
        <div className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-6 bg-gold" aria-hidden="true" />
            Emirates Sea Restaurant · Dubai
          </p>

          <h1 className="mt-6 text-[clamp(2.6rem,7.4vw,4.5rem)] leading-[1.02] tracking-[-0.02em]">
            Fresh from the sea.{" "}
            <span className="block text-ocean">Served with Arabian warmth.</span>
          </h1>

          <p className="mt-7 max-w-md text-[1.0625rem] leading-[1.8] text-muted">
            Discover fresh seafood, generous flavors and warm family hospitality
            in the heart of Al&nbsp;Rashidiya, Dubai.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/menu" size="lg">
              Explore Our Menu
            </ButtonLink>
            <ButtonLink href="/reservation" variant="outline" size="lg">
              Reserve a Table
            </ButtonLink>
          </div>

          <div className="mt-10 flex items-center gap-5 border-t border-rule pt-6">
            <a
              href={`tel:${site.phone.tel}`}
              className="group flex items-center gap-3 text-navy"
            >
              <span className="flex size-10 items-center justify-center rounded-full border border-rule-strong transition-colors duration-300 group-hover:border-gold">
                <Phone className="size-4 text-gold" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-sans text-[0.625rem] font-semibold tracking-[0.2em] text-muted uppercase">
                  Call the restaurant
                </span>
                <span className="link-underline block font-display text-xl">
                  {site.phone.display}
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* The photograph is the actual restaurant, not a stock plate. It runs
            to the right page edge on large screens so it reads as the subject. */}
        <div className="lg:col-span-7 lg:-mr-[max(0px,calc((100vw-82.5rem)/2+3.5rem))]">
          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-[3/2]">
              <Image
                src="/images/restaurant/exterior-facade.jpg"
                alt="The Emirates Sea Restaurant building on 51A Street in Al Rashidiya, Dubai, with gold lobster signage above the entrance"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-4 flex items-center gap-3 text-[0.75rem] tracking-[0.12em] text-muted uppercase">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              49 51A Street, Al Rashidiya
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
