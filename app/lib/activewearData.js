export const categories = [
  {
    slug: "leggings",
    name: "Leggings",
    summary: "High-rise, pocketed, compression, flare, seamless, and full-length leggings for training, yoga, travel, and everyday wear.",
    href: "/women/leggings",
    tags: ["high-waisted", "pockets", "compression", "yoga"]
  },
  {
    slug: "sports-bras",
    name: "Sports Bras",
    summary: "Low, medium, and high-support sports bras organized by activity, cup range, adjustability, and fabric feel.",
    href: "/women/sports-bras",
    tags: ["high support", "running", "yoga", "plus size"]
  },
  {
    slug: "workout-tops",
    name: "Workout Tops",
    summary: "Moisture-wicking tanks, tees, long sleeves, and cropped tops for gym, running, and studio workouts.",
    href: "/styles/workout-tops",
    tags: ["moisture-wicking", "cropped", "lightweight"]
  },
  {
    slug: "running-shorts",
    name: "Running Shorts",
    summary: "Split shorts, bike shorts, liner shorts, and pocketed running shorts for warm-weather training.",
    href: "/activities/running/running-shorts",
    tags: ["running", "pockets", "summer"]
  },
  {
    slug: "joggers",
    name: "Joggers",
    summary: "Slim, relaxed, fleece, woven, and travel-ready joggers for workouts, recovery, and athleisure.",
    href: "/styles/joggers",
    tags: ["athleisure", "travel", "recovery"]
  },
  {
    slug: "hoodies",
    name: "Hoodies",
    summary: "Training hoodies, fleece layers, zip hoodies, and lightweight warmups for cool-weather movement.",
    href: "/styles/hoodies",
    tags: ["layers", "warmup", "fleece"]
  },
  {
    slug: "compression-wear",
    name: "Compression Wear",
    summary: "Compression tights, tops, shorts, and base layers with fit notes and use-case guidance.",
    href: "/styles/compression-wear",
    tags: ["training", "support", "recovery"]
  },
  {
    slug: "yoga-wear",
    name: "Yoga Wear",
    summary: "Soft leggings, studio bras, ribbed sets, and flexible layers for yoga, pilates, and low-impact workouts.",
    href: "/activities/yoga",
    tags: ["soft feel", "studio", "pilates"]
  },
  {
    slug: "gym-clothes",
    name: "Gym Clothes",
    summary: "Breathable, durable training apparel for lifting, cross-training, HIIT, and everyday gym sessions.",
    href: "/activities/gym",
    tags: ["training", "durable", "sweat-wicking"]
  },
  {
    slug: "athleisure",
    name: "Athleisure",
    summary: "Polished activewear staples that move from workouts to travel, errands, and casual office days.",
    href: "/styles/athleisure",
    tags: ["lounge", "travel", "everyday"]
  },
  {
    slug: "running-shoes",
    name: "Running Shoes",
    summary: "Road, treadmill, lightweight, and stability running shoes grouped by shopper need and training style.",
    href: "/activities/running/running-shoes",
    tags: ["running", "road", "training"]
  },
  {
    slug: "training-shoes",
    name: "Training Shoes",
    summary: "Gym, lifting, HIIT, and cross-training shoes compared by stability, cushioning, and grip.",
    href: "/activities/gym/training-shoes",
    tags: ["gym", "lifting", "cross-training"]
  },
  {
    slug: "workout-accessories",
    name: "Workout Accessories",
    summary: "Socks, bags, hats, gloves, hair accessories, and small gear that supports the workout kit.",
    href: "/styles/workout-accessories",
    tags: ["socks", "bags", "gear"]
  }
];

export const editorialHubs = [
  {
    slug: "plus-size-activewear",
    title: "Plus-Size Activewear",
    summary: "Size-inclusive leggings, bras, tops, and sets with fit notes, support guidance, and retailer coverage.",
    href: "/sizes-fit/plus-size-activewear"
  },
  {
    slug: "sustainable-activewear",
    title: "Sustainable Activewear",
    summary: "Recycled fabrics, responsible materials, durability signals, and brand transparency in one comparison lane.",
    href: "/styles/sustainable-activewear"
  },
  {
    slug: "budget-activewear",
    title: "Budget Activewear",
    summary: "Affordable activewear picks and deal-led comparisons without pretending every low price is the best value.",
    href: "/deals/budget-activewear"
  },
  {
    slug: "premium-activewear",
    title: "Premium Activewear",
    summary: "Higher-end activewear compared by fabric quality, construction, fit consistency, and return policies.",
    href: "/styles/premium-activewear"
  }
];

export const activityHubs = [
  { slug: "running", name: "Running", href: "/activities/running", summary: "Shorts, shoes, bras, layers, and reflective gear for road, treadmill, and race-day training." },
  { slug: "yoga", name: "Yoga", href: "/activities/yoga", summary: "Soft, flexible pieces for yoga, pilates, barre, and studio movement." },
  { slug: "gym", name: "Gym", href: "/activities/gym", summary: "Durable training clothes and shoes for lifting, circuits, and high-sweat sessions." },
  { slug: "athleisure", name: "Athleisure", href: "/styles/athleisure", summary: "Activewear that looks finished enough for the rest of the day." }
];

export const brandHubs = [
  { slug: "nike", name: "Nike", href: "/brands/nike", summary: "Mainstream training, running, and lifestyle activewear with broad size and retailer coverage." },
  { slug: "adidas", name: "Adidas", href: "/brands/adidas", summary: "Performance, athleisure, shoes, and recycled-material collections across many price points." },
  { slug: "lululemon", name: "lululemon", href: "/brands/lululemon", summary: "Premium yoga, running, training, and lifestyle pieces with a strong fit and fabric story." },
  { slug: "gymshark", name: "Gymshark", href: "/brands/gymshark", summary: "Gym-first activewear, contour styles, matching sets, and social-led collections." }
];

const brandCategoryMatrix = {
  nike: ["leggings", "sports-bras", "running-shorts", "running-shoes", "workout-tops", "training-shoes"],
  adidas: ["leggings", "sports-bras", "running-shorts", "running-shoes", "workout-tops", "training-shoes"],
  lululemon: ["leggings", "sports-bras", "joggers", "hoodies", "yoga-wear", "premium-activewear"],
  gymshark: ["leggings", "sports-bras", "joggers", "hoodies", "gym-clothes", "compression-wear"]
};

export const brandCategoryGuides = Object.entries(brandCategoryMatrix).flatMap(([brandSlug, categorySlugs]) => {
  const brand = brandHubs.find((item) => item.slug === brandSlug);

  return categorySlugs.map((categorySlug) => {
    const category = categories.find((item) => item.slug === categorySlug) || editorialHubs.find((item) => item.slug === categorySlug);
    const categoryName = category?.name || category?.title || categorySlug.replaceAll("-", " ");
    const categorySummary = category?.summary || `Compare ${categoryName.toLowerCase()} by fit, fabric, price, retailer availability, and return policy.`;

    return {
      slug: `${brandSlug}-${categorySlug}`,
      brandSlug,
      categorySlug,
      title: `${brand.name} ${categoryName}`,
      summary: `Compare ${brand.name} ${categoryName.toLowerCase()} by fit, fabric feel, price range, size availability, retailer coverage, and return policy before clicking through to shop.`,
      href: `/brands/${brandSlug}/${categorySlug}`,
      relatedHrefs: [brand.href, category.href, "/about/how-we-rank-products"],
      tags: [brand.name, categoryName, "activewear"],
      categorySummary
    };
  });
});

const brandActivityMatrix = {
  nike: ["running", "gym", "athleisure"],
  adidas: ["running", "gym", "athleisure"],
  lululemon: ["running", "yoga", "gym", "athleisure"],
  gymshark: ["gym", "athleisure"]
};

export const brandActivityGuides = Object.entries(brandActivityMatrix).flatMap(([brandSlug, activitySlugs]) => {
  const brand = brandHubs.find((item) => item.slug === brandSlug);

  return activitySlugs.map((activitySlug) => {
    const activity = activityHubs.find((item) => item.slug === activitySlug);

    return {
      slug: activitySlug,
      brandSlug,
      activitySlug,
      name: `${brand.name} ${activity.name} Activewear`,
      title: `${brand.name} ${activity.name} Activewear`,
      summary: `Compare ${brand.name} activewear for ${activity.name.toLowerCase()} by category coverage, fit, fabric feel, price range, size availability, retailer coverage, and return policy.`,
      href: `/brands/${brandSlug}/activities/${activitySlug}`,
      relatedHrefs: [brand.href, activity.href, "/about/how-we-rank-products"],
      tags: [brand.name, activity.name, "activewear"]
    };
  });
});

export const sampleProducts = [
  {
    brand: "Nike",
    name: "One High-Waisted Leggings",
    category: "Leggings",
    bestFor: "Training and everyday workouts",
    priceRange: "$45-$70",
    badge: "Versatile Pick",
    href: "/product/nike/one-high-waisted-leggings"
  },
  {
    brand: "lululemon",
    name: "Align High-Rise Pant",
    category: "Yoga Wear",
    bestFor: "Studio and low-impact movement",
    priceRange: "$98-$128",
    badge: "Soft Feel",
    href: "/product/lululemon/align-high-rise-pant"
  },
  {
    brand: "Adidas",
    name: "Ultimate Running Shorts",
    category: "Running Shorts",
    bestFor: "Warm-weather running",
    priceRange: "$35-$60",
    badge: "Runner Focus",
    href: "/product/adidas/ultimate-running-shorts"
  }
];

export const shoppingGuides = [
  {
    slug: "best-leggings-for-running",
    title: "Best Leggings for Running",
    summary: "Compare running leggings by waistband security, pocket layout, sweat control, opacity, and return policy before clicking through to a retailer.",
    tags: ["running", "leggings", "pockets"],
    relatedHrefs: ["/women/leggings", "/activities/running", "/styles/moisture-wicking-clothing"]
  },
  {
    slug: "best-leggings-with-pockets",
    title: "Best Leggings with Pockets",
    summary: "Compare pocketed leggings by phone storage, waistband height, compression, fabric feel, and everyday wear use.",
    tags: ["leggings", "pockets", "everyday"],
    relatedHrefs: ["/women/leggings", "/styles/athleisure", "/sizes-fit/plus-size-activewear"]
  },
  {
    slug: "best-high-impact-sports-bras",
    title: "Best High-Impact Sports Bras",
    summary: "Compare high-impact sports bras by support level, adjustability, cup coverage, strap shape, and running comfort.",
    tags: ["sports bras", "running", "support"],
    relatedHrefs: ["/women/sports-bras", "/activities/running", "/sizes-fit/plus-size-activewear"]
  },
  {
    slug: "best-sports-bras-for-large-busts",
    title: "Best Sports Bras for Large Busts",
    summary: "Compare sports bras for larger cup ranges by encapsulation support, band security, adjustability, coverage, and retailer return rules.",
    tags: ["sports bras", "plus size", "support"],
    relatedHrefs: ["/women/sports-bras", "/sizes-fit/plus-size-activewear", "/activities/running"]
  },
  {
    slug: "best-workout-tops-for-sweat",
    title: "Best Workout Tops for Sweat",
    summary: "Compare workout tops by moisture-wicking fabric, ventilation, cling, length, and comfort for high-sweat gym sessions.",
    tags: ["workout tops", "moisture-wicking", "gym"],
    relatedHrefs: ["/styles/workout-tops", "/styles/moisture-wicking-clothing", "/activities/gym"]
  },
  {
    slug: "best-running-shorts-with-pockets",
    title: "Best Running Shorts with Pockets",
    summary: "Compare running shorts by pocket security, liner comfort, inseam length, waistband feel, and warm-weather performance.",
    tags: ["running shorts", "pockets", "running"],
    relatedHrefs: ["/activities/running/running-shorts", "/activities/running", "/styles/workout-accessories"]
  },
  {
    slug: "best-joggers-for-women",
    title: "Best Joggers for Women",
    summary: "Compare women's joggers by rise, fabric weight, ankle shape, stretch, and whether they fit training, travel, or daily wear.",
    tags: ["joggers", "women", "athleisure"],
    relatedHrefs: ["/styles/joggers", "/women", "/styles/athleisure"]
  },
  {
    slug: "best-joggers-for-men",
    title: "Best Joggers for Men",
    summary: "Compare men's joggers by fit, fabric, pocket layout, taper, and whether they work better for training or casual wear.",
    tags: ["joggers", "men", "gym"],
    relatedHrefs: ["/styles/joggers", "/men", "/activities/gym"]
  },
  {
    slug: "best-hoodies-for-workouts",
    title: "Best Hoodies for Workouts",
    summary: "Compare workout hoodies by warmth, breathability, sleeve fit, pocket placement, and layering comfort before buying.",
    tags: ["hoodies", "layers", "gym"],
    relatedHrefs: ["/styles/hoodies", "/activities/gym", "/styles/athleisure"]
  },
  {
    slug: "best-compression-wear-for-training",
    title: "Best Compression Wear for Training",
    summary: "Compare compression wear by fit pressure, fabric recovery, range of motion, layering use, and workout intensity.",
    tags: ["compression", "training", "support"],
    relatedHrefs: ["/styles/compression-wear", "/activities/gym", "/styles/workout-tops"]
  },
  {
    slug: "best-yoga-leggings",
    title: "Best Yoga Leggings",
    summary: "Compare yoga leggings by softness, stretch, waistband comfort, opacity, and studio-to-everyday versatility.",
    tags: ["yoga", "leggings", "soft feel"],
    relatedHrefs: ["/activities/yoga", "/women/leggings", "/styles/premium-activewear"]
  },
  {
    slug: "best-gym-clothes-for-beginners",
    title: "Best Gym Clothes for Beginners",
    summary: "Compare beginner gym clothes by comfort, durability, sweat control, budget, and easy outfit pairing.",
    tags: ["gym", "budget", "training"],
    relatedHrefs: ["/activities/gym", "/deals/budget-activewear", "/styles/workout-tops"]
  },
  {
    slug: "best-athleisure-for-travel",
    title: "Best Athleisure for Travel",
    summary: "Compare travel athleisure by wrinkle resistance, pocket utility, stretch, layering options, and all-day comfort.",
    tags: ["athleisure", "travel", "joggers"],
    relatedHrefs: ["/styles/athleisure", "/styles/joggers", "/styles/hoodies"]
  },
  {
    slug: "best-plus-size-leggings",
    title: "Best Plus-Size Leggings",
    summary: "Compare plus-size leggings by waistband stability, opacity, size range, pocket options, and retailer return policy.",
    tags: ["plus size", "leggings", "fit"],
    relatedHrefs: ["/sizes-fit/plus-size-activewear", "/women/leggings", "/styles/athleisure"]
  },
  {
    slug: "best-plus-size-sports-bras",
    title: "Best Plus-Size Sports Bras",
    summary: "Compare plus-size sports bras by support range, band security, adjustability, coverage, and workout intensity.",
    tags: ["plus size", "sports bras", "support"],
    relatedHrefs: ["/sizes-fit/plus-size-activewear", "/women/sports-bras", "/activities/gym"]
  },
  {
    slug: "best-mens-activewear-brands",
    title: "Best Men's Activewear Brands",
    summary: "Compare men's activewear brands by training focus, fit consistency, fabric quality, price range, and return options.",
    tags: ["men", "brands", "training"],
    relatedHrefs: ["/men", "/brands", "/activities/gym"]
  },
  {
    slug: "best-womens-activewear-brands",
    title: "Best Women's Activewear Brands",
    summary: "Compare women's activewear brands by category strength, size range, fabric feel, price range, and retailer coverage.",
    tags: ["women", "brands", "fit"],
    relatedHrefs: ["/women", "/brands", "/styles/premium-activewear"]
  },
  {
    slug: "best-running-shoes-for-gym-and-road",
    title: "Best Running Shoes for Gym and Road",
    summary: "Compare running shoes for mixed use by cushioning, stability, treadmill comfort, road feel, and gym versatility.",
    tags: ["running shoes", "gym", "road"],
    relatedHrefs: ["/activities/running/running-shoes", "/activities/gym/training-shoes", "/activities/running"]
  },
  {
    slug: "best-training-shoes-for-hiit",
    title: "Best Training Shoes for HIIT",
    summary: "Compare HIIT training shoes by lateral support, grip, cushioning, heel stability, and durability.",
    tags: ["training shoes", "hiit", "gym"],
    relatedHrefs: ["/activities/gym/training-shoes", "/activities/gym", "/styles/compression-wear"]
  },
  {
    slug: "best-workout-accessories",
    title: "Best Workout Accessories",
    summary: "Compare workout accessories by utility, durability, packability, and whether they solve a real training problem.",
    tags: ["accessories", "gym", "running"],
    relatedHrefs: ["/styles/workout-accessories", "/activities/gym", "/activities/running"]
  },
  {
    slug: "best-moisture-wicking-shirts",
    title: "Best Moisture-Wicking Shirts",
    summary: "Compare moisture-wicking shirts by fabric weight, ventilation, drying speed, fit, and high-sweat comfort.",
    tags: ["moisture-wicking", "workout tops", "sweat"],
    relatedHrefs: ["/styles/moisture-wicking-clothing", "/styles/workout-tops", "/activities/gym"]
  },
  {
    slug: "best-sustainable-activewear-brands",
    title: "Best Sustainable Activewear Brands",
    summary: "Compare sustainable activewear brands by material claims, durability, transparency, category coverage, and return policies.",
    tags: ["sustainable", "brands", "materials"],
    relatedHrefs: ["/styles/sustainable-activewear", "/brands", "/styles/premium-activewear"]
  },
  {
    slug: "best-budget-activewear",
    title: "Best Budget Activewear",
    summary: "Compare budget activewear by durability, fabric feel, size availability, sale frequency, and return policy.",
    tags: ["budget", "deals", "value"],
    relatedHrefs: ["/deals/budget-activewear", "/deals", "/styles/workout-tops"]
  },
  {
    slug: "best-premium-activewear",
    title: "Best Premium Activewear",
    summary: "Compare premium activewear by fabric quality, construction, fit consistency, support, and long-term value.",
    tags: ["premium", "quality", "fit"],
    relatedHrefs: ["/styles/premium-activewear", "/brands/lululemon", "/women/leggings"]
  }
];

export const comparisonGuides = [
  {
    slug: "lululemon-vs-gymshark",
    title: "lululemon vs Gymshark",
    summary: "Compare lululemon and Gymshark by fit, fabric feel, training use, price range, and return policy before choosing a brand lane.",
    tags: ["premium", "gym", "brands"],
    relatedHrefs: ["/brands/lululemon", "/brands/gymshark", "/styles/premium-activewear"]
  },
  {
    slug: "nike-vs-adidas-activewear",
    title: "Nike vs Adidas Activewear",
    summary: "Compare Nike and Adidas activewear by running gear, gym clothes, athleisure, size coverage, and sale frequency.",
    tags: ["brands", "running", "gym"],
    relatedHrefs: ["/brands/nike", "/brands/adidas", "/activities/running"]
  },
  {
    slug: "leggings-vs-joggers",
    title: "Leggings vs Joggers",
    summary: "Compare leggings and joggers by compression, warmth, pocket utility, workout use, and everyday comfort.",
    tags: ["leggings", "joggers", "athleisure"],
    relatedHrefs: ["/women/leggings", "/styles/joggers", "/styles/athleisure"]
  },
  {
    slug: "running-shorts-vs-bike-shorts",
    title: "Running Shorts vs Bike Shorts",
    summary: "Compare running shorts and bike shorts by liner comfort, coverage, chafe control, pockets, and warm-weather training use.",
    tags: ["running shorts", "coverage", "summer"],
    relatedHrefs: ["/activities/running/running-shorts", "/activities/running", "/women/leggings"]
  },
  {
    slug: "sports-bra-low-impact-vs-high-impact",
    title: "Low-Impact vs High-Impact Sports Bras",
    summary: "Compare low-impact and high-impact sports bras by support, strap shape, compression, cup coverage, and activity match.",
    tags: ["sports bras", "support", "running"],
    relatedHrefs: ["/women/sports-bras", "/best/best-high-impact-sports-bras", "/activities/yoga"]
  },
  {
    slug: "premium-vs-budget-activewear",
    title: "Premium vs Budget Activewear",
    summary: "Compare premium and budget activewear by fabric quality, construction, fit consistency, durability, and sale timing.",
    tags: ["premium", "budget", "value"],
    relatedHrefs: ["/styles/premium-activewear", "/deals/budget-activewear", "/best/best-budget-activewear"]
  },
  {
    slug: "sustainable-vs-standard-activewear",
    title: "Sustainable vs Standard Activewear",
    summary: "Compare sustainable and standard activewear by material claims, durability, transparency, care needs, and price range.",
    tags: ["sustainable", "materials", "value"],
    relatedHrefs: ["/styles/sustainable-activewear", "/best/best-sustainable-activewear-brands", "/brands"]
  },
  {
    slug: "running-shoes-vs-training-shoes",
    title: "Running Shoes vs Training Shoes",
    summary: "Compare running shoes and training shoes by cushioning, lateral support, grip, heel stability, and workout use.",
    tags: ["running shoes", "training shoes", "gym"],
    relatedHrefs: ["/activities/running/running-shoes", "/activities/gym/training-shoes", "/best/best-training-shoes-for-hiit"]
  },
  {
    slug: "hoodies-vs-lightweight-jackets",
    title: "Workout Hoodies vs Lightweight Jackets",
    summary: "Compare workout hoodies and lightweight jackets by warmth, breathability, layering, pockets, and outdoor training use.",
    tags: ["hoodies", "layers", "running"],
    relatedHrefs: ["/styles/hoodies", "/activities/running", "/styles/athleisure"]
  },
  {
    slug: "compression-leggings-vs-yoga-leggings",
    title: "Compression Leggings vs Yoga Leggings",
    summary: "Compare compression leggings and yoga leggings by pressure, softness, stretch, opacity, and workout intensity.",
    tags: ["compression", "yoga", "leggings"],
    relatedHrefs: ["/styles/compression-wear", "/best/best-yoga-leggings", "/women/leggings"]
  },
  {
    slug: "plus-size-leggings-vs-standard-sizing",
    title: "Plus-Size Leggings vs Standard Sizing",
    summary: "Compare plus-size and standard-size leggings by waistband stability, size charts, opacity, length options, and return rules.",
    tags: ["plus size", "leggings", "fit"],
    relatedHrefs: ["/sizes-fit/plus-size-activewear", "/best/best-plus-size-leggings", "/women/leggings"]
  },
  {
    slug: "gymshark-vs-nike-training-clothes",
    title: "Gymshark vs Nike Training Clothes",
    summary: "Compare Gymshark and Nike training clothes by gym fit, fabric feel, price range, color drops, and everyday versatility.",
    tags: ["gym", "brands", "training"],
    relatedHrefs: ["/brands/gymshark", "/brands/nike", "/activities/gym"]
  }
];

const intentModifiers = [
  {
    slug: "with-pockets",
    label: "with Pockets",
    summary: "storage, pocket placement, phone security, waistband comfort, and everyday utility",
    tags: ["pockets", "storage", "utility"]
  },
  {
    slug: "for-running",
    label: "for Running",
    summary: "sweat control, bounce control, chafe reduction, weather fit, and secure movement",
    tags: ["running", "sweat", "training"]
  },
  {
    slug: "for-gym",
    label: "for the Gym",
    summary: "durability, range of motion, sweat management, layering, and workout intensity",
    tags: ["gym", "training", "durable"]
  },
  {
    slug: "budget",
    label: "on a Budget",
    summary: "price range, sale frequency, fabric tradeoffs, return rules, and long-term value",
    tags: ["budget", "value", "deals"]
  },
  {
    slug: "premium",
    label: "Premium Picks",
    summary: "fabric quality, construction, fit consistency, support, and whether the higher price makes sense",
    tags: ["premium", "quality", "fit"]
  },
  {
    slug: "plus-size",
    label: "Plus-Size Options",
    summary: "size range, waistband stability, support, coverage, size charts, and retailer return rules",
    tags: ["plus size", "fit", "support"]
  }
];

const intentCategorySlugs = ["leggings", "sports-bras", "workout-tops", "running-shorts", "joggers", "hoodies"];

export const intentGuides = intentCategorySlugs.flatMap((categorySlug) => {
  const category = categories.find((item) => item.slug === categorySlug);

  return intentModifiers.map((intent) => ({
    slug: `${categorySlug}-${intent.slug}`,
    title: `${category.name} ${intent.label}`,
    summary: `Compare ${category.name.toLowerCase()} ${intent.label.toLowerCase()} by ${intent.summary}. ActivewearEtc keeps these pages disclosure-safe and avoids fake reviews or unsupported performance claims.`,
    href: `/intent/${categorySlug}-${intent.slug}`,
    categorySlug,
    intentSlug: intent.slug,
    relatedHrefs: [category.href, "/about/how-we-rank-products", "/about/price-and-availability"],
    tags: [category.name, ...intent.tags]
  }));
});

const activityCategoryMatrix = {
  running: ["leggings", "sports-bras", "workout-tops", "running-shorts", "hoodies", "running-shoes", "workout-accessories"],
  yoga: ["leggings", "sports-bras", "workout-tops", "joggers", "hoodies", "yoga-wear", "athleisure"],
  gym: ["leggings", "sports-bras", "workout-tops", "joggers", "hoodies", "compression-wear", "gym-clothes", "training-shoes"],
  athleisure: ["leggings", "workout-tops", "joggers", "hoodies", "athleisure", "workout-accessories"]
};

export const activityCategoryGuides = Object.entries(activityCategoryMatrix).flatMap(([activitySlug, categorySlugs]) => {
  const activity = activityHubs.find((item) => item.slug === activitySlug);

  return categorySlugs.map((categorySlug) => {
    const category = categories.find((item) => item.slug === categorySlug);

    return {
      slug: categorySlug,
      activitySlug,
      categorySlug,
      name: `${activity.name} ${category.name}`,
      title: `${activity.name} ${category.name}`,
      summary: `Compare ${category.name.toLowerCase()} for ${activity.name.toLowerCase()} by fit, fabric, support, comfort, price range, size availability, and retailer return policy.`,
      href: `/activities/${activitySlug}/${categorySlug}`,
      relatedHrefs: [activity.href, category.href, "/about/how-we-rank-products"],
      tags: [activity.name, category.name, "activewear"]
    };
  });
});

export const segmentHubs = [
  { slug: "women", name: "Women's Activewear", href: "/shop/women", summary: "Women's activewear pages organized by category, fit, support level, activity, and retailer shopping checks." },
  { slug: "men", name: "Men's Activewear", href: "/shop/men", summary: "Men's activewear pages organized by training use, fabric, fit, price range, and brand coverage." },
  { slug: "plus-size", name: "Plus-Size Activewear", href: "/shop/plus-size", summary: "Plus-size activewear pages focused on size range, support, coverage, waistband stability, and return policies." },
  { slug: "budget", name: "Budget Activewear", href: "/shop/budget", summary: "Budget activewear pages focused on price, sale timing, fabric tradeoffs, durability, and return windows." },
  { slug: "premium", name: "Premium Activewear", href: "/shop/premium", summary: "Premium activewear pages focused on fabric quality, construction, fit consistency, and long-term value." },
  { slug: "sustainable", name: "Sustainable Activewear", href: "/shop/sustainable", summary: "Sustainable activewear pages focused on material claims, transparency, durability, and care expectations." }
];

const segmentCategoryMatrix = {
  women: ["leggings", "sports-bras", "workout-tops", "running-shorts", "joggers", "hoodies", "yoga-wear", "athleisure", "running-shoes", "training-shoes"],
  men: ["workout-tops", "running-shorts", "joggers", "hoodies", "compression-wear", "gym-clothes", "running-shoes", "training-shoes"],
  "plus-size": ["leggings", "sports-bras", "workout-tops", "running-shorts", "joggers", "hoodies"],
  budget: ["leggings", "sports-bras", "workout-tops", "running-shorts", "joggers", "hoodies", "running-shoes", "training-shoes"],
  premium: ["leggings", "sports-bras", "workout-tops", "joggers", "hoodies", "yoga-wear", "running-shoes", "training-shoes"],
  sustainable: ["leggings", "sports-bras", "workout-tops", "joggers", "hoodies", "yoga-wear"]
};

export const segmentCategoryGuides = Object.entries(segmentCategoryMatrix).flatMap(([segmentSlug, categorySlugs]) => {
  const segment = segmentHubs.find((item) => item.slug === segmentSlug);

  return categorySlugs.map((categorySlug) => {
    const category = categories.find((item) => item.slug === categorySlug);

    return {
      slug: categorySlug,
      segmentSlug,
      categorySlug,
      name: `${segment.name} ${category.name}`,
      title: `${segment.name} ${category.name}`,
      summary: `Compare ${segment.name.toLowerCase()} ${category.name.toLowerCase()} by fit, fabric, support, price range, retailer availability, return policy, and disclosure-safe shopping signals.`,
      href: `/shop/${segmentSlug}/${categorySlug}`,
      relatedHrefs: [segment.href, category.href, "/about/advertiser-disclosure"],
      tags: [segment.name, category.name, "shopping guide"]
    };
  });
});

const dealCategorySlugs = [
  "leggings",
  "sports-bras",
  "workout-tops",
  "running-shorts",
  "joggers",
  "hoodies",
  "compression-wear",
  "yoga-wear",
  "gym-clothes",
  "athleisure",
  "running-shoes",
  "training-shoes",
  "workout-accessories"
];

export const dealGuides = dealCategorySlugs.map((categorySlug) => {
  const category = categories.find((item) => item.slug === categorySlug);

  return {
    slug: `${categorySlug}-deals`,
    name: `${category.name} Deals`,
    title: `${category.name} Deals`,
    summary: `Compare ${category.name.toLowerCase()} deals by current merchant availability, price range, fit context, return policy, fabric tradeoffs, and whether the discount still matches the shopper's workout use case.`,
    href: `/deals/${categorySlug}-deals`,
    categorySlug,
    relatedHrefs: [category.href, "/about/price-and-availability", "/about/advertiser-disclosure"],
    tags: [category.name, "deals", "price check"]
  };
});

export const brandDealGuides = brandCategoryGuides
  .filter((guide) => categories.some((category) => category.slug === guide.categorySlug))
  .map((guide) => {
    const brand = brandHubs.find((item) => item.slug === guide.brandSlug);
    const category = categories.find((item) => item.slug === guide.categorySlug);

    return {
      slug: `${guide.brandSlug}-${guide.categorySlug}-deals`,
      name: `${brand.name} ${category.name} Deals`,
      title: `${brand.name} ${category.name} Deals`,
      summary: `Compare ${brand.name} ${category.name.toLowerCase()} deals by merchant availability, price range, size availability, return policy, discount context, and whether the product still matches the shopper's workout use case.`,
      href: `/deals/${guide.brandSlug}-${guide.categorySlug}-deals`,
      brandSlug: guide.brandSlug,
      categorySlug: guide.categorySlug,
      relatedHrefs: [guide.href, brand.href, category.href, "/about/price-and-availability"],
      tags: [brand.name, category.name, "deals"]
    };
  });

const fitGuideCategorySlugs = [
  "leggings",
  "sports-bras",
  "workout-tops",
  "running-shorts",
  "joggers",
  "hoodies",
  "compression-wear",
  "yoga-wear",
  "running-shoes",
  "training-shoes"
];

export const fitGuides = fitGuideCategorySlugs.map((categorySlug) => {
  const category = categories.find((item) => item.slug === categorySlug);

  return {
    slug: `${categorySlug}-fit-guide`,
    name: `${category.name} Fit Guide`,
    title: `${category.name} Fit Guide`,
    summary: `Compare ${category.name.toLowerCase()} sizing, fit signals, fabric behavior, support level, return-policy risk, and retailer size-chart details before choosing a product.`,
    href: `/sizes-fit/${categorySlug}-fit-guide`,
    categorySlug,
    relatedHrefs: [category.href, "/about/how-we-rank-products", "/about/price-and-availability"],
    tags: [category.name, "fit", "size guide"]
  };
});

const fabricModifiers = [
  {
    slug: "moisture-wicking",
    label: "Moisture-Wicking",
    summary: "sweat handling, drying expectations, fabric weight, breathability, and high-sweat comfort",
    tags: ["moisture-wicking", "sweat", "breathable"]
  },
  {
    slug: "compression",
    label: "Compression",
    summary: "support feel, stretch recovery, pressure level, range of motion, and workout intensity match",
    tags: ["compression", "support", "training"]
  },
  {
    slug: "sustainable",
    label: "Sustainable",
    summary: "material claims, recycled-content signals, durability, care expectations, and brand transparency",
    tags: ["sustainable", "materials", "durability"]
  },
  {
    slug: "lightweight",
    label: "Lightweight",
    summary: "fabric weight, layering comfort, warm-weather use, packability, and coverage tradeoffs",
    tags: ["lightweight", "layers", "warm weather"]
  }
];

const fabricCategorySlugs = ["leggings", "sports-bras", "workout-tops", "running-shorts", "joggers", "hoodies"];

export const fabricGuides = fabricCategorySlugs.flatMap((categorySlug) => {
  const category = categories.find((item) => item.slug === categorySlug);

  return fabricModifiers.map((fabric) => ({
    slug: `${fabric.slug}-${categorySlug}`,
    name: `${fabric.label} ${category.name}`,
    title: `${fabric.label} ${category.name}`,
    summary: `Compare ${fabric.label.toLowerCase()} ${category.name.toLowerCase()} by ${fabric.summary}. ActivewearEtc treats fabric claims as shopper signals, not guaranteed performance promises.`,
    href: `/styles/${fabric.slug}-${categorySlug}`,
    categorySlug,
    fabricSlug: fabric.slug,
    relatedHrefs: [category.href, "/about/editorial-policy", "/about/how-we-rank-products"],
    tags: [category.name, ...fabric.tags]
  }));
});

const useCaseModifiers = [
  {
    slug: "for-travel",
    label: "for Travel",
    summary: "packability, wrinkle expectations, pocket utility, all-day comfort, and outfit repeatability",
    tags: ["travel", "packable", "comfort"]
  },
  {
    slug: "for-beginners",
    label: "for Beginners",
    summary: "easy fit, price risk, return flexibility, fabric comfort, and simple outfit pairing",
    tags: ["beginners", "value", "comfort"]
  },
  {
    slug: "for-hot-weather",
    label: "for Hot Weather",
    summary: "fabric weight, breathability, coverage, sweat visibility, and warm-weather training comfort",
    tags: ["hot weather", "lightweight", "breathable"]
  },
  {
    slug: "for-cold-weather",
    label: "for Cold Weather",
    summary: "layering, warmth, fabric weight, mobility, and whether the piece works before and after workouts",
    tags: ["cold weather", "layers", "warmth"]
  },
  {
    slug: "for-high-sweat-workouts",
    label: "for High-Sweat Workouts",
    summary: "sweat handling, cling, drying expectations, odor-care needs, and high-movement comfort",
    tags: ["high sweat", "training", "moisture"]
  },
  {
    slug: "for-everyday-wear",
    label: "for Everyday Wear",
    summary: "comfort, styling range, opacity, pockets, care needs, and whether it still works for light movement",
    tags: ["everyday", "athleisure", "comfort"]
  }
];

const useCaseCategorySlugs = ["leggings", "sports-bras", "workout-tops", "running-shorts", "joggers", "hoodies", "running-shoes", "training-shoes"];

export const useCaseGuides = useCaseCategorySlugs.flatMap((categorySlug) => {
  const category = categories.find((item) => item.slug === categorySlug);

  return useCaseModifiers.map((useCase) => ({
    slug: `${categorySlug}-${useCase.slug}`,
    name: `${category.name} ${useCase.label}`,
    title: `${category.name} ${useCase.label}`,
    summary: `Compare ${category.name.toLowerCase()} ${useCase.label.toLowerCase()} by ${useCase.summary}. ActivewearEtc keeps use-case pages helpful, disclosure-safe, and free of fake review language.`,
    href: `/use-cases/${categorySlug}-${useCase.slug}`,
    categorySlug,
    useCaseSlug: useCase.slug,
    relatedHrefs: [category.href, "/about/editorial-policy", "/about/price-and-availability"],
    tags: [category.name, ...useCase.tags]
  }));
});

const seasonalModifiers = [
  {
    slug: "summer",
    label: "Summer",
    summary: "warm-weather comfort, breathability, fabric weight, sweat visibility, coverage, and travel-ready use",
    tags: ["summer", "hot weather", "lightweight"]
  },
  {
    slug: "winter",
    label: "Winter",
    summary: "layering, warmth, mobility, fabric weight, cold-weather errands, and pre-workout or post-workout comfort",
    tags: ["winter", "layers", "warmth"]
  },
  {
    slug: "spring",
    label: "Spring",
    summary: "transitional layering, rain-aware errands, lighter fabrics, color refreshes, and outdoor workout versatility",
    tags: ["spring", "layers", "outdoor"]
  },
  {
    slug: "holiday",
    label: "Holiday",
    summary: "giftability, sale timing, return windows, size-risk management, color availability, and price-check discipline",
    tags: ["holiday", "gifts", "deals"]
  }
];

const seasonalCategorySlugs = ["leggings", "sports-bras", "workout-tops", "running-shorts", "joggers", "hoodies", "running-shoes", "training-shoes"];

export const seasonalGuides = seasonalCategorySlugs.flatMap((categorySlug) => {
  const category = categories.find((item) => item.slug === categorySlug);

  return seasonalModifiers.map((season) => ({
    slug: `${season.slug}-${categorySlug}`,
    name: `${season.label} ${category.name}`,
    title: `${season.label} ${category.name}`,
    summary: `Compare ${season.label.toLowerCase()} ${category.name.toLowerCase()} by ${season.summary}. ActivewearEtc keeps seasonal shopping pages evergreen and reminds shoppers to verify current price and availability with the retailer.`,
    href: `/seasonal/${season.slug}-${categorySlug}`,
    categorySlug,
    seasonSlug: season.slug,
    relatedHrefs: [category.href, "/about/price-and-availability", "/deals"],
    tags: [category.name, ...season.tags]
  }));
});

export const allowedTaxonomy = [
  "leggings",
  "sports bras",
  "workout tops",
  "running shorts",
  "joggers",
  "hoodies",
  "compression wear",
  "yoga wear",
  "gym clothes",
  "athleisure",
  "plus-size activewear",
  "men's activewear",
  "women's activewear",
  "running shoes",
  "training shoes",
  "workout accessories",
  "moisture-wicking clothing",
  "sustainable activewear",
  "budget activewear",
  "premium activewear"
];
