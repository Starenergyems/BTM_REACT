import {
  edgeColor,
  nodeGap,
  nodeGroupSetting,
  nodeGroupStyle,
} from "./indexConfigCommon";
import indexConfigAuxA from "./indexConfigAuxA";
import indexConfigAuxE from "./indexConfigAuxE";
import indexConfigAuxF from "./indexConfigAuxF";
import indexConfigAuxI from "./indexConfigAuxI";
import indexConfigGis from "./indexConfigGis";
import indexConfigMvcb1 from "./indexConfigMvcb1";
import indexConfigMvcb2 from "./indexConfigMvcb2";
import NodeLabel from "./nodeLabel";

//起始節點的X座標
const startPositionX = 150;
//起始節點的y座標
const startPositionY = 150;

//設定節點資訊
const nodeSetting = {
  cms: { id: `${nodeGroupSetting.ctrlRoom.id}:cms`, name: "CMS" },
  cht: { id: `${nodeGroupSetting.ctrlRoom.id}:cht`, name: "CHT" },
  dc1: { id: `${nodeGroupSetting.ctrlRoom.id}:dc1`, name: "DC" },
  dc2: { id: `${nodeGroupSetting.ctrlRoom.id}:dc2`, name: "DC" },
  ems1: { id: `${nodeGroupSetting.ctrlRoom.id}:ems1`, name: "EMS" },
  ems2: { id: `${nodeGroupSetting.ctrlRoom.id}:ems2`, name: "EMS" },
  fiberTerminal: {
    id: `${nodeGroupSetting.ctrlRoom.id}:fiberTerminal`,
    name: "光纖終端盒",
  },
  fortiNet: {
    id: `${nodeGroupSetting.ctrlRoom.id}:fortiNet`,
    name: "FortiNet",
  },
  gc1: { id: `${nodeGroupSetting.ctrlRoom.id}:gc1`, name: "GC1" },
  gc2: { id: `${nodeGroupSetting.ctrlRoom.id}:gc2`, name: "GC2" },
  gc3: { id: `${nodeGroupSetting.ctrlRoom.id}:gc3`, name: "GC3" },
  gc4: { id: `${nodeGroupSetting.ctrlRoom.id}:gc4`, name: "GC4" },
  gc5: { id: `${nodeGroupSetting.ctrlRoom.id}:gc5`, name: "GC5" },
  gc6: { id: `${nodeGroupSetting.ctrlRoom.id}:gc6`, name: "GC6" },
  hmi: { id: `${nodeGroupSetting.ctrlRoom.id}:hmi`, name: "HMI" },
  hvac1: { id: `${nodeGroupSetting.ctrlRoom.id}:hvac1`, name: "hvac1" },
  hvac2: { id: `${nodeGroupSetting.ctrlRoom.id}:hvac2`, name: "hvac2" },
  mgc1: { id: `${nodeGroupSetting.ctrlRoom.id}:mgc1`, name: "MGC" },
  mgc2: { id: `${nodeGroupSetting.ctrlRoom.id}:mgc2`, name: "MGC" },
  mte: { id: `${nodeGroupSetting.ctrlRoom.id}:mte`, name: "新捷能" },
  switch1: {
    id: `${nodeGroupSetting.ctrlRoom.id}:switch1`,
    name: "Switch",
  },
  switch2: {
    id: `${nodeGroupSetting.ctrlRoom.id}:switch2`,
    name: "Switch",
  },
  tgw725i: {
    id: `${nodeGroupSetting.ctrlRoom.id}:tgw725i`,
    name: "tGW-725i",
  },
  upsCms: { id: `${nodeGroupSetting.ctrlRoom.id}:upsCms`, name: "UPS-CMS" },
  upsEms: { id: `${nodeGroupSetting.ctrlRoom.id}:upsEms`, name: "UPS-EMS" },
};
//設定線路資訊
const edgeSetting = {
  "ctrlRoom:mte-ctrlRoom:fortiNet": {
    id: `${nodeSetting.mte.id}-to-${nodeSetting.fortiNet.id}`,
  },
  "ctrlRoom:mte-ctrlRoom:switch2": {
    id: `${nodeSetting.mte.id}-to-${nodeSetting.switch2.id}`,
  },
  "ctrlRoom:fortiNet-ctrlRoom:cht": {
    id: `${nodeSetting.fortiNet.id}-to-${nodeSetting.cht.id}`,
  },
  "ctrlRoom:fortiNet-ctrlRoom:switch1": {
    id: `${nodeSetting.fortiNet.id}-to-${nodeSetting.switch1.id}`,
  },
  "ctrlRoom:fortiNet-ctrlRoom:switch2": {
    id: `${nodeSetting.fortiNet.id}-to-${nodeSetting.switch2.id}`,
  },
  "ctrlRoom:switch1-ctrlRoom:ems1": {
    id: `${nodeSetting.switch1.id}-to-${nodeSetting.ems1.id}`,
  },
  "ctrlRoom:ems1-ctrlRoom:ems2": {
    id: `${nodeSetting.switch1.id}-to-${nodeSetting.ems2.id}`,
  },
  "ctrlRoom:ems2-ctrlRoom:dc1": {
    id: `${nodeSetting.ems2.id}-to-${nodeSetting.dc1.id}`,
  },
  "ctrlRoom:dc1-ctrlRoom:dc2": {
    id: `${nodeSetting.dc1.id}-to-${nodeSetting.dc2.id}`,
  },
  "ctrlRoom:dc2-ctrlRoom:cms": {
    id: `${nodeSetting.dc2.id}-to-${nodeSetting.cms.id}`,
  },
  "ctrlRoom:cms-ctrlRoom:hmi": {
    id: `${nodeSetting.cms.id}-to-${nodeSetting.hmi.id}`,
  },
  "ctrlRoom:switch2-ctrlRoom:mgc1": {
    id: `${nodeSetting.switch2.id}-to-${nodeSetting.mgc1.id}`,
  },
  "ctrlRoom:switch2-gis:ion900": {
    id: `${nodeSetting.switch2.id}-to-${indexConfigGis.nodeSetting.ion900.id}`,
  },
  "ctrlRoom:switch2-gis:powerScada": {
    id: `${nodeSetting.switch2.id}-to-${indexConfigGis.nodeSetting.powerScada.id}`,
  },
  "ctrlRoom:switch2-mvcb1:switch": {
    id: `${nodeSetting.switch2.id}-to-${indexConfigMvcb1.nodeSetting.switch.id}`,
  },
  "ctrlRoom:switch2-mvcb2:switch": {
    id: `${nodeSetting.switch2.id}-to-${indexConfigMvcb2.nodeSetting.switch.id}`,
  },
  "ctrlRoom:mgc1-ctrlRoom:mgc2": {
    id: `${nodeSetting.mgc1.id}-to-${nodeSetting.mgc2.id}`,
  },
  "ctrlRoom:mgc2-ctrlRoom:gc1": {
    id: `${nodeSetting.mgc2.id}-to-${nodeSetting.gc1.id}`,
  },
  "ctrlRoom:gc1-ctrlRoom:gc2": {
    id: `${nodeSetting.gc1.id}-to-${nodeSetting.gc2.id}`,
  },
  "ctrlRoom:gc2-ctrlRoom:gc3": {
    id: `${nodeSetting.gc2.id}-to-${nodeSetting.gc3.id}`,
  },
  "ctrlRoom:gc3-ctrlRoom:gc4": {
    id: `${nodeSetting.gc3.id}-to-${nodeSetting.gc4.id}`,
  },
  "ctrlRoom:gc4-ctrlRoom:gc5": {
    id: `${nodeSetting.gc4.id}-to-${nodeSetting.gc5.id}`,
  },
  "ctrlRoom:gc5-ctrlRoom:gc6": {
    id: `${nodeSetting.gc5.id}-to-${nodeSetting.gc6.id}`,
  },
  "ctrlRoom:gc6-ctrlRoom:tgw725i": {
    id: `${nodeSetting.gc6.id}-to-${nodeSetting.tgw725i.id}`,
  },
  "ctrlRoom:tgw725i-ctrlRoom:hvac1": {
    id: `${nodeSetting.tgw725i.id}-to-${nodeSetting.hvac1.id}`,
  },
  "ctrlRoom:tgw725i-ctrlRoom:upsEms": {
    id: `${nodeSetting.tgw725i.id}-to-${nodeSetting.upsEms.id}`,
  },
  "ctrlRoom:hvac1-ctrlRoom:hvac2": {
    id: `${nodeSetting.hvac1.id}-to-${nodeSetting.hvac2.id}`,
  },
  "ctrlRoom:upsEms-ctrlRoom:upsCms": {
    id: `${nodeSetting.upsEms.id}-to-${nodeSetting.upsCms.id}`,
  },
  "ctrlRoom:fiberTerminal-ctrlRoom:switch2(1)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch2.id}(1)`,
  },
  "ctrlRoom:fiberTerminal-ctrlRoom:switch2(2)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch2.id}(2)`,
  },
  "ctrlRoom:fiberTerminal-ctrlRoom:switch2(3)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch2.id}(3)`,
  },
  "ctrlRoom:fiberTerminal-ctrlRoom:switch2(4)": {
    id: `${nodeSetting.fiberTerminal.id}-to-${nodeSetting.switch2.id}(4)`,
  },
  "ctrlRoom:fiberTerminal-auxA:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigAuxA.nodeSetting.fiberTerminal.id}`,
  },
  "ctrlRoom:fiberTerminal-auxE:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigAuxE.nodeSetting.fiberTerminal.id}`,
  },
  "ctrlRoom:fiberTerminal-auxF:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigAuxF.nodeSetting.fiberTerminal.id}`,
  },
  "ctrlRoom:fiberTerminal-auxI:fiberTerminal": {
    id: `${nodeSetting.fiberTerminal.id}-to-${indexConfigAuxI.nodeSetting.fiberTerminal.id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //group：Ctrl-room
  {
    data: { label: nodeGroupSetting.ctrlRoom.name },
    id: nodeGroupSetting.ctrlRoom.id,
    position: { x: 0, y: 160 },
    style: {
      ...nodeGroupStyle,
      width: nodeGap * 13 + 120,
      height: nodeGap * 4 + 200,
    },
    type: "group",
  },
  //ctrlRoom:新捷能
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.mte.name}>
          <div className="rect-icon bg-mte"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }, { dir: "bottom" }] },
    },
    id: nodeSetting.mte.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: { x: startPositionX, y: startPositionY },
    type: "custom",
  },
  //ctrlRoom:FortiNet
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.fortiNet.name}>
          <div className="rect-icon bg-forti-net"></div>
        </NodeLabel>
      ),
      handles: {
        source: [{ dir: "top" }, { dir: "right" }, { dir: "bottom" }],
        target: [{ dir: "left" }],
      },
    },
    id: nodeSetting.fortiNet.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 1,
      y: startPositionY,
    },
    type: "custom",
  },
  //ctrlRoom:CHT
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.cht.name}>
          <div className="bg-cht"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "bottom" }] },
    },
    id: nodeSetting.cht.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 1,
      y: -100,
    },
    type: "custom",
  },
  //ctrlRoom:Switch1
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.switch1.name}>
          <div className="rect-icon bg-switch"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.switch1.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: { x: startPositionX + nodeGap * 2, y: startPositionY },
    type: "custom",
  },
  //ctrlRoom:EMS1
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.ems1.name}>
          <div className="rect-icon bg-ems"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.ems1.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: { x: startPositionX + nodeGap * 3, y: startPositionY },
    type: "custom",
  },
  //ctrlRoom:EMS2
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.ems2.name}>
          <div className="rect-icon bg-ems"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.ems2.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: { x: startPositionX + nodeGap * 4, y: startPositionY },
    type: "custom",
  },
  //ctrlRoom:DC1
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.dc1.name}>
          <div className="rect-icon bg-dc"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.dc1.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: { x: startPositionX + nodeGap * 5, y: startPositionY },
    type: "custom",
  },
  //ctrlRoom:DC2
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.dc2.name}>
          <div className="rect-icon bg-dc"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.dc2.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: { x: startPositionX + nodeGap * 6, y: startPositionY },
    type: "custom",
  },
  //ctrlRoom:CMS
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.cms.name}>
          <div className="rect-icon bg-cms"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.cms.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: { x: startPositionX + nodeGap * 7, y: startPositionY },
    type: "custom",
  },
  //ctrlRoom:HMI
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.hmi.name}>
          <div className="rect-icon bg-hmi"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting.hmi.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: { x: startPositionX + nodeGap * 8, y: startPositionY },
    type: "custom",
  },
  //ctrlRoom:Switch2
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.switch2.name}>
          <div className="rect-icon bg-switch"></div>
        </NodeLabel>
      ),
      handles: {
        source: [
          { dir: "right" }, //要位移的話offset設定百分比，較準確
          { dir: "left" },
          { dir: "left" },
          { dir: "left" },
          { dir: "left" },
          { dir: "bottom", offset: "40%" },
          { dir: "bottom", offset: "60%" },
          { dir: "bottom", offset: "60%" },
          { dir: "bottom", offset: "60%" },
        ],
        target: [
          { dir: "left", offset: "20%" }, //要位移的話offset設定百分比，較準確
          { dir: "left", offset: "50%" },
          { dir: "left", offset: "60%" },
          { dir: "left", offset: "70%" },
          { dir: "left", offset: "80%" },
          { dir: "top" },
        ],
      },
    },
    id: nodeSetting.switch2.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 1,
      y: startPositionY + nodeGap * 1,
    },
    type: "custom",
  },
  //ctrlRoom:MGC1
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.mgc1.name}>
          <div className="rect-icon bg-mgc"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.mgc1.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 2,
      y: startPositionY + nodeGap * 1,
    },
    type: "custom",
  },
  //ctrlRoom:MGC2
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.mgc2.name}>
          <div className="rect-icon bg-mgc"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.mgc2.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 3,
      y: startPositionY + nodeGap * 1,
    },
    type: "custom",
  },
  //ctrlRoom:GC1
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.gc1.name}>
          <div className="rect-icon bg-gc"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.gc1.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 4,
      y: startPositionY + nodeGap * 1,
    },
    type: "custom",
  },
  //ctrlRoom:GC2
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.gc2.name}>
          <div className="rect-icon bg-gc"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.gc2.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 5,
      y: startPositionY + nodeGap * 1,
    },
    type: "custom",
  },
  //ctrlRoom:GC3
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.gc3.name}>
          <div className="rect-icon bg-gc"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.gc3.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 6,
      y: startPositionY + nodeGap * 1,
    },
    type: "custom",
  },
  //ctrlRoom:GC4
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.gc4.name}>
          <div className="rect-icon bg-gc"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.gc4.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 7,
      y: startPositionY + nodeGap * 1,
    },
    type: "custom",
  },
  //ctrlRoom:GC5
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.gc5.name}>
          <div className="rect-icon bg-gc"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.gc5.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 8,
      y: startPositionY + nodeGap * 1,
    },
    type: "custom",
  },
  //ctrlRoom:GC6
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.gc6.name}>
          <div className="rect-icon bg-gc"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.gc6.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 9,
      y: startPositionY + nodeGap * 1,
    },
    type: "custom",
  },
  //ctrlRoom:tGW-725i
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.tgw725i.name}>
          <div className="rect-icon bg-tgw-725i"></div>
        </NodeLabel>
      ),
      handles: {
        source: [
          { dir: "bottom", offset: "40%" },
          { dir: "bottom", offset: "60%" },
        ], //要位移的話offset設定百分比，較準確
        target: [{ dir: "left" }],
      },
    },
    id: nodeSetting.tgw725i.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 10,
      y: startPositionY + nodeGap * 1,
    },
    type: "custom",
  },
  //ctrlRoom:HVAC1
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.hvac1.name}>
          <div className="rect-icon bg-havc"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.hvac1.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 11,
      y: startPositionY + nodeGap * 2,
    },
    type: "custom",
  },
  //ctrlRoom:HVAC2
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.hvac2.name}>
          <div className="rect-icon bg-havc"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.hvac2.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 12,
      y: startPositionY + nodeGap * 2,
    },
    type: "custom",
  },
  //ctrlRoom:UPS-EMS
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.upsEms.name}>
          <div className="rect-icon bg-ups"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.upsEms.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 11,
      y: startPositionY + nodeGap * 3,
    },
    type: "custom",
  },
  //ctrlRoom:UPS-CMS
  {
    data: {
      label: (
        <NodeLabel label={nodeSetting.upsCms.name}>
          <div className="rect-icon bg-ups"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.upsCms.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX + nodeGap * 12,
      y: startPositionY + nodeGap * 3,
    },
    type: "custom",
  },
  //ctrlRoom:光纖終端盒
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
          { dir: "bottom", offset: "20%" },
          { dir: "bottom", offset: "30%" },
          { dir: "bottom", offset: "70%" },
          { dir: "bottom", offset: "80%" },
        ],
        target: [{ dir: "top" }],
      },
    },
    id: nodeSetting.fiberTerminal.id,
    parentNode: nodeGroupSetting.ctrlRoom.id,
    position: {
      x: startPositionX,
      y: startPositionY + nodeGap + 48,
    },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //ctrlRoom:新捷能->FortiNet
    id: edgeSetting["ctrlRoom:mte-ctrlRoom:fortiNet"].id,
    source: nodeSetting.mte.id,
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.fortiNet.id,
    type: "custom",
  },
  {
    //ctrlRoom:新捷能->Switch2
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap - 104}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["ctrlRoom:mte-ctrlRoom:switch2"].id,
    source: nodeSetting.mte.id,
    sourceHandle: "source-bottom-1", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.switch2.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:FortiNet->CHT
    id: edgeSetting["ctrlRoom:fortiNet-ctrlRoom:cht"].id,
    source: nodeSetting.fortiNet.id,
    sourceHandle: "source-top-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.cht.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:FortiNet->Switch1
    id: edgeSetting["ctrlRoom:fortiNet-ctrlRoom:switch1"].id,
    source: nodeSetting.fortiNet.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.switch1.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:FortiNet->Switch2
    id: edgeSetting["ctrlRoom:fortiNet-ctrlRoom:switch2"].id,
    source: nodeSetting.fortiNet.id,
    sourceHandle: "source-bottom-2", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.switch2.id,
    targetHandle: "target-top-5", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:Switch1->EMS1
    id: edgeSetting["ctrlRoom:switch1-ctrlRoom:ems1"].id,
    source: nodeSetting.switch1.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.ems1.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:EMS1->EMS2
    id: edgeSetting["ctrlRoom:ems1-ctrlRoom:ems2"].id,
    source: nodeSetting.ems1.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.ems2.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:EMS2->DC1
    id: edgeSetting["ctrlRoom:ems2-ctrlRoom:dc1"].id,
    source: nodeSetting.ems2.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.dc1.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:DC1->DC2
    id: edgeSetting["ctrlRoom:dc1-ctrlRoom:dc2"].id,
    source: nodeSetting.dc1.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.dc2.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:DC2->CMS
    id: edgeSetting["ctrlRoom:dc2-ctrlRoom:cms"].id,
    source: nodeSetting.dc2.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.cms.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:CMS->HMI
    id: edgeSetting["ctrlRoom:cms-ctrlRoom:hmi"].id,
    source: nodeSetting.cms.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.hmi.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:Switch2->MGC1
    id: edgeSetting["ctrlRoom:switch2-ctrlRoom:mgc1"].id,
    source: nodeSetting.switch2.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.mgc1.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:Switch2->gis:ION900
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap + 3}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["ctrlRoom:switch2-gis:ion900"].id,
    source: nodeSetting.switch2.id,
    sourceHandle: "source-bottom-6", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigGis.nodeSetting.ion900.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:Switch2->gis:Power SCADA
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap * 2 + 3}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["ctrlRoom:switch2-gis:powerScada"].id,
    source: nodeSetting.switch2.id,
    sourceHandle: "source-bottom-7", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigGis.nodeSetting.powerScada.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:Switch2->mvcb1:Switch
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap * 5 + 3}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["ctrlRoom:switch2-mvcb1:switch"].id,
    source: nodeSetting.switch2.id,
    sourceHandle: "source-bottom-8", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigMvcb1.nodeSetting.switch.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:Switch2->mvcb2:Switch
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap * 9 - 96}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["ctrlRoom:switch2-mvcb2:switch"].id,
    source: nodeSetting.switch2.id,
    sourceHandle: "source-bottom-5", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: indexConfigMvcb2.nodeSetting.switch.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:MGC1->MGC2
    id: edgeSetting["ctrlRoom:mgc1-ctrlRoom:mgc2"].id,
    source: nodeSetting.mgc1.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.mgc2.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:MGC2->GC1
    id: edgeSetting["ctrlRoom:mgc2-ctrlRoom:gc1"].id,
    source: nodeSetting.mgc2.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.gc1.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:GC1->GC2
    id: edgeSetting["ctrlRoom:gc1-ctrlRoom:gc2"].id,
    source: nodeSetting.gc1.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.gc2.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:GC2->GC3
    id: edgeSetting["ctrlRoom:gc2-ctrlRoom:gc3"].id,
    source: nodeSetting.gc2.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.gc3.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:GC3->GC4
    id: edgeSetting["ctrlRoom:gc3-ctrlRoom:gc4"].id,
    source: nodeSetting.gc3.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.gc4.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:GC4->GC5
    id: edgeSetting["ctrlRoom:gc4-ctrlRoom:gc5"].id,
    source: nodeSetting.gc4.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.gc5.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:GC5->GC6
    id: edgeSetting["ctrlRoom:gc5-ctrlRoom:gc6"].id,
    source: nodeSetting.gc5.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.gc6.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:GC6->tGW-725i
    id: edgeSetting["ctrlRoom:gc6-ctrlRoom:tgw725i"].id,
    source: nodeSetting.gc6.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.tgw725i.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:tGW-725i->HVAC1
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap - 67}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["ctrlRoom:tgw725i-ctrlRoom:hvac1"].id,
    source: nodeSetting.tgw725i.id,
    sourceHandle: "source-bottom-1", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting.hvac1.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:tGW-725i->UPS-EMS
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap * 2 - 67}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["ctrlRoom:tgw725i-ctrlRoom:upsEms"].id,
    source: nodeSetting.tgw725i.id,
    sourceHandle: "source-bottom-0", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting.upsEms.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:HVAC1->HVAC2
    id: edgeSetting["ctrlRoom:hvac1-ctrlRoom:hvac2"].id,
    source: nodeSetting.hvac1.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting.hvac2.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:UPS-EMS->UPS-CMS
    id: edgeSetting["ctrlRoom:upsEms-ctrlRoom:upsCms"].id,
    source: nodeSetting.upsEms.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.red, strokeWidth: 3, strokeDasharray: "8 8" },
    target: nodeSetting.upsCms.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:光纖終端盒->Switch2(1)
    id: edgeSetting["ctrlRoom:fiberTerminal-ctrlRoom:switch2(1)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch2.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:光纖終端盒->Switch2(2)
    id: edgeSetting["ctrlRoom:fiberTerminal-ctrlRoom:switch2(2)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-1", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch2.id,
    targetHandle: "target-left-2", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:光纖終端盒->Switch2(3)
    id: edgeSetting["ctrlRoom:fiberTerminal-ctrlRoom:switch2(3)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-2", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch2.id,
    targetHandle: "target-left-3", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:光纖終端盒->Switch2(4)
    id: edgeSetting["ctrlRoom:fiberTerminal-ctrlRoom:switch2(4)"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-right-3", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: nodeSetting.switch2.id,
    targetHandle: "target-left-4", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:光纖終端盒->auxA:光纖終端盒
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap * 14 + 73}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["ctrlRoom:fiberTerminal-auxA:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-bottom-7", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigAuxA.nodeSetting.fiberTerminal.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:光纖終端盒->auxE:光纖終端盒
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap * 57 - 113}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["ctrlRoom:fiberTerminal-auxE:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-bottom-6", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigAuxE.nodeSetting.fiberTerminal.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:光纖終端盒->auxF:光纖終端盒
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap * 67 + 173}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["ctrlRoom:fiberTerminal-auxF:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-bottom-5", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigAuxF.nodeSetting.fiberTerminal.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //ctrlRoom:光纖終端盒->auxI:光纖終端盒
    data: {
      pathType: "custom",
      pathValue(sourceX, sourceY, targetX, targetY) {
        return `
          M${sourceX},${sourceY}
          L${sourceX},${sourceY + nodeGap * 93 - 13}
          L${targetX},${targetY}
        `;
      },
    },
    id: edgeSetting["ctrlRoom:fiberTerminal-auxI:fiberTerminal"].id,
    source: nodeSetting.fiberTerminal.id,
    sourceHandle: "source-bottom-4", //index是表示node的設定中handles.source:{dir:bottom}是陣列第幾位
    style: { stroke: edgeColor.yellow, strokeWidth: 3 },
    target: indexConfigAuxI.nodeSetting.fiberTerminal.id,
    targetHandle: "target-left-1", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
