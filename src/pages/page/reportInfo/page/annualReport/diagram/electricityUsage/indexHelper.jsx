import * as echarts from "echarts";
import { color } from "@/styles/variable/indexStyle";
import { customLegendNameMap } from "./indexConfig";

function useHelpers({ refs }) {
  //用電量統計 bar & line圖設定檔
  function getElectricityUsageBarLineOption() {
    return {
      title: {
        text: "用電量統計",
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
        data: [
          customLegendNameMap.charging,
          customLegendNameMap.discharging,
          customLegendNameMap.net,
          customLegendNameMap.rte,
          customLegendNameMap.cycle,
        ],
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
        data: [...Array(12)].map((_item, index) => index + 1),
      },
      yAxis: {
        name: "用電量(MWh)",
        nameLocation: "middle",
        nameTextStyle: {
          color: color.white,
          fontSize: 18,
          fontWeight: "lighter",
          padding: [0, 0, 20, 10],
        },
        type: "value",
        max: 100,
        min: 0,
        interval: 10,
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
          type: "bar",
          name: "charging",
          data: [...Array(12)].fill(70),
          itemStyle: {
            color: color.blue,
          },
        },
        {
          type: "bar",
          name: "discharging",
          data: [...Array(12)].fill(49),
          itemStyle: {
            color: color.lightBlue,
          },
        },
        {
          type: "bar",
          name: "net",
          data: [...Array(12)].fill(15),
          itemStyle: {
            color: color.purple,
          },
        },
        {
          type: "line",
          name: "rte",
          data: [...[...Array(9)].fill(80), 85, 69, 80],
          itemStyle: {
            color: color.green,
          },
          lineStyle: {
            width: 3,
          },
          symbol: "none",
        },
        {
          type: "line",
          name: "cycle",
          data: [...[...Array(9)].fill(60), 63, 60, 85],
          itemStyle: {
            color: color.inputGray,
          },
          lineStyle: {
            width: 3,
          },
          symbol: "none",
        },
      ],
    };
  }
  //用電量統計 bar & line圖設定檔繪製
  function setElectricityUsageBarLineChart(option) {
    const { electricityUsageRef, electricityUsageChartRef } = refs;
    if (electricityUsageRef.current) {
      if (!electricityUsageChartRef.current) {
        electricityUsageChartRef.current = echarts.init(
          electricityUsageRef.current,
          null,
          {
            renderer: "canvas",
            useDirtyRect: false,
          }
        );
      }
      electricityUsageChartRef.current.setOption(option);
    }
  }
  //用電量統計 bar & line圖reset繪製
  function resizeChart(chartRef) {
    chartRef.current?.resize();
  }

  return {
    getElectricityUsageBarLineOption,
    resizeChart,
    setElectricityUsageBarLineChart,
  };
}

export { useHelpers };
