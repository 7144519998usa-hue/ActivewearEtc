import { siteConfig } from "./siteConfig";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function productSchema(product) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.brand} ${product.name}`,
    brand: {
      "@type": "Brand",
      name: product.brand
    },
    category: product.category,
    description: product.bestFor,
    url: `${siteConfig.siteUrl}${product.href}`
  };

  if (product.exactOfferUrl) {
    schema.offers = {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: product.priceRange
      },
      availability: "https://schema.org/InStock",
      url: `${siteConfig.siteUrl}${product.href}`
    };
  }

  return schema;
}

export function collectionPageSchema({ title, description, path, items = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${siteConfig.siteUrl}${path}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name || item.title,
        url: `${siteConfig.siteUrl}${item.href}`
      }))
    }
  };
}

export function faqSchema({ path, faqs = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${siteConfig.siteUrl}${path}`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function breadcrumbSchema({ items = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.href}`
    }))
  };
}

export function itemListSchema({ title, path, items = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    url: `${siteConfig.siteUrl}${path}`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name || item.title || item.label,
      url: `${siteConfig.siteUrl}${item.href}`
    }))
  };
}
