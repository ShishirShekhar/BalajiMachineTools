import { Link } from "react-router-dom";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";

const ProductCard = ({ product }) => {
  let message = `Hello, I visited this website https://smtlathemachine.vercel.app/ , and I would like to know more about ${
    product?.name || ""
  }`;
  message = message.replace(/ /g, "%20");

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
          <Link to={"/"}>
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
          <a
            href={`https://wa.me/7091045216?text=${message}`}
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <button className="w-full bg-blue-500 rounded-lg text-white p-2 h-10 flex items-center justify-center transition hover:bg-blue-700 hover:text-xl">
              Enquire Now
            </button>
          </a>
          <div className="flex flex-col md:flex-row w-full gap-2">
            <a
              href={`mailto:salesbalajimachines@gmail.com?subject=Inquiry for ${product.name}&body=${message}`}
              target="_blank"
              rel="noreferrer"
              className="w-full"
            >
              <button className="w-full bg-blue-500 rounded-lg text-white p-2 h-10 flex items-center justify-center transition hover:bg-blue-700 hover:text-xl">
                Email Us
              </button>
            </a>
            <a
              href="tel:+918437680240"
              target="_blank"
              rel="noreferrer"
              className="w-full"
            >
              <button className="w-full bg-blue-500 rounded-lg text-white p-2 h-10 flex items-center justify-center transition hover:bg-blue-700 hover:text-xl">
                Call Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
