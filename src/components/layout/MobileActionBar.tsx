import { CalendarCheck, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/data/site";

const actions = [
  {
    href: `tel:${site.phone.tel}`,
    label: "Call",
    icon: Phone,
    external: true,
  },
  {
    href: site.maps.share,
    label: "Directions",
    icon: MapPin,
    external: true,
  },
  {
    href: "/reservation",
    label: "Reserve",
    icon: CalendarCheck,
    external: false,
  },
];

/** Bottom bar on phones only. The page adds matching padding so nothing hides. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper/97 backdrop-blur-[6px] pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-20px_rgba(16,42,67,0.6)] lg:hidden">
      <nav aria-label="Quick actions" className="grid grid-cols-3">
        {actions.map(({ href, label, icon: Icon, external }, index) => {
          const content = (
            <>
              <Icon
                className={index === 2 ? "size-[1.15rem]" : "size-[1.15rem] text-gold"}
                aria-hidden="true"
              />
              <span className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase">
                {label}
              </span>
            </>
          );

          const className =
            index === 2
              ? "flex min-h-14 flex-col items-center justify-center gap-1 bg-ocean text-white"
              : "flex min-h-14 flex-col items-center justify-center gap-1 text-navy";

          return external ? (
            <a
              key={label}
              href={href}
              className={className}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {content}
            </a>
          ) : (
            <Link key={label} href={href} className={className}>
              {content}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
