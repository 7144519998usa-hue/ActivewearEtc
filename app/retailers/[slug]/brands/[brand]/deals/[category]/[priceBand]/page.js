import { notFound } from "next/navigation";
import HubPage from "../../../../../../../components/HubPage";
import { brandCategoryGuides, brandDealGuides, brandHubs, categories, priceBandGuides, retailerBrandCategoryGuides, retailerBrandPriceBandGuides, retailerHubs, retailerPriceBandGuides } from "../../../../../../../lib/activewearData";

function getRetailerBrandPriceBandPage(params) {
  return retailerBrandPriceBandGuides.find(
    (item) =>
      item.retailerSlug === params.slug &&
      item.brandSlug === params.brand &&
      item.categorySlug === params.category &&
      item.priceBandSlug === params.priceBand
  );
}

export function generateStaticParams() {
  return retailerBrandPriceBandGuides.map((guide) => ({
    slug: guide.retailerSlug,
    brand: guide.brandSlug,
    category: guide.categorySlug,
    priceBand: guide.priceBandSlug
  }));
}

export function generateMetadata({ params }) {
  const page = getRetailerBrandPriceBandPage(params);
  if (!page) return {};

  return {
    title: `${page.title}`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function RetailerBrandPriceBandPage({ params }) {
  const page = getRetailerBrandPriceBandPage(params);
  if (!page) notFound();

  const retailer = retailerHubs.find((item) => item.slug === page.retailerSlug);
  const brand = brandHubs.find((item) => item.slug === page.brandSlug);
  const category = categories.find((item) => item.slug === page.categorySlug);
  const retailerBrandCategoryPage = retailerBrandCategoryGuides.find((item) => item.retailerSlug === page.retailerSlug && item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug);
  const brandCategoryPage = brandCategoryGuides.find((item) => item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug);
  const brandDealPage = brandDealGuides.find((item) => item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug);
  const basePriceBandPage = priceBandGuides.find((item) => item.categorySlug === page.categorySlug && item.priceBandSlug === page.priceBandSlug);
  const retailerPriceBandPage = retailerPriceBandGuides.find((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug && item.priceBandSlug === page.priceBandSlug);
  const siblingPages = retailerBrandPriceBandGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug && item.href !== page.href)
    .slice(0, 3);
  const items = [
    retailer,
    brand,
    category,
    retailerBrandCategoryPage,
    brandCategoryPage,
    brandDealPage,
    basePriceBandPage,
    retailerPriceBandPage,
    ...siblingPages
  ].filter(Boolean).slice(0, 9);

  return (
    <HubPage eyebrow="Retailer brand price guide" title={page.title} intro={page.summary} path={page.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Price-band and affiliate disclaimer</h2>
          <p>
            This page is a shopping filter, not a live price or discount guarantee. Verify the merchant page for current
            price, coupon eligibility, stock, seller identity, color, size, shipping, return policy, product imagery, and
            affiliate disclosure before purchase.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
