import Link from "next/link";

export default function CategoryGrid({ items }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="card">
          <span className="eyebrow">{item.name || item.title}</span>
          <h3>{item.name || item.title}</h3>
          <p>{item.summary}</p>
          {item.tags ? (
            <div className="tag-row">
              {item.tags.slice(0, 3).map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </Link>
      ))}
    </div>
  );
}
