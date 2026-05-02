import { notFound } from "next/navigation";
import HubPage from "../../../components/HubPage";
import { categories } from "../../../lib/activewearData";

export function generateStaticParams() {
  return categories
    .filter((item) => item.href.startsWith("/activities/"))
    .map((item) => {
      const [, , activity, slug] = item.href.split("/");
      return { activity, slug };
    });
}

export default function ActivityCategoryPage({ params }) {
  const category = categories.find((item) => item.href === `/activities/${params.activity}/${params.slug}`);
  if (!category) {
    notFound();
  }

  return (
    <HubPage
      eyebrow="Activity category"
      title={category.name}
      intro={category.summary}
      path={category.href}
      items={categories.filter((item) => item.href !== category.href).slice(0, 6)}
    />
  );
}
