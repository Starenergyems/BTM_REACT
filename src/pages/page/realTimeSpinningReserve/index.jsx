import { useEffect, useMemo, useRef, useState } from "react";
import { Card, Flex, Segmented, Table } from "antd";
import { color } from "@/styles/variable/indexStyle";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";
import { customLegendNameMap } from "./indexConfig";
import { useEchartAutoResize } from "@/hooks/useEchartAutoResize";

function RealTimeSpinningReserve() {
  const [mainState, setMainState] = useState({
    awardData: {
      today: [],
      tomorrow: [],
    },
    awardStatus: "today",
    awardTableData: [],
    customLegend: {},
    isAwardTableLoading: false,
  });
  const revenueSharingRef = useRef(null);
  const revenueSharingChartRef = useRef(null);
  useEchartAutoResize(revenueSharingRef, revenueSharingChartRef);
  const {
    customLegendOnClick,
    getAwardData,
    getAwardSatusTableColumns,
    getRevenueSharingOption,
    setRevenueSharingChart,
  } = useHelpers({
    refs: { revenueSharingRef, revenueSharingChartRef },
    setMainState,
  });
  const revenueSharingOption = useMemo(
    () => getRevenueSharingOption(),
    [getRevenueSharingOption]
  );

  //初始設定
  useEffect(() => {
    (function () {
      setMainState((prevState) => ({
        ...prevState,
        customLegend: Object.fromEntries(
          revenueSharingOption.legend.data.map((key) => [key, true])
        ),
      }));
    })();
  }, [revenueSharingOption.legend.data]);

  //取得今日、明日得標資料
  useEffect(() => {
    getAwardData();
  }, [getAwardData]);

  //當月分帳bar堆疊圖繪製
  useEffect(() => {
    if (revenueSharingRef.current) {
      const newOption = {
        ...revenueSharingOption,
        series: JSON.parse(JSON.stringify(revenueSharingOption.series)),
      };
      newOption.series[0].data = mainState.awardData[mainState.awardStatus].map(
        (item) => item.awardPower
      );
      setRevenueSharingChart(newOption);
    }
  }, [
    mainState.awardData,
    mainState.awardStatus,
    revenueSharingOption,
    setRevenueSharingChart,
  ]);

  return (
    <ScopeStyle className="pd-x-50">
      <Flex
        align="center"
        className="section-header mg-t-30 pd-x-20 pd-y-10"
        justify="space-between"
      >
        <span>得標狀態</span>
        <Segmented
          defaultValue={mainState.awardStatus}
          options={[
            { label: "今日", value: "today" },
            { label: "明日", value: "tomorrow" },
          ]}
          onChange={(value) => {
            setMainState((prevState) => ({
              ...prevState,
              awardStatus: value,
            }));
            getAwardData();
          }}
        />
        <Flex align="center" className="cloud-status-container">
          <span>雲端連線：</span>
          <span className="status">連線中</span>
        </Flex>
      </Flex>
      <Card className="mg-t-16">
        <div
          ref={revenueSharingRef}
          className="revenue-sharing-bar-stack-chart"
        ></div>
      </Card>
      <Flex className="custom-legend mg-t-50-minus" gap={16} justify="center">
        {revenueSharingOption.legend.data.map((item, index) => {
          return (
            <Flex
              align="center"
              className="custom-legend-item pd-x-10 pd-y-4"
              key={index}
              onClick={() =>
                customLegendOnClick(item, revenueSharingChartRef.current)
              }
            >
              <span
                className="color-block mg-r-5"
                style={{
                  backgroundColor: mainState.customLegend[item]
                    ? revenueSharingOption?.series?.[index]?.itemStyle?.color
                    : color.white,
                }}
              ></span>
              <span
                style={{
                  opacity: mainState.customLegend[item] ? 1 : 0.3,
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
        columns={getAwardSatusTableColumns()}
        dataSource={mainState.awardTableData}
        loading={mainState.isAwardTableLoading}
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

export default RealTimeSpinningReserve;
