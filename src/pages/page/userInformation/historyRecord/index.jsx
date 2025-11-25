import { useState } from "react";
import { DatePicker, Table } from "antd";
import { getTablePageSize } from "@/utils/table";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

function HistoryRecord() {
  const [
    mainState,
    // setMainState
  ] = useState({
    isTableLoading: false,
    tableData: [
      {
        id: 1,
        dateTime: "2024-12-20 13:47:47",
        page: "帳號管理",
        action: "新增使用者SE0001",
      },
      {
        id: 2,
        dateTime: "2024-12-21 13:47:47",
        page: "系統設定",
        action: "更改帳號密碼規範限制",
      },
    ],
  });
  const { getTableColumns } = useHelpers();

  return (
    <ScopeStyle>
      <DatePicker />
      <Table
        className="mg-t-20"
        columns={getTableColumns()}
        dataSource={mainState.tableData}
        pagination={{
          pageSize: getTablePageSize(),
          position: ["bottomCenter"],
          showSizeChanger: false,
        }}
        rowClassName="custom-no-hover"
        rowKey="id"
        scroll={{
          x: "max-content",
        }}
      />
    </ScopeStyle>
  );
}

export default HistoryRecord;
