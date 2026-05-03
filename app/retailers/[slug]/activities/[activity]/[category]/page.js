import { notFound } from "next/navigation";
import HubPage from "../../../../../components/HubPage";
import { activityCategoryGuides, activityHubs, categories, retailerActivityCategoryGuides, retailerCategoryGuides, retailerHubs, retailerPriceBandGuides } from "../../../../../lib/activewearData";

function getRetailerActivityCategoryPage(params) {
  return retailerActivityCategoryGuides.find(
    (item) => item.retailerSlug === params.slug && item.activitySlug === params.activity && item.categorySlug === params.category
  );
}

export function generateStaticParams() {
  return retailerActivityCategoryGuides.map((guide) => ({
    slug: guide.retailerSlug,
    activity: guide.activitySlug,
    category: guide.categorySlug
  }));
}

export function generateMetadata({ params }) {
  const page = getRetailerActivityCategoryPage(params);
  if (!page) return {};

  return {
    title: `${page.title} | ActivewearEtc`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function RetailerActivityCategoryPage({ params }) {
  const page = getRetailerActivityCategoryPage(params);
  if (!page) notFound();

  const retailer = retailerHubs.find((item) => item.slug === page.retailerSlug);
  const activity = activityHubs.find((item) => item.slug === page.activitySlug);
  const category = categories.find((item) => item.slug === page.categorySlug);
  const retailerCategoryPage = retailerCategoryGuides.find((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug);
  const activityCategoryPage = activityCategoryGuides.find((item) => item.activitySlug === page.activitySlug && item.categorySlug === page.categorySlug);
  const dealPages = retailerPriceBandGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug)
    .slice(0, 3);
  const siblingPages = retailerActivityCategoryGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.activitySlug === page.activitySlug && item.href !== page.href)
    .slice(0, 2);
  const items = [retailer, activity, category, retailerCategoryPage, activityCategoryPage, ...dealPages, ...siblingPages].filter(Boolean).slice(0, 8);

  return (
    <HubPage eyebrow="Retailer activity category" title={page.title} intro={page.summary} path={page.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Activity shopping guardrails</h2>
          <p>
            These pages organize retailer research around the workout context. ActivewearEtc does not guarantee live
            prices, inventory, support, durability, or fit outcomes; verify the merchant page, size chart, seller details,
            return policy, and current product images before buying.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
