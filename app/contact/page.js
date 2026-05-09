import { siteConfig } from "../lib/siteConfig";

export const metadata = {
  title: "Contact ActivewearEtc",
  description: "Contact ActivewearEtc for corrections, partnership questions, disclosure questions, and site feedback.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Contact</span>
          <h1>Contact ActivewearEtc</h1>
          <p>
            Send corrections, disclosure questions, merchant data issues, or partnership notes to{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
          </p>
        </div>
        <div className="content-card">
          <p>
            For product pricing, size availability, shipping, returns, or checkout questions, verify directly with the
            merchant before purchasing. ActivewearEtc does not control retailer inventory or policies.
          </p>
        </div>
      </section>
    </main>
  );
}
