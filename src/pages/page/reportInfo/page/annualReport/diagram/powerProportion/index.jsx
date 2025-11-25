import { useEffect, useMemo, useRef, useState } from "react";
import { debounce } from "throttle-debounce";
import { Icon } from "@iconify/react";
import { Card, Flex } from "antd";
import { useHelpers } from "./indexHelper";
import { powerProportionType } from "./indexConfig";
import ScopeStyle from "./indexStyle";

function PowerProportion() {
  const [powerProporMode, setWinningVolumeMode] = useState(
    powerProportionType.bar
  );
  const monthlyWinningVolumeRef = useRef(null);
  const monthlyWinningVolumeChartRef = useRef(null);
  const {
    getPowerProportionOption,
    resizeChart,
    setPowerProportionChart,
    switchBarLineChart,
  } = useHelpers({
    refs: {
      monthlyWinningVolumeRef,
      monthlyWinningVolumeChartRef,
    },
  });
  const debounceElectricityUsageChart = useMemo(
    () =>
      debounce(350, () => {
        setPowerProportionChart(
          monthlyWinningVolumeChartRef.current.getOption()
        );
        resizeChart(monthlyWinningVolumeChartRef);
      }),
    [resizeChart, setPowerProportionChart]
  );
  const powerProportionOption = getPowerProportionOption();

  //視窗變動
  useEffect(() => {
    window.addEventListener("resize", debounceElectricityUsageChart);
    return () => {
      window.removeEventListener("resize", debounceElectricityUsageChart);
    };
  }, [debounceElectricityUsageChart]);

  //得標量統計line圖繪製
  useEffect(() => {
    if (
      monthlyWinningVolumeRef.current &&
      !monthlyWinningVolumeChartRef.current
    ) {
      setPowerProportionChart(powerProportionOption);
    }
  }, [powerProportionOption, setPowerProportionChart]);

  return (
    <ScopeStyle>
      <Card>
        {/* 客製化chart圖的toolbox(可切換bar或line圖呈現) */}
        <Flex
          className="chart-custom-toolbox pd-x-4"
          gap={8}
          justify="flex-end"
        >
          <span className="icon-container icon-line-container">
            <Icon
              icon="uil:chart-line"
              fontSize={18}
              onClick={() => {
                setWinningVolumeMode(powerProportionType.line);
                switchBarLineChart(
                  monthlyWinningVolumeChartRef,
                  powerProportionType.line
                );
              }}
            />
          </span>
          <span className="icon-container icon-bar-container">
            <Icon
              className="icon-bar"
              icon="charm:chart-bar"
              fontSize={18}
              onClick={() => {
                setWinningVolumeMode(powerProportionType.bar);
                switchBarLineChart(
                  monthlyWinningVolumeChartRef,
                  powerProportionType.bar
                );
              }}
            />
          </span>
        </Flex>
        {/* 總輔電用電bar | line圖 */}
        <div
          ref={monthlyWinningVolumeRef}
          className="electricity-usage-bar-line-chart"
        ></div>
        <Flex
          className="custom-legend bar mg-t-20-minus"
          gap={16}
          justify="center"
        >
          {powerProportionOption.legend?.data?.map((item, index) => {
            return (
              <Flex
                align="center"
                className="custom-legend-item cursor-default pd-x-10 pd-y-4"
                key={index}
              >
                <span
                  className={`color-block ${
                    powerProporMode === powerProportionType.line
                      ? "powerProporMode-line"
                      : ""
                  } mg-r-5`}
                  style={{
                    backgroundColor:
                      powerProportionOption?.series?.[index]?.itemStyle?.color,
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

export default PowerProportion;
