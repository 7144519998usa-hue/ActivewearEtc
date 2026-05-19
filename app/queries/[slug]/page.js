import { notFound } from "next/navigation";
import CategoryGrid from "../../components/CategoryGrid";
import HubPage from "../../components/HubPage";
import { buildAffiliateLink } from "../../lib/affiliateLinks";
import {
  activityHubs,
  brandHubs,
  categories,
  comparisonGuides,
  editorialHubs,
  retailerHubs,
  sampleProducts,
  searchConsoleOpportunityGuides,
  shoppingGuides
} from "../../lib/activewearData";

function getGuide(slug) {
  return searchConsoleOpportunityGuides.find((item) => item.slug === slug);
}

function getRelatedItems(guide) {
  const lookup = [
    ...categories,
    ...editorialHubs,
    ...activityHubs,
    ...brandHubs,
    ...retailerHubs,
    ...comparisonGuides.map((item) => ({ ...item, href: `/compare/${item.slug}` })),
    ...shoppingGuides.map((item) => ({ ...item, href: `/best/${item.slug}` })),
    ...searchConsoleOpportunityGuides
  ];

  const related = guide.relatedHrefs
    .map((href) => lookup.find((item) => item.href === href))
    .filter(Boolean);
  const fallback = searchConsoleOpportunityGuides
    .filter((item) => item.slug !== guide.slug)
    .slice(0, 6);

  return [...related, ...fallback].slice(0, 6);
}

function getMatchingProducts(guide) {
  const terms = [guide.title, ...(guide.tags || [])].join(" ").toLowerCase().split(/\s+/).filter((word) => word.length > 2);

  return sampleProducts
    .map((product) => {
      const haystack = [product.brand, product.name, product.category, product.bestFor, product.badge]
        .join(" ")
        .toLowerCase();
      const score = terms.filter((term) => haystack.includes(term)).length;
      return { product, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((item) => item.product);
}

export function generateStaticParams() {
  return searchConsoleOpportunityGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getGuide(params.slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.summary,
    alternates: { canonical: guide.href }
  };
}

export default function QueryGuidePage({ params }) {
  const guide = getGuide(params.slug);

  if (!guide) {
    notFound();
  }

  const products = getMatchingProducts(guide);

  return (
    <HubPage
      eyebrow="Shopping shortcut"
      title={guide.title}
      intro={guide.summary}
      path={guide.href}
      items={getRelatedItems(guide)}
    >
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Quick checks</span>
          <h2>What to compare before you buy</h2>
          <p>Use these simple checks to choose a better starting point, then confirm the latest details on the store page.</p>
        </div>
        <div className="grid">
          {guide.tags.map((tag) => (
            <article className="card" key={tag}>
              <span className="card-kicker">{tag}</span>
              <h3>{tag}</h3>
              <p>Compare fit, fabric, sizing, return policy, and current availability before clicking through.</p>
            </article>
          ))}
        </div>
      </section>

      {products.length ? (
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Amazon search paths</span>
            <h2>Related shopping links</h2>
            <p>These links open current Amazon search results so shoppers can check today's options directly.</p>
          </div>
          <div className="grid">
            {products.map((product) => (
              <article className="card" key={product.href}>
                <span className="card-kicker">{product.category}</span>
                <h3>{product.brand} {product.name}</h3>
                <p>{product.bestFor}</p>
                <a className="primary-button" href={buildAffiliateLink(product)} rel="nofollow sponsored noopener" target="_blank">
                  Shop on Amazon
                </a>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Related pages</span>
          <h2>Keep shopping</h2>
        </div>
        <CategoryGrid items={getRelatedItems(guide)} />
      </section>
    </HubPage>
  );
}
