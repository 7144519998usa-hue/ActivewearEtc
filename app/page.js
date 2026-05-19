import CategoryGrid from "./components/CategoryGrid";
import DisclosureNotice from "./components/DisclosureNotice";
import ProductComparison from "./components/ProductComparison";
import JsonLd from "./components/JsonLd";
import AmazonActivewearHeroSlider from "../components/home/AmazonActivewearHeroSlider";
import { activityHubs, brandHubs, categories, editorialHubs, retailerHubs, sampleProducts } from "./lib/activewearData";
import { collectionPageSchema } from "./lib/structuredData";

export const metadata = {
  title: "ActivewearEtc | Shop Activewear Picks",
  description:
    "Shop leggings, sports bras, workout tops, running shorts, joggers, shoes, and everyday activewear picks by style, fit, budget, and activity.",
  alternates: { canonical: "/" }
};

const homepageFeaturedImages = [
  "https://images.pexels.com/photos/4662342/pexels-photo-4662342.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/6456211/pexels-photo-6456211.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/6456301/pexels-photo-6456301.jpeg?auto=compress&cs=tinysrgb&w=1200"
];

const homepageProducts = sampleProducts.slice(0, 6).map((product, index) => ({
  ...product,
  imageUrl: homepageFeaturedImages[index],
  imageAlt: `${product.category} activewear lifestyle inspiration`
}));

const popularSearchLinks = [
  {
    href: "/compare/adidas-vs-lululemon-yoga",
    label: "Adidas vs lululemon yoga",
    summary: "Compare softness, fit, price, and everyday wear."
  },
  {
    href: "/compare/adidas-vs-lululemon-yoga-pants-comparison",
    label: "Adidas vs lululemon yoga pants",
    summary: "See which lane fits yoga pants shoppers better."
  },
  {
    href: "/queries/best-yoga-leggings-for-women",
    label: "Best yoga leggings for women",
    summary: "Shop by comfort, waistband, opacity, and price."
  },
  {
    href: "/queries/running-shoe-size-guide",
    label: "Running shoe size guide",
    summary: "Check fit, toe room, width, and returns."
  },
  {
    href: "/queries/nordstrom-sports-bras",
    label: "Nordstrom sports bras",
    summary: "Compare support, sizes, brands, and returns."
  },
  {
    href: "/queries/gymshark-amazon",
    label: "Gymshark on Amazon",
    summary: "Check seller details and current Amazon options."
  }
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          title: "ActivewearEtc",
          description: metadata.description,
          path: "/",
          items: categories.slice(0, 8)
        })}
      />
      <AmazonActivewearHeroSlider />
      <main className="page-shell">
        <section className="section section-tight">
          <div className="trust-strip">
            <span>No fake reviews</span>
            <span>Clear shopping links</span>
            <span>Check price on Amazon</span>
            <span>Fresh activewear ideas</span>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Shop by category</span>
            <h2>Find the activewear you actually need.</h2>
            <p>Start with leggings, sports bras, workout tops, running shorts, shoes, or everyday athleisure.</p>
          </div>
          <CategoryGrid items={categories.slice(0, 9)} />
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Popular picks</span>
            <h2>Quick places to start shopping.</h2>
            <p>Browse a few activewear ideas, then check the latest options and prices on Amazon.</p>
          </div>
          <ProductComparison products={homepageProducts} />
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Trending searches</span>
            <h2>What shoppers are comparing right now.</h2>
            <p>Jump into the activewear questions people are already searching for.</p>
          </div>
          <div className="grid">
            {popularSearchLinks.map((item) => (
              <a className="card" href={item.href} key={item.href}>
                <span className="card-kicker">Popular search</span>
                <h3>{item.label}</h3>
                <p>{item.summary}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Guided shopping</span>
            <h2>Shop by what matters most to you.</h2>
            <p>Look for better fit, softer fabric, lower prices, sustainable options, or premium styles.</p>
          </div>
          <CategoryGrid items={editorialHubs} />
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">More ways to shop</span>
            <h2>Browse by workout, brand, or store.</h2>
          </div>
          <CategoryGrid items={[...activityHubs, ...brandHubs, ...retailerHubs.slice(0, 4)]} />
        </section>

        <section className="section">
          <DisclosureNotice />
        </section>
      </main>
    </>
  );
}
