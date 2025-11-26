import { useCallback } from "react";
import * as echarts from "echarts";
import { color } from "@/styles/variable/indexStyle";
import { customLegendNameMap } from "./indexConfig";

// useHelpers為最外層function，function內區塊的撰寫順序由上而下為：
// 1. useCallback需要相依的function
// 2. api function
// 3. 一般function
function useHelpers({ refs, setMainState }) {
  const { awardPowerRef, awardPowerChartRef } = refs;
  /* Memoized Common Functions */
  //表格是否loading
  const setTableLoading = useCallback(
    (isLoading, tableTypeState) => {
      if (setMainState) {
        setMainState((prevState) => ({
          ...prevState,
          [tableTypeState]: isLoading,
        }));
      }
    },
    [setMainState]
  );

  const getAwardData = useCallback(() => {
    const fetchData = {
      today: [...Array(24)].map((item, index) => {
        if (index === 2) {
          return { hour: 2, awardCapacity: 450, awardPower: 450 };
        } else if (index === 3) {
          return { hour: 3, awardCapacity: 550, awardPower: 550 };
        } else if (index === 4) {
          return { hour: 4, awardCapacity: 600, awardPower: 600 };
        }
        return { hour: index, awardCapacity: 0, awardPower: 0 };
      }),
      // [
      //   { hour: 2, awardCapacity: 500, awardPower: 500 },
      //   { hour: 3, awardCapacity: 500, awardPower: 500 },
      //   { hour: 4, awardCapacity: 500, awardPower: 500 },
      // ],
      tomorrow: [...Array(24)].map((item, index) => {
        if (index === 3) {
          return { hour: 3, awardCapacity: 500, awardPower: 500 };
        } else if (index === 4) {
          return { hour: 4, awardCapacity: 500, awardPower: 500 };
        } else if (index === 5) {
          return { hour: 5, awardCapacity: 500, awardPower: 500 };
        }
        return { hour: index, awardCapacity: 0, awardPower: 0 };
      }),
    };

    setMainState((prevState) => {
      const obj = {};
      fetchData[prevState.awardStatus].forEach((item) => {
        obj[`${item.hour}:00`] = item.awardCapacity;
      });
      obj["id"] = "only-row"; //為了給table元件作為rowKey的識別，因為UI的設計不符合一般table的資料結構
      return {
        ...prevState,
        awardData: {
          ...prevState.awardData,
          today: fetchData.today,
          tomorrow: fetchData.tomorrow,
        },
        awardTableData: [obj],
      };
    });
  }, [setMainState]);
  //取得得標狀態的表格欄位
  function getAwardSatusTableColumns() {
    const hourList = [...Array(24)].map((_item, index) => {
      return {
        title: index,
        align: "center",
        width: 45,
        render: (value) => {
          const isRealTimeSpinningReserve = Object.keys(value).some(
            (hourKey) => parseInt(hourKey) === index
          );
          if (isRealTimeSpinningReserve) {
            return value[`${index}:00`];
          }
          return 0;
        },
        onCell: () => ({
          style: { color: color.lightBlue },
        }),
      };
    });
    return [
      {
        title: "整點",
        align: "center",
        fixed: "left",
        width: 80,
        render: () => (
          <>
            得標量
            <br />
            (kWh)
          </>
        ),
      },
      ...hourList,
    ];
  }
  //當月分帳bar堆疊圖設定檔
  const getAwardPowerOption = useCallback(() => {
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
        min: 0,
        max: 3000,
        inerval: 500,
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
  const setAwardPowerChart = useCallback(
    (option) => {
      if (awardPowerRef.current) {
        if (!awardPowerChartRef.current) {
          awardPowerChartRef.current = echarts.init(
            awardPowerRef.current,
            null,
            {
              renderer: "canvas",
              useDirtyRect: false,
            }
          );
        }
        awardPowerChartRef.current.setOption(option);
      }
    },
    [awardPowerChartRef, awardPowerRef]
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
    getAwardSatusTableColumns,
    getAwardPowerOption,
    setAwardPowerChart,
    setTableLoading,
  };
}

export { useHelpers };
