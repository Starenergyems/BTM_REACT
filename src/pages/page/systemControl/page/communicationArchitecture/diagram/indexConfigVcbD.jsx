import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigVcbE from "./indexConfigVcbE";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  vcbmD: { id: `${nodeGroupSetting.vcbD.id}:vcbmD`, name: "VCBM D" },
  vcbD: {
    id: `${nodeGroupSetting.vcbD.id}:vcbD`,
    name: "VCB-D",
  },
};
//設定線路資訊
const edgeSetting = {
  "vcbD:vcbmD:vcbE:vcbmE": {
    id: `${nodeSetting.vcbmD.id}-to-${indexConfigVcbE.nodeSetting.vcbmE.id}`,
  },
  "vcbD:vcbD:vcbE:vcbE": {
    id: `${nodeSetting.vcbD.id}-to-${indexConfigVcbE.nodeSetting.vcbE.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：VCB-D
  {
    data: { label: nodeGroupSetting.vcbD.name },
    id: nodeGroupSetting.vcbD.id,
    position: { x: 3425, y: 2100 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 2,
    },
    type: "group",
  },
  //vcbD:VCBM D
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbmD.name}>
          <div className="rect-icon bg-pm335"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbmD.id,
    parentNode: nodeGroupSetting.vcbD.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //vcbD:VCB-D
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbD.name}>
          <div className="rect-icon bg-mvcb"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbD.id,
    parentNode: nodeGroupSetting.vcbD.id,
    position: { x: startPositionX, y: startPositionY + nodeGap },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //vcbD:VCBM-D->vcbE:VCBM E
    id: edgeSetting["vcbD:vcbmD:vcbE:vcbmE"].id,
    source: nodeSetting.vcbmD.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigVcbE.nodeSetting.vcbmE.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //vcbD:VCB-D->vcbE:VCB-E
    id: edgeSetting["vcbD:vcbD:vcbE:vcbE"].id,
    source: nodeSetting.vcbD.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigVcbE.nodeSetting.vcbE.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
