import { notFound } from "next/navigation";
import AffiliateLink from "../../../components/AffiliateLink";
import DisclosureNotice from "../../../components/DisclosureNotice";
import JsonLd from "../../../components/JsonLd";
import ProductComparison from "../../../components/ProductComparison";
import { sampleProducts } from "../../../lib/activewearData";
import { productSchema } from "../../../lib/structuredData";

export function generateStaticParams() {
  return sampleProducts.map((product) => {
    const [, , brand, productSlug] = product.href.split("/");
    return { brand, product: productSlug };
  });
}

export function generateMetadata({ params }) {
  const product = sampleProducts.find((item) => item.href === `/product/${params.brand}/${params.product}`);
  return product
    ? {
        title: `${product.brand} ${product.name}`,
        description: `${product.brand} ${product.name} comparison page with visible price range, use case, and retailer disclosure.`,
        alternates: { canonical: product.href }
      }
    : {};
}

export default function ProductPage({ params }) {
  const product = sampleProducts.find((item) => item.href === `/product/${params.brand}/${params.product}`);
  if (!product) {
    notFound();
  }

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <main className="page-shell">
        <section className="section internal-hero product-hero">
          <div className="section-heading">
            <span className="eyebrow">{product.category}</span>
            <h1>{product.brand} {product.name}</h1>
            <p>{product.bestFor}</p>
            <div className="button-row">
              <AffiliateLink product={product} />
              <a className="secondary-button" href="/about/price-and-availability">
                Price disclaimer
              </a>
            </div>
          </div>
          <div className="product-summary-panel">
            <div className="product-art product-art-large" aria-hidden="true">
              <span>{product.badge}</span>
            </div>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Product</th>
                  <th>Merchant</th>
                  <th>Price Range</th>
                  <th>Last Reviewed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{product.brand}</td>
                  <td>{product.name}</td>
                  <td>{product.merchant}</td>
                  <td>{product.priceRange}</td>
                  <td>{product.lastReviewed}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="section">
          <div className="content-card">
            <h2>Product and affiliate guardrails</h2>
            <p>{product.reviewPolicy}</p>
            <p>{product.imageAttribution}</p>
            <p>
              Prices, availability, sizes, colors, shipping, and returns can change. Verify every detail on the merchant
              site before buying.
            </p>
          </div>
        </section>
        <section className="section">
          <ProductComparison products={sampleProducts.filter((item) => item.href !== product.href)} />
        </section>
        <section className="section">
          <DisclosureNotice />
        </section>
      </main>
    </>
  );
}
