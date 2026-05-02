export const metadata = {
  title: "Price and Availability Disclaimer",
  description:
    "Learn how ActivewearEtc handles retailer pricing, promotional messaging, and product availability disclosures."
};

export default function PriceAndAvailabilityPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Compliance</span>
          <h1>Price and availability disclaimer</h1>
          <p>
            ActivewearEtc may reference price ranges, sale language, or availability indicators, but we do not control retailer pricing,
            inventory, shipping terms, or checkout policies.
          </p>
        </div>
        <div className="prose-card">
          <p>
            Prices and availability can change between the time we publish a page and the time you visit a merchant. Promotions, sizing
            availability, color availability, shipping offers, and return terms are all controlled by the merchant, not by ActivewearEtc.
          </p>
          <p>
            When we say a product is budget-friendly, premium, discounted, or currently available, that language should be understood as
            editorial guidance based on the information visible at the time of publication. It is not a guarantee of ongoing pricing or stock.
          </p>
          <p>
            Shoppers should always confirm the final price, retailer policy, image selection, size availability, and checkout details directly
            on the merchant site before completing a purchase.
          </p>
        </div>
      </section>
    </main>
  );
}
