import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { activityCategoryGuides, brandCategoryGuides, categories, fabricGuides, fitGuides, useCaseGuides } from "../../lib/activewearData";

function getUseCaseGuide(slug) {
  return useCaseGuides.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return useCaseGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getUseCaseGuide(params.slug);

  if (!guide) {
    return {};
  }

  return {
    title: `${guide.title}`,
    description: guide.summary,
    alternates: { canonical: guide.href }
  };
}

export default function UseCaseGuidePage({ params }) {
  const guide = getUseCaseGuide(params.slug);

  if (!guide) {
    notFound();
  }

  const category = categories.find((item) => item.slug === guide.categorySlug);
  const relatedActivityPages = activityCategoryGuides
    .filter((item) => item.categorySlug === guide.categorySlug)
    .slice(0, 2);
  const relatedBrandPages = brandCategoryGuides
    .filter((item) => item.categorySlug === guide.categorySlug)
    .slice(0, 2);
  const relatedFabricPages = fabricGuides
    .filter((item) => item.categorySlug === guide.categorySlug)
    .slice(0, 1);
  const relatedFitPages = fitGuides
    .filter((item) => item.categorySlug === guide.categorySlug)
    .slice(0, 1);
  const items = [
    category,
    ...relatedActivityPages,
    ...relatedBrandPages,
    ...relatedFabricPages,
    ...relatedFitPages
  ].filter(Boolean).slice(0, 6);

  return (
    <HubPage
      eyebrow="Use case guide"
      title={guide.title}
      intro={guide.summary}
      path={guide.href}
      items={items}
    >
      <section className="section">
        <div className="content-card">
          <h2>What to check for this use</h2>
          <p>
            Use-case pages should explain shopper tradeoffs without pretending every product was personally tested.
            Final fit, price, size, and availability checks should happen on the retailer page before purchase.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
