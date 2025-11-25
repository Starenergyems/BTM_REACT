import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigLc1000I3 from "./indexConfigLc1000I3";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmI3-1": {
    id: `${nodeGroupSetting.acpI3.id}:acpmI3-1`,
    name: "ACPM I3-1",
  },
  "acpmI3-2": {
    id: `${nodeGroupSetting.acpI3.id}:acpmI3-2`,
    name: "ACPM I3-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpI3.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpI3.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpI3:acpmI3-1-acpI3:acpmI3-2": {
    id: `${nodeSetting["acpmI3-1"].id}-to-${nodeSetting["acpmI3-2"].id}`,
  },
  "acpI3:remoteIo-lc1000I3:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000I3.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-I3
  {
    data: { label: nodeGroupSetting.acpI3.name },
    id: nodeGroupSetting.acpI3.id,
    position: { x: 4175, y: 28100 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpI3:TR Temp
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
    parentNode: nodeGroupSetting.acpI3.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpI3:ACPM I3-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmI3-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmI3-1"].id,
    parentNode: nodeGroupSetting.acpI3.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpI3:ACPM I3-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmI3-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmI3-2"].id,
    parentNode: nodeGroupSetting.acpI3.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpI3:Remote I/O
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
    parentNode: nodeGroupSetting.acpI3.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpI3:ACPM I3-1->ACPM I3-2
    id: edgeSetting["acpI3:acpmI3-1-acpI3:acpmI3-2"].id,
    source: nodeSetting["acpmI3-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmI3-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpI3:Remote I/O->lc1000I3:Switch
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
    id: edgeSetting["acpI3:remoteIo-lc1000I3:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000I3.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
