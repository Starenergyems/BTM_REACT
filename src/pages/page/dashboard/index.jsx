import { Col, Grid, Row } from "antd";
import AlertList from "./alertList";
import ParameterSetting from "./parameterSetting";
import FrequencyAndPower from "./frequencyAndPower";
import ScopeStyle from "./indexStyle";
import SystemInfo from "./systemInfo";

function Dashboard() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const contentBlockClassName = !screens.xxl && "mg-t-30";

  return (
    <ScopeStyle className="pd-t-50 pd-x-30">
      <Row gutter={[16, 16]}>
        <Col sm={24} xxl={12}>
          {/* 系統資訊 */}
          <SystemInfo />
        </Col>
        <Col sm={24} xxl={12}>
          {/* 告警列表 */}
          <AlertList className={contentBlockClassName} />
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="mg-t-10">
        <Col sm={24} xxl={12}>
          {/* 參數設定 */}
          <ParameterSetting className={contentBlockClassName} />
        </Col>
        <Col sm={24} xxl={12}>
          {/* 頻率功率圖 */}
          <FrequencyAndPower className={contentBlockClassName} />
        </Col>
      </Row>
    </ScopeStyle>
  );
}

export default Dashboard;
