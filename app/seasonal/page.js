import HubPage from "../components/HubPage";
import { seasonalGuides } from "../lib/activewearData";

export const metadata = {
  title: "Seasonal Activewear Guides",
  description: "Compare activewear by season, including summer, winter, spring, and holiday shopping needs with price and availability cautions.",
  alternates: { canonical: "/seasonal" }
};

export default function SeasonalPage() {
  return (
    <HubPage
      eyebrow="Seasonal"
      title="Seasonal activewear shopping guides"
      intro="Use these pages for seasonal shopper intent while keeping final price, stock, color, size, and return-policy checks with the retailer."
      path="/seasonal"
      items={seasonalGuides.slice(0, 12)}
    />
  );
}
