import { forwardRef } from "react";

const paddingMap = {
  none: "py-0",
  sm: "py-8",
  md: "py-12",
  lg: "py-16",
  xl: "py-20",
};

const Section = forwardRef(
  (
    {
      as: Component = "section",
      maxWidth = "max-w-content",
      padding = "lg",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const paddingClass = paddingMap[padding] || paddingMap.lg;

    return (
      <Component ref={ref} className={`${paddingClass} ${className}`.trim()} {...props}>
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidth}`}>{children}</div>
      </Component>
    );
  }
);

Section.displayName = "Section";

export default Section;
