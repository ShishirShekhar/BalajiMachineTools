import React from "react";

const popular = [
  {
    name: "Extra Heavy Duty Roll Turning Lathe Machine",
    img: "https://static.connect2india.com/c2icd/company_resources/1035057/images/products/product-extra-heavy-duty-roll-turning-lathe-machine.jpg",
  },
  {
    name: "Extra Heavy Duty Roll Turning Lathe Machine",
    img: "https://static.connect2india.com/c2icd/company_resources/1035057/images/products/product-extra-heavy-duty-roll-turning-lathe-machine.jpg",
  },
  {
    name: "Extra Heavy Duty Roll Turning Lathe Machine",
    img: "https://static.connect2india.com/c2icd/company_resources/1035057/images/products/product-extra-heavy-duty-roll-turning-lathe-machine.jpg",
  },
  {
    name: "Extra Heavy Duty Roll Turning Lathe Machine",
    img: "https://static.connect2india.com/c2icd/company_resources/1035057/images/products/product-extra-heavy-duty-roll-turning-lathe-machine.jpg",
  },
  {
    name: "Extra Heavy Duty Roll Turning Lathe Machine",
    img: "https://static.connect2india.com/c2icd/company_resources/1035057/images/products/product-extra-heavy-duty-roll-turning-lathe-machine.jpg",
  },
];

const Popular = () => {
  return (
    <div className="py-4 text-4xl">
      <h1 className="text-center">Popular Products</h1>
      <div className="flex justify-around">
        {popular.map((product, index) => {
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

export default Popular;
