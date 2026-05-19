import { notFound } from "next/navigation";
import CategoryGrid from "../../components/CategoryGrid";
import HubPage from "../../components/HubPage";
import { buildAffiliateLink } from "../../lib/affiliateLinks";
import {
  activityHubs,
  brandHubs,
  categories,
  comparisonGuides,
  editorialHubs,
  retailerHubs,
  sampleProducts,
  searchConsoleOpportunityGuides,
  shoppingGuides
} from "../../lib/activewearData";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema, faqSchema, itemListSchema } from "../../lib/structuredData";

const queryEnhancements = {
  "adidas-athleisure": {
    title: "Adidas Athleisure: Joggers, Hoodies, Leggings",
    description: "Compare Adidas athleisure by joggers, hoodies, leggings, sneakers, outfit use, sale timing, comfort, and current shopping options.",
    quickAnswer: "Adidas athleisure is strongest when you want sporty everyday pieces that can move between walking, errands, light workouts, and casual outfits.",
    checks: ["Compare joggers, hoodies, and leggings", "Check fit and fabric weight", "Look for current sale options"]
  },
  "running-shoe-size-guide": {
    title: "Running Shoe Size Guide: Fit, Width, Toe Room",
    description: "Use this running shoe size guide to compare toe room, heel hold, width, socks, cushioning, road use, treadmill use, and return policy.",
    quickAnswer: "Most runners should start with enough toe room for swelling, a secure heel, and width that does not pinch. If you are between sizes, check the brand size chart and return policy before buying.",
    checks: ["Leave thumb-width toe room", "Check width before length", "Test heel hold and sock thickness"]
  },
  "plus-size-running-shorts": {
    title: "Plus-Size Running Shorts: Fit, Pockets, Comfort",
    description: "Compare plus-size running shorts by liner comfort, inseam, waistband stability, thigh coverage, pockets, size range, and returns.",
    quickAnswer: "Good plus-size running shorts should stay put at the waist, avoid thigh rubbing, and offer enough coverage for your preferred running distance.",
    checks: ["Check inseam and liner", "Look for a secure waistband", "Confirm size range and returns"]
  },
  "nordstrom-sports-bras": {
    title: "Nordstrom Sports Bras: Support, Sizes, Returns",
    description: "Compare Nordstrom sports bras by support level, cup coverage, brand assortment, size availability, return policy, and product details.",
    quickAnswer: "Nordstrom sports bras are worth checking when you want premium brand options, wider size filters, and clearer return-policy confidence.",
    checks: ["Match support to activity", "Use brand and size filters", "Check return terms before buying"]
  },
  "target-running-shorts": {
    title: "Target Running Shorts: Budget Picks and Fit",
    description: "Compare Target running shorts by budget, liner comfort, pockets, pickup options, size availability, warm-weather use, and returns.",
    quickAnswer: "Target running shorts are a smart budget starting point for warm-weather runs, but liner comfort, pockets, and waistband fit matter most.",
    checks: ["Check liner and pocket layout", "Compare pickup availability", "Verify size and return options"]
  },
  "compression-pants-vs-leggings": {
    title: "Compression Pants vs Leggings: Key Differences",
    description: "Compare compression pants and leggings by fit pressure, stretch, warmth, opacity, yoga use, gym use, and everyday comfort.",
    quickAnswer: "Compression pants usually feel tighter and more supportive; leggings usually prioritize stretch, comfort, and everyday wear.",
    checks: ["Decide how much pressure you want", "Check stretch and opacity", "Match fabric to workout type"]
  },
  "walmart-sports-bras-review-evaluation": {
    title: "Walmart Sports Bras Review: Support, Fit, Price",
    description: "Evaluate Walmart sports bras by support level, cup coverage, strap design, size range, current price, product details, and return policy.",
    quickAnswer: "Walmart sports bras can be a good budget starting point, but support level, strap design, and size range matter more than the listing title. Check the current product page before buying.",
    checks: ["Match support to workout intensity", "Check band and strap adjustability", "Confirm return policy and size range"]
  },
  "best-yoga-leggings-for-women": {
    title: "Best Yoga Leggings for Women: Softness, Fit, Price",
    description: "Compare the best yoga leggings for women by softness, waistband comfort, opacity, stretch, rise, inseam, size range, and price.",
    quickAnswer: "The best yoga leggings for women usually balance soft stretch, a waistband that stays put, and enough opacity for bending or stretching.",
    checks: ["Prioritize softness and stretch", "Check opacity in movement", "Compare rise, inseam, and returns"]
  },
  "best-leggings-for-yoga": {
    title: "Best Leggings for Yoga: Comfort, Stretch, Opacity",
    description: "Compare leggings for yoga by stretch, softness, waistband comfort, opacity, seam feel, fabric weight, care needs, and current prices.",
    quickAnswer: "For yoga, start with leggings that feel soft, stretch easily, and stay opaque when bending. A smooth waistband is usually more important than heavy compression.",
    checks: ["Look for low-friction seams", "Avoid overly stiff compression", "Check fabric and care notes"]
  },
  "running-shoe-fit-guide": {
    title: "Running Shoe Fit Guide: Toe Room, Width, Heel Hold",
    description: "Check running shoe fit by toe space, arch feel, heel slip, width, cushioning, walking comfort, and return policy before buying.",
    quickAnswer: "A running shoe should feel secure at the heel, roomy at the toes, and stable through the midfoot without pinching.",
    checks: ["Heel should not slip", "Toes should not hit the front", "Midfoot should feel secure, not tight"]
  },
  "nordstrom-activewear": {
    title: "Nordstrom Activewear: Brands, Bras, Shoes, Returns",
    description: "Compare Nordstrom activewear by leggings, sports bras, running shoes, premium brands, size availability, shipping, returns, and current assortment.",
    quickAnswer: "Nordstrom is strongest for premium brand browsing, sports bras, shoes, and easier return checks. Compare current assortment before choosing a product.",
    checks: ["Use filters for size and brand", "Check return terms", "Compare similar items before buying"]
  },
  "nordstrom-yoga": {
    title: "Nordstrom Yoga Activewear: Leggings, Bras, Layers",
    description: "Compare Nordstrom yoga activewear by leggings, bras, soft layers, premium brands, size availability, returns, and studio comfort.",
    quickAnswer: "Nordstrom yoga activewear is strongest for premium browsing, soft studio layers, and easy side-by-side brand comparison.",
    checks: ["Compare leggings and bras together", "Filter by size and brand", "Check fabric notes and returns"]
  },
  "target-running-clothes": {
    title: "Target Running Clothes: Shorts, Tops, Bras, Deals",
    description: "Compare Target running clothes by running shorts, tops, sports bras, light layers, budget, pickup options, availability, and returns.",
    quickAnswer: "Target running clothes are a good budget lane for shorts, tops, and sports bras. Focus on liner comfort, fabric feel, pockets, and return flexibility.",
    checks: ["Check pickup and delivery options", "Compare budget basics", "Verify size availability"]
  },
  "gymshark-amazon": {
    title: "Gymshark on Amazon: Seller Checks and Alternatives",
    description: "Research Gymshark on Amazon by seller details, product-page accuracy, return terms, sizing, current availability, and comparable activewear options.",
    quickAnswer: "Before buying Gymshark on Amazon, check the seller, return terms, product details, and size notes. If anything looks unclear, compare similar activewear options.",
    checks: ["Check seller identity", "Verify return terms", "Compare similar leggings and sets"]
  },
  "gymshark-leggings-amazon": {
    title: "Gymshark Leggings on Amazon: What to Check",
    description: "Research Gymshark leggings on Amazon by seller identity, sizing, fabric notes, return terms, current assortment, and alternatives.",
    quickAnswer: "For Gymshark leggings on Amazon, confirm the seller, size notes, return policy, and product details before clicking through.",
    checks: ["Check seller and returns", "Compare size notes", "Review similar leggings"]
  },
  "best-yoga-leggings-brands": {
    title: "Best Yoga Leggings Brands: Fit, Softness, Price",
    description: "Compare yoga leggings brands by fabric feel, waistband comfort, opacity, size range, price, return policy, and retailer availability.",
    quickAnswer: "The best yoga leggings brand depends on whether you care most about softness, price, compression, inclusive sizing, or easy returns.",
    checks: ["Compare fabric feel", "Check waistband and opacity", "Balance price with return policy"]
  },
  "white-running-shorts": {
    title: "White Running Shorts: Opacity, Liner, Pockets",
    description: "Compare white running shorts by liner coverage, opacity, sweat visibility, inseam, pockets, waistband comfort, and care needs.",
    quickAnswer: "For white running shorts, opacity and liner coverage matter more than color alone. Check photos, fabric notes, and return terms.",
    checks: ["Check opacity and liner", "Review inseam and pockets", "Confirm care notes"]
  },
  "best-mens-activewear-brands": {
    title: "Best Men's Activewear Brands: Gym, Joggers, Shoes",
    description: "Compare men's activewear brands by gym clothes, joggers, workout tops, training shoes, fit, size range, price, and retailer availability.",
    quickAnswer: "The best men's activewear brand depends on the main use: gym training, running, athleisure, or everyday joggers. Start with fit and fabric first.",
    checks: ["Match brand to activity", "Compare joggers and tops together", "Check size range and returns"]
  },
  "best-mens-workout-joggers": {
    title: "Best Men's Workout Joggers: Gym, Fit, Pockets",
    description: "Compare men's workout joggers by taper, pockets, fabric weight, mobility, gym use, travel use, price, and return policy.",
    quickAnswer: "The best men's workout joggers should move well, hold essentials securely, and keep a clean taper without feeling restrictive.",
    checks: ["Check stretch and taper", "Compare pocket layout", "Match fabric weight to workout"]
  },
  "difference-between-high-impact-and-low-impact-sports-bra": {
    title: "High Impact vs Low Impact Sports Bra: Difference",
    description: "Compare high-impact and low-impact sports bras by support, compression, cup structure, straps, running use, yoga use, comfort, and fit.",
    quickAnswer: "High-impact sports bras are better for running and jumping. Low-impact sports bras are better for yoga, walking, lounging, and lighter studio workouts.",
    checks: ["Match support to activity", "Check straps and band security", "Prioritize comfort for low-impact use"]
  },
  "best-shoes-for-hiit-training": {
    title: "Best Shoes for HIIT Training: Stability and Grip",
    description: "Compare HIIT training shoes by lateral support, grip, cushioning, heel stability, breathability, jump comfort, and returns.",
    quickAnswer: "For HIIT, choose training shoes with lateral support, reliable grip, and enough cushioning for jumps without feeling unstable.",
    checks: ["Prioritize lateral support", "Check grip and heel stability", "Avoid overly tall running soles"]
  }
};

function getGuide(slug) {
  return searchConsoleOpportunityGuides.find((item) => item.slug === slug);
}

function getRelatedItems(guide) {
  const lookup = [
    ...categories,
    ...editorialHubs,
    ...activityHubs,
    ...brandHubs,
    ...retailerHubs,
    ...comparisonGuides.map((item) => ({ ...item, href: `/compare/${item.slug}` })),
    ...shoppingGuides.map((item) => ({ ...item, href: `/best/${item.slug}` })),
    ...searchConsoleOpportunityGuides
  ];

  const related = guide.relatedHrefs
    .map((href) => lookup.find((item) => item.href === href))
    .filter(Boolean);
  const fallback = searchConsoleOpportunityGuides
    .filter((item) => item.slug !== guide.slug)
    .slice(0, 6);

  const seen = new Set();

  return [...related, ...fallback]
    .filter((item) => {
      if (!item.href || seen.has(item.href)) {
        return false;
      }

      seen.add(item.href);
      return true;
    })
    .slice(0, 6);
}

function getMatchingProducts(guide) {
  const terms = [guide.title, ...(guide.tags || [])].join(" ").toLowerCase().split(/\s+/).filter((word) => word.length > 2);

  return sampleProducts
    .map((product) => {
      const haystack = [product.brand, product.name, product.category, product.bestFor, product.badge]
        .join(" ")
        .toLowerCase();
      const score = terms.filter((term) => haystack.includes(term)).length;
      return { product, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((item) => item.product);
}

export function generateStaticParams() {
  return searchConsoleOpportunityGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const guide = getGuide(params.slug);

  if (!guide) {
    return {};
  }

  return {
    title: queryEnhancements[guide.slug]?.title || guide.title,
    description: queryEnhancements[guide.slug]?.description || guide.summary,
    alternates: { canonical: guide.href }
  };
}

export default function QueryGuidePage({ params }) {
  const guide = getGuide(params.slug);

  if (!guide) {
    notFound();
  }

  const products = getMatchingProducts(guide);
  const enhancement = queryEnhancements[guide.slug];
  const relatedItems = getRelatedItems(guide);
  const faqs = [
    {
      question: `What is the quick answer for ${guide.title}?`,
      answer: enhancement?.quickAnswer || guide.summary
    },
    {
      question: `What should I check before shopping for ${guide.title}?`,
      answer: "Check fit, fabric, sizing, current price, availability, shipping, seller details, and return policy on the store page before buying."
    }
  ];

  return (
    <>
      <JsonLd data={faqSchema({ path: guide.href, faqs })} />
      <JsonLd data={breadcrumbSchema({ items: [{ name: "Home", href: "/" }, { name: "Shopping shortcuts", href: "/search" }, { name: guide.title, href: guide.href }] })} />
      <JsonLd data={itemListSchema({ title: guide.title, path: guide.href, items: relatedItems })} />
      <HubPage
        eyebrow="Shopping shortcut"
        title={guide.title}
        intro={guide.summary}
        path={guide.href}
        items={relatedItems}
      >
        <section className="section section-tight">
          <div className="content-card">
            <span className="eyebrow">Quick answer</span>
            <h2>{enhancement?.quickAnswer || guide.summary}</h2>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Quick checks</span>
            <h2>What to compare before you buy</h2>
            <p>Use these simple checks to choose a better starting point, then confirm the latest details on the store page.</p>
          </div>
          <div className="grid">
            {(enhancement?.checks || guide.tags).map((tag) => (
              <article className="card" key={tag}>
                <span className="card-kicker">{guide.tags[0]}</span>
                <h3>{tag}</h3>
                <p>Compare fit, fabric, sizing, return policy, and current availability before clicking through.</p>
              </article>
            ))}
          </div>
        </section>

        {products.length ? (
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Amazon search paths</span>
            <h2>Related shopping links</h2>
            <p>These links open current Amazon search results so shoppers can check today's options directly.</p>
          </div>
          <div className="grid">
            {products.map((product) => (
              <article className="card" key={product.href}>
                <span className="card-kicker">{product.category}</span>
                <h3>{product.brand} {product.name}</h3>
                <p>{product.bestFor}</p>
                <a className="primary-button" href={buildAffiliateLink(product)} rel="nofollow sponsored noopener" target="_blank">
                  Shop on Amazon
                </a>
              </article>
            ))}
          </div>
        </section>
        ) : null}

        <section className="section">
          <div className="content-card">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
            {faqs.map((faq) => (
              <div className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Related pages</span>
            <h2>Keep shopping</h2>
          </div>
          <CategoryGrid items={relatedItems} />
        </section>
      </HubPage>
    </>
  );
}
