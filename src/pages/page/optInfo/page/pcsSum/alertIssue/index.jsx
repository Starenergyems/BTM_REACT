import { Flex } from "antd";
import { CategoryBox, InfoCircle } from "@/components/units";
import ScopeStyle from "./indexStyle";
import { useState } from "react";

function AlertIssue() {
  const [
    mainState,
    // setMainState
  ] = useState({
    allAlert: [
      {
        text: "配電供電電源異常",
        value: <span className="light-status"></span>,
      },
      { text: "心跳停止", value: <span className="light-status"></span> },
      { text: "計量板通信異常", value: <span className="light-status"></span> },
      { text: "交流絕緣告警", value: <span className="light-status"></span> },
    ],
    allBreakdown: [
      { text: "低壓室門禁保護", value: <span className="light-status"></span> },
      { text: "遠程緊急停機", value: <span className="light-status"></span> },
      { text: "BMS通訊異常", value: <span className="light-status"></span> },
      { text: "交流絕緣故障", value: <span className="light-status"></span> },
      { text: "本地緊急停機", value: <span className="light-status"></span> },
      { text: "低壓室煙感", value: <span className="light-status"></span> },
      { text: "Goose通訊異常", value: <span className="light-status"></span> },
    ],
    alert: [
      {
        text: "溫度異常告警",
        value: <span className="light-status"></span>,
      },
      { text: "频率異常", value: <span className="light-status"></span> },
      { text: "直流熔絲異常", value: <span className="light-status"></span> },
      { text: "交流防雷器告警", value: <span className="light-status"></span> },
      { text: "電池電壓高", value: <span className="light-status"></span> },
      { text: "風機1異常", value: <span className="light-status"></span> },
      { text: "絕緣阻抗低告警", value: <span className="light-status"></span> },
      { text: "交流開關異常", value: <span className="light-status"></span> },
      { text: "直流傳感器異常", value: <span className="light-status"></span> },
      {
        text: (
          <div>
            <span>交流主接觸器</span>
            <div className="mg-t-5">觸點異常</div>
          </div>
        ),
        value: <span className="light-status"></span>,
      },
      { text: "電池電壓低", value: <span className="light-status"></span> },
      { text: "風機2異常", value: <span className="light-status"></span> },
      { text: "GFRT運行", value: <span className="light-status"></span> },
      { text: "直流開關異常", value: <span className="light-status"></span> },
      { text: "直流防雷器告警", value: <span className="light-status"></span> },
    ],
    breakdown: [
      {
        text: "交流欠壓",
        value: <span className="light-status"></span>,
      },
      { text: "交流過流", value: <span className="light-status"></span> },
      { text: "交流接觸器故障", value: <span className="light-status"></span> },
      { text: "直流欠壓", value: <span className="light-status"></span> },
      { text: "直流過流", value: <span className="light-status"></span> },
      { text: "模組保護", value: <span className="light-status"></span> },
      { text: "交流過壓", value: <span className="light-status"></span> },
      {
        text: "交流電流不平衡1",
        value: <span className="light-status"></span>,
      },
      { text: "交流電壓不平衡", value: <span className="light-status"></span> },
      {
        text: "直流過壓",
        value: <span className="light-status"></span>,
      },
      { text: "直流防雷器故障", value: <span className="light-status"></span> },
      { text: "模組過溫", value: <span className="light-status"></span> },
      { text: "交流低頻", value: <span className="light-status"></span> },
      {
        text: "交流電流不平衡2",
        value: <span className="light-status"></span>,
      },
      { text: "交流開關故障", value: <span className="light-status"></span> },
      { text: "直流開關故障", value: <span className="light-status"></span> },
      { text: "直流分量故障", value: <span className="light-status"></span> },
      { text: "電抗器過溫", value: <span className="light-status"></span> },
      { text: "交流過頻", value: <span className="light-status"></span> },
      {
        text: "交流電流不平衡3",
        value: <span className="light-status"></span>,
      },
      { text: "交流防雷器故障", value: <span className="light-status"></span> },
      {
        text: "直流電壓取樣故障",
        value: <span className="light-status"></span>,
      },
      { text: "直流熔斷器故障", value: <span className="light-status"></span> },
      { text: "變壓器過溫", value: <span className="light-status"></span> },
      { text: "漏電流保護", value: <span className="light-status"></span> },
      { text: "環溫異常", value: <span className="light-status"></span> },
      { text: "電池極性反接", value: <span className="light-status"></span> },
      { text: "孤島保護", value: <span className="light-status"></span> },
      { text: "機器碼重複故障", value: <span className="light-status"></span> },
      { text: "過載保護", value: <span className="light-status"></span> },
      { text: "硬件故障", value: <span className="light-status"></span> },
      { text: "控制電源異常", value: <span className="light-status"></span> },
      { text: "開機通信故障", value: <span className="light-status"></span> },
      { text: "驅動板故障", value: <span className="light-status"></span> },
      { text: "風機1故障", value: <span className="light-status"></span> },
      { text: "絕緣阻抗", value: <span className="light-status"></span> },
      {
        text: "LCD-DSP通信故障",
        value: <span className="light-status"></span>,
      },
      { text: "控制櫃溫度故障", value: <span className="light-status"></span> },
      { text: "中點電位偏移", value: <span className="light-status"></span> },
      { text: "風機2故障", value: <span className="light-status"></span> },
      { text: "取樣故障", value: <span className="light-status"></span> },
      { text: "主機故障", value: <span className="light-status"></span> },
      { text: "軟啟動故障", value: <span className="light-status"></span> },
      { text: "載波同步故障 ", value: <span className="light-status"></span> },
    ],
  });
  return (
    <ScopeStyle>
      {/* 整機告警狀態 */}
      <CategoryBox className="category-all-alert mg-t-5" title="整機告警狀態">
        <Flex className="pd-x-20">
          <InfoCircle text="1" title="" />
          <div className="info-box clearfix mg-x-auto">
            {mainState.allAlert.map((item, index) => (
              <div className="item-group" key={index}>
                <span className="title">{item.text}</span>
                <span className="content">{item.value}</span>
              </div>
            ))}
          </div>
        </Flex>
      </CategoryBox>
      {/* 整機故障狀態 */}
      <CategoryBox
        className="category-all-breakdown mg-t-16"
        title="整機故障狀態"
      >
        <Flex className="pd-x-20">
          <InfoCircle text="1" title="" />
          <div className="info-box clearfix mg-x-auto">
            {mainState.allBreakdown.map((item, index) => (
              <div className="item-group" key={index}>
                <span className="title">{item.text}</span>
                <span className="content">{item.value}</span>
              </div>
            ))}
          </div>
        </Flex>
      </CategoryBox>
      {/* 告警狀態 */}
      <CategoryBox className="category-alert mg-t-16" title="告警狀態">
        <Flex className="pd-x-20">
          <InfoCircle text="1" title="" />
          <div className="info-box clearfix mg-x-auto">
            {mainState.alert.map((item, index) => (
              <div className="item-group" key={index}>
                <span className="title">{item.text}</span>
                <span className="content">{item.value}</span>
              </div>
            ))}
          </div>
        </Flex>
      </CategoryBox>
      {/* 故障狀態 */}
      <CategoryBox className="category-breakdown mg-t-16" title="整機故障狀態">
        <Flex className="pd-x-20">
          <InfoCircle text="1" title="" />
          <div className="info-box clearfix mg-x-auto">
            {mainState.breakdown.map((item, index) => (
              <div className="item-group" key={index}>
                <span className="title">{item.text}</span>
                <span className="content">{item.value}</span>
              </div>
            ))}
          </div>
        </Flex>
      </CategoryBox>
    </ScopeStyle>
  );
}

export default AlertIssue;
