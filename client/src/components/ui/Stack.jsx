import { forwardRef } from "react";

const directionMap = {
  row: "flex-row",
  column: "flex-col",
};

const Stack = forwardRef(
  (
    {
      as: Component = "div",
      direction = "column",
      gap = "4",
      align = "stretch",
      justify = "start",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const dirClass = directionMap[direction] || directionMap.column;
    const gapClass = typeof gap === "number" ? `gap-${gap}` : `gap-${gap}`;
    const alignClass = align ? `items-${align}` : "";
    const justifyClass = justify ? `justify-${justify}` : "";

    return (
      <Component
        ref={ref}
        className={`flex ${dirClass} ${gapClass} ${alignClass} ${justifyClass} ${className}`.trim()}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Stack.displayName = "Stack";

export default Stack;
