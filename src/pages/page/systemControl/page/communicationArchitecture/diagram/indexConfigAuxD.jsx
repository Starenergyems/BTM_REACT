import { Flex } from "antd";
import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigAcpC3 from "./indexConfigAcpC3";
import indexConfigAuxE from "./indexConfigAuxE";
import indexConfigLc1000C3 from "./indexConfigLc1000C3";
import indexConfigLc1000D2 from "./indexConfigLc1000D2";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 300;
//起始節點的y座標
const startPositionY = 150;

//設定節點資訊
const nodeSetting = {
  auxmD: { id: `${nodeGroupSetting.auxD.id}:auxmD`, name: "AUXM-D" },
  fiberTerminal: {
    id: `${nodeGroupSetting.auxD.id}:fiberTerminal`,
    name: "光纖終端盒",
  },
  multiCircuitMeters: {
    id: `${nodeGroupSetting.auxD.id}:multiCircuitMeters`,
    name: "多迴路電表1\\00A0\\00A0\\00A0\\00A0\\00A0多迴路電表2",
  },
  rtuGw: { id: `${nodeGroupSetting.auxD.id}:rtuGw`, name: "RTU GW" },
  switch: { id: `${nodeGroupSetting.auxD.id}:switch`, name: "Switch" },
  ups: { id: `${nodeGroupSetting.auxD.id}:ups`, name: "UPS" },
};
//設定線路資訊
const edgeSetting = {
  "auxD:fiberTerminal-auxD:switch(1)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(1)`,
  },
  "auxD:fiberTerminal-auxD:switch(2)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(2)`,
  },
  "auxD:fiberTerminal-auxD:switch(3)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(3)`,
  },
  "auxD:fiberTerminal-auxD:switch(4)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(4)`,
  },
  "auxD:fiberTerminal-lc1000C3:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigLc1000C3.nodeSetting.fiberTerminal.id}`,
  },
  "auxD:fiberTerminal-lc1000D2:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigLc1000D2.nodeSetting.fiberTerminal.id}`,
  },
  "auxD:fiberTerminal-auxE:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigAuxE.nodeSetting.fiberTerminal.id}`,
  },
  "auxD:switch-auxD:multiCircuitMeters": {
    id: `${nodeSetting.switch.id}-to-${nodeSetting.multiCircuitMeters.id}`,
  },
  "auxD:switch-auxD:rtuGw": {
    id: `${nodeSetting.switch.id}-to-${nodeSetting.rtuGw.id}`,
  },
  "auxD:rtuGw-auxD:ups": {
    id: `${nodeSetting.rtuGw.id}-to-${nodeSetting.ups.id}`,
  },
  "auxD:rtuGw-acpC3:trTemp": {
    id: `${nodeSetting.rtuGw.id}-to-${indexConfigAcpC3.nodeSetting.trTemp.id}`,
  },
  "auxD:ups-auxD:auxmD": {
    id: `${nodeSetting.ups.id}-to-${nodeSetting.auxmD.id}`,
  },
  "auxD:auxmD-acpC3:acpmC3-1": {
    id: `${nodeSetting.auxmD.id}-to-${indexConfigAcpC3.nodeSetting["acpmC3-1"].id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：AUX-D
  {
    data: { label: nodeGroupSetting.auxD.name },
    id: nodeGroupSetting.auxD.id,
    position: { x: 670, y: 13900 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap * 7 + 193,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //auxD:光纖終端盒
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
        target: [{ dir: "left", offset: "40%" }, { dir: "top" }], //要位移的話offset設定百分比，較準確
      },
    },
    id: nodeSetting.fiberTerminal.id,
    parentNode: nodeGroupSetting.auxD.id,
    position: {
      x: startPositionX,
      y: startPositionY + nodeGap + 28,
    },
    type: "custom",
  },
  //auxD:Switch
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
    parentNode: nodeGroupSetting.auxD.id,
    position: {
      x: startPositionX + nodeGap,
      y: startPositionY + nodeGap,
    },
    type: "custom",
  },
  //auxD:多迴路電表1 多迴路電表2
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
    parentNode: nodeGroupSetting.auxD.id,
    position: { x: startPositionX + nodeGap * 2, y: startPositionY },
    type: "custom",
  },
  //auxD:RTU GW
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
    parentNode: nodeGroupSetting.auxD.id,
    position: { x: startPositionX + nodeGap * 3, y: startPositionY },
    type: "custom",
  },
  //auxD:UPS
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
    parentNode: nodeGroupSetting.auxD.id,
    position: { x: startPositionX + nodeGap * 4, y: startPositionY + nodeGap },
    type: "custom",
  },
  //auxD:AUXM-D
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.auxmD.name}>
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.auxmD.id,
    parentNode: nodeGroupSetting.auxD.id,
    position: { x: startPositionX + nodeGap * 5, y: startPositionY + nodeGap },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //auxD:光纖終端盒->Switch(1)
    id: edgeSetting["auxD:fiberTerminal-auxD:switch(1)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxD:光纖終端盒->Switch(2)
    id: edgeSetting["auxD:fiberTerminal-auxD:switch(2)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxD:光纖終端盒->Switch(3)
    id: edgeSetting["auxD:fiberTerminal-auxD:switch(3)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-2", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-2", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxD:光纖終端盒->Switch(4)
    id: edgeSetting["auxD:fiberTerminal-auxD:switch(4)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-3", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-3", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxD:光纖終端盒->lc1000C3:光纖終端盒
    id: edgeSetting["auxD:fiberTerminal-lc1000C3:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-bottom-6", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.orange, strokeWidth: 3 },
    target: indexConfigLc1000C3.nodeSetting.fiberTerminal.id,
    targetHandle: "target-top-0", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
  {
    //auxD:光纖終端盒->lc1000D2:光纖終端盒
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
    id: edgeSetting["auxD:fiberTerminal-lc1000D2:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-left-5", //index是表示node的設定中handles.source:{dir:left}是陣列第幾位
    style: { stroke: edgeColor.orange, strokeWidth: 3 },
    target: indexConfigLc1000D2.nodeSetting.fiberTerminal.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxD:光纖終端盒->auxE:光纖終端盒
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
    id: edgeSetting["auxD:fiberTerminal-auxE:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-left-4", //index是表示node的設定中handles.source:{dir:left}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigAuxE.nodeSetting.fiberTerminal.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxD:Switch->多迴路電表1 多迴路電表2
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
    id: edgeSetting["auxD:switch-auxD:multiCircuitMeters"].id,
    source: nodeSetting.switch.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.multiCircuitMeters.id,
    targetHandle: "target-bottom-0", //index是表示node的設定中handles.target:{dir:bottom}是陣列第幾位
    type: "custom",
  },
  {
    //auxD:Switch->多迴路電表1 多迴路電表2
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
    id: edgeSetting["auxD:switch-auxD:rtuGw"].id,
    source: nodeSetting.switch.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.rtuGw.id,
    targetHandle: "target-bottom-0", //index是表示node的設定中handles.target:{dir:bottom}是陣列第幾位
    type: "custom",
  },
  {
    //auxD:RTU GW->UPS
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
    id: edgeSetting["auxD:rtuGw-auxD:ups"].id,
    source: nodeSetting.rtuGw.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting.ups.id,
    targetHandle: "target-top-0", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
  {
    //auxD:RTU GW->acpC3:TR Temp
    id: edgeSetting["auxD:rtuGw-acpC3:trTemp"].id,
    source: nodeSetting.rtuGw.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpC3.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxD:UPS GW->AUXM-D
    id: edgeSetting["auxD:ups-auxD:auxmD"].id,
    source: nodeSetting.ups.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting.auxmD.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxD:AUXM-D->acpC3:ACPM C3-1
    id: edgeSetting["auxD:auxmD-acpC3:acpmC3-1"].id,
    source: nodeSetting.auxmD.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpC3.nodeSetting["acpmC3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
