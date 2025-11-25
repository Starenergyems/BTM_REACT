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
  vcbmE: { id: `${nodeGroupSetting.vcbE.id}:vcbmE`, name: "VCBM E" },
  vcbE: {
    id: `${nodeGroupSetting.vcbE.id}:vcbE`,
    name: "VCB-E",
  },
};
//設定線路資訊
const edgeSetting = {
  "vcbE:vcbE:vcbJ:vcbJ": {
    id: `${nodeSetting.vcbE.id}-to-${indexConfigVcbJ.nodeSetting.vcbJ.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：VCB-E
  {
    data: { label: nodeGroupSetting.vcbE.name },
    id: nodeGroupSetting.vcbE.id,
    position: { x: 3800, y: 2100 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 2,
    },
    type: "group",
  },
  //vcbE:VCBM E
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbmE.name}>
          <div className="rect-icon bg-pm335"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbmE.id,
    parentNode: nodeGroupSetting.vcbE.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //vcbE:VCB-E
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.vcbE.name}>
          <div className="rect-icon bg-mvcb"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.vcbE.id,
    parentNode: nodeGroupSetting.vcbE.id,
    position: { x: startPositionX, y: startPositionY + nodeGap },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //vcbE:VCB-E->vcbJ:VCB-J
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX + 50},${sourceY}
          L${sourceX + 50},${sourceY + nodeGap * 4 - 100}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["vcbE:vcbE:vcbJ:vcbJ"].id,
    source: nodeSetting.vcbE.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigVcbJ.nodeSetting.vcbJ.id,
    targetHandle: "target-right-1", //index是表示node的設定中handles.target:{dir:right}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
