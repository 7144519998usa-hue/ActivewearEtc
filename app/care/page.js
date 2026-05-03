import HubPage from "../components/HubPage";
import { careGuides } from "../lib/activewearData";

export const metadata = {
  title: "Activewear Care Guides",
  description: "Compare activewear washing, drying, odor-control, stain-care, travel-care, and long-term-care needs by category.",
  alternates: { canonical: "/care" }
};

export default function CarePage() {
  return (
    <HubPage
      eyebrow="Care guides"
      title="Activewear care guidance for smarter shopping"
      intro="Use care pages to understand laundering, drying, odor, stain, travel, and long-term durability considerations before buying. Always follow the product care label."
      path="/care"
      items={careGuides.slice(0, 12)}
    />
  );
}
