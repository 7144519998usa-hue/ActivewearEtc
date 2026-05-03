import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { careGuides, categories, fabricGuides, fitGuides, priceBandGuides, retailerCategoryGuides } from "../../lib/activewearData";

function getCareGuide(slug) {
  return careGuides.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return careGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getCareGuide(params.slug);
  if (!guide) return {};

  return {
    title: `${guide.title} | ActivewearEtc`,
    description: guide.summary,
    alternates: { canonical: guide.href }
  };
}

export default function CareGuidePage({ params }) {
  const guide = getCareGuide(params.slug);
  if (!guide) notFound();

  const category = categories.find((item) => item.slug === guide.categorySlug);
  const items = [
    category,
    ...fabricGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 2),
    ...fitGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 1),
    ...priceBandGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 1),
    ...retailerCategoryGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 2)
  ].filter(Boolean).slice(0, 7);

  return (
    <HubPage eyebrow="Care guide" title={guide.title} intro={guide.summary} path={guide.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Care label comes first</h2>
          <p>
            Activewear care guidance is general shopping education. Always follow the specific product care label,
            retailer instructions, and material notes before washing, drying, treating stains, or packing for travel.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
