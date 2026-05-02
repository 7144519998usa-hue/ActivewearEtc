export const metadata = {
  title: "Affiliate Disclosure",
  description: "How ActivewearEtc handles affiliate links, commissions, pricing, and retailer relationships.",
  alternates: { canonical: "/about/advertiser-disclosure" }
};

export default function AdvertiserDisclosurePage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Disclosure</span>
          <h1>Affiliate Disclosure</h1>
          <p>ActivewearEtc may earn a commission when users click retailer links or buy through partner links.</p>
        </div>
        <div className="notice">
          Affiliate relationships do not justify false claims, fake reviews, unsupported testing language, hidden sponsored links, or retailer placements based only on commission. Prices, sizes, colors, availability, shipping, and return policies can change after publication.
        </div>
      </section>
    </main>
  );
}
