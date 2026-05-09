import CategoryGrid from "../components/CategoryGrid";
import { categories } from "../lib/activewearData";

export const metadata = {
  title: "Activewear Categories",
  description: "Browse ActivewearEtc categories including leggings, sports bras, workout tops, joggers, hoodies, shoes, and accessories.",
  alternates: { canonical: "/categories" }
};

export default function CategoriesPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Categories</span>
          <h1>Browse activewear categories.</h1>
          <p>Use this conventional category index if you prefer product type first.</p>
        </div>
        <CategoryGrid items={categories} />
      </section>
    </main>
  );
}
