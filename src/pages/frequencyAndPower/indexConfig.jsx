const customLegendNameMap = {
  frequency: "頻率",
  power: "功率",
  spm: "執行率",
};
const chartStartTimeMinutesAgo = 30; //即時圖X座標起始時間從目前時間n分鐘前開始
const chartStartTimeMinutesAdd = 5; //即時圖X座標起始時間從目前時間chartStartTimeMinutesAgo分鐘後增加n分鐘緩衝
const chartStartTimeMinutesDuration = 5; //即時圖X座標每n分鐘顯示一筆
export {
  customLegendNameMap,
  chartStartTimeMinutesAgo,
  chartStartTimeMinutesAdd,
  chartStartTimeMinutesDuration,
};
