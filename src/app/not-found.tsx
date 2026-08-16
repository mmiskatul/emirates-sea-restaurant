import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/data/site";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="shell flex min-h-[60vh] flex-col justify-center py-24">
        <p className="numeral text-sm tracking-[0.16em]">404</p>
        <h1 className="mt-5 max-w-2xl text-[clamp(2.25rem,5.5vw,3.5rem)] leading-[1.05]">
          That page is not on the menu
        </h1>
        <p className="mt-5 max-w-lg text-[1.0625rem] leading-[1.8] text-muted">
          The link may be out of date. The full menu, the gallery and the
          reservation form are all a click away.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/menu" size="lg">
            View the menu
          </ButtonLink>
          <ButtonLink href="/" variant="outline" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href={`tel:${site.phone.tel}`} variant="ghost" size="lg">
            Call {site.phone.display}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
