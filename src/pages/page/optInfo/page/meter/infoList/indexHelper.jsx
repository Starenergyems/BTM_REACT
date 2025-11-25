function useHelpers({ setMainState }) {
  //取得輔電資訊table 格式
  function getAuxiliaryPowerTableColumns() {
    return [
      {
        title: "設備名稱",
        dataIndex: "equipmentName",
        align: "center",
      },
      {
        title: "電壓(V)",
        dataIndex: "voltage",
        align: "center",
      },
      {
        title: "電流(A)",
        dataIndex: "current",
        align: "center",
      },
      {
        title: "實功(kW)",
        dataIndex: "power",
        align: "center",
      },
      {
        title: "度數(kWh)",
        dataIndex: "powerConsumption",
        align: "center",
      },
    ];
  }
  //取得變壓器油溫table 格式
  function getTransformerTemperatureTableColumns() {
    return [
      {
        title: "設備名稱",
        dataIndex: "equipmentName",
        align: "center",
      },
      {
        title: "溫度(℃)",
        dataIndex: "temperature",
        align: "center",
      },
    ];
  }
  //設備狀態編輯modal是否顯示
  function setModalOpen(isOpen) {
    setMainState((prevState) => ({
      ...prevState,
      isModalOpen: isOpen,
    }));
  }

  return {
    getAuxiliaryPowerTableColumns,
    getTransformerTemperatureTableColumns,
    setModalOpen,
  };
}

export { useHelpers };
