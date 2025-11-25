import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigAcpI1 from "./indexConfigAcpI1";
import indexConfigLc1000H3 from "./indexConfigLc1000H3";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmH3-1": {
    id: `${nodeGroupSetting.acpH3.id}:acpmH3-1`,
    name: "ACPM H3-1",
  },
  "acpmH3-2": {
    id: `${nodeGroupSetting.acpH3.id}:acpmH3-2`,
    name: "ACPM H3-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpH3.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpH3.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpH3:trTemp-acpI1:trTemp": {
    id: `${nodeSetting.trTemp.id}-to-${indexConfigAcpI1.nodeSetting.trTemp.id}`,
  },
  "acpH3:acpmH3-1-acpH3:acpmH3-2": {
    id: `${nodeSetting["acpmH3-1"].id}-to-${nodeSetting["acpmH3-2"].id}`,
  },
  "acpH3:acpmH3-2-acpI1:acpmI1-1": {
    id: `${nodeSetting["acpmH3-2"].id}-to-${indexConfigAcpI1.nodeSetting["acpmI1-1"].id}`,
  },
  "acpH3:remoteIo-lc1000H3:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000H3.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-H3
  {
    data: { label: nodeGroupSetting.acpH3.name },
    id: nodeGroupSetting.acpH3.id,
    position: { x: 3050, y: 28100 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpH3:TR Temp
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
    parentNode: nodeGroupSetting.acpH3.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpH3:ACPM H3-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmH3-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmH3-1"].id,
    parentNode: nodeGroupSetting.acpH3.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpH3:ACPM H3-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmH3-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmH3-2"].id,
    parentNode: nodeGroupSetting.acpH3.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpH3:Remote I/O
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
    parentNode: nodeGroupSetting.acpH3.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpH3:TR Temp->acpI1:TR Temp
    id: edgeSetting["acpH3:trTemp-acpI1:trTemp"].id,
    source: nodeSetting.trTemp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpI1.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpH3:ACPM H3-1->ACPM H3-2
    id: edgeSetting["acpH3:acpmH3-1-acpH3:acpmH3-2"].id,
    source: nodeSetting["acpmH3-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmH3-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpH3:ACPM H3-2->acpI1:ACPM I1-1
    id: edgeSetting["acpH3:acpmH3-2-acpI1:acpmI1-1"].id,
    source: nodeSetting["acpmH3-2"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpI1.nodeSetting["acpmI1-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpH3:Remote I/O->lc1000H3:Switch
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
    id: edgeSetting["acpH3:remoteIo-lc1000H3:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000H3.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
