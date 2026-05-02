import HubPage from "../components/HubPage";
import ProductComparison from "../components/ProductComparison";
import { brandHubs, categories, categoryComparisonGuides, comparisonGuides, sampleProducts } from "../lib/activewearData";

export const metadata = {
  title: "Activewear Compare",
  description: "Compare activewear products, brands, categories, fits, fabrics, and budget paths before choosing a retailer.",
  alternates: { canonical: "/compare" }
};

export default function ComparePage() {
  return (
    <HubPage
      eyebrow="Compare"
      title="Compare activewear before the retailer click"
      intro="Comparison pages focus on one shopping decision at a time: category, brand, support level, fit, activity, material, or budget."
      path="/compare"
      items={[
        ...comparisonGuides.slice(0, 8).map((guide) => ({
          ...guide,
          href: `/compare/${guide.slug}`
        })),
        ...categoryComparisonGuides.slice(0, 6),
        ...brandHubs,
        ...categories.slice(0, 4)
      ]}
    >
      <section className="section">
        <ProductComparison products={sampleProducts} />
      </section>
    </HubPage>
  );
}
