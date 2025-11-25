import { nodeGap, nodeGroupSetting, nodeGroupStyle } from "./indexConfigCommon";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 700;

//設定節點資訊
const nodeSetting = {
  trTemp: { id: `${nodeGroupSetting.maux.id}:trTemp`, name: "TR Temp" },
  mauxm: { id: `${nodeGroupSetting.maux.id}:mauxm`, name: "MAUXM" },
};
//設定線路資訊
const edgeSetting = {};
//節點初始值設定
const initialNodes = [
  //group：MAUX
  {
    data: { label: nodeGroupSetting.maux.name },
    id: nodeGroupSetting.maux.id,
    position: { x: 4175, y: 2100 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap * 6 - 100,
    },
    type: "group",
  },
  //maux:TR Temp
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.trTemp.name}
          labelStyle={{ whiteSpace: "nowrap" }}
        >
          <div className="bg-temp"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting.trTemp.id,
    parentNode: nodeGroupSetting.maux.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //maux:MAUXM
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.mauxm.name}>
          <div className="rect-icon bg-pm335"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting.mauxm.id,
    parentNode: nodeGroupSetting.maux.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 2 - 120 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
