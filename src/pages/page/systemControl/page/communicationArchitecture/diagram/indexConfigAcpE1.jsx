import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigAcpE2 from "./indexConfigAcpE2";
import indexConfigLc1000E1 from "./indexConfigLc1000E1";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmE1-1": {
    id: `${nodeGroupSetting.acpE1.id}:acpmE1-1`,
    name: "ACPM E1-1",
  },
  "acpmE1-2": {
    id: `${nodeGroupSetting.acpE1.id}:acpmE1-2`,
    name: "ACPM E1-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpE1.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpE1.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpE1:trTemp-acpE2:trTemp": {
    id: `${nodeSetting.trTemp.id}-to-${indexConfigAcpE2.nodeSetting.trTemp.id}`,
  },
  "acpE1:acpmE1-1-acpE1:acpmE1-2": {
    id: `${nodeSetting["acpmE1-1"].id}-to-${nodeSetting["acpmE1-2"].id}`,
  },
  "acpE1:acpmE1-2-acpE2:acpmE2-1": {
    id: `${nodeSetting["acpmE1-2"].id}-to-${indexConfigAcpE2.nodeSetting["acpmE2-1"].id}`,
  },
  "acpE1:remoteIo-lc1000E1:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000E1.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-E1
  {
    data: { label: nodeGroupSetting.acpE1.name },
    id: nodeGroupSetting.acpE1.id,
    position: { x: 3425, y: 17200 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpE1:TR Temp
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
    parentNode: nodeGroupSetting.acpE1.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpE1:ACPM E1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmE1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmE1-1"].id,
    parentNode: nodeGroupSetting.acpE1.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpE1:ACPM E1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmE1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmE1-2"].id,
    parentNode: nodeGroupSetting.acpE1.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpE1:Remote I/O
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
    parentNode: nodeGroupSetting.acpE1.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpE1:TR Temp->acpE2:TR Temp
    id: edgeSetting["acpE1:trTemp-acpE2:trTemp"].id,
    source: nodeSetting.trTemp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpE2.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpE1:ACPM E1-1->ACPM E1-2
    id: edgeSetting["acpE1:acpmE1-1-acpE1:acpmE1-2"].id,
    source: nodeSetting["acpmE1-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmE1-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpE1:ACPM E1-2->acpE2:ACPM E2-1
    id: edgeSetting["acpE1:acpmE1-2-acpE2:acpmE2-1"].id,
    source: nodeSetting["acpmE1-2"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpE2.nodeSetting["acpmE2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpE1:Remote I/O->lc1000E1:Switch
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
    id: edgeSetting["acpE1:remoteIo-lc1000E1:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000E1.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
