import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigVcbB from "./indexConfigVcbB";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  vcbmA: { id: `${nodeGroupSetting.vcbA.id}:vcbmA`, name: "VCBM A" },
  vcbA: {
    id: `${nodeGroupSetting.vcbA.id}:vcbA`,
    name: "VCB-A",
  },
};
//設定線路資訊
const edgeSetting = {
  "vcbA:vcbmA:vcbB:vcbmB": {
    id: `${nodeSetting.vcbmA.id}-to-${indexConfigVcbB.nodeSetting.vcbmB.id}`,
  },
  "vcbA:vcbA:vcbB:vcbB": {
    id: `${nodeSetting.vcbA.id}-to-${indexConfigVcbB.nodeSetting.vcbB.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：VCB-A
  {
    data: { label: nodeGroupSetting.vcbA.name },
    id: nodeGroupSetting.vcbA.id,
    position: { x: 2300, y: 2100 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 2,
    },
    type: "group",
  },
  //vcbA:VCBM A
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbmA.name}>
          <div className="rect-icon bg-pm335"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbmA.id,
    parentNode: nodeGroupSetting.vcbA.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //vcbA:VCB-A
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbA.name}>
          <div className="rect-icon bg-mvcb"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbA.id,
    parentNode: nodeGroupSetting.vcbA.id,
    position: { x: startPositionX, y: startPositionY + nodeGap },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //vcbA:VCBM-A->vcbB:VCBM B
    id: edgeSetting["vcbA:vcbmA:vcbB:vcbmB"].id,
    source: nodeSetting.vcbmA.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigVcbB.nodeSetting.vcbmB.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //vcbA:VCB-A->vcbB:VCB-B
    id: edgeSetting["vcbA:vcbA:vcbB:vcbB"].id,
    source: nodeSetting.vcbA.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigVcbB.nodeSetting.vcbB.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
