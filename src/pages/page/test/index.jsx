import { useEffect, useMemo, useRef, useState } from "react";
import { Card, Flex, Segmented, Table } from "antd";
import { color } from "@/styles/variable/indexStyle";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";
import { customLegendNameMap } from "./indexConfig";
import { useEchartAutoResize } from "@/hooks/useEchartAutoResize";

function ServiceProduct () {
  const [mainState, setMainState] = useState({
    serviceProductStatus: "realTimeSpinningReserve",
    serviceProductTableData: [],
    isServiceProductTableLoading: false,
    serviceProductData: [],
  });
  const realTimeSpinningReservePowerRef = useRef(null);
  const realTimeSpinningReservePowerChartRef = useRef(null);
  useEchartAutoResize(
    realTimeSpinningReservePowerRef,
    realTimeSpinningReservePowerChartRef
  );
  const {
    customLegendOnClick,
    getServiceProductData,
    getSpmTableColumns,
    getRealTimeSpinningReservePowerOption,
    setRealTimeSpinningReservePowerChart,
  } = useHelpers({
    mainState,
    refs: {
      realTimeSpinningReservePowerRef,
      realTimeSpinningReservePowerChartRef,
    },
    setMainState,
  });
  const awardPowerOption = useMemo(
    () => getRealTimeSpinningReservePowerOption(),
    [getRealTimeSpinningReservePowerOption]
  );
  const customLegend = useMemo(() => {
    return Object.fromEntries(
      awardPowerOption.legend.data.map((key) => [key, true])
    );
  }, [awardPowerOption.legend.data]);

  //取得服務商品API資料
  useEffect(() => {
    getServiceProductData();
  }, [getServiceProductData, mainState.serviceProductStatus]);

  //服務商品繪製
  useEffect(() => {
    if (realTimeSpinningReservePowerRef.current) {
      const newOption = {
        ...awardPowerOption,
        series: JSON.parse(JSON.stringify(awardPowerOption.series)),
      };

      // cbl 數據 - 固定在 50
      const cblData = Array(609).fill(50);

      // contributionData 數據 - 波浪型
      const contributionData = Array(609).fill(0).map((_, index) => {
        const hour = index / 60; // 當前小時
        // 使用多個正弦波疊加創造自然波動
        const wave1 = Math.sin(hour * 0.5) * 9;        // 慢波浪，振幅 5
        const wave2 = Math.sin(hour * 1.2) * 3;        // 中波浪，振幅 3
        const wave3 = Math.sin(hour * 3) * 1.5;        // 快波浪，振幅 1.5
        const base = 42;                               // 基準線在 42

        return Math.max(35, Math.min(55, base + wave1 + wave2 + wave3));
      });


      // 計算差值數據 (cbl - realTimeSpinningReserve)
      const loadCurveData = cblData.map((cbl, index) => cbl - contributionData[index]);

      // 設定各系列數據
      newOption.series[0].data = cblData;
      newOption.series[1].data = contributionData;
      newOption.series[2].data = loadCurveData;

      setRealTimeSpinningReservePowerChart(newOption);
    }
  }, [awardPowerOption, setRealTimeSpinningReservePowerChart]);

  return (
    <ScopeStyle>
      <Flex
        align="center"
        className="section-header mg-t-30 pd-x-20 pd-y-10"
        justify="space-between"
      >
        <span>服務商品</span>
        <div className="real-time-spinning-reserve-segmented">
          <Segmented
            defaultValue={mainState.serviceProductStatus}
            options={[{ label: "即時備轉", value: "realTimeSpinningReserve" }]}
            onChange={(value) => {
              setMainState((prevState) => ({
                ...prevState,
                serviceProductStatus: value,
              }));
            }}
          />
        </div>
      </Flex>
      <Card className="mg-t-16">
        <div
          ref={realTimeSpinningReservePowerRef}
          className="revenue-sharing-bar-stack-chart"
        ></div>
      </Card>
      <Flex className="custom-legend mg-t-50-minus" gap={16} justify="center">
        {awardPowerOption.legend.data.map((item, index) => {
          return (
            <Flex
              align="center"
              className="custom-legend-item pd-x-10 pd-y-4"
              key={index}
              onClick={() =>
                customLegendOnClick(
                  item,
                  realTimeSpinningReservePowerChartRef.current
                )
              }
            >
              <span
                className="color-block mg-r-5"
                style={{
                  backgroundColor: customLegend[item]
                    ? awardPowerOption?.series?.[index]?.itemStyle?.color
                    : color.white,
                }}
              ></span>
              <span
                style={{
                  opacity: customLegend[item] ? 1 : 0.3,
                }}
              >
                {customLegendNameMap[item]}
              </span>
            </Flex>
          );
        })}
      </Flex>
      <Table
        className="theme-secondary mg-t-36"
        columns={getSpmTableColumns()}
        dataSource={mainState.serviceProductTableData}
        loading={mainState.isServiceProductTableLoading}
        pagination={false}
        rowClassName="custom-no-hover"
        rowKey="id"
        scroll={{
          x: "max-content",
        }}
      />
    </ScopeStyle>
  );
}

export default ServiceProduct;
