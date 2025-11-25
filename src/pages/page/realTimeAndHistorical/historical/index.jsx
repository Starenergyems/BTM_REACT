import { useEffect, useMemo, useRef, useState } from "react";
import { debounce } from "throttle-debounce";
import { Card, DatePicker, Flex } from "antd";
import { color } from "@/styles/variable/indexStyle";
import { useHelpers } from "./indexHelper";
import { customLegendNameMap } from "./indexConfig";
import ScopeStyle from "./indexStyle";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

function Historical() {
  const [mainState, setMainState] = useState({
    customLegend: {
      ...Object.fromEntries(
        useHelpers()
          .getHistoricalOption()
          .legend.data.map((key) => [key, true])
      ),
    },
    isShowCustomLegend: false,
  });
  const historicalRef = useRef(null);
  const historicalChartRef = useRef(null);
  const {
    customLegendOnClick,
    disabledDates,
    getHistoricalOption,
    resizeChart,
    setHistoricalChart,
  } = useHelpers({ refs: { historicalRef, historicalChartRef }, setMainState });
  const debounceResizeHistoricalChart = useMemo(
    () =>
      debounce(350, () => {
        setHistoricalChart(historicalChartRef.current.getOption());
        resizeChart(historicalChartRef);
      }),
    [resizeChart, setHistoricalChart]
  );
  const historicalOption = getHistoricalOption();

  //視窗變動
  useEffect(() => {
    window.addEventListener("resize", debounceResizeHistoricalChart);
    return () => {
      window.removeEventListener("resize", debounceResizeHistoricalChart);
    };
  }, [debounceResizeHistoricalChart]);

  useEffect(() => {
    if (!mainState.isShowCustomLegend) {
      setMainState((prevState) => ({
        ...prevState,
        isShowCustomLegend: true,
      }));
      //test 模擬取得新資料
      const oldOption = historicalChartRef.current
        ? historicalChartRef.current.getOption()
        : historicalOption;

      setHistoricalChart(oldOption);
    }
  }, [historicalOption, mainState.isShowCustomLegend, setHistoricalChart]);

  return (
    <ScopeStyle>
      <RangePicker
        defaultValue={[dayjs(), dayjs()]}
        disabledDate={disabledDates}
        style={{ width: "300px" }}
      />
      <Card className="mg-t-20">
        <div ref={historicalRef} className="historical-line-chart"></div>
      </Card>
      {mainState.isShowCustomLegend && (
        <Flex className="custom-legend mg-t-20" gap={16} justify="center">
          {historicalOption.legend.data.map((item, index) => {
            return (
              <Flex
                align="center"
                className="custom-legend-item pd-x-10 pd-y-4"
                key={index}
                onClick={() =>
                  customLegendOnClick(item, historicalChartRef.current)
                }
              >
                <span
                  className="color-block mg-r-5"
                  style={{
                    backgroundColor: mainState.customLegend[item]
                      ? historicalOption?.series?.[index]?.itemStyle?.color
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
      )}
    </ScopeStyle>
  );
}

export default Historical;
