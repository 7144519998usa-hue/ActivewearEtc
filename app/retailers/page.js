import HubPage from "../components/HubPage";
import { retailerCategoryGuides, retailerHubs } from "../lib/activewearData";

export const metadata = {
  title: "Activewear Retailer Guides",
  description: "Compare activewear retailers and marketplaces by category coverage, seller details, return policy, price checks, size availability, and affiliate disclosure safety.",
  alternates: { canonical: "/retailers" }
};

export default function RetailersPage() {
  return (
    <HubPage
      eyebrow="Retailers"
      title="Activewear retailer research before clicking out"
      intro="Use retailer guides to compare activewear shopping paths while checking seller details, price, availability, return policies, images, and sizing on the final merchant page."
      path="/retailers"
      items={[...retailerHubs, ...retailerCategoryGuides.slice(0, 10)]}
    />
  );
}
