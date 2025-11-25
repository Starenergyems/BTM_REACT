import { Flex } from "antd";
import { Icon } from "@iconify/react";

function useHelpers({ setMainState }) {
  //重設密碼表格所需格式
  function getUpdatePasswordTableColumns() {
    return [
      {
        dataIndex: "password",
        title: "原本密碼",
        align: "center",
        fixed: "left",
        render: (value) => value,
        width: 250,
      },
      {
        title: "",
        align: "right",
        render: () => (
          <Flex align="center" className="pd-r-8" gap={16} justify="end">
            <Icon
              className="icon-edit"
              fontSize={18}
              icon="fa6-solid:pen"
              onClick={() => setModalOpen(true)}
            />
          </Flex>
        ),
        width: "calc(100% - (250px))",
      },
    ];
  }
  //修改密碼modal是否顯示
  function setModalOpen(isOpen) {
    setMainState((prevState) => ({
      ...prevState,
      isModalOpen: isOpen,
    }));
  }
  //修改密碼modal是否顯示Loading
  function setModalLoading(isLoading) {
    setMainState((prevState) => ({
      ...prevState,
      isModalLoading: isLoading,
    }));
  }
  //確認密碼欄位驗證
  function validateConfirmPassword({ getFieldValue }) {
    return {
      validator(_, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve(); // 驗證通過
        }
        return Promise.reject(new Error("兩次輸入的密碼不一致"));
      },
    };
  }

  return {
    getUpdatePasswordTableColumns,
    setModalLoading,
    setModalOpen,
    validateConfirmPassword,
  };
}

export { useHelpers };
