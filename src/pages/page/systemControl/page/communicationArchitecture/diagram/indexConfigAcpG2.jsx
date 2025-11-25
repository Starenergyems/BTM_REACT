import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigAcpG3 from "./indexConfigAcpG3";
import indexConfigLc1000G2 from "./indexConfigLc1000G2";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmG2-1": {
    id: `${nodeGroupSetting.acpG2.id}:acpmG2-1`,
    name: "ACPM G2-1",
  },
  "acpmG2-2": {
    id: `${nodeGroupSetting.acpG2.id}:acpmG2-2`,
    name: "ACPM G2-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpG2.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpG2.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpG2:trTemp-acpG3:trTemp": {
    id: `${nodeSetting.trTemp.id}-to-${indexConfigAcpG3.nodeSetting.trTemp.id}`,
  },
  "acpG2:acpmG2-1-acpG2:acpmG2-2": {
    id: `${nodeSetting["acpmG2-1"].id}-to-${nodeSetting["acpmG2-2"].id}`,
  },
  "acpG2:acpmG2-2-acpG3:acpmG3-1": {
    id: `${nodeSetting["acpmG2-2"].id}-to-${indexConfigAcpG3.nodeSetting["acpmG3-1"].id}`,
  },
  "acpG2:remoteIo-lc1000G2:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000G2.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-G2
  {
    data: { label: nodeGroupSetting.acpG2.name },
    id: nodeGroupSetting.acpG2.id,
    position: { x: 3050, y: 24300 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpG2:TR Temp
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
    parentNode: nodeGroupSetting.acpG2.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpG2:ACPM G2-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmG2-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmG2-1"].id,
    parentNode: nodeGroupSetting.acpG2.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpG2:ACPM G2-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmG2-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmG2-2"].id,
    parentNode: nodeGroupSetting.acpG2.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpG2:Remote I/O
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
    parentNode: nodeGroupSetting.acpG2.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpG2:TR temp->acpG3:TR temp
    id: edgeSetting["acpG2:trTemp-acpG3:trTemp"].id,
    source: nodeSetting.trTemp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpG3.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpG2:ACPM G2-1->ACPM G2-2
    id: edgeSetting["acpG2:acpmG2-1-acpG2:acpmG2-2"].id,
    source: nodeSetting["acpmG2-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmG2-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpG2:ACPM G2-2->ACPM G3-1
    id: edgeSetting["acpG2:acpmG2-2-acpG3:acpmG3-1"].id,
    source: nodeSetting["acpmG2-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpG3.nodeSetting["acpmG3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpG2:Remote I/O->lc1000G2:Switch
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
    id: edgeSetting["acpG2:remoteIo-lc1000G2:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000G2.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
