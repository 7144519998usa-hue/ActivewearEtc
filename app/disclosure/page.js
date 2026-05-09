import Link from "next/link";

export const metadata = {
  title: "Affiliate Disclosure",
  description: "Shortcut page for ActivewearEtc affiliate disclosure, commission, price, and retailer relationship policies.",
  alternates: { canonical: "/about/advertiser-disclosure" }
};

export default function DisclosurePage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Disclosure</span>
          <h1>Affiliate Disclosure</h1>
          <p>
            ActivewearEtc may earn a commission when shoppers click qualifying merchant links. Affiliate relationships
            do not justify fake reviews, unsupported performance claims, or hidden sponsored placements.
          </p>
          <Link className="primary-button" href="/about/advertiser-disclosure">
            Read full disclosure
          </Link>
        </div>
      </section>
    </main>
  );
}
