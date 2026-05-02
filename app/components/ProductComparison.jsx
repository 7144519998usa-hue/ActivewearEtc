import Link from "next/link";

export default function ProductComparison({ products }) {
  return (
    <div className="grid">
      {products.map((product) => (
        <article className="card product-card" key={product.href}>
          <div className="product-art" aria-hidden="true" />
          <div>
            <span className="eyebrow">{product.badge}</span>
            <h3>{product.brand} {product.name}</h3>
            <p>{product.bestFor}</p>
            <div className="tag-row">
              <span className="tag">{product.category}</span>
              <span className="tag">{product.priceRange}</span>
            </div>
          </div>
          <Link href={product.href} className="primary-button">
            Check Best Offer
          </Link>
        </article>
      ))}
    </div>
  );
}
