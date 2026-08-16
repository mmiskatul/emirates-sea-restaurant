/**
 * The full à la carte menu, transcribed from Emirates Sea Restaurant's own
 * printed menu. `no` is the real order number printed next to each dish — guests
 * and waiters use it, so the site uses it too.
 *
 * `price` is in AED. Use `null` where the printed menu says "as per size".
 * Section names in Arabic are taken verbatim from the printed menu headings.
 *
 * To update: edit this file only. Nothing in the UI hard-codes a dish.
 */

export type MenuItem = {
  no: number;
  name: string;
  price: number | null;
  /** Shown instead of a price, e.g. market-priced whole fish. */
  priceNote?: string;
  /** Optional editorial line. Only written where the dish genuinely needs one. */
  description?: string;
  tags?: Array<"seafood" | "vegetarian" | "signature" | "spicy">;
  /** Path under /public. Only set where a real photo of the dish exists. */
  image?: string;
};

export type MenuSection = {
  id: string;
  name: string;
  nameAr: string;
  /** Short line under the section heading on the menu page. */
  blurb: string;
  /** Groups the horizontal filter bar into a sensible order. */
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "starters",
    name: "Starters",
    nameAr: "مقبلات",
    blurb: "How most tables begin — crumb-fried from the day's catch, or something off the charcoal.",
    items: [
      { no: 1, name: "Our Special Starter Platter", price: 84, description: "The kitchen's own selection, built for sharing across a full table.", tags: ["seafood", "signature"] },
      { no: 2, name: "Mixed Seafood Crumb Fried", price: 59, tags: ["seafood"] },
      { no: 3, name: "Dynamite Prawns", price: 55, description: "Crisp prawns tossed in the house dynamite sauce.", tags: ["seafood", "signature"] },
      { no: 4, name: "Crumb Fried King Prawns", price: 49, tags: ["seafood"] },
      { no: 5, name: "Squid Crumb Fried", price: 36, tags: ["seafood"] },
      { no: 6, name: "Fish Fillet Crumb Fried", price: 32, tags: ["seafood"] },
      { no: 7, name: "Chicken Crumb Fried", price: 28 },
      { no: 8, name: "Mixed Spring Roll", price: 26 },
      { no: 9, name: "Chicken Lollipop", price: 26, image: "/images/restaurant/chicken-lollipop.jpg" },
      { no: 10, name: "Vegetable Spring Roll", price: 24, tags: ["vegetarian"] },
      { no: 11, name: "French Fries", price: 15, tags: ["vegetarian"] },
    ],
  },
  {
    id: "soups",
    name: "Soups",
    nameAr: "شوربات",
    blurb: "Seafood broths built on the same stock the kitchen makes every morning.",
    items: [
      { no: 12, name: "Tom Yum Seafood Soup", price: 24, tags: ["seafood", "spicy"] },
      { no: 13, name: "Oriental Seafood Soup", price: 24, tags: ["seafood"] },
      { no: 14, name: "Cream of Seafood Soup", price: 24, tags: ["seafood"], image: "/images/restaurant/cream-of-seafood-soup.jpg" },
      { no: 15, name: "Mixed Seafood Soup", price: 24, tags: ["seafood"] },
      { no: 16, name: "Seafood Manchow Soup", price: 24, tags: ["seafood"], image: "/images/restaurant/seafood-manchow-soup.jpg" },
      { no: 17, name: "Creamy Chicken Soup", price: 19 },
      { no: 18, name: "Sweet Corn Chicken Soup", price: 19 },
      { no: 19, name: "Chicken Manchow Soup", price: 19 },
      { no: 20, name: "Dal Soup", price: 14, tags: ["vegetarian"] },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    nameAr: "سلطات",
    blurb: "Seafood salads alongside the Levantine mezze the family tables order first.",
    items: [
      { no: 21, name: "Cocktail Seafood Salad", price: 30, tags: ["seafood"] },
      { no: 22, name: "Assorted Salad Platter", price: 30, tags: ["vegetarian"], image: "/images/restaurant/arabic-salad-platter.jpg" },
      { no: 23, name: "Prawn Caesar Salad", price: 29, tags: ["seafood"] },
      { no: 24, name: "Prawn Cocktail Salad", price: 29, tags: ["seafood"] },
      { no: 25, name: "Greek Salad", price: 24, tags: ["vegetarian"] },
      { no: 26, name: "Turkey Salad", price: 24 },
      { no: 27, name: "Shirazi Salad", price: 24, tags: ["vegetarian"] },
      { no: 28, name: "Arabic Special Salad", price: 19, tags: ["vegetarian"], image: "/images/restaurant/arabic-mezze.jpg" },
      { no: 29, name: "Jarjeer Salad", price: 14, tags: ["vegetarian"] },
      { no: 30, name: "Tabbouleh", price: 14, tags: ["vegetarian"] },
      { no: 31, name: "Fattoush", price: 14, tags: ["vegetarian"] },
      { no: 32, name: "Hummus", price: 14, tags: ["vegetarian"] },
      { no: 33, name: "Mutabbal", price: 14, tags: ["vegetarian"] },
      { no: 34, name: "Vegetable Raitha", price: 10, tags: ["vegetarian"] },
    ],
  },
  {
    id: "platters-grills",
    name: "Platters & Grills",
    nameAr: "المشاوي والمأكولات البحرية",
    blurb: "The reason most people come. Whole fish and lobster are priced by size, so ask what came in today.",
    items: [
      { no: 35, name: "Seafood Platter Deluxe", price: 360, description: "Lobster, crab, prawns, mussels and calamari on one platter — the table centrepiece.", tags: ["seafood", "signature"], image: "/images/restaurant/seafood-platter-deluxe.jpg" },
      { no: 36, name: "Seafood Platter — Medium", price: 280, tags: ["seafood", "signature"] },
      { no: 37, name: "Seafood Platter — Small", price: 240, tags: ["seafood", "signature"] },
      { no: 38, name: "Lobster Grilled", price: null, priceNote: "As per size", tags: ["seafood", "signature"] },
      { no: 39, name: "Lobster Thermidor", price: null, priceNote: "As per size", tags: ["seafood", "signature"] },
      { no: 40, name: "Lobster Szechuan", price: null, priceNote: "As per size", tags: ["seafood", "spicy"] },
      { no: 41, name: "Lobster Manchurian", price: null, priceNote: "As per size", tags: ["seafood"] },
      { no: 42, name: "Tiger Prawns Grilled", price: 79, tags: ["seafood", "signature"] },
      { no: 43, name: "Mixed Seafood Grilled", price: 59, tags: ["seafood"] },
      { no: 44, name: "Prawns Continental Grilled", price: 59, tags: ["seafood"] },
      { no: 45, name: "Mixed Seafood Szechuan Sauce", price: 59, tags: ["seafood", "spicy"] },
      { no: 46, name: "Mixed Seafood White Sauce", price: 59, tags: ["seafood"] },
      { no: 47, name: "Prawns Cheese Butter Sauce", price: 56, tags: ["seafood"] },
      { no: 48, name: "Prawns Grilled", price: 54, tags: ["seafood"] },
      { no: 49, name: "King Prawns Chilli", price: 56, tags: ["seafood", "spicy"] },
      { no: 50, name: "King Prawns in Lemon Butter Sauce", price: 56, tags: ["seafood"] },
      { no: 51, name: "King Prawns Manchurian", price: 56, tags: ["seafood"] },
      { no: 52, name: "King Prawns in Peanut Butter Sauce", price: 56, tags: ["seafood"] },
      { no: 53, name: "Mussels in Szechuan Sauce", price: 56, tags: ["seafood", "spicy"] },
      { no: 54, name: "Mussels Manchurian", price: 56, tags: ["seafood"] },
      { no: 55, name: "Mussels in White Sauce", price: 56, tags: ["seafood"] },
      { no: 56, name: "Mussels in Peanut Butter Sauce", price: 56, tags: ["seafood"] },
      { no: 57, name: "King Prawns in Butter Garlic Sauce", price: 56, tags: ["seafood"] },
      { no: 58, name: "Prawns in White Sauce", price: 56, tags: ["seafood"] },
      { no: 59, name: "Crab Grilled (Whole)", price: 54, tags: ["seafood"] },
      { no: 60, name: "Squid in Lemon Butter Sauce", price: 46, tags: ["seafood"] },
      { no: 61, name: "Hamour / Pomfret / Sherry Grilled", price: null, priceNote: "As per size", description: "Whole fish over charcoal — the kitchen will show you the catch first.", tags: ["seafood", "signature"], image: "/images/restaurant/hamour-grilled.jpg" },
      { no: 62, name: "Kofer / Sea Bream Grilled", price: null, priceNote: "As per size", tags: ["seafood"] },
      { no: 63, name: "Squid Grilled", price: 44, tags: ["seafood"] },
    ],
  },
  {
    id: "salmon",
    name: "Salmon Special",
    nameAr: "سمك السلمون الخاصة",
    blurb: "Three ways with salmon, each cooked to order.",
    items: [
      { no: 64, name: "Salmon in Lemon Butter Sauce", price: 49, tags: ["seafood"] },
      { no: 65, name: "Salmon in Tomato Sauce", price: 49, tags: ["seafood"] },
      { no: 66, name: "Saffron Salmon Tikka", price: 49, tags: ["seafood", "signature"] },
    ],
  },
  {
    id: "persian",
    name: "Persian Kababs",
    nameAr: "كباب إيراني",
    blurb: "Charcoal kababs in the Iranian style, served with saffron rice.",
    items: [
      { no: 67, name: "Special Mixed Kabab Platter", price: 225, description: "Kubideh, chicken and lamb across one long platter — built for four or more.", tags: ["signature"], image: "/images/restaurant/mixed-kabab-platter.jpg" },
      { no: 68, name: "Kabab-e-Meighu", price: 55, tags: ["seafood"] },
      { no: 69, name: "Special Mixed Kabab", price: 48 },
      { no: 70, name: "Kabab-e-Barre", price: 36 },
      { no: 71, name: "Joojeh-e-Kabab", price: 36 },
      { no: 72, name: "Iranian Tikka", price: 36 },
      { no: 73, name: "Chello Kabab Kubideh", price: 38 },
      { no: 74, name: "Chello Kubide-e-Chicken", price: 36 },
      { no: 75, name: "Arabian Chicken Tikka", price: 34 },
      { no: 76, name: "Lari-e-Murg (Chicken)", price: 34 },
      { no: 77, name: "Grilled Chicken Wings", price: 28 },
    ],
  },
  {
    id: "tandoor",
    name: "Indian Tandoor",
    nameAr: "المشاوي الهندية – تنور",
    blurb: "Charcoal-grilled, straight from the clay oven.",
    items: [
      { no: 78, name: "Mixed Chicken Grilled", price: 42, description: "Sixteen pieces across the board — malai, pudina and tikka." },
      { no: 79, name: "Chicken Tandoori (Full)", price: 34 },
      { no: 80, name: "Chicken Cheese Butter Grilled", price: 28 },
      { no: 81, name: "Shish Tawook", price: 28 },
      { no: 82, name: "Chicken Malai Tikka", price: 28 },
      { no: 83, name: "Our Special Chicken Tikka", price: 28 },
      { no: 84, name: "Chicken Tikka", price: 28 },
      { no: 85, name: "Chicken Pudina Tikka", price: 28 },
      { no: 86, name: "Chicken Tandoori (Half)", price: 24 },
    ],
  },
  {
    id: "breads",
    name: "Fresh Indian Bread",
    nameAr: "انواع الخبز الهندي الطازج",
    blurb: "Baked to order in the tandoor.",
    items: [
      { no: 87, name: "Cheese Naan", price: 10, tags: ["vegetarian"] },
      { no: 88, name: "Aloo Kulcha", price: 8, tags: ["vegetarian"] },
      { no: 89, name: "Garlic Naan", price: 8, tags: ["vegetarian"] },
      { no: 90, name: "Butter Naan", price: 6, tags: ["vegetarian"] },
      { no: 91, name: "Plain Naan", price: 4, tags: ["vegetarian"] },
      { no: 92, name: "Cheese Paratha", price: 8, tags: ["vegetarian"] },
      { no: 93, name: "Butter Paratha", price: 6, tags: ["vegetarian"] },
      { no: 94, name: "Kerala Paratha", price: 4, tags: ["vegetarian"] },
      { no: 95, name: "Chapati", price: 4, tags: ["vegetarian"] },
    ],
  },
  {
    id: "indian-seafood",
    name: "Indian Seafood Curries",
    nameAr: "صالونة المأكولات البحرية الهندية",
    blurb: "Masala gravies built around lobster, crab and the day's fish.",
    items: [
      { no: 96, name: "Butter Lobster Masala", price: 73, tags: ["seafood", "signature"] },
      { no: 97, name: "Lobster Masala", price: 68, tags: ["seafood"] },
      { no: 98, name: "Mixed Seafood Masala", price: 55, tags: ["seafood"] },
      { no: 99, name: "Butter King Prawn Masala", price: 54, tags: ["seafood"] },
      { no: 100, name: "King Prawn Masala", price: 49, tags: ["seafood"] },
      { no: 101, name: "King Prawn Kuzbara", price: 49, tags: ["seafood"] },
      { no: 102, name: "Crab Masala (Whole)", price: 48, tags: ["seafood"] },
      { no: 103, name: "Squid Masala", price: 39, tags: ["seafood"] },
      { no: 104, name: "Fish Masala (Hamour / Kingfish)", price: 34, tags: ["seafood"] },
    ],
  },
  {
    id: "indian-vegetable",
    name: "Indian Vegetable Curry",
    nameAr: "صالونة الخضروات على الطريقة الهندية",
    blurb: "",
    items: [
      { no: 105, name: "Vegetable Makhmali", price: 26, tags: ["vegetarian"] },
      { no: 106, name: "Paneer Makhanwala", price: 26, tags: ["vegetarian"] },
      { no: 107, name: "Aloo Gobi", price: 26, tags: ["vegetarian"] },
      { no: 108, name: "Yellow Dal Fry", price: 26, tags: ["vegetarian"] },
    ],
  },
  {
    id: "indian-curry",
    name: "Chicken & Mutton Curry",
    nameAr: "صالونة دجاج ولحم على الطريقة الهندية",
    blurb: "Slow-cooked gravies from the Indian side of the kitchen.",
    items: [
      { no: 109, name: "Classic Chicken", price: 34 },
      { no: 110, name: "Our Special Mutton", price: 32 },
      { no: 111, name: "Mutton Rogan Josh", price: 32 },
      { no: 112, name: "Mutton Handi", price: 32 },
      { no: 113, name: "Mutton Kadai", price: 32 },
      { no: 114, name: "Mutton Keema", price: 32 },
      { no: 115, name: "Mutton Korma", price: 32 },
      { no: 116, name: "Our Special Chicken", price: 28 },
      { no: 117, name: "Chicken Tikka Masala", price: 28 },
      { no: 118, name: "Kadai Chicken", price: 28 },
      { no: 119, name: "Chicken Hyderabadi", price: 28 },
      { no: 120, name: "Chicken Handi", price: 28 },
      { no: 121, name: "Butter Chicken", price: 28 },
      { no: 122, name: "Chicken Shabnam", price: 28 },
    ],
  },
  {
    id: "biryani",
    name: "Biryani & Majboos",
    nameAr: "محصول الأرز الهندي",
    blurb: "Basmati layered and sealed — the lobster and tiger prawn versions need a little notice.",
    items: [
      { no: 123, name: "Lobster Biryani", price: 85, tags: ["seafood", "signature"] },
      { no: 124, name: "Tiger Prawn Biryani", price: 75, tags: ["seafood", "signature"] },
      { no: 125, name: "Seafood Biryani", price: 55, tags: ["seafood"] },
      { no: 126, name: "King Prawn Biryani", price: 49, tags: ["seafood"] },
      { no: 127, name: "King Prawn Majboos", price: 49, tags: ["seafood"], image: "/images/restaurant/prawn-majboos.jpg" },
      { no: 128, name: "Mutton Biryani (Boneless)", price: 45 },
      { no: 129, name: "Chicken Tikka Biryani", price: 39 },
      { no: 130, name: "Mutton Biryani", price: 38 },
      { no: 131, name: "Fish Majboos (Hamour / Kingfish)", price: 35, tags: ["seafood"] },
      { no: 132, name: "Fish Biryani (Hamour / Kingfish)", price: 35, tags: ["seafood"] },
      { no: 133, name: "Chicken Majboos", price: 28 },
      { no: 134, name: "Chicken Biryani (Boneless)", price: 28 },
      { no: 135, name: "Vegetable Biryani", price: 28, tags: ["vegetarian"] },
      { no: 136, name: "Biryani Rice", price: 15, tags: ["vegetarian"] },
      { no: 137, name: "White Rice", price: 12, tags: ["vegetarian"] },
    ],
  },
  {
    id: "continental",
    name: "Continental",
    nameAr: "اطباق الكونتنتال",
    blurb: "Sizzlers, bechamels and thermidor — the European end of the menu.",
    items: [
      { no: 138, name: "Baked Mussels", price: 59, tags: ["seafood"] },
      { no: 139, name: "Seafood Sizzler (White Sauce)", price: 59, tags: ["seafood"] },
      { no: 140, name: "King Prawn Sizzler (White Sauce)", price: 59, tags: ["seafood"] },
      { no: 141, name: "Seafood Macaroni Bechamel", price: 59, tags: ["seafood"] },
      { no: 142, name: "Seafood Lasagna", price: 59, tags: ["seafood"] },
      { no: 143, name: "Mussels Continental Grilled", price: 55, tags: ["seafood"] },
      { no: 144, name: "Lobster Dynamite", price: null, priceNote: "As per size", tags: ["seafood", "signature"] },
      { no: 145, name: "Lobster Continental Thermidor", price: null, priceNote: "As per size", tags: ["seafood", "signature"] },
      { no: 146, name: "Baked Baby Crab", price: 52, tags: ["seafood"] },
      { no: 147, name: "Fillet Steak with Mushroom Sauce", price: 48 },
      { no: 148, name: "Hamour Fish Sizzler (White Sauce)", price: 39, tags: ["seafood"] },
      { no: 149, name: "Chicken Steak Sizzler (Brown Sauce)", price: 39 },
      { no: 150, name: "Chicken Macaroni Bechamel", price: 38 },
    ],
  },
  {
    id: "chinese",
    name: "China Land",
    nameAr: "أرض الصين",
    blurb: "Wok-fried and dry-tossed, on the spicier side.",
    items: [
      { no: 151, name: "King Prawns in Szechuan Sauce", price: 56, tags: ["seafood", "spicy"] },
      { no: 152, name: "Fish Chilli Fried (Dry)", price: 32, tags: ["seafood", "spicy"] },
      { no: 153, name: "Shredded Chicken Chilli Dry Spicy", price: 29, tags: ["spicy"] },
      { no: 154, name: "Chicken Manchurian", price: 29 },
      { no: 155, name: "Chicken Szechuan", price: 29, tags: ["spicy"] },
      { no: 156, name: "Chicken Chilli (Dry)", price: 29, tags: ["spicy"] },
      { no: 157, name: "Mushroom Pepper Chilli (Dry)", price: 29, tags: ["vegetarian", "spicy"] },
      { no: 158, name: "Chicken 65 (Dry)", price: 28, tags: ["spicy"] },
    ],
  },
  {
    id: "noodles-rice",
    name: "Noodles & Rice",
    nameAr: "الأرز والمعكرونة",
    blurb: "",
    items: [
      { no: 159, name: "Special Seafood Noodles", price: 54, tags: ["seafood"] },
      { no: 160, name: "Seafood Rice", price: 49, tags: ["seafood"] },
      { no: 161, name: "Seafood Noodles", price: 49, tags: ["seafood"] },
      { no: 162, name: "Prawn Fried Rice", price: 38, tags: ["seafood"] },
      { no: 163, name: "Mixed Fried Rice", price: 34 },
      { no: 164, name: "Mixed Hakka Noodles", price: 34 },
      { no: 165, name: "Chicken Garlic Pepper Rice", price: 29 },
      { no: 166, name: "Chicken Fried Rice", price: 29 },
      { no: 167, name: "Chicken Hakka Noodles", price: 29 },
      { no: 168, name: "Vegetable Fried Rice", price: 29, tags: ["vegetarian"] },
    ],
  },
  {
    id: "thai",
    name: "Thai Choice",
    nameAr: "أطباق التايلندية",
    blurb: "Lemongrass, basil and green curry, cooked in the Thai style.",
    items: [
      { no: 169, name: "Prawns Taipei (Dry)", price: 55, tags: ["seafood"] },
      { no: 170, name: "Lemongrass King Prawn Fried Rice", price: 52, tags: ["seafood"] },
      { no: 171, name: "Seafood Yellow Curry", price: 49, tags: ["seafood"] },
      { no: 172, name: "Thai Seafood Fried Rice", price: 49, tags: ["seafood"] },
      { no: 173, name: "Chilli Basil Prawns (Dry)", price: 44, tags: ["seafood", "spicy"] },
      { no: 174, name: "Prawn Green Curry", price: 42, tags: ["seafood"] },
      { no: 175, name: "Chicken Taipei (Dry)", price: 32 },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    nameAr: "الحلويات",
    blurb: "",
    items: [
      { no: 176, name: "Saffron Phirni", price: 24, tags: ["vegetarian"] },
      { no: 177, name: "Gulab Jamun", price: 18, tags: ["vegetarian"] },
      { no: 178, name: "Ras Malai", price: 18, tags: ["vegetarian"] },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    nameAr: "مشروبات باردة",
    blurb: "Juices are pressed to order.",
    items: [
      { no: 179, name: "Fresh Juice — Watermelon, Orange, Pineapple, Pomegranate, Carrot, Apple, Grape, Avocado, Mango, Strawberry or Banana", price: 18, tags: ["vegetarian"] },
      { no: 180, name: "Fresh Cocktail Juice", price: 18, tags: ["vegetarian"] },
      { no: 181, name: "Fresh Lemon Mint Juice", price: 18, tags: ["vegetarian"] },
      { no: 182, name: "Sweet / Salt Lassi", price: 15, tags: ["vegetarian"] },
      { no: 183, name: "Still Water — Large", price: 10, tags: ["vegetarian"] },
      { no: 184, name: "Still Water — Small", price: 5, tags: ["vegetarian"] },
      { no: 185, name: "Soft Drinks", price: 5, tags: ["vegetarian"] },
    ],
  },
];

/** Dishes shown on the home page. Every one is a real, photographed dish. */
export const signatureDishNumbers = [35, 127, 67, 16, 9, 28];

export const allItems: Array<MenuItem & { section: MenuSection }> = menu.flatMap(
  (section) => section.items.map((item) => ({ ...item, section }))
);

export function itemByNumber(no: number) {
  return allItems.find((item) => item.no === no);
}

export const signatureDishes = signatureDishNumbers
  .map(itemByNumber)
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

export const menuItemCount = allItems.length;
