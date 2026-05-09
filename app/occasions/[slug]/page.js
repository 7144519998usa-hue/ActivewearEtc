import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { categories, occasionGuides, priceBandGuides, retailerCategoryGuides, useCaseGuides } from "../../lib/activewearData";

function getOccasionGuide(slug) {
  return occasionGuides.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return occasionGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getOccasionGuide(params.slug);
  if (!guide) return {};

  return {
    title: `${guide.title}`,
    description: guide.summary,
    alternates: { canonical: guide.href }
  };
}

export default function OccasionGuidePage({ params }) {
  const guide = getOccasionGuide(params.slug);
  if (!guide) notFound();

  const category = categories.find((item) => item.slug === guide.categorySlug);
  const items = [
    category,
    ...useCaseGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 2),
    ...priceBandGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 2),
    ...retailerCategoryGuides.filter((item) => item.categorySlug === guide.categorySlug).slice(0, 2)
  ].filter(Boolean).slice(0, 7);

  return (
    <HubPage eyebrow="Occasion guide" title={guide.title} intro={guide.summary} path={guide.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Context before checkout</h2>
          <p>
            Occasion pages help narrow shopper intent, but final decisions should still be checked against retailer
            size charts, current availability, price, shipping, returns, care details, and product-page images.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
