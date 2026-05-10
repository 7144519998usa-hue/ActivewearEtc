import CategoryGrid from "./components/CategoryGrid";
import DisclosureNotice from "./components/DisclosureNotice";
import ProductComparison from "./components/ProductComparison";
import JsonLd from "./components/JsonLd";
import { activityHubs, brandHubs, categories, editorialHubs, retailerHubs, sampleProducts } from "./lib/activewearData";
import { collectionPageSchema } from "./lib/structuredData";

export const metadata = {
  title: "Activewear Search and Comparison",
  description:
    "Compare leggings, sports bras, workout tops, running shorts, joggers, shoes, and activewear brands by fit, fabric, style, budget, and activity.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          title: "ActivewearEtc",
          description: metadata.description,
          path: "/",
          items: categories.slice(0, 8)
        })}
      />
      <main className="page-shell">
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">Activewear discovery</span>
            <h1>Find the activewear that actually fits the workout.</h1>
            <p>
              Compare activewear by fit, fabric, support, style, activity, and budget before you click through to a retailer.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="/women">Shop Women's Activewear</a>
              <a className="secondary-button" href="/compare">Compare Top Picks</a>
            </div>
            <div className="hero-chips" aria-label="Popular shopping paths">
              <a href="/search?q=leggings">Leggings</a>
              <a href="/search?q=sports bras">Sports bras</a>
              <a href="/search?q=running shorts">Running shorts</a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="motion-card motion-card-main">
              <span>Fit Match</span>
              <strong>Yoga, gym, run</strong>
            </div>
            <div className="motion-orb motion-orb-one" />
            <div className="motion-orb motion-orb-two" />
            <div className="motion-card motion-card-small">
              <span>Compare</span>
              <strong>Support + fabric</strong>
            </div>
          </div>
        </section>

        <section className="section section-tight">
          <div className="trust-strip">
            <span>No fake reviews</span>
            <span>Affiliate disclosures</span>
            <span>Price checks before purchase</span>
            <span>Product image guardrails</span>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Shop by category</span>
            <h2>Start with the activewear category that matches the workout.</h2>
            <p>Each category is built to support fit, color, size, support level, material, and retailer comparison later.</p>
          </div>
          <CategoryGrid items={categories.slice(0, 9)} />
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Compare products</span>
            <h2>Featured comparison paths</h2>
            <p>These product cards use disclosure-safe comparison notes while merchant affiliate links and image sources are approved.</p>
          </div>
          <ProductComparison products={sampleProducts} />
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Guided shopping</span>
            <h2>Move by need, not by endless product grids.</h2>
            <p>Choose a lane that matches the shopper decision: fit risk, budget, sustainability, fabric feel, or premium brand comparison.</p>
          </div>
          <CategoryGrid items={editorialHubs} />
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Activities, brands, and retailers</span>
            <h2>Move from workout intent to brand and retailer research without losing context.</h2>
          </div>
          <CategoryGrid items={[...activityHubs, ...brandHubs, ...retailerHubs.slice(0, 4)]} />
        </section>

        <section className="section">
          <DisclosureNotice />
        </section>
      </main>
    </>
  );
}
