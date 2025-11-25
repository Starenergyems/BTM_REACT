import { Flex } from "antd";
import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigAcpB3 from "./indexConfigAcpB3";
import indexConfigAuxD from "./indexConfigAuxD";
import indexConfigLc1000B3 from "./indexConfigLc1000B3";
import indexConfigLc1000C2 from "./indexConfigLc1000C2";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 300;
//起始節點的y座標
const startPositionY = 150;

//設定節點資訊
const nodeSetting = {
  auxmC: { id: `${nodeGroupSetting.auxC.id}:auxmC`, name: "AUXM-C" },
  fiberTerminal: {
    id: `${nodeGroupSetting.auxC.id}:fiberTerminal`,
    name: "光纖終端盒",
  },
  multiCircuitMeters: {
    id: `${nodeGroupSetting.auxC.id}:multiCircuitMeters`,
    name: "多迴路電表1\\00A0\\00A0\\00A0\\00A0\\00A0多迴路電表2",
  },
  rtuGw: { id: `${nodeGroupSetting.auxC.id}:rtuGw`, name: "RTU GW" },
  switch: { id: `${nodeGroupSetting.auxC.id}:switch`, name: "Switch" },
  ups: { id: `${nodeGroupSetting.auxC.id}:ups`, name: "UPS" },
};
//設定線路資訊
const edgeSetting = {
  "auxC:fiberTerminal-auxC:switch(1)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(1)`,
  },
  "auxC:fiberTerminal-auxC:switch(2)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(2)`,
  },
  "auxC:fiberTerminal-auxC:switch(3)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(3)`,
  },
  "auxC:fiberTerminal-auxC:switch(4)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(4)`,
  },
  "auxC:fiberTerminal-lc1000B3:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigLc1000B3.nodeSetting.fiberTerminal.id}`,
  },
  "auxC:fiberTerminal-lc1000C2:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigLc1000C2.nodeSetting.fiberTerminal.id}`,
  },
  "auxC:fiberTerminal-auxD:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigAuxD.nodeSetting.fiberTerminal.id}`,
  },

  "auxC:switch-auxC:multiCircuitMeters": {
    id: `${nodeSetting.switch.id}-to-${nodeSetting.multiCircuitMeters.id}`,
  },
  "auxC:switch-auxC:rtuGw": {
    id: `${nodeSetting.switch.id}-to-${nodeSetting.rtuGw.id}`,
  },
  "auxC:rtuGw-auxC:ups": {
    id: `${nodeSetting.rtuGw.id}-to-${nodeSetting.ups.id}`,
  },
  "auxC:rtuGw-acpB3:trTemp": {
    id: `${nodeSetting.rtuGw.id}-to-${indexConfigAcpB3.nodeSetting.trTemp.id}`,
  },
  "auxC:ups-auxC:auxmC": {
    id: `${nodeSetting.ups.id}-to-${nodeSetting.auxmC.id}`,
  },
  "auxC:auxmC-acpB3:acpmB3-1": {
    id: `${nodeSetting.auxmC.id}-to-${indexConfigAcpB3.nodeSetting["acpmB3-1"].id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：AUX-C
  {
    data: { label: nodeGroupSetting.auxC.name },
    id: nodeGroupSetting.auxC.id,
    position: { x: 670, y: 10600 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap * 7 + 193,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //auxC:光纖終端盒
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.fiberTerminal.name}>
          <div className="bg-fiber-optic"></div>
        </NodeLabel>
      ),
      handles: {
        source: [
          { dir: "right", offset: "20%" }, //要位移的話offset設定百分比，較準確
          { dir: "right", offset: "37%" },
          { dir: "right", offset: "54%" },
          { dir: "right", offset: "72%" },
          { dir: "left", offset: "60%" },
          { dir: "left", offset: "80%" },
          { dir: "bottom" },
        ],
        target: [{ dir: "left", offset: "40%" }], //要位移的話offset設定百分比，較準確
      },
    },
    id: nodeSetting.fiberTerminal.id,
    parentNode: nodeGroupSetting.auxC.id,
    position: {
      x: startPositionX,
      y: startPositionY + nodeGap + 28,
    },
    type: "custom",
  },
  //auxC:Switch
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.switch.name}>
          <div className="rect-icon bg-switch"></div>
        </NodeLabel>
      ),
      handles: {
        source: [{ dir: "right" }, { dir: "right" }],
        target: [
          { dir: "left", offset: "35%" }, //要位移的話offset設定百分比，較準確
          { dir: "left", offset: "45%" },
          { dir: "left", offset: "55%" },
          { dir: "left", offset: "65%" },
          { dir: "top" },
        ],
      },
    },
    id: nodeSetting.switch.id,
    parentNode: nodeGroupSetting.auxC.id,
    position: {
      x: startPositionX + nodeGap,
      y: startPositionY + nodeGap,
    },
    type: "custom",
  },
  //auxC:多迴路電表1 多迴路電表2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.multiCircuitMeters.name}
          labelStyle={{ left: "130px", whiteSpace: "nowrap" }}
        >
          <Flex gap={16}>
            <div className="rect-icon bg-aem-drk"></div>
            <div className="rect-icon bg-aem-drk"></div>
          </Flex>
        </NodeLabel>
      ),
      handles: {
        target: [{ dir: "bottom" }],
      },
    },
    id: nodeSetting.multiCircuitMeters.id,
    parentNode: nodeGroupSetting.auxC.id,
    position: { x: startPositionX + nodeGap * 2, y: startPositionY },
    type: "custom",
  },
  //auxC:RTU GW
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.rtuGw.name}>
          <div className="rect-icon bg-tgw-725i"></div>
        </NodeLabel>
      ),
      handles: {
        source: [
          { dir: "right", offset: "40%" },
          { dir: "right", offset: "60%" },
        ],
        target: [{ dir: "bottom" }],
      },
    },
    id: nodeSetting.rtuGw.id,
    parentNode: nodeGroupSetting.auxC.id,
    position: { x: startPositionX + nodeGap * 3, y: startPositionY },
    type: "custom",
  },
  //auxC:UPS
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.ups.name}>
          <div className="rect-icon bg-aem-drk"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "top" }] },
    },
    id: nodeSetting.ups.id,
    parentNode: nodeGroupSetting.auxC.id,
    position: { x: startPositionX + nodeGap * 4, y: startPositionY + nodeGap },
    type: "custom",
  },
  //auxC:AUXM-C
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.auxmC.name}>
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.auxmC.id,
    parentNode: nodeGroupSetting.auxC.id,
    position: { x: startPositionX + nodeGap * 5, y: startPositionY + nodeGap },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //auxC:光纖終端盒->Switch(1)
    id: edgeSetting["auxC:fiberTerminal-auxC:switch(1)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxC:光纖終端盒->Switch(2)
    id: edgeSetting["auxC:fiberTerminal-auxC:switch(2)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxC:光纖終端盒->Switch(3)
    id: edgeSetting["auxC:fiberTerminal-auxC:switch(3)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-2", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-2", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxC:光纖終端盒->Switch(4)
    id: edgeSetting["auxC:fiberTerminal-auxC:switch(4)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-3", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-3", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxC:光纖終端盒->lc1000B3:光纖終端盒
    id: edgeSetting["auxC:fiberTerminal-lc1000B3:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-bottom-6", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.orange, strokeWidth: 3 },
    target: indexConfigLc1000B3.nodeSetting.fiberTerminal.id,
    targetHandle: "target-top-0", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
  {
    //auxC:光纖終端盒->lc1000C2:光纖終端盒
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX - 100},${sourceY}
          L${sourceX - 100},${sourceY + nodeGap * 7 - 191.5}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["auxC:fiberTerminal-lc1000C2:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-left-5", //index是表示node的設定中handles.source:{dir:left}是陣列第幾位
    style: { stroke: edgeColor.orange, strokeWidth: 3 },
    target: indexConfigLc1000C2.nodeSetting.fiberTerminal.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxC:光纖終端盒->auxD:光纖終端盒
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX - 115},${sourceY}
          L${sourceX - 115},${sourceY + nodeGap * 11 - 14.5}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["auxC:fiberTerminal-auxD:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-left-4", //index是表示node的設定中handles.source:{dir:left}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigAuxD.nodeSetting.fiberTerminal.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxC:Switch->多迴路電表1 多迴路電表2
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX + nodeGap - 67},${sourceY}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["auxC:switch-auxC:multiCircuitMeters"].id,
    source: nodeSetting.switch.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.multiCircuitMeters.id,
    targetHandle: "target-bottom-0", //index是表示node的設定中handles.target:{dir:bottom}是陣列第幾位
    type: "custom",
  },
  {
    //auxC:Switch->多迴路電表1 多迴路電表2
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX + nodeGap * 2 - 67},${sourceY}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["auxC:switch-auxC:rtuGw"].id,
    source: nodeSetting.switch.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.rtuGw.id,
    targetHandle: "target-bottom-0", //index是表示node的設定中handles.target:{dir:bottom}是陣列第幾位
    type: "custom",
  },
  {
    //auxC:RTU GW->UPS
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX + nodeGap - 67},${sourceY}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["auxC:rtuGw-auxC:ups"].id,
    source: nodeSetting.rtuGw.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting.ups.id,
    targetHandle: "target-top-0", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
  {
    //auxC:RTU GW->acpB3:TR Temp
    id: edgeSetting["auxC:rtuGw-acpB3:trTemp"].id,
    source: nodeSetting.rtuGw.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpB3.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxC:UPS GW->AUXM-C
    id: edgeSetting["auxC:ups-auxC:auxmC"].id,
    source: nodeSetting.ups.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting.auxmC.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxC:AUXM-C->acpB3:ACPM B3-1
    id: edgeSetting["auxC:auxmC-acpB3:acpmB3-1"].id,
    source: nodeSetting.auxmC.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpB3.nodeSetting["acpmB3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
