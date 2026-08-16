import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { SignatureDishes } from "@/components/home/SignatureDishes";
import { Cuisines } from "@/components/home/Cuisines";
import { FamilyDining } from "@/components/home/FamilyDining";
import { Experience } from "@/components/home/Experience";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { LocationSection } from "@/components/location/LocationSection";
import { ReservationCta } from "@/components/home/ReservationCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Emirates Sea Restaurant Dubai | Fresh Seafood & Family Dining",
  description:
    "Discover fresh seafood, Arabian-inspired flavors and family dining at Emirates Sea Restaurant in Al Rashidiya, Dubai.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <SignatureDishes />
      <Cuisines />
      <FamilyDining />
      <Experience />
      <GalleryPreview />
      <LocationSection />
      <ReservationCta />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Emirates Sea Restaurant",
          url: "https://emiratessea.ae",
        }}
      />
    </>
  );
}
