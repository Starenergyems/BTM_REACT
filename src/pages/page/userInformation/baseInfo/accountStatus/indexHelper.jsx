import { Icon } from "@iconify/react";
import { toDateTimeStr } from "@/utils/format";

function useHelpers() {
  //帳號狀態表格所需格式
  function getStatusTableColumns() {
    return [
      {
        dataIndex: "statusStr",
        title: "用戶狀態",
        align: "center",
        render: (value) =>
          value && (
            <Icon
              className="no-cursor"
              color="#5d839a"
              fontSize={20}
              icon="icon-park-solid:check-one"
            />
          ),
      },
      {
        dataIndex: "permissions",
        title: "權限等級",
        align: "center",
      },
      {
        dataIndex: "permissionsDescription",
        title: "權限說明",
        align: "center",
      },
      {
        dataIndex: "updateAt",
        title: "最後登入時間",
        align: "center",
        render: (value) => toDateTimeStr(value),
      },
    ];
  }

  return {
    getStatusTableColumns,
  };
}

export { useHelpers };
