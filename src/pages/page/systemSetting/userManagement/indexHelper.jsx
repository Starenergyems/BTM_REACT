import { Icon } from "@iconify/react";
import { Flex } from "antd";

function useHelpers({ setMainState }) {
  //設備控制table 格式
  function getTableColumns(modalInnerFormRef) {
    return [
      {
        title: "工號",
        dataIndex: "employeeNumber",
        align: "center",
        fixed: "left",
      },
      {
        title: "姓名",
        dataIndex: "name",
        align: "center",
      },
      {
        title: "公司名稱",
        dataIndex: "company",
        align: "center",
      },
      {
        title: "所屬部門",
        dataIndex: "department",
        align: "center",
      },
      {
        title: "帳戶名稱",
        dataIndex: "email",
        align: "center",
      },
      {
        title: "權限類別",
        dataIndex: "permissions",
        align: "center",
      },
      {
        title: "帳戶狀態",
        dataIndex: "accountStatus",
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
        title: "最後登入時間",
        dataIndex: "updateAt",
        align: "center",
      },
      {
        title: "",
        dataIndex: "updateAt",
        align: "center",
        render: (_value, row) => (
          <Flex align="center" className="pd-r-8" gap={16} justify="end">
            <Icon
              className="icon-edit"
              icon="fa6-solid:pen"
              onClick={(e) => {
                modalInnerFormRef.current.setFields([
                  { name: "employeeNumber", value: row.employeeNumber },
                  { name: "name", value: row.name },
                  { name: "company", value: row.company },
                  { name: "department", value: row.department },
                  { name: "permissions", value: row.permissions },
                  { name: "accountStatus", value: row.accountStatus },
                ]);
                e.stopPropagation();
                setModalOpen(true);
              }}
            />
          </Flex>
        ),
      },
    ];
  }
  //編輯人員資料modal是否顯示
  function setModalOpen(isOpen) {
    setMainState((prevState) => ({
      ...prevState,
      isModalOpen: isOpen,
    }));
  }

  return {
    getTableColumns,
    setModalOpen,
  };
}

export { useHelpers };
