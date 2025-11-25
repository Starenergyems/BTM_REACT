import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { color } from "@/styles/variable/indexStyle";
import ScopeStyle from "./indexStyle";
import { backOnClick } from "./indexHelper";
function PageBox({
  backSetting = {
    isVisible: false,
    onClick: () => {},
  },
  bgColorLinearGradient,
  className,
  children,
  headerTitle,
  headerStyle,
}) {
  const navigate = useNavigate();
  return (
    <ScopeStyle
      className={`styled-container-page-box pd-t-50 ${
        bgColorLinearGradient ? "" : "pd-x-20"
      } ${className ?? ""}`}
      $bgColorLinearGradient={bgColorLinearGradient}
    >
      {backSetting.isVisible && (
        <Icon
          className="icon-back"
          color={color.white}
          fontSize={30}
          icon="humbleicons:arrow-go-back"
          onClick={() => backOnClick(navigate, backSetting.onClick)}
        />
      )}
      <div
        className="header mg-l-20-minus mg-t-25"
        style={{ minWidth: "514px", ...headerStyle }}
      >
        {headerTitle && (
          <h2 className="header-title pd-y-3 pd-x-20 mg-y-0 ">{headerTitle}</h2>
        )}
      </div>
      <div className="page-box-body mt-3">
        <div className="mt-3">{children}</div>
      </div>
    </ScopeStyle>
  );
}

export default PageBox;
