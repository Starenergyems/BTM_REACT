function useHelpers({ setMainState }) {
  //送出編輯Modal視窗中的表單
  function submitModalForm(mainState) {
    setMainState((prevState) => ({
      ...prevState,
      isSubmitted: true,
    }));
    const isValid =
      mainState.modalFormFields.allEnabled !== null &&
      mainState.modalFormFields.isChecked;
    if (isValid) {
      alert("valid success");
    }
  }
  //欄位radio change事件
  function onFieldRadioChange(e) {
    const value = e.target.value;
    setMainState((prevState) => {
      return {
        ...prevState,
        modalFormFields: {
          ...prevState.modalFormFields,
          allEnabled: value,
        },
      };
    });
  }

  return { onFieldRadioChange, submitModalForm };
}

export { useHelpers };
