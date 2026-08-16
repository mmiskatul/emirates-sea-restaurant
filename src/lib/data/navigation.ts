export type NavLink = { href: string; label: string };

export const primaryNav: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/private-dining", label: "Private Dining" },
  { href: "/contact", label: "Contact" },
];

export const footerNav: NavLink[] = [
  ...primaryNav,
  { href: "/reservation", label: "Reservation" },
];

/**
 * Cuisines the kitchen actually cooks. Each points at a real section of the
 * printed menu, so the number range shown on the home page is never invented.
 */
export const cuisines: Array<{
  label: string;
  sectionId: string;
  note: string;
}> = [
  { label: "Seafood", sectionId: "platters-grills", note: "Platters, whole fish, lobster and crab" },
  { label: "Arabic", sectionId: "salads", note: "Mezze, tabbouleh, fattoush and mutabbal" },
  { label: "Indian", sectionId: "indian-curry", note: "Tandoor, curries and layered biryani" },
  { label: "Chinese", sectionId: "chinese", note: "Szechuan, Manchurian and wok-fried" },
  { label: "Continental", sectionId: "continental", note: "Sizzlers, bechamel and thermidor" },
  { label: "Persian", sectionId: "persian", note: "Kubideh, joojeh and chello kabab" },
  { label: "Thai", sectionId: "thai", note: "Lemongrass, green curry and basil" },
];
