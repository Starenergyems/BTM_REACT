import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import NodeLabel from "./nodeLabel";
import indexConfigAcpD1 from "./indexConfigAcpD1";
import indexConfigLc1000C3 from "./indexConfigLc1000C3";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmC3-1": {
    id: `${nodeGroupSetting.acpC3.id}:acpmC3-1`,
    name: "ACPM C3-1",
  },
  "acpmC3-2": {
    id: `${nodeGroupSetting.acpC3.id}:acpmC3-2`,
    name: "ACPM C3-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpC3.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpC3.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpC3:trTemp-acpD1:trTemp": {
    id: `${nodeSetting.trTemp.id}-to-${indexConfigAcpD1.nodeSetting.trTemp.id}`,
  },
  "acpC3:acpmC3-1-acpC3:acpmC3-2": {
    id: `${nodeSetting["acpmC3-1"].id}-to-${nodeSetting["acpmC3-2"].id}`,
  },
  "acpC3:acpmC3-2-acpD1:acpmD1-1": {
    id: `${nodeSetting["acpmC3-2"].id}-to-${indexConfigAcpD1.nodeSetting["acpmD1-1"].id}`,
  },
  "acpC3:remoteIo-lc1000C3:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000C3.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-C3
  {
    data: { label: nodeGroupSetting.acpC3.name },
    id: nodeGroupSetting.acpC3.id,
    position: { x: 3050, y: 13900 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpC3:TR Temp
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
    parentNode: nodeGroupSetting.acpC3.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpC3:ACPM C3-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmC3-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmC3-1"].id,
    parentNode: nodeGroupSetting.acpC3.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpC3:ACPM C3-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmC3-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmC3-2"].id,
    parentNode: nodeGroupSetting.acpC3.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpC3:Remote I/O
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
    parentNode: nodeGroupSetting.acpC3.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpC3:TR Temp->acpD1:TR Temp
    id: edgeSetting["acpC3:trTemp-acpD1:trTemp"].id,
    source: nodeSetting.trTemp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpD1.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpC3:ACPM C3-1->ACPM C3-2
    id: edgeSetting["acpC3:acpmC3-1-acpC3:acpmC3-2"].id,
    source: nodeSetting["acpmC3-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmC3-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpC3:ACPM C3-2->acpD1:ACPM D1-1
    id: edgeSetting["acpC3:acpmC3-2-acpD1:acpmD1-1"].id,
    source: nodeSetting["acpmC3-2"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpD1.nodeSetting["acpmD1-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpC3:Remote I/O->lc1000C3:Switch
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
    id: edgeSetting["acpC3:remoteIo-lc1000C3:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000C3.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
