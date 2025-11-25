import * as echarts from "echarts";
import { customLegendNameMap } from "./indexConfig";
import { color } from "@/styles/variable/indexStyle";

function useHelpers({ refs, setMainState } = {}) {
  //服務品質指標pie圖設定檔
  function getServiceQualityOption() {
    return {
      tooltip: {
        trigger: "item",
        backgroundColor: color.themeDarkGray,
        borderColor: "transparent",
        textStyle: {
          color: color.white,
        },
        formatter: function (params) {
          return `<span class="mg-r-20">${params.marker} ${params.name}</span>${params.value} 次`;
        },
      },
      legend: {
        data: [
          customLegendNameMap.one,
          customLegendNameMap.zeroPointEight,
          customLegendNameMap.zeroPointSix,
          customLegendNameMap.zeroPointFour,
          customLegendNameMap.zeroPointTwo,
          customLegendNameMap.zero,
          customLegendNameMap.negativeOne,
        ],
        selected: {
          [customLegendNameMap.one]: true,
          [customLegendNameMap.zeroPointEight]: true,
          [customLegendNameMap.zeroPointSix]: true,
          [customLegendNameMap.zeroPointFour]: true,
          [customLegendNameMap.zeroPointTwo]: true,
          [customLegendNameMap.zero]: true,
          [customLegendNameMap.negativeOne]: true,
        },
        show: false,
      },
      series: [
        // 外圍白色邊框
        {
          type: "pie",
          radius: ["64%", "54%"],
          center: ["60%", "47%"], // 讓這個 pie 略大於內部的 pie
          silent: true, // 這層只做裝飾，不需要響應滑鼠事件
          itemStyle: {
            color: "#fff", // 設定為白色邊框
          },
          label: { show: false }, // 不顯示標籤
          data: [{ value: 1 }], // 只需要一個值來繪製完整圓環
        },
        {
          type: "pie",
          radius: "60%",
          center: ["60%", "47%"],
          // 主要圓餅圖
          data: [
            {
              value: 2,
              name: customLegendNameMap.zeroPointEight,
              itemStyle: { color: color.blueGray },
              label: { color: color.blueGray },
            },
            {
              value: 3,
              name: customLegendNameMap.zeroPointSix,
              itemStyle: { color: "#376fbb" },
              label: { color: "#376fbb" },
            },
            {
              value: 2,
              name: customLegendNameMap.zeroPointFour,
              itemStyle: { color: "#1e55a1" },
              label: { color: "#1e55a1" },
            },
            {
              value: 3,
              name: customLegendNameMap.zeroPointTwo,
              itemStyle: { color: color.darkBlue },
              label: { color: color.darkBlue },
            },
            {
              value: 1,
              name: customLegendNameMap.zero,
              itemStyle: { color: color.green },
              label: { color: color.green },
            },
            {
              value: 0,
              name: customLegendNameMap.negativeOne,
              itemStyle: { color: color.inputGray },
              label: { color: color.inputGray },
            },
            {
              value: 13,
              name: customLegendNameMap.one,
              itemStyle: { color: color.lightBlue },
              label: { color: color.lightBlue },
            },
          ],
          label: {
            show: true,
            borderWidth: 0,
            color: function (params) {
              return params.data.itemStyle.color; // 根據對應的圓餅圖區塊顏色設置文字顏色
            },
            formatter(params) {
              return params.data.value;
            },
            fontSize: 18,
          },
          labelLine: {
            length: 20,
            lineStyle: {
              color: color.white,
            },
          },
        },
      ],
    };
  }
  //服務品質指標pie圖繪製
  function setServiceQualityChart(option) {
    const { serviceQualityRef, serviceQualityChartRef } = refs;
    if (serviceQualityRef.current) {
      if (!serviceQualityChartRef.current) {
        serviceQualityChartRef.current = echarts.init(
          serviceQualityRef.current,
          null,
          {
            renderer: "canvas",
            useDirtyRect: false,
          }
        );
      }
      serviceQualityChartRef.current.setOption(option);
    }
  }
  //服務品質指標pie圖reset繪製
  function resizeChart(chartRef) {
    chartRef.current?.resize();
  }
  //服務品質指標pie圖客製化legend觸發事件
  function customLegendOnClick(name, chart) {
    const option = chart.getOption();
    const isSelected = !option.legend[0].selected[name];
    chart.dispatchAction({
      type: "legendToggleSelect",
      name,
    });
    chart.setOption({
      legend: {
        selected: {
          ...option.legend[0].selected,
          [name]: isSelected, // 同步 `selected` 狀態
        },
      },
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
  //取得客製化Legend的顏色
  function getCustomLegendColor(data, dataItem) {
    const filterIndex = data.findIndex((item) => item.name === dataItem);
    return data[filterIndex].itemStyle.color;
  }

  return {
    customLegendOnClick,
    getCustomLegendColor,
    getServiceQualityOption,
    resizeChart,
    setServiceQualityChart,
  };
}

export { useHelpers };
