import indexConfigAcpA1 from "./indexConfigAcpA1";
import indexConfigAcpA2 from "./indexConfigAcpA2";
import indexConfigAcpA3 from "./indexConfigAcpA3";
import indexConfigAcpB1 from "./indexConfigAcpB1";
import indexConfigAcpB2 from "./indexConfigAcpB2";
import indexConfigAcpB3 from "./indexConfigAcpB3";
import indexConfigAcpC1 from "./indexConfigAcpC1";
import indexConfigAcpC2 from "./indexConfigAcpC2";
import indexConfigAcpC3 from "./indexConfigAcpC3";
import indexConfigAcpD1 from "./indexConfigAcpD1";
import indexConfigAcpD2 from "./indexConfigAcpD2";
import indexConfigAcpD3 from "./indexConfigAcpD3";
import indexConfigAcpE1 from "./indexConfigAcpE1";
import indexConfigAcpE2 from "./indexConfigAcpE2";
import indexConfigAcpF1 from "./indexConfigAcpF1";
import indexConfigAcpF2 from "./indexConfigAcpF2";
import indexConfigAcpF3 from "./indexConfigAcpF3";
import indexConfigAcpG1 from "./indexConfigAcpG1";
import indexConfigAcpG2 from "./indexConfigAcpG2";
import indexConfigAcpG3 from "./indexConfigAcpG3";
import indexConfigAcpH1 from "./indexConfigAcpH1";
import indexConfigAcpH2 from "./indexConfigAcpH2";
import indexConfigAcpH3 from "./indexConfigAcpH3";
import indexConfigAcpI1 from "./indexConfigAcpI1";
import indexConfigAcpI2 from "./indexConfigAcpI2";
import indexConfigAcpI3 from "./indexConfigAcpI3";
import indexConfigAuxA from "./indexConfigAuxA";
import indexConfigAuxB from "./indexConfigAuxB";
import indexConfigAuxC from "./indexConfigAuxC";
import indexConfigAuxD from "./indexConfigAuxD";
import indexConfigAuxE from "./indexConfigAuxE";
import indexConfigAuxF from "./indexConfigAuxF";
import indexConfigAuxG from "./indexConfigAuxG";
import indexConfigAuxI from "./indexConfigAuxI";
import indexConfigCtrlRoom from "./indexConfigCtrlRoom";
import indexConfigGis from "./indexConfigGis";
import indexConfigLc1000A1 from "./indexConfigLc1000A1";
import indexConfigLc1000A2 from "./indexConfigLc1000A2";
import indexConfigLc1000A3 from "./indexConfigLc1000A3";
import indexConfigLc1000B1 from "./indexConfigLc1000B1";
import indexConfigLc1000B2 from "./indexConfigLc1000B2";
import indexConfigLc1000B3 from "./indexConfigLc1000B3";
import indexConfigLc1000C1 from "./indexConfigLc1000C1";
import indexConfigLc1000C2 from "./indexConfigLc1000C2";
import indexConfigLc1000C3 from "./indexConfigLc1000C3";
import indexConfigLc1000D1 from "./indexConfigLc1000D1";
import indexConfigLc1000D2 from "./indexConfigLc1000D2";
import indexConfigLc1000D3 from "./indexConfigLc1000D3";
import indexConfigLc1000E1 from "./indexConfigLc1000E1";
import indexConfigLc1000E2 from "./indexConfigLc1000E2";
import indexConfigLc1000F1 from "./indexConfigLc1000F1";
import indexConfigLc1000F2 from "./indexConfigLc1000F2";
import indexConfigLc1000F3 from "./indexConfigLc1000F3";
import indexConfigLc1000G1 from "./indexConfigLc1000G1";
import indexConfigLc1000G2 from "./indexConfigLc1000G2";
import indexConfigLc1000G3 from "./indexConfigLc1000G3";
import indexConfigLc1000H1 from "./indexConfigLc1000H1";
import indexConfigLc1000H2 from "./indexConfigLc1000H2";
import indexConfigLc1000H3 from "./indexConfigLc1000H3";
import indexConfigLc1000I1 from "./indexConfigLc1000I1";
import indexConfigLc1000I2 from "./indexConfigLc1000I2";
import indexConfigLc1000I3 from "./indexConfigLc1000I3";
import indexConfigMaux from "./indexConfigMaux";
import indexConfigMvcb1 from "./indexConfigMvcb1";
import indexConfigMvcb2 from "./indexConfigMvcb2";
import indexConfigNoGroup from "./indexConfigNoGroup";
import indexConfigRmuA from "./indexConfigRmuA";
import indexConfigRmuB from "./indexConfigRmuB";
import indexConfigRmuC from "./indexConfigRmuC";
import indexConfigRmuD from "./indexConfigRmuD";
import indexConfigRmuE from "./indexConfigRmuE";
import indexConfigRmuF from "./indexConfigRmuF";
import indexConfigRmuG from "./indexConfigRmuG";
import indexConfigRmuH from "./indexConfigRmuH";
import indexConfigRmuI from "./indexConfigRmuI";
import indexConfigVcbA from "./indexConfigVcbA";
import indexConfigVcbB from "./indexConfigVcbB";
import indexConfigVcbC from "./indexConfigVcbC";
import indexConfigVcbD from "./indexConfigVcbD";
import indexConfigVcbE from "./indexConfigVcbE";
import indexConfigVcbF from "./indexConfigVcbF";
import indexConfigVcbG from "./indexConfigVcbG";
import indexConfigVcbH from "./indexConfigVcbH";
import indexConfigVcbI from "./indexConfigVcbI";
import indexConfigVcbJ from "./indexConfigVcbJ";
import { edgeColor } from "./indexConfigCommon";

//架構圖主要的繪製節點初始設定值
const initialNodes = [
  ...indexConfigAcpA1.initialNodes,
  ...indexConfigAcpA2.initialNodes,
  ...indexConfigAcpA3.initialNodes,
  ...indexConfigAcpB1.initialNodes,
  ...indexConfigAcpB2.initialNodes,
  ...indexConfigAcpB3.initialNodes,
  ...indexConfigAcpC1.initialNodes,
  ...indexConfigAcpC2.initialNodes,
  ...indexConfigAcpC3.initialNodes,
  ...indexConfigAcpD1.initialNodes,
  ...indexConfigAcpD2.initialNodes,
  ...indexConfigAcpD3.initialNodes,
  ...indexConfigAcpE1.initialNodes,
  ...indexConfigAcpE2.initialNodes,
  ...indexConfigAcpF1.initialNodes,
  ...indexConfigAcpF2.initialNodes,
  ...indexConfigAcpF3.initialNodes,
  ...indexConfigAcpG1.initialNodes,
  ...indexConfigAcpG2.initialNodes,
  ...indexConfigAcpG3.initialNodes,
  ...indexConfigAcpH1.initialNodes,
  ...indexConfigAcpH2.initialNodes,
  ...indexConfigAcpH3.initialNodes,
  ...indexConfigAcpI1.initialNodes,
  ...indexConfigAcpI2.initialNodes,
  ...indexConfigAcpI3.initialNodes,
  ...indexConfigAuxA.initialNodes,
  ...indexConfigAuxB.initialNodes,
  ...indexConfigAuxC.initialNodes,
  ...indexConfigAuxD.initialNodes,
  ...indexConfigAuxE.initialNodes,
  ...indexConfigAuxF.initialNodes,
  ...indexConfigAuxG.initialNodes,
  ...indexConfigAuxI.initialNodes,
  ...indexConfigCtrlRoom.initialNodes,
  ...indexConfigGis.initialNodes,
  ...indexConfigLc1000A1.initialNodes,
  ...indexConfigLc1000A2.initialNodes,
  ...indexConfigLc1000A3.initialNodes,
  ...indexConfigLc1000B1.initialNodes,
  ...indexConfigLc1000B2.initialNodes,
  ...indexConfigLc1000B3.initialNodes,
  ...indexConfigLc1000C1.initialNodes,
  ...indexConfigLc1000C2.initialNodes,
  ...indexConfigLc1000C3.initialNodes,
  ...indexConfigLc1000D1.initialNodes,
  ...indexConfigLc1000D2.initialNodes,
  ...indexConfigLc1000D3.initialNodes,
  ...indexConfigLc1000E1.initialNodes,
  ...indexConfigLc1000E2.initialNodes,
  ...indexConfigLc1000F1.initialNodes,
  ...indexConfigLc1000F2.initialNodes,
  ...indexConfigLc1000F3.initialNodes,
  ...indexConfigLc1000G1.initialNodes,
  ...indexConfigLc1000G2.initialNodes,
  ...indexConfigLc1000G3.initialNodes,
  ...indexConfigLc1000H1.initialNodes,
  ...indexConfigLc1000H2.initialNodes,
  ...indexConfigLc1000H3.initialNodes,
  ...indexConfigLc1000I1.initialNodes,
  ...indexConfigLc1000I2.initialNodes,
  ...indexConfigLc1000I3.initialNodes,
  ...indexConfigMaux.initialNodes,
  ...indexConfigMvcb1.initialNodes,
  ...indexConfigMvcb2.initialNodes,
  ...indexConfigNoGroup.initialNodes,
  ...indexConfigRmuA.initialNodes,
  ...indexConfigRmuB.initialNodes,
  ...indexConfigRmuC.initialNodes,
  ...indexConfigRmuD.initialNodes,
  ...indexConfigRmuE.initialNodes,
  ...indexConfigRmuF.initialNodes,
  ...indexConfigRmuG.initialNodes,
  ...indexConfigRmuH.initialNodes,
  ...indexConfigRmuI.initialNodes,
  ...indexConfigVcbA.initialNodes,
  ...indexConfigVcbB.initialNodes,
  ...indexConfigVcbC.initialNodes,
  ...indexConfigVcbD.initialNodes,
  ...indexConfigVcbE.initialNodes,
  ...indexConfigVcbF.initialNodes,
  ...indexConfigVcbG.initialNodes,
  ...indexConfigVcbH.initialNodes,
  ...indexConfigVcbI.initialNodes,
  ...indexConfigVcbJ.initialNodes,
];
//架構圖主要的繪製線路初始設定值
const initialEdges = [
  ...indexConfigAcpA1.initialEdges,
  ...indexConfigAcpA2.initialEdges,
  ...indexConfigAcpA3.initialEdges,
  ...indexConfigAcpB1.initialEdges,
  ...indexConfigAcpB2.initialEdges,
  ...indexConfigAcpB3.initialEdges,
  ...indexConfigAcpC1.initialEdges,
  ...indexConfigAcpC2.initialEdges,
  ...indexConfigAcpC3.initialEdges,
  ...indexConfigAcpD1.initialEdges,
  ...indexConfigAcpD2.initialEdges,
  ...indexConfigAcpD3.initialEdges,
  ...indexConfigAcpE1.initialEdges,
  ...indexConfigAcpE2.initialEdges,
  ...indexConfigAcpF1.initialEdges,
  ...indexConfigAcpF2.initialEdges,
  ...indexConfigAcpF3.initialEdges,
  ...indexConfigAcpG1.initialEdges,
  ...indexConfigAcpG2.initialEdges,
  ...indexConfigAcpG3.initialEdges,
  ...indexConfigAcpH1.initialEdges,
  ...indexConfigAcpH2.initialEdges,
  ...indexConfigAcpH3.initialEdges,
  ...indexConfigAcpI1.initialEdges,
  ...indexConfigAcpI2.initialEdges,
  ...indexConfigAcpI3.initialEdges,
  ...indexConfigAuxA.initialEdges,
  ...indexConfigAuxB.initialEdges,
  ...indexConfigAuxC.initialEdges,
  ...indexConfigAuxD.initialEdges,
  ...indexConfigAuxE.initialEdges,
  ...indexConfigAuxF.initialEdges,
  ...indexConfigAuxG.initialEdges,
  ...indexConfigAuxI.initialEdges,
  ...indexConfigCtrlRoom.initialEdges,
  ...indexConfigGis.initialEdges,
  ...indexConfigLc1000A1.initialEdges,
  ...indexConfigLc1000A2.initialEdges,
  ...indexConfigLc1000A3.initialEdges,
  ...indexConfigLc1000B1.initialEdges,
  ...indexConfigLc1000B2.initialEdges,
  ...indexConfigLc1000B3.initialEdges,
  ...indexConfigLc1000C1.initialEdges,
  ...indexConfigLc1000C2.initialEdges,
  ...indexConfigLc1000C3.initialEdges,
  ...indexConfigLc1000D1.initialEdges,
  ...indexConfigLc1000D2.initialEdges,
  ...indexConfigLc1000D3.initialEdges,
  ...indexConfigLc1000E1.initialEdges,
  ...indexConfigLc1000E2.initialEdges,
  ...indexConfigLc1000F1.initialEdges,
  ...indexConfigLc1000F2.initialEdges,
  ...indexConfigLc1000F3.initialEdges,
  ...indexConfigLc1000G1.initialEdges,
  ...indexConfigLc1000G2.initialEdges,
  ...indexConfigLc1000G3.initialEdges,
  ...indexConfigLc1000H1.initialEdges,
  ...indexConfigLc1000H2.initialEdges,
  ...indexConfigLc1000H3.initialEdges,
  ...indexConfigLc1000I1.initialEdges,
  ...indexConfigLc1000I2.initialEdges,
  ...indexConfigLc1000I3.initialEdges,
  ...indexConfigMaux.initialNodes,
  ...indexConfigMvcb1.initialEdges,
  ...indexConfigMvcb2.initialEdges,
  ...indexConfigNoGroup.initialEdges,
  ...indexConfigRmuA.initialEdges,
  ...indexConfigRmuB.initialEdges,
  ...indexConfigRmuC.initialEdges,
  ...indexConfigRmuD.initialEdges,
  ...indexConfigRmuE.initialEdges,
  ...indexConfigRmuF.initialEdges,
  ...indexConfigRmuG.initialEdges,
  ...indexConfigRmuH.initialEdges,
  ...indexConfigRmuI.initialEdges,
  ...indexConfigVcbA.initialEdges,
  ...indexConfigVcbB.initialEdges,
  ...indexConfigVcbC.initialEdges,
  ...indexConfigVcbD.initialEdges,
  ...indexConfigVcbE.initialEdges,
  ...indexConfigVcbF.initialEdges,
  ...indexConfigVcbG.initialEdges,
  ...indexConfigVcbH.initialEdges,
  ...indexConfigVcbI.initialEdges,
  ...indexConfigVcbJ.initialEdges,
];

export {
  edgeColor,
  // edgeSetting,
  initialEdges,
  initialNodes,
  // nodeSetting,
};
