import { useState } from "react";
import { DatePicker, Flex, Table } from "antd";
import { Select } from "@/components/units";
import { getTablePageSize } from "@/utils/table";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

function HistoryRecord() {
  const [
    mainState,
    // setMainState
  ] = useState({
    isModalOpen: false,
    isModalLoading: false,
    isTableLoading: false,
    tableData: [
      {
        employeeNumber: "SE0053",
        name: "江子晴",
        company: "星佑能源股份有限公司",
        department: "資訊處",
        email: "yuching@hdrenewables.com",
        permissions: "最高管理者",
        accountStatus: true,
        updateAt: "2000/01/01 23:59",
      },
      {
        employeeNumber: "SE0054",
        name: "江子晴2",
        company: "星佑能源股份有限公司",
        department: "資訊處",
        email: "yuching@hdrenewables.com",
        permissions: "開發人員",
        accountStatus: false,
        updateAt: "2001/01/01 23:59",
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
            placeholder: "選擇所有權限類別",
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
            placeholder: "選擇所有使用者",
            showSearch: true,
          }}
        />
        <DatePicker />
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
        rowKey="employeeNumber"
        scroll={{
          x: "max-content",
        }}
      />
    </ScopeStyle>
  );
}

export default HistoryRecord;
