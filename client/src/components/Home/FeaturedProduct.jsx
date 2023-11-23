const FeaturedProduct = (props) => {
  return (
    <div className="py-10 text-4xl">
      <h1 className="text-center">{props.title}</h1>
      <div className="flex justify-around py-10">
        {props.products.map((product, index) => {
          return (
            <div className="featured-product" key={index + product.name}>
              <img src={product.img} alt={product.name} />
              <div className="overlay">
                <p className="text">{product.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProduct;
