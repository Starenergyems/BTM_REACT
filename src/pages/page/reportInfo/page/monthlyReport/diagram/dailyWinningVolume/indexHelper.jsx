import * as echarts from "echarts";
import { color } from "@/styles/variable/indexStyle";
import { customLegendNameMap } from "./indexConfig";

function useHelpers({ refs }) {
  //每日得標量line圖設定檔
  function getDailyWinningVolumeOption() {
    return {
      title: {
        text: "每日得標量",
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
                  customLegendNameMap[item.seriesName] ?? ""
                }</span> <span class="value">${numberFormat.format(
                  item.data
                )} ${unitStr}</span></div>`;
              }
            };
            params.forEach((item) => {
              tooltipContent += template(item, "MW");
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
        top: 50,
        left: 30,
        right: 10,
        bottom: 40,
        containLabel: true,
      },
      legend: {
        data: [customLegendNameMap.winningVolume],
        show: false,
      },
      xAxis: {
        name: "Date",
        nameLocation: "start",
        nameTextStyle: {
          color: color.white,
          fontSize: 18,
          fontWeight: "lighter",
          verticalAlign: "top",
          padding: [15, 0, 0, 0],
        },
        offset: 10,
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
        name: "得標量(MW)",
        nameLocation: "middle",
        nameTextStyle: {
          color: color.white,
          fontSize: 18,
          fontWeight: "lighter",
          padding: [0, 0, 20, 10],
        },
        type: "value",
        max: 12,
        min: 0,
        interval: 2,
        axisLabel: {
          color: color.white,
          formatter(value) {
            return value.toFixed(1);
          },
        },
        splitLine: {
          lineStyle: {
            color: "#ccc",
          },
        },
      },
      series: [
        {
          type: "line",
          name: "winningVolume",
          data: [
            ...[...Array(11)].fill(10),
            8,
            ...[...Array(9)].fill(10),
            8,
            ...[...Array(11)].fill(10),
          ],
          itemStyle: {
            color: color.blue,
          },
          lineStyle: {
            width: 3,
          },
          symbolSize: 7,
        },
      ],
    };
  }
  //每日得標量line圖設定檔繪製
  function setDailyWinningVolumeChart(option) {
    const { dailyWinningVolumeRef, dailyWinningVolumeChartRef } = refs;
    if (dailyWinningVolumeRef.current) {
      if (!dailyWinningVolumeChartRef.current) {
        dailyWinningVolumeChartRef.current = echarts.init(
          dailyWinningVolumeRef.current,
          null,
          {
            renderer: "canvas",
            useDirtyRect: false,
          }
        );
      }
      dailyWinningVolumeChartRef.current.setOption(option);
    }
  }
  //每日得標量line圖reset繪製
  function resizeChart(chartRef) {
    chartRef.current?.resize();
  }
  ///每日得標量要顯示bar | line 圖
  function switchBarLineChart(chartRef, type) {
    const instance = chartRef.current;
    if (instance) {
      const currentOption = instance.getOption();
      currentOption.series.forEach((item) => (item.type = type)); // 切換所有 series 的圖表類型
      instance.setOption(currentOption, true);
    }
  }

  return {
    getDailyWinningVolumeOption,
    resizeChart,
    setDailyWinningVolumeChart,
    switchBarLineChart,
  };
}

export { useHelpers };
