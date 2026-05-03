import HubPage from "../components/HubPage";
import { bodyFitGuides, brandActivityCategoryGuides, brandConcernGuides, careGuides, colorGuides, concernGuides, editorialHubs, featureGuides, intentGuides, occasionGuides, priceBandGuides, retailerActivityCategoryGuides, retailerBrandActivityCategoryGuides, retailerBrandCategoryGuides, retailerBrandPriceBandGuides, retailerCategoryGuides, retailerComparisonGuides, retailerConcernGuides, retailerHubs, retailerPriceBandGuides, retailerSegmentCategoryGuides, seasonalGuides, shoppingGuides, useCaseGuides } from "../lib/activewearData";

export const metadata = {
  title: "Activewear University",
  description: "Activewear education covering leggings, sports bras, fit, fabrics, compression, support, sustainability, and retailer shopping rules.",
  alternates: { canonical: "/activewear-university" }
};

export default function UniversityPage() {
  return (
    <HubPage
      eyebrow="Activewear University"
      title="Fit, fabric, and shopping education for activewear buyers"
      intro="Use education pages to support commercial decisions with clear sizing, fabric, support, and retailer guidance."
      path="/activewear-university"
      items={[
        ...editorialHubs,
        ...shoppingGuides.slice(0, 8).map((guide) => ({
          ...guide,
          href: `/best/${guide.slug}`
        })),
        ...intentGuides.slice(0, 6),
        ...useCaseGuides.slice(0, 6),
        ...seasonalGuides.slice(0, 4),
        ...featureGuides.slice(0, 6),
        ...colorGuides.slice(0, 6),
        ...bodyFitGuides.slice(0, 6),
        ...priceBandGuides.slice(0, 6),
        ...retailerHubs,
        ...retailerCategoryGuides.slice(0, 6),
        ...retailerActivityCategoryGuides.slice(0, 6),
        ...retailerBrandCategoryGuides.slice(0, 6),
        ...retailerBrandActivityCategoryGuides.slice(0, 6),
        ...retailerBrandPriceBandGuides.slice(0, 6),
        ...retailerPriceBandGuides.slice(0, 6),
        ...retailerSegmentCategoryGuides.slice(0, 6),
        ...retailerComparisonGuides.slice(0, 6),
        ...retailerConcernGuides.slice(0, 6),
        ...brandActivityCategoryGuides.slice(0, 6),
        ...brandConcernGuides.slice(0, 6),
        ...careGuides.slice(0, 6),
        ...occasionGuides.slice(0, 6),
        ...concernGuides.slice(0, 6)
      ]}
    />
  );
}
