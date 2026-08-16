"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { Price } from "@/components/menu/Price";
import { menu } from "@/lib/data/menu";
import { site } from "@/lib/data/site";
import { cn, formatMenuNumber } from "@/lib/utils";

const dietFilters = [
  { id: "all", label: "Everything" },
  { id: "seafood", label: "Seafood" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "signature", label: "Signature" },
] as const;

type Diet = (typeof dietFilters)[number]["id"];

export function MenuBrowser() {
  const [activeSection, setActiveSection] = useState<string>("all");
  const [diet, setDiet] = useState<Diet>("all");
  const [query, setQuery] = useState("");
  const tabsRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(() => {
    const term = query.trim().toLowerCase();
    const asNumber = Number(term);

    return menu
      .filter((section) => activeSection === "all" || section.id === activeSection)
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => {
          if (diet !== "all" && !item.tags?.includes(diet)) return false;
          if (!term) return true;
          if (!Number.isNaN(asNumber) && term !== "" && item.no === asNumber)
            return true;
          return (
            item.name.toLowerCase().includes(term) ||
            section.name.toLowerCase().includes(term)
          );
        }),
      }))
      .filter((section) => section.items.length > 0);
  }, [activeSection, diet, query]);

  const total = sections.reduce((sum, section) => sum + section.items.length, 0);

  // Newly rendered sections need to be picked up by the shared reveal observer.
  useEffect(() => {
    document.dispatchEvent(new CustomEvent("esr:rescan"));
  }, [sections]);

  return (
    <>
      {/* Sticky filter rail: horizontal tabs on desktop, scrollable on mobile */}
      <div className="sticky top-16 z-30 border-b border-rule bg-paper/97 backdrop-blur-[6px] lg:top-[4.5rem]">
        <div className="shell">
          <div
            ref={tabsRef}
            role="tablist"
            aria-label="Menu sections"
            className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto py-3"
          >
            <FilterTab
              active={activeSection === "all"}
              onClick={() => setActiveSection("all")}
            >
              All
            </FilterTab>
            {menu.map((section) => (
              <FilterTab
                key={section.id}
                active={activeSection === section.id}
                onClick={() => setActiveSection(section.id)}
              >
                {section.name}
              </FilterTab>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule py-3">
            <div className="flex flex-wrap items-center gap-1">
              {dietFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setDiet(filter.id)}
                  aria-pressed={diet === filter.id}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[0.6875rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-300",
                    diet === filter.id
                      ? "bg-navy text-white"
                      : "text-muted hover:text-navy"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <label htmlFor="menu-search" className="sr-only">
                Search dishes by name or menu number
              </label>
              <input
                id="menu-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search a dish or number…"
                className="h-10 w-full rounded-[3px] border border-rule bg-paper pr-9 pl-9 text-sm text-charcoal placeholder:text-muted focus:border-ocean focus:outline-none"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute top-1/2 right-2 flex size-6 -translate-y-1/2 items-center justify-center text-muted hover:text-navy"
                >
                  <span className="sr-only">Clear search</span>
                  <X className="size-4" aria-hidden="true" />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="shell py-14 lg:py-20">
        <p aria-live="polite" className="sr-only">
          {total} dishes shown
        </p>

        {sections.length === 0 ? (
          <div className="border border-rule py-20 text-center">
            <p className="font-display text-2xl text-navy">
              No dishes match that search
            </p>
            <p className="mt-3 text-[0.9375rem] text-muted">
              Try a dish name, or the number printed on the menu.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setDiet("all");
                setActiveSection("all");
              }}
              className="mt-6 text-[0.6875rem] font-semibold tracking-[0.16em] text-ocean uppercase underline underline-offset-4"
            >
              Reset the menu
            </button>
          </div>
        ) : (
          <div className="space-y-20 lg:space-y-24">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="scroll-mt-56"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule-strong pb-4">
                  <h2
                    id={`${section.id}-heading`}
                    className="font-display text-[clamp(1.75rem,3.4vw,2.5rem)] leading-tight"
                  >
                    {section.name}
                  </h2>
                  <p className="arabic text-lg text-muted" dir="rtl">
                    {section.nameAr}
                  </p>
                </div>

                {section.blurb ? (
                  <p className="mt-4 max-w-2xl text-[0.9375rem] leading-[1.75] text-muted">
                    {section.blurb}
                  </p>
                ) : null}

                <ul className="mt-8 grid gap-x-14 gap-y-1 lg:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item.no}>
                      <div className="flex items-start gap-4 border-b border-rule py-4 transition-colors duration-300 hover:bg-ivory">
                        <span className="numeral w-8 shrink-0 pt-1.5 text-[0.8125rem]">
                          {formatMenuNumber(item.no)}
                        </span>

                        {item.image ? (
                          <span className="relative hidden size-14 shrink-0 overflow-hidden bg-sand xs:block">
                            <Image
                              src={item.image}
                              alt=""
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          </span>
                        ) : null}

                        <span className="min-w-0 flex-1">
                          <span className="flex items-baseline gap-3">
                            <span className="font-display text-[1.1875rem] leading-snug text-navy">
                              {item.name}
                            </span>
                            <span
                              className="mb-1 h-px flex-1 bg-rule"
                              aria-hidden="true"
                            />
                            <Price item={item} className="shrink-0" />
                          </span>

                          {item.description ? (
                            <span className="mt-1.5 block text-[0.875rem] leading-[1.65] text-muted">
                              {item.description}
                            </span>
                          ) : null}

                          {item.tags?.length ? (
                            <span className="mt-2 flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={cn(
                                    "text-[0.625rem] font-semibold tracking-[0.14em] uppercase",
                                    tag === "signature"
                                      ? "text-gold-ink"
                                      : "text-muted"
                                  )}
                                >
                                  {tag}
                                </span>
                              ))}
                            </span>
                          ) : null}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}

        {site.showPrices ? (
          <p className="mt-16 border-t border-rule pt-5 text-[0.8125rem] leading-relaxed text-muted">
            {site.priceNote}
          </p>
        ) : null}
      </div>
    </>
  );
}

function FilterTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "shrink-0 border-b-2 px-3 py-2 text-[0.8125rem] font-medium whitespace-nowrap transition-colors duration-300",
        active
          ? "border-ocean text-ocean"
          : "border-transparent text-muted hover:text-navy"
      )}
    >
      {children}
    </button>
  );
}
