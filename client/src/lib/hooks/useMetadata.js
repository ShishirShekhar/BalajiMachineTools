import { useEffect } from "react";
import { updateMetadata, SITE_CONFIG } from "../utils/metadata";

/**
 * Hook to update page metadata on mount
 * @param {Object} metadata - Metadata configuration
 * @param {string} metadata.title - Page title
 * @param {string} metadata.description - Page description
 * @param {string} metadata.image - OG image URL
 * @param {string} metadata.url - Page URL
 * @param {string} metadata.type - OG type
 */
export const useMetadata = (metadata = {}) => {
  useEffect(() => {
    updateMetadata({
      title: metadata.title || SITE_CONFIG.name,
      description: metadata.description || SITE_CONFIG.description,
      image: metadata.image || SITE_CONFIG.image,
      url: metadata.url || SITE_CONFIG.url,
      type: metadata.type || "website",
    });
  }, [metadata]);
};

export default useMetadata;
