import { useState } from "react";
import { Button, Flex } from "antd";
import { CategoryBox, WithUnitValue } from "@/components/units";
import Ring from "./ring";
import { browseMode, editModalType } from "./indexConfig";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";
import EditModal from "./editModal";

// mode: read | edit
function SystemInfo({ className, mode = browseMode.read }) {
  const [mainState, setMainState] = useState({
    editInfo: {
      [editModalType.batteryStatus]: 1,
      [editModalType.loadTransferPower]: -10000,
      [editModalType.operatingMode]: 0,
      [editModalType.pcsStatus]: 0,
      [editModalType.ratedPower]: 10000,
      [editModalType.sysAvailability]: 0,
    },
    executionStatus: {
      data: [
        { title: "平均SOC", unit: "%", value: 89.5 },
        { title: "平均SOH", unit: "%", value: 99.9 },
      ],
      dailyUsageDegree: [
        { title: "充電", unit: "kWh", value: 5566.4 },
        { title: "放電", unit: "kWh", value: 1234.4 },
      ],
    },
    isModalOpen: false,
    editModalType: "",
    systemInfo: [
      { title: "頻率", unit: "Hz", value: 60.45 },
      { title: "實功", unit: "kW", value: 78.87 },
      { title: "虛功", unit: "kVar", value: 0.999 },
      { title: "電壓", unit: "kV", value: 23.456 },
      { title: "電流", unit: "A", value: 78.87 },
      { title: "功因", unit: "", value: 0.987 },
    ],
  });
  const { getValueStr, setEditModalType, setModalOpen } = useHelpers({
    setMainState,
  });
  const editInfoList = [
    {
      id: editModalType.loadTransferPower,
      title: "負載移轉功率",
      unit: "kW",
      value: mainState.editInfo[editModalType.loadTransferPower],
    },
    {
      id: editModalType.pcsStatus,
      title: "PCS狀態",
      unit: "",
      value: mainState.editInfo[editModalType.pcsStatus],
    },
    {
      id: editModalType.batteryStatus,
      title: "電池狀態",
      unit: "",
      value: mainState.editInfo[editModalType.batteryStatus],
    },
    {
      id: editModalType.sysAvailability,
      title: "系統可用性",
      unit: "",
      value: mainState.editInfo[editModalType.sysAvailability],
    },
    {
      id: editModalType.operatingMode,
      title: "運作模式",
      unit: "",
      value: mainState.editInfo[editModalType.operatingMode],
    },
    {
      id: editModalType.ratedPower,
      title: "額定功率",
      unit: "kW",
      value: mainState.editInfo[editModalType.ratedPower],
    },
  ];

  return (
    <ScopeStyle className={className}>
      <div className="section-title">
        <h2>系統資訊</h2>
      </div>
      <Flex className="section-content" gap={16}>
        {/* SBSPM 和 SOC 圓環圖*/}
        <Flex
          align="center"
          className="ring-container pd-l-32 pd-r-16"
          gap={32}
          vertical
        >
          <Ring title="SBSPM" value="100%" />
          <Ring title="SOC" value="100%" />
        </Flex>
        {/* 非編輯模式下(dashboard頁) */}
        {mode === browseMode.read && (
          <>
            {/* 系統資訊 */}
            <CategoryBox
              className="category-system-info"
              headerTextAlign="center"
              isShowBorder={false}
              title="系統資訊"
            >
              <h3>調頻服務中</h3>
              <ul className="content-list">
                {mainState.systemInfo.map((item, index) => (
                  <li key={index}>
                    <span className="title">{item.title}</span>
                    <span className="content">
                      <WithUnitValue
                        unit={item.unit}
                        value={item.value}
                        valueTextAlign="left"
                        valueWidth="auto"
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </CategoryBox>
            {/* 執行情況 */}
            <CategoryBox
              className="category-execution-status"
              headerTextAlign="center"
              isShowBorder={false}
              title="執行情況"
            >
              <div className="h-50">
                <ul className="content-list">
                  {mainState.executionStatus.data.map((item, index) => (
                    <li key={index}>
                      <span className="title">{item.title}</span>
                      <span className="content">
                        <WithUnitValue
                          unit={item.unit}
                          value={item.value}
                          valueWidth="60px"
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-50">
                <span className="secondary-title">當日使用度數</span>
                <ul className="content-list">
                  {mainState.executionStatus.dailyUsageDegree.map(
                    (item, index) => (
                      <li key={index}>
                        <span className="title">{item.title}</span>
                        <span className="content">
                          <WithUnitValue
                            unit={item.unit}
                            value={item.value}
                            valueWidth="60px"
                          />
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </CategoryBox>
          </>
        )}
        {/* 編輯模式下(模式控制-系統控制頁) */}
        {mode === browseMode.edit && (
          <div className="edit-container w-100">
            <Flex align="center" gap={16}>
              <span className="title">系統運行狀態</span>
              <span className="content">
                <h3>調頻服務中</h3>
              </span>
            </Flex>
            <Flex className="edit-list mg-t-20" gap={8} vertical>
              {editInfoList.map((item) => (
                <Flex align="center" gap={16} key={item.id}>
                  <span className="title">{item.title}</span>
                  <span className="content">
                    {item.unit ? (
                      <WithUnitValue
                        unit={item.unit}
                        value={item.value}
                        valueWidth="auto"
                      />
                    ) : (
                      <span>{getValueStr(item.value, item.id)}</span>
                    )}
                  </span>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setEditModalType(item.id);
                      setModalOpen(true);
                    }}
                  >
                    Set
                  </Button>
                </Flex>
              ))}
            </Flex>
            <EditModal
              editInfo={mainState.editInfo}
              isModalOpen={mainState.isModalOpen}
              modalType={mainState.editModalType}
              setModalOpen={setModalOpen}
            />
          </div>
        )}
      </Flex>
    </ScopeStyle>
  );
}

export default SystemInfo;
