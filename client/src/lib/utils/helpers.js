/**
 * Utility function to scroll to top of page smoothly
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

/**
 * Utility function to format price with currency symbol
 * @param {number} price - The price to format
 * @returns {string} - Formatted price string
 */
export const formatPrice = (price) => {
  return `₹${price?.toLocaleString("en-IN") || 0}`;
};

/**
 * Utility function to generate WhatsApp link with message
 * @param {string} phoneNumber - Phone number without country code
 * @param {string} message - Default message
 * @returns {string} - WhatsApp link
 */
export const getWhatsAppLink = (phoneNumber, message = "") => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
