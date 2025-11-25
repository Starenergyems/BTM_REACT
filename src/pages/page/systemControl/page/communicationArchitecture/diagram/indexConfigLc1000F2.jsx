import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigNoGroup from "./indexConfigNoGroup";
import indexConfigLc1000F3 from "./indexConfigLc1000F3";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 300;
//起始節點的y座標
const startPositionY = 80;

//設定節點資訊
const nodeSetting = {
  fiberTerminal: {
    id: `${nodeGroupSetting.lc1000F2.id}:fiberTerminal`,
    name: "光纖終端盒",
  },
  lc: { id: `${nodeGroupSetting.lc1000F2.id}:lc`, name: "LC" },
  sgSwitch: {
    id: `${nodeGroupSetting.lc1000F2.id}:sgSwitch`,
    name: "SG_Switch",
  },
  switch: { id: `${nodeGroupSetting.lc1000F2.id}:switch`, name: "Switch" },
};
//設定線路資訊
const edgeSetting = {
  "lc1000F2:fiberTerminal-lc1000F2:switch(1)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(1)`,
  },
  "lc1000F2:fiberTerminal-lc1000F2:switch(2)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(2)`,
  },
  "lc1000F2:fiberTerminal-lc1000F3:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigLc1000F3.nodeSetting.fiberTerminal.id}`,
  },
  "lc1000F2:switch-lc1000F2:lc": {
    id: `${nodeSetting.switch.id}-to-${nodeSetting.lc.id}`,
  },
  "lc1000F2:switch-lc1000F2:sgSwitch": {
    id: `${nodeSetting.switch.id}-to-${nodeSetting.sgSwitch.id}`,
  },
  "lc1000F2:lc-lc1000F2:sgSwitch": {
    id: `${nodeSetting.lc.id}-to-${nodeSetting.sgSwitch.id}`,
  },
  "lc1000F2:sgSwitch-noGroup:essF201Bsp": {
    id: `${nodeSetting.sgSwitch.id}-to-${indexConfigNoGroup.nodeSetting.essF201Bsp.id}`,
  },
};

//節點初始值設定
const initialNodes = [
  //group：LC1000-F2
  {
    data: { label: nodeGroupSetting.lc1000F2.name },
    id: nodeGroupSetting.lc1000F2.id,
    position: { x: 670, y: 22300 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap * 5 - 75,
      height: nodeGap + 20,
    },
    type: "group",
  },
  //lc1000F2:光纖終端盒
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
          { dir: "bottom" },
        ],
        target: [{ dir: "top" }],
      },
    },
    id: nodeSetting.fiberTerminal.id,
    parentNode: nodeGroupSetting.lc1000F2.id,
    position: { x: startPositionX, y: startPositionY + 28 },
    type: "custom",
  },
  //lc1000F2:Switch
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
    parentNode: nodeGroupSetting.lc1000F2.id,
    position: { x: startPositionX + nodeGap, y: startPositionY },
    type: "custom",
  },
  //lc1000F2:LC
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
    parentNode: nodeGroupSetting.lc1000F2.id,
    position: { x: startPositionX + nodeGap * 2, y: startPositionY },
    type: "custom",
  },
  //lc1000F2:SG_Switch
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
    parentNode: nodeGroupSetting.lc1000F2.id,
    position: { x: startPositionX + nodeGap * 3, y: startPositionY },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //lc1000F2:光纖終端盒->Switch(1)
    id: edgeSetting["lc1000F2:fiberTerminal-lc1000F2:switch(1)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //lc1000F2:光纖終端盒->Switch(2)
    id: edgeSetting["lc1000F2:fiberTerminal-lc1000F2:switch(2)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //lc1000F2:光纖終端盒->lc1000F3:光纖終端盒
    id: edgeSetting["lc1000F2:fiberTerminal-lc1000F3:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-bottom-2", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.orange, strokeWidth: 3 },
    target: indexConfigLc1000F3.nodeSetting.fiberTerminal.id,
    targetHandle: "target-top-0", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
  {
    //lc1000F2:Switch->Lc
    id: edgeSetting["lc1000F2:switch-lc1000F2:lc"].id,
    source: nodeSetting.switch.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.lc.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //lc1000F2:Switch->SG_Switch
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
    id: edgeSetting["lc1000F2:switch-lc1000F2:sgSwitch"].id,
    source: nodeSetting.switch.id,
    sourceHandle: "source-bottom-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.sgSwitch.id,
    targetHandle: "target-bottom-1", //index是表示node的設定中handles.target:{dir:bottom}是陣列第幾位
    type: "custom",
  },
  {
    //lc1000F2:LC->SG_Switch
    id: edgeSetting["lc1000F2:lc-lc1000F2:sgSwitch"].id,
    source: nodeSetting.lc.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.sgSwitch.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //lc1000F2:SG_Switch->noGroup:ESS F2-01 BSP
    id: edgeSetting["lc1000F2:sgSwitch-noGroup:essF201Bsp"].id,
    source: nodeSetting.sgSwitch.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigNoGroup.nodeSetting.essF201Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
