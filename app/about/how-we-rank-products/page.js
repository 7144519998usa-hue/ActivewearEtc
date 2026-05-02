export const metadata = {
  title: "How We Rank Products",
  description: "How ActivewearEtc ranks activewear products, brands, retailers, and comparison pages.",
  alternates: { canonical: "/about/how-we-rank-products" }
};

export default function HowWeRankProductsPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Methodology</span>
          <h1>How We Rank Products</h1>
          <p>ActivewearEtc ranks products with a trust-first model that balances shopper relevance, product fit, category match, retailer quality, price context, and availability.</p>
        </div>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Signal</th>
              <th>How it is used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Category fit</td>
              <td>Products should match the page intent, activity, fit, and shopper need.</td>
            </tr>
            <tr>
              <td>Retailer trust</td>
              <td>Return policy, shipping clarity, stock reliability, and brand reputation matter.</td>
            </tr>
            <tr>
              <td>Commercial value</td>
              <td>Affiliate economics may be considered, but cannot override relevance or trust.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
