import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigLc1000G1 from "./indexConfigLc1000G1";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmG1-1": {
    id: `${nodeGroupSetting.acpG1.id}:acpmG1-1`,
    name: "ACPM G1-1",
  },
  "acpmG1-2": {
    id: `${nodeGroupSetting.acpG1.id}:acpmG1-2`,
    name: "ACPM G1-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpG1.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpG1.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpG1:acpmG1-1-acpG1:acpmG1-2": {
    id: `${nodeSetting["acpmG1-1"].id}-to-${nodeSetting["acpmG1-2"].id}`,
  },
  "acpG1:remoteIo-lc1000G1:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000G1.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-G1
  {
    data: { label: nodeGroupSetting.acpG1.name },
    id: nodeGroupSetting.acpG1.id,
    position: { x: 4175, y: 20500 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpG1:TR Temp
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
    parentNode: nodeGroupSetting.acpG1.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpG1:ACPM G1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmG1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmG1-1"].id,
    parentNode: nodeGroupSetting.acpG1.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpG1:ACPM G1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmG1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmG1-2"].id,
    parentNode: nodeGroupSetting.acpG1.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpG1:Remote I/O
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
    parentNode: nodeGroupSetting.acpG1.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpG1:ACPM G1-1->ACPM G1-2
    id: edgeSetting["acpG1:acpmG1-1-acpG1:acpmG1-2"].id,
    source: nodeSetting["acpmG1-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmG1-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpG1:Remote I/O->lc1000G1:Switch
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap * 6}
          L${sourceX - nodeGap * 10 + 15},${sourceY + nodeGap * 6}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["acpG1:remoteIo-lc1000G1:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000G1.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
