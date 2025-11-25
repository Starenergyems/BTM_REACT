import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigAcpC2 from "./indexConfigAcpC2";
import indexConfigLc1000C1 from "./indexConfigLc1000C1";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmC1-1": {
    id: `${nodeGroupSetting.acpC1.id}:acpmC1-1`,
    name: "ACPM C1-1",
  },
  "acpmC1-2": {
    id: `${nodeGroupSetting.acpC1.id}:acpmC1-2`,
    name: "ACPM C1-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpC1.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpC1.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpC1:trTemp-acpC2:trTemp": {
    id: `${nodeSetting.trTemp.id}-to-${indexConfigAcpC2.nodeSetting.trTemp.id}`,
  },
  "acpC1:acpmC1-1-acpC1:acpmC1-2": {
    id: `${nodeSetting["acpmC1-1"].id}-to-${nodeSetting["acpmC1-2"].id}`,
  },
  "acpC1:acpmC1-2-acpC2:acpmC2-1": {
    id: `${nodeSetting["acpmC1-2"].id}-to-${indexConfigAcpC2.nodeSetting["acpmC2-1"].id}`,
  },
  "acpC1:remoteIo-lc1000C1:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000C1.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-C1
  {
    data: { label: nodeGroupSetting.acpC1.name },
    id: nodeGroupSetting.acpC1.id,
    position: { x: 3425, y: 10600 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpC1:TR Temp
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
    parentNode: nodeGroupSetting.acpC1.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpC1:ACPM C1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmC1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmC1-1"].id,
    parentNode: nodeGroupSetting.acpC1.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpC1:ACPM C1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmC1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmC1-2"].id,
    parentNode: nodeGroupSetting.acpC1.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpC1:Remote I/O
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
    parentNode: nodeGroupSetting.acpC1.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpC1:TR Temp->acpC2:TR Temp
    id: edgeSetting["acpC1:trTemp-acpC2:trTemp"].id,
    source: nodeSetting.trTemp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpC2.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpC1:ACPM C1-1->ACPM C1-2
    id: edgeSetting["acpC1:acpmC1-1-acpC1:acpmC1-2"].id,
    source: nodeSetting["acpmC1-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmC1-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpC1:ACPM C1-2->acpC2:ACPM C2-1
    id: edgeSetting["acpC1:acpmC1-2-acpC2:acpmC2-1"].id,
    source: nodeSetting["acpmC1-2"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpC2.nodeSetting["acpmC2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpC1:Remote I/O->lc1000C1:Switch
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
    id: edgeSetting["acpC1:remoteIo-lc1000C1:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000C1.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
