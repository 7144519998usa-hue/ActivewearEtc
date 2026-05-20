import { notFound } from "next/navigation";
import HubPage from "../../../../../../../components/HubPage";
import { brandConcernGuides, brandHubs, categories, concernGuides, retailerBrandCategoryGuides, retailerBrandConcernGuides, retailerConcernGuides, retailerHubs, retailerPriceBandGuides } from "../../../../../../../lib/activewearData";

function getRetailerBrandConcernPage(params) {
  return retailerBrandConcernGuides.find(
    (item) =>
      item.retailerSlug === params.slug &&
      item.brandSlug === params.brand &&
      item.categorySlug === params.category &&
      item.concernSlug === params.concern
  );
}

export function generateStaticParams() {
  return retailerBrandConcernGuides.map((guide) => ({
    slug: guide.retailerSlug,
    brand: guide.brandSlug,
    category: guide.categorySlug,
    concern: guide.concernSlug
  }));
}

export function generateMetadata({ params }) {
  const page = getRetailerBrandConcernPage(params);
  if (!page) return {};

  return {
    title: `${page.title}`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function RetailerBrandConcernPage({ params }) {
  const page = getRetailerBrandConcernPage(params);
  if (!page) notFound();

  const retailer = retailerHubs.find((item) => item.slug === page.retailerSlug);
  const brand = brandHubs.find((item) => item.slug === page.brandSlug);
  const category = categories.find((item) => item.slug === page.categorySlug);
  const brandConcernPage = brandConcernGuides.find((item) => item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug && item.concernSlug === page.concernSlug);
  const retailerConcernPage = retailerConcernGuides.find((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug && item.concernSlug === page.concernSlug);
  const baseConcernPage = concernGuides.find((item) => item.categorySlug === page.categorySlug && item.concernSlug === page.concernSlug);
  const retailerBrandCategoryPage = retailerBrandCategoryGuides.find((item) => item.retailerSlug === page.retailerSlug && item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug);
  const dealPages = retailerPriceBandGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug)
    .slice(0, 2);
  const siblingPages = retailerBrandConcernGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug && item.href !== page.href)
    .slice(0, 2);
  const items = [
    retailer,
    brand,
    category,
    brandConcernPage,
    retailerConcernPage,
    baseConcernPage,
    retailerBrandCategoryPage,
    ...dealPages,
    ...siblingPages
  ].filter(Boolean).slice(0, 9);

  return (
    <HubPage eyebrow="Retailer brand concern guide" title={page.title} intro={page.summary} path={page.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>What to check for this concern</h2>
          <p>
            These pages organize brand, retailer, category, and shopper concern research without promising product outcomes.
            Verify seller identity, final price, inventory, size chart, returns, reviews, product imagery, and affiliate
            disclosures on the retailer page before purchase.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
