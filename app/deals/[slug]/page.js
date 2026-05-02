import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { editorialHubs, sampleProducts } from "../../lib/activewearData";
import ProductComparison from "../../components/ProductComparison";

export function generateStaticParams() {
  return editorialHubs
    .filter((item) => item.href.startsWith("/deals/"))
    .map((item) => ({ slug: item.href.split("/").pop() }));
}

export default function DealPage({ params }) {
  const page = editorialHubs.find((item) => item.href === `/deals/${params.slug}`);
  if (!page) {
    notFound();
  }

  return (
    <HubPage eyebrow="Deal guide" title={page.title} intro={page.summary} path={page.href} items={[]}>
      <section className="section">
        <ProductComparison products={sampleProducts} />
      </section>
    </HubPage>
  );
}
