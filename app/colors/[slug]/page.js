import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { brandCategoryGuides, categories, colorGuides, featureGuides, fitGuides, useCaseGuides } from "../../lib/activewearData";

function getColorGuide(slug) {
  return colorGuides.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return colorGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getColorGuide(params.slug);
  if (!guide) return {};

  return {
    title: `${guide.title}`,
    description: guide.summary,
    alternates: { canonical: guide.href }
  };
}

export default function ColorGuidePage({ params }) {
  const guide = getColorGuide(params.slug);
  if (!guide) notFound();

  const category = categories.find((item) => item.slug === guide.categorySlug);
  const relatedBrandPages = brandCategoryGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 2);
  const relatedFeaturePages = featureGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 2);
  const relatedFitPages = fitGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 1);
  const relatedUseCases = useCaseGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 1);
  const items = [category, ...relatedBrandPages, ...relatedFeaturePages, ...relatedFitPages, ...relatedUseCases].filter(Boolean).slice(0, 6);

  return (
    <HubPage eyebrow="Color guide" title={guide.title} intro={guide.summary} path={guide.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Color details to check</h2>
          <p>
            Color pages help shoppers compare style filters, but retailer color names, shades, sizes, photos, prices,
            and availability can change. Confirm final product details on the retailer page before purchasing.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
