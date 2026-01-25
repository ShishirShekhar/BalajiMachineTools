import { forwardRef } from "react";

const Grid = forwardRef(
  (
    {
      as: Component = "div",
      cols = { base: 1, md: 2, lg: 3 },
      gap = "6",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const colClasses = [
      cols.base ? `grid-cols-${cols.base}` : "",
      cols.sm ? `sm:grid-cols-${cols.sm}` : "",
      cols.md ? `md:grid-cols-${cols.md}` : "",
      cols.lg ? `lg:grid-cols-${cols.lg}` : "",
      cols.xl ? `xl:grid-cols-${cols.xl}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    const gapClass = typeof gap === "number" ? `gap-${gap}` : `gap-${gap}`;

    return (
      <Component
        ref={ref}
        className={`grid ${colClasses} ${gapClass} ${className}`.trim()}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Grid.displayName = "Grid";

export default Grid;
