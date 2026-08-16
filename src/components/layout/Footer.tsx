import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { footerNav } from "@/lib/data/navigation";
import { addressLines, site } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-ivory">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr] lg:gap-10 lg:py-20">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-[0.9375rem] leading-[1.75] text-muted">
            A seafood house in Al Rashidiya — charcoal grills, whole lobster and
            platters built for a full table, alongside Arabic, Indian, Chinese,
            Continental, Persian and Thai cooking.
          </p>
          <div className="mt-6 flex gap-3">
            <SocialLink href={site.social.instagram} label="Instagram">
              <InstagramMark />
            </SocialLink>
            <SocialLink href={site.social.facebook} label="Facebook">
              <FacebookMark />
            </SocialLink>
          </div>
        </div>

        <nav aria-labelledby="footer-explore">
          <h2 id="footer-explore" className="eyebrow text-muted">
            Explore
          </h2>
          <ul className="mt-6 space-y-3">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline text-[0.9375rem] text-charcoal transition-colors hover:text-ocean"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-muted">Contact</h2>
          <ul className="mt-6 space-y-4 text-[0.9375rem] text-charcoal">
            <li>
              <a
                href={`tel:${site.phone.tel}`}
                className="link-underline inline-flex items-center gap-2.5 transition-colors hover:text-ocean"
              >
                <Phone className="size-3.5 text-gold" aria-hidden="true" />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="link-underline transition-colors hover:text-ocean"
              >
                {site.email}
              </a>
            </li>
            <li className="text-muted">
              {site.hours.displayDays}
              <br />
              {site.hours.displayTime}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-muted">Visit</h2>
          <address className="mt-6 text-[0.9375rem] leading-[1.8] text-muted not-italic">
            {addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={site.maps.share}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-2 text-[0.8125rem] font-semibold tracking-[0.08em] text-ocean uppercase"
          >
            <MapPin className="size-3.5" aria-hidden="true" />
            Open in Google Maps
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="shell flex flex-col gap-3 py-6 pb-24 text-[0.8125rem] text-muted sm:flex-row sm:items-center sm:justify-between lg:pb-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="arabic text-[0.9375rem]" dir="rtl">
            {site.nameArabic}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* Brand marks are drawn inline — lucide dropped brand icons in v1. */
function InstagramMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none">
      <path
        d="M14.5 8.5V6.9c0-.8.3-1.2 1.2-1.2h1.6V3h-2.6c-2.4 0-3.6 1.3-3.6 3.6v1.9H9v2.8h2.1V21h3.4v-9.7h2.4l.4-2.8z"
        fill="currentColor"
      />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex size-10 items-center justify-center rounded-[3px] border border-rule text-charcoal transition-colors duration-300 hover:border-ocean hover:text-ocean"
    >
      <span className="sr-only">{label}</span>
      {children}
    </a>
  );
}
