import { useState } from "react";
import ReactFlow, { useReactFlow } from "reactflow";
import "reactflow/dist/style.css";
import CustomEdge from "./customEdge";
import CustomNode from "./customNode";
import GroupNode from "./groupNode";
import ScopeStyle from "./indexStyle";
import { initialEdges, initialNodes } from "./indexConfig";
import { useHelpers } from "./indexHelper";
import { nodeGroupSetting } from "./indexConfigCommon";
import { Select } from "@/components/units";

function Diagram() {
  const [
    mainState,
    // setMainState
  ] = useState({
    nodes: initialNodes,
  });
  const reactFlowHooks = useReactFlow();

  const { zoomToNode } = useHelpers({ reactFlowHooks });

  return (
    <ScopeStyle>
      <div className="section-title">
        <h2>圖表</h2>
      </div>
      <Select
        allowClear
        className="mg-b-20"
        placeholder="選擇要查看的群組"
        showSearch
        style={{ width: 200 }}
        options={Object.keys(nodeGroupSetting)
          .filter((groupName) => groupName !== "noGroup")
          .map((groupName) => ({
            label: groupName,
            value: nodeGroupSetting[groupName].id,
          }))}
        onChange={(value) =>
          zoomToNode(value, {
            isGroupType: true,
            offsetX: 500,
            offsetY: 300,
          })
        }
      />

      <div id="react-flow-container">
        <ReactFlow
          defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
          minZoom={0.1}
          nodes={mainState.nodes}
          nodesDraggable={false}
          nodesConnectable={false}
          nodeTypes={{ custom: CustomNode, group: GroupNode }}
          edges={initialEdges}
          edgeTypes={{ custom: CustomEdge }}
          // fitView
        >
          {/* <Controls /> */}
        </ReactFlow>
      </div>
    </ScopeStyle>
  );
}

export default Diagram;
