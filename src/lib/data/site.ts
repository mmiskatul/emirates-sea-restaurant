/**
 * Single source of truth for everything the restaurant owner may need to change.
 * Nothing in this file is invented: each value is traceable to the business's own
 * listing, printed menu or website. See `docs/CONTENT.md` for how to update it.
 */

export const site = {
  name: "Emirates Sea Restaurant",
  nameArabic: "مطعم بحر الإمارات",
  cityLabel: "Dubai",
  legalName: "Emirates Sea Restaurants LLC",
  tagline: "Fresh from the sea, served with Arabian warmth.",

  /** Change this to the live domain before deploying. Used for canonicals + OG. */
  url: "https://emiratessea.ae",

  phone: {
    display: "+971 4 220 8686",
    tel: "+97142208686",
  },

  /** Set to a real WhatsApp business number to switch reservations to WhatsApp. */
  whatsapp: null as string | null,

  email: "info@emiratessea.ae",

  address: {
    building: "Heirs Abdul Ghafoor Building",
    makani: "3751691619",
    street: "49 51A Street",
    landmark: "Near Bin Sougat Centre",
    district: "Al Rashidiya",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
  },

  geo: { lat: 25.2319419, lng: 55.3868504 },

  maps: {
    /** Owner-supplied Google Maps short link. */
    share: "https://maps.app.goo.gl/gDv2Wad3KaZGch9H7",
    /** Coordinates rather than a name, so the pin can never resolve elsewhere. */
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=25.2319419%2C55.3868504",
    embed:
      "https://www.google.com/maps?q=Emirates+Sea+Restaurant+Al+Rashidiya+Dubai&z=16&output=embed",
  },

  /**
   * Google lists the kitchen as open daily until 12:30 AM. Aggregator listings
   * differ slightly on the opening time, so treat this as owner-editable.
   * Format is 24h so it can be reused directly in schema.org openingHours.
   */
  hours: {
    note: "Open daily. Kitchen timings can change on public holidays — please call ahead.",
    opens: "12:30",
    closes: "00:30",
    displayDays: "Every day",
    displayTime: "12:30 PM – 12:30 AM",
  },

  social: {
    facebook: "https://www.facebook.com/emiratessea",
    instagram: "https://www.instagram.com/emiratessearestaurant/",
  },

  /**
   * The printed menu carries prices in AED. They were transcribed from the
   * restaurant's own menu and can drift, so the UI always shows the disclaimer
   * below. Set to false to hide every price site-wide without touching a component.
   */
  showPrices: true,
  priceNote:
    "Prices in AED and exclusive of applicable taxes. Menu and prices may change — please confirm when ordering.",
  currency: "AED",
} as const;

export const addressLines = [
  site.address.building,
  `Makani No. ${site.address.makani}`,
  site.address.street,
  site.address.district,
  `${site.address.city}, ${site.address.country}`,
];

export const addressOneLine = addressLines.join(", ");
