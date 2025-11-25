function useHelpers({ setMainState }) {
  //子系統資訊列表table 格式
  function getTableColumns() {
    return [
      {
        title: "子系統編號",
        dataIndex: "subSystemNumber",
        align: "center",
        fixed: "left",
      },
      {
        title: (
          <span>
            實功基準值
            <br />
            (kW)
          </span>
        ),
        dataIndex: "activePowerRef",
        align: "center",
      },
      {
        title: (
          <span>
            虛功基準值
            <br />
            (kVar)
          </span>
        ),
        dataIndex: "reactivePowerRef",
        align: "center",
      },
      {
        title: (
          <span>
            子系統
            <br />
            運作模式
          </span>
        ),
        dataIndex: "subsystemOperatingMode",
        align: "center",
      },
      {
        title: (
          <span>
            電池
            <br />
            PCS狀態
          </span>
        ),
        dataIndex: "batteryPcsStatus",
        align: "center",
      },
      {
        title: "系統狀態",
        dataIndex: "systemStatus",
        align: "center",
      },
      {
        title: (
          <span>
            E-dReg
            <br />
            調頻服務中
          </span>
        ),
        dataIndex: "edRegFrequency",
        align: "center",
      },
      {
        title: (
          <span>
            最大電芯
            <br />
            電壓位置
          </span>
        ),
        dataIndex: "maxCellVoltage",
        align: "center",
        render: (value) => value || "--",
      },
      {
        title: (
          <span>
            最小電芯
            <br />
            電壓位置
          </span>
        ),
        dataIndex: "minCellVoltage",
        align: "center",
        render: (value) => value || "--",
      },
      {
        title: (
          <span>
            Rack電壓差
            <br />
            (V)
          </span>
        ),
        dataIndex: "rackVoltageDeviation",
        align: "center",
      },
    ];
  }
  //modal是否顯示
  function setModalOpen(isOpen) {
    setMainState((prevState) => ({
      ...prevState,
      isModalOpen: isOpen,
    }));
  }

  return {
    getTableColumns,
    setModalOpen,
  };
}

export { useHelpers };
