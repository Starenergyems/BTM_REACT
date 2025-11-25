import { useState, useEffect } from "react";
import ScopeStyle from "./indexStyle";
import { Table } from "antd";

const rackTableColumns = [
  {
    dataIndex: "rackNum",
    title: "Rack編號",
    align: "center",
    fixed: "left",
  },
  {
    dataIndex: "sysMode",
    title: "系統模式",
    align: "center",
  },
  {
    dataIndex: "rackCurrent",
    title: "機櫃電流(A)",
    align: "center",
  },
  {
    dataIndex: "onlineVolt",
    title: "在線電壓(V)",
    align: "center",
  },
  {
    dataIndex: "soc",
    title: "SOC(%)",
    align: "center",
  },
  {
    dataIndex: "soh",
    title: "SOH(%)",
    align: "center",
  },
  {
    dataIndex: "maxVolt",
    title: "最高電芯電壓(V)",
    align: "center",
  },
  {
    dataIndex: "maxVoltLocat",
    title: "(Pack/Cell)",
    align: "center",
  },
  {
    dataIndex: "minVolt",
    title: "最低電芯電壓(V)",
    align: "center",
  },
  {
    dataIndex: "minVoltLocat",
    title: "(Pack/Cell)",
    align: "center",
  },
  {
    dataIndex: "maxVoltDiff",
    title: "最大壓差(V)",
    align: "center",
  },
  {
    dataIndex: "maxTemp",
    title: "最高電芯溫度(°C)",
    align: "center",
  },
  {
    dataIndex: "maxTempLocat",
    title: "(Pack/Cell)",
    align: "center",
  },
  {
    dataIndex: "minTemp",
    title: "最低電芯溫度(°C)",
    align: "center",
  },
  {
    dataIndex: "minTempLocat",
    title: "(Pack/Cell)",
    align: "center",
  },
  {
    dataIndex: "maxTempDiff",
    title: "最大溫差(°C)",
    align: "center",
  },
  {
    dataIndex: "cmuStatus",
    title: "CMU狀態",
    align: "center",
    render: (status) =>
      status === 1 ? (
        <span className="light-status fault"></span>
      ) : (
        <span className="light-status"></span>
      ),
  },
];

function RackInfo() {
  const [mainState, setMainState] = useState({
    isTableLoading: false,
    rackTableData: [
      {
        rackNum: "Rack01",
        sysMode: 0,
        rackCurrent: "0.0",
        onlineVolt: "0.0",
        soc: "68",
        soh: "90",
        maxVolt: "25",
        maxVoltLocat: "05/24",
        minVolt: "12",
        minVoltLocat: "03/24",
        maxVoltDiff: "13",
        maxTemp: "35",
        maxTempLocat: "12/24",
        minTemp: "28",
        minTempLocat: "1/24",
        maxTempDiff: "7",
        cmuStatus: 1,
      },
      {
        rackNum: "Rack02",
        sysMode: 0,
        rackCurrent: "0.0",
        onlineVolt: "0.0",
        soc: "68",
        soh: "90",
        maxVolt: "25",
        maxVoltLocat: "05/24",
        minVolt: "12",
        minVoltLocat: "03/24",
        maxVoltDiff: "13",
        maxTemp: "35",
        maxTempLocat: "12/24",
        minTemp: "28",
        minTempLocat: "1/24",
        maxTempDiff: "7",
        cmuStatus: 0,
      },
      {
        rackNum: "Rack03",
        sysMode: 0,
        rackCurrent: "0.0",
        onlineVolt: "0.0",
        soc: "68",
        soh: "90",
        maxVolt: "25",
        maxVoltLocat: "05/24",
        minVolt: "12",
        minVoltLocat: "03/24",
        maxVoltDiff: "13",
        maxTemp: "35",
        maxTempLocat: "12/24",
        minTemp: "28",
        minTempLocat: "1/24",
        maxTempDiff: "7",
        cmuStatus: 0,
      },
      {
        rackNum: "Rack04",
        sysMode: 0,
        rackCurrent: "0.0",
        onlineVolt: "0.0",
        soc: "68",
        soh: "90",
        maxVolt: "25",
        maxVoltLocat: "05/24",
        minVolt: "12",
        minVoltLocat: "03/24",
        maxVoltDiff: "13",
        maxTemp: "35",
        maxTempLocat: "12/24",
        minTemp: "28",
        minTempLocat: "1/24",
        maxTempDiff: "7",
        cmuStatus: 0,
      },
      {
        rackNum: "Rack05",
        sysMode: 0,
        rackCurrent: "0.0",
        onlineVolt: "0.0",
        soc: "68",
        soh: "90",
        maxVolt: "25",
        maxVoltLocat: "05/24",
        minVolt: "12",
        minVoltLocat: "03/24",
        maxVoltDiff: "13",
        maxTemp: "35",
        maxTempLocat: "12/24",
        minTemp: "28",
        minTempLocat: "1/24",
        maxTempDiff: "7",
        cmuStatus: 0,
      },
      {
        rackNum: "Rack06",
        sysMode: 0,
        rackCurrent: "0.0",
        onlineVolt: "0.0",
        soc: "68",
        soh: "90",
        maxVolt: "25",
        maxVoltLocat: "05/24",
        minVolt: "12",
        minVoltLocat: "03/24",
        maxVoltDiff: "13",
        maxTemp: "35",
        maxTempLocat: "12/24",
        minTemp: "28",
        minTempLocat: "1/24",
        maxTempDiff: "7",
        cmuStatus: 0,
      },
      {
        rackNum: "Rack07",
        sysMode: 0,
        rackCurrent: "0.0",
        onlineVolt: "0.0",
        soc: "68",
        soh: "90",
        maxVolt: "25",
        maxVoltLocat: "05/24",
        minVolt: "12",
        minVoltLocat: "03/24",
        maxVoltDiff: "13",
        maxTemp: "35",
        maxTempLocat: "12/24",
        minTemp: "28",
        minTempLocat: "1/24",
        maxTempDiff: "7",
        cmuStatus: 0,
      },
      {
        rackNum: "Rack08",
        sysMode: 0,
        rackCurrent: "0.0",
        onlineVolt: "0.0",
        soc: "68",
        soh: "90",
        maxVolt: "25",
        maxVoltLocat: "05/24",
        minVolt: "12",
        minVoltLocat: "03/24",
        maxVoltDiff: "13",
        maxTemp: "35",
        maxTempLocat: "12/24",
        minTemp: "28",
        minTempLocat: "1/24",
        maxTempDiff: "7",
        cmuStatus: 0,
      },
      {
        rackNum: "Rack09",
        sysMode: 0,
        rackCurrent: "0.0",
        onlineVolt: "0.0",
        soc: "68",
        soh: "90",
        maxVolt: "25",
        maxVoltLocat: "05/24",
        minVolt: "12",
        minVoltLocat: "03/24",
        maxVoltDiff: "13",
        maxTemp: "35",
        maxTempLocat: "12/24",
        minTemp: "28",
        minTempLocat: "1/24",
        maxTempDiff: "7",
        cmuStatus: 0,
      },
      {
        rackNum: "Rack10",
        sysMode: 0,
        rackCurrent: "0.0",
        onlineVolt: "0.0",
        soc: "68",
        soh: "90",
        maxVolt: "25",
        maxVoltLocat: "05/24",
        minVolt: "12",
        minVoltLocat: "03/24",
        maxVoltDiff: "13",
        maxTemp: "35",
        maxTempLocat: "12/24",
        minTemp: "28",
        minTempLocat: "1/24",
        maxTempDiff: "7",
        cmuStatus: 0,
      },
      {
        rackNum: "Rack11",
        sysMode: 0,
        rackCurrent: "0.0",
        onlineVolt: "0.0",
        soc: "68",
        soh: "90",
        maxVolt: "25",
        maxVoltLocat: "05/24",
        minVolt: "12",
        minVoltLocat: "03/24",
        maxVoltDiff: "13",
        maxTemp: "35",
        maxTempLocat: "12/24",
        minTemp: "28",
        minTempLocat: "1/24",
        maxTempDiff: "7",
        cmuStatus: 0,
      },
      {
        rackNum: "Rack12",
        sysMode: 0,
        rackCurrent: "0.0",
        onlineVolt: "0.0",
        soc: "68",
        soh: "90",
        maxVolt: "25",
        maxVoltLocat: "05/24",
        minVolt: "12",
        minVoltLocat: "03/24",
        maxVoltDiff: "13",
        maxTemp: "35",
        maxTempLocat: "12/24",
        minTemp: "28",
        minTempLocat: "1/24",
        maxTempDiff: "7",
        cmuStatus: 0,
      },
    ],
  });

  const fetchData = async () => {
    try {
      setMainState((prevState) => ({
        ...prevState,
        isTableLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setMainState((prevState) => ({ ...prevState, isTableLoading: false }));
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScopeStyle>
      <Table
        className="mg-t-30"
        columns={rackTableColumns}
        dataSource={mainState.rackTableData}
        scroll={{ y: 480 }}
        pagination={false}
        rowKey="rackNum"
      />
    </ScopeStyle>
  );
}

export default RackInfo;
