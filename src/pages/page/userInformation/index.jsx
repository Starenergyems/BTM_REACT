import { Tabs } from "antd";
import { PageBox } from "@/components/units";
import BaseInfo from "./baseInfo";
import HistoryRecord from "./historyRecord";
import ScopeStyle from "./indexStyle";

function UserInformation() {
  const items = [
    {
      key: "baseInfo",
      label: "基本資料",
      children: <BaseInfo />,
    },
    { key: "historyRecord", label: "個人歷程", children: <HistoryRecord /> },
  ];

  return (
    <ScopeStyle>
      <PageBox bgColorLinearGradient headerTitle="使用者設定 User Information">
        <Tabs
          className="mg-t-30"
          destroyOnHidden
          items={items}
          tabBarExtraContent={{
            left: <span className="custom-tabs-title">使用者設定</span>,
          }}
          type="card"
        />
      </PageBox>
    </ScopeStyle>
  );
}

export default UserInformation;
