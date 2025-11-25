import { Col, Row } from "antd";
import SbspmChart from "./sbspmChart";
import ServiceQuality from "./serviceQuality";
import DailyStatisticsOverview from "./dailyStatisticsOverview";
import ElectricityUsage from "./electricityUsage";
import ScopeStyle from "./indexStyle";

function Diagram() {
  return (
    <ScopeStyle>
      <Row gutter={[16, 32]}>
        <Col sm={24} xxl={8}>
          {/* 服務品質指標 */}
          <ServiceQuality />
        </Col>
        <Col sm={24} xxl={16}>
          {/* 當日統計總覽 */}
          <DailyStatisticsOverview />
        </Col>
      </Row>
      <Row className="mg-t-50" gutter={[16, 32]}>
        <Col span={24}>
          {/* SBSPM chart */}
          <SbspmChart />
        </Col>
        <Col span={24}>
          {/* 用電量統計 */}
          <ElectricityUsage />
        </Col>
      </Row>
    </ScopeStyle>
  );
}

export default Diagram;
