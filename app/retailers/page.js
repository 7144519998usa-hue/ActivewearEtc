import HubPage from "../components/HubPage";
import { retailerCategoryGuides, retailerHubs } from "../lib/activewearData";

export const metadata = {
  title: "Activewear Retailer Guides",
  description: "Compare activewear retailers and marketplaces by category coverage, seller details, return policy, price, size availability, and affiliate disclosure.",
  alternates: { canonical: "/retailers" }
};

export default function RetailersPage() {
  return (
    <HubPage
      eyebrow="Retailers"
      title="Compare activewear retailers before you shop"
      intro="Use retailer guides to compare seller details, price, availability, return policies, images, and sizing before visiting the retailer page."
      path="/retailers"
      items={[...retailerHubs, ...retailerCategoryGuides.slice(0, 10)]}
    />
  );
}
