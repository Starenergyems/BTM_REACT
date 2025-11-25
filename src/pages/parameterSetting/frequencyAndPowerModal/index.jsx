import { useState } from "react";
import { Col, Flex, Row } from "antd";
import { Checkbox, Input, Tooltip } from "@/components/units";
import { color } from "@/styles/variable/indexStyle";
import { useHelpers } from "./indexHelper";
import { ModalFormStyle as modalFormStyle, ScopeStyle } from "./indexStyle";

const initModalFormFields = {
  frequency: [],
  isChecked: false,
  power: [],
};

function FrequencyAndPowerModal({
  frequencies = [],
  isModalOpen,
  powers = [],
  setModalOpen,
}) {
  const [mainState, setMainState] = useState({
    isSubmitted: false,
    modalFormFields: initModalFormFields,
  });
  const { onFieldChange, submitFrequencyAndPower } = useHelpers({
    setMainState,
  });
  //這邊是以frequency跟power的數量一定會一致為前提來設計
  const listData = frequencies.map((item, index) => ({
    frequency: {
      title: item.title,
      value: item.value,
    },
    id: `${item.title}&${powers[index].title}`,
    power: {
      title: powers[index].title,
      value: powers[index].value,
    },
  }));

  return (
    <ScopeStyle
      list={[
        {
          id: "chinese_name",
          type: "custom",
          customProps: {
            children: (
              <>
                {listData.map((item, index) => (
                  <Row
                    className="mg-b-8"
                    justify="center"
                    gutter={16}
                    key={item.id}
                  >
                    <Col span={10}>
                      <Flex gap={16} justify="center">
                        <span className="title">{item.frequency.title}</span>
                        <Input
                          errorMessage="此欄位必填"
                          inputAttr={{
                            onChange: (e) =>
                              onFieldChange(e, "frequency", index, true),
                            suffix: "Hz",
                            styles: {
                              input: { textAlign: "center" },
                              suffix: { color: color.buttonGray },
                            },
                            value:
                              mainState.modalFormFields.frequency[index] || "",
                          }}
                          isInvalid={
                            mainState.isSubmitted &&
                            !mainState.modalFormFields.frequency[index]?.length
                          }
                        />
                      </Flex>
                    </Col>
                    <Col span={10}>
                      <Flex gap={16} justify="center">
                        <span className="title">{item.power.title}</span>
                        <Input
                          errorMessage="此欄位必填"
                          inputAttr={{
                            onChange: (e) => onFieldChange(e, "power", index),
                            suffix: "%",
                            styles: {
                              input: { textAlign: "center" },
                              suffix: { color: color.buttonGray },
                            },
                            value: mainState.modalFormFields.power[index] || "",
                          }}
                          isInvalid={
                            mainState.isSubmitted &&
                            !mainState.modalFormFields.power[index]?.length
                          }
                        />
                      </Flex>
                    </Col>
                  </Row>
                ))}
                <Flex
                  align="center"
                  className="mg-t-16"
                  gap={16}
                  justify="center"
                  wrap
                >
                  <Checkbox
                    className="checkbox-remind"
                    checkboxAttr={{
                      onChange(e) {
                        setMainState((prevState) => ({
                          ...prevState,
                          modalFormFields: {
                            ...prevState.modalFormFields,
                            isChecked: e.target.checked,
                          },
                        }));
                      },
                      checked: mainState.modalFormFields.isChecked,
                    }}
                    isInvalid={
                      mainState.isSubmitted &&
                      !mainState.modalFormFields.isChecked
                    }
                  >
                    <div
                      className={`modal-checked-note ${
                        mainState.isSubmitted &&
                        !mainState.modalFormFields.isChecked
                          ? "error"
                          : ""
                      }`}
                    >
                      請確認數值輸入無誤
                    </div>
                  </Checkbox>
                </Flex>
              </>
            ),
          },
        },
      ]}
      modalAttr={{
        afterClose() {
          setMainState((prevState) => ({
            ...prevState,
            isSubmitted: false,
            modalFormFields: initModalFormFields,
          }));
        },
        cancelText: "取消",
        centered: true,
        forceRender: true,
        maskClosable: false,
        onCancel: () => setModalOpen(false),
        onOk: () => submitFrequencyAndPower(mainState),
        okText: "儲存",
        open: isModalOpen,
        title: (
          <Row justify="center">
            <Col span={8}>
              <Flex className="pd-r-48" justify="flex-end" gap={8}>
                <span>頻率設定</span>
                <Tooltip
                  title={
                    <Flex className="tooltip-frequency" align="center">
                      數值範圍 : 59.50 ~ 60.50 Hz
                    </Flex>
                  }
                />
              </Flex>
            </Col>
            <Col span={8}>
              <Flex className="pd-r-48" justify="flex-end" gap={8}>
                <span>功率設定</span>
                <Tooltip
                  title={
                    <Flex className="tooltip-frequency" align="center">
                      數值範圍 : -100 ~ 100 %
                    </Flex>
                  }
                />
              </Flex>
            </Col>
          </Row>
        ),
        width: 650,
      }}
      styles={modalFormStyle}
    />
  );
}

export default FrequencyAndPowerModal;
