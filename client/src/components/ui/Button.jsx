import { Link } from "react-router-dom";

const BASE_STYLES =
  "w-full rounded-lg flex items-center justify-center transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1";

const SIZE_STYLES = {
  small: { text: "text-xs sm:text-sm", padding: "px-3 py-2 sm:px-4 sm:py-2" },
  medium: {
    text: "text-sm sm:text-base",
    padding: "px-4 py-3 sm:px-6 sm:py-3",
  },
  large: { text: "text-base sm:text-lg", padding: "px-6 py-3 sm:px-8 sm:py-4" },
};

const TYPE_STYLES = {
  primary:
    "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600",
  secondary:
    "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white backdrop-blur-sm bg-white/90",
};

const ACTION_RENDERERS = {
  call: (buttonClassName, text, value) => (
    <a href={`tel:${value}`} className="w-full">
      <button className={buttonClassName} aria-label={`Call ${value}`}>
        {text}
      </button>
    </a>
  ),
  mail: (buttonClassName, text, value) => (
    <a href={`mailto:${value}`} className="w-full">
      <button className={buttonClassName} aria-label={`Email ${value}`}>
        {text}
      </button>
    </a>
  ),
  whatsapp: (buttonClassName, text, value) => (
    <a
      href={`https://wa.me/8437680240?text=${encodeURIComponent(value)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <button className={buttonClassName} aria-label="Contact via WhatsApp">
        {text}
      </button>
    </a>
  ),
  link: (buttonClassName, text, value) => (
    <Link to={value} className="w-full">
      <button className={buttonClassName}>{text}</button>
    </Link>
  ),
  default: (buttonClassName, text) => <button className={buttonClassName}>{text}</button>,
};

const ActionButton = ({
  type = "primary",
  text = "Click Me",
  action = "default",
  value = "none",
  size = "medium",
}) => {
  const sizeStyle = SIZE_STYLES[size] || SIZE_STYLES.medium;
  const typeStyle = TYPE_STYLES[type] || TYPE_STYLES.primary;
  const buttonClassName = `${BASE_STYLES} ${sizeStyle.text} ${sizeStyle.padding} ${typeStyle}`;

  const renderer = ACTION_RENDERERS[action] || ACTION_RENDERERS.default;
  return renderer(buttonClassName, text, value);
};

export default ActionButton;
