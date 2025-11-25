import { useState, useEffect } from "react";
import ScopeStyle from "./indexStyle";
import { InfoCircle, CategoryBox } from "@/components/units";
import { color } from "@/styles/variable/indexStyle";
import { Row, Col, Flex } from "antd";

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

function BscInfo() {
  const [mainState, setMainState] = useState({
    infoData: [
      { text: "正常", textColor: `${color.lightBlue}`, title: "工作狀態" },
      { text: "16/16", textColor: `${color.lightBlue}`, title: "運作櫃數" },
      { text: "00.0", textColor: `${color.lightBlue}`, title: "電壓(V)" },
      { text: "56.5", textColor: `${color.lightBlue}`, title: "在線SOC(%)" },
      { text: "99.8", textColor: `${color.lightBlue}`, title: "SOH(%)" },
    ],
    dataTitle: [
      "最高電芯電壓",
      "位置",
      "最低電芯電壓",
      "位置",
      "電壓差",

      "最高電芯溫度",
      "位置",
      "最低電芯溫度",
      "位置",
      "溫度差",

      "電流",
      "功率",
      "可充電功率",
      "可放電功率",

      "系統SOC",
      "最大Rack SOC",
      "最小Rack SOC",
      "Rack SOC差",

      "系統告警狀態",
      "系統故障狀態",
      "乾接點告警狀態",
      "乾接點故障狀態",

      "總充電量",
      "總放電量",
      "均衡狀態",
      "BMS通訊狀態",

      "總壓過壓",
      "總壓欠壓",
      "總壓壓差",
      "Pack過壓",
      "Pack欠壓",
      "Pack壓差",
      "電芯過壓",
      "電芯欠壓",
      "電芯壓差",
      "電芯過溫",
      "電芯低溫",
      "電芯溫差",
      "絕緣漏電",

      "心跳故障",
      "充電過流",
      "放電過流",
      "短路",
      "接觸器故障",
      "熔絲故障",
      "極性反接故障",
      "溫度傳感器異常",
      "電壓採集",
      "溫度採集",
      "電流採集",
    ],
    dataValue: [
      "00.00",
      "1-1-1",
      "00.00",
      "3-2-1",
      "00.00",

      "41.00",
      "4-2-1",
      "29.00",
      "4-1-2",
      "12.00",

      "00.00",
      "00.00",
      "00.00",
      "00.00",

      "98",
      "100",
      "94",
      "6",

      0,
      0,
      1,
      0,

      "00.00",
      "00.00",
      "正常",
      "連線",

      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      1,

      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      1,

      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,

      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
    ],
    dataUnit: [
      "kW",
      "",
      "kW",
      "",
      "kW",

      "°C",
      "",
      "°C",
      "",
      "°C",

      "A",
      "kW",
      "kW",
      "kW",

      "%",
      "%",
      "%",
      "%",

      "",
      "",
      "",
      "",

      "MWh",
      "MWh",
      "",
      "",
    ],
  });

  const renderCategoryData = (startIndex, endIndex) => {
    return mainState.dataTitle
      .slice(startIndex, endIndex)
      .map((item, index) => (
        <Flex
          align="center"
          gap={32}
          justify="space-between"
          key={startIndex + index}
        >
          <span>{item}</span>
          <span className="data-value">
            {mainState.dataValue[startIndex + index] +
              mainState.dataUnit[startIndex + index]}
          </span>
        </Flex>
      ));
  };

  const renderLightData = (startIndex, endIndex) => {
    return mainState.dataTitle
      .slice(startIndex, endIndex)
      .map((item, index) => (
        <Flex
          align="center"
          gap={32}
          justify="space-between"
          key={startIndex + index}
        >
          <span>{item}</span>
          {renderLight(mainState.dataValue[startIndex + index])}
        </Flex>
      ));
  };

  const renderDoubleLight = (startIndex, endIndex, valueDiff, colDiff) => {
    return mainState.dataTitle
      .slice(startIndex, endIndex)
      .map((item, index) => (
        <Flex
          align="center"
          justify="center"
          gap={8}
          key={startIndex + index}
          style={{ width: "100%" }} // Ensure full width
        >
          <span style={{ flex: 1, textAlign: "left", minWidth: "130px" }}>
            {item}
          </span>
          <span style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            {renderLight(mainState.dataValue[startIndex + index + valueDiff])}
          </span>
          <span style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            {renderLight(
              mainState.dataValue[startIndex + index + valueDiff + colDiff]
            )}
          </span>
        </Flex>
      ));
  };

  const renderLight = (input) => {
    if (input === 1) {
      return <span className="light-status fault"></span>;
    } else if (input === 0) {
      return <span className="light-status"></span>;
    } else {
      return <span className="light-status alarm"></span>;
    }
  };

  const fetchData = async () => {
    try {
      setMainState((prevState) => ({
        ...prevState,
        isTableLoading: false,
        infoData: prevState.infoData.map((item) => {
          if (item.title === "工作狀態") {
            const newStatus = getRandomStatus();
            return {
              ...item,
              text: newStatus,
              textColor: getStatusColor(newStatus),
            };
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
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} xl={15}>
          <Row gutter={[16, 8]}>
            <Col span={8}>
              <CategoryBox
                title="電芯電壓"
                themeCategory="circle"
                className="category-box"
              >
                {renderCategoryData(0, 5)}
              </CategoryBox>
              <CategoryBox
                title="電芯溫度"
                themeCategory="circle"
                className="category-box"
              >
                {renderCategoryData(5, 10)}
              </CategoryBox>
            </Col>
            <Col span={8}>
              <CategoryBox
                title="系統資訊"
                themeCategory="circle"
                className="category-box"
              >
                {renderCategoryData(10, 14)}
              </CategoryBox>
              <CategoryBox
                title="SOC資訊"
                themeCategory="circle"
                className="category-box"
              >
                {renderCategoryData(14, 18)}
              </CategoryBox>
            </Col>
            <Col span={8}>
              <CategoryBox
                title="系統狀態顯示"
                themeCategory="circle"
                className="category-box"
              >
                {renderLightData(18, 22)}
              </CategoryBox>
              <CategoryBox
                title="充放電資訊"
                themeCategory="circle"
                className="category-box"
              >
                {renderCategoryData(22, 26)}
              </CategoryBox>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} xl={9}>
          <CategoryBox
            title="CMU狀態顯示"
            themeCategory="circle"
            className="category-box-2"
          >
            <Row gutter={[16, 8]}>
              <Col span={12}>
                <Flex align="center" gap={8} justify="left">
                  <span style={{ minWidth: "130px" }}></span>
                  <span
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    告警
                  </span>
                  <span
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    故障
                  </span>
                </Flex>
                {renderDoubleLight(26, 39, 0, 13)}
              </Col>
              <Col span={12}>
                <Flex align="center" gap={8} justify="left">
                  <span style={{ minWidth: "130px" }}></span>
                  <span
                    style={{
                      flex: 1,
                      textAlign: "center",
                    }}
                  >
                    告警
                  </span>
                  <span
                    style={{
                      flex: 1,
                      textAlign: "center",
                    }}
                  >
                    故障
                  </span>
                </Flex>
                {renderDoubleLight(39, 50, 13, 11)}
              </Col>
            </Row>
          </CategoryBox>
        </Col>
      </Row>
    </ScopeStyle>
  );
}

export default BscInfo;
