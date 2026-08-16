import type { MetadataRoute } from "next";
import { footerNav } from "@/lib/data/navigation";
import { site } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return footerNav.map((link) => ({
    url: `${site.url}${link.href === "/" ? "" : link.href}`,
    lastModified: now,
    changeFrequency: link.href === "/menu" ? "monthly" : "yearly",
    priority: link.href === "/" ? 1 : link.href === "/menu" ? 0.9 : 0.7,
  }));
}
