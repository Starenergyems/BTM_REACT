import { useState } from "react";
import { DatePicker, Flex, Table } from "antd";
import dayjs from "dayjs";
import { Select } from "@/components/units";
import { getTablePageSize } from "@/utils/table";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

const { RangePicker } = DatePicker;

function EquipmentControl() {
  const [
    mainState,
    // setMainState
  ] = useState({
    endDate: dayjs().add(1, "day"),
    isTableLoading: false,
    startDate: dayjs().subtract(1, "month"),
    tableData: [
      {
        id: 1,
        dateTime: "2021/09/15 15:07:13",
        type: "系統模式",
        name: "EMS",
        operator: "Admin00",
        content: "設定E-dReg模式參數",
      },
      {
        id: 2,
        dateTime: "2021/09/15 15:07:13",
        type: "系統模式",
        name: "EMS",
        operator: "Admin00",
        content: "設定E-dReg模式參數",
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
            placeholder: "選擇類別",
            showSearch: true,
          }}
        />
        <RangePicker
          defaultValue={[mainState.startDate, mainState.endDate]}
          format="YYYY-MM-DD"
          placeholder={["查詢起始", "查詢結束"]}
          style={{
            width: "260px",
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

export default EquipmentControl;
