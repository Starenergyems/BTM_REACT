import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigMaux from "./indexConfigMaux";
import indexConfigVcbF from "./indexConfigVcbF";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 410;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  mvcb2: { id: `${nodeGroupSetting.mvcb2.id}:mvcb2`, name: "MVCB2" },
  mvcbm: { id: `${nodeGroupSetting.mvcb2.id}:mvcbm`, name: "MVCBM" },
  remoteDi: { id: `${nodeGroupSetting.mvcb2.id}:remoteDi`, name: "Remote DI" },
  remoteDo: { id: `${nodeGroupSetting.mvcb2.id}:remoteDo`, name: "Remote DO" },
  rtuGw: { id: `${nodeGroupSetting.mvcb2.id}:rtuGw`, name: "RTU GW" },
  switch: { id: `${nodeGroupSetting.mvcb2.id}:switch`, name: "Switch" },
  ups: { id: `${nodeGroupSetting.mvcb2.id}:ups`, name: "UPS" },
};
//設定線路資訊
const edgeSetting = {
  "mvcb2:rtuGw-maux:trTemp": {
    id: `${nodeSetting.rtuGw.id}-to-${indexConfigMaux.nodeSetting.trTemp.id}`,
  },
  "mvcb2:rtuGw-mvcb2:ups": {
    id: `${nodeSetting.rtuGw.id}-to-${nodeSetting.ups.id}`,
  },
  "mvcb2:rtuGw-mvcb2:switch": {
    id: `${nodeSetting.rtuGw.id}-to-${nodeSetting.switch.id}`,
  },
  "mvcb2:switch-mvcb2:mvcbm": {
    id: `${nodeSetting.switch.id}-to-${nodeSetting.mvcbm.id}`,
  },
  "mvcb2:mvcbm-mvcb2:remoteDi": {
    id: `${nodeSetting.mvcbm.id}-to-${nodeSetting.remoteDi.id}`,
  },
  "mvcb2:remoteDi-mvcb2:remoteDo": {
    id: `${nodeSetting.remoteDi.id}-to-${nodeSetting.remoteDo.id}`,
  },
  "mvcb2:remoteDo-vcbF:vcbmF": {
    id: `${nodeSetting.remoteDo.id}-to-${indexConfigVcbF.nodeSetting.vcbmF.id}`,
  },
  "mvcb2:mvcb2-vcbF:vcbF": {
    id: `${nodeSetting.mvcb2.id}-to-${indexConfigVcbF.nodeSetting.vcbF.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：MVCB2
  {
    data: { label: nodeGroupSetting.mvcb2.name },
    id: nodeGroupSetting.mvcb2.id,
    position: { x: 955, y: 2900 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap * 4 + 60,
      height: nodeGap * 3,
    },
    type: "group",
  },
  //mvcb2:RTU GW
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.rtuGw.name}>
          <div className="rect-icon bg-tgw-725i"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "left" }, { dir: "right" }, { dir: "top" }] },
    },
    id: nodeSetting.rtuGw.id,
    parentNode: nodeGroupSetting.mvcb2.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //mvcb2:UPS
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
    parentNode: nodeGroupSetting.mvcb2.id,
    position: { x: startPositionX + nodeGap, y: startPositionY },
    type: "custom",
  },
  //mvcb2:Switch
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
    parentNode: nodeGroupSetting.mvcb2.id,
    position: { x: startPositionX - nodeGap, y: startPositionY + nodeGap },
    type: "custom",
  },
  //mvcb2:MVCBM
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
    parentNode: nodeGroupSetting.mvcb2.id,
    position: { x: startPositionX, y: startPositionY + nodeGap },
    type: "custom",
  },
  //mvcb2:Remote DI
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
    parentNode: nodeGroupSetting.mvcb2.id,
    position: { x: startPositionX + nodeGap, y: startPositionY + nodeGap },
    type: "custom",
  },
  //mvcb2:Remote DO
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
    parentNode: nodeGroupSetting.mvcb2.id,
    position: { x: startPositionX + nodeGap * 2, y: startPositionY + nodeGap },
    type: "custom",
  },
  //mvcb2:MVCB2
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.mvcb2.name}>
          <div className="rect-icon bg-mvcb"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.mvcb2.id,
    parentNode: nodeGroupSetting.mvcb2.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //mvcb2:RTU GW->maux:TR Temp
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY - 150}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["mvcb2:rtuGw-maux:trTemp"].id,
    source: nodeSetting.rtuGw.id,
    sourceHandle: "source-top-2", //index是表示node的設定中handles.source:{dir:top}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigMaux.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //mvcb2:RTU GW->UPS
    id: edgeSetting["mvcb2:rtuGw-mvcb2:ups"].id,
    source: nodeSetting.rtuGw.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting.ups.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //mvcb2:RTU GW->Switch
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
    id: edgeSetting["mvcb2:rtuGw-mvcb2:switch"].id,
    source: nodeSetting.rtuGw.id,
    sourceHandle: "source-left-0", //index是表示node的設定中handles.source:{dir:left}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-top-0", //index是表示node的設定中handles.source:{dir:top}是陣列第幾位
    type: "custom",
  },
  {
    //mvcb2:Switch GW->MVCBM
    id: edgeSetting["mvcb2:switch-mvcb2:mvcbm"].id,
    source: nodeSetting.switch.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.mvcbm.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //mvcb2:MVCBM->Remote DI
    id: edgeSetting["mvcb2:mvcbm-mvcb2:remoteDi"].id,
    source: nodeSetting.mvcbm.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.remoteDi.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //mvcb2:Remote DI->Remote DO
    id: edgeSetting["mvcb2:remoteDi-mvcb2:remoteDo"].id,
    source: nodeSetting.remoteDi.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.remoteDo.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //mvcb2:Remote DO->vcbF:vcbmF
    id: edgeSetting["mvcb2:remoteDo-vcbF:vcbmF"].id,
    source: nodeSetting.remoteDo.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigVcbF.nodeSetting.vcbmF.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //mvcb2:MVCB2->vcbF:vcbF
    id: edgeSetting["mvcb2:mvcb2-vcbF:vcbF"].id,
    source: nodeSetting.mvcb2.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigVcbF.nodeSetting.vcbF.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
