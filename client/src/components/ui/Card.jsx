const Card = ({ children, className = "", hover = true }) => (
  <div
    className={`rounded-2xl bg-white p-6 shadow-lg ${
      hover ? "transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" : ""
    } ${className}`}
  >
    {children}
  </div>
);

export default Card;
