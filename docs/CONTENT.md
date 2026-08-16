# Updating the site content

Everything the restaurant is likely to change lives in `src/lib/data/`. You do not
need to touch a component to change any of the following.

## Contact details, hours, links — `src/lib/data/site.ts`

| What | Field |
| --- | --- |
| Phone number | `phone.display` (shown) and `phone.tel` (dialled — digits and `+` only) |
| Email | `email` |
| Address | `address.*` |
| Opening hours | `hours.opens` / `hours.closes` (24h, feeds Google's structured data) and `hours.displayTime` (shown to people) |
| Google Maps links | `maps.share`, `maps.directions`, `maps.embed` |
| Instagram / Facebook | `social.*` |
| Live domain | `url` — **set this before deploying**, it drives canonical URLs and social previews |

### Prices

`showPrices: true` shows prices site-wide; set it to `false` and every price
disappears without breaking any layout — the dish name simply runs to the edge.

`priceNote` is the disclaimer printed under the menu and the signature dishes.

### Switching reservations to WhatsApp

Set `whatsapp` to the business number in international format with no symbols,
e.g. `"971502223344"`. The reservation form then hands off to WhatsApp instead of
email, and its copy updates itself. Leave it `null` to keep email.

## The menu — `src/lib/data/menu.ts`

Each dish is one object:

```ts
{ no: 35, name: "Seafood Platter Deluxe", price: 360, tags: ["seafood", "signature"] }
```

- `no` — the number printed on the physical menu. It is shown throughout the site
  and is searchable, so keep it in sync with the printed menu.
- `price` — a number in AED, or `null` for anything priced by size. When `null`,
  set `priceNote: "As per size"` so the site says that instead of guessing.
- `tags` — `seafood`, `vegetarian`, `signature`, `spicy`. These drive the filters.
- `image` — optional path under `/public`. Only set it where a real photograph of
  that dish exists.
- `description` — optional. Leave it out rather than padding it.

`signatureDishNumbers` at the bottom of the file controls the six dishes on the
home page. List menu numbers; the rest is looked up automatically.

## Photographs — `src/lib/data/gallery.ts`

1. Put the file in `public/images/restaurant/`.
2. Add an entry with its real pixel `width` and `height` (this prevents layout
   shift), an `alt` describing what is in the photo, a `caption`, and one or more
   `categories`.
3. Add `menuNo` if the photo is of a dish on the menu — the gallery then shows the
   menu number with it.

The first entry in the array is used as the home-page hero. Every current image is
a genuine photograph of the restaurant or its food; please keep it that way rather
than adding stock photography.

## Navigation and cuisines — `src/lib/data/navigation.ts`

`primaryNav` is the header and `footerNav` the footer. `cuisines` drives the "More
than seafood" band on the home page; each entry points at a menu section id, and
the number range shown is calculated from the menu, never hard-coded.
