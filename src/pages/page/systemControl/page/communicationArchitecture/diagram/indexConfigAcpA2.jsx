import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigAcpA3 from "./indexConfigAcpA3";
import indexConfigLc1000A2 from "./indexConfigLc1000A2";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmA2-1": {
    id: `${nodeGroupSetting.acpA2.id}:acpmA2-1`,
    name: "ACPM A2-1",
  },
  "acpmA2-2": {
    id: `${nodeGroupSetting.acpA2.id}:acpmA2-2`,
    name: "ACPM A2-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpA2.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpA2.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpA2:trTemp-acpA3:trTemp": {
    id: `${nodeSetting.trTemp.id}-to-${indexConfigAcpA3.nodeSetting.trTemp.id}`,
  },
  "acpA2:acpmA2-1-acpA2:acpmA2-2": {
    id: `${nodeSetting["acpmA2-1"].id}-to-${nodeSetting["acpmA2-2"].id}`,
  },
  "acpA2:acpmA2-2-acpA3:acpmA3-1": {
    id: `${nodeSetting["acpmA2-2"].id}-to-${indexConfigAcpA3.nodeSetting["acpmA3-1"].id}`,
  },
  "acpA2:remoteIo-lc1000A2:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000A2.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-A2
  {
    data: { label: nodeGroupSetting.acpA2.name },
    id: nodeGroupSetting.acpA2.id,
    position: { x: 3425, y: 4500 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpA2:TR Temp
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.trTemp.name}
          labelStyle={{ whiteSpace: "nowrap" }}
        >
          <div className="bg-temp"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.trTemp.id,
    parentNode: nodeGroupSetting.acpA2.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpA2:ACPM A2-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmA2-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmA2-1"].id,
    parentNode: nodeGroupSetting.acpA2.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpA2:ACPM A2-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmA2-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmA2-2"].id,
    parentNode: nodeGroupSetting.acpA2.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpA2:Remote I/O
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.remoteIo.name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-et"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "bottom" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.remoteIo.id,
    parentNode: nodeGroupSetting.acpA2.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpA2:TR Temp->acpA3:TR Temp
    id: edgeSetting["acpA2:trTemp-acpA3:trTemp"].id,
    source: nodeSetting.trTemp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpA3.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpA2:ACPM A2-1->ACPM A2-2
    id: edgeSetting["acpA2:acpmA2-1-acpA2:acpmA2-2"].id,
    source: nodeSetting["acpmA2-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmA2-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpA2:ACPM A2-2->acpA3:ACPM A3-1
    id: edgeSetting["acpA2:acpmA2-2-acpA3:acpmA3-1"].id,
    source: nodeSetting["acpmA2-2"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpA3.nodeSetting["acpmA3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpA2:Remote I/O->lc1000A2:Switch
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
            M${sourceX},${sourceY}
            L${sourceX},${sourceY + nodeGap}
            L${sourceX - nodeGap + 60},${sourceY + nodeGap}
            L${sourceX - nodeGap + 60},${sourceY + nodeGap * 3 - 100}
            L${sourceX - nodeGap * 8 + 165},${sourceY + nodeGap * 3 - 100}
            L${targetX},${targetY}
          `;
      },
    },
    id: edgeSetting["acpA2:remoteIo-lc1000A2:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000A2.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
