function useHelpers({ setMainState }) {
  //取得編輯模式下的值所對應的字串
  function getValueStr(value, id) {
    switch (id) {
      case "pcsStatus":
      case "batteryStatus": {
        switch (value) {
          case 0: {
            return "全部投入";
          }
          case 1: {
            return "全部切離";
          }
        }
        break;
      }
      case "sysAvailability": {
        switch (value) {
          case 0: {
            return "正常";
          }
          case 1: {
            return "異常";
          }
        }
        break;
      }
      case "operatingMode": {
        switch (value) {
          case 0: {
            return "停機";
          }
          case 1: {
            return "E-dReg";
          }
          case 2: {
            return "dReg";
          }
        }
        break;
      }
    }
  }
  //modal是否顯示
  function setModalOpen(isOpen) {
    setMainState((prevState) => ({
      ...prevState,
      isModalOpen: isOpen,
    }));
  }
  //設定編輯modal的類型
  function setEditModalType(id) {
    setMainState((prevState) => ({
      ...prevState,
      editModalType: id,
    }));
  }
  return {
    getValueStr,
    setEditModalType,
    setModalOpen,
  };
}

export { useHelpers };
