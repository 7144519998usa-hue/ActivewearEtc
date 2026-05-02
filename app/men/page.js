import HubPage from "../components/HubPage";
import { categories } from "../lib/activewearData";

export const metadata = {
  title: "Men's Activewear",
  description: "Compare men's activewear for gym, running, training, recovery, and athleisure by fit, material, price, and brand.",
  alternates: { canonical: "/men" }
};

export default function MenPage() {
  return (
    <HubPage
      eyebrow="Men's activewear"
      title="Men's activewear for training, running, and everyday movement"
      intro="Compare joggers, workout tops, training shoes, running shorts, hoodies, compression wear, and gym clothes in one activewear-focused path."
      path="/men"
      items={categories.filter((item) => ["joggers", "workout-tops", "training-shoes", "running-shorts", "hoodies", "compression-wear"].includes(item.slug))}
    />
  );
}
