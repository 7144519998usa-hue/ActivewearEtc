import CategoryGrid from "../components/CategoryGrid";
import { siteConfig } from "../lib/siteConfig";

export const metadata = {
  title: "About ActivewearEtc",
  description: "How ActivewearEtc helps shoppers compare activewear while keeping affiliate, pricing, image, and editorial disclosures clear.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">About</span>
          <h1>ActivewearEtc is a shopper-first activewear research site.</h1>
          <p>
            We organize activewear pages by category, activity, fit concern, brand, retailer, budget, and style. The goal
            is to help shoppers compare more clearly before they leave for a merchant site.
          </p>
        </div>
        <div className="content-card">
          <p>
            ActivewearEtc does not publish fake reviews, does not claim hands-on product testing unless clearly stated,
            and does not guarantee price, availability, performance, sizing, or retailer policies.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Trust center</span>
          <h2>How we handle affiliate and shopping information.</h2>
        </div>
        <CategoryGrid items={siteConfig.utilityLinks.filter((link) => link.href.startsWith("/about/"))} />
      </section>
    </main>
  );
}
