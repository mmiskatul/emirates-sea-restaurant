import { MenuBrowser } from "@/components/menu/MenuBrowser";
import { PageHero } from "@/components/layout/PageHero";
import { ReservationCta } from "@/components/home/ReservationCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { menu, menuItemCount } from "@/lib/data/menu";
import { breadcrumbSchema, menuSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Menu",
  description:
    "The full Emirates Sea Restaurant menu — seafood platters, charcoal grills, lobster, biryani and Arabic, Indian, Chinese, Continental, Persian and Thai dishes in Al Rashidiya, Dubai.",
  path: "/menu",
  image: "/images/restaurant/seafood-platter-deluxe.jpg",
});

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="À la carte"
        title="The menu"
        arabic="قائمة الطعام"
        crumb="Menu"
        intro={`${menuItemCount} dishes across ${menu.length} sections. Every dish carries the number printed on the menu in the dining room, so you can order by it — search by name or by number below.`}
      />

      <MenuBrowser />
      <ReservationCta />

      <JsonLd data={menuSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Menu", path: "/menu" }])} />
    </>
  );
}
