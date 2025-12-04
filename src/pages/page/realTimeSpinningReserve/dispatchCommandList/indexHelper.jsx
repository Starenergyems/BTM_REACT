import { useCallback } from "react";
import { toDateTimeStr } from "@/utils/format";

// useHelpers為最外層function，function內區塊的撰寫順序由上而下為：
// 1. useCallback需要相依的function
// 2. api function
// 3. 一般function
function useHelpers({ setMainState }) {
  /* Memoized Common Functions */
  //表格是否loading
  const setTableLoading = useCallback(
    (isLoading, tableTypeState) => {
      if (setMainState) {
        setMainState((prevState) => ({
          ...prevState,
          [tableTypeState]: isLoading,
        }));
      }
    },
    [setMainState]
  );

  //取得得標狀態的表格欄位
  function getDispatchCommandTableColumns() {
    return [
      {
        dataIndex: "notificationTime",
        title: "通知時間",
        align: "center",
        fixed: "left",
        render: (value) => toDateTimeStr(value),
      },
      {
        dataIndex: "serviceStart",
        title: "服務開始",
        align: "center",
        render: (value) => toDateTimeStr(value, "HH:mm"),
      },
      {
        dataIndex: "serviceEnd",
        title: "服務結束",
        align: "center",
        render: (value) => toDateTimeStr(value, "HH:mm"),
      },
      {
        dataIndex: "prev5minAvgPower",
        title: (
          <>
            指令前五分鐘
            <br />
            平均功率(kW)
          </>
        ),
        align: "center",
      },
      {
        dataIndex: "actualStart",
        title: "實際開始",
        align: "center",
        render: (value) => toDateTimeStr(value, "HH:mm"),
      },
      {
        dataIndex: "actualEnd",
        title: "實際結束",
        align: "center",
        render: (value) => toDateTimeStr(value, "HH:mm"),
      },
      {
        dataIndex: "fullResponseTime",
        title: (
          <>
            完全反應時間
            <br />
            (min)
          </>
        ),
        align: "center",
      },
      {
        dataIndex: "spm",
        title: (
          <>
            當次執行率
            <br />
            (%)
          </>
        ),
        align: "center",
      },
      {
        dataIndex: "serviceEnergy",
        title: (
          <>
            當次服務電能
            <br />
            (kWh)
          </>
        ),
        align: "center",
      },
    ];
  }

  return {
    getDispatchCommandTableColumns,
    setTableLoading,
  };
}

export { useHelpers };
