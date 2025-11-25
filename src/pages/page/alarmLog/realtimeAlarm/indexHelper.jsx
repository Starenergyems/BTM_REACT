import { Icon } from "@iconify/react";
import { Checkbox } from "@/components/units";

// const alarmColor = (eventLevel) => {
//   const colorMap = {
//     1: "red",
//     2: "orange",
//     3: "yellow",
//     4: "blue",
//     5: "purple",
//   };
//   return colorMap[eventLevel] || "gray"; // 預設顏色為灰色
// };

function alarmColor(eventLevel){
  const colorMap = ["red", "orange", "yellow", "blue", "purple"]
  return colorMap[eventLevel-1] || "gray"; // 預設顏色為灰色
};

function getTableColumns() {
  return [
    {
      title: "時間",
      dataIndex: "dateTime",
      align: "center",
      width: "12.25%",
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
              backgroundColor: alarmColor(record.eventLevel),
              borderRadius: "4px",
              marginRight: "15px",
            }}
          />
          <span>{record.dateTime}</span>
        </div>
      ),
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
      title: "已讀",
      dataIndex: "read",
      align: "center",
      render: (_, record) => (
        <Checkbox
          checked={record.read}  // 使用 record.read 作為初始狀態，確保初始時是打勾的
          onChange={(e) => handleReadChange(e, record)}  // 當狀態改變時調用該函數
          style={{
            width: 16,
            height: 16,
            boxShadow: "none",  // 移除陰影
          }}
          className="transparent-checkbox"  // 添加自定義樣式
        />
      ),
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
      render: (value) => (value ? new Date(value).toLocaleString() : null),
    },
  ];
}

export { getTableColumns };