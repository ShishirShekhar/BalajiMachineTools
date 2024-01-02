import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const product = props.product;
  return (
    <div className="box-shadow rounded-xl p-2 w-full h-full flex flex-col justify-between">
      <div className="flex items-center justify-center">
        <img
          src={product.img}
          alt={product.name}
          className="rounded-xl p-4 h-56 w-56 hover:p-0 transition"
        />
      </div>

      <div>
        <h1 className="text-xl py-2">{product.name || "Product"}</h1>
        <div className="flex flex-wrap justify-between">
          <div className="flex text-yellow-500 items-center pr-4">
            <span className="pr-2">{product.stars || 0}.0</span>
            {Array.from({ length: 5 }, (element, index) => {
              return (
                <span key={index} className=" text-xl">
                  {index + 1 > product.stars ? (
                    <RiStarSLine />
                  ) : (
                    <RiStarSFill />
                  )}
                </span>
              );
            })}
          </div>
          <span className="text-blue-500">{product.ratings || 0} ratings</span>
        </div>
        <div className="flex flex-wrap gap-2 py-2">
          <p>₹{product.minPrice || 0}</p>
          <p>-</p>
          <p>₹{product.maxPrice || 0}</p>
        </div>
      </div>
      
      <Link to={`/products/${product.id}`}>
        <button className="bg-yellow-500 rounded w-full h-10 hover:text-xl transition">
          Buy Now
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
