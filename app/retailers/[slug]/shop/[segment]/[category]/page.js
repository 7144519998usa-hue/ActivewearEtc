import { notFound } from "next/navigation";
import HubPage from "../../../../../components/HubPage";
import { categories, retailerCategoryGuides, retailerHubs, retailerPriceBandGuides, retailerSegmentCategoryGuides, segmentCategoryGuides } from "../../../../../lib/activewearData";

function getRetailerSegmentCategoryPage(params) {
  return retailerSegmentCategoryGuides.find(
    (item) => item.retailerSlug === params.slug && item.segmentSlug === params.segment && item.categorySlug === params.category
  );
}

export function generateStaticParams() {
  return retailerSegmentCategoryGuides.map((guide) => ({
    slug: guide.retailerSlug,
    segment: guide.segmentSlug,
    category: guide.categorySlug
  }));
}

export function generateMetadata({ params }) {
  const page = getRetailerSegmentCategoryPage(params);
  if (!page) return {};

  return {
    title: `${page.title}`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function RetailerSegmentCategoryPage({ params }) {
  const page = getRetailerSegmentCategoryPage(params);
  if (!page) notFound();

  const retailer = retailerHubs.find((item) => item.slug === page.retailerSlug);
  const category = categories.find((item) => item.slug === page.categorySlug);
  const baseSegmentPage = segmentCategoryGuides.find((item) => item.segmentSlug === page.segmentSlug && item.categorySlug === page.categorySlug);
  const retailerCategoryPage = retailerCategoryGuides.find((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug);
  const pricePages = retailerPriceBandGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug)
    .slice(0, 3);
  const siblingPages = retailerSegmentCategoryGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.segmentSlug === page.segmentSlug && item.href !== page.href)
    .slice(0, 2);
  const items = [retailer, category, baseSegmentPage, retailerCategoryPage, ...pricePages, ...siblingPages].filter(Boolean).slice(0, 8);

  return (
    <HubPage eyebrow="Retailer shopper segment" title={page.title} intro={page.summary} path={page.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Segment shopping guardrails</h2>
          <p>
            Segment pages help shoppers narrow activewear by fit, budget, lifestyle, or material preference. ActivewearEtc
            does not guarantee retailer inventory, size availability, pricing, material claims, or product outcomes; verify
            the final merchant page before purchase.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
