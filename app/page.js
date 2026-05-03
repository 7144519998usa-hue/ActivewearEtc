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
            <h1>ActivewearEtc</h1>
            <p>
              Compare activewear by fit, fabric, support, style, activity, and budget before you click through to a retailer.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="/women">Shop Women's Activewear</a>
              <a className="secondary-button" href="/compare">Compare Top Picks</a>
            </div>
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
            <p>These product cards are starter examples only. Live product feeds should replace sample data before production launch.</p>
          </div>
          <ProductComparison products={sampleProducts} />
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Shop by need</span>
            <h2>Fit, budget, sustainability, and premium shopping lanes.</h2>
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
