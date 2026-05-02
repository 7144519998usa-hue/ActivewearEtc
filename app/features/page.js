import HubPage from "../components/HubPage";
import { featureGuides } from "../lib/activewearData";

export const metadata = {
  title: "Activewear Feature Guides",
  description: "Compare activewear by shopper features like high-waisted leggings, adjustable sports bras, pocketed running shorts, tapered joggers, and fleece hoodies.",
  alternates: { canonical: "/features" }
};

export default function FeaturesPage() {
  return (
    <HubPage
      eyebrow="Features"
      title="Activewear feature guides for specific shopper filters"
      intro="Use these pages when the product feature matters most, then verify fit, fabric, support, size, price, and return policy with the retailer."
      path="/features"
      items={featureGuides.slice(0, 12)}
    />
  );
}
