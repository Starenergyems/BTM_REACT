import { useEffect, useMemo, useRef } from "react";
import { debounce } from "throttle-debounce";
import { Card, Flex } from "antd";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

function ElectricityUsage() {
  const electricityUsageRef = useRef(null);
  const electricityUsageChartRef = useRef(null);
  const {
    getElectricityUsageBarLineOption,
    resizeChart,
    setElectricityUsageBarLineChart,
  } = useHelpers({
    refs: {
      electricityUsageRef,
      electricityUsageChartRef,
    },
  });
  const electricityUsageOption = useMemo(
    () => getElectricityUsageBarLineOption(),
    [getElectricityUsageBarLineOption]
  );
  const debounceElectricityUsageChart = useMemo(
    () =>
      debounce(350, () => {
        setElectricityUsageBarLineChart(
          electricityUsageChartRef.current.getOption()
        );
        resizeChart(electricityUsageChartRef);
      }),
    [resizeChart, setElectricityUsageBarLineChart]
  );

  //視窗變動
  useEffect(() => {
    window.addEventListener("resize", debounceElectricityUsageChart);
    return () => {
      window.removeEventListener("resize", debounceElectricityUsageChart);
    };
  }, [debounceElectricityUsageChart]);

  //用電量統計 bar & line 圖繪製
  useEffect(() => {
    if (electricityUsageRef.current && !electricityUsageChartRef.current) {
      setElectricityUsageBarLineChart(electricityUsageOption);
    }
  }, [electricityUsageOption, setElectricityUsageBarLineChart]);

  return (
    <ScopeStyle>
      <Card>
        <div
          ref={electricityUsageRef}
          className="electricity-usage-bar-line-chart"
        ></div>
        <Flex
          className="custom-legend bar mg-t-20-minus"
          gap={16}
          justify="center"
        >
          {electricityUsageOption.legend?.data?.map((item, index) => {
            return (
              <Flex
                align="center"
                className="custom-legend-item cursor-default pd-x-10 pd-y-4"
                key={index}
              >
                <span
                  className="color-block mg-r-5"
                  style={{
                    backgroundColor:
                      electricityUsageOption?.series?.[index]?.itemStyle?.color,
                  }}
                ></span>
                <span>{item}</span>
              </Flex>
            );
          })}
        </Flex>
      </Card>
    </ScopeStyle>
  );
}

export default ElectricityUsage;
