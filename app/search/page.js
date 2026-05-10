import CategoryGrid from "../components/CategoryGrid";
import DisclosureNotice from "../components/DisclosureNotice";
import { getSearchResults } from "../lib/searchData";

export const metadata = {
  title: "Search ActivewearEtc",
  description: "Search ActivewearEtc guides by product type, brand, retailer, activity, fit concern, budget, and style.",
  alternates: { canonical: "/search" }
};

export default function SearchPage({ searchParams }) {
  const query = searchParams?.q || "";
  const results = getSearchResults(query);

  return (
    <main className="page-shell">
      <section className="section internal-hero search-hero">
        <div className="section-heading">
          <span className="eyebrow">Search</span>
          <h1>Search activewear by fit, brand, activity, or retailer.</h1>
          <p>
            Search by category, brand, activity, fit concern, budget, retailer, or shopper intent. Results stay on
            ActivewearEtc until merchant affiliate links are approved and clearly disclosed.
          </p>
        </div>
        <form className="search-form" action="/search">
          <label htmlFor="q">Search ActivewearEtc</label>
          <div className="search-row">
            <input id="q" name="q" type="search" placeholder="Try leggings with pockets" defaultValue={query} />
            <button className="primary-button" type="submit">Search</button>
          </div>
        </form>
      </section>
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">{query ? "Results" : "Popular starting points"}</span>
          <h2>{query ? `Results for "${query}"` : "Start with these high-intent paths."}</h2>
          <p>{results.length ? `${results.length} matching guide paths found.` : "No exact matches yet. Try a broader product type, activity, or brand."}</p>
        </div>
        {results.length ? <CategoryGrid items={results} /> : null}
      </section>
      <section className="section">
        <DisclosureNotice />
      </section>
    </main>
  );
}
