import dayjs from "dayjs";
import * as echarts from "echarts";
import { color } from "@/styles/variable/indexStyle";
import { customLegendNameMap } from "./indexConfig";

function useHelpers({ refs, setMainState } = {}) {
  //歷史圖line圖設定檔
  function getHistoricalOption() {
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
          data: [],
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
          data: [],
          name: "power",
          type: "line",
          lineStyle: {
            color: "#eca378",
          },
          itemStyle: {
            color: "#eca378",
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
          data: [],
          name: "spm",
          type: "line",
          lineStyle: {
            color: color.green,
          },
          itemStyle: {
            color: color.green,
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
      title: {
        left: "center",
        text: "歷史圖",
        textStyle: {
          color: color.white,
          fontWeight: "normal",
        },
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
            return valueSplit[1] === "00";
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
              if (valueSplit[1] !== "00") {
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
            return index % 20 === 0;
          },
        },
      },
      yAxis: [
        {
          type: "value",
          min: 59.75,
          max: 60.25,
          interval: 0.05,
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
          name: "實功\n(kW)",
          nameTextStyle: {
            color: "#eca378",
            padding: [0, -40, 0, 0],
          },
          axisLabel: {
            color: "#eca378",
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
            color: color.green,
          },
          axisLabel: {
            color: color.green,
            formatter: "{value} %",
          },
          splitLine: {
            show: false,
          },
        },
      ],
    };
  }
  //歷史圖line圖繪製
  function setHistoricalChart(option) {
    const { historicalRef, historicalChartRef } = refs;
    if (historicalRef.current) {
      if (!historicalChartRef.current) {
        historicalChartRef.current = echarts.init(historicalRef.current, null, {
          renderer: "canvas",
          useDirtyRect: false,
        });
      }
      const newOption = {
        ...option,
        series: JSON.parse(JSON.stringify(option.series)),
        xAxis: {
          ...option.xAxis,
          data: getTimeRangeByMinutes(0, 24),
        },
      };
      let seconds = 60;
      if (window.innerWidth <= 992) {
        seconds = seconds * 3;
      } else if (window.innerWidth <= 1600) {
        seconds = seconds * 2;
      }
      newOption.xAxis = {
        ...newOption.xAxis,
        axisTick: {
          ...newOption.xAxis.axisTick,
          interval: seconds - 1,
        },
        axisLabel: {
          ...newOption.xAxis.axisLabel,
          formatter: function (value, index) {
            if (index % seconds === 0) {
              const valueSplit = value.split(":");
              return `${valueSplit[0]}:${valueSplit[1]}`;
            }
            return "";
          },
        },
      };
      newOption.series[0].data = [
        ...newOption.series[0].data,
        ...[...Array(1440)].map(() => generateRandomValuesFrequency()),
      ];
      newOption.series[1].data = [
        ...newOption.series[1].data,
        ...[...Array(1440)].map(() => generateRandomValuesPower()),
      ];
      newOption.series[2].data = [
        ...newOption.series[2].data,
        ...[...Array(1440)].map(() => generateRandomValuesSpm()),
      ];
      newOption.series[0].data.shift();
      newOption.series[1].data.shift();
      newOption.series[2].data.shift();
      historicalChartRef.current.setOption(newOption);
    }
  }
  //歷史圖line圖reset繪製
  function resizeChart(chartRef) {
    chartRef.current?.resize();
  }
  //取得n分鐘前~目前時間+1分鐘的各個區間(每秒最小單位)
  function getTimeRangeByMinutes(startHour, endHour) {
    const startTime = dayjs().hour(startHour).minute(0).second(0); // 設定起始時間
    const endTime = dayjs().hour(endHour).minute(0).second(0); // 設定結束時間
    const totalMinutes = endTime.diff(startTime, "minute"); // 計算總分鐘數
    return [...Array(totalMinutes)].map((_item, index) =>
      startTime.add(index, "minute").format("HH:mm")
    );
  }
  //歷史圖line圖客製化legend觸發事件
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
  //RangePicker禁止選取的日期
  function disabledDates(current) {
    return current && current.isAfter(dayjs().endOf("day"));
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
    disabledDates,
    getHistoricalOption,
    resizeChart,
    setHistoricalChart,
  };
}

export { useHelpers };
