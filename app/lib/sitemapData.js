import { siteConfig } from "./siteConfig";
import { activityCategoryGuides, activityHubs, brandActivityGuides, brandCategoryGuides, brandHubs, categories, comparisonGuides, dealGuides, editorialHubs, fitGuides, intentGuides, sampleProducts, segmentCategoryGuides, shoppingGuides } from "./activewearData";

const corePages = [
  "/",
  "/women",
  "/men",
  "/activities",
  "/brands",
  "/styles",
  "/sizes-fit",
  "/deals",
  "/shop",
  "/compare",
  "/reviews",
  "/activewear-university",
  "/about/advertiser-disclosure",
  "/about/editorial-policy",
  "/about/how-we-rank-products",
  "/about/price-and-availability",
  "/about/image-attribution-policy"
];

export const sitemapSections = [
  { slug: "core-pages", paths: corePages },
  { slug: "category-pages", paths: categories.map((item) => item.href) },
  { slug: "brand-pages", paths: brandHubs.map((item) => item.href) },
  { slug: "brand-category-pages", paths: brandCategoryGuides.map((item) => item.href) },
  { slug: "brand-activity-pages", paths: brandActivityGuides.map((item) => item.href) },
  { slug: "activity-pages", paths: activityHubs.map((item) => item.href) },
  { slug: "activity-category-pages", paths: activityCategoryGuides.map((item) => item.href) },
  { slug: "intersection-pages", paths: editorialHubs.map((item) => item.href) },
  { slug: "buying-guide-pages", paths: shoppingGuides.map((item) => `/best/${item.slug}`) },
  { slug: "deal-pages", paths: dealGuides.map((item) => item.href) },
  { slug: "fit-guide-pages", paths: fitGuides.map((item) => item.href) },
  { slug: "intent-pages", paths: intentGuides.map((item) => item.href) },
  { slug: "segment-category-pages", paths: segmentCategoryGuides.map((item) => item.href) },
  { slug: "comparison-pages", paths: comparisonGuides.map((item) => `/compare/${item.slug}`) },
  { slug: "product-pages", paths: sampleProducts.map((item) => item.href) }
];

export function makeSitemapEntry(path) {
  return {
    url: `${siteConfig.siteUrl}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.75
  };
}

export function getAllSitemapEntries() {
  const seen = new Set();
  return sitemapSections
    .flatMap((section) => section.paths)
    .filter((path) => {
      if (seen.has(path)) {
        return false;
      }
      seen.add(path);
      return true;
    })
    .map(makeSitemapEntry);
}

export function getSitemapEntriesForSection(sectionSlug) {
  const section = sitemapSections.find((item) => item.slug === sectionSlug);
  return section ? section.paths.map(makeSitemapEntry) : [];
}

export function getSitemapUrls() {
  return sitemapSections.map((section) => `${siteConfig.siteUrl}/sitemaps/${section.slug}/sitemap.xml`);
}
