import { notFound } from "next/navigation";
import HubPage from "../../../components/HubPage";
import { categories, dealGuides, priceBandGuides, retailerCategoryGuides, retailerHubs } from "../../../lib/activewearData";

function getRetailerCategoryPage(slug, category) {
  return retailerCategoryGuides.find((item) => item.retailerSlug === slug && item.categorySlug === category);
}

export function generateStaticParams() {
  return retailerCategoryGuides.map((guide) => ({
    slug: guide.retailerSlug,
    category: guide.categorySlug
  }));
}

export function generateMetadata({ params }) {
  const page = getRetailerCategoryPage(params.slug, params.category);
  if (!page) return {};

  return {
    title: `${page.title} | ActivewearEtc`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function RetailerCategoryPage({ params }) {
  const page = getRetailerCategoryPage(params.slug, params.category);
  if (!page) notFound();

  const retailer = retailerHubs.find((item) => item.slug === page.retailerSlug);
  const category = categories.find((item) => item.slug === page.categorySlug);
  const items = [
    retailer,
    category,
    dealGuides.find((item) => item.categorySlug === page.categorySlug),
    ...priceBandGuides.filter((item) => item.categorySlug === page.categorySlug).slice(0, 3),
    ...retailerCategoryGuides.filter((item) => item.categorySlug === page.categorySlug && item.href !== page.href).slice(0, 2)
  ].filter(Boolean).slice(0, 6);

  return (
    <HubPage eyebrow="Retailer category guide" title={page.title} intro={page.summary} path={page.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Affiliate and marketplace safety</h2>
          <p>
            Retailer-category pages should not display prices, ratings, product images, or review language unless the
            data comes from an approved feed or verified merchant source. Always confirm the final product page before purchase.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
