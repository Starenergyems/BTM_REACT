import { useEffect, useMemo, useRef, useState } from "react";
import { Flex } from "antd";
import { debounce } from "throttle-debounce";
import { CategoryBox } from "@/components/units";
import { hexToRgba } from "@/styles/function";
import { color } from "@/styles/variable/indexStyle";
import { useHelpers } from "./indexHelper";
import {
  chartStartTimeMinutesAdd,
  chartStartTimeMinutesAgo,
  customLegendNameMap,
} from "./indexConfig";
import ScopeStyle from "./indexStyle";

function FrequencyAndPower({ className }) {
  const [mainState, setMainState] = useState({
    customLegend: {
      ...Object.fromEntries(
        useHelpers()
          .getRealTimeOption()
          .legend.data.map((key) => [key, true])
      ),
    },
    isShowCustomLegend: false,
  });

  const realTimeRef = useRef(null);
  const realTimeChartRef = useRef(null);
  const timerRef = useRef();
  const {
    customLegendOnClick,
    generateRandomValuesFrequency,
    generateRandomValuesPower,
    generateRandomValuesSpm,
    getMinutesAgoRange,
    getRealTimeOption,
    resizeChart,
    setRealTimeChart,
  } = useHelpers({ setMainState, refs: { realTimeRef, realTimeChartRef } });

  const realTimeOption = getRealTimeOption();
  const debounceResizeRealTimeChart = useMemo(
    () => debounce(350, () => resizeChart(realTimeChartRef)),
    [resizeChart]
  );

  //視窗變動
  useEffect(() => {
    window.addEventListener("resize", debounceResizeRealTimeChart);
    return () => {
      window.removeEventListener("resize", debounceResizeRealTimeChart);
    };
  }, [debounceResizeRealTimeChart]);

  //關閉計時器
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!mainState.isShowCustomLegend) {
      setMainState((prevState) => ({
        ...prevState,
        isShowCustomLegend: true,
      }));
      //test 模擬每秒取得新資料
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      timerRef.current = setInterval(() => {
        const oldOption = realTimeChartRef.current
          ? realTimeChartRef.current.getOption()
          : realTimeOption;
        const newOption = {
          ...oldOption,
          series: JSON.parse(JSON.stringify(oldOption.series)),
          xAxis: {
            ...oldOption.xAxis,
            data: getMinutesAgoRange(
              chartStartTimeMinutesAgo,
              chartStartTimeMinutesAdd
            ),
          },
        };
        newOption.series[0].data = [
          ...newOption.series[0].data,
          generateRandomValuesFrequency(),
        ];
        newOption.series[1].data = [
          ...newOption.series[1].data,
          generateRandomValuesPower(),
        ];
        newOption.series[2].data = [
          ...newOption.series[2].data,
          generateRandomValuesSpm(),
        ];
        newOption.series[0].data.shift();
        newOption.series[1].data.shift();
        newOption.series[2].data.shift();
        setRealTimeChart(newOption);
      }, 1000);
    }
  }, [
    generateRandomValuesFrequency,
    generateRandomValuesPower,
    generateRandomValuesSpm,
    getMinutesAgoRange,
    mainState.isShowCustomLegend,
    realTimeOption,
    setRealTimeChart,
  ]);

  return (
    <ScopeStyle className={className}>
      <div className="section-title">
        <h2>頻率功率圖</h2>
      </div>
      <div className="section-content">
        <CategoryBox
          background={`linear-gradient(180deg, ${
            color.themeDarkGray
          },${hexToRgba(color.themeDarkGray, 0)})`}
          headerTextAlign="center"
          isShowBorder={false}
          title="頻率功率趨勢圖"
        >
          <div ref={realTimeRef} className="real-time-line-chart"></div>
          {mainState.isShowCustomLegend && (
            <Flex className="custom-legend mg-t-5" gap={16} justify="center">
              {realTimeOption.legend.data.map((item, index) => {
                return (
                  <Flex
                    align="center"
                    className="custom-legend-item pd-x-10 pd-y-4"
                    key={index}
                    onClick={() =>
                      customLegendOnClick(item, realTimeChartRef.current)
                    }
                  >
                    <span
                      className="color-block mg-r-5"
                      style={{
                        backgroundColor: mainState.customLegend[item]
                          ? realTimeOption?.series?.[index]?.itemStyle?.color
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
        </CategoryBox>
      </div>
    </ScopeStyle>
  );
}

export default FrequencyAndPower;
