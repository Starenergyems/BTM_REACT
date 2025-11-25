import { useState } from "react";
import { Flex } from "antd";
import { Checkbox, Radio } from "@/components/units";
import { ModalFormStyle as modalFormStyle, ScopeStyle } from "./indexStyle";
import { useHelpers } from "./indexHelper";

const initModalFormFields = {
  isChecked: false,
  allEnabled: null,
};

function SystemOperationModal({ isModalOpen, setModalOpen }) {
  const [mainState, setMainState] = useState({
    isSubmitted: false,
    modalFormFields: initModalFormFields,
  });
  const { onFieldRadioChange, submitModalForm } = useHelpers({ setMainState });

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
                  <Radio.Group
                    errorMessage="此欄位必填"
                    isInvalid={
                      mainState.isSubmitted &&
                      mainState.modalFormFields.allEnabled === null
                    }
                    radioGroupAttr={{
                      onChange: (e) => onFieldRadioChange(e),
                      options: [
                        { label: "全部投入", value: 0 },
                        { label: "全部切離", value: 1 },
                      ],
                      style: {
                        direction: "rtl",
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                      },
                      value: mainState.modalFormFields.allEnabled,
                    }}
                  />
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
                      更改模式可能會導致服務暫
                      <br /> 請務必確認操作無誤
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
        onOk: () => submitModalForm(mainState),
        okText: "儲存",
        open: isModalOpen,
        title: "子系統運作設定",
        width: 650,
      }}
      styles={modalFormStyle}
    />
  );
}

export default SystemOperationModal;
