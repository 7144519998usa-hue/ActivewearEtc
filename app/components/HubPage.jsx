import CategoryGrid from "./CategoryGrid";
import DisclosureNotice from "./DisclosureNotice";
import JsonLd from "./JsonLd";
import { collectionPageSchema } from "../lib/structuredData";

export default function HubPage({ eyebrow, title, intro, path, items = [], children }) {
  return (
    <>
      <JsonLd data={collectionPageSchema({ title, description: intro, path, items })} />
      <main className="page-shell">
        <section className="section internal-hero">
          <div className="section-heading">
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
          {items.length ? <CategoryGrid items={items} /> : null}
        </section>
        {children}
        <section className="section">
          <DisclosureNotice />
        </section>
      </main>
    </>
  );
}
