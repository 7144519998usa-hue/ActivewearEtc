import HubPage from "../components/HubPage";
import { bodyFitGuides, brandActivityCategoryGuides, colorGuides, editorialHubs, featureGuides, intentGuides, priceBandGuides, retailerBrandCategoryGuides, retailerCategoryGuides, retailerHubs, seasonalGuides, shoppingGuides, useCaseGuides } from "../lib/activewearData";

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
        ...retailerBrandCategoryGuides.slice(0, 6),
        ...brandActivityCategoryGuides.slice(0, 6)
      ]}
    />
  );
}
