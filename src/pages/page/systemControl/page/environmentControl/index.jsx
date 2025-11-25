import { useState } from "react";
import { Col, Row } from "antd";
import { CategoryBox, PageBox } from "@/components/units";
import { ScopeStyle, LightStatusStyle } from "./indexStyle";

function EnvironmentControl() {
  const [
    mainState,
    // setMainState
  ] = useState({
    airConditioner: [
      {
        title: "空調-1",
        list: [
          { title: "空調模式", text: "送風" },
          { title: "開關", text: "開" },
          { title: "溫度", text: "24.8 °C" },
          { title: "溫度設定", text: "恆溫" },
          { title: "風速", text: "大" },
          { title: "濕度", text: "74%" },
          { title: "錯誤代碼", text: "123456" },
        ],
      },
      {
        title: "空調-2",
        list: [
          { title: "空調模式", text: "送風" },
          { title: "開關", text: "開" },
          { title: "溫度", text: "24.8 °C" },
          { title: "溫度設定", text: "恆溫" },
          { title: "風速", text: "大" },
          { title: "濕度", text: "74%" },
          { title: "錯誤代碼", text: "123456" },
        ],
      },
    ],
    ups: [
      {
        title: "UPS EMS",
        list: [
          { title: "SOC", text: "80%" },
          { title: "剩餘時間", text: "30 min" },
          { title: "模式", text: "正常" },
          {
            title: "告警",
            text: <LightStatusStyle $lightStatus="normal" />,
          },
          { title: "錯誤代碼", text: "1231455" },
          { title: "UPS模式", text: "開機" },
          { title: "UPS負載", text: "39%" },
          { title: "UPS電池電壓", text: "72V" },
          { title: "UPS電池電流", text: "16.9A" },
          { title: "UPS電池溫度", text: "27 °C" },
        ],
      },
      {
        title: "UPS CMS",
        list: [
          { title: "SOC", text: "80%" },
          { title: "剩餘時間", text: "30 min" },
          { title: "模式", text: "正常" },
          {
            title: "告警",
            text: <LightStatusStyle $lightStatus="normal" />,
          },
          { title: "錯誤代碼", text: "1231455" },
          { title: "UPS模式", text: "開機" },
          { title: "UPS負載", text: "39%" },
          { title: "UPS電池電壓", text: "72V" },
          { title: "UPS電池電流", text: "16.9A" },
          { title: "UPS電池溫度", text: "27 °C" },
        ],
      },
    ],
  });

  return (
    <ScopeStyle>
      <PageBox
        headerTitle="環境控制 Environmental Control"
        headerStyle={{ width: "532px" }}
      >
        {/* 空調控制 */}
        <section className="section-air-conditioner mg-t-30">
          <div className="section-title">
            <h2>空調控制</h2>
          </div>
          <Row gutter={[16, 16]}>
            {mainState.airConditioner.map((item, index) => (
              <Col md={24} lg={12} key={index}>
                <CategoryBox title={item.title}>
                  <div className="info-box clearfix mg-x-auto">
                    {item.list.map((itemListItem, itemListIndex) => (
                      <div className="item-group" key={itemListIndex}>
                        <span className="title">{itemListItem.title}</span>
                        <span className="content">{itemListItem.text}</span>
                      </div>
                    ))}
                  </div>
                </CategoryBox>
              </Col>
            ))}
          </Row>
        </section>
        {/* UPS 控制 */}
        <section className="section-ups mg-t-40">
          <div className="section-title">
            <h2>UPS 控制</h2>
          </div>
          <Row gutter={[16, 16]}>
            {mainState.ups.map((item, index) => (
              <Col sm={24} key={index}>
                <CategoryBox title={item.title}>
                  <div className="info-box clearfix mg-x-auto">
                    {item.list.map((itemListItem, itemListIndex) => (
                      <div className="item-group" key={itemListIndex}>
                        <span className="title">{itemListItem.title}</span>
                        <span className="content">{itemListItem.text}</span>
                      </div>
                    ))}
                  </div>
                </CategoryBox>
              </Col>
            ))}
          </Row>
        </section>
      </PageBox>
    </ScopeStyle>
  );
}

export default EnvironmentControl;
