import HubPage from "../components/HubPage";
import { editorialHubs } from "../lib/activewearData";

export const metadata = {
  title: "Activewear University",
  description: "Activewear education covering leggings, sports bras, fit, fabrics, compression, support, sustainability, and retailer shopping rules.",
  alternates: { canonical: "/activewear-university" }
};

export default function UniversityPage() {
  return (
    <HubPage
      eyebrow="Activewear University"
      title="Fit, fabric, and shopping education for activewear buyers"
      intro="Use education pages to support commercial decisions with clear sizing, fabric, support, and retailer guidance."
      path="/activewear-university"
      items={editorialHubs}
    />
  );
}
