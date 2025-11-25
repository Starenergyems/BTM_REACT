import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigVcbC from "./indexConfigVcbC";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  vcbmB: { id: `${nodeGroupSetting.vcbB.id}:vcbmB`, name: "VCBM B" },
  vcbB: {
    id: `${nodeGroupSetting.vcbB.id}:vcbB`,
    name: "VCB-B",
  },
};
//設定線路資訊
const edgeSetting = {
  "vcbB:vcbmB:vcbC:vcbmC": {
    id: `${nodeSetting.vcbmB.id}-to-${indexConfigVcbC.nodeSetting.vcbmC.id}`,
  },
  "vcbB:vcbB:vcbC:vcbC": {
    id: `${nodeSetting.vcbB.id}-to-${indexConfigVcbC.nodeSetting.vcbC.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：VCB-B
  {
    data: { label: nodeGroupSetting.vcbB.name },
    id: nodeGroupSetting.vcbB.id,
    position: { x: 2675, y: 2100 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 2,
    },
    type: "group",
  },
  //vcbB:VCBM B
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbmB.name}>
          <div className="rect-icon bg-pm335"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbmB.id,
    parentNode: nodeGroupSetting.vcbB.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //vcbB:VCB-B
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbB.name}>
          <div className="rect-icon bg-mvcb"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbB.id,
    parentNode: nodeGroupSetting.vcbB.id,
    position: { x: startPositionX, y: startPositionY + nodeGap },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //vcbB:VCBM-B->vcbC:VCBM C
    id: edgeSetting["vcbB:vcbmB:vcbC:vcbmC"].id,
    source: nodeSetting.vcbmB.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigVcbC.nodeSetting.vcbmC.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //vcbB:VCB-B->vcbC:VCB-C
    id: edgeSetting["vcbB:vcbB:vcbC:vcbC"].id,
    source: nodeSetting.vcbB.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigVcbC.nodeSetting.vcbC.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
