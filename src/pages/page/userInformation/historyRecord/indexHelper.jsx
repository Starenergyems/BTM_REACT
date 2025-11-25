import { toDateTimeStr } from "@/utils/format";

function useHelpers() {
  //表格所需格式
  function getTableColumns() {
    return [
      {
        dataIndex: "datetime",
        title: "時間",
        align: "center",
        render: (value) => toDateTimeStr(value),
      },
      {
        dataIndex: "page",
        title: "使用頁面",
        align: "center",
      },
      {
        dataIndex: "action",
        title: "操作行為",
        align: "center",
      },
    ];
  }

  return {
    getTableColumns,
  };
}

export { useHelpers };
