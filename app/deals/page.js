import HubPage from "../components/HubPage";
import { editorialHubs, sampleProducts } from "../lib/activewearData";
import ProductComparison from "../components/ProductComparison";

export const metadata = {
  title: "Activewear Deals",
  description: "Compare activewear deal paths by budget, product category, brand, sale context, and retailer availability.",
  alternates: { canonical: "/deals" }
};

export default function DealsPage() {
  return (
    <HubPage
      eyebrow="Deals"
      title="Activewear deals with context"
      intro="Use deal pages when price matters, while still checking fit, returns, support level, fabric, and availability before clicking out."
      path="/deals"
      items={editorialHubs.filter((item) => item.href.startsWith("/deals/"))}
    >
      <section className="section">
        <ProductComparison products={sampleProducts} />
      </section>
    </HubPage>
  );
}
