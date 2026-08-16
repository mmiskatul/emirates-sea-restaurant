"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { primaryNav } from "@/lib/data/navigation";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-paper/95 backdrop-blur-[6px] transition-[box-shadow,border-color,padding] duration-400",
        scrolled
          ? "border-b border-rule shadow-[0_10px_30px_-24px_rgba(16,42,67,0.55)]"
          : "border-b border-transparent"
      )}
    >
      <div
        className={cn(
          "shell flex items-center justify-between transition-[height] duration-400",
          scrolled ? "h-16 lg:h-[4.5rem]" : "h-[4.5rem] lg:h-24"
        )}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "link-underline font-sans text-[0.8125rem] font-medium tracking-[0.04em] transition-colors duration-300",
                    isActive(link.href)
                      ? "text-ocean"
                      : "text-charcoal hover:text-ocean"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phone.tel}`}
            className="link-underline flex items-center gap-2 font-sans text-[0.8125rem] font-medium text-charcoal transition-colors hover:text-ocean"
          >
            <Phone className="size-3.5 text-gold" aria-hidden="true" />
            {site.phone.display}
          </a>
          <ButtonLink href="/reservation">Reserve a Table</ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 flex size-11 items-center justify-center text-navy lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!open}
        className="border-t border-rule bg-paper lg:hidden"
      >
        <nav aria-label="Mobile" className="shell py-6">
          <ul className="divide-y divide-rule">
            {primaryNav.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "flex items-baseline gap-4 py-4 font-display text-2xl transition-colors",
                    isActive(link.href) ? "text-ocean" : "text-navy"
                  )}
                >
                  <span className="numeral text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <ButtonLink href="/reservation" size="lg" onClick={() => setOpen(false)}>
              Reserve a Table
            </ButtonLink>
            <ButtonLink href={`tel:${site.phone.tel}`} variant="outline" size="lg">
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phone.display}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
