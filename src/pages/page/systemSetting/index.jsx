import { Tabs } from "antd";
import { PageBox } from "@/components/units";
import ParameterSetting from "./parameterSetting";
import HistoryRecord from "./historyRecord";
import UserManagement from "./userManagement";
import ScopeStyle from "./indexStyle";

function SystemSetting() {
  const items = [
    {
      key: "userManagement",
      label: "人員管理",
      children: <UserManagement />,
    },
    {
      key: "historyRecord",
      label: "歷程記錄",
      children: <HistoryRecord />,
    },
    {
      key: "parameterSetting",
      label: "參數設定",
      children: <ParameterSetting />,
    },
  ];

  return (
    <ScopeStyle>
      <PageBox bgColorLinearGradient headerTitle="系統設定 System Information">
        <Tabs
          className="mg-t-30"
          destroyOnHidden
          items={items}
          tabBarExtraContent={{
            left: <span className="custom-tabs-title">系統設定</span>,
          }}
          type="card"
        />
      </PageBox>
    </ScopeStyle>
  );
}

export default SystemSetting;
