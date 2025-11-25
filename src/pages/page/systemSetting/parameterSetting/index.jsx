import LoginManagement from "./loginManagement";
import PasswordSetting from "./passwordSetting";
import InstantMessage from "./instantMessage";
import UnusualLoginTime from "./unusualLoginTime";
import ScopeStyle from "./indexStyle";

function ParameterSetting() {
  return (
    <ScopeStyle>
      {/* 密碼強度設置 */}
      <PasswordSetting />
      {/* 登入管理 */}
      <LoginManagement />
      {/* 即時訊息內容 */}
      <InstantMessage />
      {/* 設置異常登入時間 */}
      <UnusualLoginTime />
    </ScopeStyle>
  );
}

export default ParameterSetting;
