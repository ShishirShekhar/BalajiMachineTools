import { Link, useParams } from "react-router-dom";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { products } from "../constants/products";

const Product = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  let message = `Hello, I visited this website https://smtlathemachine.vercel.app/ , and I would like to know more about ${product.name}`;
  message = message.replace(/ /g, "%20");

  return (
    <div className="min-h-screen py-10 px-10 ">
      <div className="flex flex-col md:flex-row">
        <div className="rounded-xl md:w-1/2 shadow-xl">
          <img
            src={product.img}
            alt={product.name}
            className="rounded-xl p-10 w-full h-full "
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-5 py-5 md:py-0 md:px-10 md:w-1/2 justify-evenly">
          <div>
            <Link to={"/"}>
              <p className=" text-blue-500">More products</p>
            </Link>
            <h1 className="text-4xl">{product.name}</h1>
            <div className="flex flex-wrap py-2 items-center">
              <div className="flex text-yellow-500 items-center pr-4">
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
              </div>
              <span className="text-blue-500">{product.ratings} ratings</span>
            </div>
            <div className="h-0.5 bg-gray-400" />
          </div>

          <div>
            <h2 className="text-xl">About Machine</h2>
            <p className=" max-h-64 overflow-scroll">{product.description}</p>
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

      <div className="py-5 pt-10 overflow-scroll">
        <h1 className="text-2xl pb-2">Technical Specification:</h1>
        <table className="table-auto">
          <thead>
            <tr className="border border-x-0">
              {Object.entries(product.specifications).map((items) => (
                <th
                  className="text-md px-6 py-3 text-center"
                  key={items[0]}
                  style={{ minWidth: "12rem" }}
                >
                  {items[0]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(product.specifications)[0].map((_, index) => (
              <tr>
                {Object.entries(product.specifications).map((items) => (
                  <td className="text-md px-6 py-1 text-center">
                    {items[1][index]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
