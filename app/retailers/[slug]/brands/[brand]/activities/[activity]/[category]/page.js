import { notFound } from "next/navigation";
import HubPage from "../../../../../../../components/HubPage";
import { activityCategoryGuides, activityHubs, brandActivityCategoryGuides, brandCategoryGuides, brandHubs, categories, retailerActivityCategoryGuides, retailerBrandActivityCategoryGuides, retailerBrandCategoryGuides, retailerHubs, retailerPriceBandGuides } from "../../../../../../../lib/activewearData";

function getRetailerBrandActivityCategoryPage(params) {
  return retailerBrandActivityCategoryGuides.find(
    (item) =>
      item.retailerSlug === params.slug &&
      item.brandSlug === params.brand &&
      item.activitySlug === params.activity &&
      item.categorySlug === params.category
  );
}

export function generateStaticParams() {
  return retailerBrandActivityCategoryGuides.map((guide) => ({
    slug: guide.retailerSlug,
    brand: guide.brandSlug,
    activity: guide.activitySlug,
    category: guide.categorySlug
  }));
}

export function generateMetadata({ params }) {
  const page = getRetailerBrandActivityCategoryPage(params);
  if (!page) return {};

  return {
    title: `${page.title} | ActivewearEtc`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function RetailerBrandActivityCategoryPage({ params }) {
  const page = getRetailerBrandActivityCategoryPage(params);
  if (!page) notFound();

  const retailer = retailerHubs.find((item) => item.slug === page.retailerSlug);
  const brand = brandHubs.find((item) => item.slug === page.brandSlug);
  const activity = activityHubs.find((item) => item.slug === page.activitySlug);
  const category = categories.find((item) => item.slug === page.categorySlug);
  const retailerBrandCategoryPage = retailerBrandCategoryGuides.find((item) => item.retailerSlug === page.retailerSlug && item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug);
  const retailerActivityCategoryPage = retailerActivityCategoryGuides.find((item) => item.retailerSlug === page.retailerSlug && item.activitySlug === page.activitySlug && item.categorySlug === page.categorySlug);
  const brandActivityCategoryPage = brandActivityCategoryGuides.find((item) => item.brandSlug === page.brandSlug && item.activitySlug === page.activitySlug && item.categorySlug === page.categorySlug);
  const brandCategoryPage = brandCategoryGuides.find((item) => item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug);
  const activityCategoryPage = activityCategoryGuides.find((item) => item.activitySlug === page.activitySlug && item.categorySlug === page.categorySlug);
  const dealPages = retailerPriceBandGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug)
    .slice(0, 2);
  const siblingPages = retailerBrandActivityCategoryGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.brandSlug === page.brandSlug && item.href !== page.href)
    .slice(0, 2);
  const items = [
    retailer,
    brand,
    activity,
    category,
    retailerBrandCategoryPage,
    retailerActivityCategoryPage,
    brandActivityCategoryPage,
    brandCategoryPage,
    activityCategoryPage,
    ...dealPages,
    ...siblingPages
  ].filter(Boolean).slice(0, 9);

  return (
    <HubPage eyebrow="Retailer brand activity guide" title={page.title} intro={page.summary} path={page.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Affiliate and product-data guardrails</h2>
          <p>
            These pages prepare ActivewearEtc for approved affiliate feeds without pretending to have live marketplace data.
            Confirm merchant availability, price, seller identity, review context, size chart, return policy, and current
            product imagery before purchase.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
