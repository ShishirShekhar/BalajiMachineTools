import { Link } from "react-router-dom";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import ActionButton from "../ActionButton";

const ProductCard = ({ product }) => {
  let message = `Hello, I visited this website ${
    window.location.href
  } , and I would like to know more about ${product?.name || ""}`;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="rounded-xl md:w-1/2 shadow-xl">
        <img
          src={product?.img || ""}
          alt={product?.name || "Product"}
          className="rounded-xl p-10 w-full h-full "
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-5 py-5 md:py-0 md:px-10 md:w-1/2 justify-evenly">
        <div>
          <Link to={"/products"}>
            <p className=" text-blue-500">More products</p>
          </Link>
          <h1 className="text-4xl">{product?.name || "Product"}</h1>
          <div className="flex flex-wrap py-2 items-center">
            <div className="flex text-yellow-500 items-center pr-4">
              <span className="pr-2">{product?.stars || 0}.0</span>
              {Array.from({ length: 5 }, (element, index) => {
                return (
                  <span key={index} className=" text-xl">
                    {index + 1 > product?.stars ? (
                      <RiStarSLine />
                    ) : (
                      <RiStarSFill />
                    )}
                  </span>
                );
              })}
            </div>
            <span className="text-blue-500">
              {product?.ratings || 0} ratings
            </span>
          </div>
          <div className="h-0.5 bg-gray-400" />
        </div>

        <div>
          <h2 className="text-xl">About Machine</h2>
          <p className=" max-h-64 overflow-scroll">
            {product?.description || "Product Description"}
          </p>
        </div>
        <div>
          <h2 className="text-xl">Price Range</h2>
          <p className="">Min Price: ₹{product?.minPrice || 0}</p>
          <p className="">Max Price: ₹{product?.maxPrice || 0}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <ActionButton
            type="primary"
            text="Enquire Now"
            action="whatsapp"
            value={message}
            size="medium"
          />
          <div className="flex flex-col md:flex-row w-full gap-2">
            <ActionButton
              type="secondary"
              text="Email Us"
              action="mail"
              value={`salesbalajimachines@gmail.com?subject=Inquiry for ${product.name}&body=${message}`}
              size="medium"
            />
            <ActionButton
              type="secondary"
              text="Call Us"
              action="call"
              value={8437680240}
              size="medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
