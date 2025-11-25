import { Flex } from "antd";
import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigAcpH3 from "./indexConfigAcpH3";
import indexConfigLc1000H3 from "./indexConfigLc1000H3";
import indexConfigLc1000I3 from "./indexConfigLc1000I3";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 300;
//起始節點的y座標
const startPositionY = 150;

//設定節點資訊
const nodeSetting = {
  auxmI: { id: `${nodeGroupSetting.auxI.id}:auxmI`, name: "AUXM-I" },
  fiberTerminal: {
    id: `${nodeGroupSetting.auxI.id}:fiberTerminal`,
    name: "光纖終端盒",
  },
  multiCircuitMeters: {
    id: `${nodeGroupSetting.auxI.id}:multiCircuitMeters`,
    name: "多迴路電表1\\00A0\\00A0\\00A0\\00A0\\00A0多迴路電表2\\00A0\\00A0\\00A0\\00A0\\00A0多迴路電表3",
  },
  rtuGw: { id: `${nodeGroupSetting.auxI.id}:rtuGw`, name: "RTU GW" },
  switch: { id: `${nodeGroupSetting.auxI.id}:switch`, name: "Switch" },
  ups: { id: `${nodeGroupSetting.auxI.id}:ups`, name: "UPS" },
};
//設定線路資訊
const edgeSetting = {
  "auxI:fiberTerminal-auxI:switch(1)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(1)`,
  },
  "auxI:fiberTerminal-auxI:switch(2)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(2)`,
  },
  "auxI:fiberTerminal-auxI:switch(3)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(3)`,
  },
  "auxI:fiberTerminal-auxI:switch(4)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(4)`,
  },
  "auxI:fiberTerminal-lc1000H3:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigLc1000H3.nodeSetting.fiberTerminal.id}`,
  },
  "auxI:fiberTerminal-lc1000I3:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigLc1000I3.nodeSetting.fiberTerminal.id}`,
  },
  "auxI:switch-auxI:multiCircuitMeters": {
    id: `${nodeSetting.switch.id}-to-${nodeSetting.multiCircuitMeters.id}`,
  },
  "auxI:switch-auxI:rtuGw": {
    id: `${nodeSetting.switch.id}-to-${nodeSetting.rtuGw.id}`,
  },
  "auxI:rtuGw-auxI:ups": {
    id: `${nodeSetting.rtuGw.id}-to-${nodeSetting.ups.id}`,
  },
  "auxI:rtuGw-acpH3:trTemp": {
    id: `${nodeSetting.rtuGw.id}-to-${indexConfigAcpH3.nodeSetting.trTemp.id}`,
  },
  "auxI:ups-auxI:auxmI": {
    id: `${nodeSetting.ups.id}-to-${nodeSetting.auxmI.id}`,
  },
  "auxI:auxmI-acpH3:acpmH3-1": {
    id: `${nodeSetting.auxmI.id}-to-${indexConfigAcpH3.nodeSetting["acpmH3-1"].id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：AUX-G
  {
    data: { label: nodeGroupSetting.auxI.name },
    id: nodeGroupSetting.auxI.id,
    position: { x: 670, y: 28100 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap * 7 + 193,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //auxI:光纖終端盒
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
        target: [
          { dir: "left", offset: "40%" },
          { dir: "left", offset: "60%" },
          { dir: "top" },
        ], //要位移的話offset設定百分比，較準確
      },
    },
    id: nodeSetting.fiberTerminal.id,
    parentNode: nodeGroupSetting.auxI.id,
    position: {
      x: startPositionX,
      y: startPositionY + nodeGap + 28,
    },
    type: "custom",
  },
  //auxI:Switch
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
    parentNode: nodeGroupSetting.auxI.id,
    position: {
      x: startPositionX + nodeGap,
      y: startPositionY + nodeGap,
    },
    type: "custom",
  },
  //auxI:多迴路電表1 多迴路電表2 多迴路電表3
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
            <div className="rect-icon bg-aem-drk"></div>
          </Flex>
        </NodeLabel>
      ),
      handles: {
        target: [{ dir: "bottom" }],
      },
    },
    id: nodeSetting.multiCircuitMeters.id,
    parentNode: nodeGroupSetting.auxI.id,
    position: { x: startPositionX + nodeGap * 2, y: startPositionY },
    type: "custom",
  },
  //auxI:RTU GW
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
    parentNode: nodeGroupSetting.auxI.id,
    position: { x: startPositionX + nodeGap * 3, y: startPositionY },
    type: "custom",
  },
  //auxI:UPS
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
    parentNode: nodeGroupSetting.auxI.id,
    position: { x: startPositionX + nodeGap * 4, y: startPositionY + nodeGap },
    type: "custom",
  },
  //auxI:AUXM-I
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.auxmI.name}>
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.auxmI.id,
    parentNode: nodeGroupSetting.auxI.id,
    position: { x: startPositionX + nodeGap * 5, y: startPositionY + nodeGap },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //auxI:光纖終端盒->Switch(1)
    id: edgeSetting["auxI:fiberTerminal-auxI:switch(1)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxI:光纖終端盒->Switch(2)
    id: edgeSetting["auxI:fiberTerminal-auxI:switch(2)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxI:光纖終端盒->Switch(3)
    id: edgeSetting["auxI:fiberTerminal-auxI:switch(3)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-2", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-2", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxI:光纖終端盒->Switch(4)
    id: edgeSetting["auxI:fiberTerminal-auxI:switch(4)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-3", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-3", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxI:光纖終端盒->lc1000H3:光纖終端盒
    id: edgeSetting["auxI:fiberTerminal-lc1000H3:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-bottom-6", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.orange, strokeWidth: 3 },
    target: indexConfigLc1000H3.nodeSetting.fiberTerminal.id,
    targetHandle: "target-top-0", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
  {
    //auxI:光纖終端盒->lc1000I3:光纖終端盒
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX - 100},${sourceY}
          L${sourceX - 100},${sourceY + nodeGap * 8 + 8.5}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["auxI:fiberTerminal-lc1000I3:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-left-5", //index是表示node的設定中handles.source:{dir:left}是陣列第幾位
    style: { stroke: edgeColor.orange, strokeWidth: 3 },
    target: indexConfigLc1000I3.nodeSetting.fiberTerminal.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxI:Switch->多迴路電表1 多迴路電表2 多迴路電表3
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
    id: edgeSetting["auxI:switch-auxI:multiCircuitMeters"].id,
    source: nodeSetting.switch.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.multiCircuitMeters.id,
    targetHandle: "target-bottom-0", //index是表示node的設定中handles.target:{dir:bottom}是陣列第幾位
    type: "custom",
  },
  {
    //auxI:Switch->多迴路電表1 多迴路電表2 多迴路電表3
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
    id: edgeSetting["auxI:switch-auxI:rtuGw"].id,
    source: nodeSetting.switch.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.rtuGw.id,
    targetHandle: "target-bottom-0", //index是表示node的設定中handles.target:{dir:bottom}是陣列第幾位
    type: "custom",
  },
  {
    //auxI:RTU GW->UPS
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
    id: edgeSetting["auxI:rtuGw-auxI:ups"].id,
    source: nodeSetting.rtuGw.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting.ups.id,
    targetHandle: "target-top-0", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
  {
    //auxI:RTU GW->acpH3:TR Temp
    id: edgeSetting["auxI:rtuGw-acpH3:trTemp"].id,
    source: nodeSetting.rtuGw.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpH3.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxI:UPS GW->AUXM-I
    id: edgeSetting["auxI:ups-auxI:auxmI"].id,
    source: nodeSetting.ups.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting.auxmI.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxB:AUXM-I->acpH3:ACPM H3-1
    id: edgeSetting["auxI:auxmI-acpH3:acpmH3-1"].id,
    source: nodeSetting.auxmI.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpH3.nodeSetting["acpmH3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
