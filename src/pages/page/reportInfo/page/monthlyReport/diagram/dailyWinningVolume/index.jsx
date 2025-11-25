import { useEffect, useMemo, useRef, useState } from "react";
import { debounce } from "throttle-debounce";
import { Icon } from "@iconify/react";
import { Card, Flex } from "antd";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";
import { winningVolumeType } from "./indexConfig";

function DailyWinningVolume() {
  const [winningVolumeMode, setWinningVolumeMode] = useState(
    winningVolumeType.line
  );
  const dailyWinningVolumeRef = useRef(null);
  const dailyWinningVolumeChartRef = useRef(null);
  const {
    getDailyWinningVolumeOption,
    resizeChart,
    setDailyWinningVolumeChart,
    switchBarLineChart,
  } = useHelpers({
    refs: {
      dailyWinningVolumeRef,
      dailyWinningVolumeChartRef,
    },
  });
  const debounceElectricityUsageChart = useMemo(
    () =>
      debounce(350, () => {
        setDailyWinningVolumeChart(
          dailyWinningVolumeChartRef.current.getOption()
        );
        resizeChart(dailyWinningVolumeChartRef);
      }),
    [resizeChart, setDailyWinningVolumeChart]
  );
  const dailyWinningVolumeOption = getDailyWinningVolumeOption();

  //視窗變動
  useEffect(() => {
    window.addEventListener("resize", debounceElectricityUsageChart);
    return () => {
      window.removeEventListener("resize", debounceElectricityUsageChart);
    };
  }, [debounceElectricityUsageChart]);

  //得標量統計line圖繪製
  useEffect(() => {
    if (dailyWinningVolumeRef.current && !dailyWinningVolumeChartRef.current) {
      setDailyWinningVolumeChart(dailyWinningVolumeOption);
    }
  }, [dailyWinningVolumeOption, setDailyWinningVolumeChart]);

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
                setWinningVolumeMode(winningVolumeType.line);
                switchBarLineChart(
                  dailyWinningVolumeChartRef,
                  winningVolumeType.line
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
                setWinningVolumeMode(winningVolumeType.bar);
                switchBarLineChart(
                  dailyWinningVolumeChartRef,
                  winningVolumeType.bar
                );
              }}
            />
          </span>
        </Flex>
        {/* 每日得標量line圖 */}
        <div
          ref={dailyWinningVolumeRef}
          className="electricity-usage-bar-line-chart"
        ></div>
        <Flex
          className="custom-legend bar mg-t-20-minus"
          gap={16}
          justify="center"
        >
          {dailyWinningVolumeOption.legend?.data?.map((item, index) => {
            return (
              <Flex
                align="center"
                className="custom-legend-item cursor-default pd-x-10 pd-y-4"
                key={index}
              >
                <span
                  className={`color-block ${
                    winningVolumeMode === winningVolumeType.line
                      ? "winning-volume-line"
                      : ""
                  } mg-r-5`}
                  style={{
                    backgroundColor:
                      dailyWinningVolumeOption?.series?.[index]?.itemStyle
                        ?.color,
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

export default DailyWinningVolume;
