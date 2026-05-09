import { notFound } from "next/navigation";
import HubPage from "../../../../components/HubPage";
import { activityCategoryGuides, brandActivityCategoryGuides, brandActivityGuides, brandCategoryGuides, brandHubs, comparisonGuides } from "../../../../lib/activewearData";

function getBrandActivityGuide(params) {
  return brandActivityGuides.find((item) => item.brandSlug === params.slug && item.activitySlug === params.activity);
}

export function generateStaticParams() {
  return brandActivityGuides.map((guide) => ({
    slug: guide.brandSlug,
    activity: guide.activitySlug
  }));
}

export function generateMetadata({ params }) {
  const guide = getBrandActivityGuide(params);

  if (!guide) {
    return {};
  }

  return {
    title: `${guide.title}`,
    description: guide.summary,
    alternates: { canonical: guide.href }
  };
}

export default function BrandActivityPage({ params }) {
  const guide = getBrandActivityGuide(params);

  if (!guide) {
    notFound();
  }

  const brand = brandHubs.find((item) => item.slug === guide.brandSlug);
  const brandCategoryCards = brandCategoryGuides
    .filter((item) => item.brandSlug === guide.brandSlug)
    .slice(0, 4);
  const activityCategoryCards = activityCategoryGuides
    .filter((item) => item.activitySlug === guide.activitySlug)
    .slice(0, 3);
  const brandActivityCategoryCards = brandActivityCategoryGuides
    .filter((item) => item.brandSlug === guide.brandSlug && item.activitySlug === guide.activitySlug)
    .slice(0, 4);
  const comparisonCards = comparisonGuides
    .filter((item) => item.relatedHrefs.includes(brand.href))
    .slice(0, 1)
    .map((item) => ({
      ...item,
      name: item.title,
      href: `/compare/${item.slug}`
    }));
  const items = [
    brand,
    ...brandActivityCategoryCards,
    ...brandCategoryCards,
    ...activityCategoryCards,
    ...comparisonCards
  ].filter(Boolean).slice(0, 8);

  return (
    <HubPage
      eyebrow="Brand activity guide"
      title={guide.title}
      intro={guide.summary}
      path={guide.href}
      items={items}
    >
      <section className="section">
        <div className="content-card">
          <h2>What to verify before shopping</h2>
          <p>
            Match the brand's activity line to the actual workout, then verify size range, fabric notes, return policy,
            current merchant availability, and final price on the retailer page.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
