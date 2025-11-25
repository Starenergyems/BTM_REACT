import { Tabs } from "antd";
import { PageBox } from "@/components/units";
import RealTime from "./realTime";
import ScopeStyle from "./indexStyle";
import Historical from "./historical";

function RealTimeAndHistorical() {
  const items = [
    {
      key: "realTime",
      label: "即時圖",
      children: <RealTime />,
    },
    { key: "historical", label: "歷史圖", children: <Historical /> },
  ];
  return (
    <ScopeStyle>
      <PageBox
        bgColorLinearGradient
        headerTitle="即時與歷史圖 Real-time and historical chart"
        headerStyle={{ width: "672px" }}
      >
        <Tabs
          className="mg-t-30"
          destroyOnHidden
          items={items}
          tabBarExtraContent={{
            left: <span className="custom-tabs-title">即時與歷史圖</span>,
          }}
          type="card"
        />
      </PageBox>
    </ScopeStyle>
  );
}

export default RealTimeAndHistorical;
