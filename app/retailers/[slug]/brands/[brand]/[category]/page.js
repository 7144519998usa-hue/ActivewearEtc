import { notFound } from "next/navigation";
import HubPage from "../../../../../components/HubPage";
import { brandCategoryGuides, brandHubs, categories, priceBandGuides, retailerBrandCategoryGuides, retailerCategoryGuides, retailerHubs } from "../../../../../lib/activewearData";

function getRetailerBrandCategoryPage(slug, brand, category) {
  return retailerBrandCategoryGuides.find((item) => item.retailerSlug === slug && item.brandSlug === brand && item.categorySlug === category);
}

export function generateStaticParams() {
  return retailerBrandCategoryGuides.map((guide) => ({
    slug: guide.retailerSlug,
    brand: guide.brandSlug,
    category: guide.categorySlug
  }));
}

export function generateMetadata({ params }) {
  const page = getRetailerBrandCategoryPage(params.slug, params.brand, params.category);
  if (!page) return {};

  return {
    title: `${page.title}`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function RetailerBrandCategoryPage({ params }) {
  const page = getRetailerBrandCategoryPage(params.slug, params.brand, params.category);
  if (!page) notFound();

  const retailer = retailerHubs.find((item) => item.slug === page.retailerSlug);
  const brand = brandHubs.find((item) => item.slug === page.brandSlug);
  const category = categories.find((item) => item.slug === page.categorySlug);
  const items = [
    retailer,
    brand,
    category,
    retailerCategoryGuides.find((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug),
    brandCategoryGuides.find((item) => item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug),
    ...priceBandGuides.filter((item) => item.categorySlug === page.categorySlug).slice(0, 2)
  ].filter(Boolean).slice(0, 6);

  return (
    <HubPage eyebrow="Retailer brand guide" title={page.title} intro={page.summary} path={page.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Affiliate feed readiness</h2>
          <p>
            These pages are prepared for future approved affiliate feeds. Until a verified feed supplies product data,
            avoid displaying live prices, star ratings, review summaries, or product images as if they are current.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
