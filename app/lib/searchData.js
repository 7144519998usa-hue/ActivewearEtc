import {
  activityCategoryGuides,
  activityHubs,
  bodyFitGuides,
  brandActivityCategoryGuides,
  brandActivityGuides,
  brandCategoryGuides,
  brandConcernGuides,
  brandHubs,
  brandSegmentCategoryGuides,
  careGuides,
  categories,
  categoryComparisonGuides,
  colorGuides,
  comparisonGuides,
  concernGuides,
  dealGuides,
  editorialHubs,
  fabricGuides,
  featureGuides,
  fitGuides,
  intentGuides,
  occasionGuides,
  priceBandGuides,
  retailerCategoryGuides,
  retailerHubs,
  retailerPriceBandGuides,
  sampleProducts,
  searchConsoleOpportunityGuides,
  seasonalGuides,
  segmentCategoryGuides,
  shoppingGuides,
  useCaseGuides
} from "./activewearData";

const searchCollections = [
  ...categories,
  ...editorialHubs,
  ...activityHubs,
  ...brandHubs,
  ...retailerHubs,
  ...activityCategoryGuides,
  ...brandActivityGuides,
  ...brandActivityCategoryGuides,
  ...brandCategoryGuides,
  ...brandConcernGuides,
  ...brandSegmentCategoryGuides,
  ...retailerCategoryGuides,
  ...retailerPriceBandGuides,
  ...dealGuides,
  ...priceBandGuides,
  ...fabricGuides,
  ...careGuides,
  ...concernGuides,
  ...featureGuides,
  ...colorGuides,
  ...fitGuides,
  ...bodyFitGuides,
  ...intentGuides,
  ...useCaseGuides,
  ...occasionGuides,
  ...seasonalGuides,
  ...segmentCategoryGuides,
  ...comparisonGuides.map((item) => ({ ...item, href: `/compare/${item.slug}` })),
  ...categoryComparisonGuides,
  ...shoppingGuides.map((item) => ({ ...item, href: `/best/${item.slug}` })),
  ...searchConsoleOpportunityGuides,
  ...sampleProducts.map((item) => ({
    ...item,
    title: `${item.brand} ${item.name}`,
    summary: item.bestFor,
    tags: [item.brand, item.category, item.merchant]
  }))
];

export function getSearchResults(query) {
  const normalizedQuery = String(query || "").trim().toLowerCase();
  const unique = new Map();

  for (const item of searchCollections) {
    if (!item.href || unique.has(item.href)) continue;
    unique.set(item.href, item);
  }

  const items = Array.from(unique.values());
  if (!normalizedQuery) {
    return items.slice(0, 24);
  }

  return items
    .map((item) => {
      const haystack = [
        item.name,
        item.title,
        item.summary,
        item.brand,
        item.category,
        ...(item.tags || [])
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const title = String(item.name || item.title || "").toLowerCase();
      const score =
        (title.includes(normalizedQuery) ? 4 : 0) +
        (haystack.includes(normalizedQuery) ? 2 : 0) +
        normalizedQuery
          .split(/\s+/)
          .filter((word) => word.length > 2 && haystack.includes(word)).length;

      return { item, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 36)
    .map((result) => result.item);
}
