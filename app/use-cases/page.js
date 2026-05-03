import HubPage from "../components/HubPage";
import { occasionGuides, useCaseGuides } from "../lib/activewearData";

export const metadata = {
  title: "Activewear Use Cases",
  description: "Compare activewear by shopper use case, including travel, beginners, hot weather, cold weather, high-sweat workouts, and everyday wear.",
  alternates: { canonical: "/use-cases" }
};

export default function UseCasesPage() {
  return (
    <HubPage
      eyebrow="Use cases"
      title="Activewear by real-world use case"
      intro="Use these pages when the shopper problem matters more than the brand: travel, beginner-friendly gear, weather, sweat, and everyday wear."
      path="/use-cases"
      items={[...useCaseGuides.slice(0, 12), ...occasionGuides.slice(0, 6)]}
    />
  );
}
