import { useState } from "react";
import { Table } from "antd";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

function EmergencyDispatch({ className }) {
  const [
    mainState,
    // setMainState
  ] = useState({
    isTableLoading: false,
    tableData: [
      {
        id: 1,
        status: 0,
        startDateTime: "2021/09/15 15:07:13",
        endDateTime: "2025/03/03 13:15:00",
        executionVolume: {
          value: 1000,
          unit: "kW",
        },
      },
      {
        id: 2,
        status: 1,
        startDateTime: "2021/09/15 15:07:13",
        endDateTime: "2025/03/03 13:15:00",
        executionVolume: {
          value: 1000,
          unit: "kW",
        },
      },
    ],
  });
  const { getTableColumns } = useHelpers();

  return (
    <ScopeStyle className={className}>
      <div className="section-title">
        <h2>緊急調度指令</h2>
      </div>
      <div className="section-content">
        <Table
          className="mg-t-20 theme-secondary"
          columns={getTableColumns()}
          dataSource={mainState.tableData}
          loading={mainState.isTableLoading}
          pagination={false}
          rowClassName={(record) =>
            `custom-no-hover ${record.status === 0 ? "active" : ""}`
          }
          rowKey="id"
          scroll={{
            x: "max-content",
            y: mainState.tableData.length > 6 ? 364 : undefined,
          }}
        />
      </div>
    </ScopeStyle>
  );
}

export default EmergencyDispatch;
