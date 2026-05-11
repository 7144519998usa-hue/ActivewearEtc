const DEFAULT_AMAZON_ASSOCIATE_TAG = "activewearetc.-20";

export function buildAffiliateLink(product) {
  if (!product?.merchantUrl) {
    return null;
  }

  const url = new URL(product.merchantUrl);
  const amazonTag = process.env.ACTIVEWEAR_AMAZON_ASSOCIATE_TAG || DEFAULT_AMAZON_ASSOCIATE_TAG;

  if (url.hostname.includes("amazon.") && amazonTag && !url.searchParams.has("tag")) {
    url.searchParams.set("tag", amazonTag);
  }

  return url.toString();
}

export function hasLiveAffiliateLink(product) {
  return Boolean(buildAffiliateLink(product));
}
