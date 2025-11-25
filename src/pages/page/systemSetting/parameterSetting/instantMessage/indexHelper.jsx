import { Flex } from "antd";
import { Icon } from "@iconify/react";

function useHelpers({ setMainState }) {
  //即時訊息內容表格所需格式
  function getInstantMessageTableColumns(modalInnerFormRef) {
    return [
      {
        dataIndex: "message",
        title: "預設訊息內容",
        align: "center",
        width: 250,
      },
      {
        title: "",
        align: "center",
        fixed: "right",
        render: () => (
          <Flex align="center" className="pd-r-8" gap={16} justify="end">
            <Icon
              className="icon-edit"
              icon="fa6-solid:pen"
              onClick={(e) => {
                e.stopPropagation();
                setModalOpen(true);
                modalInnerFormRef.current.setFields([
                  { name: "message", value: "您好! 歡迎登入EMS" },
                ]);
              }}
            />
          </Flex>
        ),
      },
    ];
  }
  //即時訊息內容編輯modal是否顯示
  function setModalOpen(isOpen) {
    setMainState((prevState) => ({
      ...prevState,
      isModalOpen: isOpen,
    }));
  }

  return {
    getInstantMessageTableColumns,
    setModalOpen,
  };
}

export { useHelpers };
