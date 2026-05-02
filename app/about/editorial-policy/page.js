export const metadata = {
  title: "Editorial Policy",
  description: "The ActivewearEtc editorial policy for activewear guides, comparisons, reviews, and product data.",
  alternates: { canonical: "/about/editorial-policy" }
};

export default function EditorialPolicyPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Editorial policy</span>
          <h1>Editorial Policy</h1>
          <p>ActivewearEtc publishes shopper-first activewear pages built around visible product data, clear limitations, and practical comparison criteria.</p>
        </div>
        <div className="grid">
          <article className="card">
            <h3>No fake reviews</h3>
            <p>We do not claim hands-on testing, ratings, or long-term wear results unless the evidence is documented and visible.</p>
          </article>
          <article className="card">
            <h3>No unsupported claims</h3>
            <p>Performance, compression, moisture-wicking, support, and sustainability claims must be supported by product data or clearly framed as retailer-provided information.</p>
          </article>
          <article className="card">
            <h3>Image attribution</h3>
            <p>Product images must come from authorized feeds, licensed assets, retailer-approved media, or properly attributed sources.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
