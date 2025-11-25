import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigVcbG from "./indexConfigVcbG";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  vcbmF: { id: `${nodeGroupSetting.vcbF.id}:vcbmF`, name: "VCBM F" },
  vcbF: {
    id: `${nodeGroupSetting.vcbF.id}:vcbF`,
    name: "VCB-F",
  },
};
//設定線路資訊
const edgeSetting = {
  "vcbF:vcbmF:vcbG:vcbmG": {
    id: `${nodeSetting.vcbmF.id}-to-${indexConfigVcbG.nodeSetting.vcbmG.id}`,
  },
  "vcbF:vcbF:vcbG:vcbG": {
    id: `${nodeSetting.vcbF.id}-to-${indexConfigVcbG.nodeSetting.vcbG.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：VCB-F
  {
    data: { label: nodeGroupSetting.vcbF.name },
    id: nodeGroupSetting.vcbF.id,
    position: { x: 2300, y: 3200 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 2,
    },
    type: "group",
  },
  //vcbF:VCBM F
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbmF.name}>
          <div className="rect-icon bg-pm335"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbmF.id,
    parentNode: nodeGroupSetting.vcbF.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //vcbF:VCB-F
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbF.name}>
          <div className="rect-icon bg-mvcb"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbF.id,
    parentNode: nodeGroupSetting.vcbF.id,
    position: { x: startPositionX, y: startPositionY + nodeGap },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //vcbF:VCBM-F->vcbG:VCBM G
    id: edgeSetting["vcbF:vcbmF:vcbG:vcbmG"].id,
    source: nodeSetting.vcbmF.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigVcbG.nodeSetting.vcbmG.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //vcbF:VCB-F->vcbG:VCB-G
    id: edgeSetting["vcbF:vcbF:vcbG:vcbG"].id,
    source: nodeSetting.vcbF.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigVcbG.nodeSetting.vcbG.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
