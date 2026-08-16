"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  gallery,
  galleryFilters,
  galleryByCategory,
  type GalleryCategory,
} from "@/lib/data/gallery";
import { cn, formatMenuNumber } from "@/lib/utils";

type Filter = "all" | GalleryCategory;

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const images = galleryByCategory(filter);
  const active = openIndex === null ? null : images[openIndex];

  const count = images.length;

  const close = useCallback(() => {
    setOpenIndex(null);
    lastTrigger.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) =>
        current === null ? current : (current + delta + count) % count
      );
    },
    [count]
  );

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "Tab") {
        // Only three controls in the dialog — keep focus cycling among them.
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.querySelector("button")?.focus();

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, step]);

  return (
    <>
      <div className="shell py-12 lg:py-16">
        <div
          role="group"
          aria-label="Filter photographs"
          className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto border-b border-rule pb-3"
        >
          {galleryFilters.map((entry) => {
            const count = galleryByCategory(entry.id).length;
            if (count === 0) return null;
            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => {
                  setFilter(entry.id);
                  setOpenIndex(null);
                }}
                aria-pressed={filter === entry.id}
                className={cn(
                  "shrink-0 border-b-2 px-3 py-2 text-[0.8125rem] font-medium whitespace-nowrap transition-colors duration-300",
                  filter === entry.id
                    ? "border-ocean text-ocean"
                    : "border-transparent text-muted hover:text-navy"
                )}
              >
                {entry.label}
                <span className="ml-2 text-[0.6875rem] text-muted tabular-nums">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="sr-only">
          Showing {images.length} of {gallery.length} photographs
        </p>

        {/* Masonry via CSS columns: photographs keep their own proportions. */}
        <div className="mt-10 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={(event) => {
                lastTrigger.current = event.currentTarget;
                setOpenIndex(index);
              }}
              className="group relative block w-full break-inside-avoid overflow-hidden bg-sand text-left"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-baseline gap-3 bg-gradient-to-t from-navy/85 to-transparent p-4 pt-12 text-[0.8125rem] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                {image.menuNo ? (
                  <span className="numeral text-xs">
                    {formatMenuNumber(image.menuNo)}
                  </span>
                ) : null}
                {image.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          ref={dialogRef}
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
          className="fixed inset-0 z-[70] flex flex-col bg-navy/95 p-4 backdrop-blur-sm sm:p-8"
        >
          <div className="flex items-center justify-between text-white">
            <p className="text-[0.75rem] tracking-[0.14em] uppercase tabular-nums">
              {openIndex! + 1} / {images.length}
            </p>
            <button
              type="button"
              onClick={close}
              className="flex size-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            >
              <span className="sr-only">Close</span>
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center py-4">
            <Image
              key={active.src}
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="90vw"
              className="max-h-full w-auto max-w-full object-contain"
            />
          </div>

          <div className="flex items-center justify-between gap-4 text-white">
            <button
              type="button"
              onClick={() => step(-1)}
              className="flex size-11 items-center justify-center rounded-full transition-colors hover:bg-white/10"
            >
              <span className="sr-only">Previous photograph</span>
              <ChevronLeft className="size-6" aria-hidden="true" />
            </button>

            <p className="text-center font-display text-lg">
              {active.caption}
              {active.menuNo ? (
                <span className="ml-3 text-[0.75rem] tracking-[0.14em] text-gold uppercase">
                  No. {formatMenuNumber(active.menuNo)}
                </span>
              ) : null}
            </p>

            <button
              type="button"
              onClick={() => step(1)}
              className="flex size-11 items-center justify-center rounded-full transition-colors hover:bg-white/10"
            >
              <span className="sr-only">Next photograph</span>
              <ChevronRight className="size-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
