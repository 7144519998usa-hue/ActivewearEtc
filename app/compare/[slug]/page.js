import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import JsonLd from "../../components/JsonLd";
import { buildAffiliateLink } from "../../lib/affiliateLinks";
import { brandHubs, categories, categoryComparisonGuides, comparisonGuides, editorialHubs, retailerComparisonGuides, retailerHubs, shoppingGuides } from "../../lib/activewearData";
import { faqSchema } from "../../lib/structuredData";

function getComparison(slug) {
  return comparisonGuides.find((item) => item.slug === slug)
    || categoryComparisonGuides.find((item) => item.slug === slug)
    || retailerComparisonGuides.find((item) => item.slug === slug);
}

function getRelatedItems(comparison) {
  const lookup = [
    ...brandHubs,
    ...retailerHubs,
    ...categories,
    ...editorialHubs,
    ...shoppingGuides.map((item) => ({ ...item, href: `/best/${item.slug}` })),
    ...comparisonGuides.map((item) => ({ ...item, href: `/compare/${item.slug}` })),
    ...categoryComparisonGuides,
    ...retailerComparisonGuides
  ];
  const related = comparison.relatedHrefs
    .map((href) => lookup.find((item) => item.href === href))
    .filter(Boolean);
  const fallback = comparisonGuides
    .filter((item) => item.slug !== comparison.slug)
    .slice(0, 6)
    .map((item) => ({ ...item, href: `/compare/${item.slug}` }));

  const categoryFallback = categoryComparisonGuides
    .filter((item) => item.slug !== comparison.slug && item.categorySlug === comparison.categorySlug)
    .slice(0, 4);
  const retailerFallback = retailerComparisonGuides
    .filter((item) => item.slug !== comparison.slug && item.categorySlug === comparison.categorySlug)
    .slice(0, 4);

  return [...related, ...categoryFallback, ...retailerFallback, ...fallback].slice(0, 6);
}

function getAmazonSearchLink(query) {
  return buildAffiliateLink({ merchantUrl: `https://www.amazon.com/s?k=${encodeURIComponent(query).replace(/%20/g, "+")}` });
}

function isAdidasLululemonComparison(comparison) {
  const text = `${comparison.title} ${comparison.summary} ${comparison.tags.join(" ")}`.toLowerCase();
  return text.includes("adidas") && text.includes("lululemon");
}

function getCommerceCtas(comparison) {
  if (isAdidasLululemonComparison(comparison)) {
    return [
      { label: "Shop Adidas yoga options", query: "Adidas yoga clothing women" },
      { label: "Shop lululemon-style yoga options", query: "lululemon yoga leggings women" },
      { label: "Compare yoga leggings on Amazon", query: "best yoga leggings women" }
    ];
  }

  const queryBase = comparison.title.replace(/\bvs\b/gi, "").replace(/\s+/g, " ").trim();
  return [
    { label: "Shop current Amazon options", query: queryBase },
    { label: "Compare activewear alternatives", query: `${queryBase} activewear` }
  ];
}

function getDecisionRows(comparison) {
  if (isAdidasLululemonComparison(comparison)) {
    return [
      { factor: "Best starting point", adidas: "Sport-led yoga and athleisure crossover", lululemon: "Studio-led premium yoga comfort" },
      { factor: "Fabric feel", adidas: "Look for breathable, athletic stretch fabrics", lululemon: "Look for softer, body-skimming studio fabrics" },
      { factor: "Yoga pants and leggings", adidas: "Good for shoppers who also want gym or walking use", lululemon: "Good for shoppers prioritizing soft low-impact movement" },
      { factor: "Price check", adidas: "Often worth checking for current discounts and multipacks", lululemon: "Often requires more careful value and return-policy checks" },
      { factor: "Before buying", adidas: "Verify size chart, inseam, fabric, color, and return terms", lululemon: "Verify seller, authenticity signals, fabric, size, and return terms" }
    ];
  }

  return comparison.tags.map((tag) => ({
    factor: tag,
    adidas: "Check the current product page details before buying.",
    lululemon: "Compare fit, size, price, and return terms before choosing."
  }));
}

function getFaqs(comparison) {
  if (!isAdidasLululemonComparison(comparison)) {
    return [
      {
        question: `How should I use this ${comparison.title} comparison?`,
        answer: "Use it to narrow your shopping criteria, then verify current price, size availability, materials, seller details, shipping, and return terms on the merchant page before buying."
      },
      {
        question: "Does ActivewearEtc publish hands-on product reviews?",
        answer: "No. ActivewearEtc provides editorial shopping comparisons based on visible product and retailer information. No hands-on testing or performance claim is implied unless explicitly stated."
      }
    ];
  }

  return [
    {
      question: "Is Adidas or lululemon better for yoga clothing?",
      answer: "Adidas is usually the stronger starting point for sport-led yoga clothing that can cross over into gym, walking, and athleisure. lululemon is usually the stronger starting point for soft studio-focused yoga clothing and premium low-impact comfort."
    },
    {
      question: "Are Adidas or lululemon yoga leggings better for everyday wear?",
      answer: "It depends on the fit and fabric. Adidas can suit sportier everyday outfits, while lululemon can suit softer studio-to-street outfits. Check opacity, rise, inseam, size availability, fabric blend, and return policy before buying."
    },
    {
      question: "What should I check before buying Adidas or lululemon yoga pants?",
      answer: "Verify current price, size chart, inseam, waistband style, fabric notes, color availability, seller details, shipping, and returns on the merchant page because product details can change."
    }
  ];
}

export function generateStaticParams() {
  return [...comparisonGuides, ...categoryComparisonGuides, ...retailerComparisonGuides].map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const comparison = getComparison(params.slug);

  if (!comparison) {
    return {};
  }

  return {
    title: comparison.title,
    description: comparison.summary,
    alternates: { canonical: `/compare/${comparison.slug}` }
  };
}

export default function ComparisonPage({ params }) {
  const comparison = getComparison(params.slug);

  if (!comparison) {
    notFound();
  }

  const commerceCtas = getCommerceCtas(comparison);
  const decisionRows = getDecisionRows(comparison);
  const faqs = getFaqs(comparison);

  return (
    <>
      <JsonLd data={faqSchema({ path: comparison.href || `/compare/${comparison.slug}`, faqs })} />
      <HubPage
        eyebrow="Comparison"
        title={comparison.title}
        intro={comparison.summary}
        path={comparison.href || `/compare/${comparison.slug}`}
        items={getRelatedItems(comparison)}
      >
        <section className="section section-tight">
          <div className="revenue-cta-panel">
            <div>
              <span className="eyebrow">Shop current options</span>
              <h2>Check live availability before choosing.</h2>
              <p>
                Product prices, sizes, colors, sellers, shipping, and returns can change. Use these links to compare
                current Amazon options, then verify final details before buying.
              </p>
            </div>
            <div className="revenue-cta-actions">
              {commerceCtas.map((cta) => (
                <a className="primary-button" href={getAmazonSearchLink(cta.query)} key={cta.label} rel="sponsored nofollow noopener" target="_blank">
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Decision table</span>
            <h2>Compare the factors that affect the purchase.</h2>
            <p>
              These tables are editorial shopping guidance, not hands-on performance testing. Use them to shortlist
              options before checking current merchant details.
            </p>
          </div>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>{isAdidasLululemonComparison(comparison) ? "Adidas" : "Option A"}</th>
                  <th>{isAdidasLululemonComparison(comparison) ? "lululemon" : "Option B"}</th>
                </tr>
              </thead>
              <tbody>
                {decisionRows.map((row) => (
                  <tr key={row.factor}>
                    <td>{row.factor}</td>
                    <td>{row.adidas}</td>
                    <td>{row.lululemon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Decision points</span>
            <h2>Use the comparison to narrow the next click</h2>
            <p>
              These pages compare shopper-visible differences like fit, support, fabric, budget, use case, and retailer
              policies. ActivewearEtc does not invent test results or claim a winner without support.
            </p>
          </div>
          <div className="grid">
            {(comparison.decisionCards || comparison.tags.map((tag) => ({
              title: tag,
              body: "Check this signal against the workout, fit preference, and return window before choosing a retailer path."
            }))).map((card) => (
              <article className="card" key={card.title}>
                <span className="eyebrow">{comparison.tags[0]}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="content-card">
            <span className="eyebrow">FAQ</span>
            <h2>Common buying questions</h2>
            {faqs.map((faq) => (
              <div className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {comparison.relatedSearches ? (
        <section className="section">
          <div className="content-card">
            <span className="eyebrow">Related searches</span>
            <h2>Other ways shoppers compare this topic</h2>
            <div className="tag-row">
              {comparison.relatedSearches.map((search) => (
                <a className="tag" href={search.href} key={search.href}>
                  {search.label}
                </a>
              ))}
            </div>
          </div>
        </section>
        ) : null}
      </HubPage>
    </>
  );
}
