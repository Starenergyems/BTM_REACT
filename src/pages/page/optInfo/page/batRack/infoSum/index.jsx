import { useState, useEffect } from "react";
import ScopeStyle from "./indexStyle";
import { InfoCircle } from "@/components/units";
import { Table } from "antd";
import { color } from "@/styles/variable/indexStyle";

const bmsTableColumns = [
  {
    dataIndex: "bmsNum",
    title: "BMS編號",
    align: "center",
    fixed: "left",
  },
  {
    dataIndex: "onlineNum",
    title: "機櫃在線數",
    align: "center",
  },
  {
    dataIndex: "optStatus",
    title: "運轉狀態",
    align: "center",
  },
  {
    dataIndex: "voltage",
    title: "電壓(V)",
    align: "center",
  },
  {
    dataIndex: "current",
    title: "電流(A)",
    align: "center",
  },
  {
    dataIndex: "SOC",
    title: "SOC(%)",
    align: "center",
  },
  {
    dataIndex: "maxVolt",
    title: "最高電芯電壓(V)",
    align: "center",
  },
  {
    dataIndex: "maxVoltDiff",
    title: "最高電芯壓差(V)",
    align: "center",
  },
  {
    dataIndex: "maxTemp",
    title: "最高電芯溫度(°C)",
    align: "center",
  },
  {
    dataIndex: "minTemp",
    title: "最低電芯溫度(°C)",
    align: "center",
  },
  {
    dataIndex: "maxTempDiff",
    title: "最大電芯溫差(°C)",
    align: "center",
  },
];

const getRandomStatus = () => {
  //假值
  const statuses = ["正常", "停機", "啟機"];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const getStatusColor = (status) => {
  //根據數值變字體顏色
  switch (status) {
    case "正常":
      return `${color.lightBlue}`;
    case "停機":
      return `${color.alertRed}`;
    case "啟機":
      return `${color.alertYellow}`;
    default:
      return `${color.lightBlue}`; // Default color
  }
};

function InfoSum() {
  const [mainState, setMainState] = useState({
    isTableLoading: false,
    bmsTableData: [
      {
        bmsNum: "1-1",
        onlineNum: "32/32",
        optStatus: "併網",
        voltage: "投入",
        current: "18",
        SOC: "50",
        maxVolt: "25",
        maxVoltDiff: "8",
        maxTemp: "35",
        minTemp: "28",
        maxTempDiff: "7",
      },
      {
        bmsNum: "1-2",
        onlineNum: "32/32",
        optStatus: "併網",
        voltage: "投入",
        current: "18",
        SOC: "50",
        maxVolt: "25",
        maxVoltDiff: "8",
        maxTemp: "35",
        minTemp: "28",
        maxTempDiff: "7",
      },
      {
        bmsNum: "2-1",
        onlineNum: "32/32",
        optStatus: "併網",
        voltage: "投入",
        current: "18",
        SOC: "50",
        maxVolt: "25",
        maxVoltDiff: "8",
        maxTemp: "35",
        minTemp: "28",
        maxTempDiff: "7",
      },
      {
        bmsNum: "2-2",
        onlineNum: "32/32",
        optStatus: "併網",
        voltage: "投入",
        current: "18",
        SOC: "50",
        maxVolt: "25",
        maxVoltDiff: "8",
        maxTemp: "35",
        minTemp: "28",
        maxTempDiff: "7",
      },
      {
        bmsNum: "3-1",
        onlineNum: "32/32",
        optStatus: "併網",
        voltage: "投入",
        current: "18",
        SOC: "50",
        maxVolt: "25",
        maxVoltDiff: "8",
        maxTemp: "35",
        minTemp: "28",
        maxTempDiff: "7",
      },
      {
        bmsNum: "3-2",
        onlineNum: "32/32",
        optStatus: "併網",
        voltage: "投入",
        current: "18",
        SOC: "50",
        maxVolt: "25",
        maxVoltDiff: "8",
        maxTemp: "35",
        minTemp: "28",
        maxTempDiff: "7",
      },
      {
        bmsNum: "4-1",
        onlineNum: "32/32",
        optStatus: "併網",
        voltage: "投入",
        current: "18",
        SOC: "50",
        maxVolt: "25",
        maxVoltDiff: "8",
        maxTemp: "35",
        minTemp: "28",
        maxTempDiff: "7",
      },
      {
        bmsNum: "4-2",
        onlineNum: "32/32",
        optStatus: "併網",
        voltage: "投入",
        current: "18",
        SOC: "50",
        maxVolt: "25",
        maxVoltDiff: "8",
        maxTemp: "35",
        minTemp: "28",
        maxTempDiff: "7",
      },
      {
        bmsNum: "5-1",
        onlineNum: "32/32",
        optStatus: "併網",
        voltage: "投入",
        current: "18",
        SOC: "50",
        maxVolt: "25",
        maxVoltDiff: "8",
        maxTemp: "35",
        minTemp: "28",
        maxTempDiff: "7",
      },
      {
        bmsNum: "5-2",
        onlineNum: "32/32",
        optStatus: "併網",
        voltage: "投入",
        current: "18",
        SOC: "50",
        maxVolt: "25",
        maxVoltDiff: "8",
        maxTemp: "35",
        minTemp: "28",
        maxTempDiff: "7",
      },
    ],
    infoData: [
      { text: "正常", textColor: `${color.lightBlue}`, title: "運轉狀態" },
      { text: "投入", textColor: `${color.lightBlue}`, title: "系統狀態" },
      { text: "6/7", textColor: `${color.lightBlue}`, title: "系統運作櫃數" },
      { text: "00.0", textColor: `${color.lightBlue}`, title: "系統電壓(V)" },
      { text: "00.0", textColor: `${color.lightBlue}`, title: "系統電流(A)" },
      { text: "56.5", textColor: `${color.lightBlue}`, title: "平均SOC(%)" },
      { text: "99.8", textColor: `${color.lightBlue}`, title: "平均SOH(%)" },
      { text: "35.1", textColor: `${color.lightBlue}`, title: "貨櫃均溫(°C)" },
      { text: "0", textColor: `${color.lightBlue}`, title: "心跳" },
    ],
  });

  const fetchData = async () => {
    try {
      setMainState((prevState) => ({
        ...prevState,
        isTableLoading: false,
        infoData: prevState.infoData.map((item) => {
          if (item.title === "運轉狀態") {
            const newStatus = getRandomStatus();
            return {
              ...item,
              text: newStatus,
              textColor: getStatusColor(newStatus),
            };
          } else if (item.title === "心跳") {
            return { ...item, text: String(Number(item.text) + 1) };
          }
          return item;
        }),
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
      <div className="info-circle-container">
        {mainState.infoData.map((item, index) => (
          <InfoCircle
            className="mg-b-24"
            key={index}
            text={item.text}
            textColor={item.textColor}
            title={item.title}
          />
        ))}
      </div>

      <Table
        className="mg-t-30"
        columns={bmsTableColumns}
        dataSource={mainState.bmsTableData}
        scroll={{ y: 480 }}
        pagination={false}
        rowKey="bmsNum"
      />
    </ScopeStyle>
  );
}

export default InfoSum;
