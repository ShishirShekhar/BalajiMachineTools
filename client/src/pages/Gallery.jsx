import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Section, Stack } from "../components/ui";
import { useProducts, useMetadata } from "../lib/hooks";

const Gallery = () => {
  useMetadata({
    title: "Gallery",
    description: "View our collection of industrial machinery and equipment in action",
    url: "https://balijimachinetools.com/gallery",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const { products, loading, error } = useProducts();

  // Extracting product images and IDs from the products array
  const galleryData = products.map((product) => ({
    id: product.id,
    img: product.img,
    name: product.name,
  }));

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <Section className="u-bg-page min-h-screen" padding="xl" maxWidth="max-w-7xl">
      <Stack align="center" gap="3" className="text-center">
        <h1 className="u-text-primary-gradient u-section-title">Product Gallery</h1>
        <p className="u-section-subtitle px-2">Explore our range of premium machine tools</p>
      </Stack>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-16 sm:py-20">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-t-4 border-b-4 border-blue-600 sm:h-16 sm:w-16"></div>
          <p className="text-base text-gray-600 sm:text-lg">Loading gallery...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-3 sm:p-4">
          <p className="text-sm font-medium text-red-700 sm:text-base">Error: {error}</p>
        </div>
      )}

      {/* Gallery Grid */}
      {!loading && !error && (
        <Grid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="6">
          {galleryData.map((item, index) => (
            <div key={index} onClick={() => openLightbox(item)} className="group cursor-pointer">
              <div className="u-card-hover">
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Grid>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 text-4xl text-white transition-colors hover:text-gray-300"
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div className="relative max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.img}
              alt={selectedImage.name}
              className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-xl font-semibold text-white">{selectedImage.name}</p>
              <Link
                to={`/products/${selectedImage.id}`}
                className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
                onClick={closeLightbox}
              >
                View Product Details
              </Link>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Gallery;
