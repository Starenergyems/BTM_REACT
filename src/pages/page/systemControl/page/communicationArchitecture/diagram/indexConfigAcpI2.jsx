import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
// import indexConfigAcpG2 from "./indexConfigAcpG2";
import indexConfigAcpI3 from "./indexConfigAcpI3";
import indexConfigLc1000I2 from "./indexConfigLc1000I2";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 178;

//設定節點資訊
const nodeSetting = {
  "acpmI2-1": {
    id: `${nodeGroupSetting.acpI2.id}:acpmI2-1`,
    name: "ACPM I2-1",
  },
  "acpmI2-2": {
    id: `${nodeGroupSetting.acpI2.id}:acpmI2-2`,
    name: "ACPM I2-2",
  },
  remoteIo: { id: `${nodeGroupSetting.acpI2.id}:remoteIo`, name: "Remote I/O" },
  trTemp: { id: `${nodeGroupSetting.acpI2.id}:trTemp`, name: "TR Temp" },
};
//設定線路資訊
const edgeSetting = {
  "acpI2:trTemp-acpI3:trTemp": {
    id: `${nodeSetting.trTemp.id}-to-${indexConfigAcpI3.nodeSetting.trTemp.id}`,
  },
  "acpI2:acpmI2-1-acpI2:acpmI2-2": {
    id: `${nodeSetting["acpmI2-1"].id}-to-${nodeSetting["acpmI2-2"].id}`,
  },
  "acpI2:acpmI2-2-acpI3:acpmI3-1": {
    id: `${nodeSetting["acpmI2-2"].id}-to-${indexConfigAcpI3.nodeSetting["acpmI3-1"].id}`,
  },
  "acpI2:remoteIo-lc1000I2:switch": {
    id: `${nodeSetting.remoteIo.id}-to-${indexConfigLc1000I2.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：ACP-I2
  {
    data: { label: nodeGroupSetting.acpI2.name },
    id: nodeGroupSetting.acpI2.id,
    position: { x: 3800, y: 28100 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //acpI2:TR Temp
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
    parentNode: nodeGroupSetting.acpI2.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //acpI2:ACPM I2-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmI2-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmI2-1"].id,
    parentNode: nodeGroupSetting.acpI2.id,
    position: {
      x: startPositionX - 125 / 2 - 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpI2:ACPM I2-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["acpmI2-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting["acpmI2-2"].id,
    parentNode: nodeGroupSetting.acpI2.id,
    position: {
      x: startPositionX + 125 / 2 + 5,
      y: startPositionY + nodeGap - 28,
    },
    type: "custom",
  },
  //acpI2:Remote I/O
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
    parentNode: nodeGroupSetting.acpI2.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //acpI2:trTemp-acpI3:trTemp
    id: edgeSetting["acpI2:trTemp-acpI3:trTemp"].id,
    source: nodeSetting.trTemp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpI3.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpI2:ACPM I2-1->ACPM I2-2
    id: edgeSetting["acpI2:acpmI2-1-acpI2:acpmI2-2"].id,
    source: nodeSetting["acpmI2-1"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting["acpmI2-2"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpI2:ACPM I2-2->acpI3:ACPM I3-1
    id: edgeSetting["acpI2:acpmI2-2-acpI3:acpmI3-1"].id,
    source: nodeSetting["acpmI2-2"].id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpI3.nodeSetting["acpmI3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //acpI2:Remote I/O->lc1000I2:Switch
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
    id: edgeSetting["acpI2:remoteIo-lc1000I2:switch"].id,
    source: nodeSetting.remoteIo.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.cyan, strokeWidth: 3 },
    target: indexConfigLc1000I2.nodeSetting.switch.id,
    targetHandle: "target-top-2", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
