import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigMvcb1 from "./indexConfigMvcb1";
import indexConfigMvcb2 from "./indexConfigMvcb2";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 80;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  ion900: { id: `${nodeGroupSetting.gis.id}:ion900`, name: "ION900" },
  powerScada: {
    id: `${nodeGroupSetting.gis.id}:powerScada`,
    name: "Power SCADA",
  },
};
//設定線路資訊
const edgeSetting = {
  "gis:powerScada-mvcb1:mvcb1": {
    id: `${nodeSetting.powerScada.id}-to-${indexConfigMvcb1.nodeSetting.mvcb1.id}`,
  },
  "gis:powerScada-mvcb2:mvcb2": {
    id: `${nodeSetting.powerScada.id}-to-${indexConfigMvcb2.nodeSetting.mvcb2.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：GIS
  {
    data: { label: nodeGroupSetting.gis.name },
    id: nodeGroupSetting.gis.id,
    position: { x: 670, y: 900 },
    style: {
      ...nodeGroupStyle,
      background: "#455161",
      width: nodeGap - 10,
      height: nodeGap * 2,
    },
    type: "group",
  },
  //gis:ION900
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.ion900.name}>
          <div className="rect-icon bg-ion900"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting.ion900.id,
    parentNode: nodeGroupSetting.gis.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //gis:Power SCADA
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.powerScada.name}
          labelStyle={{
            whiteSpace: "nowrap",
            left: 27,
          }}
        >
          <div className="rect-icon bg-power-scada"></div>
        </NodeLabel>
      ),
      handles: {
        source: [
          { dir: "bottom", offset: "40%" }, //要位移的話offset設定百分比，較準確
          { dir: "bottom", offset: "60%" },
        ],
        target: [{ dir: "left" }],
      },
    },
    id: nodeSetting.powerScada.id,
    parentNode: nodeGroupSetting.gis.id,
    position: { x: startPositionX, y: startPositionY + nodeGap * 1 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //gis:Power SCADA->gis:Switch
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap * 4 - 67}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["gis:powerScada-mvcb1:mvcb1"].id,
    source: nodeSetting.powerScada.id,
    sourceHandle: "source-bottom-1", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigMvcb1.nodeSetting.mvcb1.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //gis:Power SCADA->gis:Switch
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap * 8 - 166.5}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["gis:powerScada-mvcb2:mvcb2"].id,
    source: nodeSetting.powerScada.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigMvcb2.nodeSetting.mvcb2.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
