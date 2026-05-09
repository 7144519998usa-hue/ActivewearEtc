import { notFound } from "next/navigation";
import HubPage from "../../../../../components/HubPage";
import { categories, priceBandGuides, retailerCategoryGuides, retailerHubs, retailerPriceBandGuides } from "../../../../../lib/activewearData";

function getRetailerPriceBandPage(params) {
  return retailerPriceBandGuides.find(
    (item) => item.retailerSlug === params.slug && item.categorySlug === params.category && item.priceBandSlug === params.priceBand
  );
}

export function generateStaticParams() {
  return retailerPriceBandGuides.map((guide) => ({
    slug: guide.retailerSlug,
    category: guide.categorySlug,
    priceBand: guide.priceBandSlug
  }));
}

export function generateMetadata({ params }) {
  const page = getRetailerPriceBandPage(params);
  if (!page) return {};

  return {
    title: `${page.title}`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function RetailerPriceBandPage({ params }) {
  const page = getRetailerPriceBandPage(params);
  if (!page) notFound();

  const retailer = retailerHubs.find((item) => item.slug === page.retailerSlug);
  const category = categories.find((item) => item.slug === page.categorySlug);
  const retailerCategoryPage = retailerCategoryGuides.find((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug);
  const basePriceBandPage = priceBandGuides.find((item) => item.categorySlug === page.categorySlug && item.priceBandSlug === page.priceBandSlug);
  const siblingPricePages = retailerPriceBandGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug && item.href !== page.href)
    .slice(0, 3);
  const items = [retailer, category, retailerCategoryPage, basePriceBandPage, ...siblingPricePages].filter(Boolean).slice(0, 7);

  return (
    <HubPage eyebrow="Retailer price guide" title={page.title} intro={page.summary} path={page.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Price-band disclaimer</h2>
          <p>
            Retailer price-band pages are shopping filters, not live price promises. Verify the final merchant page for
            current price, coupons, stock, seller details, shipping, returns, color, size, and affiliate disclosure before purchase.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
