import { useState } from "react";
import { Flex, Grid } from "antd";
import { CategoryBox, InfoCircle, WithUnitValue } from "@/components/units";
import { color } from "@/styles/variable/indexStyle";
import ScopeStyle from "./indexStyle";

function LcOverview() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const [
    mainState,
    // setMainState
  ] = useState({
    headerInfoData: [
      { text: "20/22", textColor: color.lightBlue, title: "PCS在線數" },
      { text: "43/44", textColor: color.lightBlue, title: "貨櫃在線數" },
      { text: "10.0", textColor: color.lightBlue, title: "當前實功(kW)" },
      { text: "0.7", textColor: color.lightBlue, title: "當前虛功(kVar)" },
      { text: "29.5", textColor: color.lightBlue, title: "總充電量(MWh)" },
      { text: "12.1", textColor: color.lightBlue, title: "總放電量(MWh)" },
    ],
  });

  return (
    <ScopeStyle>
      <div className="header-info">
        {/* headerInfoData */}
        <Flex gap={32} justify="center">
          {mainState.headerInfoData.map((item, index) => (
            <InfoCircle
              className="mg-b-24"
              key={index}
              text={item.text}
              textColor={item.textColor}
              title={item.title}
            />
          ))}
        </Flex>
      </div>
      <div className="lc-container">
        {[...Array(4)].map((_item, index) => (
          <CategoryBox
            className="lc-item"
            key={index}
            title={`LC${index + 1}(一組兩台)`}
          >
            <Flex gap={screens.lg ? 48 : 16} align="center">
              <Flex gap={16}>
                <InfoCircle text="0/1" title="PCS在線數" />
                <InfoCircle text="0/2" title="貨櫃在線數" />
              </Flex>
              <div className="lc-detail">
                <Flex vertical className="lc-detail-item-group">
                  <div>
                    <span className="title mg-r-16">系統工作狀態</span>
                    <span className="content">電源供應中</span>
                  </div>
                  <div>
                    <span className="title mg-r-16">PCS工作狀態</span>
                    <span className="content">正常</span>
                  </div>
                </Flex>
                <Flex vertical className="lc-detail-item-group">
                  <div>
                    <span className="title mg-r-16">實功</span>
                    <span className="content">
                      <WithUnitValue
                        value={"0.00"}
                        valueWidth="42px"
                        unit={"kW"}
                      />
                    </span>
                  </div>
                  <div>
                    <span className="title mg-r-16">虛功</span>
                    <span className="content">
                      <WithUnitValue
                        value={"0.00"}
                        valueWidth="42px"
                        unit={"kVar"}
                      />
                    </span>
                  </div>
                </Flex>
                <Flex vertical className="lc-detail-item-group">
                  <div>
                    <span className="title mg-r-16">總充電量</span>
                    <span className="content">
                      <WithUnitValue
                        value={"0.00"}
                        valueWidth="42px"
                        unit={"kW"}
                      />
                    </span>
                  </div>
                  <div>
                    <span className="title mg-r-16">總放電量</span>
                    <span className="content">
                      <WithUnitValue
                        value={"0.00"}
                        valueWidth="42px"
                        unit={"kW"}
                      />
                    </span>
                  </div>
                </Flex>
                <Flex vertical className="lc-detail-item-group">
                  <div>
                    <span className="title mg-r-16">PCS告警狀態</span>
                    <span className="content">
                      <span className="light-status"></span>
                    </span>
                  </div>
                  <div>
                    <span className="title mg-r-16">PCS故障狀態</span>
                    <span className="content">
                      <span className="light-status"></span>
                    </span>
                  </div>
                </Flex>
                <Flex vertical className="lc-detail-item-group">
                  <div>
                    <span className="title mg-r-16">系統告警狀態</span>
                    <span className="content">
                      <span className="light-status"></span>
                    </span>
                  </div>
                  <div>
                    <span className="title mg-r-16">系統故障狀態</span>
                    <span className="content">
                      <span className="light-status"></span>
                    </span>
                  </div>
                </Flex>
              </div>
            </Flex>
          </CategoryBox>
        ))}
      </div>
    </ScopeStyle>
  );
}

export default LcOverview;
