import { notFound } from "next/navigation";
import HubPage from "../../../../../../../components/HubPage";
import { brandCategoryGuides, brandHubs, categories, featureGuides, retailerBrandCategoryGuides, retailerBrandFeatureGuides, retailerHubs, retailerPriceBandGuides } from "../../../../../../../lib/activewearData";

function getRetailerBrandFeaturePage(params) {
  return retailerBrandFeatureGuides.find(
    (item) =>
      item.retailerSlug === params.slug &&
      item.brandSlug === params.brand &&
      item.categorySlug === params.category &&
      item.featureSlug === params.feature
  );
}

export function generateStaticParams() {
  return retailerBrandFeatureGuides.map((guide) => ({
    slug: guide.retailerSlug,
    brand: guide.brandSlug,
    category: guide.categorySlug,
    feature: guide.featureSlug
  }));
}

export function generateMetadata({ params }) {
  const page = getRetailerBrandFeaturePage(params);
  if (!page) return {};

  return {
    title: `${page.title}`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function RetailerBrandFeaturePage({ params }) {
  const page = getRetailerBrandFeaturePage(params);
  if (!page) notFound();

  const retailer = retailerHubs.find((item) => item.slug === page.retailerSlug);
  const brand = brandHubs.find((item) => item.slug === page.brandSlug);
  const category = categories.find((item) => item.slug === page.categorySlug);
  const baseFeaturePage = featureGuides.find((item) => item.categorySlug === page.categorySlug && item.featureSlug === page.featureSlug);
  const retailerBrandCategoryPage = retailerBrandCategoryGuides.find((item) => item.retailerSlug === page.retailerSlug && item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug);
  const brandCategoryPage = brandCategoryGuides.find((item) => item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug);
  const dealPages = retailerPriceBandGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug)
    .slice(0, 2);
  const siblingPages = retailerBrandFeatureGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug && item.href !== page.href)
    .slice(0, 3);
  const items = [
    retailer,
    brand,
    category,
    baseFeaturePage,
    retailerBrandCategoryPage,
    brandCategoryPage,
    ...dealPages,
    ...siblingPages
  ].filter(Boolean).slice(0, 9);

  return (
    <HubPage eyebrow="Retailer brand feature guide" title={page.title} intro={page.summary} path={page.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Feature and affiliate guardrails</h2>
          <p>
            These feature pages organize retailer, brand, category, and shopper-filter research without claiming live
            product testing or guaranteed performance. Verify the seller, product details, imagery, size chart, final
            price, inventory, reviews, and return policy on the merchant page before buying.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
