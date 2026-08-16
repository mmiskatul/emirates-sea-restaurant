import Link from "next/link";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

/**
 * Wordmark drawn in type rather than an image: the restaurant's English name in
 * the display serif, with a hairline dhow-sail mark that echoes the gold crest
 * on the building. Replace the mark with the official logo file when supplied.
 */
export function Logo({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label={`${site.name}, ${site.cityLabel} — home`}
      className={cn("group flex items-center gap-3", className)}
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-8 w-8 shrink-0 text-gold transition-transform duration-500 group-hover:-translate-y-px"
      >
        <path
          d="M16 3.5 16 20"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M16 5.5c4.4 2.4 6.6 5.9 6.6 10.4H16z"
          fill="currentColor"
          opacity="0.85"
        />
        <path
          d="M16 8.5c-3.3 1.9-5 4.5-5 7.4h5z"
          fill="currentColor"
          opacity="0.45"
        />
        <path
          d="M5.5 20.5h21l-3.1 4.4a4 4 0 0 1-3.3 1.7h-8.2a4 4 0 0 1-3.3-1.7z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.3rem] tracking-[0.01em] text-navy sm:text-[1.45rem]">
          Emirates Sea
        </span>
        <span className="mt-1 font-sans text-[0.625rem] font-semibold tracking-[0.3em] text-muted uppercase">
          Restaurant · Dubai
        </span>
      </span>
    </Link>
  );
}
