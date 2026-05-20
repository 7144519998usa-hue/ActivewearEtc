import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { brandCategoryGuides, categories, featureGuides, fitGuides, intentGuides, useCaseGuides } from "../../lib/activewearData";

function getFeatureGuide(slug) {
  return featureGuides.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return featureGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getFeatureGuide(params.slug);

  if (!guide) {
    return {};
  }

  return {
    title: `${guide.title}`,
    description: guide.summary,
    alternates: { canonical: guide.href }
  };
}

export default function FeatureGuidePage({ params }) {
  const guide = getFeatureGuide(params.slug);

  if (!guide) {
    notFound();
  }

  const category = categories.find((item) => item.slug === guide.categorySlug);
  const relatedBrandPages = brandCategoryGuides
    .filter((item) => item.categorySlug === guide.categorySlug)
    .slice(0, 2);
  const relatedFitPages = fitGuides
    .filter((item) => item.categorySlug === guide.categorySlug)
    .slice(0, 1);
  const relatedIntentPages = intentGuides
    .filter((item) => item.categorySlug === guide.categorySlug)
    .slice(0, 2);
  const relatedUseCases = useCaseGuides
    .filter((item) => item.categorySlug === guide.categorySlug)
    .slice(0, 1);
  const items = [
    category,
    ...relatedBrandPages,
    ...relatedFitPages,
    ...relatedIntentPages,
    ...relatedUseCases
  ].filter(Boolean).slice(0, 6);

  return (
    <HubPage
      eyebrow="Feature guide"
      title={guide.title}
      intro={guide.summary}
      path={guide.href}
      items={items}
    >
      <section className="section">
        <div className="content-card">
          <h2>Feature details to check</h2>
          <p>
            Feature pages help shoppers filter options, but they do not imply hands-on testing or guaranteed
            performance. Confirm the retailer's current product details, size chart, reviews, price, and return window
            before buying.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
