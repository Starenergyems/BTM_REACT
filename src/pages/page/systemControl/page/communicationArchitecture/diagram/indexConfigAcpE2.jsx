import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigLc1000E2 from "./indexConfigLc1000E2";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmE2-1": {
    id: `${nodeGroupSetting.acpE2.id}:acpmE2-1`,
    name: "ACPM E2-1",
  },
  "acpmE2-2": {
    id: `${nodeGroupSetting.acpE2.id}:acpmE2-2`,
    name: "ACPM E2-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpE2.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpE2.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpE2:acpmE2-1-acpE2:acpmE2-2": {
    id: `${nodeSetting["acpmE2-1"].id}-to-${nodeSetting["acpmE2-2"].id}`,
  },
  "acpE2:remoteIo-lc1000E2:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000E2.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-E2
  {
    data: { label: nodeGroupSetting.acpE2.name },
    id: nodeGroupSetting.acpE2.id,
    position: { x: 3800, y: 17200 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpE2:TR Temp
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
    parentNode: nodeGroupSetting.acpE2.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpE2:ACPM E2-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmE2-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmE2-1"].id,
    parentNode: nodeGroupSetting.acpE2.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpE2:ACPM E2-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmE2-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmE2-2"].id,
    parentNode: nodeGroupSetting.acpE2.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpE2:Remote I/O
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
    parentNode: nodeGroupSetting.acpE2.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpE2:ACPM E2-1->ACPM E2-2
    id: edgeSetting["acpE2:acpmE2-1-acpE2:acpmE2-2"].id,
    source: nodeSetting["acpmE2-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmE2-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpE2:Remote I/O->lc1000E2:Switch
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
    id: edgeSetting["acpE2:remoteIo-lc1000E2:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000E2.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
