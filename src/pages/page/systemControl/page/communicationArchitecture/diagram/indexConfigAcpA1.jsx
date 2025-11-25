import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigAcpA2 from "./indexConfigAcpA2";
import indexConfigLc1000A1 from "./indexConfigLc1000A1";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmA1-1": {
    id: `${nodeGroupSetting.acpA1.id}:acpmA1-1`,
    name: "ACPM A1-1",
  },
  "acpmA1-2": {
    id: `${nodeGroupSetting.acpA1.id}:acpmA1-2`,
    name: "ACPM A1-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpA1.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpA1.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpA1:trTemp-acpA2:trTemp": {
    id: `${nodeSetting.trTemp.id}-to-${indexConfigAcpA2.nodeSetting.trTemp.id}`,
  },
  "acpA1:acpmA1-1-acpA1:acpmA1-2": {
    id: `${nodeSetting["acpmA1-1"].id}-to-${nodeSetting["acpmA1-2"].id}`,
  },
  "acpA1:acpmA1-2-acpA2:acpmA2-1": {
    id: `${nodeSetting["acpmA1-2"].id}-to-${indexConfigAcpA2.nodeSetting["acpmA2-1"].id}`,
  },
  "acpA1:remoteIo-lc1000A1:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000A1.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-A1
  {
    data: { label: nodeGroupSetting.acpA1.name },
    id: nodeGroupSetting.acpA1.id,
    position: { x: 3050, y: 4500 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpA1:TR Temp
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
    parentNode: nodeGroupSetting.acpA1.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpA1:ACPM A1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmA1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmA1-1"].id,
    parentNode: nodeGroupSetting.acpA1.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpA1:ACPM A1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmA1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmA1-2"].id,
    parentNode: nodeGroupSetting.acpA1.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpA1:Remote I/O
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
      handles: { source: [{ dir: "bottom" }] },
    },
    id: nodeSetting.remoteIo.id,
    parentNode: nodeGroupSetting.acpA1.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpA1:TR Temp->acpA2:TR Temp
    id: edgeSetting["acpA1:trTemp-acpA2:trTemp"].id,
    source: nodeSetting.trTemp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpA2.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpA1:ACPM A1-1->ACPM A1-2
    id: edgeSetting["acpA1:acpmA1-1-acpA1:acpmA1-2"].id,
    source: nodeSetting["acpmA1-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmA1-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpA1:ACPM A1-2->acpA2:ACPM A2-1
    id: edgeSetting["acpA1:acpmA1-2-acpA2:acpmA2-1"].id,
    source: nodeSetting["acpmA1-2"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpA2.nodeSetting["acpmA2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpA1:Remote I/O->lc1000A1:Switch
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap}
          L${sourceX - nodeGap * 6 - 60},${sourceY + nodeGap}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["acpA1:remoteIo-lc1000A1:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000A1.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
