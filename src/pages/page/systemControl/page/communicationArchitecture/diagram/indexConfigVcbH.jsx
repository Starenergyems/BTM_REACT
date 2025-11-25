import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigVcbI from "./indexConfigVcbI";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  vcbmH: { id: `${nodeGroupSetting.vcbH.id}:vcbmH`, name: "VCBM H" },
  vcbH: {
    id: `${nodeGroupSetting.vcbH.id}:vcbH`,
    name: "VCB-H",
  },
};
//設定線路資訊
const edgeSetting = {
  "vcbH:vcbmH:vcbI:vcbmI": {
    id: `${nodeSetting.vcbmH.id}-to-${indexConfigVcbI.nodeSetting.vcbmI.id}`,
  },
  "vcbH:vcbH:vcbI:vcbI": {
    id: `${nodeSetting.vcbH.id}-to-${indexConfigVcbI.nodeSetting.vcbI.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：VCB-H
  {
    data: { label: nodeGroupSetting.vcbH.name },
    id: nodeGroupSetting.vcbH.id,
    position: { x: 3050, y: 3200 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 2,
    },
    type: "group",
  },
  //vcbH:VCBM H
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbmH.name}>
          <div className="rect-icon bg-pm335"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbmH.id,
    parentNode: nodeGroupSetting.vcbH.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //vcbH:VCB-H
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbH.name}>
          <div className="rect-icon bg-mvcb"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbH.id,
    parentNode: nodeGroupSetting.vcbH.id,
    position: { x: startPositionX, y: startPositionY + nodeGap },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //vcbH:VCBM-H->vcbI:VCBM I
    id: edgeSetting["vcbH:vcbmH:vcbI:vcbmI"].id,
    source: nodeSetting.vcbmH.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigVcbI.nodeSetting.vcbmI.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //vcbH:VCB-H->vcbI:VCB-I
    id: edgeSetting["vcbH:vcbH:vcbI:vcbI"].id,
    source: nodeSetting.vcbH.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigVcbI.nodeSetting.vcbI.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
