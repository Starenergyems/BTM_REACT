import { Tabs } from "antd";
import { PageBox } from "@/components/units";
import EquipmentControl from "./equipmentControl";
import AccessControl from "./accessControl";
import ScopeStyle from "./indexStyle";

function EventLog() {
  const items = [
    {
      key: "equipmentControl",
      label: "設備控制",
      children: <EquipmentControl />,
    },
    { key: "accessControl", label: "門禁控制", children: <AccessControl /> },
  ];

  return (
    <ScopeStyle>
      <PageBox bgColorLinearGradient headerTitle="事件紀錄 Event Log">
        <Tabs
          className="mg-t-30"
          destroyOnHidden
          items={items}
          tabBarExtraContent={{
            left: <span className="custom-tabs-title">事件紀錄</span>,
          }}
          type="card"
        />
      </PageBox>
    </ScopeStyle>
  );
}

export default EventLog;
