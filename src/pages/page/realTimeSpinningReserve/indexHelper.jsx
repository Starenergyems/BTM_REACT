import { useCallback } from "react";
import * as echarts from "echarts";
import { color } from "@/styles/variable/indexStyle";
import { customLegendNameMap } from "./indexConfig";

// useHelpers為最外層function，function內區塊的撰寫順序由上而下為：
// 1. useCallback需要相依的function
// 2. api function
// 3. 一般function
function useHelpers({ refs, setMainState }) {
  const { revenueSharingRef, revenueSharingChartRef } = refs;

  const getAwardData = useCallback(() => {
    const fetchData = {
      today: [...Array(24)].map(() => Math.floor(Math.random() * 51)),
      tomorrow: [...Array(24)].map(() => Math.floor(Math.random() * 51)),
    };
    setMainState((prevState) => ({
      ...prevState,
      awardData: {
        ...prevState.awardData,
        today: fetchData.today,
        tomorrow: fetchData.tomorrow,
      },
    }));
  }, [setMainState]);
  //當月分帳bar堆疊圖設定檔
  const getRevenueSharingOption = useCallback(() => {
    return {
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
                  customLegendNameMap[item.seriesName] || item.seriesName
                }</span> <span class="value">${numberFormat.format(
                  item.data
                )} ${unitStr}</span></div>`;
              }
            };
            params.forEach((item) => {
              tooltipContent += template(item, "kW");
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
        left: 0,
        right: 38,
        bottom: 40,
        containLabel: true,
      },
      legend: {
        data: ["realTimeSpinningReserve"],
        selected: Object.keys(customLegendNameMap).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {}),
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
      xAxis: {
        name: "",
        nameLocation: "end",
        nameTextStyle: {
          color: color.white,
          fontWeight: "lighter",
          verticalAlign: "top",
          padding: [7, 0, 0, 0],
        },
        type: "category",
        splitLine: { show: false },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: color.white,
          fontSize: 14,
        },
        data: [...Array(24)].map(
          (_item, index) => `${index < 10 ? `0${index}` : index}:00`
        ),
      },
      yAxis: {
        name: "得標功率 kW",
        nameLocation: "end",
        nameTextStyle: {
          color: color.white,
          fontWeight: "lighter",
          fontSize: 14,
          verticalAlign: "top",
          padding: [-25, -35, 10, 0],
        },
        type: "value",
        axisLabel: {
          color: color.white,
          fontSize: 14,
        },
        splitLine: {
          lineStyle: {
            color: color.darkGray,
            type: "dashed",
          },
        },
      },
      series: [
        {
          type: "bar",
          stack: "total",
          name: "realTimeSpinningReserve",
          data: [],
          itemStyle: {
            color: color.lightBlue,
          },
          lineStyle: {
            width: 3,
          },
          symbolSize: 7,
          barWidth: "50%",
        },
      ],
    };
  }, []);
  //當月分帳bar堆疊圖設定檔繪製
  const setRevenueSharingChart = useCallback(
    (option) => {
      if (revenueSharingRef.current) {
        if (!revenueSharingChartRef.current) {
          revenueSharingChartRef.current = echarts.init(
            revenueSharingRef.current,
            null,
            {
              renderer: "canvas",
              useDirtyRect: false,
            }
          );
        }
        revenueSharingChartRef.current.setOption(option);
      }
    },
    [revenueSharingChartRef, revenueSharingRef]
  );
  //當月分帳bar堆疊圖客製化legend觸發事件
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

  return {
    customLegendOnClick,
    getAwardData,
    getRevenueSharingOption,
    setRevenueSharingChart,
  };
}

export { useHelpers };
