import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { bodyFitGuides, categories, editorialHubs, fitGuides, intentGuides, segmentCategoryGuides } from "../../lib/activewearData";

function getFitPage(slug) {
  return editorialHubs.find((item) => item.href === `/sizes-fit/${slug}`) || fitGuides.find((item) => item.slug === slug) || bodyFitGuides.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  const editorialParams = editorialHubs
    .filter((item) => item.href.startsWith("/sizes-fit/"))
    .map((item) => ({ slug: item.href.split("/").pop() }));
  const guideParams = fitGuides.map((item) => ({ slug: item.slug }));
  const bodyFitParams = bodyFitGuides.map((item) => ({ slug: item.slug }));

  return [...editorialParams, ...guideParams, ...bodyFitParams];
}

export function generateMetadata({ params }) {
  const page = getFitPage(params.slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title}`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function FitPage({ params }) {
  const page = getFitPage(params.slug);
  if (!page) {
    notFound();
  }

  const category = categories.find((item) => item.slug === page.categorySlug);
  const relatedSegmentPages = segmentCategoryGuides
    .filter((item) => item.categorySlug === page.categorySlug)
    .slice(0, 4);
  const relatedIntentPages = intentGuides
    .filter((item) => item.categorySlug === page.categorySlug)
    .slice(0, 2);
  const relatedBodyFitPages = bodyFitGuides
    .filter((item) => item.categorySlug === page.categorySlug && item.href !== page.href)
    .slice(0, 2);
  const items = [
    category,
    ...relatedSegmentPages,
    ...relatedIntentPages,
    ...relatedBodyFitPages,
    ...editorialHubs.filter((item) => item.href !== page.href)
  ].filter(Boolean).slice(0, 6);

  return (
    <HubPage
      eyebrow="Fit guide"
      title={page.title}
      intro={page.summary}
      path={page.href}
      items={items}
    >
      <section className="section">
        <div className="content-card">
          <h2>Fit checks before buying</h2>
          <p>
            Activewear sizing can vary by brand, fabric, compression, rise, inseam, and support level. Use retailer size
            charts and return policies as final decision checks before purchasing.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
