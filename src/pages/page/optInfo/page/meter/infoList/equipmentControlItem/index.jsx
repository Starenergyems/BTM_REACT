import { Flex } from "antd";
import { Icon } from "@iconify/react";
import { WithUnitValue } from "@/components/units";
import ScopeStyle from "./indexStyle";

function EquipmentControlItem({
  colType, // light | value
  colAttr = { sm: 12, xl: 8, xxl: 6 },
  isEdit,
  lightStatus,
  text,
  setModalOpen,
  unit,
  value,
}) {
  return (
    <ScopeStyle
      className={`col-type-${colType}`}
      {...colAttr}
      $lightStatus={lightStatus}
    >
      {colType === "light" && (
        <>
          <Flex align="center" gap={16} justify="center">
            <span className="title">{text}</span>
            <span className="light-status"></span>
            {isEdit && (
              <Icon
                className="icon-edit"
                icon="fa6-solid:pen"
                onClick={() => setModalOpen(true)}
              />
            )}
          </Flex>
        </>
      )}
      {colType === "value" && (
        <Flex align="center" gap={16} justify="center">
          <span className="title">{text}</span>
          <span className="content">
            <WithUnitValue unit={unit} value={value} valueWidth="60px" />
          </span>
        </Flex>
      )}
    </ScopeStyle>
  );
}

export default EquipmentControlItem;
