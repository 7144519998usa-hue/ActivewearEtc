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
        description: `${product.brand} ${product.name} shopping guide with use-case notes and a current Amazon price check link.`,
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
                Price and availability
              </a>
            </div>
          </div>
          <div className="product-summary-panel">
            <div className="product-art product-art-large">
              {product.imageUrl ? (
                <img
                  alt={product.imageAlt || `${product.brand} ${product.name}`}
                  className="product-image"
                  decoding="async"
                  loading="eager"
                  src={product.imageUrl}
                />
              ) : null}
              <span>{product.badge}</span>
            </div>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Product</th>
                  <th>Merchant</th>
                  <th>Price</th>
                  <th>Last checked</th>
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
            <h2>Before you buy</h2>
            <p>
              We link you to the merchant so you can check the current price, available sizes, colors, shipping, and
              return details directly before buying.
            </p>
            <p>ActivewearEtc may earn a commission if you click a merchant link and make a purchase.</p>
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
