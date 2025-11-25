import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigNoGroup from "./indexConfigNoGroup";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 300;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  fiberTerminal: {
    id: `${nodeGroupSetting.lc1000A3.id}:fiberTerminal`,
    name: "光纖終端盒",
  },
  lc: { id: `${nodeGroupSetting.lc1000A3.id}:lc`, name: "LC" },
  sgSwitch: {
    id: `${nodeGroupSetting.lc1000A3.id}:sgSwitch`,
    name: "SG_Switch",
  },
  switch: { id: `${nodeGroupSetting.lc1000A3.id}:switch`, name: "Switch" },
};
//設定線路資訊
const edgeSetting = {
  "lc1000A3:fiberTerminal-lc1000A3:switch(1)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(1)`,
  },
  "lc1000A3:fiberTerminal-lc1000A3:switch(2)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(2)`,
  },
  "lc1000A3:switch-lc1000A3:lc": {
    id: `${nodeSetting.switch.id}-to-${nodeSetting.lc.id}`,
  },
  "lc1000A3:switch-lc1000A3:sgSwitch": {
    id: `${nodeSetting.switch.id}-to-${nodeSetting.sgSwitch.id}`,
  },
  "lc1000A3:lc-lc1000A3:sgSwitch": {
    id: `${nodeSetting.lc.id}-to-${nodeSetting.sgSwitch.id}`,
  },
  "lc1000A3:sgSwitch-noGroup:essA301Bsp": {
    id: `${nodeSetting.sgSwitch.id}-to-${indexConfigNoGroup.nodeSetting.essA301Bsp.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：LC1000-A3
  {
    data: { label: nodeGroupSetting.lc1000A3.name },
    id: nodeGroupSetting.lc1000A3.id,
    position: { x: 670, y: 6800 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap * 5 - 75,
      height: nodeGap + 20,
    },
    type: "group",
  },
  //lc1000A3:光纖終端盒
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.fiberTerminal.name}>
          <div className="bg-fiber-optic"></div>
        </NodeLabel>
      ),
      handles: {
        source: [
          { dir: "right", offset: "47.5%" }, //要位移的話offset設定百分比，較準確
          { dir: "right", offset: "65.5%" },
        ],
        target: [{ dir: "top" }, { dir: "left" }],
      },
    },
    id: nodeSetting.fiberTerminal.id,
    parentNode: nodeGroupSetting.lc1000A3.id,
    position: { x: startPositionX, y: startPositionY + 28 },
    type: "custom",
  },
  //lc1000A3:Switch
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.switch.name}>
          <div className="rect-icon bg-switch"></div>
        </NodeLabel>
      ),
      handles: {
        source: [{ dir: "right" }, { dir: "bottom" }],
        target: [
          { dir: "left", offset: "50%" }, //要位移的話offset設定百分比，較準確
          { dir: "left", offset: "60%" },
          { dir: "top" },
        ],
      },
    },
    id: nodeSetting.switch.id,
    parentNode: nodeGroupSetting.lc1000A3.id,
    position: { x: startPositionX + nodeGap, y: startPositionY },
    type: "custom",
  },
  //lc1000A3:LC
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.lc.name}>
          <div className="rect-icon bg-switch"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.lc.id,
    parentNode: nodeGroupSetting.lc1000A3.id,
    position: { x: startPositionX + nodeGap * 2, y: startPositionY },
    type: "custom",
  },
  //lc1000A3:SG_Switch
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.sgSwitch.name}>
          <div className="rect-icon bg-switch"></div>
        </NodeLabel>
      ),
      handles: {
        source: [{ dir: "right" }],
        target: [{ dir: "left" }, { dir: "bottom" }],
      },
    },
    id: nodeSetting.sgSwitch.id,
    parentNode: nodeGroupSetting.lc1000A3.id,
    position: { x: startPositionX + nodeGap * 3, y: startPositionY },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //lc1000A3:光纖終端盒->Switch(1)
    id: edgeSetting["lc1000A3:fiberTerminal-lc1000A3:switch(1)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //lc1000A3:光纖終端盒->Switch(2)
    id: edgeSetting["lc1000A3:fiberTerminal-lc1000A3:switch(2)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //lc1000A3:Switch->Lc
    id: edgeSetting["lc1000A3:switch-lc1000A3:lc"].id,
    source: nodeSetting.switch.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.lc.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //lc1000A3:Switch->SG_Switch
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + 50}
          L${sourceX + nodeGap * 2},${sourceY + 50}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["lc1000A3:switch-lc1000A3:sgSwitch"].id,
    source: nodeSetting.switch.id,
    sourceHandle: "source-bottom-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.sgSwitch.id,
    targetHandle: "target-bottom-1", //index是表示node的設定中handles.target:{dir:bottom}是陣列第幾位
    type: "custom",
  },
  {
    //lc1000A3:LC->SG_Switch
    id: edgeSetting["lc1000A3:lc-lc1000A3:sgSwitch"].id,
    source: nodeSetting.lc.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.sgSwitch.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //lc1000A3:SG_Switch->noGroup:ESS A3-01 BSP
    id: edgeSetting["lc1000A3:sgSwitch-noGroup:essA301Bsp"].id,
    source: nodeSetting.sgSwitch.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigNoGroup.nodeSetting.essA301Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
