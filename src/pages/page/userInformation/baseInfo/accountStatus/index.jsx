import { useState } from "react";
import { Table } from "antd";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

function AccountStatus() {
  const [
    mainState,
    // setMainState
  ] = useState({
    isTableLoading: false,
    statusTableData: [
      {
        statusStr: true,
        permissions: "管理者",
        permissionsDescription: "可監控系統狀態，及新增一名用戶",
        updateAt: "2024/11/26 12:00",
      },
    ],
  });
  const { getStatusTableColumns } = useHelpers();

  return (
    <ScopeStyle>
      <Table
        className="mg-t-30"
        columns={getStatusTableColumns()}
        dataSource={mainState.statusTableData}
        loading={mainState.isTableLoading}
        pagination={false}
        rowClassName="custom-no-hover"
        rowKey={"statusStr"}
        scroll={{
          x: "max-content",
        }}
        title={() => <h3 className="mg-b-0 mg-t-8-minus">帳號狀態</h3>}
      />
    </ScopeStyle>
  );
}

export default AccountStatus;
