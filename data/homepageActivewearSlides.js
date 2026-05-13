const amazonAssociateTag = "activewearetc.-20";

function amazonSearchUrl(query) {
  const params = new URLSearchParams({ k: query, tag: amazonAssociateTag });
  return `https://www.amazon.com/s?${params.toString()}`;
}

// TODO: Replace each empty asin and imageUrl with values from an Amazon Associates-approved
// source only, such as Amazon Product Advertising API, Amazon Creators API, Data Feeds,
// or another Amazon-served image/embed method approved for this account.
// Do not scrape, download, copy, rehost, or manually save Amazon product images.
export const homepageActivewearSlides = [
  {
    id: 1,
    title: "Premium leggings for everyday training",
    subtitle: "Soft stretch, clean fit, gym-to-street comfort.",
    asin: "",
    imageUrl: "",
    affiliateUrl: amazonSearchUrl("premium womens workout leggings"),
    brand: "Amazon activewear",
    alt: "Premium women's activewear leggings from Amazon",
    cta: "Shop on Amazon"
  },
  {
    id: 2,
    title: "Supportive sports bras for every session",
    subtitle: "Find clean support options for running, lifting, yoga, and daily movement.",
    asin: "",
    imageUrl: "",
    affiliateUrl: amazonSearchUrl("supportive sports bras for women"),
    brand: "Amazon activewear",
    alt: "Supportive women's sports bras from Amazon",
    cta: "Shop on Amazon"
  },
  {
    id: 3,
    title: "Workout tops that keep the outfit sharp",
    subtitle: "Breathable tanks, tees, and layers for warmups and high-sweat days.",
    asin: "",
    imageUrl: "",
    affiliateUrl: amazonSearchUrl("moisture wicking workout tops women"),
    brand: "Amazon activewear",
    alt: "Moisture-wicking workout tops from Amazon",
    cta: "Shop on Amazon"
  },
  {
    id: 4,
    title: "Matching sets with a polished studio look",
    subtitle: "Coordinated activewear sets that move from class to coffee.",
    asin: "",
    imageUrl: "",
    affiliateUrl: amazonSearchUrl("matching activewear sets women"),
    brand: "Amazon activewear",
    alt: "Matching activewear sets from Amazon",
    cta: "Shop on Amazon"
  },
  {
    id: 5,
    title: "Yoga wear with soft, easy movement",
    subtitle: "Studio-ready pieces for stretching, pilates, barre, and low-impact days.",
    asin: "",
    imageUrl: "",
    affiliateUrl: amazonSearchUrl("premium yoga wear women"),
    brand: "Amazon activewear",
    alt: "Soft yoga wear from Amazon",
    cta: "Shop on Amazon"
  },
  {
    id: 6,
    title: "Running apparel built for the miles",
    subtitle: "Shorts, layers, and sweat-ready essentials for road and treadmill training.",
    asin: "",
    imageUrl: "",
    affiliateUrl: amazonSearchUrl("running apparel women activewear"),
    brand: "Amazon activewear",
    alt: "Running activewear apparel from Amazon",
    cta: "Shop on Amazon"
  },
  {
    id: 7,
    title: "Gym bags that keep the routine together",
    subtitle: "Sleek carryalls for shoes, layers, bottles, towels, and daily essentials.",
    asin: "",
    imageUrl: "",
    affiliateUrl: amazonSearchUrl("premium gym bags for women"),
    brand: "Amazon activewear",
    alt: "Premium gym bags from Amazon",
    cta: "Shop on Amazon"
  },
  {
    id: 8,
    title: "Training shoes for lifting, walking, and gym days",
    subtitle: "Shop stable, versatile sneakers for workouts and active errands.",
    asin: "",
    imageUrl: "",
    affiliateUrl: amazonSearchUrl("training shoes women gym sneakers"),
    brand: "Amazon activewear",
    alt: "Training shoes and gym sneakers from Amazon",
    cta: "Shop on Amazon"
  },
  {
    id: 9,
    title: "Athleisure jackets with a clean finish",
    subtitle: "Light layers for warmups, travel, errands, and cool-weather movement.",
    asin: "",
    imageUrl: "",
    affiliateUrl: amazonSearchUrl("athleisure jackets women activewear"),
    brand: "Amazon activewear",
    alt: "Athleisure activewear jackets from Amazon",
    cta: "Shop on Amazon"
  },
  {
    id: 10,
    title: "Inclusive activewear in sizes that work",
    subtitle: "Plus-size and extended-size shopping paths for leggings, bras, tops, and sets.",
    asin: "",
    imageUrl: "",
    affiliateUrl: amazonSearchUrl("plus size activewear women"),
    brand: "Amazon activewear",
    alt: "Inclusive plus-size activewear from Amazon",
    cta: "Shop on Amazon"
  }
];
