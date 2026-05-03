import HubPage from "../components/HubPage";
import { occasionGuides } from "../lib/activewearData";

export const metadata = {
  title: "Activewear Occasion Guides",
  description: "Compare activewear by real-world context including airport travel, work from home, errands, gym commute, and gifts.",
  alternates: { canonical: "/occasions" }
};

export default function OccasionsPage() {
  return (
    <HubPage
      eyebrow="Occasions"
      title="Activewear by everyday occasion"
      intro="Use occasion pages when the shopping context matters: travel, work from home, errands, gym commute, and gifting."
      path="/occasions"
      items={occasionGuides.slice(0, 12)}
    />
  );
}
