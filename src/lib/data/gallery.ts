/**
 * Every image here is a real photograph of Emirates Sea Restaurant — the
 * building on 51A Street, or plates served in the dining room.
 *
 * To add the restaurant's own higher-resolution photography: drop files into
 * /public/images/restaurant and add an entry below. Nothing else needs editing.
 */

export type GalleryCategory = "food" | "seafood" | "restaurant" | "interior" | "family";

export type GalleryImage = {
  src: string;
  alt: string;
  /** Intrinsic dimensions, so Next/Image never causes layout shift. */
  width: number;
  height: number;
  caption: string;
  categories: GalleryCategory[];
  /** Menu number, when the photo is of a dish that's on the menu. */
  menuNo?: number;
};

export const galleryFilters: Array<{ id: "all" | GalleryCategory; label: string }> = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "seafood", label: "Seafood" },
  { id: "restaurant", label: "Restaurant" },
  { id: "family", label: "Family Dining" },
  { id: "interior", label: "Interior" },
];

export const gallery: GalleryImage[] = [
  {
    src: "/images/restaurant/exterior-facade.jpg",
    alt: "The Emirates Sea Restaurant building on 51A Street, Al Rashidiya, with its gold lobster signage in English and Arabic",
    width: 1600,
    height: 1067,
    caption: "The restaurant on 51A Street, Al Rashidiya",
    categories: ["restaurant", "interior"],
  },
  {
    src: "/images/restaurant/seafood-platter-deluxe.jpg",
    alt: "Seafood Platter Deluxe with lobster, crab, mussels, calamari rings and prawns",
    width: 508,
    height: 308,
    caption: "Seafood Platter Deluxe",
    categories: ["food", "seafood", "family"],
    menuNo: 35,
  },
  {
    src: "/images/restaurant/hamour-grilled.jpg",
    alt: "Charcoal-grilled hamour fillets on a banana leaf with fries and a carved radish garnish",
    width: 1122,
    height: 1496,
    caption: "Hamour, grilled over charcoal",
    categories: ["food", "seafood"],
    menuNo: 61,
  },
  {
    src: "/images/restaurant/mixed-kabab-platter.jpg",
    alt: "Special Mixed Kabab Platter with kubideh, lamb and chicken kababs, grilled tomato and saffron rice",
    width: 1122,
    height: 1496,
    caption: "Special Mixed Kabab Platter",
    categories: ["food", "family"],
    menuNo: 67,
  },
  {
    src: "/images/restaurant/prawn-majboos.jpg",
    alt: "King Prawn Majboos served in a branded Emirates Sea bowl with fried onion and fresh prawns alongside",
    width: 510,
    height: 312,
    caption: "King Prawn Majboos",
    categories: ["food", "seafood"],
    menuNo: 127,
  },
  {
    src: "/images/restaurant/chicken-lollipop.jpg",
    alt: "Chicken lollipops on a banana leaf with a bowl of house dipping sauce and carved vegetable garnish",
    width: 1122,
    height: 1496,
    caption: "Chicken Lollipop",
    categories: ["food", "family"],
    menuNo: 9,
  },
  {
    src: "/images/restaurant/seafood-manchow-soup.jpg",
    alt: "Seafood manchow soup in a white bowl on a doily, garnished with spring onion",
    width: 1122,
    height: 1496,
    caption: "Seafood Manchow Soup",
    categories: ["food", "seafood"],
    menuNo: 16,
  },
  {
    src: "/images/restaurant/cream-of-seafood-soup.jpg",
    alt: "Cream of seafood soup in a branded Emirates Sea bowl with prawns beside it",
    width: 516,
    height: 308,
    caption: "Cream of Seafood Soup",
    categories: ["food", "seafood"],
    menuNo: 14,
  },
  {
    src: "/images/restaurant/arabic-mezze.jpg",
    alt: "Arabic special salad platter with hummus, mutabbal, tabbouleh and fresh vegetables",
    width: 513,
    height: 314,
    caption: "Arabic Special Salad",
    categories: ["food", "family"],
    menuNo: 28,
  },
  {
    src: "/images/restaurant/arabic-salad-platter.jpg",
    alt: "Assorted salad platter with hummus, mutabbal, tabbouleh and a carved vegetable rose",
    width: 513,
    height: 314,
    caption: "Assorted Salad Platter",
    categories: ["food", "family"],
    menuNo: 22,
  },
];

export const heroImage = gallery[0];

export function galleryByCategory(category: "all" | GalleryCategory) {
  return category === "all"
    ? gallery
    : gallery.filter((image) => image.categories.includes(category));
}
