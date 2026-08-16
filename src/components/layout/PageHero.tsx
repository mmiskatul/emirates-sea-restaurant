import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  arabic,
  intro,
  crumb,
  children,
}: {
  eyebrow: string;
  title: string;
  arabic?: string;
  intro?: ReactNode;
  crumb: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-rule bg-ivory">
      <div className="shell pt-8 pb-16 lg:pt-12 lg:pb-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-[0.75rem] tracking-[0.1em] text-muted uppercase">
            <li>
              <Link href="/" className="link-underline hover:text-ocean">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-muted">
              /
            </li>
            <li aria-current="page" className="text-charcoal">
              {crumb}
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="mt-5 text-[clamp(2.4rem,6vw,4rem)] leading-[1.05]">
              {title}
            </h1>
            {arabic ? (
              <p className="arabic mt-4 text-xl text-muted" dir="rtl">
                {arabic}
              </p>
            ) : null}
          </div>

          {intro ? (
            <div className="lg:col-span-5 lg:pt-3">
              <p className="text-[1.0625rem] leading-[1.85] text-muted">{intro}</p>
              {children}
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </section>
  );
}
