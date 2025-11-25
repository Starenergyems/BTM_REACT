import { color } from "@/styles/variable/indexStyle";
import ScopeStyle from "./indexStyle";

function Ring({
  thickness = 54, //圓環的粗細百分比預設54(數值越大圓環越細)
  gradient = { top: color.blueGray, bottom: "#e5f7ff" },
  title,
  titleColor = color.lightBlue,
  titleFontSize = "1.2rem",
  value,
  valueColor = color.lightBlue,
  valueFontSize = "1.5rem",
  widthHeight, //單位只能輸入px
}) {
  return (
    <ScopeStyle
      $thickness={thickness}
      $gradient={gradient}
      $titleColor={titleColor}
      $titleFontSize={titleFontSize}
      $valueColor={valueColor}
      $valueFontSize={valueFontSize}
      $widthHeight={widthHeight}
    >
      <div className="ring"></div>
      <div className="rign-border"></div>
      <span className="value">{value}</span>
      <span className="title">{title}</span>
    </ScopeStyle>
  );
}

export default Ring;
