import { memo } from "react";
import { FaArrowLeft, FaRupeeSign } from "react-icons/fa";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "../../ui";

const ProductDetail = memo(({ product }) => {
  const message = `Hello, I visited your website and I'm interested in ${product?.name || "your product"}. Could you provide more information?`;

  const renderStars = () => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-xl" aria-hidden="true">
        {index + 1 > product?.stars ? <RiStarSLine /> : <RiStarSFill />}
      </span>
    ));
    return (
      <div
        className="flex items-center pr-4 text-yellow-500"
        role="img"
        aria-label={`${product?.stars} out of 5 stars`}
      >
        {stars}
      </div>
    );
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-lg sm:rounded-2xl sm:p-6 md:p-8">
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        {/* Product Image */}
        <div className="overflow-hidden rounded-lg bg-gray-50 sm:rounded-xl">
          <img
            src={product?.img || ""}
            alt={product?.name || "Product"}
            className="h-full w-full object-contain p-4 transition-transform duration-500 hover:scale-105 sm:p-8"
            loading="eager"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <div>
            <Link
              to="/products"
              className="mb-3 inline-flex items-center gap-2 text-sm text-blue-600 transition-colors hover:text-blue-700 sm:mb-4 sm:text-base"
            >
              <FaArrowLeft />
              <span>Back to Products</span>
            </Link>
            <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:mb-3 sm:text-3xl md:text-4xl">
              {product?.name || "Product"}
            </h1>
            <div className="mb-3 flex flex-wrap items-center gap-3 sm:mb-4 sm:gap-4">
              {renderStars()}
              <span className="u-badge-blue">{product?.ratings || 0} ratings</span>
            </div>
            <div className="h-px bg-linear-to-r from-blue-500 to-transparent" />
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-gray-800 sm:mb-3 sm:text-xl">
              About This Machine
            </h2>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              {product?.description || "Product Description"}
            </p>
          </div>

          <div className="rounded-xl bg-linear-to-br from-blue-50 to-blue-100 p-6">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-800">
              <FaRupeeSign className="text-blue-600" />
              Price Range
            </h2>
            <div className="flex items-center gap-4 text-2xl font-bold text-gray-800 md:text-3xl">
              <span>₹{product?.minPrice?.toLocaleString("en-IN") || 0}</span>
              <span className="text-gray-400">-</span>
              <span>₹{product?.maxPrice?.toLocaleString("en-IN") || 0}</span>
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <Button
              type="primary"
              text="Enquire on WhatsApp"
              action="whatsapp"
              value={message}
              size="large"
            />
            <div className="grid gap-3 md:grid-cols-2">
              <Button
                type="secondary"
                text="Email Us"
                action="mail"
                value={`salesbalajimachines@gmail.com?subject=Inquiry for ${encodeURIComponent(product?.name || "")}&body=${encodeURIComponent(message)}`}
                size="medium"
              />
              <Button
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
    </div>
  );
});

ProductDetail.displayName = "ProductDetail";

export default ProductDetail;
