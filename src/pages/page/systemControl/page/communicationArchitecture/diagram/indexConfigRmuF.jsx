import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigAuxF from "./indexConfigAuxF";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  remoteDi: { id: `${nodeGroupSetting.rmuF.id}:remoteDi`, name: "Remote DI" },
};
//設定線路資訊
const edgeSetting = {
  "rmuF:remoteDi-auxF:switch": {
    id: `${nodeSetting.remoteDi.id}-to-${indexConfigAuxF.nodeSetting.switch.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：RMU-F
  {
    data: { label: nodeGroupSetting.rmuF.name },
    id: nodeGroupSetting.rmuF.id,
    position: { x: 1185, y: 20000 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap - 10,
      height: nodeGap - 10,
    },
    type: "group",
  },
  //rmuF:Remote DI
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.remoteDi.name}>
          <div className="rect-icon bg-et"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "bottom" }] },
    },
    id: nodeSetting.remoteDi.id,
    parentNode: nodeGroupSetting.rmuF.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //rmuF:Remote DI->auxF:Switch
    id: edgeSetting["rmuF:remoteDi-auxF:switch"].id,
    source: nodeSetting.remoteDi.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigAuxF.nodeSetting.switch.id,
    targetHandle: "target-top-4", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
