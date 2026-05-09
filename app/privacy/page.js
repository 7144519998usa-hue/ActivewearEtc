export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for ActivewearEtc, including analytics, affiliate links, and contact information.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Privacy</span>
          <h1>Privacy Policy</h1>
          <p>
            ActivewearEtc uses privacy-conscious site analytics and may use affiliate links to understand whether
            visitors click through to merchants.
          </p>
        </div>
        <div className="content-card">
          <p>
            We do not ask shoppers to create accounts, submit payment information, or purchase products directly on
            ActivewearEtc. Merchant sites may collect their own analytics, cookies, payment information, and checkout
            details under their own policies.
          </p>
          <p>
            If you contact us by email, we use the information you provide to respond to that message. We do not sell
            personal contact submissions.
          </p>
        </div>
      </section>
    </main>
  );
}
