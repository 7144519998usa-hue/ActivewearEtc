import CategoryGrid from "../components/CategoryGrid";
import { siteConfig } from "../lib/siteConfig";

export const metadata = {
  title: "About ActivewearEtc",
  description: "How ActivewearEtc helps shoppers compare activewear with clear affiliate, pricing, image, and editorial disclosures.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">About</span>
          <h1>ActivewearEtc helps shoppers compare activewear more clearly.</h1>
          <p>
            We organize activewear pages by category, activity, fit concern, brand, retailer, budget, and style. The goal
            is to help shoppers make a more informed choice before visiting a retailer site.
          </p>
        </div>
        <div className="content-card">
          <p>
            ActivewearEtc does not post fake reviews or claim hands-on product testing unless clearly stated. We also
            do not guarantee prices, availability, performance, sizing, or retailer policies.
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
