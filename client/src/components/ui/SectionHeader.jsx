/**
 * Reusable section header component with gradient text and underline
 * @param {string} title - The section title
 * @param {string} subtitle - Optional subtitle text
 * @param {string} className - Additional CSS classes
 */
const SectionHeader = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`fade-in-up mb-8 text-center sm:mb-12 ${className}`}>
      <h2 className="u-text-primary-gradient u-section-title mb-3">{title}</h2>
      <div className="u-divider-primary"></div>
      {subtitle && <p className="u-section-subtitle mt-3 px-2 sm:mt-4">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
