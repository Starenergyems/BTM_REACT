import { Col, Row } from "antd";
import DailyWinningVolume from "./dailyWinningVolume";
import ElectricityUsage from "./electricityUsage";
import MonthlyStatisticsOverview from "./monthlyStatisticsOverview";
// import PowerProportion from "./powerProportion";
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
          {/* 每日得標量 */}
          <DailyWinningVolume />
        </Col>
        <Col span={24}>
          {/* 用電量統計 */}
          <ElectricityUsage />
        </Col>
        <Col span={24}>
          {/* 輔電用電占比統計 */}
          {/* 還在討論中(目前無參考價值)暫時不做 */}
          {/* <PowerProportion /> */}
        </Col>
      </Row>
    </ScopeStyle>
  );
}

export default Diagram;
