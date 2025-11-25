import { useEffect, useState } from "react";
import { Col, Flex, Row } from "antd";
import { Checkbox, Input, Tooltip } from "@/components/units";
import { color } from "@/styles/variable/indexStyle";
import { useHelpers } from "./indexHelper";
import { ModalFormStyle as modalFormStyle, ScopeStyle } from "./indexStyle";

const initModalFormFields = {
  isChecked: false,
  soc: {
    maxUpperLimit: "",
    upperLimit: "",
    lowerLimit: "",
    minLowerLimit: "",
  },
  voltage: {
    maxUpperLimit: "",
    upperLimit: "",
    lowerLimit: "",
    minLowerLimit: "",
  },
};

function ReferenceCalueModal({
  soc = {},
  isModalOpen,
  voltage = {},
  setModalOpen,
}) {
  const [mainState, setMainState] = useState({
    isSubmitted: false,
    modalFormFields: null,
  });
  const { submitFrequencyAndPower, onFieldChange, getInitModalFormFields } =
    useHelpers({ setMainState });
  const listData = [
    {
      id: "maxUpperLimit",
      soc: mainState.modalFormFields?.soc?.maxUpperLimit || "",
      title: "最高上限",
      voltage: mainState.modalFormFields?.voltage?.maxUpperLimit || "",
    },
    {
      id: "upperLimit",
      soc: mainState.modalFormFields?.soc?.upperLimit || "",
      title: "上限值",
      voltage: mainState.modalFormFields?.voltage?.upperLimit || "",
    },
    {
      id: "lowerLimit",
      soc: mainState.modalFormFields?.soc?.lowerLimit || "",
      title: "下限值",
      voltage: mainState.modalFormFields?.voltage?.lowerLimit || "",
    },
    {
      id: "minLowerLimit",
      soc: mainState.modalFormFields?.soc?.minLowerLimit || "",
      title: "最低上限",
      voltage: mainState.modalFormFields?.voltage?.minLowerLimit || "",
    },
  ];

  //初始化填入mainState.modalFormFields
  useEffect(() => {
    const modalFormFields = getInitModalFormFields({ soc, voltage });
    setMainState((prev) => ({
      ...prev,
      modalFormFields,
    }));
  }, [getInitModalFormFields, soc, voltage]);

  return (
    <ScopeStyle
      list={[
        {
          id: "chinese_name",
          type: "custom",
          customProps: {
            children: (
              <>
                <Row gutter={[16, 16]} justify="center">
                  <Col span={4}></Col>
                  <Col className="vertical-title" span={6}>
                    SOC
                  </Col>
                  <Col className="vertical-title" span={6}>
                    Volt
                  </Col>
                </Row>
                {listData.map((item) => (
                  <Row
                    className="mg-b-8"
                    gutter={0}
                    justify="center"
                    key={item.id}
                  >
                    <Col span={4} className="horizontal-title">
                      {item.title}
                    </Col>
                    <Col span={6}>
                      <Input
                        errorMessage="此欄位必填"
                        inputAttr={{
                          onChange: (e) =>
                            onFieldChange(e, "soc", item.id, true),
                          suffix: "%",
                          styles: {
                            input: { textAlign: "center" },
                            suffix: { color: color.buttonGray },
                          },
                          value: item.soc,
                        }}
                        isInvalid={
                          mainState.isSubmitted &&
                          !mainState.modalFormFields?.soc[item.id]
                        }
                      />
                    </Col>
                    <Col span={6}>
                      <Input
                        errorMessage="此欄位必填"
                        inputAttr={{
                          onChange: (e) => onFieldChange(e, "voltage", item.id),
                          suffix: "V",
                          styles: {
                            input: { textAlign: "center" },
                            suffix: { color: color.buttonGray },
                          },
                          value: item.voltage,
                        }}
                        isInvalid={
                          mainState.isSubmitted &&
                          !mainState.modalFormFields?.voltage[item.id]
                        }
                      />
                    </Col>
                  </Row>
                ))}
                <Flex
                  align="center"
                  className="mg-t-24"
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
                      checked: mainState.modalFormFields?.isChecked,
                    }}
                    isInvalid={
                      mainState.isSubmitted &&
                      !mainState.modalFormFields?.isChecked
                    }
                  >
                    <div
                      className={`modal-checked-note ${
                        mainState.isSubmitted &&
                        !mainState.modalFormFields?.isChecked
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
          <Row className="pd-l-48" justify="center">
            <Col span={24}>
              <Flex className="pd-r-48" justify="center" gap={8}>
                <span>Set Ref. Value</span>
                <Tooltip
                  title={
                    <>
                      <Flex align="center">SOC 數值範圍 : -100 ~ 100 %</Flex>
                      <Flex align="center">Volt 數值範圍 : 800 ~ 1500 V</Flex>
                    </>
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

export default ReferenceCalueModal;
