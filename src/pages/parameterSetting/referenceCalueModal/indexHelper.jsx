import { fieldRestrictToDecimal } from "@/utils/regex";
import { useCallback } from "react";

function useHelpers({ setMainState }) {
  //檢查編輯頻率、功率Modal視窗中，是否欄位驗證無誤
  function getFrequencyAndPowerIsFieldValid(mainState) {
    let isSocValid = Object.values(mainState.modalFormFields.soc).every(
      (item) => item
    );
    const isVoltageValid = Object.values(
      mainState.modalFormFields.voltage
    ).every((item) => item);
    const isChecked = mainState.modalFormFields.isChecked;
    return isSocValid && isVoltageValid && isChecked;
  }
  //送出編輯頻率、功率Modal視窗中的表單
  function submitFrequencyAndPower(mainState) {
    setMainState((prevState) => ({
      ...prevState,
      isSubmitted: true,
    }));
    const isValid = getFrequencyAndPowerIsFieldValid(mainState);
    if (isValid) {
      alert("valid success");
    }
  }
  //取得mainState的初始值(傳入props)
  const getInitModalFormFields = useCallback(({ soc = {}, voltage = {} }) => {
    return { isChecked: false, soc, voltage };
  }, []);
  //欄位change事件
  function onFieldChange(e, type, id, isMinusAllowed) {
    const value = fieldRestrictToDecimal(e.target.value, { isMinusAllowed });
    setMainState((prevState) => {
      return {
        ...prevState,
        modalFormFields: {
          ...prevState.modalFormFields,
          [type]: {
            ...prevState.modalFormFields[type],
            [id]: value,
          },
        },
      };
    });
  }
  return { getInitModalFormFields, onFieldChange, submitFrequencyAndPower };
}

export { useHelpers };
