import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { brandCategoryGuides, categories, intentGuides, shoppingGuides } from "../../lib/activewearData";

function getIntentGuide(slug) {
  return intentGuides.find((item) => item.slug === slug);
}

function getRelatedItems(guide) {
  const category = categories.find((item) => item.slug === guide.categorySlug);
  const relatedBrandPages = brandCategoryGuides
    .filter((item) => item.categorySlug === guide.categorySlug)
    .slice(0, 4);
  const relatedBuyingGuides = shoppingGuides
    .filter((item) => item.tags.some((tag) => guide.tags.map((value) => value.toLowerCase()).includes(tag.toLowerCase())))
    .slice(0, 2)
    .map((item) => ({
      ...item,
      name: item.title,
      href: `/best/${item.slug}`
    }));

  return [
    category,
    ...relatedBrandPages,
    ...relatedBuyingGuides
  ].filter(Boolean).slice(0, 6);
}

export function generateStaticParams() {
  return intentGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getIntentGuide(params.slug);

  if (!guide) {
    return {};
  }

  return {
    title: `${guide.title}`,
    description: guide.summary,
    alternates: { canonical: guide.href }
  };
}

export default function IntentGuidePage({ params }) {
  const guide = getIntentGuide(params.slug);

  if (!guide) {
    notFound();
  }

  return (
    <HubPage
      eyebrow="Shopper intent"
      title={guide.title}
      intro={guide.summary}
      path={guide.href}
      items={getRelatedItems(guide)}
    >
      <section className="section">
        <div className="content-card">
          <h2>What this page is allowed to do</h2>
          <p>
            This page helps shoppers narrow a category by use case, budget, fit, or feature. It is not a product review
            database and does not claim hands-on testing unless that evidence exists.
          </p>
          <p>
            Affiliate links may be added later only with clear disclosure, current merchant attribution, and price or
            availability disclaimers near the shopping action.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
