const amazonAssociateTag = "activewearetc.-20";

function amazonSearchUrl(query) {
  const params = new URLSearchParams({ k: query, tag: amazonAssociateTag });
  return `https://www.amazon.com/s?${params.toString()}`;
}

// Slider backgrounds use public editorial/lifestyle imagery, not Amazon product photos.
// Keep Amazon product images out of this file unless they come from an Amazon Associates-approved source.
export const homepageActivewearSlides = [
  {
    id: 1,
    title: "Activewear that looks as good as it moves.",
    subtitle: "Shop polished leggings, sets, and training layers for everyday momentum.",
    asin: "",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1800&q=86",
    affiliateUrl: amazonSearchUrl("premium womens workout leggings"),
    brand: "Premium activewear",
    alt: "Bright studio activewear training scene",
    cta: "Shop on Amazon"
  },
  {
    id: 2,
    title: "Clean studio fits for yoga, barre, and Pilates.",
    subtitle: "Soft colors, easy stretch, and low-impact essentials for calm movement.",
    asin: "",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1800&q=86",
    affiliateUrl: amazonSearchUrl("premium yoga wear women"),
    brand: "Yoga wear",
    alt: "Light yoga studio activewear scene",
    cta: "Shop on Amazon"
  },
  {
    id: 3,
    title: "Running pieces for fresh-air routines.",
    subtitle: "Light layers, shorts, leggings, and shoes for road, trail, and treadmill days.",
    asin: "",
    imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1800&q=86",
    affiliateUrl: amazonSearchUrl("running apparel women activewear"),
    brand: "Running apparel",
    alt: "Runner in light outdoor activewear",
    cta: "Shop on Amazon"
  },
  {
    id: 4,
    title: "Training staples with a sharper finish.",
    subtitle: "Find tops, bras, shorts, and layers that keep the gym outfit pulled together.",
    asin: "",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1800&q=86",
    affiliateUrl: amazonSearchUrl("womens gym clothes matching activewear"),
    brand: "Gym clothes",
    alt: "Premium gym activewear training scene",
    cta: "Shop on Amazon"
  },
  {
    id: 5,
    title: "Build a workout wardrobe that feels intentional.",
    subtitle: "Compare neutral layers, compression fits, and comfortable basics in one place.",
    asin: "",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=86",
    affiliateUrl: amazonSearchUrl("premium activewear women"),
    brand: "Workout wardrobe",
    alt: "Light-toned activewear workout essentials",
    cta: "Shop on Amazon"
  },
  {
    id: 6,
    title: "Strength-day outfits with clean structure.",
    subtitle: "Shop supportive bras, breathable tops, leggings, and gym-ready layers.",
    asin: "",
    imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1800&q=86",
    affiliateUrl: amazonSearchUrl("womens strength training activewear"),
    brand: "Strength training",
    alt: "Strength training activewear in a bright gym",
    cta: "Shop on Amazon"
  },
  {
    id: 7,
    title: "Performance basics without the clutter.",
    subtitle: "Quickly browse sweat-ready tops, shorts, compression wear, and workout accessories.",
    asin: "",
    imageUrl: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1800&q=86",
    affiliateUrl: amazonSearchUrl("moisture wicking workout clothes women"),
    brand: "Performance basics",
    alt: "Modern activewear performance training scene",
    cta: "Shop on Amazon"
  },
  {
    id: 8,
    title: "Gym essentials for the full routine.",
    subtitle: "From sneakers and bags to leggings and tops, start with the pieces you use most.",
    asin: "",
    imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1800&q=86",
    affiliateUrl: amazonSearchUrl("gym essentials activewear women"),
    brand: "Gym essentials",
    alt: "Clean gym essentials and activewear scene",
    cta: "Shop on Amazon"
  },
  {
    id: 9,
    title: "Athleisure that works beyond the workout.",
    subtitle: "Find jackets, joggers, hoodies, sets, and sneakers for gym-to-street days.",
    asin: "",
    imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1800&q=86",
    affiliateUrl: amazonSearchUrl("athleisure jackets women activewear"),
    brand: "Athleisure",
    alt: "Premium athleisure and training lifestyle scene",
    cta: "Shop on Amazon"
  },
  {
    id: 10,
    title: "Inclusive activewear for every shopping lane.",
    subtitle: "Browse plus-size, budget, premium, men's, and women's activewear without the noise.",
    asin: "",
    imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1800&q=86",
    affiliateUrl: amazonSearchUrl("plus size activewear women"),
    brand: "Inclusive activewear",
    alt: "Inclusive activewear lifestyle training scene",
    cta: "Shop on Amazon"
  }
];
