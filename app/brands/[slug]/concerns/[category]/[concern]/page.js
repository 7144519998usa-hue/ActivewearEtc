import { notFound } from "next/navigation";
import HubPage from "../../../../../components/HubPage";
import { brandCategoryGuides, brandConcernGuides, brandHubs, categories, concernGuides, retailerBrandCategoryGuides } from "../../../../../lib/activewearData";

function getBrandConcernPage(params) {
  return brandConcernGuides.find(
    (item) => item.brandSlug === params.slug && item.categorySlug === params.category && item.concernSlug === params.concern
  );
}

export function generateStaticParams() {
  return brandConcernGuides.map((guide) => ({
    slug: guide.brandSlug,
    category: guide.categorySlug,
    concern: guide.concernSlug
  }));
}

export function generateMetadata({ params }) {
  const page = getBrandConcernPage(params);
  if (!page) return {};

  return {
    title: `${page.title}`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function BrandConcernPage({ params }) {
  const page = getBrandConcernPage(params);
  if (!page) notFound();

  const brand = brandHubs.find((item) => item.slug === page.brandSlug);
  const category = categories.find((item) => item.slug === page.categorySlug);
  const brandCategoryPage = brandCategoryGuides.find((item) => item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug);
  const baseConcernPage = concernGuides.find((item) => item.categorySlug === page.categorySlug && item.concernSlug === page.concernSlug);
  const retailerPages = retailerBrandCategoryGuides
    .filter((item) => item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug)
    .slice(0, 3);
  const siblingConcerns = brandConcernGuides
    .filter((item) => item.brandSlug === page.brandSlug && item.categorySlug === page.categorySlug && item.href !== page.href)
    .slice(0, 2);
  const items = [brand, category, brandCategoryPage, baseConcernPage, ...retailerPages, ...siblingConcerns].filter(Boolean).slice(0, 8);

  return (
    <HubPage eyebrow="Brand concern guide" title={page.title} intro={page.summary} path={page.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Fit details to check</h2>
          <p>
            Brand concern pages help organize questions about fit, comfort, fabric, care, and returns. They do not
            guarantee that any product solves a concern, so check product details, size charts, reviews, and return policies on the retailer page.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
