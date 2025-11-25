import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigVcbA from "./indexConfigVcbA";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 410;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  mvcb1: { id: `${nodeGroupSetting.mvcb1.id}:mvcb1`, name: "MVCB1" },
  mvcbm: { id: `${nodeGroupSetting.mvcb1.id}:mvcbm`, name: "MVCBM" },
  remoteDi: { id: `${nodeGroupSetting.mvcb1.id}:remoteDi`, name: "Remote DI" },
  remoteDo: { id: `${nodeGroupSetting.mvcb1.id}:remoteDo`, name: "Remote DO" },
  rtuGw: { id: `${nodeGroupSetting.mvcb1.id}:rtuGw`, name: "RTU GW" },
  switch: { id: `${nodeGroupSetting.mvcb1.id}:switch`, name: "Switch" },
  ups: {
    id: `${nodeGroupSetting.mvcb1.id}:ups`,
    name: "UPS",
  },
};
//設定線路資訊
const edgeSetting = {
  "mvcb1:rtuGw-mvcb1:ups": {
    id: `${nodeSetting.rtuGw.id}-to-${nodeSetting.ups.id}`,
  },
  "mvcb1:rtuGw-mvcb1:switch": {
    id: `${nodeSetting.rtuGw.id}-to-${nodeSetting.switch.id}`,
  },
  "mvcb1:switch-mvcb1:mvcbm": {
    id: `${nodeSetting.switch.id}-to-${nodeSetting.mvcbm.id}`,
  },
  "mvcb1:mvcbm-mvcb1:remoteDi": {
    id: `${nodeSetting.mvcbm.id}-to-${nodeSetting.remoteDi.id}`,
  },
  "mvcb1:remoteDi-mvcb1:remoteDo": {
    id: `${nodeSetting.remoteDi.id}-to-${nodeSetting.remoteDo.id}`,
  },
  "mvcb1:remoteDo-vcbA:vcbmA": {
    id: `${nodeSetting.remoteDo.id}-to-${indexConfigVcbA.nodeSetting.vcbmA.id}`,
  },
  "mvcb1:mvcb1-vcbA:vcbA": {
    id: `${nodeSetting.mvcb1.id}-to-${indexConfigVcbA.nodeSetting.vcbA.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：MVCB1
  {
    data: { label: nodeGroupSetting.mvcb1.name },
    id: nodeGroupSetting.mvcb1.id,
    position: { x: 955, y: 1800 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap * 4 + 60,
      height: nodeGap * 3,
    },
    type: "group",
  },
  //mvcb1:RTU GW
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.rtuGw.name}>
          <div className="rect-icon bg-tgw-725i"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "left" }, { dir: "right" }] },
    },
    id: nodeSetting.rtuGw.id,
    parentNode: nodeGroupSetting.mvcb1.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //mvcb1:UPS
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.ups.name}>
          <div className="rect-icon bg-ups"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting.ups.id,
    parentNode: nodeGroupSetting.mvcb1.id,
    position: { x: startPositionX + nodeGap, y: startPositionY },
    type: "custom",
  },
  //mvcb1:Switch
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.switch.name}>
          <div className="rect-icon bg-switch"></div>
        </NodeLabel>
      ),
      handles: {
        source: [{ dir: "right" }],
        target: [{ dir: "top" }, { dir: "left" }],
      },
    },
    id: nodeSetting.switch.id,
    parentNode: nodeGroupSetting.mvcb1.id,
    position: { x: startPositionX - nodeGap, y: startPositionY + nodeGap },
    type: "custom",
  },
  //mvcb1:MVCBM
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.mvcbm.name}>
          <div className="rect-icon bg-pm335"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.mvcbm.id,
    parentNode: nodeGroupSetting.mvcb1.id,
    position: { x: startPositionX, y: startPositionY + nodeGap },
    type: "custom",
  },
  //mvcb1:Remote DI
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.remoteDi.name}>
          <div className="rect-icon bg-et"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.remoteDi.id,
    parentNode: nodeGroupSetting.mvcb1.id,
    position: { x: startPositionX + nodeGap, y: startPositionY + nodeGap },
    type: "custom",
  },
  //mvcb1:Remote DO
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.remoteDo.name}>
          <div className="rect-icon bg-et"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.remoteDo.id,
    parentNode: nodeGroupSetting.mvcb1.id,
    position: { x: startPositionX + nodeGap * 2, y: startPositionY + nodeGap },
    type: "custom",
  },
  //mvcb1:MVCB1
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.mvcb1.name}>
          <div className="rect-icon bg-mvcb"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.mvcb1.id,
    parentNode: nodeGroupSetting.mvcb1.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //mvcb1:RTU GW->UPS
    id: edgeSetting["mvcb1:rtuGw-mvcb1:ups"].id,
    source: nodeSetting.rtuGw.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting.ups.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //mvcb1:RTU GW->Switch
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX - nodeGap + 66},${sourceY}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["mvcb1:rtuGw-mvcb1:switch"].id,
    source: nodeSetting.rtuGw.id,
    sourceHandle: "source-left-0", //index是表示node的設定中handles.source:{dir:left}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-top-0", //index是表示node的設定中handles.source:{dir:top}是陣列第幾位
    type: "custom",
  },
  {
    //mvcb1:Switch GW->MVCBM
    id: edgeSetting["mvcb1:switch-mvcb1:mvcbm"].id,
    source: nodeSetting.switch.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.mvcbm.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //mvcb1:MVCBM->Remote DI
    id: edgeSetting["mvcb1:mvcbm-mvcb1:remoteDi"].id,
    source: nodeSetting.mvcbm.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.remoteDi.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //mvcb1:Remote DI->Remote DO
    id: edgeSetting["mvcb1:remoteDi-mvcb1:remoteDo"].id,
    source: nodeSetting.remoteDi.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.remoteDo.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //mvcb1:Remote Do->vcbA:vcbmA
    id: edgeSetting["mvcb1:remoteDo-vcbA:vcbmA"].id,
    source: nodeSetting.remoteDo.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigVcbA.nodeSetting.vcbmA.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //mvcb1:MVCB1 DI->vcbA:vcbA
    id: edgeSetting["mvcb1:mvcb1-vcbA:vcbA"].id,
    source: nodeSetting.mvcb1.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigVcbA.nodeSetting.vcbA.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
