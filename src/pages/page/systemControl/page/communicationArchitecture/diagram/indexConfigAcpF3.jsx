import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import NodeLabel from "./nodeLabel";
import indexConfigAcpG1 from "./indexConfigAcpG1";
import indexConfigLc1000F3 from "./indexConfigLc1000F3";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmF3-1": {
    id: `${nodeGroupSetting.acpF3.id}:acpmF3-1`,
    name: "ACPM F3-1",
  },
  "acpmF3-2": {
    id: `${nodeGroupSetting.acpF3.id}:acpmF3-2`,
    name: "ACPM F3-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpF3.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpF3.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpF3:trTemp-acpG1:trTemp": {
    id: `${nodeSetting.trTemp.id}-to-${indexConfigAcpG1.nodeSetting.trTemp.id}`,
  },
  "acpF3:acpmF3-1-acpF3:acpmF3-2": {
    id: `${nodeSetting["acpmF3-1"].id}-to-${nodeSetting["acpmF3-2"].id}`,
  },
  "acpF3:acpmF3-2-acpG1:acpmG1-1": {
    id: `${nodeSetting["acpmF3-2"].id}-to-${indexConfigAcpG1.nodeSetting["acpmG1-1"].id}`,
  },
  "acpF3:remoteIo-lc1000F3:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000F3.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-F3
  {
    data: { label: nodeGroupSetting.acpF3.name },
    id: nodeGroupSetting.acpF3.id,
    position: { x: 3800, y: 20500 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpF3:TR Temp
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
    parentNode: nodeGroupSetting.acpF3.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpF3:ACPM F3-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmF3-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmF3-1"].id,
    parentNode: nodeGroupSetting.acpF3.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpF3:ACPM F3-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmF3-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmF3-2"].id,
    parentNode: nodeGroupSetting.acpF3.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpF3:Remote I/O
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
    parentNode: nodeGroupSetting.acpF3.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpF3:TR temp->acpG1:TR temp
    id: edgeSetting["acpF3:trTemp-acpG1:trTemp"].id,
    source: nodeSetting.trTemp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpG1.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpF3:ACPM F3-1->ACPM F3-2
    id: edgeSetting["acpF3:acpmF3-1-acpF3:acpmF3-2"].id,
    source: nodeSetting["acpmF3-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmF3-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpF3:ACPM F3-2->ACPM G1-1
    id: edgeSetting["acpF3:acpmF3-2-acpG1:acpmG1-1"].id,
    source: nodeSetting["acpmF3-2"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpG1.nodeSetting["acpmG1-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpF3:Remote I/O->lc1000F3:Switch
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap * 4 + 100}
          L${sourceX - nodeGap * 9 + 90},${sourceY + nodeGap * 4 + 100}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["acpF3:remoteIo-lc1000F3:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000F3.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
