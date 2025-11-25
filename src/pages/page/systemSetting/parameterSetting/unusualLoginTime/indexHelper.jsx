import { Flex } from "antd";
import dayjs from "dayjs";
import { Icon } from "@iconify/react";

function useHelpers({ setMainState }) {
  //設置異常登入時間表格所需格式
  function getUnusualLoginTimeTableColumns(modalInnerFormRef) {
    return [
      {
        dataIndex: "loginTime",
        title: "異常登入時間",
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
                  {
                    name: "loginTimeStart",
                    value: dayjs().hour(22).minute(0).second(0),
                  },
                  {
                    name: "loginTimeEnd",
                    value: dayjs().hour(6).minute(0).second(0),
                  },
                ]);
              }}
            />
          </Flex>
        ),
      },
    ];
  }
  //異常登入時間設定編輯modal是否顯示
  function setModalOpen(isOpen) {
    setMainState((prevState) => ({
      ...prevState,
      isModalOpen: isOpen,
    }));
  }

  return {
    getUnusualLoginTimeTableColumns,
    setModalOpen,
  };
}

export { useHelpers };
