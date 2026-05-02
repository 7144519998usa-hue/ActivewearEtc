import HubPage from "../components/HubPage";
import { categories, editorialHubs, fabricGuides } from "../lib/activewearData";

export const metadata = {
  title: "Activewear Styles",
  description: "Compare activewear styles including joggers, hoodies, compression wear, athleisure, sustainable activewear, and premium activewear.",
  alternates: { canonical: "/styles" }
};

export default function StylesPage() {
  return (
    <HubPage
      eyebrow="Styles"
      title="Activewear by style and wardrobe role"
      intro="Move from workout-specific gear into style, fit, fabric, and lifestyle use cases without losing comparison context."
      path="/styles"
      items={[
        ...categories.filter((item) => item.href.startsWith("/styles/")),
        ...editorialHubs.filter((item) => item.href.startsWith("/styles/")),
        ...fabricGuides.slice(0, 8)
      ]}
    />
  );
}
