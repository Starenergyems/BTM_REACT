import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigVcbH from "./indexConfigVcbH";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  vcbmG: { id: `${nodeGroupSetting.vcbG.id}:vcbmG`, name: "VCBM G" },
  vcbG: {
    id: `${nodeGroupSetting.vcbG.id}:vcbG`,
    name: "VCB-G",
  },
};
//設定線路資訊
const edgeSetting = {
  "vcbG:vcbmG:vcbH:vcbmH": {
    id: `${nodeSetting.vcbmG.id}-to-${indexConfigVcbH.nodeSetting.vcbmH.id}`,
  },
  "vcbG:vcbG:vcbH:vcbH": {
    id: `${nodeSetting.vcbG.id}-to-${indexConfigVcbH.nodeSetting.vcbH.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：VCB-B
  {
    data: { label: nodeGroupSetting.vcbG.name },
    id: nodeGroupSetting.vcbG.id,
    position: { x: 2675, y: 3200 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 2,
    },
    type: "group",
  },
  //vcbG:VCBM G
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbmG.name}>
          <div className="rect-icon bg-pm335"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbmG.id,
    parentNode: nodeGroupSetting.vcbG.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //vcbG:VCB-G
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbG.name}>
          <div className="rect-icon bg-mvcb"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbG.id,
    parentNode: nodeGroupSetting.vcbG.id,
    position: { x: startPositionX, y: startPositionY + nodeGap },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //vcbG:VCBM-G->vcbH:VCBM H
    id: edgeSetting["vcbG:vcbmG:vcbH:vcbmH"].id,
    source: nodeSetting.vcbmG.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigVcbH.nodeSetting.vcbmH.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //vcbG:VCB-G->vcbH:VCB-H
    id: edgeSetting["vcbG:vcbG:vcbH:vcbH"].id,
    source: nodeSetting.vcbG.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigVcbH.nodeSetting.vcbH.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
