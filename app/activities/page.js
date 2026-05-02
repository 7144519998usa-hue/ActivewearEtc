import HubPage from "../components/HubPage";
import { activityHubs } from "../lib/activewearData";

export const metadata = {
  title: "Activewear by Activity",
  description: "Compare activewear for running, yoga, gym training, studio workouts, athleisure, and everyday movement.",
  alternates: { canonical: "/activities" }
};

export default function ActivitiesPage() {
  return (
    <HubPage
      eyebrow="Activities"
      title="Shop activewear by workout intent"
      intro="Use activity hubs when the workout matters more than the brand, then compare support, fabric, fit, and retailer options."
      path="/activities"
      items={activityHubs}
    />
  );
}
