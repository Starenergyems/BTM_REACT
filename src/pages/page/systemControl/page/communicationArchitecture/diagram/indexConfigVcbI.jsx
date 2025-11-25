import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigVcbJ from "./indexConfigVcbJ";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  vcbmI: { id: `${nodeGroupSetting.vcbI.id}:vcbmI`, name: "VCBM I" },
  vcbI: {
    id: `${nodeGroupSetting.vcbI.id}:vcbI`,
    name: "VCB-I",
  },
};
//設定線路資訊
const edgeSetting = {
  "vcbI:vcbmI:vcbJ:vcbmJ": {
    id: `${nodeSetting.vcbmI.id}-to-${indexConfigVcbJ.nodeSetting.vcbmJ.id}`,
  },
  "vcbI:vcbI:vcbJ:vcbJ": {
    id: `${nodeSetting.vcbI.id}-to-${indexConfigVcbJ.nodeSetting.vcbJ.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：VCB-I
  {
    data: { label: nodeGroupSetting.vcbI.name },
    id: nodeGroupSetting.vcbI.id,
    position: { x: 3425, y: 3200 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 2,
    },
    type: "group",
  },
  //vcbI:VCBM I
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbmI.name}>
          <div className="rect-icon bg-pm335"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbmI.id,
    parentNode: nodeGroupSetting.vcbI.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //vcbI:VCB-I
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbI.name}>
          <div className="rect-icon bg-mvcb"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbI.id,
    parentNode: nodeGroupSetting.vcbI.id,
    position: { x: startPositionX, y: startPositionY + nodeGap },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //vcbI:VCBM-I->vcbJ:VCBM J
    id: edgeSetting["vcbI:vcbmI:vcbJ:vcbmJ"].id,
    source: nodeSetting.vcbmI.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigVcbJ.nodeSetting.vcbmJ.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //vcbI:VCB-I->vcbJ:VCB-J
    id: edgeSetting["vcbI:vcbI:vcbJ:vcbJ"].id,
    source: nodeSetting.vcbI.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigVcbJ.nodeSetting.vcbJ.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
