/**
 * Metadata management utility for dynamic page title and meta tag updates
 */

export const SITE_CONFIG = {
  name: "Balaji Machine Tools",
  description: "Quality industrial machinery and tools for modern manufacturing",
  url: "https://balijimachinetools.com",
  image: "/og-image.jpg",
  twitterHandle: "@balijimachinetools",
};

/**
 * Update page title and meta tags dynamically
 * @param {Object} metadata - Metadata object
 * @param {string} metadata.title - Page title (appended with site name)
 * @param {string} metadata.description - Page description
 * @param {string} metadata.image - OG image URL
 * @param {string} metadata.url - Page URL
 * @param {string} metadata.type - OG type (default: 'website')
 */
export const updateMetadata = ({
  title = SITE_CONFIG.name,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.image,
  url = SITE_CONFIG.url,
  type = "website",
} = {}) => {
  // Update page title
  const fullTitle = title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`;
  document.title = fullTitle;

  // Update or create meta tags
  updateMetaTag("description", description);
  updateMetaTag("og:title", fullTitle, "property");
  updateMetaTag("og:description", description, "property");
  updateMetaTag("og:image", image, "property");
  updateMetaTag("og:url", url, "property");
  updateMetaTag("og:type", type, "property");
  updateMetaTag("twitter:title", fullTitle);
  updateMetaTag("twitter:description", description);
  updateMetaTag("twitter:image", image);

  // Update canonical URL
  updateCanonicalURL(url);
};

/**
 * Update a single meta tag
 * @param {string} name - Meta tag name or property
 * @param {string} content - Meta tag content
 * @param {string} attribute - Attribute type ('name' or 'property')
 */
const updateMetaTag = (name, content, attribute = "name") => {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};

/**
 * Update canonical URL
 * @param {string} url - Canonical URL
 */
const updateCanonicalURL = (url) => {
  let canonical = document.querySelector("link[rel='canonical']");

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = url;
};

/**
 * Structured data for schema.org markup
 */
export const getStructuredData = (type, data = {}) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    image: SITE_CONFIG.image,
  };

  return { ...baseData, ...data };
};

/**
 * Get product-specific metadata
 */
export const getProductMetadata = (product) => {
  return {
    title: product.name,
    description: product.description || `${product.name} - Quality machine tool`,
    image: product.image || SITE_CONFIG.image,
    url: `${SITE_CONFIG.url}/products/${product.id}`,
    type: "product",
  };
};
