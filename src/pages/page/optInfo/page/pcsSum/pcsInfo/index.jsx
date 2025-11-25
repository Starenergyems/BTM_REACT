import { useEffect, useState } from "react";
import { Col, Flex, Grid, Row } from "antd";
import { CategoryBox, InfoCircle, WithUnitValue } from "@/components/units";
import { color } from "@/styles/variable/indexStyle";
import ScopeStyle from "./indexStyle";

function PcsInfo() {
  const { useBreakpoint } = Grid;
  const [mainState, setMainState] = useState({
    alert: [
      { text: "整機告警", value: <span className="light-status"></span> },
      { text: "整機故障", value: <span className="light-status"></span> },
      { text: "告警狀態", value: <span className="light-status"></span> },
      { text: "故障狀態", value: <span className="light-status"></span> },
    ],
    acSide: [
      { text: "電網頻率", value: "59.8", unit: "Hz" },
      { text: "電網電流a", value: "0000.000", unit: "A" },
      { text: "電網電流b", value: "0000.000", unit: "A" },
      { text: "電網電流c", value: "0000.000", unit: "A" },
      { text: "電網電壓ab", value: "0000.000", unit: "kV" },
      { text: "電網電壓bc", value: "0000.000", unit: "kV" },
      { text: "電網電壓ca", value: "0000.000", unit: "kV" },
    ],
    battery: [
      { text: "今日充電量", value: "0000.00", unit: "MWh" },
      { text: "今日放電量", value: "0000.00", unit: "MWh" },
      { text: "總充電量", value: "0000.00", unit: "MWh" },
      { text: "總放電量", value: "0000.00", unit: "MWh" },
    ],
    dcSide: [
      { text: "直流電壓", value: "0000.000", unit: "kV" },
      { text: "直流電流", value: "0000.000", unit: "A" },
      { text: "直流功率", value: "0000.000", unit: "kW" },
    ],
    importantInfoRowGutter: [16, 16],
    secondaryFocusRowGutter: [16, 54],
    impedance: [
      { text: "正極對地阻抗值", value: "0.00", unit: "kΩ" },
      { text: "正極正常阻抗範圍", value: "0.00", unit: "kΩ" },
      { text: "負極對地阻抗值", value: "0.00", unit: "kΩ" },
      { text: "負極正常阻抗範圍", value: "0.00", unit: "kΩ" },
      { text: "漏電流", value: "6743", unit: "A" },
    ],
    nodeStatus: [
      { text: "直流開關", value: <span className="light-status"></span> },
      { text: "交流開關", value: <span className="light-status"></span> },
      { text: "直流熔絲", value: <span className="light-status"></span> },
      { text: "直流輔助開關1", value: <span className="light-status"></span> },
      { text: "直流輔助開關2", value: <span className="light-status"></span> },
    ],
    power: [
      { text: "實功", value: "0.00", unit: "kW" },
      { text: "虛功", value: "0.00", unit: "kVar" },
      { text: "功率因數", value: "0.00", unit: "" },
      { text: "最大放電功率", value: "0.00", unit: "kW" },
      { text: "最大充電功率", value: "0.00", unit: "kW" },
      { text: "最大感性虛功", value: "0.00", unit: "kVar" },
      { text: "最大容性虛功", value: "0.00", unit: "kVar" },
    ],
    temperature: [
      { text: "模塊溫度-1", value: "0.0", unit: "°C" },
      { text: "模塊溫度-2", value: "0.0", unit: "°C" },
      { text: "模塊溫度-3", value: "0.0", unit: "°C" },
      { text: "內部溫度", value: "0.0", unit: "°C" },
    ],
  });
  const screens = useBreakpoint();

  //處理<Row /> RWD的y軸間距
  useEffect(() => {
    setMainState((prevState) => {
      let importantInfoRowGutter = [16, 16];
      let secondaryFocusRowGutter = [16, 54];
      if (!screens.lg) {
        importantInfoRowGutter = [16, 54];
      }
      if (!screens.xxl) {
        secondaryFocusRowGutter = [16, 16];
      }
      return {
        ...prevState,
        //功率、交流側、直流側、充放電
        importantInfoRowGutter,
        secondaryFocusRowGutter,
      };
    });
  }, [screens]);

  return (
    <ScopeStyle>
      <div className="main-content mg-t-15-minus pd-y-20">
        <div className="section-important">
          <Flex className="infocircle-container mg-b-30">
            <InfoCircle
              text="充電"
              title="充放電狀態"
              textColor={color.lightBlue}
            />
            <InfoCircle
              text="運行"
              title="工作狀態"
              textColor={color.lightBlue}
            />
            <InfoCircle
              className="ac"
              text="並網恆功率(AC)"
              title="工作模式"
              textColor={color.lightBlue}
            />
            <InfoCircle text="23456" title="心跳" textColor={color.lightBlue} />
          </Flex>
          <Row gutter={mainState.importantInfoRowGutter}>
            <Col sm={12} lg={8}>
              <CategoryBox bodyClassName="h-100" className="h-100" title="功率">
                <ul>
                  {mainState.power.map((item, index) => (
                    <li className="pd-x-16 mg-y-4" key={index}>
                      <Flex className="item-group" justify="space-between">
                        <span className="title">{item.text}</span>
                        <span className="content">
                          <WithUnitValue
                            unit={item.unit}
                            value={item.value}
                            valueWidth="42px"
                          />
                        </span>
                      </Flex>
                    </li>
                  ))}
                </ul>
              </CategoryBox>
            </Col>
            <Col sm={12} lg={8}>
              <CategoryBox
                bodyClassName="h-100"
                className="h-100"
                title="交流側"
              >
                <ul>
                  {mainState.acSide.map((item, index) => (
                    <li className="pd-x-16 mg-y-4" key={index}>
                      <Flex className="item-group" justify="space-between">
                        <span className="title">{item.text}</span>
                        <span className="content">
                          <WithUnitValue
                            unit={item.unit}
                            value={item.value}
                            valueWidth="70px"
                          />
                        </span>
                      </Flex>
                    </li>
                  ))}
                </ul>
              </CategoryBox>
            </Col>
            <Col sm={24} lg={8}>
              <Flex className="h-100" gap={54} vertical>
                <CategoryBox
                  bodyClassName="h-100"
                  className="h-50"
                  title="直流側"
                >
                  <ul>
                    {mainState.dcSide.map((item, index) => (
                      <li className="pd-x-16 mg-y-4" key={index}>
                        <Flex className="item-group" justify="space-between">
                          <span className="title">{item.text}</span>
                          <span className="content">
                            <WithUnitValue
                              unit={item.unit}
                              value={item.value}
                              valueWidth="70px"
                            />
                          </span>
                        </Flex>
                      </li>
                    ))}
                  </ul>
                </CategoryBox>
                <CategoryBox
                  bodyClassName="h-100"
                  className="h-50"
                  title="充放電"
                >
                  <ul>
                    {mainState.battery.map((item, index) => (
                      <li className="pd-x-16 mg-y-4" key={index}>
                        <Flex className="item-group" justify="space-between">
                          <span className="title">{item.text}</span>
                          <span className="content">
                            <WithUnitValue
                              unit={item.unit}
                              value={item.value}
                              valueWidth="70px"
                            />
                          </span>
                        </Flex>
                      </li>
                    ))}
                  </ul>
                </CategoryBox>
              </Flex>
            </Col>
          </Row>
        </div>
        <div className="section-secondary-focus">
          <Row className="h-100" gutter={mainState.secondaryFocusRowGutter}>
            <Col className="h-50" span={12}>
              <CategoryBox
                bodyClassName="h-100"
                className="h-100"
                title="機內溫度"
              >
                <ul>
                  {mainState.temperature.map((item, index) => (
                    <li className="pd-x-16 mg-y-4" key={index}>
                      <Flex className="item-group" justify="space-between">
                        <span className="title">{item.text}</span>
                        <span className="content">
                          <WithUnitValue
                            unit={item.unit}
                            value={item.value}
                            valueWidth="48px"
                          />
                        </span>
                      </Flex>
                    </li>
                  ))}
                </ul>
              </CategoryBox>
            </Col>
            <Col className="h-50" span={12}>
              <CategoryBox
                bodyClassName="h-100"
                className="h-100"
                title="告警與故障"
              >
                <ul>
                  {mainState.alert.map((item, index) => (
                    <li className="pd-x-16 mg-y-4" key={index}>
                      <Flex className="item-group" justify="space-between">
                        <span className="title">{item.text}</span>
                        <span className="content">{item.value}</span>
                      </Flex>
                    </li>
                  ))}
                </ul>
              </CategoryBox>
            </Col>
            <Col className="h-50" span={12}>
              <CategoryBox
                bodyClassName="h-100"
                className="h-100"
                title="阻抗值"
              >
                <ul>
                  {mainState.impedance.map((item, index) => (
                    <li className="pd-x-16 mg-y-4" key={index}>
                      <Flex className="item-group" justify="space-between">
                        <span className="title">{item.text}</span>
                        <span className="content">
                          <WithUnitValue
                            unit={item.unit}
                            value={item.value}
                            valueWidth="48px"
                          />
                        </span>
                      </Flex>
                    </li>
                  ))}
                </ul>
              </CategoryBox>
            </Col>
            <Col className="h-50" span={12}>
              <CategoryBox
                bodyClassName="h-100"
                className="h-100"
                title="節點狀態"
              >
                <ul>
                  {mainState.nodeStatus.map((item, index) => (
                    <li className="pd-x-16 mg-y-4" key={index}>
                      <Flex className="item-group" justify="space-between">
                        <span className="title">{item.text}</span>
                        <span className="content">{item.value}</span>
                      </Flex>
                    </li>
                  ))}
                </ul>
              </CategoryBox>
            </Col>
          </Row>
        </div>
      </div>
    </ScopeStyle>
  );
}

export default PcsInfo;
