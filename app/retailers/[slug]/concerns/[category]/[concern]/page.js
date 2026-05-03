import { notFound } from "next/navigation";
import HubPage from "../../../../../components/HubPage";
import { categories, concernGuides, retailerCategoryGuides, retailerConcernGuides, retailerHubs, retailerPriceBandGuides } from "../../../../../lib/activewearData";

function getRetailerConcernPage(params) {
  return retailerConcernGuides.find(
    (item) => item.retailerSlug === params.slug && item.categorySlug === params.category && item.concernSlug === params.concern
  );
}

export function generateStaticParams() {
  return retailerConcernGuides.map((guide) => ({
    slug: guide.retailerSlug,
    category: guide.categorySlug,
    concern: guide.concernSlug
  }));
}

export function generateMetadata({ params }) {
  const page = getRetailerConcernPage(params);
  if (!page) return {};

  return {
    title: `${page.title} | ActivewearEtc`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function RetailerConcernPage({ params }) {
  const page = getRetailerConcernPage(params);
  if (!page) notFound();

  const retailer = retailerHubs.find((item) => item.slug === page.retailerSlug);
  const category = categories.find((item) => item.slug === page.categorySlug);
  const retailerCategoryPage = retailerCategoryGuides.find((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug);
  const baseConcernPage = concernGuides.find((item) => item.categorySlug === page.categorySlug && item.concernSlug === page.concernSlug);
  const dealPages = retailerPriceBandGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug)
    .slice(0, 3);
  const siblingConcerns = retailerConcernGuides
    .filter((item) => item.retailerSlug === page.retailerSlug && item.categorySlug === page.categorySlug && item.href !== page.href)
    .slice(0, 2);
  const items = [retailer, category, retailerCategoryPage, baseConcernPage, ...dealPages, ...siblingConcerns].filter(Boolean).slice(0, 8);

  return (
    <HubPage eyebrow="Retailer concern guide" title={page.title} intro={page.summary} path={page.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Retailer concern guardrails</h2>
          <p>
            Retailer concern pages help shoppers organize fit and comfort questions before clicking out. They do not
            guarantee a product outcome; verify seller details, reviews, size charts, current price, returns, and product-page images.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
