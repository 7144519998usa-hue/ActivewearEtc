import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { activityHubs, categories } from "../../lib/activewearData";

export function generateStaticParams() {
  return activityHubs.map((item) => ({ activity: item.slug }));
}

export default function ActivityPage({ params }) {
  const activity = activityHubs.find((item) => item.slug === params.activity);
  if (!activity) {
    notFound();
  }

  return (
    <HubPage
      eyebrow="Activity"
      title={`${activity.name} activewear`}
      intro={activity.summary}
      path={activity.href}
      items={categories.filter((item) => item.tags?.includes(activity.slug) || item.summary.toLowerCase().includes(activity.slug)).slice(0, 6)}
    />
  );
}
