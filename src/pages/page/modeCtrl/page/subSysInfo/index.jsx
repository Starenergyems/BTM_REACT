import { Button, Flex, Table } from "antd";
import { Icon } from "@iconify/react";
import { PageBox, Select } from "@/components/units";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";
import { useState } from "react";
import SystemOperationModal from "./systemOperationModal";

function SubSysInfo() {
  const [mainState, setMainState] = useState({
    isModalOpen: false,
    isTableLoading: false,
    tableData: [
      {
        subSystemNumber: "Sub-System 1",
        activePowerRef: 1000,
        reactivePowerRef: 1000,
        subsystemOperatingMode: "投入",
        batteryPcsStatus: "投入",
        systemStatus: "正常",
        edRegFrequency: "正常",
        maxCellVoltage: null,
        minCellVoltage: null,
        rackVoltageDeviation: 0,
      },
    ],
  });
  const { getTableColumns, setModalOpen } = useHelpers({ setMainState });

  return (
    <ScopeStyle>
      <PageBox
        bgColorlinearGradient={{
          direction: "bottom",
          endColor: "transparent",
          endRange: "0",
          startColor: "#38404e",
          startRange: "200px",
        }}
        headerTitle="子系統資訊 Sub-System Information"
        headerStyle={{ width: "625px" }}
      >
        <Flex className="filter-container mg-t-30" gap={16} wrap>
          <Select
            selectAttr={{
              allowClear: true,
              options: [
                { label: "選項一", value: 1 },
                { label: "選項二", value: 2 },
              ],
              placeholder: "選擇子系統編號",
              showSearch: true,
            }}
          />
          <Button
            className="btn-control"
            color="default"
            onClick={() => setModalOpen(true)}
            style={{ width: "200px" }}
            variant="solid"
          >
            全部投入
            <Icon className="icon-edit mg-l-auto" icon="fa6-solid:pen" />
          </Button>
        </Flex>
        <Table
          className="mg-t-20"
          columns={getTableColumns()}
          rowKey="subSystemNumber"
          dataSource={mainState.tableData}
          loading={mainState.isTableLoading}
          pagination={false}
          rowClassName="custom-no-hover"
          scroll={{ x: "max-content" }}
        />
        <SystemOperationModal
          isModalOpen={mainState.isModalOpen}
          setModalOpen={setModalOpen}
        />
      </PageBox>
    </ScopeStyle>
  );
}

export default SubSysInfo;
