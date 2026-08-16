# Emirates Sea Restaurant — Dubai

Marketing site for Emirates Sea Restaurant (مطعم بحر الإمارات), a seafood house on
51A Street in Al Rashidiya, Dubai.

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · lucide-react.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home |
| `/menu` | Full à la carte menu, filterable by section, diet and menu number |
| `/about` | Brand story, seafood philosophy, culinary breadth |
| `/gallery` | Filterable masonry gallery with a keyboard-accessible lightbox |
| `/private-dining` | Family and group dining |
| `/contact` | Phone, address, hours, map |
| `/reservation` | Reservation request form |

## Editing content

All restaurant content is data, not markup. See **[docs/CONTENT.md](docs/CONTENT.md)**.

```
src/lib/data/site.ts        contact details, hours, maps links, price toggle
src/lib/data/menu.ts        185 dishes across 18 sections
src/lib/data/gallery.ts     photographs
src/lib/data/navigation.ts  header/footer links, cuisine band
```

## Design notes

- **White-first.** White is the page, ivory and sand only band it. Navy and
  charcoal carry the type, ocean blue is the single accent, gold is a hairline.
- **The menu number is the structural device.** `No. 35`, `No. 61`, `No. 67` are
  the numbers actually printed on the menu in the dining room, so a guest can
  order by them. They appear on dish cards, gallery captions and section ranges,
  and the menu page is searchable by number.
- **Bilingual.** Section names carry the Arabic from the printed menu.
- **Gold splits in two.** `--color-gold` (#B89B5E) is for rules, icons and text on
  navy. `--color-gold-ink` (#7E6529) is for gold text on light grounds — the leaf
  tone only reaches 2.7:1 and fails WCAG AA. `--color-muted` is two steps darker
  than the original brief so body copy clears 4.5:1 on the sand band too.

## Before going live

1. Set `site.url` in `src/lib/data/site.ts` to the real domain. Canonical URLs,
   `sitemap.xml`, `robots.txt` and social previews all derive from it.
2. Confirm the opening hours with the restaurant — online listings disagree on the
   opening time and the site currently shows 12:30 PM – 12:30 AM daily.
3. Confirm the menu prices. They were transcribed from the restaurant's own
   printed menu, which may predate current pricing. Set `site.showPrices` to
   `false` to hide every price until they are verified.
4. Replace the wordmark in `src/components/layout/Logo.tsx` with the official
   logo artwork if the restaurant has a vector file.
5. Add higher-resolution photography — see docs/CONTENT.md. Several current images
   are the best available resolution from public listings.

## Accessibility & performance

- Keyboard: skip link, visible focus rings, focus trapping and restoration in the
  mobile nav and gallery lightbox, `Esc` / arrow keys in the lightbox.
- `prefers-reduced-motion` disables all scroll reveals and transitions.
- Scroll reveals run from a single shared `IntersectionObserver`, and the page is
  fully readable with JavaScript disabled.
- Images are local, served as AVIF/WebP through `next/image` with intrinsic
  dimensions set so there is no layout shift.
