import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { retailerBrandCategoryGuides, retailerCategoryGuides, retailerHubs, retailerPriceBandGuides } from "../../lib/activewearData";

function getRetailer(slug) {
  return retailerHubs.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return retailerHubs.map((retailer) => ({ slug: retailer.slug }));
}

export function generateMetadata({ params }) {
  const retailer = getRetailer(params.slug);
  if (!retailer) return {};

  return {
    title: `${retailer.name} Activewear | ActivewearEtc`,
    description: retailer.summary,
    alternates: { canonical: retailer.href }
  };
}

export default function RetailerPage({ params }) {
  const retailer = getRetailer(params.slug);
  if (!retailer) notFound();

  const items = [
    ...retailerCategoryGuides.filter((item) => item.retailerSlug === retailer.slug).slice(0, 8),
    ...retailerBrandCategoryGuides.filter((item) => item.retailerSlug === retailer.slug).slice(0, 4),
    ...retailerPriceBandGuides.filter((item) => item.retailerSlug === retailer.slug).slice(0, 4)
  ];

  return (
    <HubPage eyebrow="Retailer guide" title={`${retailer.name} Activewear`} intro={retailer.summary} path={retailer.href} items={items}>
      <section className="section">
        <div className="content-card">
          <h2>Retailer verification checklist</h2>
          <p>
            Before buying, verify the final merchant page for seller identity, price, stock, shipping, returns, product
            images, size charts, and whether affiliate disclosure applies.
          </p>
        </div>
      </section>
    </HubPage>
  );
}
