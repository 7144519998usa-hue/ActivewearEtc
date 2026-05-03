import { siteConfig } from "./siteConfig";
import { activityCategoryGuides, activityHubs, bodyFitGuides, brandActivityCategoryGuides, brandActivityGuides, brandCategoryGuides, brandDealGuides, brandHubs, careGuides, categories, categoryComparisonGuides, colorGuides, comparisonGuides, dealGuides, editorialHubs, fabricGuides, featureGuides, fitGuides, intentGuides, occasionGuides, priceBandGuides, retailerBrandCategoryGuides, retailerCategoryGuides, retailerHubs, sampleProducts, seasonalGuides, segmentCategoryGuides, shoppingGuides, useCaseGuides } from "./activewearData";

const corePages = [
  "/",
  "/women",
  "/men",
  "/activities",
  "/brands",
  "/retailers",
  "/styles",
  "/sizes-fit",
  "/deals",
  "/shop",
  "/compare",
  "/reviews",
  "/use-cases",
  "/occasions",
  "/seasonal",
  "/features",
  "/colors",
  "/care",
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
  { slug: "retailer-pages", paths: retailerHubs.map((item) => item.href) },
  { slug: "retailer-category-pages", paths: retailerCategoryGuides.map((item) => item.href) },
  { slug: "retailer-brand-category-pages", paths: retailerBrandCategoryGuides.map((item) => item.href) },
  { slug: "brand-category-pages", paths: brandCategoryGuides.map((item) => item.href) },
  { slug: "brand-activity-pages", paths: brandActivityGuides.map((item) => item.href) },
  { slug: "brand-activity-category-pages", paths: brandActivityCategoryGuides.map((item) => item.href) },
  { slug: "activity-pages", paths: activityHubs.map((item) => item.href) },
  { slug: "activity-category-pages", paths: activityCategoryGuides.map((item) => item.href) },
  { slug: "intersection-pages", paths: editorialHubs.map((item) => item.href) },
  { slug: "buying-guide-pages", paths: shoppingGuides.map((item) => `/best/${item.slug}`) },
  { slug: "deal-pages", paths: dealGuides.map((item) => item.href) },
  { slug: "price-band-pages", paths: priceBandGuides.map((item) => item.href) },
  { slug: "brand-deal-pages", paths: brandDealGuides.map((item) => item.href) },
  { slug: "fabric-guide-pages", paths: fabricGuides.map((item) => item.href) },
  { slug: "care-guide-pages", paths: careGuides.map((item) => item.href) },
  { slug: "feature-pages", paths: featureGuides.map((item) => item.href) },
  { slug: "color-pages", paths: colorGuides.map((item) => item.href) },
  { slug: "fit-guide-pages", paths: fitGuides.map((item) => item.href) },
  { slug: "body-fit-pages", paths: bodyFitGuides.map((item) => item.href) },
  { slug: "intent-pages", paths: intentGuides.map((item) => item.href) },
  { slug: "use-case-pages", paths: useCaseGuides.map((item) => item.href) },
  { slug: "occasion-pages", paths: occasionGuides.map((item) => item.href) },
  { slug: "seasonal-pages", paths: seasonalGuides.map((item) => item.href) },
  { slug: "segment-category-pages", paths: segmentCategoryGuides.map((item) => item.href) },
  { slug: "comparison-pages", paths: comparisonGuides.map((item) => `/compare/${item.slug}`) },
  { slug: "category-comparison-pages", paths: categoryComparisonGuides.map((item) => item.href) },
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
