import { notFound } from "next/navigation";
import HubPage from "../../../../../../../components/HubPage";
import { brandCategoryGuides, brandHubs, brandSegmentCategoryGuides, categories, retailerBrandCategoryGuides, retailerBrandSegmentCategoryGuides, retailerHubs, retailerSegmentCategoryGuides, segmentCategoryGuides } from "../../../../../../../lib/activewearData";

function getRetailerBrandSegmentCategoryPage(params) {
  return retailerBrandSegmentCategoryGuides.find(
    (item) =>
      item.retailerSlug === params.slug &&
      item.brandSlug === params.brand &&
      item.segmentSlug === params.segment &&
      item.categorySlug === params.category
  );
}

export function generateStaticParams() {
  return retailerBrandSegmentCategoryGuides.map((guide) => ({
    slug: guide.retailerSlug,
    brand: guide.brandSlug,
    segment: guide.segmentSlug,
    category: guide.categorySlug
  }));
}

export function generateMetadata({ params }) {
  const page = getRetailerBrandSegmentCategoryPage(params);
  if (!page) return {};

  return {
    title: `${page.title}`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function RetailerBrandSegmentCategoryPage({ params }) {
  const page = getRetailerBrandSegmentCategoryPage(params);
  if (!page) notFound();

  const retailer = retailerHubs.find((item) => item.slug === page.retailerSlug);
  const brand = brandHubs.find((item) => item.slug === page.brandSlug);
  const category = categories.find((item) => item.slug === page.categorySlug);
  const baseSegmentPage = segmentCategoryGuides.find((item) => item.segmentSlug === page.segmentSlug && item.categorySlug === page.categorySlug);
  const brandSegmentPage = brandSegmentCategoryGuides.find((item) => item.brandSlug === page.brandSlug && item.segmentSlug === page.segmentSlug && item.categorySlug === page.categorySlug);
  const retailerSegmentPage = retailerSegmentCategoryGuides.find((item) => item.retailerSlug === page.retailerSlug && item.segmentSlug === page.segmentSlug && item.categorySlug === page.categorySlug);
  const retailerBrandCategoryPage = retailerBrandCategoryGuides.find((item) => item.retailerSlug === page.retailerSlug && item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug);
  const brandCategoryPage = brandCategoryGuides.find((item) => item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug);
  const siblingPages = retailerBrandSegmentCategoryGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.brandSlug === page.brandSlug && item.segmentSlug === page.segmentSlug && item.href !== page.href)
    .slice(0, 2);
  const items = [
    retailer,
    brand,
    category,
    baseSegmentPage,
    brandSegmentPage,
    retailerSegmentPage,
    retailerBrandCategoryPage,
    brandCategoryPage,
    ...siblingPages
  ].filter(Boolean).slice(0, 9);

  return (
    <HubPage eyebrow="Retailer brand shopper segment" title={page.title} intro={page.summary} path={page.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Affiliate segment guardrails</h2>
          <p>
            These pages organize brand, retailer, segment, and category research without claiming live merchant data.
            Verify seller identity, final price, inventory, size availability, material claims, return policy, product
            imagery, and affiliate disclosures on the merchant page before purchase.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
