import { Card, Flex, Grid } from "antd";
import { Icon } from "@iconify/react";
import ScopeStyle from "./indexStyle";

function MonthlyStatisticsOverview() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  return (
    <ScopeStyle>
      <div className="section-title">
        <h2>當年統計總覽</h2>
        <Flex align="center" className="excel-download" gap={8}>
          <Icon icon="vscode-icons:file-type-excel" fontSize={36} />
          <span>Download</span>
        </Flex>
      </div>
      <Flex gap={16} wrap={!screens.lg}>
        <Flex className="winning-volume" gap={16} vertical={screens.lg}>
          <Card>
            <span className="content">9.99</span>
            <span className="title">當月平均得標量(MW)</span>
          </Card>
          <Card>
            <span className="content">741.00</span>
            <span className="title">總得標量(MW)</span>
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
              <span className="content">0.0</span>
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
              <span className="title">總放電 (kWh)</span>
            </Card>
            <Card>
              <span className="content">455.00</span>
              <span className="title">NET (kWh)</span>
            </Card>
            <Card>
              <span className="content">1.87</span>
              <span className="title">當日Cycle統計 (%)</span>
            </Card>
          </Flex>
          <Flex className="data-info-row light" gap={16}>
            <Card>
              <span className="content">530.00</span>
              <span className="title">充電移轉量 (kW)</span>
            </Card>
            <Card>
              <span className="content">-114.44</span>
              <span className="title">放電移轉量 (kW)</span>
            </Card>
            <Card>
              <span className="content">20.00</span>
              <span className="title">中止時數 (Mins)</span>
            </Card>
            <Card>
              <span className="content">0.00</span>
              <span className="title">中止容量(MW)</span>
            </Card>
          </Flex>
          <Flex className="data-info-row" gap={16}>
            <Card>
              <span className="content">0.85</span>
              <span className="title">當月Cycle Max (%)</span>
            </Card>
            <Card>
              <span className="content">0.84</span>
              <span className="title">當月Cycle Avg (%)</span>
            </Card>
            <Card>
              <span className="content">0.80</span>
              <span className="title">當月Cycle Min (%)</span>
            </Card>
            <Card></Card>
          </Flex>
        </Flex>
      </Flex>
    </ScopeStyle>
  );
}

export default MonthlyStatisticsOverview;
