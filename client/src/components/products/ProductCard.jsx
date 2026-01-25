import { memo } from "react";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const renderStarRating = (stars) => (
  <div
    className="flex items-center pr-4 text-yellow-500"
    role="img"
    aria-label={`${stars} out of 5 stars`}
  >
    {Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-xl" aria-hidden="true">
        {index + 1 > stars ? <RiStarSLine /> : <RiStarSFill />}
      </span>
    ))}
  </div>
);

const ProductCard = memo(({ product }) => (
  <article className="box-shadow group u-hover-lift flex h-full w-full transform flex-col justify-between rounded-lg bg-white p-3 focus-within:-translate-y-2 focus-within:shadow-2xl active:scale-95 sm:rounded-xl sm:p-4 md:active:scale-100">
    <div className="flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
      <Link to={`/products/${product?.id}`} aria-label={`View details of ${product?.name}`}>
        <img
          src={product?.img}
          alt={product?.name || "Product"}
          loading="lazy"
          className="h-40 w-40 rounded-lg object-contain p-3 transition-transform duration-300 group-hover:scale-110 sm:h-56 sm:w-56 sm:rounded-xl sm:p-4"
        />
      </Link>
    </div>

    <div className="pt-3 sm:pt-4">
      <h1 className="line-clamp-2 py-2 text-base font-semibold text-gray-800 transition-colors group-hover:text-blue-600 sm:text-xl">
        {product?.name || "Product"}
      </h1>
      <div className="flex flex-col flex-wrap items-start justify-between gap-2 sm:flex-row sm:items-center sm:gap-0">
        {renderStarRating(product?.stars)}
        <span className="u-badge-blue">{product?.ratings || 0} ratings</span>
      </div>
      <div className="flex flex-wrap items-center gap-2 py-2 sm:py-3">
        <p className="text-lg font-bold text-gray-900 sm:text-2xl">₹{product?.minPrice || 0}</p>
        <p className="text-gray-400">-</p>
        <p className="text-lg font-bold text-gray-900 sm:text-2xl">₹{product?.maxPrice || 0}</p>
      </div>
    </div>

    <Link to={`/products/${product?.id}`}>
      <button className="h-10 w-full transform rounded-lg bg-linear-to-r from-yellow-500 to-yellow-400 text-sm font-semibold text-gray-900 shadow-md transition-all duration-300 hover:scale-105 hover:from-yellow-600 hover:to-yellow-500 hover:shadow-lg focus:scale-105 focus:from-yellow-600 focus:to-yellow-500 focus:shadow-lg focus:ring-2 focus:ring-yellow-300 active:scale-95 sm:h-12 sm:text-base md:active:scale-100">
        Buy Now
      </button>
    </Link>
  </article>
));

ProductCard.displayName = "ProductCard";

export default ProductCard;
