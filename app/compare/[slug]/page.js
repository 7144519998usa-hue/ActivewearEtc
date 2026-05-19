import { notFound } from "next/navigation";
import HubPage from "../../components/HubPage";
import JsonLd from "../../components/JsonLd";
import { buildAffiliateLink } from "../../lib/affiliateLinks";
import { brandHubs, categories, categoryComparisonGuides, comparisonGuides, editorialHubs, retailerComparisonGuides, retailerHubs, shoppingGuides } from "../../lib/activewearData";
import { breadcrumbSchema, faqSchema, itemListSchema } from "../../lib/structuredData";

const metadataOverrides = {
  "adidas-vs-lululemon-yoga": {
    title: "Adidas vs lululemon Yoga: Fit, Softness, Price",
    description: "Quickly compare Adidas and lululemon yoga clothing by softness, fit, waistband comfort, price, everyday wear, and current Amazon options."
  },
  "adidas-vs-lululemon-yoga-clothing-comparison": {
    title: "Adidas vs lululemon Yoga Clothing: Which Is Better?",
    description: "Compare Adidas and lululemon yoga clothing by soft feel, fit, price, leggings, pants, tops, and everyday wear before shopping."
  },
  "adidas-vs-lululemon-yoga-pants-comparison": {
    title: "Adidas vs lululemon Yoga Pants: Fit, Feel, Price",
    description: "Compare Adidas and lululemon yoga pants by softness, waistband comfort, stretch, opacity, price checks, and everyday wear."
  },
  "adidas-vs-lululemon-yoga-leggings-comparison": {
    title: "Adidas vs lululemon Yoga Leggings: Which to Buy?",
    description: "Compare Adidas and lululemon yoga leggings by softness, fit, opacity, waistband comfort, size range, price, and Amazon options."
  },
  "adidas-vs-lululemon-leggings": {
    title: "Adidas vs lululemon Leggings: Fit, Feel, Price",
    description: "Compare Adidas and lululemon leggings by waistband comfort, fabric feel, opacity, workout use, yoga comfort, price, size range, and returns."
  },
  "adidas-vs-lululemon-leggings-comparison": {
    title: "Adidas vs lululemon Leggings Comparison",
    description: "Compare Adidas and lululemon leggings by stretch, softness, training crossover, studio comfort, opacity, current price checks, and returns."
  },
  "lululemon-vs-adidas": {
    title: "lululemon vs Adidas: Yoga and Activewear Comparison",
    description: "Compare lululemon and Adidas activewear for yoga, leggings, gym use, athleisure, price checks, size range, and return policy."
  },
  "adidas-vs-lululemon-yoga-apparel-comparison": {
    title: "Adidas vs lululemon Yoga Apparel: What to Compare",
    description: "Compare Adidas and lululemon yoga apparel by studio comfort, athletic crossover, fabric feel, layers, price, and fit."
  },
  "adidas-vs-lululemon-yoga-clothes-comparison": {
    title: "Adidas vs lululemon Yoga Clothes: Fit and Price",
    description: "Compare Adidas and lululemon yoga clothes by leggings, bras, tops, stretch, comfort, coverage, price checks, and everyday use."
  },
  "adidas-vs-lululemon": {
    title: "Adidas vs lululemon: Activewear Fit, Quality, Price",
    description: "Compare Adidas and lululemon activewear by yoga clothing, leggings, training use, premium feel, size range, and shopping options."
  },
  "adidas-vs-lululemon-yoga-wear-comparison": {
    title: "Adidas vs lululemon Yoga Wear: Softness and Fit",
    description: "Compare Adidas and lululemon yoga wear by soft feel, support, athletic crossover, premium style, size range, and price checks."
  },
  "lululemon-vs-gymshark": {
    title: "lululemon vs Gymshark: Fit, Fabric, Price",
    description: "Compare lululemon and Gymshark by leggings, sports bras, training style, yoga comfort, fabric feel, price, and return policy."
  },
  "leggings-vs-joggers": {
    title: "Joggers vs Leggings: Which Is Better for You?",
    description: "Compare joggers and leggings by comfort, warmth, compression, pockets, workouts, travel, and everyday wear."
  },
  "low-impact-vs-high-impact-sports-bras": {
    title: "High Impact vs Low Impact Sports Bra: Difference",
    description: "Compare high-impact and low-impact sports bras by support, compression, straps, cup coverage, running, yoga, and fit."
  },
  "compression-leggings-vs-yoga-leggings": {
    title: "Compression Pants vs Leggings: Fit and Use",
    description: "Compare compression pants, compression leggings, and yoga leggings by pressure, stretch, comfort, opacity, workouts, and daily wear."
  },
  "running-shoes-vs-training-shoes": {
    title: "Running Shoes vs Training Shoes: Fit and Support",
    description: "Compare running shoes and training shoes by cushioning, lateral support, heel stability, grip, HIIT, gym use, and road running."
  },
  "nike-vs-gymshark-leggings": {
    title: "Nike vs Gymshark Leggings: Fit, Quality, Price",
    description: "Compare Nike and Gymshark leggings by fabric feel, training fit, opacity, waistband comfort, style, price, and returns."
  },
  "target-vs-walmart-running-shoes": {
    title: "Target vs Walmart Running Shoes: Price and Fit",
    description: "Compare Target and Walmart running shoes by price, sizing, cushioning, brand options, pickup, shipping, and return policy."
  },
  "nike-vs-adidas-activewear": {
    title: "Nike vs Adidas Activewear: Fit, Price, Style",
    description: "Compare Nike and Adidas activewear by running gear, gym clothes, leggings, shoes, athleisure, size range, sale timing, and returns."
  },
  "nike-vs-adidas-hoodies": {
    title: "Nike vs Adidas Hoodies: Fit, Fabric, Price",
    description: "Compare Nike and Adidas hoodies by fleece weight, fit, layering, gym use, everyday wear, sale timing, and returns."
  },
  "premium-vs-budget-activewear": {
    title: "Premium vs Budget Activewear: What Is Worth It?",
    description: "Compare premium and budget activewear by fabric, fit consistency, durability, support, price, sale timing, and return policy."
  }
};

function getComparison(slug) {
  return comparisonGuides.find((item) => item.slug === slug)
    || categoryComparisonGuides.find((item) => item.slug === slug)
    || retailerComparisonGuides.find((item) => item.slug === slug);
}

function getRelatedItems(comparison) {
  const lookup = [
    ...brandHubs,
    ...retailerHubs,
    ...categories,
    ...editorialHubs,
    ...shoppingGuides.map((item) => ({ ...item, href: `/best/${item.slug}` })),
    ...comparisonGuides.map((item) => ({ ...item, href: `/compare/${item.slug}` })),
    ...categoryComparisonGuides,
    ...retailerComparisonGuides
  ];
  const related = comparison.relatedHrefs
    .map((href) => lookup.find((item) => item.href === href))
    .filter(Boolean);
  const fallback = comparisonGuides
    .filter((item) => item.slug !== comparison.slug)
    .slice(0, 6)
    .map((item) => ({ ...item, href: `/compare/${item.slug}` }));

  const categoryFallback = categoryComparisonGuides
    .filter((item) => item.slug !== comparison.slug && item.categorySlug === comparison.categorySlug)
    .slice(0, 4);
  const retailerFallback = retailerComparisonGuides
    .filter((item) => item.slug !== comparison.slug && item.categorySlug === comparison.categorySlug)
    .slice(0, 4);

  const seen = new Set();

  return [...related, ...categoryFallback, ...retailerFallback, ...fallback]
    .filter((item) => {
      if (!item.href || seen.has(item.href)) {
        return false;
      }

      seen.add(item.href);
      return true;
    })
    .slice(0, 6);
}

function getAmazonSearchLink(query) {
  return buildAffiliateLink({ merchantUrl: `https://www.amazon.com/s?k=${encodeURIComponent(query).replace(/%20/g, "+")}` });
}

function isAdidasLululemonComparison(comparison) {
  const text = `${comparison.title} ${comparison.summary} ${comparison.tags.join(" ")}`.toLowerCase();
  return text.includes("adidas") && text.includes("lululemon");
}

function isAdidasLululemonLeggingsComparison(comparison) {
  const text = `${comparison.slug} ${comparison.title} ${comparison.summary}`.toLowerCase();
  return text.includes("adidas") && text.includes("lululemon") && text.includes("leggings");
}

function getCommerceCtas(comparison) {
  if (isAdidasLululemonLeggingsComparison(comparison)) {
    return [
      { label: "Shop Adidas leggings", query: "Adidas leggings women" },
      { label: "Shop lululemon-style leggings", query: "lululemon leggings women" },
      { label: "Compare leggings on Amazon", query: "best workout leggings women" }
    ];
  }

  if (isAdidasLululemonComparison(comparison)) {
    return [
      { label: "Shop Adidas yoga options", query: "Adidas yoga clothing women" },
      { label: "Shop lululemon-style yoga options", query: "lululemon yoga leggings women" },
      { label: "Compare yoga leggings on Amazon", query: "best yoga leggings women" }
    ];
  }

  const queryBase = comparison.title.replace(/\bvs\b/gi, "").replace(/\s+/g, " ").trim();
  return [
    { label: "Shop current Amazon options", query: queryBase },
    { label: "Compare activewear alternatives", query: `${queryBase} activewear` }
  ];
}

function getDecisionRows(comparison) {
  if (isAdidasLululemonLeggingsComparison(comparison)) {
    return [
      { factor: "Best starting point", adidas: "Sportier leggings for gym, walking, errands, and active-casual outfits", lululemon: "Softer studio-focused leggings for yoga, Pilates, and polished everyday wear" },
      { factor: "Fabric feel", adidas: "Look for smooth athletic stretch and breathable training fabrics", lululemon: "Look for soft handfeel, low-friction seams, and body-skimming studio fabrics" },
      { factor: "Workout use", adidas: "Often easier to compare for gym crossover and sport styling", lululemon: "Often easier to compare for low-impact yoga comfort and premium feel" },
      { factor: "Fit checks", adidas: "Check rise, inseam, waistband security, opacity, and size chart", lululemon: "Check rise, inseam, fabric family, opacity, seller details, and returns" },
      { factor: "Value check", adidas: "Worth checking when discounts or multipacks matter", lululemon: "Worth checking when softness, fit consistency, and premium styling matter more" }
    ];
  }

  if (isAdidasLululemonComparison(comparison)) {
    return [
      { factor: "Best starting point", adidas: "Sport-led yoga and athleisure crossover", lululemon: "Studio-led premium yoga comfort" },
      { factor: "Fabric feel", adidas: "Look for breathable, athletic stretch fabrics", lululemon: "Look for softer, body-skimming studio fabrics" },
      { factor: "Yoga pants and leggings", adidas: "Good for shoppers who also want gym or walking use", lululemon: "Good for shoppers prioritizing soft low-impact movement" },
      { factor: "Price check", adidas: "Often worth checking for current discounts and multipacks", lululemon: "Often requires more careful value and return-policy checks" },
      { factor: "Before buying", adidas: "Verify size chart, inseam, fabric, color, and return terms", lululemon: "Verify seller, authenticity signals, fabric, size, and return terms" }
    ];
  }

  return comparison.tags.map((tag) => ({
    factor: tag,
    adidas: "Check the current product page details before buying.",
    lululemon: "Compare fit, size, price, and return terms before choosing."
  }));
}

function getFaqs(comparison) {
  if (isAdidasLululemonLeggingsComparison(comparison)) {
    return [
      {
        question: "Are Adidas or lululemon leggings better?",
        answer: "Adidas is usually the stronger starting point for sportier leggings that can work for gym, walking, and athleisure. lululemon is usually the stronger starting point for soft studio leggings and premium low-impact comfort."
      },
      {
        question: "What should I compare before buying Adidas or lululemon leggings?",
        answer: "Compare fabric feel, rise, inseam, waistband comfort, opacity, size availability, seller details, current price, shipping, and return policy before buying."
      },
      {
        question: "Can I use this page to shop Amazon leggings?",
        answer: "Yes. Use the Amazon links as live shopping paths, then verify product details, seller, sizes, colors, prices, and returns directly on Amazon before checkout."
      }
    ];
  }

  if (!isAdidasLululemonComparison(comparison)) {
    return [
      {
        question: `How should I use this ${comparison.title} comparison?`,
        answer: "Use it to narrow your shopping criteria, then verify current price, size availability, materials, seller details, shipping, and return terms on the merchant page before buying."
      },
      {
        question: "Does ActivewearEtc publish hands-on product reviews?",
        answer: "No. ActivewearEtc provides editorial shopping comparisons based on visible product and retailer information. No hands-on testing or performance claim is implied unless explicitly stated."
      }
    ];
  }

  return [
    {
      question: "Is Adidas or lululemon better for yoga clothing?",
      answer: "Adidas is usually the stronger starting point for sport-led yoga clothing that can cross over into gym, walking, and athleisure. lululemon is usually the stronger starting point for soft studio-focused yoga clothing and premium low-impact comfort."
    },
    {
      question: "Are Adidas or lululemon yoga leggings better for everyday wear?",
      answer: "It depends on the fit and fabric. Adidas can suit sportier everyday outfits, while lululemon can suit softer studio-to-street outfits. Check opacity, rise, inseam, size availability, fabric blend, and return policy before buying."
    },
    {
      question: "What should I check before buying Adidas or lululemon yoga pants?",
      answer: "Verify current price, size chart, inseam, waistband style, fabric notes, color availability, seller details, shipping, and returns on the merchant page because product details can change."
    }
  ];
}

function getQuickAnswer(comparison) {
  if (isAdidasLululemonLeggingsComparison(comparison)) {
    return "Quick answer: choose lululemon-style leggings if softness and studio comfort matter most; choose Adidas leggings if you want sportier workout crossover, everyday wear, and more frequent deal checks.";
  }

  if (isAdidasLululemonComparison(comparison)) {
    return "Quick answer: choose lululemon if soft studio comfort is the priority; choose Adidas if you want sport-led yoga pieces that can also work for gym, walking, and athleisure.";
  }

  if (comparison.slug === "leggings-vs-joggers") {
    return "Quick answer: choose leggings for stretch and compression; choose joggers for warmth, pockets, and a more relaxed everyday fit.";
  }

  if (comparison.slug === "running-shoes-vs-training-shoes") {
    return "Quick answer: choose running shoes for forward motion and cushioning; choose training shoes for gym stability, lateral support, and HIIT.";
  }

  return "Quick answer: use this comparison to narrow the fit, support, comfort, price, and return-policy details that matter before shopping.";
}

export function generateStaticParams() {
  return [...comparisonGuides, ...categoryComparisonGuides, ...retailerComparisonGuides].map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }) {
  const comparison = getComparison(params.slug);

  if (!comparison) {
    return {};
  }

  return {
    title: metadataOverrides[comparison.slug]?.title || comparison.title,
    description: metadataOverrides[comparison.slug]?.description || comparison.summary,
    alternates: { canonical: `/compare/${comparison.slug}` }
  };
}

export default function ComparisonPage({ params }) {
  const comparison = getComparison(params.slug);

  if (!comparison) {
    notFound();
  }

  const commerceCtas = getCommerceCtas(comparison);
  const decisionRows = getDecisionRows(comparison);
  const faqs = getFaqs(comparison);

  return (
    <>
      <JsonLd data={faqSchema({ path: comparison.href || `/compare/${comparison.slug}`, faqs })} />
      <JsonLd data={breadcrumbSchema({ items: [{ name: "Home", href: "/" }, { name: "Compare", href: "/compare" }, { name: comparison.title, href: comparison.href || `/compare/${comparison.slug}` }] })} />
      <JsonLd data={itemListSchema({ title: comparison.title, path: comparison.href || `/compare/${comparison.slug}`, items: getRelatedItems(comparison) })} />
      <HubPage
        eyebrow="Comparison"
        title={comparison.title}
        intro={comparison.summary}
        path={comparison.href || `/compare/${comparison.slug}`}
        items={getRelatedItems(comparison)}
      >
        <section className="section section-tight">
          <div className="content-card">
            <span className="eyebrow">Quick answer</span>
            <h2>{getQuickAnswer(comparison)}</h2>
          </div>
        </section>

        <section className="section section-tight">
          <div className="revenue-cta-panel">
            <div>
              <span className="eyebrow">Shop current options</span>
              <h2>Check live availability before choosing.</h2>
              <p>
                Product prices, sizes, colors, sellers, shipping, and returns can change. Use these links to compare
                current Amazon options, then verify final details before buying.
              </p>
            </div>
            <div className="revenue-cta-actions">
              {commerceCtas.map((cta) => (
                <a className="primary-button" href={getAmazonSearchLink(cta.query)} key={cta.label} rel="sponsored nofollow noopener" target="_blank">
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Decision table</span>
            <h2>Compare the factors that affect the purchase.</h2>
            <p>
              These tables are editorial shopping guidance, not hands-on performance testing. Use them to shortlist
              options before checking current merchant details.
            </p>
          </div>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>{isAdidasLululemonComparison(comparison) ? "Adidas" : "Option A"}</th>
                  <th>{isAdidasLululemonComparison(comparison) ? "lululemon" : "Option B"}</th>
                </tr>
              </thead>
              <tbody>
                {decisionRows.map((row) => (
                  <tr key={row.factor}>
                    <td>{row.factor}</td>
                    <td>{row.adidas}</td>
                    <td>{row.lululemon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Decision points</span>
            <h2>Use the comparison to narrow the next click</h2>
            <p>
              These pages compare shopper-visible differences like fit, support, fabric, budget, use case, and retailer
              policies. ActivewearEtc does not invent test results or claim a winner without support.
            </p>
          </div>
          <div className="grid">
            {(comparison.decisionCards || comparison.tags.map((tag) => ({
              title: tag,
              body: "Check this signal against the workout, fit preference, and return window before choosing a retailer path."
            }))).map((card) => (
              <article className="card" key={card.title}>
                <span className="eyebrow">{comparison.tags[0]}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="content-card">
            <span className="eyebrow">FAQ</span>
            <h2>Common buying questions</h2>
            {faqs.map((faq) => (
              <div className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {comparison.relatedSearches ? (
        <section className="section">
          <div className="content-card">
            <span className="eyebrow">Related searches</span>
            <h2>Other ways shoppers compare this topic</h2>
            <div className="tag-row">
              {comparison.relatedSearches.map((search) => (
                <a className="tag" href={search.href} key={search.href}>
                  {search.label}
                </a>
              ))}
            </div>
          </div>
        </section>
        ) : null}
      </HubPage>
    </>
  );
}
