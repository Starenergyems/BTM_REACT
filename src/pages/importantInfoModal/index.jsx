import { useState } from "react";
import { Flex } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Input, WithUnitValue } from "@/components/units";
import { color } from "@/styles/variable/indexStyle";
import ScopeStyle from "./indexStyle";

function ImportantInfoModal({ isModalOpen, setModalOpen }) {
  const [
    mainState,
    // setMainState
  ] = useState({
    infoList: [
      { title: "頻率", value: "", unit: "Hz" },
      { title: "平均SOC", value: "", unit: "%" },
      { title: "實功", value: "", unit: "kW" },
      { title: "最低SOH", value: "", unit: "%" },
      { title: "虛功", value: "", unit: "kVar" },
      { title: "SBSPM", value: "", unit: "%" },
      { title: "電壓", value: "", unit: "kV" },
      { title: "當日充電", value: "", unit: "kWh" },
      { title: "電流", value: "", unit: "A" },
      { title: "當日放電", value: "", unit: "kWh" },
      { title: "功因", value: "", unit: "" },
    ],
  });
  return (
    <ScopeStyle
      cancelButtonProps={{
        type: "primary",
        className: "btn-cancel",
      }}
      cancelText="關閉"
      centered
      className="modal-shutdown"
      closable={false}
      open={isModalOpen}
      okButtonProps={{
        style: {
          display: "none",
        },
      }}
      onCancel={() => setModalOpen(false)}
      styles={{
        header: { textAlign: "center" },
        footer: {
          textAlign: "center",
          direction: "rtl",
        },
      }}
      title="系統重要數據"
    >
      <Flex gap={20} justify="space-between">
        <Flex className="w-50" vertical>
          <span>告警數</span>
          <Input
            inputAttr={{
              defaultValue: 252,
            }}
            prefix={
              <Icon
                color={color.yellow}
                fontSize={24}
                icon="fluent:warning-16-regular"
              />
            }
          />
        </Flex>
        <Flex className="w-50" vertical>
          <span>告警數</span>
          <Input
            inputAttr={{
              defaultValue: 97,
            }}
            prefix={
              <Icon
                color={color.red}
                fontSize={24}
                icon="fluent:warning-16-regular"
              />
            }
          />
        </Flex>
      </Flex>
      <ul className="info-list mg-t-20">
        {mainState.infoList.map((item, index) => (
          <li key={index}>
            <span className="title"> {item.title}</span>
            <span className="content">
              <WithUnitValue
                unit={item.unit}
                value={item.value}
                valueWidth="42px"
              />
            </span>
          </li>
        ))}
      </ul>
    </ScopeStyle>
  );
}

export default ImportantInfoModal;
