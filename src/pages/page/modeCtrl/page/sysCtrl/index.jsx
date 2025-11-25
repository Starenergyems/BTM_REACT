import { Col, Grid, Row } from "antd";
import ScopeStyle from "./indexStyle";
import SystemInfo from "./systemInfo";
import ParameterSetting from "./parameterSetting";
import FrequencyAndPower from "./frequencyAndPower";
import EmergencyDispatch from "./emergencyDispatch";

function SysCtrl() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const contentBlockClassName = !screens.xxl && "mg-t-30";

  return (
    <ScopeStyle className="pd-t-50 pd-x-30">
      <Row gutter={[16, 16]}>
        <Col sm={24} xxl={12}>
          {/* 系統資訊 */}
          <SystemInfo mode="edit" />
        </Col>
        <Col sm={24} xxl={12}>
          {/* 緊急調度指令 */}
          <EmergencyDispatch className={contentBlockClassName} />
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="mg-t-10">
        <Col sm={24} xxl={12}>
          {/* 參數設定 */}
          <ParameterSetting className={contentBlockClassName} mode="edit" />
        </Col>
        <Col sm={24} xxl={12}>
          {/* 頻率功率圖 */}
          <FrequencyAndPower />
        </Col>
      </Row>
    </ScopeStyle>
  );
}

export default SysCtrl;
