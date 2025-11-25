import * as echarts from "echarts";
import { hexToRgba } from "@/styles/function";
import { color } from "@/styles/variable/indexStyle";

function useHelpers({ refs, setMainState }) {
  //E-dReg 頻率功率關係line圖設定檔
  function getEdRegOption() {
    return {
      grid: {
        top: 10,
        right: 25,
        bottom: 50,
        left: 5,
        containLabel: true,
      },
      legend: {
        data: ["operationPoint", "operationRange"],
        selected: {
          operationPoint: true,
          operationRange: true,
        },
        show: false,
      },
      xAxis: {
        type: "value",
        min: 59.4,
        max: 60.6,
        interval: 0.1,
        axisLabel: {
          color: color.white,
        },
        splitLine: {
          lineStyle: {
            color: hexToRgba(color.white, 0.2),
            type: "solid",
            width: 1,
          },
        },
      },
      yAxis: {
        type: "value",
        min: -100,
        max: 100,
        interval: 20,
        axisLabel: {
          color: color.white,
        },
        splitLine: {
          lineStyle: {
            color: hexToRgba(color.white, 0.2),
            type: "solid",
            width: 1,
          },
        },
      },
      series: [
        {
          name: "operationRange",
          type: "line",
          data: [
            [59.4, 100],
            [59.5, 100],
            [59.75, 50],
            [59.98, 10],
            [60.02, 10],
            [60.25, -50],
            [60.5, -100],
            [60.6, -100],
            [60.5, -100],
            [60.25, -50],
            [60.02, -10],
            [59.98, -10],
            [59.75, 50],
          ],
          symbol: "none",
          lineStyle: {
            color: "#d8a97d",
          },
        },
        {
          name: "At座標",
          type: "line",
          data: [
            [59.5, -100],
            [59.5, 100],
            [60.6, 100],
          ],
          symbol: "none",
          lineStyle: {
            color: "#d8a97d",
            type: "dashed",
            width: 1,
          },
          markPoint: {
            data: [
              {
                coord: [59.5, -100], // 第一個座標
                label: {
                  show: true,
                  fontSize: 18,
                  fontWeight: "bold",
                  formatter: "A", // 文字標註
                  color: "#d8a97d", // 文字顏色
                  position: [-20, -20],
                },
                symbol: "circle",
                symbolSize: 0,
                symbolRotate: 0,
              },
              {
                coord: [60.6, 100], // 第二個座標
                label: {
                  show: true,
                  fontSize: 18,
                  formatter: "t", // 文字標註
                  color: "#d8a97d", // 文字顏色
                  position: [10, -8],
                },
                symbol: "circle",
                symbolSize: 0,
                symbolRotate: 0,
              },
            ],
          },
        },
        {
          name: "Bu座標",
          type: "line",
          data: [
            [59.75, -100],
            [59.75, 50],
            [60.6, 50],
          ],
          symbol: "none",
          lineStyle: {
            color: "#d8a97d",
            type: "dashed",
            width: 1,
          },
          markPoint: {
            data: [
              {
                coord: [59.75, -100], // 第一個座標
                label: {
                  show: true,
                  fontSize: 18,
                  fontWeight: "bold",
                  formatter: "B", // 文字標註
                  color: "#d8a97d", // 文字顏色
                  position: [-20, -20],
                },
                symbol: "circle",
                symbolSize: 0,
                symbolRotate: 0,
              },
              {
                coord: [60.6, 50], // 第二個座標
                label: {
                  show: true,
                  fontSize: 18,
                  formatter: "u", // 文字標註
                  color: "#d8a97d", // 文字顏色
                  position: [10, -8],
                },
                symbol: "circle",
                symbolSize: 0,
                symbolRotate: 0,
              },
            ],
          },
        },
        {
          name: "Cv座標",
          type: "line",
          data: [
            [59.98, -100],
            [59.98, 10],
          ],
          symbol: "none",
          lineStyle: {
            color: "#d8a97d",
            type: "dashed",
            width: 1,
          },
          markPoint: {
            data: [
              {
                coord: [59.98, -100], // 第二個座標
                label: {
                  show: true,
                  fontSize: 18,
                  fontWeight: "bold",
                  formatter: "C", // 文字標註
                  color: "#d8a97d", // 文字顏色
                  position: [-20, -20],
                },
                symbol: "circle",
                symbolSize: 0,
                symbolRotate: 0,
              },
            ],
          },
        },
        {
          name: "Dv座標",
          type: "line",
          data: [
            [60.02, -100],
            [60.02, 10],
            [60.6, 10],
          ],
          symbol: "none",
          lineStyle: {
            color: "#d8a97d",
            type: "dashed",
            width: 1,
          },
          markPoint: {
            data: [
              {
                coord: [60.02, -100], // 第一個座標
                label: {
                  show: true,
                  fontSize: 18,
                  formatter: "D", // 文字標註
                  fontWeight: "bold",
                  color: "#d8a97d", // 文字顏色
                  position: [10, -20],
                },
                symbol: "circle",
                symbolSize: 0,
                symbolRotate: 0,
              },
              {
                coord: [60.6, 10], // 第二個座標
                label: {
                  show: true,
                  fontSize: 18,
                  formatter: "v", // 文字標註
                  color: "#d8a97d", // 文字顏色
                  position: [10, -8],
                },
                symbol: "circle",
                symbolSize: 0,
                symbolRotate: 0,
              },
            ],
          },
        },
        {
          name: "Dv座標",
          type: "line",
          data: [
            [60.02, -100],
            [60.02, -10],
            [60.6, -10],
          ],
          symbol: "none",
          lineStyle: {
            color: "#d8a97d",
            type: "dashed",
            width: 1,
          },
          markPoint: {
            data: [
              {
                coord: [60.6, -10], // 第二個座標
                label: {
                  show: true,
                  fontSize: 18,
                  formatter: "w", // 文字標註
                  color: "#d8a97d", // 文字顏色
                  position: [10, -8],
                },
                symbol: "circle",
                symbolSize: 0,
                symbolRotate: 0,
              },
            ],
          },
        },
        {
          name: "Ex座標",
          type: "line",
          data: [
            [60.25, -100],
            [60.25, -50],
            [60.6, -50],
          ],
          symbol: "none",
          lineStyle: {
            color: "#d8a97d",
            type: "dashed",
            width: 1,
          },
          markPoint: {
            data: [
              {
                coord: [60.25, -100], // 第一個座標
                label: {
                  show: true,
                  fontSize: 18,
                  formatter: "E", // 文字標註
                  fontWeight: "bold",
                  color: "#d8a97d", // 文字顏色
                  position: [-20, -20],
                },
                symbol: "circle",
                symbolSize: 0,
                symbolRotate: 0,
              },
              {
                coord: [60.6, -50], // 第二個座標
                label: {
                  show: true,
                  fontSize: 18,
                  formatter: "x", // 文字標註
                  color: "#d8a97d", // 文字顏色
                  position: [10, -8],
                },
                symbol: "circle",
                symbolSize: 0,
                symbolRotate: 0,
              },
            ],
          },
        },
        {
          name: "Fy座標",
          type: "line",
          data: [
            [60.5, -100],
            [60.6, -100],
          ],
          symbol: "none",
          lineStyle: {
            color: "#d8a97d",
            type: "dashed",
            width: 1,
          },
          markPoint: {
            data: [
              {
                coord: [60.5, -100], // 第一個座標
                label: {
                  show: true,
                  fontSize: 18,
                  formatter: "F", // 文字標註
                  fontWeight: "bold",
                  color: "#d8a97d", // 文字顏色
                  position: [10, -20],
                },
                symbol: "circle",
                symbolSize: 0,
                symbolRotate: 0,
              },
              {
                coord: [60.6, -100], // 第二個座標
                label: {
                  show: true,
                  fontSize: 18,
                  formatter: "y", // 文字標註
                  color: "#d8a97d", // 文字顏色
                  position: [10, -15],
                },
                symbol: "circle",
                symbolSize: 0,
                symbolRotate: 0,
              },
            ],
          },
        },
        {
          name: "operationPoint",
          type: "scatter",
          data: [[60, 0]],
          symbolSize: 8,
          itemStyle: {
            color: "#5cdcf2",
          },
        },
      ],
    };
  }
  //E-dReg 頻率功率關係line圖繪製
  function setEdRegChart(option) {
    const { edRegRef, edRegChartRef } = refs;
    if (edRegRef && edRegRef.current) {
      if (!edRegChartRef.current) {
        edRegChartRef.current = echarts.init(edRegRef.current, null, {
          renderer: "canvas",
          useDirtyRect: false,
        });
      }
      edRegChartRef.current.setOption(option);
    }
  }
  //E-dReg 頻率功率關係line圖reset繪製
  function resizeChart(chartRef) {
    chartRef.current?.resize();
  }
  //取得客製化chart legend的樣式
  function getCustomLegendStyle(item) {
    switch (item) {
      case "operationPoint": {
        return {
          backgroundColor: color.lightBlue,
        };
      }
      case "operationRange": {
        return {
          backgroundColor: "#d8a97d",
        };
      }
      default:
        return {
          backgroundColor: color.white,
        };
    }
  }
  //modal是否顯示
  function setModalOpen(modalType) {
    return (isOpen) => {
      setMainState((prevState) => ({
        ...prevState,
        [modalType]: isOpen,
      }));
    };
  }
  return {
    getCustomLegendStyle,
    getEdRegOption,
    resizeChart,
    setEdRegChart,
    setModalOpen,
  };
}

export { useHelpers };
