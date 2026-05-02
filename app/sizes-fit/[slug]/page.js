import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import { editorialHubs } from "../../lib/activewearData";

export function generateStaticParams() {
  return editorialHubs
    .filter((item) => item.href.startsWith("/sizes-fit/"))
    .map((item) => ({ slug: item.href.split("/").pop() }));
}

export default function FitPage({ params }) {
  const page = editorialHubs.find((item) => item.href === `/sizes-fit/${params.slug}`);
  if (!page) {
    notFound();
  }

  return (
    <HubPage
      eyebrow="Fit guide"
      title={page.title}
      intro={page.summary}
      path={page.href}
      items={editorialHubs.filter((item) => item.href !== page.href)}
    />
  );
}
