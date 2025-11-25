import { edgeColor, nodeGap, nodeGroupSetting } from "./indexConfigCommon";
import NodeLabel from "./nodeLabel";

//設定節點資訊
const nodeSetting = {
  essA101Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essA101Bsp`,
    name: "ESS A1-01\\A BSP",
  },
  essA102Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essA102Bsp`,
    name: "ESS A1-02\\A BSP",
  },
  essA103Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essA103Bsp`,
    name: "ESS A1-03\\A BSP",
  },
  essA104Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essA104Bsp`,
    name: "ESS A1-04\\A BSP",
  },
  essA201Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essA201Bsp`,
    name: "ESS A2-01\\A BSP",
  },
  essA202Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essA202Bsp`,
    name: "ESS A2-02\\A BSP",
  },
  essA203Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essA203Bsp`,
    name: "ESS A2-03\\A BSP",
  },
  essA204Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essA204Bsp`,
    name: "ESS A2-04\\A BSP",
  },
  essA301Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essA301Bsp`,
    name: "ESS A3-01\\A BSP",
  },
  essA302Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essA302Bsp`,
    name: "ESS A3-02\\A BSP",
  },
  essA303Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essA303Bsp`,
    name: "ESS A3-03\\A BSP",
  },
  essA304Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essA304Bsp`,
    name: "ESS A3-04\\A BSP",
  },
  essB101Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essB101Bsp`,
    name: "ESS B1-01\\A BSP",
  },
  essB102Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essB102Bsp`,
    name: "ESS B1-02\\A BSP",
  },
  essB103Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essB103Bsp`,
    name: "ESS B1-03\\A BSP",
  },
  essB104Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essB104Bsp`,
    name: "ESS B1-04\\A BSP",
  },
  essB201Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essB201Bsp`,
    name: "ESS B2-01\\A BSP",
  },
  essB202Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essB202Bsp`,
    name: "ESS B2-02\\A BSP",
  },
  essB203Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essB203Bsp`,
    name: "ESS B2-03\\A BSP",
  },
  essB204Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essB204Bsp`,
    name: "ESS B2-04\\A BSP",
  },
  essB301Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essB301Bsp`,
    name: "ESS B3-01\\A BSP",
  },
  essB302Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essB302Bsp`,
    name: "ESS B3-02\\A BSP",
  },
  essB303Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essB303Bsp`,
    name: "ESS B3-03\\A BSP",
  },
  essB304Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essB304Bsp`,
    name: "ESS B3-04\\A BSP",
  },
  essC101Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essC101Bsp`,
    name: "ESS C1-01\\A BSP",
  },
  essC102Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essC102Bsp`,
    name: "ESS C1-02\\A BSP",
  },
  essC103Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essC103Bsp`,
    name: "ESS C1-03\\A BSP",
  },
  essC104Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essC104Bsp`,
    name: "ESS C1-04\\A BSP",
  },
  essC201Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essC201Bsp`,
    name: "ESS C2-01\\A BSP",
  },
  essC202Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essC202Bsp`,
    name: "ESS C2-02\\A BSP",
  },
  essC203Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essC203Bsp`,
    name: "ESS C2-03\\A BSP",
  },
  essC204Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essC204Bsp`,
    name: "ESS C2-04\\A BSP",
  },
  essC301Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essC301Bsp`,
    name: "ESS C3-01\\A BSP",
  },
  essC302Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essC302Bsp`,
    name: "ESS C3-02\\A BSP",
  },
  essC303Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essC303Bsp`,
    name: "ESS C3-03\\A BSP",
  },
  essC304Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essC304Bsp`,
    name: "ESS C3-04\\A BSP",
  },
  essD101Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essD101Bsp`,
    name: "ESS D1-01\\A BSP",
  },
  essD102Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essD102Bsp`,
    name: "ESS D1-02\\A BSP",
  },
  essD103Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essD103Bsp`,
    name: "ESS D1-03\\A BSP",
  },
  essD104Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essD104Bsp`,
    name: "ESS D1-04\\A BSP",
  },
  essD201Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essD201Bsp`,
    name: "ESS D2-01\\A BSP",
  },
  essD202Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essD202Bsp`,
    name: "ESS D2-02\\A BSP",
  },
  essD203Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essD203Bsp`,
    name: "ESS D2-03\\A BSP",
  },
  essD204Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essD204Bsp`,
    name: "ESS D2-04\\A BSP",
  },
  essD301Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essD301Bsp`,
    name: "ESS D3-01\\A BSP",
  },
  essD302Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essD302Bsp`,
    name: "ESS D3-02\\A BSP",
  },
  essD303Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essD303Bsp`,
    name: "ESS D3-03\\A BSP",
  },
  essD304Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essD304Bsp`,
    name: "ESS D3-04\\A BSP",
  },
  essE101Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essE101Bsp`,
    name: "ESS E1-01\\A BSP",
  },
  essE102Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essE102Bsp`,
    name: "ESS E1-02\\A BSP",
  },
  essE103Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essE103Bsp`,
    name: "ESS E1-03\\A BSP",
  },
  essE104Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essE104Bsp`,
    name: "ESS E1-04\\A BSP",
  },
  essE201Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essE201Bsp`,
    name: "ESS E2-01\\A BSP",
  },
  essE202Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essE202Bsp`,
    name: "ESS E2-02\\A BSP",
  },
  essE203Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essE203Bsp`,
    name: "ESS E2-03\\A BSP",
  },
  essE204Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essE204Bsp`,
    name: "ESS E2-04\\A BSP",
  },
  essF101Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essF101Bsp`,
    name: "ESS F1-01\\A BSP",
  },
  essF102Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essF102Bsp`,
    name: "ESS F1-02\\A BSP",
  },
  essF103Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essF103Bsp`,
    name: "ESS F1-03\\A BSP",
  },
  essF104Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essF104Bsp`,
    name: "ESS F1-04\\A BSP",
  },
  essF201Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essF201Bsp`,
    name: "ESS F2-01\\A BSP",
  },
  essF202Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essF202Bsp`,
    name: "ESS F2-02\\A BSP",
  },
  essF203Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essF203Bsp`,
    name: "ESS F2-03\\A BSP",
  },
  essF204Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essF204Bsp`,
    name: "ESS F2-04\\A BSP",
  },
  essF301Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essF301Bsp`,
    name: "ESS F3-01\\A BSP",
  },
  essF302Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essF302Bsp`,
    name: "ESS F3-02\\A BSP",
  },
  essF303Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essF303Bsp`,
    name: "ESS F3-03\\A BSP",
  },
  essF304Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essF304Bsp`,
    name: "ESS F3-04\\A BSP",
  },
  essG101Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essG101Bsp`,
    name: "ESS G1-01\\A BSP",
  },
  essG102Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essG102Bsp`,
    name: "ESS G1-02\\A BSP",
  },
  essG103Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essG103Bsp`,
    name: "ESS G1-03\\A BSP",
  },
  essG104Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essG104Bsp`,
    name: "ESS G1-04\\A BSP",
  },
  essG201Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essG201Bsp`,
    name: "ESS G2-01\\A BSP",
  },
  essG202Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essG202Bsp`,
    name: "ESS G2-02\\A BSP",
  },
  essG203Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essG203Bsp`,
    name: "ESS G2-03\\A BSP",
  },
  essG204Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essG204Bsp`,
    name: "ESS G2-04\\A BSP",
  },
  essG301Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essG301Bsp`,
    name: "ESS G3-01\\A BSP",
  },
  essG302Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essG302Bsp`,
    name: "ESS G3-02\\A BSP",
  },
  essG303Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essG303Bsp`,
    name: "ESS G3-03\\A BSP",
  },
  essG304Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essG304Bsp`,
    name: "ESS G3-04\\A BSP",
  },
  essH101Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essH101Bsp`,
    name: "ESS H1-01\\A BSP",
  },
  essH102Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essH102Bsp`,
    name: "ESS H1-02\\A BSP",
  },
  essH103Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essH103Bsp`,
    name: "ESS H1-03\\A BSP",
  },
  essH104Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essH104Bsp`,
    name: "ESS H1-04\\A BSP",
  },
  essH201Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essH201Bsp`,
    name: "ESS H2-01\\A BSP",
  },
  essH202Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essH202Bsp`,
    name: "ESS H2-02\\A BSP",
  },
  essH203Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essH203Bsp`,
    name: "ESS H2-03\\A BSP",
  },
  essH204Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essH204Bsp`,
    name: "ESS H2-04\\A BSP",
  },
  essH301Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essH301Bsp`,
    name: "ESS H3-01\\A BSP",
  },
  essH302Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essH302Bsp`,
    name: "ESS H3-02\\A BSP",
  },
  essH303Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essH303Bsp`,
    name: "ESS H3-03\\A BSP",
  },
  essH304Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essH304Bsp`,
    name: "ESS H3-04\\A BSP",
  },
  essI101Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essI101Bsp`,
    name: "ESS I1-01\\A BSP",
  },
  essI102Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essI102Bsp`,
    name: "ESS I1-02\\A BSP",
  },
  essI103Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essI103Bsp`,
    name: "ESS I1-03\\A BSP",
  },
  essI104Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essI104Bsp`,
    name: "ESS I1-04\\A BSP",
  },
  essI201Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essI201Bsp`,
    name: "ESS I2-01\\A BSP",
  },
  essI202Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essI202Bsp`,
    name: "ESS I2-02\\A BSP",
  },
  essI203Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essI203Bsp`,
    name: "ESS I2-03\\A BSP",
  },
  essI204Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essI204Bsp`,
    name: "ESS I2-04\\A BSP",
  },
  essI301Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essI301Bsp`,
    name: "ESS I3-01\\A BSP",
  },
  essI302Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essI302Bsp`,
    name: "ESS I3-02\\A BSP",
  },
  essI303Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essI303Bsp`,
    name: "ESS I3-03\\A BSP",
  },
  essI304Bsp: {
    id: `${nodeGroupSetting.noGroup.id}:essI304Bsp`,
    name: "ESS I3-04\\A BSP",
  },
  "pcsA1-1": { id: `${nodeGroupSetting.noGroup.id}:pcsA1-1`, name: "PCS A1-1" },
  "pcsA1-2": { id: `${nodeGroupSetting.noGroup.id}:pcsA1-2`, name: "PCS A1-2" },
  "pcsA2-1": { id: `${nodeGroupSetting.noGroup.id}:pcsA2-1`, name: "PCS A2-1" },
  "pcsA2-2": { id: `${nodeGroupSetting.noGroup.id}:pcsA2-2`, name: "PCS A2-2" },
  "pcsA3-1": { id: `${nodeGroupSetting.noGroup.id}:pcsA3-1`, name: "PCS A3-1" },
  "pcsA3-2": { id: `${nodeGroupSetting.noGroup.id}:pcsA3-2`, name: "PCS A3-2" },
  "pcsB1-1": { id: `${nodeGroupSetting.noGroup.id}:pcsB1-1`, name: "PCS B1-1" },
  "pcsB1-2": { id: `${nodeGroupSetting.noGroup.id}:pcsB1-2`, name: "PCS B1-2" },
  "pcsB2-1": { id: `${nodeGroupSetting.noGroup.id}:pcsB2-1`, name: "PCS B2-1" },
  "pcsB2-2": { id: `${nodeGroupSetting.noGroup.id}:pcsB2-2`, name: "PCS B2-2" },
  "pcsB3-1": { id: `${nodeGroupSetting.noGroup.id}:pcsB3-1`, name: "PCS B3-1" },
  "pcsB3-2": { id: `${nodeGroupSetting.noGroup.id}:pcsB3-2`, name: "PCS B3-2" },
  "pcsC1-1": { id: `${nodeGroupSetting.noGroup.id}:pcsC1-1`, name: "PCS C1-1" },
  "pcsC1-2": { id: `${nodeGroupSetting.noGroup.id}:pcsC1-2`, name: "PCS C1-2" },
  "pcsC2-1": { id: `${nodeGroupSetting.noGroup.id}:pcsC2-1`, name: "PCS C2-1" },
  "pcsC2-2": { id: `${nodeGroupSetting.noGroup.id}:pcsC2-2`, name: "PCS C2-2" },
  "pcsC3-1": { id: `${nodeGroupSetting.noGroup.id}:pcsC3-1`, name: "PCS C3-1" },
  "pcsC3-2": { id: `${nodeGroupSetting.noGroup.id}:pcsC3-2`, name: "PCS C3-2" },
  "pcsD1-1": { id: `${nodeGroupSetting.noGroup.id}:pcsD1-1`, name: "PCS D1-1" },
  "pcsD1-2": { id: `${nodeGroupSetting.noGroup.id}:pcsD1-2`, name: "PCS D1-2" },
  "pcsD2-1": { id: `${nodeGroupSetting.noGroup.id}:pcsD2-1`, name: "PCS D2-1" },
  "pcsD2-2": { id: `${nodeGroupSetting.noGroup.id}:pcsD2-2`, name: "PCS D2-2" },
  "pcsD3-1": { id: `${nodeGroupSetting.noGroup.id}:pcsD3-1`, name: "PCS D3-1" },
  "pcsD3-2": { id: `${nodeGroupSetting.noGroup.id}:pcsD3-2`, name: "PCS D3-2" },
  "pcsE1-1": { id: `${nodeGroupSetting.noGroup.id}:pcsE1-1`, name: "PCS E1-1" },
  "pcsE1-2": { id: `${nodeGroupSetting.noGroup.id}:pcsE1-2`, name: "PCS E1-2" },
  "pcsE2-1": { id: `${nodeGroupSetting.noGroup.id}:pcsE2-1`, name: "PCS E2-1" },
  "pcsE2-2": { id: `${nodeGroupSetting.noGroup.id}:pcsE2-2`, name: "PCS E2-2" },
  "pcsF1-1": { id: `${nodeGroupSetting.noGroup.id}:pcsF1-1`, name: "PCS F1-1" },
  "pcsF1-2": { id: `${nodeGroupSetting.noGroup.id}:pcsF1-2`, name: "PCS F1-2" },
  "pcsF2-1": { id: `${nodeGroupSetting.noGroup.id}:pcsF2-1`, name: "PCS F2-1" },
  "pcsF2-2": { id: `${nodeGroupSetting.noGroup.id}:pcsF2-2`, name: "PCS F2-2" },
  "pcsF3-1": { id: `${nodeGroupSetting.noGroup.id}:pcsF3-1`, name: "PCS F3-1" },
  "pcsF3-2": { id: `${nodeGroupSetting.noGroup.id}:pcsF3-2`, name: "PCS F3-2" },
  "pcsG1-1": { id: `${nodeGroupSetting.noGroup.id}:pcsG1-1`, name: "PCS G1-1" },
  "pcsG1-2": { id: `${nodeGroupSetting.noGroup.id}:pcsG1-2`, name: "PCS G1-2" },
  "pcsG2-1": { id: `${nodeGroupSetting.noGroup.id}:pcsG2-1`, name: "PCS G2-1" },
  "pcsG2-2": { id: `${nodeGroupSetting.noGroup.id}:pcsG2-2`, name: "PCS G2-2" },
  "pcsG3-1": { id: `${nodeGroupSetting.noGroup.id}:pcsG3-1`, name: "PCS G3-1" },
  "pcsG3-2": { id: `${nodeGroupSetting.noGroup.id}:pcsG3-2`, name: "PCS G3-2" },
  "pcsH1-1": { id: `${nodeGroupSetting.noGroup.id}:pcsH1-1`, name: "PCS H1-1" },
  "pcsH1-2": { id: `${nodeGroupSetting.noGroup.id}:pcsH1-2`, name: "PCS H1-2" },
  "pcsH2-1": { id: `${nodeGroupSetting.noGroup.id}:pcsH2-1`, name: "PCS H2-1" },
  "pcsH2-2": { id: `${nodeGroupSetting.noGroup.id}:pcsH2-2`, name: "PCS H2-2" },
  "pcsH3-1": { id: `${nodeGroupSetting.noGroup.id}:pcsH3-1`, name: "PCS H3-1" },
  "pcsH3-2": { id: `${nodeGroupSetting.noGroup.id}:pcsH3-2`, name: "PCS H3-2" },
  "pcsI1-1": { id: `${nodeGroupSetting.noGroup.id}:pcsI1-1`, name: "PCS I1-1" },
  "pcsI1-2": { id: `${nodeGroupSetting.noGroup.id}:pcsI1-2`, name: "PCS I1-2" },
  "pcsI2-1": { id: `${nodeGroupSetting.noGroup.id}:pcsI2-1`, name: "PCS I2-1" },
  "pcsI2-2": { id: `${nodeGroupSetting.noGroup.id}:pcsI2-2`, name: "PCS I2-2" },
  "pcsI3-1": { id: `${nodeGroupSetting.noGroup.id}:pcsI3-1`, name: "PCS I3-1" },
  "pcsI3-2": { id: `${nodeGroupSetting.noGroup.id}:pcsI3-2`, name: "PCS I3-2" },
};
//設定線路資訊
const edgeSetting = {
  "noGroup:essA101Bsp-noGroup:essA102Bsp": {
    id: `${nodeSetting.essA101Bsp.id}-to-${nodeSetting.essA102Bsp.id}`,
  },
  "noGroup:essA102Bsp-noGroup:essA103Bsp": {
    id: `${nodeSetting.essA102Bsp.id}-to-${nodeSetting.essA103Bsp.id}`,
  },
  "noGroup:essA103Bsp-noGroup:essA104Bsp": {
    id: `${nodeSetting.essA103Bsp.id}-to-${nodeSetting.essA104Bsp.id}`,
  },
  "noGroup:essA104Bsp-noGroup:pcsA1-1": {
    id: `${nodeSetting.essA104Bsp.id}-to-${nodeSetting["pcsA1-1"].id}`,
  },
  "noGroup:essA201Bsp-noGroup:essA202Bsp": {
    id: `${nodeSetting.essA201Bsp.id}-to-${nodeSetting.essA202Bsp.id}`,
  },
  "noGroup:essA202Bsp-noGroup:essA203Bsp": {
    id: `${nodeSetting.essA202Bsp.id}-to-${nodeSetting.essA203Bsp.id}`,
  },
  "noGroup:essA203Bsp-noGroup:essA204Bsp": {
    id: `${nodeSetting.essA203Bsp.id}-to-${nodeSetting.essA204Bsp.id}`,
  },
  "noGroup:essA204Bsp-noGroup:pcsA2-1": {
    id: `${nodeSetting.essA204Bsp.id}-to-${nodeSetting["pcsA2-1"].id}`,
  },
  "noGroup:essA301Bsp-noGroup:essA302Bsp": {
    id: `${nodeSetting.essA301Bsp.id}-to-${nodeSetting.essA302Bsp.id}`,
  },
  "noGroup:essA302Bsp-noGroup:essA303Bsp": {
    id: `${nodeSetting.essA302Bsp.id}-to-${nodeSetting.essA303Bsp.id}`,
  },
  "noGroup:essA303Bsp-noGroup:essA304Bsp": {
    id: `${nodeSetting.essA303Bsp.id}-to-${nodeSetting.essA304Bsp.id}`,
  },
  "noGroup:essA304Bsp-noGroup:pcsA3-1": {
    id: `${nodeSetting.essA304Bsp.id}-to-${nodeSetting["pcsA3-1"].id}`,
  },
  "noGroup:essB101Bsp-noGroup:essB102Bsp": {
    id: `${nodeSetting.essB101Bsp.id}-to-${nodeSetting.essB102Bsp.id}`,
  },
  "noGroup:essB102Bsp-noGroup:essB103Bsp": {
    id: `${nodeSetting.essB102Bsp.id}-to-${nodeSetting.essB103Bsp.id}`,
  },
  "noGroup:essB103Bsp-noGroup:essB104Bsp": {
    id: `${nodeSetting.essB103Bsp.id}-to-${nodeSetting.essB104Bsp.id}`,
  },
  "noGroup:essB104Bsp-noGroup:pcsB1-1": {
    id: `${nodeSetting.essB104Bsp.id}-to-${nodeSetting["pcsB1-1"].id}`,
  },
  "noGroup:essB201Bsp-noGroup:essB202Bsp": {
    id: `${nodeSetting.essB201Bsp.id}-to-${nodeSetting.essB202Bsp.id}`,
  },
  "noGroup:essB202Bsp-noGroup:essB203Bsp": {
    id: `${nodeSetting.essB202Bsp.id}-to-${nodeSetting.essB203Bsp.id}`,
  },
  "noGroup:essB203Bsp-noGroup:essB204Bsp": {
    id: `${nodeSetting.essB203Bsp.id}-to-${nodeSetting.essB204Bsp.id}`,
  },
  "noGroup:essB204Bsp-noGroup:pcsB2-1": {
    id: `${nodeSetting.essB204Bsp.id}-to-${nodeSetting["pcsB2-1"].id}`,
  },
  "noGroup:essB301Bsp-noGroup:essB302Bsp": {
    id: `${nodeSetting.essB301Bsp.id}-to-${nodeSetting.essB302Bsp.id}`,
  },
  "noGroup:essB302Bsp-noGroup:essB303Bsp": {
    id: `${nodeSetting.essB302Bsp.id}-to-${nodeSetting.essB303Bsp.id}`,
  },
  "noGroup:essB303Bsp-noGroup:essB304Bsp": {
    id: `${nodeSetting.essB303Bsp.id}-to-${nodeSetting.essB304Bsp.id}`,
  },
  "noGroup:essB304Bsp-noGroup:pcsB3-1": {
    id: `${nodeSetting.essB304Bsp.id}-to-${nodeSetting["pcsB3-1"].id}`,
  },
  "noGroup:essC101Bsp-noGroup:essC102Bsp": {
    id: `${nodeSetting.essC101Bsp.id}-to-${nodeSetting.essC102Bsp.id}`,
  },
  "noGroup:essC102Bsp-noGroup:essC103Bsp": {
    id: `${nodeSetting.essC102Bsp.id}-to-${nodeSetting.essC103Bsp.id}`,
  },
  "noGroup:essC103Bsp-noGroup:essC104Bsp": {
    id: `${nodeSetting.essC103Bsp.id}-to-${nodeSetting.essC104Bsp.id}`,
  },
  "noGroup:essC104Bsp-noGroup:pcsC1-1": {
    id: `${nodeSetting.essC104Bsp.id}-to-${nodeSetting["pcsC1-1"].id}`,
  },
  "noGroup:essC201Bsp-noGroup:essC202Bsp": {
    id: `${nodeSetting.essC201Bsp.id}-to-${nodeSetting.essC202Bsp.id}`,
  },
  "noGroup:essC202Bsp-noGroup:essC203Bsp": {
    id: `${nodeSetting.essC202Bsp.id}-to-${nodeSetting.essC203Bsp.id}`,
  },
  "noGroup:essC203Bsp-noGroup:essC204Bsp": {
    id: `${nodeSetting.essC203Bsp.id}-to-${nodeSetting.essC204Bsp.id}`,
  },
  "noGroup:essC204Bsp-noGroup:pcsC2-1": {
    id: `${nodeSetting.essC204Bsp.id}-to-${nodeSetting["pcsC2-1"].id}`,
  },
  "noGroup:essC301Bsp-noGroup:essC302Bsp": {
    id: `${nodeSetting.essC301Bsp.id}-to-${nodeSetting.essC302Bsp.id}`,
  },
  "noGroup:essC302Bsp-noGroup:essC303Bsp": {
    id: `${nodeSetting.essC302Bsp.id}-to-${nodeSetting.essC303Bsp.id}`,
  },
  "noGroup:essC303Bsp-noGroup:essC304Bsp": {
    id: `${nodeSetting.essC303Bsp.id}-to-${nodeSetting.essC304Bsp.id}`,
  },
  "noGroup:essC304Bsp-noGroup:pcsC3-1": {
    id: `${nodeSetting.essC304Bsp.id}-to-${nodeSetting["pcsC3-1"].id}`,
  },
  "noGroup:essD101Bsp-noGroup:essD102Bsp": {
    id: `${nodeSetting.essD101Bsp.id}-to-${nodeSetting.essD102Bsp.id}`,
  },
  "noGroup:essD102Bsp-noGroup:essD103Bsp": {
    id: `${nodeSetting.essD102Bsp.id}-to-${nodeSetting.essD103Bsp.id}`,
  },
  "noGroup:essD103Bsp-noGroup:essD104Bsp": {
    id: `${nodeSetting.essD103Bsp.id}-to-${nodeSetting.essD104Bsp.id}`,
  },
  "noGroup:essD104Bsp-noGroup:pcsD1-1": {
    id: `${nodeSetting.essD104Bsp.id}-to-${nodeSetting["pcsD1-1"].id}`,
  },
  "noGroup:essD201Bsp-noGroup:essD202Bsp": {
    id: `${nodeSetting.essD201Bsp.id}-to-${nodeSetting.essD202Bsp.id}`,
  },
  "noGroup:essD202Bsp-noGroup:essD203Bsp": {
    id: `${nodeSetting.essD202Bsp.id}-to-${nodeSetting.essD203Bsp.id}`,
  },
  "noGroup:essD203Bsp-noGroup:essD204Bsp": {
    id: `${nodeSetting.essD203Bsp.id}-to-${nodeSetting.essD204Bsp.id}`,
  },
  "noGroup:essD204Bsp-noGroup:pcsD2-1": {
    id: `${nodeSetting.essD204Bsp.id}-to-${nodeSetting["pcsD2-1"].id}`,
  },
  "noGroup:essD301Bsp-noGroup:essD302Bsp": {
    id: `${nodeSetting.essD301Bsp.id}-to-${nodeSetting.essD302Bsp.id}`,
  },
  "noGroup:essD302Bsp-noGroup:essD303Bsp": {
    id: `${nodeSetting.essD302Bsp.id}-to-${nodeSetting.essD303Bsp.id}`,
  },
  "noGroup:essD303Bsp-noGroup:essD304Bsp": {
    id: `${nodeSetting.essD303Bsp.id}-to-${nodeSetting.essD304Bsp.id}`,
  },
  "noGroup:essD304Bsp-noGroup:pcsD3-1": {
    id: `${nodeSetting.essD304Bsp.id}-to-${nodeSetting["pcsD3-1"].id}`,
  },
  "noGroup:essE101Bsp-noGroup:essE102Bsp": {
    id: `${nodeSetting.essE101Bsp.id}-to-${nodeSetting.essE102Bsp.id}`,
  },
  "noGroup:essE102Bsp-noGroup:essE103Bsp": {
    id: `${nodeSetting.essE102Bsp.id}-to-${nodeSetting.essE103Bsp.id}`,
  },
  "noGroup:essE103Bsp-noGroup:essE104Bsp": {
    id: `${nodeSetting.essE103Bsp.id}-to-${nodeSetting.essE104Bsp.id}`,
  },
  "noGroup:essE104Bsp-noGroup:pcsE1-1": {
    id: `${nodeSetting.essE104Bsp.id}-to-${nodeSetting["pcsE1-1"].id}`,
  },
  "noGroup:essE201Bsp-noGroup:essE202Bsp": {
    id: `${nodeSetting.essE201Bsp.id}-to-${nodeSetting.essE202Bsp.id}`,
  },
  "noGroup:essE202Bsp-noGroup:essE203Bsp": {
    id: `${nodeSetting.essE202Bsp.id}-to-${nodeSetting.essE203Bsp.id}`,
  },
  "noGroup:essE203Bsp-noGroup:essE204Bsp": {
    id: `${nodeSetting.essE203Bsp.id}-to-${nodeSetting.essE204Bsp.id}`,
  },
  "noGroup:essE204Bsp-noGroup:pcsE2-1": {
    id: `${nodeSetting.essE204Bsp.id}-to-${nodeSetting["pcsE2-1"].id}`,
  },
  "noGroup:essF101Bsp-noGroup:essF102Bsp": {
    id: `${nodeSetting.essF101Bsp.id}-to-${nodeSetting.essF102Bsp.id}`,
  },
  "noGroup:essF102Bsp-noGroup:essF103Bsp": {
    id: `${nodeSetting.essF102Bsp.id}-to-${nodeSetting.essF103Bsp.id}`,
  },
  "noGroup:essF103Bsp-noGroup:essF104Bsp": {
    id: `${nodeSetting.essF103Bsp.id}-to-${nodeSetting.essF104Bsp.id}`,
  },
  "noGroup:essF104Bsp-noGroup:pcsF1-1": {
    id: `${nodeSetting.essF104Bsp.id}-to-${nodeSetting["pcsF1-1"].id}`,
  },
  "noGroup:essF201Bsp-noGroup:essF202Bsp": {
    id: `${nodeSetting.essF201Bsp.id}-to-${nodeSetting.essF202Bsp.id}`,
  },
  "noGroup:essF202Bsp-noGroup:essF203Bsp": {
    id: `${nodeSetting.essF202Bsp.id}-to-${nodeSetting.essF203Bsp.id}`,
  },
  "noGroup:essF203Bsp-noGroup:essF204Bsp": {
    id: `${nodeSetting.essF203Bsp.id}-to-${nodeSetting.essF204Bsp.id}`,
  },
  "noGroup:essF204Bsp-noGroup:pcsF2-1": {
    id: `${nodeSetting.essF204Bsp.id}-to-${nodeSetting["pcsF2-1"].id}`,
  },
  "noGroup:essF301Bsp-noGroup:essF302Bsp": {
    id: `${nodeSetting.essF301Bsp.id}-to-${nodeSetting.essF302Bsp.id}`,
  },
  "noGroup:essF302Bsp-noGroup:essF303Bsp": {
    id: `${nodeSetting.essF302Bsp.id}-to-${nodeSetting.essF303Bsp.id}`,
  },
  "noGroup:essF303Bsp-noGroup:essF304Bsp": {
    id: `${nodeSetting.essF303Bsp.id}-to-${nodeSetting.essF304Bsp.id}`,
  },
  "noGroup:essF304Bsp-noGroup:pcsF3-1": {
    id: `${nodeSetting.essF304Bsp.id}-to-${nodeSetting["pcsF3-1"].id}`,
  },
  "noGroup:essG101Bsp-noGroup:essG102Bsp": {
    id: `${nodeSetting.essG101Bsp.id}-to-${nodeSetting.essG102Bsp.id}`,
  },
  "noGroup:essG102Bsp-noGroup:essG103Bsp": {
    id: `${nodeSetting.essG102Bsp.id}-to-${nodeSetting.essG103Bsp.id}`,
  },
  "noGroup:essG103Bsp-noGroup:essG104Bsp": {
    id: `${nodeSetting.essG103Bsp.id}-to-${nodeSetting.essG104Bsp.id}`,
  },
  "noGroup:essG104Bsp-noGroup:pcsG1-1": {
    id: `${nodeSetting.essG104Bsp.id}-to-${nodeSetting["pcsG1-1"].id}`,
  },
  "noGroup:essG201Bsp-noGroup:essG202Bsp": {
    id: `${nodeSetting.essG201Bsp.id}-to-${nodeSetting.essG202Bsp.id}`,
  },
  "noGroup:essG202Bsp-noGroup:essG203Bsp": {
    id: `${nodeSetting.essG202Bsp.id}-to-${nodeSetting.essG203Bsp.id}`,
  },
  "noGroup:essG203Bsp-noGroup:essG204Bsp": {
    id: `${nodeSetting.essG203Bsp.id}-to-${nodeSetting.essG204Bsp.id}`,
  },
  "noGroup:essG204Bsp-noGroup:pcsG2-1": {
    id: `${nodeSetting.essG204Bsp.id}-to-${nodeSetting["pcsG2-1"].id}`,
  },
  "noGroup:essG301Bsp-noGroup:essG302Bsp": {
    id: `${nodeSetting.essG301Bsp.id}-to-${nodeSetting.essG302Bsp.id}`,
  },
  "noGroup:essG302Bsp-noGroup:essG303Bsp": {
    id: `${nodeSetting.essG302Bsp.id}-to-${nodeSetting.essG303Bsp.id}`,
  },
  "noGroup:essG303Bsp-noGroup:essG304Bsp": {
    id: `${nodeSetting.essG303Bsp.id}-to-${nodeSetting.essG304Bsp.id}`,
  },
  "noGroup:essG304Bsp-noGroup:pcsG3-1": {
    id: `${nodeSetting.essG304Bsp.id}-to-${nodeSetting["pcsG3-1"].id}`,
  },
  "noGroup:essH101Bsp-noGroup:essH102Bsp": {
    id: `${nodeSetting.essH101Bsp.id}-to-${nodeSetting.essH102Bsp.id}`,
  },
  "noGroup:essH102Bsp-noGroup:essH103Bsp": {
    id: `${nodeSetting.essH102Bsp.id}-to-${nodeSetting.essH103Bsp.id}`,
  },
  "noGroup:essH103Bsp-noGroup:essH104Bsp": {
    id: `${nodeSetting.essH103Bsp.id}-to-${nodeSetting.essH104Bsp.id}`,
  },
  "noGroup:essH104Bsp-noGroup:pcsH1-1": {
    id: `${nodeSetting.essH104Bsp.id}-to-${nodeSetting["pcsH1-1"].id}`,
  },
  "noGroup:essH201Bsp-noGroup:essH202Bsp": {
    id: `${nodeSetting.essH201Bsp.id}-to-${nodeSetting.essH202Bsp.id}`,
  },
  "noGroup:essH202Bsp-noGroup:essH203Bsp": {
    id: `${nodeSetting.essH202Bsp.id}-to-${nodeSetting.essH203Bsp.id}`,
  },
  "noGroup:essH203Bsp-noGroup:essH204Bsp": {
    id: `${nodeSetting.essH203Bsp.id}-to-${nodeSetting.essH204Bsp.id}`,
  },
  "noGroup:essH204Bsp-noGroup:pcsH2-1": {
    id: `${nodeSetting.essH204Bsp.id}-to-${nodeSetting["pcsH2-1"].id}`,
  },
  "noGroup:essH301Bsp-noGroup:essH302Bsp": {
    id: `${nodeSetting.essH301Bsp.id}-to-${nodeSetting.essH302Bsp.id}`,
  },
  "noGroup:essH302Bsp-noGroup:essH303Bsp": {
    id: `${nodeSetting.essH302Bsp.id}-to-${nodeSetting.essH303Bsp.id}`,
  },
  "noGroup:essH303Bsp-noGroup:essH304Bsp": {
    id: `${nodeSetting.essH303Bsp.id}-to-${nodeSetting.essH304Bsp.id}`,
  },
  "noGroup:essH304Bsp-noGroup:pcsH3-1": {
    id: `${nodeSetting.essH304Bsp.id}-to-${nodeSetting["pcsH3-1"].id}`,
  },
  "noGroup:essI101Bsp-noGroup:essI102Bsp": {
    id: `${nodeSetting.essI101Bsp.id}-to-${nodeSetting.essI102Bsp.id}`,
  },
  "noGroup:essI102Bsp-noGroup:essI103Bsp": {
    id: `${nodeSetting.essI102Bsp.id}-to-${nodeSetting.essI103Bsp.id}`,
  },
  "noGroup:essI103Bsp-noGroup:essI104Bsp": {
    id: `${nodeSetting.essI103Bsp.id}-to-${nodeSetting.essI104Bsp.id}`,
  },
  "noGroup:essI104Bsp-noGroup:pcsI1-1": {
    id: `${nodeSetting.essI104Bsp.id}-to-${nodeSetting["pcsI1-1"].id}`,
  },
  "noGroup:essI201Bsp-noGroup:essI202Bsp": {
    id: `${nodeSetting.essI201Bsp.id}-to-${nodeSetting.essI202Bsp.id}`,
  },
  "noGroup:essI202Bsp-noGroup:essI203Bsp": {
    id: `${nodeSetting.essI202Bsp.id}-to-${nodeSetting.essI203Bsp.id}`,
  },
  "noGroup:essI203Bsp-noGroup:essI204Bsp": {
    id: `${nodeSetting.essI203Bsp.id}-to-${nodeSetting.essI204Bsp.id}`,
  },
  "noGroup:essI204Bsp-noGroup:pcsI2-1": {
    id: `${nodeSetting.essI204Bsp.id}-to-${nodeSetting["pcsI2-1"].id}`,
  },
  "noGroup:essI301Bsp-noGroup:essI302Bsp": {
    id: `${nodeSetting.essI301Bsp.id}-to-${nodeSetting.essI302Bsp.id}`,
  },
  "noGroup:essI302Bsp-noGroup:essI303Bsp": {
    id: `${nodeSetting.essI302Bsp.id}-to-${nodeSetting.essI303Bsp.id}`,
  },
  "noGroup:essI303Bsp-noGroup:essI304Bsp": {
    id: `${nodeSetting.essI303Bsp.id}-to-${nodeSetting.essI304Bsp.id}`,
  },
  "noGroup:essI304Bsp-noGroup:pcsI3-1": {
    id: `${nodeSetting.essI304Bsp.id}-to-${nodeSetting["pcsI3-1"].id}`,
  },
};
//節點初始值設定
const initialNodes = [
  //noGroup:ESS A1-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essA101Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essA101Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 20 - 120 },
    type: "custom",
  },
  //noGroup:ESS A1-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essA102Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essA102Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 20 - 120 },
    type: "custom",
  },
  //noGroup:ESS A1-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essA103Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essA103Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 20 - 120 },
    type: "custom",
  },
  //noGroup:ESS A1-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essA104Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essA104Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 20 - 120 },
    type: "custom",
  },
  //noGroup:PCS A1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsA1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsA1-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 20 - 120 },
    type: "custom",
  },
  //noGroup:PCS A1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsA1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsA1-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 20 - 120 },
    type: "custom",
  },
  //noGroup:ESS A2-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essA201Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essA201Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 22 - 220 },
    type: "custom",
  },
  //noGroup:ESS A2-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essA202Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essA202Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 22 - 220 },
    type: "custom",
  },
  //noGroup:ESS A2-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essA203Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essA203Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 22 - 220 },
    type: "custom",
  },
  //noGroup:ESS A2-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essA204Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essA204Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 22 - 220 },
    type: "custom",
  },
  //noGroup:PCS A2-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsA2-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsA2-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 22 - 220 },
    type: "custom",
  },
  //noGroup:PCS A2-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsA2-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsA2-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 22 - 220 },
    type: "custom",
  },
  //noGroup:ESS A3-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essA301Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essA301Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 23 - 20 },

    type: "custom",
  },
  //noGroup:ESS A3-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essA302Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essA302Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 23 - 20 },
    type: "custom",
  },
  //noGroup:ESS A3-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essA303Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essA303Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 23 - 20 },
    type: "custom",
  },
  //noGroup:ESS A3-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essA304Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essA304Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 23 - 20 },
    type: "custom",
  },
  //noGroup:PCS A3-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsA3-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsA3-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 23 - 20 },
    type: "custom",
  },
  //noGroup:PCS A3-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsA3-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsA3-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 23 - 20 },
    type: "custom",
  },
  //noGroup:ESS B1-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essB101Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essB101Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 31 - 120 },
    type: "custom",
  },
  //noGroup:ESS B1-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essB102Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essB102Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 31 - 120 },
    type: "custom",
  },
  //noGroup:ESS B1-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essB103Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essB103Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 31 - 120 },
    type: "custom",
  },
  //noGroup:ESS B1-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essB104Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essB104Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 31 - 120 },
    type: "custom",
  },
  //noGroup:PCS B1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsB1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsB1-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 31 - 120 },
    type: "custom",
  },
  //noGroup:PCS B1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsB1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsB1-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 31 - 120 },
    type: "custom",
  },
  //noGroup:ESS B2-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essB201Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essB201Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 33 - 220 },
    type: "custom",
  },
  //noGroup:ESS B2-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essB202Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essB202Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 33 - 220 },
    type: "custom",
  },
  //noGroup:ESS B2-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essB203Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essB203Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 33 - 220 },
    type: "custom",
  },
  //noGroup:ESS B2-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essB204Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essB204Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 33 - 220 },
    type: "custom",
  },
  //noGroup:PCS B2-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsB2-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsB2-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 33 - 220 },
    type: "custom",
  },
  //noGroup:PCS B2-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsB2-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsB2-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 33 - 220 },
    type: "custom",
  },
  //noGroup:ESS B3-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essB301Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essB301Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 40 - 20 },

    type: "custom",
  },
  //noGroup:ESS B3-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essB302Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essB302Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 40 - 20 },
    type: "custom",
  },
  //noGroup:ESS B3-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essB303Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essB303Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 40 - 20 },
    type: "custom",
  },
  //noGroup:ESS B3-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essB304Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essB304Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 40 - 20 },
    type: "custom",
  },
  //noGroup:PCS B3-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsB3-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsB3-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 40 - 20 },
    type: "custom",
  },
  //noGroup:PCS B3-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsB3-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsB3-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 40 - 20 },
    type: "custom",
  },
  //noGroup:ESS C1-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essC101Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essC101Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 42 - 120 },
    type: "custom",
  },
  //noGroup:ESS C1-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essC102Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essC102Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 42 - 120 },
    type: "custom",
  },
  //noGroup:ESS C1-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essC103Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essC103Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 42 - 120 },
    type: "custom",
  },
  //noGroup:ESS C1-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essC104Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essC104Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 42 - 120 },
    type: "custom",
  },
  //noGroup:PCS C1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsC1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsC1-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 42 - 120 },
    type: "custom",
  },
  //noGroup:PCS C1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsC1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsC1-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 42 - 120 },
    type: "custom",
  },
  //noGroup:ESS C2-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essC201Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essC201Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 44 - 220 },
    type: "custom",
  },
  //noGroup:ESS C2-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essC202Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essC202Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 44 - 220 },
    type: "custom",
  },
  //noGroup:ESS C2-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essC203Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essC203Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 44 - 220 },
    type: "custom",
  },
  //noGroup:ESS C2-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essC204Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essC204Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 44 - 220 },
    type: "custom",
  },
  //noGroup:PCS C2-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsC2-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsC2-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 44 - 220 },
    type: "custom",
  },
  //noGroup:PCS C2-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsC2-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsC2-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 44 - 220 },
    type: "custom",
  },
  //noGroup:ESS C3-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essC301Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essC301Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 51 - 20 },
    type: "custom",
  },
  //noGroup:ESS C3-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essC302Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essC302Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 51 - 20 },
    type: "custom",
  },
  //noGroup:ESS C3-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essC303Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essC303Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 51 - 20 },
    type: "custom",
  },
  //noGroup:ESS C3-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essC304Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essC304Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 51 - 20 },
    type: "custom",
  },
  //noGroup:PCS C3-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsC3-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsC3-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 51 - 20 },
    type: "custom",
  },
  //noGroup:PCS C3-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsC3-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsC3-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 51 - 20 },
    type: "custom",
  },
  //noGroup:ESS D1-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essD101Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essD101Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 53 - 120 },
    type: "custom",
  },
  //noGroup:ESS D1-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essD102Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essD102Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 53 - 120 },
    type: "custom",
  },
  //noGroup:ESS D1-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essD103Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essD103Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 53 - 120 },
    type: "custom",
  },
  //noGroup:ESS D1-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essD104Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essD104Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 53 - 120 },
    type: "custom",
  },
  //noGroup:PCS D1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsD1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsD1-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 53 - 120 },
    type: "custom",
  },
  //noGroup:PCS D1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsD1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsD1-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 53 - 120 },
    type: "custom",
  },
  //noGroup:ESS D2-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essD201Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essD201Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 55 - 220 },
    type: "custom",
  },
  //noGroup:ESS D2-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essD202Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essD202Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 55 - 220 },
    type: "custom",
  },
  //noGroup:ESS D2-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essD203Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essD203Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 55 - 220 },
    type: "custom",
  },
  //noGroup:ESS D2-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essD204Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essD204Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 55 - 220 },
    type: "custom",
  },
  //noGroup:PCS D2-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsD2-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsD2-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 55 - 220 },
    type: "custom",
  },
  //noGroup:PCS D2-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsD2-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsD2-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 55 - 220 },
    type: "custom",
  },
  //noGroup:ESS D3-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essD301Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essD301Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 62 - 20 },
    type: "custom",
  },
  //noGroup:ESS D3-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essD302Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essD302Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 62 - 20 },
    type: "custom",
  },
  //noGroup:ESS D3-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essD303Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essD303Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 62 - 20 },
    type: "custom",
  },
  //noGroup:ESS D3-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essD304Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essD304Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 62 - 20 },
    type: "custom",
  },
  //noGroup:PCS D3-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsD3-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsD3-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 62 - 20 },
    type: "custom",
  },
  //noGroup:PCS D3-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsD3-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsD3-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 62 - 20 },
    type: "custom",
  },
  //noGroup:ESS E1-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essE101Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essE101Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 64 - 120 },
    type: "custom",
  },
  //noGroup:ESS E1-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essE102Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essE102Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 64 - 120 },
    type: "custom",
  },
  //noGroup:ESS E1-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essE103Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essE103Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 64 - 120 },
    type: "custom",
  },
  //noGroup:ESS E1-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essE104Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essE104Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 64 - 120 },
    type: "custom",
  },
  //noGroup:PCS E1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsE1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsE1-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 64 - 120 },
    type: "custom",
  },
  //noGroup:PCS E1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsE1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsE1-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 64 - 120 },
    type: "custom",
  },
  //noGroup:ESS E2-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essE201Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essE201Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 66 - 220 },
    type: "custom",
  },
  //noGroup:ESS E2-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essE202Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essE202Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 66 - 220 },
    type: "custom",
  },
  //noGroup:ESS E2-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essE203Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essE203Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 66 - 220 },
    type: "custom",
  },
  //noGroup:ESS E2-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essE204Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essE204Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 66 - 220 },
    type: "custom",
  },
  //noGroup:PCS E2-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsE2-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsE2-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 66 - 220 },
    type: "custom",
  },
  //noGroup:PCS E2-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsE2-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsE2-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 66 - 220 },
    type: "custom",
  },
  //noGroup:ESS F1-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essF101Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essF101Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 73 - 20 },
    type: "custom",
  },
  //noGroup:ESS F1-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essF102Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essF102Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 73 - 20 },
    type: "custom",
  },
  //noGroup:ESS F1-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essF103Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essF103Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 73 - 20 },
    type: "custom",
  },
  //noGroup:ESS F1-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essF104Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essF104Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 73 - 20 },
    type: "custom",
  },
  //noGroup:PCS F1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsF1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsF1-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 73 - 20 },
    type: "custom",
  },
  //noGroup:PCS F1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsF1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsF1-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 73 - 20 },
    type: "custom",
  },
  //noGroup:ESS F2-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essF201Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essF201Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 75 - 120 },
    type: "custom",
  },
  //noGroup:ESS F2-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essF202Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essF202Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 75 - 120 },
    type: "custom",
  },
  //noGroup:ESS F2-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essF203Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essF203Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 75 - 120 },
    type: "custom",
  },
  //noGroup:ESS F2-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essF204Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essF204Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 75 - 120 },
    type: "custom",
  },
  //noGroup:PCS F2-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsF2-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsF2-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 75 - 120 },
    type: "custom",
  },
  //noGroup:PCS F2-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsF2-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsF2-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 75 - 120 },
    type: "custom",
  },
  //noGroup:ESS F3-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essF301Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essF301Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 77 - 220 },
    type: "custom",
  },
  //noGroup:ESS F3-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essF302Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essF302Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 77 - 220 },
    type: "custom",
  },
  //noGroup:ESS F3-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essF303Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essF303Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 77 - 220 },
    type: "custom",
  },
  //noGroup:ESS F3-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essF304Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essF304Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 77 - 220 },
    type: "custom",
  },
  //noGroup:PCS F3-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsF3-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsF3-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 77 - 220 },
    type: "custom",
  },
  //noGroup:PCS F3-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsF3-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsF3-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 77 - 220 },
    type: "custom",
  },
  //noGroup:ESS G1-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essG101Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essG101Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 78 - 20 },
    type: "custom",
  },
  //noGroup:ESS G1-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essG102Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essG102Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 78 - 20 },
    type: "custom",
  },
  //noGroup:ESS G1-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essG103Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essG103Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 78 - 20 },
    type: "custom",
  },
  //noGroup:ESS G1-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essG104Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essG104Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 78 - 20 },
    type: "custom",
  },
  //noGroup:PCS G1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsG1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsG1-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 78 - 20 },
    type: "custom",
  },
  //noGroup:PCS G1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsG1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsG1-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 78 - 20 },
    type: "custom",
  },
  //noGroup:ESS G2-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essG201Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essG201Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 86 - 120 },
    type: "custom",
  },
  //noGroup:ESS G2-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essG202Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essG202Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 86 - 120 },
    type: "custom",
  },
  //noGroup:ESS G2-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essG203Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essG203Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 86 - 120 },
    type: "custom",
  },
  //noGroup:ESS G2-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essG204Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essG204Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 86 - 120 },
    type: "custom",
  },
  //noGroup:PCS G2-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsG2-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsG2-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 86 - 120 },
    type: "custom",
  },
  //noGroup:PCS G2-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsG2-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsG2-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 86 - 120 },
    type: "custom",
  },
  //noGroup:ESS G3-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essG301Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essG301Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 88 - 220 },
    type: "custom",
  },
  //noGroup:ESS G3-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essG302Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essG302Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 88 - 220 },
    type: "custom",
  },
  //noGroup:ESS G3-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essG303Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essG303Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 88 - 220 },
    type: "custom",
  },
  //noGroup:ESS G3-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essG304Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essG304Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 88 - 220 },
    type: "custom",
  },
  //noGroup:PCS G3-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsG3-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsG3-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 88 - 220 },
    type: "custom",
  },
  //noGroup:PCS G3-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsG3-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsG3-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 88 - 220 },
    type: "custom",
  },
  //noGroup:ESS H1-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essH101Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essH101Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 89 - 20 },
    type: "custom",
  },
  //noGroup:ESS H1-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essH102Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essH102Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 89 - 20 },
    type: "custom",
  },
  //noGroup:ESS H1-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essH103Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essH103Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 89 - 20 },
    type: "custom",
  },
  //noGroup:ESS H1-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essH104Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essH104Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 89 - 20 },
    type: "custom",
  },
  //noGroup:PCS H1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsH1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsH1-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 89 - 20 },
    type: "custom",
  },
  //noGroup:PCS H1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsH1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsH1-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 89 - 20 },
    type: "custom",
  },
  //noGroup:ESS H2-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essH201Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essH201Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 91 - 120 },
    type: "custom",
  },
  //noGroup:ESS H2-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essH202Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essH202Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 91 - 120 },
    type: "custom",
  },
  //noGroup:ESS H2-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essH203Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essH203Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 91 - 120 },
    type: "custom",
  },
  //noGroup:ESS H2-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essH204Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essH204Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 91 - 120 },
    type: "custom",
  },
  //noGroup:PCS H2-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsH2-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsH2-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 91 - 120 },
    type: "custom",
  },
  //noGroup:PCS H2-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsH2-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsH2-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 91 - 120 },
    type: "custom",
  },
  //noGroup:ESS H3-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essH301Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essH301Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 99 - 220 },
    type: "custom",
  },
  //noGroup:ESS H3-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essH302Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essH302Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 99 - 220 },
    type: "custom",
  },
  //noGroup:ESS H3-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essH303Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essH303Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 99 - 220 },
    type: "custom",
  },
  //noGroup:ESS H3-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essH304Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essH304Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 99 - 220 },
    type: "custom",
  },
  //noGroup:PCS H3-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsH3-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsH3-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 99 - 220 },
    type: "custom",
  },
  //noGroup:PCS H3-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsH3-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsH3-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 99 - 220 },
    type: "custom",
  },
  //noGroup:ESS I1-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essI101Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essI101Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 100 - 20 },
    type: "custom",
  },
  //noGroup:ESS I1-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essI102Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essI102Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 100 - 20 },
    type: "custom",
  },
  //noGroup:ESS I1-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essI103Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essI103Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 100 - 20 },
    type: "custom",
  },
  //noGroup:ESS I1-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essI104Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essI104Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 100 - 20 },
    type: "custom",
  },
  //noGroup:PCS I1-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsI1-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsI1-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 100 - 20 },
    type: "custom",
  },
  //noGroup:PCS I1-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsI1-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsI1-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 100 - 20 },
    type: "custom",
  },
  //noGroup:ESS I2-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essI201Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essI201Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 102 - 120 },
    type: "custom",
  },
  //noGroup:ESS I2-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essI202Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essI202Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 102 - 120 },
    type: "custom",
  },
  //noGroup:ESS I2-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essI203Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essI203Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 102 - 120 },
    type: "custom",
  },
  //noGroup:ESS I2-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essI204Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essI204Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 102 - 120 },
    type: "custom",
  },
  //noGroup:PCS I2-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsI2-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsI2-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 102 - 120 },
    type: "custom",
  },
  //noGroup:PCS I2-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsI2-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsI2-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 102 - 120 },
    type: "custom",
  },
  //noGroup:ESS I3-01 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essI301Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essI301Bsp.id,
    position: { x: nodeGap * 7 + 100, y: nodeGap * 104 - 220 },
    type: "custom",
  },
  //noGroup:ESS I3-02 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essI302Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essI302Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap, y: nodeGap * 104 - 220 },
    type: "custom",
  },
  //noGroup:ESS I3-03 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essI303Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essI303Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 2, y: nodeGap * 104 - 220 },
    type: "custom",
  },
  //noGroup:ESS I3-04 BSP
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting.essI304Bsp.name}
          labelStyle={{
            lineHeight: "1.5rem",
            top: "-60px",
            left: "50%",
            whiteSpace: "pre",
          }}
        >
          <div className="rect-icon bg-ess"></div>
        </NodeLabel>
      ),
      handles: { source: [{ dir: "right" }], target: [{ dir: "left" }] },
    },
    id: nodeSetting.essI304Bsp.id,
    position: { x: nodeGap * 7 + 100 + nodeGap * 3, y: nodeGap * 104 - 220 },
    type: "custom",
  },
  //noGroup:PCS I3-1
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsI3-1"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsI3-1"].id,
    position: { x: nodeGap * 12 - 162, y: nodeGap * 104 - 220 },
    type: "custom",
  },
  //noGroup:PCS I3-2
  {
    data: {
      label: (
        <NodeLabel
          label={nodeSetting["pcsI3-2"].name}
          labelStyle={{ left: "50%", whiteSpace: "nowrap" }}
        >
          <div className="rect-icon bg-pcs"></div>
        </NodeLabel>
      ),
      handles: { target: [{ dir: "left" }] },
    },
    id: nodeSetting["pcsI3-2"].id,
    position: { x: nodeGap * 12 - 21, y: nodeGap * 104 - 220 },
    type: "custom",
  },
];
//線路初始值設定
const initialEdges = [
  {
    //noGroup:ESS A1-01 BSP->ESS A1-02 BSP
    id: edgeSetting["noGroup:essA101Bsp-noGroup:essA102Bsp"].id,
    source: nodeSetting.essA101Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essA102Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS A1-02 BSP->ESS A1-03 BSP
    id: edgeSetting["noGroup:essA102Bsp-noGroup:essA103Bsp"].id,
    source: nodeSetting.essA102Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essA103Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS A1-03 BSP->ESS A1-04 BSP
    id: edgeSetting["noGroup:essA103Bsp-noGroup:essA104Bsp"].id,
    source: nodeSetting.essA103Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essA104Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS A1-04 BSP->PCS A1-1
    id: edgeSetting["noGroup:essA104Bsp-noGroup:pcsA1-1"].id,
    source: nodeSetting.essA104Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsA1-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS A2-01 BSP->ESS A2-02 BSP
    id: edgeSetting["noGroup:essA201Bsp-noGroup:essA202Bsp"].id,
    source: nodeSetting.essA201Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essA202Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS A2-02 BSP->ESS A2-03 BSP
    id: edgeSetting["noGroup:essA202Bsp-noGroup:essA203Bsp"].id,
    source: nodeSetting.essA202Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essA203Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS A2-03 BSP->ESS A2-04 BSP
    id: edgeSetting["noGroup:essA203Bsp-noGroup:essA204Bsp"].id,
    source: nodeSetting.essA203Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essA204Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS A2-04 BSP->PCS A2-1
    id: edgeSetting["noGroup:essA204Bsp-noGroup:pcsA2-1"].id,
    source: nodeSetting.essA204Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsA2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS A3-01 BSP->ESS A3-02 BSP
    id: edgeSetting["noGroup:essA301Bsp-noGroup:essA302Bsp"].id,
    source: nodeSetting.essA301Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essA302Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS A3-02 BSP->ESS A3-03 BSP
    id: edgeSetting["noGroup:essA302Bsp-noGroup:essA303Bsp"].id,
    source: nodeSetting.essA302Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essA303Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS A3-03 BSP->ESS A3-04 BSP
    id: edgeSetting["noGroup:essA303Bsp-noGroup:essA304Bsp"].id,
    source: nodeSetting.essA303Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essA304Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS A3-04 BSP->PCS A3-1
    id: edgeSetting["noGroup:essA304Bsp-noGroup:pcsA3-1"].id,
    source: nodeSetting.essA304Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsA3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS B1-01 BSP->ESS B1-02 BSP
    id: edgeSetting["noGroup:essB101Bsp-noGroup:essB102Bsp"].id,
    source: nodeSetting.essB101Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essB102Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS B1-02 BSP->ESS B1-03 BSP
    id: edgeSetting["noGroup:essB102Bsp-noGroup:essB103Bsp"].id,
    source: nodeSetting.essB102Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essB103Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS B1-03 BSP->ESS B1-04 BSP
    id: edgeSetting["noGroup:essB103Bsp-noGroup:essB104Bsp"].id,
    source: nodeSetting.essB103Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essB104Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS B1-04 BSP->PCS B1-1
    id: edgeSetting["noGroup:essB104Bsp-noGroup:pcsB1-1"].id,
    source: nodeSetting.essB104Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsB1-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS B2-01 BSP->ESS B2-02 BSP
    id: edgeSetting["noGroup:essB201Bsp-noGroup:essB202Bsp"].id,
    source: nodeSetting.essB201Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essB202Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS B2-02 BSP->ESS B2-03 BSP
    id: edgeSetting["noGroup:essB202Bsp-noGroup:essB203Bsp"].id,
    source: nodeSetting.essB202Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essB203Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS B2-03 BSP->ESS B2-04 BSP
    id: edgeSetting["noGroup:essB203Bsp-noGroup:essB204Bsp"].id,
    source: nodeSetting.essB203Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essB204Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS B2-04 BSP->PCS B2-1
    id: edgeSetting["noGroup:essB204Bsp-noGroup:pcsB2-1"].id,
    source: nodeSetting.essB204Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsB2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS B3-01 BSP->ESS B3-02 BSP
    id: edgeSetting["noGroup:essB301Bsp-noGroup:essB302Bsp"].id,
    source: nodeSetting.essB301Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essB302Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS B3-02 BSP->ESS B3-03 BSP
    id: edgeSetting["noGroup:essB302Bsp-noGroup:essB303Bsp"].id,
    source: nodeSetting.essB302Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essB303Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS B3-03 BSP->ESS B3-04 BSP
    id: edgeSetting["noGroup:essB303Bsp-noGroup:essB304Bsp"].id,
    source: nodeSetting.essB303Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essB304Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS B3-04 BSP->PCS B3-1
    id: edgeSetting["noGroup:essB304Bsp-noGroup:pcsB3-1"].id,
    source: nodeSetting.essB304Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsB3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS C1-01 BSP->ESS C1-02 BSP
    id: edgeSetting["noGroup:essC101Bsp-noGroup:essC102Bsp"].id,
    source: nodeSetting.essC101Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essC102Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS C1-02 BSP->ESS C1-03 BSP
    id: edgeSetting["noGroup:essC102Bsp-noGroup:essC103Bsp"].id,
    source: nodeSetting.essC102Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essC103Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS C1-03 BSP->ESS C1-04 BSP
    id: edgeSetting["noGroup:essC103Bsp-noGroup:essC104Bsp"].id,
    source: nodeSetting.essC103Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essC104Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS C1-04 BSP->PCS C1-1
    id: edgeSetting["noGroup:essC104Bsp-noGroup:pcsC1-1"].id,
    source: nodeSetting.essC104Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsC1-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS C2-01 BSP->ESS C2-02 BSP
    id: edgeSetting["noGroup:essC201Bsp-noGroup:essC202Bsp"].id,
    source: nodeSetting.essC201Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essC202Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS C2-02 BSP->ESS C2-03 BSP
    id: edgeSetting["noGroup:essC202Bsp-noGroup:essC203Bsp"].id,
    source: nodeSetting.essC202Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essC203Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS C2-03 BSP->ESS C2-04 BSP
    id: edgeSetting["noGroup:essC203Bsp-noGroup:essC204Bsp"].id,
    source: nodeSetting.essC203Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essC204Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS C2-04 BSP->PCS C2-1
    id: edgeSetting["noGroup:essC204Bsp-noGroup:pcsC2-1"].id,
    source: nodeSetting.essC204Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsC2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS C3-01 BSP->ESS C3-02 BSP
    id: edgeSetting["noGroup:essC301Bsp-noGroup:essC302Bsp"].id,
    source: nodeSetting.essC301Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essC302Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS C3-02 BSP->ESS C3-03 BSP
    id: edgeSetting["noGroup:essC302Bsp-noGroup:essC303Bsp"].id,
    source: nodeSetting.essC302Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essC303Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS C3-03 BSP->ESS C3-04 BSP
    id: edgeSetting["noGroup:essC303Bsp-noGroup:essC304Bsp"].id,
    source: nodeSetting.essC303Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essC304Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS C3-04 BSP->PCS C3-1
    id: edgeSetting["noGroup:essC304Bsp-noGroup:pcsC3-1"].id,
    source: nodeSetting.essC304Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsC3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS D1-01 BSP->ESS D1-02 BSP
    id: edgeSetting["noGroup:essD101Bsp-noGroup:essD102Bsp"].id,
    source: nodeSetting.essD101Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essD102Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS D1-02 BSP->ESS D1-03 BSP
    id: edgeSetting["noGroup:essD102Bsp-noGroup:essD103Bsp"].id,
    source: nodeSetting.essD102Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essD103Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS D1-03 BSP->ESS D1-04 BSP
    id: edgeSetting["noGroup:essD103Bsp-noGroup:essD104Bsp"].id,
    source: nodeSetting.essD103Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essD104Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS D1-04 BSP->PCS D1-1
    id: edgeSetting["noGroup:essD104Bsp-noGroup:pcsD1-1"].id,
    source: nodeSetting.essD104Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsD1-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS D2-01 BSP->ESS D2-02 BSP
    id: edgeSetting["noGroup:essD201Bsp-noGroup:essD202Bsp"].id,
    source: nodeSetting.essD201Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essD202Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS D2-02 BSP->ESS D2-03 BSP
    id: edgeSetting["noGroup:essD202Bsp-noGroup:essD203Bsp"].id,
    source: nodeSetting.essD202Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essD203Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS D2-03 BSP->ESS D2-04 BSP
    id: edgeSetting["noGroup:essD203Bsp-noGroup:essD204Bsp"].id,
    source: nodeSetting.essD203Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essD204Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS D2-04 BSP->PCS D2-1
    id: edgeSetting["noGroup:essD204Bsp-noGroup:pcsD2-1"].id,
    source: nodeSetting.essD204Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsD2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS D3-01 BSP->ESS D3-02 BSP
    id: edgeSetting["noGroup:essD301Bsp-noGroup:essD302Bsp"].id,
    source: nodeSetting.essD301Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essD302Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS D3-02 BSP->ESS D3-03 BSP
    id: edgeSetting["noGroup:essD302Bsp-noGroup:essD303Bsp"].id,
    source: nodeSetting.essD302Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essD303Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS D3-03 BSP->ESS D3-04 BSP
    id: edgeSetting["noGroup:essD303Bsp-noGroup:essD304Bsp"].id,
    source: nodeSetting.essD303Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essD304Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS D3-04 BSP->PCS D3-1
    id: edgeSetting["noGroup:essD304Bsp-noGroup:pcsD3-1"].id,
    source: nodeSetting.essD304Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsD3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS E1-01 BSP->ESS E1-02 BSP
    id: edgeSetting["noGroup:essE101Bsp-noGroup:essE102Bsp"].id,
    source: nodeSetting.essE101Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essE102Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS E1-02 BSP->ESS E1-03 BSP
    id: edgeSetting["noGroup:essE102Bsp-noGroup:essE103Bsp"].id,
    source: nodeSetting.essE102Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essE103Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS E1-03 BSP->ESS E1-04 BSP
    id: edgeSetting["noGroup:essE103Bsp-noGroup:essE104Bsp"].id,
    source: nodeSetting.essE103Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essE104Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS E1-04 BSP->PCS E1-1
    id: edgeSetting["noGroup:essE104Bsp-noGroup:pcsE1-1"].id,
    source: nodeSetting.essE104Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsE1-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS E2-01 BSP->ESS E2-02 BSP
    id: edgeSetting["noGroup:essE201Bsp-noGroup:essE202Bsp"].id,
    source: nodeSetting.essE201Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essE202Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS E2-02 BSP->ESS E2-03 BSP
    id: edgeSetting["noGroup:essE202Bsp-noGroup:essE203Bsp"].id,
    source: nodeSetting.essE202Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essE203Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS E2-03 BSP->ESS E2-04 BSP
    id: edgeSetting["noGroup:essE203Bsp-noGroup:essE204Bsp"].id,
    source: nodeSetting.essE203Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essE204Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS E2-04 BSP->PCS E2-1
    id: edgeSetting["noGroup:essE204Bsp-noGroup:pcsE2-1"].id,
    source: nodeSetting.essE204Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsE2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS F1-01 BSP->ESS F1-02 BSP
    id: edgeSetting["noGroup:essF101Bsp-noGroup:essF102Bsp"].id,
    source: nodeSetting.essF101Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essF102Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS F1-02 BSP->ESS F1-03 BSP
    id: edgeSetting["noGroup:essF102Bsp-noGroup:essF103Bsp"].id,
    source: nodeSetting.essF102Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essF103Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS F1-03 BSP->ESS F1-04 BSP
    id: edgeSetting["noGroup:essF103Bsp-noGroup:essF104Bsp"].id,
    source: nodeSetting.essF103Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essF104Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS F1-04 BSP->PCS F1-1
    id: edgeSetting["noGroup:essF104Bsp-noGroup:pcsF1-1"].id,
    source: nodeSetting.essF104Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsF1-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS F2-01 BSP->ESS F2-02 BSP
    id: edgeSetting["noGroup:essF201Bsp-noGroup:essF202Bsp"].id,
    source: nodeSetting.essF201Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essF202Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS F2-02 BSP->ESS F2-03 BSP
    id: edgeSetting["noGroup:essF202Bsp-noGroup:essF203Bsp"].id,
    source: nodeSetting.essF202Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essF203Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS F2-03 BSP->ESS F2-04 BSP
    id: edgeSetting["noGroup:essF203Bsp-noGroup:essF204Bsp"].id,
    source: nodeSetting.essF203Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essF204Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS F2-04 BSP->PCS F2-1
    id: edgeSetting["noGroup:essF204Bsp-noGroup:pcsF2-1"].id,
    source: nodeSetting.essF204Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsF2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS F3-01 BSP->ESS F3-02 BSP
    id: edgeSetting["noGroup:essF301Bsp-noGroup:essF302Bsp"].id,
    source: nodeSetting.essF301Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essF302Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS F3-02 BSP->ESS F3-03 BSP
    id: edgeSetting["noGroup:essF302Bsp-noGroup:essF303Bsp"].id,
    source: nodeSetting.essF302Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essF303Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS F3-03 BSP->ESS F3-04 BSP
    id: edgeSetting["noGroup:essF303Bsp-noGroup:essF304Bsp"].id,
    source: nodeSetting.essF303Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essF304Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS F3-04 BSP->PCS F3-1
    id: edgeSetting["noGroup:essF304Bsp-noGroup:pcsF3-1"].id,
    source: nodeSetting.essF304Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsF3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS G1-01 BSP->ESS G1-02 BSP
    id: edgeSetting["noGroup:essG101Bsp-noGroup:essG102Bsp"].id,
    source: nodeSetting.essG101Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essG102Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS G1-02 BSP->ESS G1-03 BSP
    id: edgeSetting["noGroup:essG102Bsp-noGroup:essG103Bsp"].id,
    source: nodeSetting.essG102Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essG103Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS G1-03 BSP->ESS G1-04 BSP
    id: edgeSetting["noGroup:essG103Bsp-noGroup:essG104Bsp"].id,
    source: nodeSetting.essG103Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essG104Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS G1-04 BSP->PCS G1-1
    id: edgeSetting["noGroup:essG104Bsp-noGroup:pcsG1-1"].id,
    source: nodeSetting.essG104Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsG1-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS G2-01 BSP->ESS G2-02 BSP
    id: edgeSetting["noGroup:essG201Bsp-noGroup:essG202Bsp"].id,
    source: nodeSetting.essG201Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essG202Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS G2-02 BSP->ESS G2-03 BSP
    id: edgeSetting["noGroup:essG202Bsp-noGroup:essG203Bsp"].id,
    source: nodeSetting.essG202Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essG203Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS G2-03 BSP->ESS G2-04 BSP
    id: edgeSetting["noGroup:essG203Bsp-noGroup:essG204Bsp"].id,
    source: nodeSetting.essG203Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essG204Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS G2-04 BSP->PCS G2-1
    id: edgeSetting["noGroup:essG204Bsp-noGroup:pcsG2-1"].id,
    source: nodeSetting.essG204Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsG2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS G3-01 BSP->ESS G3-02 BSP
    id: edgeSetting["noGroup:essG301Bsp-noGroup:essG302Bsp"].id,
    source: nodeSetting.essG301Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essG302Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS G3-02 BSP->ESS G3-03 BSP
    id: edgeSetting["noGroup:essG302Bsp-noGroup:essG303Bsp"].id,
    source: nodeSetting.essG302Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essG303Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS G3-03 BSP->ESS G3-04 BSP
    id: edgeSetting["noGroup:essG303Bsp-noGroup:essG304Bsp"].id,
    source: nodeSetting.essG303Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essG304Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS G3-04 BSP->PCS G3-1
    id: edgeSetting["noGroup:essG304Bsp-noGroup:pcsG3-1"].id,
    source: nodeSetting.essG304Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsG3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS H1-01 BSP->ESS H1-02 BSP
    id: edgeSetting["noGroup:essH101Bsp-noGroup:essH102Bsp"].id,
    source: nodeSetting.essH101Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essH102Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS H1-02 BSP->ESS H1-03 BSP
    id: edgeSetting["noGroup:essH102Bsp-noGroup:essH103Bsp"].id,
    source: nodeSetting.essH102Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essH103Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS H1-03 BSP->ESS H1-04 BSP
    id: edgeSetting["noGroup:essH103Bsp-noGroup:essH104Bsp"].id,
    source: nodeSetting.essH103Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essH104Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS H1-04 BSP->PCS H1-1
    id: edgeSetting["noGroup:essH104Bsp-noGroup:pcsH1-1"].id,
    source: nodeSetting.essH104Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsH1-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS H2-01 BSP->ESS H2-02 BSP
    id: edgeSetting["noGroup:essH201Bsp-noGroup:essH202Bsp"].id,
    source: nodeSetting.essH201Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essH202Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS H2-02 BSP->ESS H2-03 BSP
    id: edgeSetting["noGroup:essH202Bsp-noGroup:essH203Bsp"].id,
    source: nodeSetting.essH202Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essH203Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS H2-03 BSP->ESS H2-04 BSP
    id: edgeSetting["noGroup:essH203Bsp-noGroup:essH204Bsp"].id,
    source: nodeSetting.essH203Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essH204Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS H2-04 BSP->PCS H2-1
    id: edgeSetting["noGroup:essH204Bsp-noGroup:pcsH2-1"].id,
    source: nodeSetting.essH204Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsH2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS H3-01 BSP->ESS H3-02 BSP
    id: edgeSetting["noGroup:essH301Bsp-noGroup:essH302Bsp"].id,
    source: nodeSetting.essH301Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essH302Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS H3-02 BSP->ESS H3-03 BSP
    id: edgeSetting["noGroup:essH302Bsp-noGroup:essH303Bsp"].id,
    source: nodeSetting.essH302Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essH303Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS H3-03 BSP->ESS H3-04 BSP
    id: edgeSetting["noGroup:essH303Bsp-noGroup:essH304Bsp"].id,
    source: nodeSetting.essH303Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essH304Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS H3-04 BSP->PCS H3-1
    id: edgeSetting["noGroup:essH304Bsp-noGroup:pcsH3-1"].id,
    source: nodeSetting.essH304Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsH3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS I1-01 BSP->ESS I1-02 BSP
    id: edgeSetting["noGroup:essI101Bsp-noGroup:essI102Bsp"].id,
    source: nodeSetting.essI101Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essI102Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS I1-02 BSP->ESS I1-03 BSP
    id: edgeSetting["noGroup:essI102Bsp-noGroup:essI103Bsp"].id,
    source: nodeSetting.essI102Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essI103Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS I1-03 BSP->ESS I1-04 BSP
    id: edgeSetting["noGroup:essI103Bsp-noGroup:essI104Bsp"].id,
    source: nodeSetting.essI103Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essI104Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS I1-04 BSP->PCS I1-1
    id: edgeSetting["noGroup:essI104Bsp-noGroup:pcsI1-1"].id,
    source: nodeSetting.essI104Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsI1-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS I2-01 BSP->ESS I2-02 BSP
    id: edgeSetting["noGroup:essI201Bsp-noGroup:essI202Bsp"].id,
    source: nodeSetting.essI201Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essI202Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS I2-02 BSP->ESS I2-03 BSP
    id: edgeSetting["noGroup:essI202Bsp-noGroup:essI203Bsp"].id,
    source: nodeSetting.essI202Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essI203Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS I2-03 BSP->ESS I2-04 BSP
    id: edgeSetting["noGroup:essI203Bsp-noGroup:essI204Bsp"].id,
    source: nodeSetting.essI203Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essI204Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS I2-04 BSP->PCS I2-1
    id: edgeSetting["noGroup:essI204Bsp-noGroup:pcsI2-1"].id,
    source: nodeSetting.essI204Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsI2-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS I3-01 BSP->ESS I3-02 BSP
    id: edgeSetting["noGroup:essI301Bsp-noGroup:essI302Bsp"].id,
    source: nodeSetting.essI301Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essI302Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS I3-02 BSP->ESS I3-03 BSP
    id: edgeSetting["noGroup:essI302Bsp-noGroup:essI303Bsp"].id,
    source: nodeSetting.essI302Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essI303Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS I3-03 BSP->ESS I3-04 BSP
    id: edgeSetting["noGroup:essI303Bsp-noGroup:essI304Bsp"].id,
    source: nodeSetting.essI303Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting.essI304Bsp.id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
  {
    //noGroup:ESS I3-04 BSP->PCS I3-1
    id: edgeSetting["noGroup:essI304Bsp-noGroup:pcsI3-1"].id,
    source: nodeSetting.essI304Bsp.id,
    sourceHandle: "source-right-0", //index是表示node的設定中handles.source:{dir:right}是陣列第幾位
    style: { stroke: edgeColor.green, strokeWidth: 3 },
    target: nodeSetting["pcsI3-1"].id,
    targetHandle: "target-left-0", //index是表示node的設定中handles.target:{dir:left}是陣列第幾位
    type: "custom",
  },
];

export default { edgeSetting, initialEdges, initialNodes, nodeSetting };
