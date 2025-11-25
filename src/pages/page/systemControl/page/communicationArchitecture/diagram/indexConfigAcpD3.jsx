import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import NodeLabel from "./nodeLabel";
import indexConfigAcpE1 from "./indexConfigAcpE1";
import indexConfigLc1000D3 from "./indexConfigLc1000D3";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmD3-1": {
    id: `${nodeGroupSetting.acpD3.id}:acpmD3-1`,
    name: "ACPM D3-1",
  },
  "acpmD3-2": {
    id: `${nodeGroupSetting.acpD3.id}:acpmD3-2`,
    name: "ACPM D3-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpD3.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpD3.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpD3:trTemp-acpE1:trTemp": {
    id: `${nodeSetting.trTemp.id}-to-${indexConfigAcpE1.nodeSetting.trTemp.id}`,
  },
  "acpD3:acpmD3-1-acpD3:acpmD3-2": {
    id: `${nodeSetting["acpmD3-1"].id}-to-${nodeSetting["acpmD3-2"].id}`,
  },
  "acpD3:acpmD3-2-acpE1:acpmE1-1": {
    id: `${nodeSetting["acpmD3-2"].id}-to-${indexConfigAcpE1.nodeSetting["acpmE1-1"].id}`,
  },
  "acpD3:remoteIo-lc1000D3:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000D3.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-D3
  {
    data: { label: nodeGroupSetting.acpD3.name },
    id: nodeGroupSetting.acpD3.id,
    position: { x: 3050, y: 17200 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpD3:TR Temp
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
    parentNode: nodeGroupSetting.acpD3.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpD3:ACPM D3-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmD3-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmD3-1"].id,
    parentNode: nodeGroupSetting.acpD3.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpD3:ACPM D3-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmD3-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmD3-2"].id,
    parentNode: nodeGroupSetting.acpD3.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpD3:Remote I/O
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
    parentNode: nodeGroupSetting.acpD3.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpD3:TR Temp->acpE1:TR Temp
    id: edgeSetting["acpD3:trTemp-acpE1:trTemp"].id,
    source: nodeSetting.trTemp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpE1.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpD3:ACPM D3-1->ACPM D3-2
    id: edgeSetting["acpD3:acpmD3-1-acpD3:acpmD3-2"].id,
    source: nodeSetting["acpmD3-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmD3-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpD3:ACPM D3-2->acpE1:ACPM E1-1
    id: edgeSetting["acpD3:acpmD3-2-acpE1:acpmE1-1"].id,
    source: nodeSetting["acpmD3-2"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpE1.nodeSetting["acpmE1-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpD3:Remote I/O->lc1000D3:Switch
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
    id: edgeSetting["acpD3:remoteIo-lc1000D3:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000D3.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
