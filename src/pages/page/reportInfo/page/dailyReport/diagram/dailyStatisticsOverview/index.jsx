import { Card, Flex, Grid } from "antd";
import { Icon } from "@iconify/react";
import ScopeStyle from "./indexStyle";

function DailyStatisticsOverview() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  return (
    <ScopeStyle>
      <div className="section-title">
        <h2>當日統計總覽</h2>
        <Flex align="center" className="excel-download" gap={8}>
          <Icon icon="vscode-icons:file-type-excel" fontSize={36} />
          <span>Download</span>
        </Flex>
      </div>
      <Flex gap={16} wrap={!screens.lg}>
        <Flex className="winning-volume" gap={16} vertical>
          <Card>
            <span className="content">10.00</span>
            <span className="title">今日得標量(MW)</span>
          </Card>
        </Flex>
        <Flex className="data-info" vertical gap={16}>
          <Flex className="data-info-row light" gap={16}>
            <Card>
              <span className="content">100.0</span>
              <span className="title">Max SBSPM (%)</span>
            </Card>
            <Card>
              <span className="content">96.1</span>
              <span className="title">Avg SBSPM (%)</span>
            </Card>
            <Card>
              <span className="content">91.0</span>
              <span className="title">Min SBSPM (%)</span>
            </Card>
            <Card></Card>
          </Flex>
          <Flex className="data-info-row" gap={16}>
            <Card>
              <span className="content">1805.00</span>
              <span className="title">總充電 (kWh)</span>
            </Card>
            <Card>
              <span className="content">1440.00</span>
              <span className="title">放電 (kWh)</span>
            </Card>
            <Card>
              <span className="content">365.0</span>
              <span className="title">NET (kWh)</span>
            </Card>
            <Card>
              <span className="content">0.84</span>
              <span className="title">當日Cycle統計 (%)</span>
            </Card>
          </Flex>
          <Flex className="data-info-row light" gap={16}>
            <Card>
              <span className="content">-24444</span>
              <span className="title">充電移轉量 (kW)</span>
            </Card>
            <Card>
              <span className="content">24000</span>
              <span className="title">放電移轉量 (kW)</span>
            </Card>
            <Card>
              <span className="content">60</span>
              <span className="title">中止時數 (Mins)</span>
            </Card>
            <Card>
              <span className="content">20</span>
              <span className="title">中止容量(MW)</span>
            </Card>
          </Flex>
        </Flex>
      </Flex>
    </ScopeStyle>
  );
}

export default DailyStatisticsOverview;
