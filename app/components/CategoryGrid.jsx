import Link from "next/link";

export default function CategoryGrid({ items }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="card">
          <span className="card-kicker">{item.tags?.[0] || item.name || item.title || item.label}</span>
          <h3>{item.name || item.title || item.label}</h3>
          {item.summary ? <p>{item.summary}</p> : null}
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
