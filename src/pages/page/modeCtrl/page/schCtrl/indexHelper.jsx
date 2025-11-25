function getChartOption(execRate, socRef, dispatchPower, showCurrentTime) {
  //"執行率"陣列, "SOC"陣列, "電能排程"陣列, 是否(true/false)顯示現在時間&執行率
  const timeLabels = Array.from({ length: 96 }, (_, i) => {
    const hour = Math.floor(i / 4);
    const minute = (i % 4) * 15;
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  });

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const timeIndex = currentHour * 4 + Math.floor(currentMinute / 15);

  const series = [];

  // Conditionally add 現在時間 series
  if (showCurrentTime) {
    series.push(
      {
        name: "現在時間",
        type: "line",
        color: "#fdb750",
        data: Array(96)
          .fill(null)
          .map((_, i) => (i === timeIndex ? 50 : null)),
        lineStyle: { color: "#fdb750", width: 3 },
        showSymbol: false,
        markLine: {
          silent: true,
          symbol: "none",
          data: [{ xAxis: timeLabels[timeIndex] }],
          lineStyle: { width: 2, type: "solid" },
        },
        tooltip: { show: false },
      },
      {
        name: "執行率",
        type: "line",
        color: "#78D6EC",
        step: "middle",
        showSymbol: false,
        areaStyle: { color: "#78D6EC" },
        data: execRate,
      }
    );
  }

  // Add regular data series
  series.push(
    {
      name: "SOC參考值",
      type: "line",
      color: "#3fa7f0",
      step: "middle",
      showSymbol: false,
      data: socRef,
    },
    {
      name: "電能排程",
      type: "line",
      color: "#66cc66",
      step: "middle",
      showSymbol: false,
      yAxisIndex: 1,
      data: dispatchPower,
    }
  );

  return {
    backgroundColor: "#2b2f3a",
    grid: {
      show: true,
      backgroundColor: "#ffffff",
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        const xLabel = params[0].axisValue;
        const lines = params
          .filter((p) => p.seriesName !== "現在時間")
          .map((p) => `${p.marker} ${p.seriesName}: ${p.value}`);
        return `<strong>${xLabel}</strong><br/>` + lines.join("<br/>");
      },
    },
    legend: {
      bottom: 0,
      textStyle: { color: "#fff" },
      icon: "rect",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: timeLabels,
      axisLabel: {
        color: "#fff",
        formatter: (value) => (value.endsWith(":00") ? value : ""),
      },
    },
    yAxis: [
      {
        type: "value",
        name: "SOC參考值",
        min: 0,
        max: 100,
        position: "left",
        nameLocation: "middle",
        nameGap: 40,
        axisLabel: { color: "#4ab2e5" },
        nameTextStyle: { color: "#4ab2e5" },
      },
      {
        type: "value",
        name: "電能排程",
        min: -10000,
        max: 10000,
        position: "right",
        nameLocation: "middle",
        nameGap: 40,
        axisLabel: { color: "#66cc66" },
        nameTextStyle: { color: "#66cc66" },
      },
    ],
    series,
  };
}

export { getChartOption };
