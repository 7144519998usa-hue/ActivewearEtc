import HubPage from "../components/HubPage";
import { colorGuides } from "../lib/activewearData";

export const metadata = {
  title: "Activewear Color Guides",
  description: "Compare activewear by color filters including black, white, neutral, and bright leggings, sports bras, tops, shorts, joggers, and hoodies.",
  alternates: { canonical: "/colors" }
};

export default function ColorsPage() {
  return (
    <HubPage
      eyebrow="Colors"
      title="Activewear color guides for shopper filters"
      intro="Use these pages when color matters, then verify current retailer stock, shade names, sizing, price, and return policy before buying."
      path="/colors"
      items={colorGuides.slice(0, 12)}
    />
  );
}
