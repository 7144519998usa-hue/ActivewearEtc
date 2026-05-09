import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { categories, dealGuides, fabricGuides, fitGuides, seasonalGuides, useCaseGuides } from "../../lib/activewearData";

function getSeasonalGuide(slug) {
  return seasonalGuides.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return seasonalGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getSeasonalGuide(params.slug);

  if (!guide) {
    return {};
  }

  return {
    title: `${guide.title}`,
    description: guide.summary,
    alternates: { canonical: guide.href }
  };
}

export default function SeasonalGuidePage({ params }) {
  const guide = getSeasonalGuide(params.slug);

  if (!guide) {
    notFound();
  }

  const category = categories.find((item) => item.slug === guide.categorySlug);
  const relatedDeals = dealGuides
    .filter((item) => item.categorySlug === guide.categorySlug)
    .slice(0, 1);
  const relatedUseCases = useCaseGuides
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
    ...relatedDeals,
    ...relatedUseCases,
    ...relatedFabricPages,
    ...relatedFitPages
  ].filter(Boolean).slice(0, 6);

  return (
    <HubPage
      eyebrow="Seasonal guide"
      title={guide.title}
      intro={guide.summary}
      path={guide.href}
      items={items}
    >
      <section className="section">
        <div className="content-card">
          <h2>Seasonal shopping guardrails</h2>
          <p>
            Seasonal pages are evergreen planning guides, not live sale trackers. Prices, availability, shipping cutoff
            dates, colors, and return windows can change quickly, so final checks belong on the retailer page.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
