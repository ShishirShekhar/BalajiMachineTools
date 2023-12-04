import { Link, useParams } from "react-router-dom";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";

import Nav from "../components/Product/Nav";
import { products } from "../constants/products";

const Product = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  let message = `Hello, I visited this website https://smtlathemachine.vercel.app/ , and I would like to know more about ${product.name}`;
  message = message.replace(/ /g, "%20");

  return (
    <div>
      <div className="h-screen">
        <Nav />
        <div className="py-10 px-10 flex h-5/6">
          <div className="rounded-xl h-full w-1/2 shadow-xl">
            <img
              src={product.img}
              alt={product.name}
              className="rounded-xl p-10 w-full h-full "
              loading="lazy"
            />
          </div>

          <div className="flex flex-col px-10 w-1/2 justify-evenly">
            <div>
              <Link to={"/"}>
                <p className=" text-blue-500">More products</p>
              </Link>
              <h1 className="text-4xl p-0">{product.name}</h1>
              <div className="flex py-2 items-center text-yellow-500">
                <span className="pr-2">{product.stars}.0</span>
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
                <span className="px-4 text-blue-500">
                  {product.ratings} ratings
                </span>
              </div>
              <div className="h-0.5 bg-gray-400" />
            </div>

            <div>
              <h2 className="text-xl">About Machine</h2>
              <p className=" h-64">{product.description}</p>
            </div>
            <div>
              <h2 className="text-xl">Price Range</h2>
              <p className="">Min Price: ₹{product.minPrice}</p>
              <p className="">Max Price: ₹{product.maxPrice}</p>
            </div>
            <a
              href={`https://wa.me/7091045216?text=${message}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="w-full bg-blue-500 rounded-lg text-white p-2 h-10 flex items-center justify-center transition hover:bg-blue-700 hover:text-xl">
                Enquire Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
