import { Tabs } from "antd";
import { PageBox } from "@/components/units";
import InfoList from "./infoList";
// import MeterInfo from "./meterInfo";
// import Relay from "./relay";
import Diagram from "./diagram";
// import SuportPower from "./suportPower";
// import Transformer from "./transformer";
import ScopeStyle from "./indexStyle";

function Meter() {
  const items = [
    {
      key: "diagram",
      label: "圖表",
      children: <Diagram />,
    },
    {
      key: "infoList",
      label: "列表",
      children: <InfoList />,
    },
    // { key: "meterInfo", label: "電表資訊", children: <MeterInfo /> },
    // { key: "transformer", label: "變壓器資訊", children: <Transformer /> },
    // { key: "suportPower", label: "輔電資訊表", children: <SuportPower /> },
    // { key: "relay", label: "保護電驛", children: <Relay /> },
  ];

  return (
    <ScopeStyle>
      <PageBox bgColorLinearGradient headerTitle="電表資訊 Meter Information">
        <Tabs
          className="mg-t-30"
          defaultActiveKey="equipmentStatus"
          destroyOnHidden
          items={items}
          tabBarExtraContent={{
            left: <span className="custom-tabs-title">單線圖與輔電</span>,
          }}
          type="card"
        />
      </PageBox>
    </ScopeStyle>
  );
}

export default Meter;
