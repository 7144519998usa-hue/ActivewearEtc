import HubPage from "../components/HubPage";
import { segmentHubs } from "../lib/activewearData";

export const metadata = {
  title: "Shop Activewear by Segment",
  description: "Browse ActivewearEtc shopping paths for women's, men's, plus-size, budget, premium, and sustainable activewear.",
  alternates: { canonical: "/shop" }
};

export default function ShopPage() {
  return (
    <HubPage
      eyebrow="Shop"
      title="Shop activewear by segment"
      intro="Use these paths when the shopper intent is about audience, price tier, or material standards before narrowing into a category."
      path="/shop"
      items={segmentHubs}
    />
  );
}
