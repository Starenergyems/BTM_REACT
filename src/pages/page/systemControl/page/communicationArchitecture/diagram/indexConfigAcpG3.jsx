import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import NodeLabel from "./nodeLabel";
import indexConfigAcpH1 from "./indexConfigAcpH1";
import indexConfigLc1000G3 from "./indexConfigLc1000G3";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmG3-1": {
    id: `${nodeGroupSetting.acpG3.id}:acpmG3-1`,
    name: "ACPM G3-1",
  },
  "acpmG3-2": {
    id: `${nodeGroupSetting.acpG3.id}:acpmG3-2`,
    name: "ACPM G3-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpG3.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpG3.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpG3:trTemp-acpmH1-trTemp": {
    id: `${nodeSetting.trTemp.id}-to-${indexConfigAcpH1.nodeSetting.trTemp.id}`,
  },
  "acpG3:acpmG3-1-acpG3:acpmG3-2": {
    id: `${nodeSetting["acpmG3-1"].id}-to-${nodeSetting["acpmG3-2"].id}`,
  },
  "acpG3:acpmG3-2-acpH1:acpmH1-1": {
    id: `${nodeSetting["acpmG3-2"].id}-to-${indexConfigAcpH1.nodeSetting["acpmH1-1"].id}`,
  },
  "acpG3:remoteIo-lc1000G3:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000G3.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-G3
  {
    data: { label: nodeGroupSetting.acpG3.name },
    id: nodeGroupSetting.acpG3.id,
    position: { x: 3425, y: 24300 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpG3:TR Temp
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
    parentNode: nodeGroupSetting.acpG3.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpG3:ACPM G3-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmG3-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmG3-1"].id,
    parentNode: nodeGroupSetting.acpG3.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpG3:ACPM G3-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmG3-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmG3-2"].id,
    parentNode: nodeGroupSetting.acpG3.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpG3:Remote I/O
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
    parentNode: nodeGroupSetting.acpG3.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpG3:TR Temp->acpH1:TR Temp
    id: edgeSetting["acpG3:trTemp-acpmH1-trTemp"].id,
    source: nodeSetting.trTemp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpH1.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpG3:ACPM G3-1->ACPM G3-2
    id: edgeSetting["acpG3:acpmG3-1-acpG3:acpmG3-2"].id,
    source: nodeSetting["acpmG3-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmG3-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpG3:ACPM G3-2->acpH1:ACPM H1-1
    id: edgeSetting["acpG3:acpmG3-2-acpH1:acpmH1-1"].id,
    source: nodeSetting["acpmG3-2"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpH1.nodeSetting["acpmH1-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpG3:Remote I/O->lc1000G3:Switch
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
    id: edgeSetting["acpG3:remoteIo-lc1000G3:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000G3.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
