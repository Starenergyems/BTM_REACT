import ScopeStyle from "./indexStyle";

function CategoryBox({
  background,
  bodyClassName,
  className,
  children,
  headerClassName,
  headerTextAlign = "left",
  isShowBorder = true,
  themeCategory = "normal", // normal | circle
  title,
}) {
  return (
    <ScopeStyle
      className={`styled-container-category-box ${className ?? ""}`}
      $background={background}
      $headerTextAlign={headerTextAlign}
      $isShowBorder={isShowBorder}
      $themeCategory={themeCategory}
    >
      <div
        className={`category-box-header pd-y-5 pd-x-30 ${
          headerClassName ?? ""
        }`}
      >
        {title}
      </div>
      <div
        className={`category-box-body pd-y-20 pd-x-20 ${bodyClassName ?? ""}`}
      >
        {children}
      </div>
    </ScopeStyle>
  );
}

export default CategoryBox;
