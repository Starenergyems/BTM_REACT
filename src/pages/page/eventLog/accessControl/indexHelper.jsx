import { Icon } from "@iconify/react";

function useHelpers() {
  //設備控制table 格式
  function getTableColumns() {
    return [
      {
        title: "No.",
        dataIndex: "id",
        align: "center",
      },
      {
        title: "時間",
        dataIndex: "dateTime",
        align: "center",
      },
      {
        title: "設備位置",
        dataIndex: "position",
        align: "center",
      },
      {
        title: "設備名稱",
        dataIndex: "name",
        align: "center",
      },
      {
        title: "門禁狀態",
        dataIndex: "status",
        align: "center",
        render: (value) => (value ? "開啟" : "警告"),
      },
      {
        title: "卡號",
        dataIndex: "accessNumber",
        align: "center",
      },
      {
        title: "ACK",
        dataIndex: "ack",
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
    ];
  }

  return { getTableColumns };
}

export { useHelpers };
