import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigAcpF3 from "./indexConfigAcpF3";
import indexConfigLc1000F2 from "./indexConfigLc1000F2";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmF2-1": {
    id: `${nodeGroupSetting.acpF2.id}:acpmF2-1`,
    name: "ACPM F2-1",
  },
  "acpmF2-2": {
    id: `${nodeGroupSetting.acpF2.id}:acpmF2-2`,
    name: "ACPM F2-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpF2.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpF2.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpF2:trTemp-acpF3:trTemp": {
    id: `${nodeSetting.trTemp.id}-to-${indexConfigAcpF3.nodeSetting.trTemp.id}`,
  },
  "acpF2:acpmF2-1-acpF2:acpmF2-2": {
    id: `${nodeSetting["acpmF2-1"].id}-to-${nodeSetting["acpmF2-2"].id}`,
  },
  "acpF2:acpmF2-2-acpF3:acpmF3-1": {
    id: `${nodeSetting["acpmF2-2"].id}-to-${indexConfigAcpF3.nodeSetting["acpmF3-1"].id}`,
  },
  "acpF2:remoteIo-lc1000F2:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000F2.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-F2
  {
    data: { label: nodeGroupSetting.acpF2.name },
    id: nodeGroupSetting.acpF2.id,
    position: { x: 3425, y: 20500 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpF2:TR Temp
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
    parentNode: nodeGroupSetting.acpF2.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpF2:ACPM F2-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmF2-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmF2-1"].id,
    parentNode: nodeGroupSetting.acpF2.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpF2:ACPM F2-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmF2-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmF2-2"].id,
    parentNode: nodeGroupSetting.acpF2.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpF2:Remote I/O
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
    parentNode: nodeGroupSetting.acpF2.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpF2:TR temp->acpF3:TR temp
    id: edgeSetting["acpF2:trTemp-acpF3:trTemp"].id,
    source: nodeSetting.trTemp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpF3.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpF2:ACPM F2-1->ACPM F2-2
    id: edgeSetting["acpF2:acpmF2-1-acpF2:acpmF2-2"].id,
    source: nodeSetting["acpmF2-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmF2-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpF2:ACPM F2-2->ACPM F3-1
    id: edgeSetting["acpF2:acpmF2-2-acpF3:acpmF3-1"].id,
    source: nodeSetting["acpmF2-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpF3.nodeSetting["acpmF3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpF2:Remote I/O->lc1000F2:Switch
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
    id: edgeSetting["acpF2:remoteIo-lc1000F2:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000F2.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
