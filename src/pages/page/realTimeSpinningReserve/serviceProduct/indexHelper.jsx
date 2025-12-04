import { useCallback } from "react";
import * as echarts from "echarts";
import { hexToRgba } from "@/styles/function";
import { color } from "@/styles/variable/indexStyle";
import { customLegendNameMap } from "./indexConfig";

// useHelpers為最外層function，function內區塊的撰寫順序由上而下為：
// 1. useCallback需要相依的function
// 2. api function
// 3. 一般function
function useHelpers({ refs, setMainState }) {
  const {
    realTimeSpinningReservePowerRef,
    realTimeSpinningReservePowerChartRef,
  } = refs;
  /* Memoized Common Functions */
  // 假資料:讓資料更平滑隨機值不要落差太大
  function smoothRandom(prev, maxDelta = 5, min = 0, max = 60) {
    const delta = Math.floor(Math.random() * maxDelta * 2) - maxDelta;
    let next = prev + delta;
    next = Math.max(min, Math.min(max, next));
    return next;
  }
  //假資料:暫時產出從0:00~endTime每分鐘一個資料的陣列值(陣列值為隨機負載消耗功率、)
  const generateMinuteIntervals = useCallback((endTime, getDataType) => {
    const [endHour, endMinute] = endTime.split(":").map(Number);
    const totalMinutes = endHour * 60 + endMinute + 1;
    const result = new Array(totalMinutes);

    // 初始化第一個值（可自行調整）
    let prevLoad = 30; // 初始負載功率

    for (let i = 0; i < totalMinutes; i++) {
      const h = Math.floor(i / 60);
      const m = i % 60;

      // 平滑負載
      const loadPower = smoothRandom(prevLoad, 5, 30, 60);

      // 派電值必須
      const dispatchPower = Math.floor(Math.random() * 60);

      result[i] = {
        time: (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m),
        loadPower,
        dispatchPower,
      };
    }
    if (getDataType) {
      return result.map((item) => item[getDataType]);
    }
    return result;
  }, []);
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
  //取得服務商品API資料
  const getServiceProductData = useCallback(() => {
    const fetchData = {
      realTimeSpinningReserve: generateMinuteIntervals("10:00"),
    };
    setMainState((prevState) => {
      const obj = {};
      fetchData[prevState.serviceProductStatus].forEach((item) => {
        obj[`${item.hour}:00`] = item.awardCapacity;
      });
      obj["id"] = "only-row";
      //為了給table元件作為rowKey的識別，因為UI的設計不符合一般table的資料結構
      return {
        ...prevState,
        serviceProductTableData: [obj],
        serviceProductData: fetchData.realTimeSpinningReserve,
      };
    });
  }, [generateMinuteIntervals, setMainState]);

  //取得得標狀態的表格欄位
  function getSpmTableColumns() {
    const hourList = [...Array(24)].map((_item, index) => {
      return {
        title: index,
        align: "center",
        width: 45,
        render: (value) => value[`${index}:00`],
        onCell: (value) => ({
          style: {
            color: value[`${index}:00`] === "X" ? color.gray : color.lightBlue,
          },
        }),
      };
    });
    return [
      {
        title: "整點",
        align: "center",
        fixed: "left",
        width: 80,
        render: () => "執行率",
      },
      ...hourList,
    ];
  }
  //當月分帳bar堆疊圖設定檔
  const getrRealTimeSpinningReservePowerOption = useCallback(() => {
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
              if (!item.data && item.data !== 0) {
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
        left: 10,
        right: 38,
        bottom: 40,
        containLabel: true,
      },
      legend: {
        data: ["realTimeSpinningReserve", "dispatchPower"],
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
        type: "category",
        splitLine: { show: false },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: color.white,
          fontSize: 14,
          interval: function (index, value) {
            // 根據容器寬度動態計算顯示間隔
            const containerWidth =
              realTimeSpinningReservePowerRef.current?.offsetWidth || 1000;
            const totalLabels = 24; // 24小時
            const labelWidth = 50; // 每個標籤大約佔用的寬度
            const maxLabels = Math.floor(containerWidth / labelWidth);
            const interval = Math.ceil(totalLabels / maxLabels);
            // 只顯示整點且符合間隔
            return value.endsWith(":00") && index % (interval * 60) === 0;
          },
          formatter: function (value) {
            return value.endsWith(":00") ? value : "";
          },
          padding: [10, 0, 0, 0],
        },
        data: generateMinuteIntervals("23:59", "time"),
      },
      yAxis: {
        min: 0,
        max: 60,
        inerval: 10,
        name: "容量 (kW)",
        nameLocation: "end",
        nameTextStyle: {
          color: color.white,
          fontWeight: "lighter",
          fontSize: 14,
          verticalAlign: "top",
          padding: [-25, 0, 10, 0],
        },
        type: "value",
        axisLabel: {
          color: color.white,
          fontSize: 14,
          padding: [0, 5, 0, 0],
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
          type: "line",
          areaStyle: {},
          name: "realTimeSpinningReserve",
          data: [],
          markArea: {
            data: [[{ name: "10:08", xAxis: "10:08" }, { xAxis: "10:08" }]],
            itemStyle: {
              borderColor: color.white,
              borderWidth: 2,
            },
            label: {
              color: color.white,
              fontSize: 18,
              distance: 10,
            },
          },
          z: 0,
          itemStyle: {
            color: hexToRgba(color.red, 0.7),
          },
          lineStyle: {
            width: 1,
          },
          symbol: "none",
        },
        {
          type: "line",
          name: "dispatchPower",
          data: [],
          markArea: {
            data: [[{ name: "10:08", xAxis: "10:08" }, { xAxis: "10:08" }]],
            itemStyle: {
              borderColor: color.white,
              borderWidth: 2,
            },
            label: {
              color: color.white,
              fontSize: 18,
              distance: 10,
            },
          },
          itemStyle: {
            color: color.lightBlue,
          },
          lineStyle: {
            width: 2,
          },
          symbol: "none",
        },
      ],
    };
  }, [generateMinuteIntervals, realTimeSpinningReservePowerRef]);

  //當月分帳bar堆疊圖設定檔繪製
  const setRealTimeSpinningReservePowerChart = useCallback(
    (option) => {
      if (realTimeSpinningReservePowerRef.current) {
        if (!realTimeSpinningReservePowerChartRef.current) {
          realTimeSpinningReservePowerChartRef.current = echarts.init(
            realTimeSpinningReservePowerRef.current,
            null,
            {
              renderer: "canvas",
              useDirtyRect: false,
            }
          );
        }
        realTimeSpinningReservePowerChartRef.current.setOption(option);
      }
    },
    [realTimeSpinningReservePowerChartRef, realTimeSpinningReservePowerRef]
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
    getServiceProductData,
    getSpmTableColumns,
    getrRealTimeSpinningReservePowerOption,
    setRealTimeSpinningReservePowerChart,
    setTableLoading,
  };
}

export { useHelpers };
