import { LevelStatusStyle } from "./indexStyle";

function useHelpers() {
  //告警列表table 格式
  function getTableColumns() {
    return [
      {
        title: "等級",
        dataIndex: "level",
        align: "center",
        render: (value) => (
          <LevelStatusStyle $level={value}>
            <span className="level-status"></span>
            {value}
          </LevelStatusStyle>
        ),
      },
      {
        title: "發生時間",
        dataIndex: "occurrenceTime",
        align: "center",
      },
      {
        title: "地點",
        dataIndex: "location",
        align: "center",
      },
      {
        title: "設備名稱",
        dataIndex: "equipmentName",
        align: "center",
      },
      {
        title: "事件內容",
        dataIndex: "eventContent",
        align: "center",
      },
    ];
  }

  return {
    getTableColumns,
  };
}

export { useHelpers };
