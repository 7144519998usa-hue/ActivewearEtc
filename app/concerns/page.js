import HubPage from "../components/HubPage";
import { concernGuides } from "../lib/activewearData";

export const metadata = {
  title: "Activewear Fit Concern Guides",
  description: "Compare activewear by common shopper concerns including chafing, sweat marks, waistband rolling, opacity, pilling, and slipping straps.",
  alternates: { canonical: "/concerns" }
};

export default function ConcernsPage() {
  return (
    <HubPage
      eyebrow="Concerns"
      title="Activewear guides by fit and comfort concern"
      intro="Use concern pages to narrow shopping questions before comparing products, retailers, size charts, care labels, prices, and return policies."
      path="/concerns"
      items={concernGuides.slice(0, 12)}
    />
  );
}
