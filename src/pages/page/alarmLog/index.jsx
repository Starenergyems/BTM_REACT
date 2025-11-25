import { Tabs } from "antd";
import { PageBox } from "@/components/units";
import RealtimeAlarm from "./realtimeAlarm";
import HistoricAlarm from "./historicAlarm";
import ScopeStyle from "./indexStyle";

function AlarmLog() {
  const items = [
    {
      key: "realtimeAlarm",
      label: "即時告警",
      children: <RealtimeAlarm />,
    },
    { key: "historicAlarm", label: "歷史告警", children: <HistoricAlarm /> },
  ];

  return (
    <ScopeStyle>
      <PageBox bgColorLinearGradient headerTitle="告警紀錄 Alarm Log">
        <Tabs
          className="mg-t-30"
          destroyOnHidden
          items={items}
          tabBarExtraContent={{
            left: <span className="custom-tabs-title">告警紀錄</span>,
          }}
          type="card"
        />
      </PageBox>
    </ScopeStyle>
  );
}

export default AlarmLog;
