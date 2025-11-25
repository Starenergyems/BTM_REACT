import { ReactFlowProvider } from "reactflow";
import { Tabs } from "antd";
import { PageBox } from "@/components/units";
import Diagram from "./diagram";
import InfoList from "./infoList";
import ScopeStyle from "./indexStyle";

function CommunicationArchitecture() {
  const items = [
    {
      key: "diagram",
      label: "圖表",
      children: (
        <ReactFlowProvider>
          <Diagram />
        </ReactFlowProvider>
      ),
    },
    {
      key: "infoList",
      label: "列表",
      children: <InfoList />,
    },
  ];
  return (
    <ScopeStyle>
      <PageBox
        bgColorLinearGradient
        headerTitle="通訊架構圖 Communication Architecture Diagram"
        headerStyle={{ width: "672px" }}
      >
        <Tabs
          className="mg-t-30"
          destroyOnHidden
          items={items}
          tabBarExtraContent={{
            left: <span className="custom-tabs-title">通訊架構圖</span>,
          }}
          type="card"
        />
      </PageBox>
    </ScopeStyle>
  );
}

export default CommunicationArchitecture;
