import { notFound } from "next/navigation";
import HubPage from "../../../components/HubPage";
import { activityCategoryGuides, brandCategoryGuides, categories, segmentCategoryGuides, segmentHubs, shoppingGuides } from "../../../lib/activewearData";

function getSegmentGuide(params) {
  return segmentCategoryGuides.find((item) => item.segmentSlug === params.segment && item.slug === params.slug);
}

export function generateStaticParams() {
  return segmentCategoryGuides.map((guide) => ({
    segment: guide.segmentSlug,
    slug: guide.slug
  }));
}

export function generateMetadata({ params }) {
  const guide = getSegmentGuide(params);

  if (!guide) {
    return {};
  }

  return {
    title: `${guide.title} | ActivewearEtc`,
    description: guide.summary,
    alternates: { canonical: guide.href }
  };
}

export default function SegmentCategoryPage({ params }) {
  const guide = getSegmentGuide(params);

  if (!guide) {
    notFound();
  }

  const segment = segmentHubs.find((item) => item.slug === guide.segmentSlug);
  const category = categories.find((item) => item.slug === guide.categorySlug);
  const relatedBrandPages = brandCategoryGuides
    .filter((item) => item.categorySlug === guide.categorySlug)
    .slice(0, 3);
  const relatedActivityPages = activityCategoryGuides
    .filter((item) => item.categorySlug === guide.categorySlug)
    .slice(0, 2);
  const relatedBuyingGuides = shoppingGuides
    .filter((item) => item.tags.some((tag) => guide.tags.map((value) => value.toLowerCase()).includes(tag.toLowerCase())))
    .slice(0, 1)
    .map((item) => ({
      ...item,
      name: item.title,
      href: `/best/${item.slug}`
    }));
  const items = [
    segment,
    category,
    ...relatedBrandPages,
    ...relatedActivityPages,
    ...relatedBuyingGuides
  ].filter(Boolean).slice(0, 6);

  return (
    <HubPage
      eyebrow="Shopping segment"
      title={guide.title}
      intro={guide.summary}
      path={guide.href}
      items={items}
    >
      <section className="section">
        <div className="content-card">
          <h2>Affiliate-readiness checks</h2>
          <p>
            Before this page receives retailer links, every product card should show affiliate disclosure, merchant
            attribution, current-price caution, image source rules, and a clear path to the retailer for final details.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
