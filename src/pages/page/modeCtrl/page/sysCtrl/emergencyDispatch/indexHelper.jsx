import { WithUnitValue } from "@/components/units";

function useHelpers() {
  //告警列表table 格式
  function getTableColumns() {
    return [
      {
        title: "狀態",
        dataIndex: "status",
        align: "center",
        render: (value) => {
          switch (value) {
            case 0: {
              return "執行中";
            }
            case 1: {
              return "待執行";
            }
          }
        },
      },
      {
        title: "指令開始時間",
        dataIndex: "startDateTime",
        align: "center",
      },
      {
        title: "指令結束時間",
        dataIndex: "endDateTime",
        align: "center",
      },
      {
        title: "充放電執行量",
        dataIndex: "executionVolume",
        align: "center",
        render: ({ value, unit }) => (
          <WithUnitValue value={value} valueWidth="auto" unit={unit} />
        ),
      },
    ];
  }

  return { getTableColumns };
}

export { useHelpers };
