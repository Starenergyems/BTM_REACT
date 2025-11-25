import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
// import indexConfigAcpG2 from "./indexConfigAcpG2";
import indexConfigAcpI2 from "./indexConfigAcpI2";
import indexConfigLc1000I1 from "./indexConfigLc1000I1";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmI1-1": {
    id: `${nodeGroupSetting.acpI1.id}:acpmI1-1`,
    name: "ACPM I1-1",
  },
  "acpmI1-2": {
    id: `${nodeGroupSetting.acpI1.id}:acpmI1-2`,
    name: "ACPM I1-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpI1.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpI1.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpI1:trTemp-acpI2:trTemp": {
    id: `${nodeSetting.trTemp.id}-to-${indexConfigAcpI2.nodeSetting.trTemp.id}`,
  },
  "acpI1:acpmI1-1-acpI1:acpmI1-2": {
    id: `${nodeSetting["acpmI1-1"].id}-to-${nodeSetting["acpmI1-2"].id}`,
  },
  "acpI1:acpmI1-2-acpI2:acpmI2-1": {
    id: `${nodeSetting["acpmI1-2"].id}-to-${indexConfigAcpI2.nodeSetting["acpmI2-1"].id}`,
  },
  "acpI1:remoteIo-lc1000I1:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000I1.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-I1
  {
    data: { label: nodeGroupSetting.acpI1.name },
    id: nodeGroupSetting.acpI1.id,
    position: { x: 3425, y: 28100 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpI1:TR Temp
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
    parentNode: nodeGroupSetting.acpI1.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpI1:ACPM I1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmI1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmI1-1"].id,
    parentNode: nodeGroupSetting.acpI1.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpI1:ACPM I1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmI1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmI1-2"].id,
    parentNode: nodeGroupSetting.acpI1.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpI1:Remote I/O
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
    parentNode: nodeGroupSetting.acpI1.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpI1:TR Temp->acpI2:TR Temp
    id: edgeSetting["acpI1:trTemp-acpI2:trTemp"].id,
    source: nodeSetting.trTemp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpI2.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpI1:ACPM I1-1->ACPM I1-2
    id: edgeSetting["acpI1:acpmI1-1-acpI1:acpmI1-2"].id,
    source: nodeSetting["acpmI1-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmI1-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpI1:ACPM I1-2->acpI2:ACPM I2-1
    id: edgeSetting["acpI1:acpmI1-2-acpI2:acpmI2-1"].id,
    source: nodeSetting["acpmI1-2"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpI2.nodeSetting["acpmI2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpI1:Remote I/O->lc1000I1:Switch
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
    id: edgeSetting["acpI1:remoteIo-lc1000I1:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000I1.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
