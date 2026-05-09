export const metadata = {
  title: "Terms of Use",
  description: "Terms of use for ActivewearEtc activewear research, affiliate links, pricing notes, and editorial guidance.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Terms</span>
          <h1>Terms of Use</h1>
          <p>
            ActivewearEtc provides editorial shopping research, comparison paths, and affiliate disclosures. The site is
            not a retailer, medical advisor, warranty provider, or product testing lab.
          </p>
        </div>
        <div className="content-card">
          <p>
            Product information, pricing language, availability notes, and retailer references are provided for shopping
            context only. Always verify final details on the merchant site before purchasing.
          </p>
          <p>
            We may earn commissions from qualifying merchant links. Affiliate relationships do not justify fake reviews,
            unsupported performance claims, or hidden sponsored placements.
          </p>
        </div>
      </section>
    </main>
  );
}
