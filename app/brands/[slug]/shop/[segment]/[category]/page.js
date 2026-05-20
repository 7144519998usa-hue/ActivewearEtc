import { notFound } from "next/navigation";
import HubPage from "../../../../../components/HubPage";
import { brandCategoryGuides, brandHubs, brandSegmentCategoryGuides, categories, retailerBrandCategoryGuides, segmentCategoryGuides } from "../../../../../lib/activewearData";

function getBrandSegmentCategoryPage(params) {
  return brandSegmentCategoryGuides.find(
    (item) => item.brandSlug === params.slug && item.segmentSlug === params.segment && item.categorySlug === params.category
  );
}

export function generateStaticParams() {
  return brandSegmentCategoryGuides.map((guide) => ({
    slug: guide.brandSlug,
    segment: guide.segmentSlug,
    category: guide.categorySlug
  }));
}

export function generateMetadata({ params }) {
  const page = getBrandSegmentCategoryPage(params);
  if (!page) return {};

  return {
    title: `${page.title}`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function BrandSegmentCategoryPage({ params }) {
  const page = getBrandSegmentCategoryPage(params);
  if (!page) notFound();

  const brand = brandHubs.find((item) => item.slug === page.brandSlug);
  const category = categories.find((item) => item.slug === page.categorySlug);
  const baseSegmentPage = segmentCategoryGuides.find((item) => item.segmentSlug === page.segmentSlug && item.categorySlug === page.categorySlug);
  const brandCategoryPage = brandCategoryGuides.find((item) => item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug);
  const retailerPages = retailerBrandCategoryGuides
    .filter((item) => item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug)
    .slice(0, 3);
  const siblingPages = brandSegmentCategoryGuides
    .filter((item) => item.brandSlug === page.brandSlug && item.segmentSlug === page.segmentSlug && item.href !== page.href)
    .slice(0, 2);
  const items = [brand, category, baseSegmentPage, brandCategoryPage, ...retailerPages, ...siblingPages].filter(Boolean).slice(0, 8);

  return (
    <HubPage eyebrow="Brand shopper segment" title={page.title} intro={page.summary} path={page.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>What to check before buying</h2>
          <p>
            Brand segment pages organize fit, budget, lifestyle, and material preference questions before shoppers choose
            a retailer. ActivewearEtc does not guarantee size availability, price, product results, material claims, or
            current inventory. Check final details on the retailer page before buying.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
