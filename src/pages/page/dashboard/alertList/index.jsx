import { useState } from "react";
import { Table } from "antd";
import { useHelpers } from "./indexHelper";
import { ScopeStyle } from "./indexStyle";

function AlertList({ className }) {
  const [
    mainState,
    // setMainState
  ] = useState({
    isTableLoading: false,
    tableData: [
      {
        id: 1,
        level: 1,
        occurrenceTime: "2021/09/15 15:07:13",
        location: "ABC盤",
        equipmentName: "BESS_2-1",
        eventContent: "低壓側電表異常",
      },
      {
        id: 2,
        level: 2,
        occurrenceTime: "2024-12-06 20:18:23",
        location: "戶外",
        equipmentName: "BESS_4-1",
        eventContent: "PCS3異常-配電供應異常",
      },
      {
        id: 3,
        level: 3,
        occurrenceTime: "2024-12-06 17:04:18",
        location: "貨櫃1",
        equipmentName: "ACP-A4",
        eventContent: "Cell 01-03 電壓不平衡",
      },
      {
        id: 4,
        level: 4,
        occurrenceTime: "2024-12-06 17:41:47",
        location: "戶外",
        equipmentName: "自動復閉器",
        eventContent: "變壓器油溫過高",
      },
      {
        id: 5,
        level: 5,
        occurrenceTime: "2024-12-05 09:03:01",
        location: "戶外",
        equipmentName: "UPS-CCTV",
        eventContent: "PCS2異常-配電供應異常",
      },
    ],
  });
  const { getTableColumns } = useHelpers();

  return (
    <ScopeStyle className={className}>
      <div className="section-title">
        <h2>告警列表</h2>
      </div>
      <div className="section-content">
        <Table
          className="mg-t-20 theme-secondary"
          columns={getTableColumns()}
          dataSource={mainState.tableData}
          loading={mainState.isTableLoading}
          pagination={false}
          rowClassName="custom-no-hover"
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

export default AlertList;
