import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigVcbD from "./indexConfigVcbD";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  vcbmC: { id: `${nodeGroupSetting.vcbC.id}:vcbmC`, name: "VCBM C" },
  vcbC: {
    id: `${nodeGroupSetting.vcbC.id}:vcbC`,
    name: "VCB-C",
  },
};
//設定線路資訊
const edgeSetting = {
  "vcbC:vcbmC:vcbD:vcbmD": {
    id: `${nodeSetting.vcbmC.id}-to-${indexConfigVcbD.nodeSetting.vcbmD.id}`,
  },
  "vcbC:vcbC:vcbD:vcbD": {
    id: `${nodeSetting.vcbC.id}-to-${indexConfigVcbD.nodeSetting.vcbD.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：VCB-C
  {
    data: { label: nodeGroupSetting.vcbC.name },
    id: nodeGroupSetting.vcbC.id,
    position: { x: 3050, y: 2100 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 2,
    },
    type: "group",
  },
  //vcbC:VCBM C
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbmC.name}>
          <div className="rect-icon bg-pm335"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbmC.id,
    parentNode: nodeGroupSetting.vcbC.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //vcbC:VCB-C
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbC.name}>
          <div className="rect-icon bg-mvcb"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbC.id,
    parentNode: nodeGroupSetting.vcbC.id,
    position: { x: startPositionX, y: startPositionY + nodeGap },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //vcbC:VCBM-C->vcbD:VCBM D
    id: edgeSetting["vcbC:vcbmC:vcbD:vcbmD"].id,
    source: nodeSetting.vcbmC.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigVcbD.nodeSetting.vcbmD.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //vcbC:VCB-C->vcbD:VCB-D
    id: edgeSetting["vcbC:vcbC:vcbD:vcbD"].id,
    source: nodeSetting.vcbC.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigVcbD.nodeSetting.vcbD.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
