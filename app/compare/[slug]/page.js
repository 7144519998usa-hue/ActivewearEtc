import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { brandHubs, categories, categoryComparisonGuides, comparisonGuides, editorialHubs, retailerComparisonGuides, retailerHubs, shoppingGuides } from "../../lib/activewearData";

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

  return (
    <HubPage
      eyebrow="Comparison"
      title={comparison.title}
      intro={comparison.summary}
      path={comparison.href || `/compare/${comparison.slug}`}
      items={getRelatedItems(comparison)}
    >
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
  );
}
