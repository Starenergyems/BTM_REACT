import dayjs from "dayjs";
import * as echarts from "echarts";
import { color } from "@/styles/variable/indexStyle";
import {
  chartStartTimeMinutesAgo,
  chartStartTimeMinutesDuration,
  customLegendNameMap,
} from "./indexConfig";

function useHelpers({ setMainState, refs } = {}) {
  //即時圖line圖設定檔
  function getRealTimeOption() {
    return {
      axisLabel: {
        color: color.white,
      },
      grid: {
        top: 40,
        right: 10,
        bottom: 15,
        left: 10,
        containLabel: true,
      },
      legend: {
        data: ["frequency", "power", "spm"],
        selected: {
          frequency: true,
          power: true,
          spm: true,
        },
        icon: "roundRect",
        itemWidth: 35,
        itemHeight: 10,
        itemGap: 30,
        borderRadius: 5,
        padding: 10,
        bottom: 10,
        show: false,
        formatter: (name) => {
          return customLegendNameMap[name] || name;
        },
      },
      series: [
        {
          data: [...Array(chartStartTimeMinutesAgo * 60)].map(() =>
            generateRandomValuesFrequency()
          ),
          name: "frequency",
          type: "line",
          lineStyle: {
            color: color.lightBlue,
          },
          itemStyle: {
            color: color.lightBlue,
            cursor: "default",
          },
          emphasis: {
            itemStyle: {
              cursor: "default", // 避免手指圖案
            },
          },
          showSymbol: false,
          yAxisIndex: 0,
        },
        {
          data: [...Array(chartStartTimeMinutesAgo * 60)].map(() =>
            generateRandomValuesPower()
          ),
          name: "power",
          type: "line",
          lineStyle: {
            color: color.blue,
          },
          itemStyle: {
            color: color.blue,
            cursor: "default",
          },
          emphasis: {
            itemStyle: {
              cursor: "default", // 避免手指圖案
            },
          },
          showSymbol: false,
          yAxisIndex: 1,
        },
        {
          data: [...Array(chartStartTimeMinutesAgo * 60)].map(() =>
            generateRandomValuesSpm()
          ),
          name: "spm",
          type: "line",
          lineStyle: {
            color: color.yellow,
          },
          itemStyle: {
            color: color.yellow,
            cursor: "default",
          },
          emphasis: {
            itemStyle: {
              cursor: "default", // 避免手指圖案
            },
          },
          showSymbol: false,
          yAxisIndex: 2,
        },
      ],
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
            let tooltipContent = `${params[0].axisValue}`;
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
              if (item.seriesName.includes("power")) {
                tooltipContent += template(item, "MW");
              } else if (item.seriesName.includes("frequency")) {
                tooltipContent += template(item, "Hz");
              } else if (item.seriesName.includes("spm")) {
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
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [],
        axisTick: {
          show: true,
          alignWithLabel: true, // 確保刻度與標籤對齊
          lineStyle: {
            color: "#ccc",
          },
          interval: function (_index, value) {
            const valueSplit = value.split(":");
            return (
              valueSplit[2] === "00" &&
              parseInt(valueSplit[1]) % chartStartTimeMinutesDuration === 0
            );
          },
        },
        axisLine: {
          show: true,
          onZero: false,
        },
        axisLabel: {
          formatter: function (value) {
            if (value) {
              const valueSplit = value.split(":");
              if (valueSplit[2] !== "00") {
                return "";
              }
              if (
                parseInt(valueSplit[1]) % chartStartTimeMinutesDuration !==
                0
              ) {
                return "";
              }
              return `${valueSplit[0]}:${valueSplit[1]}`;
            }
            return "";
          },
          color: color.white,
          interval: 0,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#ccc",
            width: 0.5,
          },
          interval: function (index) {
            return index % (chartStartTimeMinutesDuration * 20) === 0;
          },
        },
      },
      yAxis: [
        {
          type: "value",
          min: 59.75,
          max: 60.25,
          interval: 0.1,
          name: "頻率\n(Hz)",
          nameTextStyle: {
            padding: [0, 40, 0, 0],
            color: color.lightBlue,
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: "#ccc",
            },
          },
          axisLabel: {
            color: color.lightBlue,
            formatter: "{value}",
            margin: 10,
          },
          splitLine: {
            lineStyle: {
              type: "solid",
            },
            show: true,
          },
        },
        {
          type: "value",
          name: "功率\n(kW)",
          nameTextStyle: {
            color: color.blue,
            padding: [0, -40, 0, 0],
          },
          axisLabel: {
            color: color.blue,
            formatter: "{value}",
          },
          splitLine: {
            show: false,
          },
        },
        {
          type: "value",
          name: "執行率\n(%)",
          min: 0,
          max: 100,
          interval: 20,
          offset: 45,
          nameTextStyle: {
            padding: [0, -40, 0, 0],
            color: color.yellow,
          },
          axisLabel: {
            color: color.yellow,
            formatter: "{value} %",
          },
          splitLine: {
            show: false,
          },
        },
      ],
    };
  }
  //即時圖line圖繪製
  function setRealTimeChart(option) {
    const { realTimeRef, realTimeChartRef } = refs;
    if (realTimeRef.current) {
      if (!realTimeChartRef.current) {
        realTimeChartRef.current = echarts.init(realTimeRef.current, null, {
          renderer: "canvas",
          useDirtyRect: false,
        });
      }
      realTimeChartRef.current.setOption(option);
    }
  }
  //即時圖line圖reset繪製
  function resizeChart(chartRef) {
    chartRef.current?.resize();
  }
  //取得n分鐘前~目前時間+n分鐘的各個區間(每秒最小單位)
  function getMinutesAgoRange(minute, addMinute = 1) {
    const startTime = dayjs().subtract(minute, "minute"); // n 分鐘前
    const totalSeconds = minute * 60 + addMinute * 60; // 計算總秒數
    const times = [...Array(totalSeconds)].map((_item, index) =>
      startTime.add(index, "second").format("HH:mm:ss")
    );
    return times;
  }
  //即時圖line圖客製化legend觸發事件
  function customLegendOnClick(name, chart) {
    const option = chart.getOption();
    const isSelected = !option.legend[0].selected[name];
    chart.dispatchAction({
      type: "legendToggleSelect",
      name,
    });
    setMainState((prevState) => {
      return {
        ...prevState,
        customLegend: {
          ...prevState.customLegend,
          [name]: isSelected,
        },
      };
    });
  }
  //test 頻率
  function generateRandomValuesFrequency(min = 60, max = 60.05) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }
  //test 功率
  function generateRandomValuesPower(min = 1200, max = 1500) {
    return Math.round(Math.random() * (max - min) + min);
  }
  //test 執行率
  function generateRandomValuesSpm() {
    return 100;
  }
  return {
    customLegendOnClick,
    generateRandomValuesFrequency,
    generateRandomValuesPower,
    generateRandomValuesSpm,
    getMinutesAgoRange,
    getRealTimeOption,
    resizeChart,
    setRealTimeChart,
  };
}

export { useHelpers };
