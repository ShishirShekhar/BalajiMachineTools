import { ProductCard } from "../products";
import { Grid, Section, Stack } from "../ui";

const FeaturedProducts = ({ title, products, variant = "light", className = "" }) => {
  const isDark = variant === "dark";

  return (
    <Section padding="xl" className={`${isDark ? "text-white" : ""} ${className}`.trim()}>
      <Stack align="center" gap="3" className="text-center">
        <h1
          className={`u-section-title ${
            isDark ? "text-white drop-shadow-sm" : "u-text-primary-gradient"
          }`}
        >
          {title}
        </h1>
        <div
          className={`mx-auto h-1 w-20 rounded-full sm:w-24 ${
            isDark ? "u-divider-white shadow-sm" : "u-divider-primary"
          }`}
        />
      </Stack>

      <Grid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="6" className="mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Section>
  );
};

export default FeaturedProducts;
