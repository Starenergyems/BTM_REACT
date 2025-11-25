import { useEffect, useMemo, useRef, useState } from "react";
import { debounce } from "throttle-debounce";
import { Card, Flex } from "antd";
import { Icon } from "@iconify/react";
import { color } from "@/styles/variable/indexStyle";
import { customLegendBarNameMap, showSbspmType } from "./indexConfig";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

function SbspmChart() {
  const [mainState, setMainState] = useState({
    showSbspmType: showSbspmType.bar, //bar | line
  });
  const sbspmBarLineRef = useRef(null);
  const sbspmBarLineChartRef = useRef(null);
  const {
    getSbspmBarOption,
    getSbspmLineOption,
    resizeChart,
    setSbspmBarLineChart,
    setShowSbspmType,
  } = useHelpers({
    refs: {
      sbspmBarLineRef,
      sbspmBarLineChartRef,
    },
    setMainState,
  });
  const debounceResizeSbspmBarChart = useMemo(
    () => debounce(350, () => resizeChart(sbspmBarLineChartRef)),
    [resizeChart]
  );
  const sbspmBarOption = getSbspmBarOption();
  const sbspmLineOption = getSbspmLineOption();

  //視窗變動
  useEffect(() => {
    window.addEventListener("resize", debounceResizeSbspmBarChart);
    return () => {
      window.removeEventListener("resize", debounceResizeSbspmBarChart);
    };
  }, [debounceResizeSbspmBarChart]);

  //根據chart右上角的toolbox切換的類型做sbspm bar | line 圖繪製
  useEffect(() => {
    if (mainState.showSbspmType) {
      switch (mainState.showSbspmType) {
        case showSbspmType.bar: {
          setSbspmBarLineChart(sbspmBarOption);
          break;
        }
        case showSbspmType.line: {
          setSbspmBarLineChart(sbspmLineOption);
          break;
        }
      }
    }
  }, [
    mainState.showSbspmType,
    sbspmBarOption,
    sbspmLineOption,
    setSbspmBarLineChart,
  ]);

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
              onClick={() => setShowSbspmType(showSbspmType.line)}
            />
          </span>
          <span className="icon-container icon-bar-container">
            <Icon
              className="icon-bar"
              icon="charm:chart-bar"
              fontSize={18}
              onClick={() => setShowSbspmType(showSbspmType.bar)}
            />
          </span>
        </Flex>
        {/* SBSPM Bar | Line 圖 */}
        <div className="sbspm-bar-line-container">
          <div ref={sbspmBarLineRef} className="sbspm-bar-line-chart"></div>
          {/* Bar圖的客製化Legend */}
          {mainState.showSbspmType === showSbspmType.bar && (
            <Flex
              className="custom-legend bar mg-t-20-minus"
              gap={16}
              justify="center"
            >
              {sbspmBarOption.legend?.data?.map((item, index) => {
                return (
                  <Flex
                    align="center"
                    className="custom-legend-item pd-x-10 pd-y-4"
                    key={index}
                  >
                    <span
                      className={`color-block mg-r-5 ${
                        item === customLegendBarNameMap.avg ? "diamond" : ""
                      }`}
                      style={{
                        backgroundColor:
                          item === customLegendBarNameMap.avg
                            ? color.blue
                            : color.lightBlue,
                      }}
                    ></span>
                    <span>{item}</span>
                  </Flex>
                );
              })}
            </Flex>
          )}
          {/* Line圖的客製化Legend */}
          {mainState.showSbspmType === showSbspmType.line && (
            <Flex
              className="custom-legend line mg-t-20-minus"
              gap={16}
              justify="center"
            >
              {sbspmLineOption.legend.data.map((item, index) => {
                return (
                  <Flex
                    align="center"
                    className="custom-legend-item pd-x-10 pd-y-4"
                    key={index}
                  >
                    <span
                      className="color-block mg-r-5"
                      style={{
                        backgroundColor:
                          sbspmLineOption?.series?.[index]?.itemStyle?.color,
                      }}
                    ></span>
                    <span>{item}</span>
                  </Flex>
                );
              })}
            </Flex>
          )}
        </div>
      </Card>
    </ScopeStyle>
  );
}

export default SbspmChart;
