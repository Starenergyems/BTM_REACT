import { useState } from "react";
import { Col, Flex, Row } from "antd";
import { Checkbox, Tooltip } from "@/components/units";
import { editModalType } from "../indexConfig";
import { ModalFormStyle as modalFormStyle, ScopeStyle } from "./indexStyle";
import { useHelpers } from "./indexHelper";

const initModalFormFields = {
  isChecked: false,
  [editModalType.batteryStatus]: "",
  [editModalType.loadTransferPower]: "",
  [editModalType.operatingMode]: "",
  [editModalType.pcsStatus]: "",
  [editModalType.ratedPower]: "",
  [editModalType.sysAvailability]: "",
};

function EditModal({ editInfo, isModalOpen, modalType, setModalOpen }) {
  const [mainState, setMainState] = useState({
    isSubmitted: false,
    modalFormFields: initModalFormFields,
  });
  const { getEditModalConfig, getModalFormIsFieldValid, submitModalForm } =
    useHelpers({ setMainState });
  const modalTypeConfig = getEditModalConfig(mainState, editInfo);

  return (
    <ScopeStyle
      list={[
        {
          id: "chinese_name",
          type: "custom",
          customProps: {
            children: (
              <>
                <Flex align="center" gap={16} justify="center" vertical wrap>
                  {/* 各種要編輯的類型表單欄位 */}
                  {modalTypeConfig[modalType]?.formContent}
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
                      {modalTypeConfig[modalType]?.checkboxNote}
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
        onOk: () => submitModalForm(mainState, modalType),
        okButtonProps: {
          disabled: !getModalFormIsFieldValid(mainState, modalType),
        },
        okText: "儲存",
        open: isModalOpen,
        title: (
          <Row justify="center">
            <Col span={8}>
              <Flex justify="center" gap={8}>
                <span>{modalTypeConfig[modalType]?.title}</span>
                {modalTypeConfig[modalType]?.tooltip && (
                  <Tooltip
                    title={
                      <Flex className="tooltip-frequency" align="center">
                        {modalTypeConfig[modalType]?.tooltip}
                      </Flex>
                    }
                  />
                )}
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

export default EditModal;
