import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { activityHubs, brandHubs, categories, retailerHubs } from "../../lib/activewearData";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }) {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) return {};

  return {
    title: category.name,
    description: category.summary,
    alternates: { canonical: category.href }
  };
}

export default function CategoryPage({ params }) {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) notFound();

  const items = [
    category,
    ...activityHubs,
    ...brandHubs,
    ...retailerHubs
  ].slice(0, 9);

  return (
    <HubPage
      eyebrow="Category shortcut"
      title={category.name}
      intro={category.summary}
      path={`/categories/${category.slug}`}
      items={items}
    />
  );
}
