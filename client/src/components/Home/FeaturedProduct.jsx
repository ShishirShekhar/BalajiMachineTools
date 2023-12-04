import { Link } from "react-router-dom"

const FeaturedProduct = (props) => {
  return (
    <div className="py-10 px-10 text-4xl featured-products">
      <h1 className="text-center font-semibold">{props.title}</h1>
      <div className="flex justify-around py-10">
        {props.products.map((product, index) => {
          return (
            <Link to={`/product/${product.id}`}>
              <div className="featured-product" key={index + product.name}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full"
                />
                <div className="overlay">
                  <p className="text">{product.name}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProduct;
