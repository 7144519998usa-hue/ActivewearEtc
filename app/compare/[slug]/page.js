import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { brandHubs, categories, categoryComparisonGuides, comparisonGuides, editorialHubs, shoppingGuides } from "../../lib/activewearData";

function getComparison(slug) {
  return comparisonGuides.find((item) => item.slug === slug) || categoryComparisonGuides.find((item) => item.slug === slug);
}

function getRelatedItems(comparison) {
  const lookup = [
    ...brandHubs,
    ...categories,
    ...editorialHubs,
    ...shoppingGuides.map((item) => ({ ...item, href: `/best/${item.slug}` })),
    ...comparisonGuides.map((item) => ({ ...item, href: `/compare/${item.slug}` })),
    ...categoryComparisonGuides
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

  return [...related, ...categoryFallback, ...fallback].slice(0, 6);
}

export function generateStaticParams() {
  return [...comparisonGuides, ...categoryComparisonGuides].map((guide) => ({ slug: guide.slug }));
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
          {comparison.tags.map((tag) => (
            <article className="card" key={tag}>
              <span className="eyebrow">{tag}</span>
              <h3>{tag}</h3>
              <p>
                Check this signal against the workout, fit preference, and return window before choosing a retailer path.
              </p>
            </article>
          ))}
        </div>
      </section>
    </HubPage>
  );
}
