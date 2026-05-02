import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { categories, dealGuides, editorialHubs, sampleProducts, segmentCategoryGuides } from "../../lib/activewearData";
import ProductComparison from "../../components/ProductComparison";

function getDealPage(slug) {
  return editorialHubs.find((item) => item.href === `/deals/${slug}`) || dealGuides.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  const editorialParams = editorialHubs
    .filter((item) => item.href.startsWith("/deals/"))
    .map((item) => ({ slug: item.href.split("/").pop() }));
  const generatedParams = dealGuides.map((item) => ({ slug: item.slug }));

  return [...editorialParams, ...generatedParams];
}

export function generateMetadata({ params }) {
  const page = getDealPage(params.slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | ActivewearEtc`,
    description: page.summary,
    alternates: { canonical: page.href }
  };
}

export default function DealPage({ params }) {
  const page = getDealPage(params.slug);
  if (!page) {
    notFound();
  }

  const category = categories.find((item) => item.slug === page.categorySlug);
  const relatedSegmentPages = segmentCategoryGuides
    .filter((item) => item.categorySlug === page.categorySlug)
    .slice(0, 5);
  const items = [
    category,
    ...relatedSegmentPages,
    ...dealGuides.filter((item) => item.slug !== page.slug)
  ].filter(Boolean).slice(0, 6);

  return (
    <HubPage eyebrow="Deal guide" title={page.title} intro={page.summary} path={page.href} items={items}>
      <section className="section">
        <ProductComparison products={sampleProducts} />
      </section>
      <section className="section">
        <div className="content-card">
          <h2>Price and affiliate safety</h2>
          <p>
            Deal pages should never promise a live discount unless the merchant feed confirms it. Prices, coupons, colors,
            sizes, stock status, and shipping rules can change quickly, so shoppers should verify final details on the
            retailer page before purchase.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
