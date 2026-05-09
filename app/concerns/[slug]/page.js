import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { careGuides, categories, concernGuides, featureGuides, fitGuides, retailerCategoryGuides } from "../../lib/activewearData";

function getConcernGuide(slug) {
  return concernGuides.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return concernGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getConcernGuide(params.slug);
  if (!guide) return {};

  return {
    title: `${guide.title}`,
    description: guide.summary,
    alternates: { canonical: guide.href }
  };
}

export default function ConcernGuidePage({ params }) {
  const guide = getConcernGuide(params.slug);
  if (!guide) notFound();

  const category = categories.find((item) => item.slug === guide.categorySlug);
  const items = [
    category,
    ...fitGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 1),
    ...featureGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 2),
    ...careGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 2),
    ...retailerCategoryGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 2)
  ].filter(Boolean).slice(0, 7);

  return (
    <HubPage eyebrow="Concern guide" title={guide.title} intro={guide.summary} path={guide.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Concern pages are shopping checks</h2>
          <p>
            ActivewearEtc uses concern pages to organize fit, comfort, care, and return-policy questions. They are not
            promises that a product will solve a concern, so verify product details and retailer policies before buying.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
