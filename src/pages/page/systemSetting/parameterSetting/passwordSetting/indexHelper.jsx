import { Flex } from "antd";
import { Icon } from "@iconify/react";

function useHelpers({ setMainState }) {
  //密碼強度設置表格所需格式
  function getPasswordTableColumns(modalInnerFormRef) {
    return [
      {
        dataIndex: "passwordLength",
        title: "密碼強度",
        align: "center",
        width: 250,
      },
      {
        dataIndex: "minNumber",
        title: "數字至少",
        align: "center",
        width: 250,
      },
      {
        dataIndex: "minUppercaseNumber",
        title: "大寫字母至少",
        align: "center",
        width: 250,
      },
      {
        dataIndex: "minLowercaseNumber",
        title: "小寫字母至少",
        align: "center",
        width: 250,
      },
      {
        dataIndex: "minSymbol",
        title: "特殊字元至少",
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
                  { name: "minNumber", value: 1 },
                  { name: "minUppercaseNumber", value: 0 },
                  { name: "minLowercaseNumber", value: 1 },
                  { name: "minSymbol", value: 1 },
                ]);
                setMainState((prevState) => ({
                  ...prevState,
                  modalFormCustomFields: {
                    ...prevState.modalFormCustomFields,
                    passwordStrongMinNumber: 5,
                    passwordStrongMaxNumber: 10,
                  },
                }));
              }}
            />
          </Flex>
        ),
      },
    ];
  }
  //密碼強度設置modal是否顯示
  function setModalOpen(isOpen) {
    setMainState((prevState) => ({
      ...prevState,
      isModalOpen: isOpen,
    }));
  }

  return {
    getPasswordTableColumns,
    setModalOpen,
  };
}

export { useHelpers };
