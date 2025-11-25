import { useState } from "react";
import { Flex, Table } from "antd";
import { Select } from "@/components/units";
import { getTablePageSize } from "@/utils/table";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

function InfoList() {
  const [
    mainState,
    // setMainState
  ] = useState({
    isTableLoading: false,
    tableData: [
      {
        id: 1,
        equipmentName: "EMS1-1",
        location: "Control room",
        status: true,
        duration: 250,
        failCount: 0,
      },
      {
        id: 2,
        equipmentName: "EMS1-1",
        location: "Control room",
        status: true,
        duration: 250,
        failCount: 1,
      },
    ],
  });

  const { getTableColumns } = useHelpers();

  return (
    <ScopeStyle>
      <Flex className="filter-container" gap={16} wrap>
        <Select
          selectAttr={{
            allowClear: true,
            options: [
              { label: "選項一", value: 1 },
              { label: "選項二", value: 2 },
            ],
            placeholder: "選擇設備",
            showSearch: true,
          }}
        />
        <Select
          selectAttr={{
            allowClear: true,
            options: [
              { label: "選項一", value: 1 },
              { label: "選項二", value: 2 },
            ],
            placeholder: "選擇地點",
            showSearch: true,
          }}
        />
      </Flex>
      <Table
        className="mg-t-20"
        columns={getTableColumns()}
        dataSource={mainState.tableData}
        loading={mainState.isTableLoading}
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

export default InfoList;
