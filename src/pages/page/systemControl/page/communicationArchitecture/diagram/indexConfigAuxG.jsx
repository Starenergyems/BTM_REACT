import { Flex } from "antd";
import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigAcpG2 from "./indexConfigAcpG2";
import indexConfigAuxI from "./indexConfigAuxI";
import indexConfigLc1000G2 from "./indexConfigLc1000G2";
import indexConfigLc1000H2 from "./indexConfigLc1000H2";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 300;
//起始節點的y座標
const startPositionY = 150;

//設定節點資訊
const nodeSetting = {
  auxmG: { id: `${nodeGroupSetting.auxG.id}:auxmG`, name: "AUXM-G" },
  fiberTerminal: {
    id: `${nodeGroupSetting.auxG.id}:fiberTerminal`,
    name: "光纖終端盒",
  },
  multiCircuitMeters: {
    id: `${nodeGroupSetting.auxG.id}:multiCircuitMeters`,
    name: "多迴路電表1\\00A0\\00A0\\00A0\\00A0\\00A0多迴路電表2\\00A0\\00A0\\00A0\\00A0\\00A0多迴路電表3",
  },
  rtuGw: { id: `${nodeGroupSetting.auxG.id}:rtuGw`, name: "RTU GW" },
  switch: { id: `${nodeGroupSetting.auxG.id}:switch`, name: "Switch" },
  ups: { id: `${nodeGroupSetting.auxG.id}:ups`, name: "UPS" },
};
//設定線路資訊
const edgeSetting = {
  "auxG:fiberTerminal-auxG:switch(1)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(1)`,
  },
  "auxG:fiberTerminal-auxG:switch(2)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(2)`,
  },
  "auxG:fiberTerminal-auxG:switch(3)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(3)`,
  },
  "auxG:fiberTerminal-auxG:switch(4)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch.id}(4)`,
  },
  "auxG:fiberTerminal-lc1000G2:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigLc1000G2.nodeSetting.fiberTerminal.id}`,
  },
  "auxG:fiberTerminal-auxI:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigAuxI.nodeSetting.fiberTerminal.id}`,
  },
  "auxG:fiberTerminal-lc1000H2:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigLc1000H2.nodeSetting.fiberTerminal.id}`,
  },
  "auxG:switch-auxG:multiCircuitMeters": {
    id: `${nodeSetting.switch.id}-to-${nodeSetting.multiCircuitMeters.id}`,
  },
  "auxG:switch-auxG:rtuGw": {
    id: `${nodeSetting.switch.id}-to-${nodeSetting.rtuGw.id}`,
  },
  "auxG:rtuGw-auxG:ups": {
    id: `${nodeSetting.rtuGw.id}-to-${nodeSetting.ups.id}`,
  },
  "auxG:rtuGw-acpG2:trTemp": {
    id: `${nodeSetting.rtuGw.id}-to-${indexConfigAcpG2.nodeSetting.trTemp.id}`,
  },
  "auxG:ups-auxG:auxmG": {
    id: `${nodeSetting.ups.id}-to-${nodeSetting.auxmG.id}`,
  },
  "auxG:auxmG-acpG2:acpmG2-1": {
    id: `${nodeSetting.auxmG.id}-to-${indexConfigAcpG2.nodeSetting["acpmG2-1"].id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：AUX-G
  {
    data: { label: nodeGroupSetting.auxG.name },
    id: nodeGroupSetting.auxG.id,
    position: { x: 670, y: 24300 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap * 7 + 193,
      height: nodeGap * 3 + 200,
    },
    type: "group",
  },
  //auxG:光纖終端盒
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
          { dir: "left", offset: "40%" }, //要位移的話offset設定百分比，較準確
        ],
      },
    },
    id: nodeSetting.fiberTerminal.id,
    parentNode: nodeGroupSetting.auxG.id,
    position: {
      x: startPositionX,
      y: startPositionY + nodeGap + 28,
    },
    type: "custom",
  },
  //auxG:Switch
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
          { dir: "top", offset: "30%" },
          { dir: "top" },
        ],
      },
    },
    id: nodeSetting.switch.id,
    parentNode: nodeGroupSetting.auxG.id,
    position: {
      x: startPositionX + nodeGap,
      y: startPositionY + nodeGap,
    },
    type: "custom",
  },
  //auxG:多迴路電表1 多迴路電表2 多迴路電表3
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
    parentNode: nodeGroupSetting.auxG.id,
    position: { x: startPositionX + nodeGap * 2, y: startPositionY },
    type: "custom",
  },
  //auxG:RTU GW
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
    parentNode: nodeGroupSetting.auxG.id,
    position: { x: startPositionX + nodeGap * 3, y: startPositionY },
    type: "custom",
  },
  //auxG:UPS
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
    parentNode: nodeGroupSetting.auxG.id,
    position: { x: startPositionX + nodeGap * 4, y: startPositionY + nodeGap },
    type: "custom",
  },
  //auxG:AUXM-G
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.auxmG.name}>
          <div className="rect-icon bg-auxm"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.auxmG.id,
    parentNode: nodeGroupSetting.auxG.id,
    position: { x: startPositionX + nodeGap * 5, y: startPositionY + nodeGap },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //auxG:光纖終端盒->Switch(1)
    id: edgeSetting["auxG:fiberTerminal-auxG:switch(1)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxG:光纖終端盒->Switch(2)
    id: edgeSetting["auxG:fiberTerminal-auxG:switch(2)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxG:光纖終端盒->Switch(3)
    id: edgeSetting["auxG:fiberTerminal-auxG:switch(3)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-2", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-2", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxG:光纖終端盒->Switch(4)
    id: edgeSetting["auxG:fiberTerminal-auxG:switch(4)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-3", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch.id,
    targetHandle: "target-left-3", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxG:光纖終端盒->lc1000G2:光纖終端盒
    id: edgeSetting["auxG:fiberTerminal-lc1000G2:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-bottom-6", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.orange, strokeWidth: 3 },
    target: indexConfigLc1000G2.nodeSetting.fiberTerminal.id,
    targetHandle: "target-top-0", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
  {
    //auxG:光纖終端盒->auxI:光纖終端盒
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX - 115},${sourceY}
          L${sourceX - 115},${sourceY + nodeGap * 12 + 185.5}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["auxG:fiberTerminal-auxI:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-left-4", //index是表示node的設定中handles.source:{dir:left}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigAuxI.nodeSetting.fiberTerminal.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxF:光纖終端盒->lc1000G1:光纖終端盒
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
                M${sourceX},${sourceY}
                L${sourceX - 100},${sourceY}
                L${sourceX - 100},${sourceY + nodeGap * 8 + 8}
                L${targetX},${targetY}
              `;
      },
    },
    id: edgeSetting["auxG:fiberTerminal-lc1000H2:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-left-5", //index是表示node的設定中handles.source:{dir:left}是陣列第幾位
    style: { stroke: edgeColor.orange, strokeWidth: 3 },
    target: indexConfigLc1000H2.nodeSetting.fiberTerminal.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxG:Switch->多迴路電表1 多迴路電表2 多迴路電表3
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
    id: edgeSetting["auxG:switch-auxG:multiCircuitMeters"].id,
    source: nodeSetting.switch.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.multiCircuitMeters.id,
    targetHandle: "target-bottom-0", //index是表示node的設定中handles.target:{dir:bottom}是陣列第幾位
    type: "custom",
  },
  {
    //auxG:Switch->多迴路電表1 多迴路電表2 多迴路電表3
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
    id: edgeSetting["auxG:switch-auxG:rtuGw"].id,
    source: nodeSetting.switch.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.rtuGw.id,
    targetHandle: "target-bottom-0", //index是表示node的設定中handles.target:{dir:bottom}是陣列第幾位
    type: "custom",
  },
  {
    //auxG:RTU GW->UPS
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
    id: edgeSetting["auxG:rtuGw-auxG:ups"].id,
    source: nodeSetting.rtuGw.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting.ups.id,
    targetHandle: "target-top-0", //index是表示node的設定中handles.target:{dir:top}是陣列第幾位
    type: "custom",
  },
  {
    //auxG:RTU GW->acpG2:TR Temp
    id: edgeSetting["auxG:rtuGw-acpG2:trTemp"].id,
    source: nodeSetting.rtuGw.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpG2.nodeSetting.trTemp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxG:UPS GW->AUXM-G
    id: edgeSetting["auxG:ups-auxG:auxmG"].id,
    source: nodeSetting.ups.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting.auxmG.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //auxB:AUXM-G->acpG2:ACPM G2-1
    id: edgeSetting["auxG:auxmG-acpG2:acpmG2-1"].id,
    source: nodeSetting.auxmG.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: indexConfigAcpG2.nodeSetting["acpmG2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
