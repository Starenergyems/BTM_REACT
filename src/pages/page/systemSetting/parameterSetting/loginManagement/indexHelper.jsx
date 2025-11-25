import { Flex } from "antd";
import { Icon } from "@iconify/react";

function useHelpers({ setMainState }) {
  //登入管理表格所需格式
  function getLoginManagementTableColumns(modalInnerFormRef) {
    return [
      {
        dataIndex: "failCount",
        title: "登入失敗上限",
        align: "center",
        width: 250,
      },
      {
        dataIndex: "suspendExpired",
        title: "每次停權時間",
        align: "center",
        width: 250,
      },
      {
        dataIndex: "tip",
        title: "登入畫面提示字元",
        align: "center",
        width: 500,
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
                  { name: "failCount", value: 3 },
                  { name: "suspendExpired", value: 24 },
                  {
                    name: "tip",
                    value: "非經同意者，請勿隨意操作系統。違者需承擔法律責任",
                  },
                ]);
              }}
            />
          </Flex>
        ),
      },
    ];
  }
  //登入管理編輯modal是否顯示
  function setModalOpen(isOpen) {
    setMainState((prevState) => ({
      ...prevState,
      isModalOpen: isOpen,
    }));
  }

  return {
    getLoginManagementTableColumns,
    setModalOpen,
  };
}

export { useHelpers };
