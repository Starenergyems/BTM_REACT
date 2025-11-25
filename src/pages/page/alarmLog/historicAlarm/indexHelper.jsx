import { Icon } from "@iconify/react";

function alarmColor(eventLevel){
  const colorMap = ["red", "orange", "yellow", "blue", "purple"]
  return colorMap[eventLevel-1] || "gray"; // 預設顏色為灰色
};

function getTableColumns() {
  return [
    {
      title: "No.",
      dataIndex: "no",
      align: "center",
      width: "6%",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center", // 垂直置中
            justifyContent: "flex-start", // 內容靠左對齊
          }}
        >
          <div
            style={{
              width: "12px", // 增加寬度
              height: "70px", // 增加高度
              backgroundColor: alarmColor(record.eventLevel) || "red", // 確保有顏色
              borderRadius: "4px",
              marginRight: "25px",
            }}
          />
          <span>{record.no}</span>
        </div>
      ),
    },

    {
      title: "時間",
      dataIndex: "dateTime",
      align: "center",
    },
    {
      title: "設備名稱",
      dataIndex: "deviceName",
      align: "center",
    },
    {
      title: "地點",
      dataIndex: "location",
      align: "center",
    },
    {
      title: "事件等級",
      dataIndex: "eventLevel",
      align: "center",
      render: (value) => (value ? "開啟" : "警告"),
    },
    {
      title: "事件內容",
      dataIndex: "eventContent",
      align: "center",
    },
    {
      title: "數值",
      dataIndex: "value",
      align: "center",
    },
    {
      title: "復歸",
      dataIndex: "recover",
      align: "center",
      render: (value) =>
        value && (
          <Icon
            color="#5d839a"
            fontSize={20}
            icon="icon-park-solid:check-one"
          />
        ),
    },
    {
      title: "復歸時間",
      dataIndex: "recoverDateTime",
      align: "center",
    },
  ];
}

export { getTableColumns };