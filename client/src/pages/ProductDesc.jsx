import { FaArrowLeft, FaExclamationCircle } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { ProductDetail, Table } from "../components/products";
import { Section, Stack } from "../components/ui";
import { useProductById } from "../lib/hooks";

const Product = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductById(id);

  // Loading state
  if (loading) {
    return (
      <Section className="u-bg-page flex min-h-screen items-center justify-center text-center">
        <Stack align="center" gap="3">
          <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-b-4 border-blue-600" />
          <p className="text-lg text-gray-600">Loading product details...</p>
        </Stack>
      </Section>
    );
  }

  // Error state
  if (error || !product) {
    return (
      <Section className="u-bg-page flex min-h-screen items-center justify-center text-center">
        <Stack align="center" gap="4">
          <FaExclamationCircle className="text-6xl text-blue-500" />
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">Product Not Found</h1>
          <p className="max-w-2xl text-lg text-gray-600">
            {error || "The product you're looking for doesn't exist or has been removed."}
          </p>
          <Link to="/products">
            <button className="u-btn-primary flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300">
              <FaArrowLeft />
              Back to Products
            </button>
          </Link>
        </Stack>
      </Section>
    );
  }

  return (
    <Section className="u-bg-page min-h-screen" maxWidth="max-w-7xl">
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li>
            <Link to="/" className="transition-colors hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/products" className="transition-colors hover:text-blue-600">
              Products
            </Link>
          </li>
          <li>/</li>
          <li className="font-semibold text-blue-600">{product.name}</li>
        </ol>
      </nav>

      <ProductDetail product={product} />

      <div className="mt-10">
        <div className="u-card md:p-8">
          <h2 className="mb-6 border-b pb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            Technical Specifications
          </h2>
          <div className="overflow-x-auto">
            {Object.keys(product.specifications).length ? (
              <Table product={product} />
            ) : (
              <div className="py-10 text-center">
                <FaExclamationCircle className="mx-auto mb-4 text-4xl text-gray-300" />
                <p className="mb-2 text-lg text-gray-600">
                  Technical specifications are not available for this product.
                </p>
                <p className="text-gray-500">
                  Please{" "}
                  <Link to="/contact" className="text-blue-600 hover:underline">
                    contact us
                  </Link>{" "}
                  for more information.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Product;
