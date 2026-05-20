import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { categories, editorialHubs, shoppingGuides } from "../../lib/activewearData";

function getGuide(slug) {
  return shoppingGuides.find((item) => item.slug === slug);
}

function getRelatedItems(guide) {
  const lookup = [...categories, ...editorialHubs, ...shoppingGuides.map((item) => ({
    ...item,
    href: `/best/${item.slug}`
  }))];
  const related = guide.relatedHrefs
    .map((href) => lookup.find((item) => item.href === href))
    .filter(Boolean);
  const fallback = shoppingGuides
    .filter((item) => item.slug !== guide.slug)
    .slice(0, 6)
    .map((item) => ({ ...item, href: `/best/${item.slug}` }));

  return [...related, ...fallback].slice(0, 6);
}

export function generateStaticParams() {
  return shoppingGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getGuide(params.slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.summary,
    alternates: { canonical: `/best/${guide.slug}` }
  };
}

export default function BestGuidePage({ params }) {
  const guide = getGuide(params.slug);

  if (!guide) {
    notFound();
  }

  return (
    <HubPage
      eyebrow="Buying guide"
      title={guide.title}
      intro={guide.summary}
      path={`/best/${guide.slug}`}
      items={getRelatedItems(guide)}
    >
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Comparison criteria</span>
          <h2>What to compare before clicking through</h2>
          <p>
            ActivewearEtc keeps buying guides focused on details shoppers can check: fit, fabric, support, size availability,
            return policy, and whether the product matches the workout.
          </p>
        </div>
        <div className="grid">
          {guide.tags.map((tag) => (
            <article className="card" key={tag}>
              <span className="eyebrow">{tag}</span>
              <h3>{tag}</h3>
              <p>
                Use this detail to narrow the comparison before leaving for a retailer. Prices and availability can change,
                so final checks should happen on the retailer page.
              </p>
            </article>
          ))}
        </div>
      </section>
    </HubPage>
  );
}
