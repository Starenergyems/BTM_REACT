import { Flex } from "antd";
import { Icon } from "@iconify/react";
import { color } from "@/styles/variable/indexStyle";

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
        title: "設備名稱",
        dataIndex: "equipmentName",
        align: "center",
      },
      {
        title: "地點",
        dataIndex: "location",
        align: "center",
      },
      {
        title: "通訊狀態",
        dataIndex: "status",
        align: "center",
        render: (value) => (
          <>
            {value ? (
              <Flex gap={8} justify="center">
                <Icon
                  color="#5d839a"
                  fontSize={20}
                  icon="icon-park-solid:check-one"
                />
                通訊正常
              </Flex>
            ) : (
              <Flex gap={8} justify="center">
                <Icon
                  color={color.red}
                  fontSize={20}
                  icon="clarity:error-standard-solid"
                />
                通訊異常
              </Flex>
            )}
          </>
        ),
      },
      {
        title: "設備回復時間",
        dataIndex: "duration",
        align: "center",
        render: (value) => `${value} ms`,
      },
      {
        title: "通訊失敗次數",
        dataIndex: "failCount",
        align: "center",
      },
    ];
  }
  return { getTableColumns };
}

export { useHelpers };
