import { useState } from "react";
import { Flex, Table } from "antd";
import dayjs from "dayjs";
import { Select } from "@/components/units";
import { getTableColumns } from "./indexHelper";

function RealtimeAlarm() {
  const [
    mainState,
  ] = useState({
    endDate: dayjs().add(1, "day"),
    isTableLoading: false,
    startDate: dayjs().subtract(1, "month"),
    tableData: [
      {
        id:1, 
        dateTime: "2021/09/15 15:07:13",
        deviceName: "低壓側電表",
        location: "ACB盤",
        eventLevel: 1,
        eventContent: "低壓側電表異常",
        value: "N/A",
        recover: false,
        recoverDatetime: "",
      },
      {
        id:2, 
        dateTime: "2021/09/15 14:27:00",
        deviceName: "PCS3",
        location: "戶外",
        eventLevel: 2,
        eventContent: "PCS3異常-配電供應異常",
        value: "N/A",
        recover: false,
        recoverDatetime: "",
      },
      {
        id:3, 
        dateTime: "2021/09/14 20:00:00",
        deviceName: "Pack1",
        location: "貨櫃1",
        eventLevel: 2,
        eventContent: "Cell 01-03 電壓不平衡",
        value: "N/A",
        read: true,
        recover: false,
        recoverDatetime: "",
      },
      {
        id:4, 
        dateTime: "2021/09/14 19:32:58",
        deviceName: "變壓器2",
        location: "戶外",
        eventLevel: 1,
        eventContent: "變壓器由溫過高",
        value: "N/A",
        read: true,
        recover: true,
        recoverDatetime: "2021/09/15 15:25:01",
      },
      {
        id:5, 
        dateTime: "2021/09/14 18:47:36",
        deviceName: "PCS2",
        location: "戶外",
        eventLevel: 4,
        eventContent: "PCS2異常-配電供應異常",
        value: "N/A",
        read: true,
        recover: false,
        recoverDatetime: "",
      },
      {
        id:6, 
        dateTime: "2021/09/13 19:21:49",
        deviceName: "氣體偵測",
        location: "貨櫃1",
        eventLevel: 1,
        eventContent: "可燃氣體濃度過高",
        value: "N/A",
        read: true,
        recover: true,
        recoverDatetime: "2021/09/15 15:25:01",
      },
      {
        id:7, 
        dateTime: "2021/09/13 14:12:05",
        deviceName: "低壓側電表",
        location: "ACB盤",
        eventLevel: 1,
        eventContent: "低壓側電表異常",
        value: "N/A",
        read: true,
        recover: true,
        recoverDatetime: "2021/09/15 15:25:01",
      },
      {
        id:8, 
        dateTime: "2021/09/13 11:41:44",
        deviceName: "PCS3",
        location: "戶外",
        eventLevel: 2,
        eventContent: "PCS3異常-配電供應異常",
        value: "N/A",
        read: true,
        recover: true,
        recoverDatetime: "2021/09/15 15:25:01",
      },
      {
        id:9, 
        dateTime: "2021/09/12 13:07:13",
        deviceName: "低壓側電表",
        location: "ACB盤",
        eventLevel: 3,
        eventContent: "低壓側電表異常",
        value: "N/A",
        read: true,
        recover: true,
        recoverDatetime: "2021/09/15 15:25:01",
      },
      {
        id:10, 
        dateTime: "2021/09/12 10:27:08",
        deviceName: "PCS3",
        location: "戶外",
        eventLevel: 5,
        eventContent: "PCS3異常-配電供應異常",
        value: "N/A",
        read: true,
        recover: true,
        recoverDatetime: "2021/09/15 15:25:01",
      }
    ],
  });

  const [filters, setFilters] = useState({
    location: null,
    deviceName: null,
    eventLevel: null,
  });

  const locations = [...new Set(mainState.tableData.map((item) => item.location))];
  const devices = [...new Set(mainState.tableData.map((item) => item.deviceName))];
  const levels = [...new Set(mainState.tableData.map((item) => item.eventLevel))];

  const filteredData = mainState.tableData.filter((item) => {
    return (
      (!filters.location || item.location === filters.location) &&
      (!filters.deviceName || item.deviceName === filters.deviceName) &&
      (!filters.eventLevel || item.eventLevel === filters.eventLevel)
    );
  });

  const tableColumns = getTableColumns()
 
  return (
    <div>
      <Flex className="filter-container" gap={16} wrap>
        <Select
          allowClear
          placeholder="選擇地點"
          showSearch
          style={{ width: 150 }}
          options={locations.map((location) => ({ label: location, value: location }))}
          onChange={(value) => setFilters((prev) => ({ ...prev, location: value }))}
        />
        <Select
          allowClear
          placeholder="選擇設備"
          showSearch
          style={{ width: 150 }}
          options={devices.map((device) => ({ label: device, value: device }))}
          onChange={(value) => setFilters((prev) => ({ ...prev, deviceName: value }))}
        />
        <Select
          allowClear
          placeholder="選擇等級"
          showSearch
          style={{ width: 150 }}
          options={levels.map((level) => ({ label: `等級 ${level}`, value: level }))}
          onChange={(value) => setFilters((prev) => ({ ...prev, eventLevel: value }))}
        />
      </Flex>
      <Table
        className="mg-t-20"
        columns={tableColumns}
        rowKey="id" 
        dataSource={filteredData}
        loading={mainState.isTableLoading}
        pagination={{
          pageSize: 10,
          position: ["bottomCenter"],
          showSizeChanger: false,
        }}
        rowClassName="custom-no-hover"
        scroll={{ x: "max-content" }}
      />
    </div>
  );
}

export default RealtimeAlarm;