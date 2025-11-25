import ScopeStyle from "./indexStyle";
import AccountStatus from "./accountStatus";
import UpdatePassword from "./updatePassword";
import UserInfo from "./userInfo";

function BaseInfo() {
  return (
    <ScopeStyle>
      {/* 個人基本資料 */}
      <UserInfo />
      {/* 帳號狀態 */}
      <AccountStatus />
      {/* 重設密碼 */}
      <UpdatePassword />
    </ScopeStyle>
  );
}

export default BaseInfo;
