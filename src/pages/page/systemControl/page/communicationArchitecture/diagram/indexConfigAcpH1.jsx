import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigAcpH2 from "./indexConfigAcpH2";
import indexConfigLc1000H1 from "./indexConfigLc1000H1";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmH1-1": {
    id: `${nodeGroupSetting.acpH1.id}:acpmH1-1`,
    name: "ACPM H1-1",
  },
  "acpmH1-2": {
    id: `${nodeGroupSetting.acpH1.id}:acpmH1-2`,
    name: "ACPM H1-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpH1.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpH1.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpH1:trTemp-acpH2:trTemp": {
    id: `${nodeSetting.trTemp.id}-to-${indexConfigAcpH2.nodeSetting.trTemp.id}`,
  },
  "acpH1:acpmH1-1-acpH1:acpmH1-2": {
    id: `${nodeSetting["acpmH1-1"].id}-to-${nodeSetting["acpmH1-2"].id}`,
  },
  "acpH1:acpmH1-2-acpH2:acpmH2-1": {
    id: `${nodeSetting["acpmH1-2"].id}-to-${indexConfigAcpH2.nodeSetting["acpmH2-1"].id}`,
  },
  "acpH1:remoteIo-lc1000H1:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000H1.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-H1
  {
    data: { label: nodeGroupSetting.acpH1.name },
    id: nodeGroupSetting.acpH1.id,
    position: { x: 3800, y: 24300 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpH1:TR Temp
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
    parentNode: nodeGroupSetting.acpH1.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpH1:ACPM H1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmH1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmH1-1"].id,
    parentNode: nodeGroupSetting.acpH1.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpH1:ACPM H1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmH1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmH1-2"].id,
    parentNode: nodeGroupSetting.acpH1.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpH1:Remote I/O
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
    parentNode: nodeGroupSetting.acpH1.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpH1:TR Temp->acpH2:TR Temp
    id: edgeSetting["acpH1:trTemp-acpH2:trTemp"].id,
    source: nodeSetting.trTemp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpH2.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpH1:ACPM H1-1->ACPM H1-2
    id: edgeSetting["acpH1:acpmH1-1-acpH1:acpmH1-2"].id,
    source: nodeSetting["acpmH1-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmH1-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpH1:ACPM H1-2->acpH1:ACPM H2-1
    id: edgeSetting["acpH1:acpmH1-2-acpH2:acpmH2-1"].id,
    source: nodeSetting["acpmH1-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpH2.nodeSetting["acpmH2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpH1:Remote I/O->lc1000H1:Switch
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
    id: edgeSetting["acpH1:remoteIo-lc1000H1:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000H1.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
