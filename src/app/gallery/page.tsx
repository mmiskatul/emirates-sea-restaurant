import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageHero } from "@/components/layout/PageHero";
import { ReservationCta } from "@/components/home/ReservationCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { gallery } from "@/lib/data/gallery";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gallery",
  description:
    "Photographs of Emirates Sea Restaurant in Al Rashidiya, Dubai — the dining room, seafood platters, charcoal grills and family tables.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The room and the plates"
        crumb="Gallery"
        intro={`${gallery.length} photographs of the restaurant and its food. Where a photograph is of a dish on the menu, the printed menu number is shown with it.`}
      />

      <GalleryGrid />
      <ReservationCta />

      <JsonLd data={breadcrumbSchema([{ name: "Gallery", path: "/gallery" }])} />
    </>
  );
}
