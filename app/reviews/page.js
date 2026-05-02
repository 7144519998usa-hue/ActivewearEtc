import HubPage from "../components/HubPage";
import { brandHubs, sampleProducts } from "../lib/activewearData";
import ProductComparison from "../components/ProductComparison";

export const metadata = {
  title: "Activewear Reviews",
  description: "Activewear review pages with clear methodology, affiliate disclosure, and no fake testing or unsupported claims.",
  alternates: { canonical: "/reviews" }
};

export default function ReviewsPage() {
  return (
    <HubPage
      eyebrow="Reviews"
      title="Activewear reviews with clear limits"
      intro="Reviews should be published only when the evidence, methodology, retailer data, and product details are visible and supportable."
      path="/reviews"
      items={brandHubs}
    >
      <section className="section">
        <ProductComparison products={sampleProducts} />
      </section>
    </HubPage>
  );
}
