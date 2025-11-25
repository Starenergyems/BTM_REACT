import { fieldRestrictToDecimal, fieldRestrictToNumber } from "@/utils/regex";

function useHelpers({ setMainState }) {
  //檢查編輯頻率、功率Modal視窗中，是否欄位驗證無誤
  function getFrequencyAndPowerIsFieldValid(mainState) {
    const isFrequencyValid = mainState.modalFormFields.frequency.every(
      (item) => item
    );
    const isPowerValid = mainState.modalFormFields.power.every((item) => item);
    const isChecked = mainState.modalFormFields.isChecked;
    return isFrequencyValid && isPowerValid && isChecked;
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
  //欄位change事件
  function onFieldChange(e, type, index, isDecimalAllowed = false) {
    const value = isDecimalAllowed
      ? fieldRestrictToDecimal(e.target.value)
      : fieldRestrictToNumber(e.target.value);
    setMainState((prevState) => {
      const newDatas = prevState.modalFormFields[type].slice();
      newDatas[index] = value;
      return {
        ...prevState,
        modalFormFields: {
          ...prevState.modalFormFields,
          [type]: newDatas,
        },
      };
    });
  }
  return { onFieldChange, submitFrequencyAndPower };
}

export { useHelpers };
