import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigMaux from "./indexConfigMaux";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  vcbmJ: { id: `${nodeGroupSetting.vcbJ.id}:vcbmJ`, name: "VCBM J" },
  vcbJ: {
    id: `${nodeGroupSetting.vcbJ.id}:vcbJ`,
    name: "VCB-J",
  },
};
//設定線路資訊
const edgeSetting = {
  "vcbJ:vcbmJ:maux:mauxm": {
    id: `${nodeSetting.vcbmJ.id}-to-${indexConfigMaux.nodeSetting.mauxm.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：VCB-J
  {
    data: { label: nodeGroupSetting.vcbJ.name },
    id: nodeGroupSetting.vcbJ.id,
    position: { x: 3800, y: 3200 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 2,
    },
    type: "group",
  },
  //vcbJ:VCBM J
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbmJ.name}>
          <div className="rect-icon bg-pm335"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbmJ.id,
    parentNode: nodeGroupSetting.vcbJ.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //vcbJ:VCB-J
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbJ.name}>
          <div className="rect-icon bg-mvcb"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }, { dir: "right" }] },
    },
    id: nodeSetting.vcbJ.id,
    parentNode: nodeGroupSetting.vcbJ.id,
    position: { x: startPositionX, y: startPositionY + nodeGap },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //vcbJ:VCBM-J->maux:MAUXM
    id: edgeSetting["vcbJ:vcbmJ:maux:mauxm"].id,
    source: nodeSetting.vcbmJ.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigMaux.nodeSetting.mauxm.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
