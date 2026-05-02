import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { categories } from "../../lib/activewearData";

export function generateStaticParams() {
  return categories
    .filter((item) => item.href.startsWith("/women/"))
    .map((item) => ({ slug: item.href.split("/").pop() }));
}

export function generateMetadata({ params }) {
  const category = categories.find((item) => item.href === `/women/${params.slug}`);
  return category
    ? { title: category.name, description: category.summary, alternates: { canonical: category.href } }
    : {};
}

export default function WomenCategoryPage({ params }) {
  const category = categories.find((item) => item.href === `/women/${params.slug}`);
  if (!category) {
    notFound();
  }

  return (
    <HubPage
      eyebrow="Women's category"
      title={category.name}
      intro={category.summary}
      path={category.href}
      items={categories.filter((item) => item.href !== category.href).slice(0, 6)}
    />
  );
}
