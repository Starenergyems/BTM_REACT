import * as echarts from "echarts";
import { color } from "@/styles/variable/indexStyle";
import { customLegendBarNameMap, customLegendLineNameMap } from "./indexConfig";

function useHelpers({ refs, setMainState }) {
  //sbspm bar圖設定檔
  function getSbspmBarOption() {
    return {
      title: {
        text: "SBSPM",
        textStyle: {
          color: color.white,
          fontWeight: "lighter",
        },
        left: "center",
        top: 0,
      },
      tooltip: {
        trigger: "axis",
        backgroundColor: color.themeBlack,
        borderColor: "transparent",
        textStyle: {
          color: color.white,
        },
        formatter: function (params) {
          const min = params[0]?.data || "-";
          const max = params[0]?.data + params[1]?.data || "-";
          const avg = params[2]?.data || "-";
          return `
          <div class="chart-custom-tooltip">
            <div class="header-title">${params[0].axisValue} 日</div>  
            <div class="row">
              <div class="category">
                <span class="icon rect" style="background-color:${
                  params[1]?.color
                }"></span>
                <span>Max</span>
              </div>
              <span class="value">${max} ${"%"}</span>
            </div>
            <div class="row">
              <div class="category">
                <span class="icon rect" style="background-color:${
                  params[1]?.color
                }"></span>
                <span>Min</span>
              </div>
              <span class="value">${min} ${"%"}</span>
            </div>
            <div class="row">
              <div class="category">
                <span class="icon diamond" style="background-color:${
                  color.blue
                }"></span>
                <span>Avg</span>
              </div>
              <span class="value">${avg} ${"%"}</span>
            </div>
          </div>`;
        },
      },
      grid: {
        top: 50,
        left: 10,
        right: 10,
        bottom: 40,
        containLabel: true,
      },
      legend: {
        data: [customLegendBarNameMap.maxToMin, customLegendBarNameMap.avg],
        show: false,
      },
      xAxis: {
        type: "category",
        splitLine: { show: false },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: color.white,
        },
        data: [...Array(31)].map((_item, index) => index + 1),
      },
      yAxis: {
        type: "value",
        max: 100,
        min: 75,
        axisLabel: {
          color: color.white,
        },
        splitLine: {
          lineStyle: {
            color: "#ccc",
          },
        },
      },
      series: [
        {
          name: "min",
          type: "bar",
          stack: "maxAndMin",
          itemStyle: {
            borderColor: "transparent",
            color: "transparent",
          },
          emphasis: {
            itemStyle: {
              borderColor: "transparent",
              color: "transparent",
            },
          },
          data: [
            95, 97, 100, 100, 97, 97, 95, 93, 94, 96, 100, 100, 100, 96, 96, 95,
            95, 93, 92, 94, 93, 93, 93, 92, 93, 92, 94, 93, 93, 93, 92,
          ],
        },
        {
          name: "max-min",
          type: "bar",
          stack: "maxAndMin",
          itemStyle: {
            color: color.lightBlue,
          },
          label: {
            show: false,
            position: "inside",
          },
          emphasis: {
            label: {
              show: false,
            },
          },
          data: [
            5, 3, 0, 0, 3, 3, 5, 6, 5, 4, 0, 0, 0, 3, 4, 4, 3, 3, 5, 4, 4, 3, 3,
            4, 3, 5, 4, 4, 3, 3, 4,
          ],
        },
        {
          name: "avg",
          type: "bar",
          stack: "maxAndMin",
          label: {
            show: false,
          },
          data: [
            96, 98, 100, 100, 98, 98, 97, 96, 96, 97, 100, 100, 100, 97, 98, 97,
            97, 94, 94, 96, 95, 94, 94, 94, 94, 94, 96, 95, 94, 94, 94,
          ],
          itemStyle: {
            color: "transparent",
          },
          markPoint: {
            data: [
              [0, 96],
              [1, 98],
              [2, 100],
              [3, 100],
              [4, 98],
              [5, 98],
              [6, 97],
              [7, 96],
              [8, 96],
              [9, 97],
              [10, 100],
              [11, 100],
              [12, 100],
              [13, 97],
              [14, 98],
              [15, 97],
              [16, 97],
              [17, 94],
              [18, 94],
              [19, 96],
              [20, 95],
              [21, 94],
              [22, 94],
              [23, 94],
              [24, 94],
              [25, 94],
              [26, 96],
              [27, 95],
              [28, 94],
              [29, 94],
              [30, 94],
            ].map((coord) => ({
              name: "MarkPoint",
              coord: coord, // 使用動態坐標
              symbol: "rect",
              symbolSize: 6,
              symbolRotate: 45,
              itemStyle: {
                color: color.blue, // 設置標註顏色
              },
              label: {
                show: false,
              },
            })),
          },
        },
      ],
    };
  }
  //sbspm bar | line 圖繪製
  function setSbspmBarLineChart(option) {
    const { sbspmBarLineRef, sbspmBarLineChartRef } = refs;
    if (sbspmBarLineRef.current) {
      if (!sbspmBarLineChartRef.current) {
        sbspmBarLineChartRef.current = echarts.init(
          sbspmBarLineRef.current,
          null,
          {
            renderer: "canvas",
            useDirtyRect: false,
          }
        );
      }
      sbspmBarLineChartRef.current.setOption(option, true); //第二個參數為是否強制重繪
    }
  }
  //sbspm line圖設定檔
  function getSbspmLineOption() {
    return {
      legend: {
        data: [
          customLegendLineNameMap.max,
          customLegendLineNameMap.min,
          customLegendLineNameMap.avg,
        ],
        show: false,
      },
      tooltip: {
        trigger: "axis",
        backgroundColor: color.themeBlack,
        borderColor: "transparent",
        textStyle: {
          color: color.white,
        },
        formatter(params) {
          const numberFormat = new Intl.NumberFormat("en-US", {
            maximumFractionDigits: 3,
          });
          if (Array.isArray(params)) {
            let tooltipContent = `${params[0].axisValue} 日`;
            const template = (item, unitStr) => {
              if (item) {
                return `<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:130px;"><span>${
                  item.marker
                } ${
                  customLegendLineNameMap[item.seriesName] ?? ""
                }</span> <span class="value">${numberFormat.format(
                  item.data
                )} ${unitStr}</span></div>`;
              }
            };
            params.forEach((item) => {
              if (item.seriesName.includes("max")) {
                tooltipContent += template(item, "%");
              } else if (item.seriesName.includes("min")) {
                tooltipContent += template(item, "%");
              } else if (item.seriesName.includes("avg")) {
                tooltipContent += template(item, "%");
              }
              if (!item.data) {
                tooltipContent = "";
              }
            });
            return tooltipContent;
          }
          return "";
        },
      },
      grid: {
        top: 20,
        left: 10,
        right: 10,
        bottom: 40,
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: color.white,
        },
        data: [...Array(31)].map((_item, index) => index + 1),
      },
      yAxis: {
        type: "value",
        max: 100,
        min: 75,
        axisLabel: {
          color: color.white,
        },
      },
      series: [
        {
          name: "max",
          type: "line",
          data: [
            100, 100, 100, 100, 100, 100, 100, 99, 99, 100, 100, 100, 100, 99,
            100, 99, 98, 96, 97, 98, 97, 96, 96, 96, 96, 97, 98, 97, 96, 96, 96,
          ],
          itemStyle: {
            color: color.lightBlue,
          },
          symbol: "none",
        },
        {
          name: "min",
          type: "line",
          data: [
            95, 97, 100, 100, 97, 97, 95, 93, 94, 96, 100, 100, 100, 96, 96, 95,
            95, 93, 92, 94, 93, 93, 93, 92, 93, 92, 94, 93, 93, 93, 92,
          ],
          itemStyle: {
            color: color.purple,
          },
          symbol: "none",
        },
        {
          name: "avg",
          type: "line",
          data: [
            96, 98, 100, 100, 98, 98, 97, 96, 96, 97, 100, 100, 100, 97, 98, 97,
            97, 94, 94, 96, 95, 94, 94, 94, 94, 94, 96, 95, 94, 94, 94,
          ],
          itemStyle: {
            color: color.blue,
          },
          symbol: "none",
        },
      ],
    };
  }
  //sbspm bar | line 圖reset繪製(destroy再繪製)
  function resizeChart(chartRef) {
    chartRef.current?.resize();
  }
  //設定sbspm要顯示line圖還是bar圖
  function setShowSbspmType(type) {
    setMainState((prevState) => ({
      ...prevState,
      showSbspmType: type,
    }));
  }
  return {
    getSbspmBarOption,
    getSbspmLineOption,
    resizeChart,
    setSbspmBarLineChart,
    setShowSbspmType,
  };
}

export { useHelpers };
