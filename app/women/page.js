import HubPage from "../components/HubPage";
import { categories, editorialHubs, segmentCategoryGuides } from "../lib/activewearData";

export const metadata = {
  title: "Women's Activewear",
  description: "Compare women's leggings, sports bras, workout tops, shorts, shoes, and activewear sets by fit, support, fabric, and price.",
  alternates: { canonical: "/women" }
};

export default function WomenPage() {
  const items = [
    ...categories.filter((item) => ["leggings", "sports-bras", "workout-tops", "running-shorts", "yoga-wear"].includes(item.slug)),
    ...segmentCategoryGuides.filter((item) => item.segmentSlug === "women").slice(0, 4),
    editorialHubs.find((item) => item.slug === "plus-size-activewear")
  ].filter(Boolean);

  return (
    <HubPage
      eyebrow="Women's activewear"
      title="Women's activewear by fit, support, and activity"
      intro="Start with the activewear lane that matches the workout, then narrow by size, color, material, support level, and retailer."
      path="/women"
      items={items}
    />
  );
}
