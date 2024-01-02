import React from "react";

const HomeAbout = () => {
  return (
    <div id="about" className="py-10 px-5 md:px-10">
      <h1 className="text-4xl text-center font-semibold py-10">About Us</h1>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2">
          <h2 className="text-2xl mb-3">Our History</h2>
          <p>
            Balaji Machine Tools, established in 1969, is dedicated to serving
            various industrial segments. Our R&D Department, equipped with
            experienced specialists, constantly contributes innovative
            solutions. Adhering to industry standards, we offer a wide range of
            products, making us a leading company in the industry.
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl mb-3">Our Mission</h2>
          <p>
            Our mission is to provide reliable and durable machine tools that
            cater to the diverse needs of different industrial sectors. We focus
            on innovation, quality, and consistent performance to exceed
            customer expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
