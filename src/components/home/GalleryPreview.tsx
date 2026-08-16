import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery } from "@/lib/data/gallery";

/** Hand-composed rather than a uniform grid: sizes vary by what the photo shows. */
const layout = [
  { src: "/images/restaurant/seafood-platter-deluxe.jpg", span: "sm:col-span-7 sm:row-span-2", ratio: "aspect-[16/10] sm:aspect-auto sm:h-full" },
  { src: "/images/restaurant/chicken-lollipop.jpg", span: "sm:col-span-5", ratio: "aspect-[4/5]" },
  { src: "/images/restaurant/prawn-majboos.jpg", span: "sm:col-span-5", ratio: "aspect-[5/4]" },
  { src: "/images/restaurant/seafood-manchow-soup.jpg", span: "sm:col-span-4", ratio: "aspect-[4/5]" },
  { src: "/images/restaurant/hamour-grilled.jpg", span: "sm:col-span-4", ratio: "aspect-[4/5]" },
  { src: "/images/restaurant/arabic-mezze.jpg", span: "sm:col-span-4", ratio: "aspect-[4/5]" },
];

export function GalleryPreview() {
  const items = layout
    .map((entry) => ({
      ...entry,
      image: gallery.find((image) => image.src === entry.src),
    }))
    .filter((entry) => entry.image);

  return (
    <section className="border-t border-rule bg-ivory py-20 lg:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Gallery"
            title="A look at the table"
            intro="Photographs from the dining room and the pass — no stock plates."
            className="max-w-lg"
          />
          <Reveal className="hidden sm:block">
            <ButtonLink href="/gallery" variant="outline">
              View Full Gallery
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="grid gap-4 sm:auto-rows-[13rem] sm:grid-cols-12 lg:auto-rows-[15rem]">
            {items.map(({ image, span, ratio }) => (
              <figure
                key={image!.src}
                className={`group relative overflow-hidden bg-sand ${span} ${ratio}`}
              >
                <Image
                  src={image!.src}
                  alt={image!.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-navy/80 to-transparent p-4 pt-10 text-[0.75rem] font-medium tracking-[0.08em] text-white/95 uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {image!.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 sm:hidden">
          <ButtonLink href="/gallery" variant="outline" size="lg" className="w-full">
            View Full Gallery
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
