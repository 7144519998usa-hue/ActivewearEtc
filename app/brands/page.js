import HubPage from "../components/HubPage";
import { brandHubs } from "../lib/activewearData";

export const metadata = {
  title: "Activewear Brands",
  description: "Compare activewear brands by category coverage, price position, style, fit consistency, and retailer availability.",
  alternates: { canonical: "/brands" }
};

export default function BrandsPage() {
  return (
    <HubPage
      eyebrow="Brands"
      title="Activewear brands compared by fit, price, and category coverage"
      intro="Use brand hubs when the shopper already has a label in mind but still needs category, price, fit, and retailer context."
      path="/brands"
      items={brandHubs}
    />
  );
}
