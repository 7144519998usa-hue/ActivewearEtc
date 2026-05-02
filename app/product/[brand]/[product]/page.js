import { notFound } from "next/navigation";
import DisclosureNotice from "../../../components/DisclosureNotice";
import ProductComparison from "../../../components/ProductComparison";
import { sampleProducts } from "../../../lib/activewearData";

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
    <main className="page-shell">
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">{product.category}</span>
          <h1>{product.brand} {product.name}</h1>
          <p>{product.bestFor}</p>
        </div>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Brand</th>
              <th>Product</th>
              <th>Price Range</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.brand}</td>
              <td>{product.name}</td>
              <td>{product.priceRange}</td>
              <td>{product.bestFor}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="section">
        <ProductComparison products={sampleProducts.filter((item) => item.href !== product.href)} />
      </section>
      <section className="section">
        <DisclosureNotice />
      </section>
    </main>
  );
}
