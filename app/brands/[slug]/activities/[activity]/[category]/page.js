import { notFound } from "next/navigation";
import HubPage from "../../../../../components/HubPage";
import { activityCategoryGuides, brandActivityCategoryGuides, brandActivityGuides, brandCategoryGuides, brandHubs, categories, retailerBrandCategoryGuides } from "../../../../../lib/activewearData";

function getBrandActivityCategoryGuide(params) {
  return brandActivityCategoryGuides.find(
    (item) => item.brandSlug === params.slug && item.activitySlug === params.activity && item.categorySlug === params.category
  );
}

export function generateStaticParams() {
  return brandActivityCategoryGuides.map((guide) => ({
    slug: guide.brandSlug,
    activity: guide.activitySlug,
    category: guide.categorySlug
  }));
}

export function generateMetadata({ params }) {
  const guide = getBrandActivityCategoryGuide(params);
  if (!guide) return {};

  return {
    title: `${guide.title}`,
    description: guide.summary,
    alternates: { canonical: guide.href }
  };
}

export default function BrandActivityCategoryPage({ params }) {
  const guide = getBrandActivityCategoryGuide(params);
  if (!guide) notFound();

  const brand = brandHubs.find((item) => item.slug === guide.brandSlug);
  const category = categories.find((item) => item.slug === guide.categorySlug);
  const brandActivityPage = brandActivityGuides.find((item) => item.brandSlug === guide.brandSlug && item.activitySlug === guide.activitySlug);
  const brandCategoryPage = brandCategoryGuides.find((item) => item.brandSlug === guide.brandSlug && item.categorySlug === guide.categorySlug);
  const activityCategoryPage = activityCategoryGuides.find((item) => item.activitySlug === guide.activitySlug && item.categorySlug === guide.categorySlug);
  const retailerPages = retailerBrandCategoryGuides
    .filter((item) => item.brandSlug === guide.brandSlug && item.categorySlug === guide.categorySlug)
    .slice(0, 3);
  const items = [brand, category, brandActivityPage, brandCategoryPage, activityCategoryPage, ...retailerPages].filter(Boolean).slice(0, 7);

  return (
    <HubPage eyebrow="Brand activity category" title={guide.title} intro={guide.summary} path={guide.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Shopping safety checks</h2>
          <p>
            Use this page to narrow brand, activity, and category context before clicking through. Verify retailer
            availability, final price, color, size, return policy, and product details on the merchant page before purchase.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
