import { Col, Row } from "antd";
import { fieldRestrictToNumber } from "@/utils/regex";
import { Input, Radio } from "@/components/units";
import { color } from "@/styles/variable/indexStyle";
import { editModalType } from "../indexConfig";

function useHelpers({ setMainState }) {
  //檢查編輯modal中的表單是否欄位驗證通過
  function getModalFormIsFieldValid(mainState, type) {
    let isEditFieldValid = false;
    const value = mainState.modalFormFields[type];
    switch (type) {
      case editModalType.loadTransferPower:
      case editModalType.ratedPower: {
        isEditFieldValid =
          value !== undefined && value !== null && value !== "";
        break;
      }
      case editModalType.batteryStatus:
      case editModalType.operatingMode:
      case editModalType.pcsStatus:
      case editModalType.sysAvailability: {
        isEditFieldValid =
          value !== undefined && value !== null && value !== "";
        break;
      }
    }
    const isChecked = mainState.modalFormFields.isChecked;
    return isEditFieldValid && isChecked;
  }
  //送出編輯Modal視窗中的表單
  function submitModalForm(mainState, modalType) {
    setMainState((prevState) => ({
      ...prevState,
      isSubmitted: true,
    }));

    const isValid = getModalFormIsFieldValid(mainState, modalType);
    if (isValid) {
      alert("valid success");
    }
  }
  //欄位input change事件
  function onFieldInputChange(e, type, isDecimalAllowed = false) {
    const value = fieldRestrictToNumber(e.target.value, { isDecimalAllowed });
    setMainState((prevState) => {
      return {
        ...prevState,
        modalFormFields: {
          ...prevState.modalFormFields,
          [type]: value,
        },
      };
    });
  }
  //欄位radio change事件
  function onFieldRadioChange(e, type) {
    const value = e.target.value;
    setMainState((prevState) => {
      return {
        ...prevState,
        modalFormFields: {
          ...prevState.modalFormFields,
          [type]: value,
        },
      };
    });
  }
  //取得編輯的modal類型資料
  function getEditModalConfig(mainState, editInfo) {
    return {
      [editModalType.batteryStatus]: {
        checkboxNote: "更改模式可能會導致服務暫停請務必確認操作無誤",
        formContent: (
          <Radio.Group
            errorMessage={getEditModalErrorMessage(
              mainState,
              editModalType.batteryStatus
            )}
            isInvalid={
              !!getEditModalErrorMessage(mainState, editModalType.batteryStatus)
            }
            radioGroupAttr={{
              onChange: (e) =>
                onFieldRadioChange(e, editModalType.batteryStatus),
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
              value: mainState.modalFormFields[editModalType.batteryStatus],
            }}
          />
        ),
        title: "電池狀態設定",
        tooltip: "",
      },
      [editModalType.loadTransferPower]: {
        checkboxNote: "請確認數值輸入無誤",
        formContent: (
          <div className="mg-b-8 w-30">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <div className="pd-b-8">原數值</div>
                <Input
                  className="w-100"
                  errorMessage="此欄位必填"
                  inputAttr={{
                    disabled: true,
                    suffix: "kW",
                    styles: {
                      input: { textAlign: "center" },
                      suffix: { color: color.buttonGray },
                    },
                    value: editInfo[editModalType.loadTransferPower] || "",
                  }}
                />
              </Col>
              <Col span={24}>
                <div className="pd-b-8">新數值</div>
                <Input
                  className="w-100"
                  errorMessage={getEditModalErrorMessage(
                    mainState,
                    editModalType.loadTransferPower
                  )}
                  inputAttr={{
                    onChange: (e) =>
                      onFieldInputChange(e, editModalType.loadTransferPower),
                    suffix: "kW",
                    styles: {
                      input: { textAlign: "center" },
                      suffix: { color: color.buttonGray },
                    },
                    value:
                      mainState.modalFormFields[
                        editModalType.loadTransferPower
                      ] || "",
                  }}
                  isInvalid={
                    !!getEditModalErrorMessage(
                      mainState,
                      editModalType.loadTransferPower
                    )
                  }
                />
              </Col>
            </Row>
          </div>
        ),
        title: "負載轉移功率設定",
        tooltip: "數值範圍 : 0 ~ 10000 kW",
      },
      [editModalType.operatingMode]: {
        checkboxNote: "更改模式可能會導致服務暫停請務必確認操作無誤",
        title: "運作模式設定",
        tooltip: "",
        formContent: (
          <Radio.Group
            errorMessage={getEditModalErrorMessage(
              mainState,
              editModalType.operatingMode
            )}
            isInvalid={
              !!getEditModalErrorMessage(mainState, editModalType.operatingMode)
            }
            radioGroupAttr={{
              onChange: (e) =>
                onFieldRadioChange(e, editModalType.operatingMode),
              options: [
                { label: "停機", value: 0 },
                { label: "E-dReg", value: 1 },
                { label: "dReg", value: 2 },
              ],
              style: {
                direction: "rtl",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              },
              value: mainState.modalFormFields[editModalType.operatingMode],
            }}
          />
        ),
      },
      [editModalType.pcsStatus]: {
        checkboxNote: "更改模式可能會導致服務暫停請務必確認操作無誤",
        formContent: (
          <Radio.Group
            errorMessage={getEditModalErrorMessage(
              mainState,
              editModalType.pcsStatus
            )}
            isInvalid={
              !!getEditModalErrorMessage(mainState, editModalType.pcsStatus)
            }
            radioGroupAttr={{
              onChange: (e) => onFieldRadioChange(e, editModalType.pcsStatus),
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
              value: mainState.modalFormFields[editModalType.pcsStatus],
            }}
          />
        ),
        title: "PCS狀態設定",
        tooltip: "",
      },
      [editModalType.sysAvailability]: {
        checkboxNote: "更改模式可能會導致服務暫停請務必確認操作無誤",
        formContent: (
          <Radio.Group
            errorMessage={getEditModalErrorMessage(
              mainState,
              editModalType.sysAvailability
            )}
            isInvalid={
              !!getEditModalErrorMessage(
                mainState,
                editModalType.sysAvailability
              )
            }
            radioGroupAttr={{
              onChange: (e) =>
                onFieldRadioChange(e, editModalType.sysAvailability),
              options: [
                { label: "停機", value: 0 },
                { label: "E-dReg", value: 1 },
                { label: "dReg", value: 2 },
              ],
              style: {
                direction: "rtl",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              },
              value: mainState.modalFormFields[editModalType.sysAvailability],
            }}
          />
        ),
        title: "系統可用性",
        tooltip: "",
      },
      [editModalType.ratedPower]: {
        checkboxNote: "請確認數值輸入無誤",
        formContent: (
          <div className="mg-b-8 w-30">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <div className="pd-b-8">原數值</div>
                <Input
                  className="w-100"
                  errorMessage="此欄位必填"
                  inputAttr={{
                    disabled: true,
                    suffix: "kW",
                    styles: {
                      input: { textAlign: "center" },
                      suffix: { color: color.buttonGray },
                    },
                    value: editInfo[editModalType.ratedPower] || "",
                  }}
                />
              </Col>
              <Col span={24}>
                <div className="pd-b-8">新數值</div>
                <Input
                  className="w-100"
                  errorMessage={getEditModalErrorMessage(
                    mainState,
                    editModalType.ratedPower
                  )}
                  inputAttr={{
                    onChange: (e) =>
                      onFieldInputChange(e, editModalType.ratedPower),
                    suffix: "kW",
                    styles: {
                      input: { textAlign: "center" },
                      suffix: { color: color.buttonGray },
                    },
                    value:
                      mainState.modalFormFields[editModalType.ratedPower] || "",
                  }}
                  isInvalid={
                    !!getEditModalErrorMessage(
                      mainState,
                      editModalType.ratedPower
                    )
                  }
                />
              </Col>
            </Row>
          </div>
        ),
        title: "額定功率設定",
        tooltip: "數值範圍 : 0 ~ 10000 kW",
      },
    };
  }
  //取得編輯的modal欄位中的errorMessage
  function getEditModalErrorMessage(mainState, type) {
    const value = mainState.modalFormFields[type];
    const requiredStr = "此欄位必填";
    if (!mainState.isSubmitted) return "";
    // 負載轉移功率設定、額定功率
    if (
      type === editModalType.loadTransferPower ||
      type === editModalType.ratedPower
    ) {
      if (value === "") return requiredStr;
      if (value < 0 || value > 10000) return "請輸入 0 ~ 10000 kW";
    }
    //電池狀態、運作模式、PCS狀態、系統可用性、
    if (
      type === editModalType.batteryStatus ||
      type === editModalType.operatingMode ||
      type === editModalType.pcsStatus ||
      type === editModalType.sysAvailability
    ) {
      if (value === "") return requiredStr;
    }

    return ""; // 預設回傳空字串
  }
  return {
    getEditModalConfig,
    getModalFormIsFieldValid,
    onFieldInputChange,
    submitModalForm,
  };
}

export { useHelpers };
