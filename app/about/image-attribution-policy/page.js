import { siteConfig } from "../../lib/siteConfig";

export const metadata = {
  title: "Product Image Attribution Policy",
  description:
    "Learn the image sourcing and attribution standards ActivewearEtc uses for retailer, publisher, and editorial visuals."
};

export default function ImageAttributionPolicyPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Compliance</span>
          <h1>Product image attribution policy</h1>
          <p>
            ActivewearEtc only intends to use product images that are licensed, feed-authorized, retailer-approved, original, or otherwise
            cleared for editorial use.
          </p>
        </div>
        <div className="prose-card">
          <p>
            Before any live product image is published, the source must be documented. Acceptable sources include approved affiliate feeds,
            merchant media kits, original photography, or other assets with explicit permission for use.
          </p>
          <p>
            We do not want placeholder assets, scraped retailer imagery, or unlicensed photography used on production pages. If attribution is
            required by a feed or merchant program, that attribution must remain visible or otherwise compliant with the merchant's terms.
          </p>
          <p>
            If you believe an image has been used incorrectly, contact {siteConfig.supportEmail} with the page URL, image details, and the
            requested correction so the issue can be reviewed promptly.
          </p>
        </div>
      </section>
    </main>
  );
}
