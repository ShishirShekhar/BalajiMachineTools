import { Link } from "react-router-dom";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";

const ProductCard = ({ product }) => {
  const renderStars = () => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-xl">
        {index + 1 > product?.stars ? <RiStarSLine /> : <RiStarSFill />}
      </span>
    ));
    return (
      <div className="flex text-yellow-500 items-center pr-4">{stars}</div>
    );
  };

  return (
    <div className="box-shadow rounded-xl p-2 w-full h-full flex flex-col justify-between">
      <div className="flex items-center justify-center">
        <Link to={`/products/${product?.id}`}>
          <img
            src={product?.img}
            alt={product?.name || "Product"}
            className="rounded-xl p-4 h-56 w-56 hover:p-0 transition"
          />
        </Link>
      </div>

      <div>
        <h1 className="text-xl py-2">{product?.name || "Product"}</h1>
        <div className="flex flex-wrap justify-between">
          {renderStars()}
          <span className="text-blue-500">{product?.ratings || 0} ratings</span>
        </div>
        <div className="flex flex-wrap gap-2 py-2">
          <p>₹{product?.minPrice || 0}</p>
          <p>-</p>
          <p>₹{product?.maxPrice || 0}</p>
        </div>
      </div>

      <Link to={`/products/${product?.id}`}>
        <button className="bg-yellow-500 rounded w-full h-10 hover:text-xl transition">
          Buy Now
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
