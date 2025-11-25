import { Col, Row } from "antd";
import ElectricityUsage from "./electricityUsage";
import MonthlyWinningVolume from "./monthlyWinningVolume";
import MonthlyStatisticsOverview from "./monthlyStatisticsOverview";
import PowerProportion from "./powerProportion";
import ServiceQuality from "./serviceQuality";
import SbspmChart from "./sbspmChart";
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
          {/* 當月統計總覽 */}
          <MonthlyStatisticsOverview />
        </Col>
      </Row>
      <Row className="mg-t-50" gutter={[16, 32]}>
        <Col span={24}>
          {/* SBSPM chart */}
          <SbspmChart />
        </Col>
        <Col span={24}>
          {/* 每月得標量 */}
          <MonthlyWinningVolume />
        </Col>
        <Col span={24}>
          {/* 用電量統計 */}
          <ElectricityUsage />
        </Col>
        <Col span={24}>
          {/* 總輔電用電 */}
          <PowerProportion />
        </Col>
      </Row>
    </ScopeStyle>
  );
}

export default Diagram;
