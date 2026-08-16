import type { Metadata } from "next";
import { site, addressOneLine } from "@/lib/data/site";
import { menu } from "@/lib/data/menu";

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/restaurant/exterior-facade.jpg",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: `${site.name} — ${site.cityLabel}`,
      locale: "en_AE",
      images: [{ url: image, width: 1600, height: 1067, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${site.address.building}, ${site.address.street}`,
  addressLocality: site.address.district,
  addressRegion: site.address.city,
  addressCountry: site.address.countryCode,
};

/**
 * Restaurant + LocalBusiness data. Deliberately carries no aggregateRating or
 * review — those must come from a verified source, not from us.
 */
export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${site.url}/#restaurant`,
  name: site.name,
  alternateName: site.nameArabic,
  legalName: site.legalName,
  description: `Seafood restaurant in Al Rashidiya, Dubai, serving fresh seafood platters, charcoal grills and Arabic, Indian, Chinese, Continental, Persian and Thai dishes.`,
  url: site.url,
  telephone: site.phone.tel,
  email: site.email,
  image: [`${site.url}/images/restaurant/exterior-facade.jpg`],
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  hasMap: site.maps.share,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
  ],
  servesCuisine: [
    "Seafood",
    "Arabic",
    "Indian",
    "Chinese",
    "Continental",
    "Persian",
    "Thai",
  ],
  priceRange: "$$",
  currenciesAccepted: site.currency,
  acceptsReservations: `${site.url}/reservation`,
  hasMenu: `${site.url}/menu`,
  sameAs: [site.social.facebook, site.social.instagram],
  areaServed: [
    { "@type": "Place", name: "Al Rashidiya, Dubai" },
    { "@type": "Place", name: "Dubai" },
  ],
};

export const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": `${site.url}/menu#menu`,
  name: `${site.name} Menu`,
  inLanguage: "en",
  hasMenuSection: menu.map((section) => ({
    "@type": "MenuSection",
    name: section.name,
    hasMenuItem: section.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      ...(item.price !== null
        ? {
            offers: {
              "@type": "Offer",
              price: item.price,
              priceCurrency: site.currency,
            },
          }
        : {}),
    })),
  })),
};

export function breadcrumbSchema(trail: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `${site.url}${crumb.path}`,
      })
    ),
  };
}

export const localBusinessSummary = `${site.name}, ${addressOneLine}. ${site.phone.display}.`;
