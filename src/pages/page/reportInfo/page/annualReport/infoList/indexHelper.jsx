import { useCallback } from "react";
import { Tooltip } from "@/components/units";
import { color } from "@/styles/variable/indexStyle";

function useHelpers() {
  //服務品質報表表格所需格式
  function getServiceQualityTableColumns() {
    return [
      {
        dataIndex: "month",
        title: (
          <span>
            月份
            <br />
            (Month)
          </span>
        ),
        align: "center",
        fixed: "left",
        width: "6%",
        onCell: () => ({
          style: {
            color: color.themeBlack,
            borderColor: color.white,
            backgroundImage: `linear-gradient(to right, ${color.buttonGray}, ${color.white})`,
          },
        }),
      },
      {
        dataIndex: "awardedQuantity",
        title: "得標量(MW)",
        align: "center",
      },
      {
        title: "服務品質指標分數(次數)",
        children: [
          {
            dataIndex: "serviceQualityOne",
            title: "1",
            align: "center",
          },
          {
            dataIndex: "serviceQualityZeroPointEight",
            title: "0.8",
            align: "center",
          },
          {
            dataIndex: "serviceQualityZeroPointSix",
            title: "0.6",
            align: "center",
          },
          {
            dataIndex: "serviceQualityZeroPointFour",
            title: "0.4",
            align: "center",
          },
          {
            dataIndex: "serviceQualityZeroPointTwo",
            title: "0.2",
            align: "center",
          },
          {
            dataIndex: "serviceQualityZero",
            title: "0",
            align: "center",
          },
          {
            dataIndex: "serviceQualityMinusOne",
            title: "-1",
            align: "center",
          },
        ],
      },
      {
        title: "SBSPM(%)",
        children: [
          {
            dataIndex: "sbspmMax",
            title: "Max",
            align: "center",
            render: (value) => value.toFixed(2),
          },
          {
            dataIndex: "sbspmAvg",
            title: "Avg",
            align: "center",
            render: (value) => value.toFixed(2),
          },
          {
            dataIndex: "sbspmMin",
            title: "Min",
            align: "center",
            render: (value) => value.toFixed(2),
          },
        ],
      },
    ];
  }
  //用電報表表格所需格式
  function getPowerUsageTableColumns() {
    return [
      {
        dataIndex: "month",
        title: (
          <span>
            月
            <br />
            (Month)
          </span>
        ),
        align: "center",
        fixed: "left",
        width: "6%",
        onCell: () => ({
          style: {
            color: color.themeBlack,
            borderColor: color.white,
            backgroundImage: `linear-gradient(to right, ${color.buttonGray}, ${color.white})`,
          },
        }),
      },
      {
        title: "移轉量(MW)",
        children: [
          {
            dataIndex: "chargeAmount",
            title: "充電量",
            align: "center",
            render: (value) => value ?? "--",
          },
          {
            dataIndex: "dischargeAmount",
            title: "放電量",
            align: "center",
            render: (value) => value ?? "--",
          },
        ],
      },
      {
        title: "總用電量(MW)",
        children: [
          {
            dataIndex: "totalPowerImport",
            title: "Import",
            align: "center",
            render: (value) => value.toFixed(1),
          },
          {
            dataIndex: "totalPowerExport",
            title: "Export",
            align: "center",
            render: (value) => value.toFixed(1),
          },
          {
            dataIndex: "totalPowerNet",
            title: "Net",
            align: "center",
            render: (value) => value.toFixed(1),
          },
          {
            dataIndex: "totalPowerNetRte",
            title: (
              <>
                RTE
                <Tooltip
                  className="tooltip-rte"
                  title={<div>RTE= 案場全日總放電量/案場全日總充電量</div>}
                />
              </>
            ),
            align: "center",
            render: (value) => value.toFixed(2),
          },
        ],
      },
      {
        title: "Cycle Count",
        children: [
          {
            dataIndex: "cycleCountMax",
            title: "Max",
            align: "center",
            render: (value) => value.toFixed(2),
          },
          {
            dataIndex: "cycleCountAvg",
            title: "Avg",
            align: "center",
            render: (value) => value.toFixed(2),
          },
          {
            dataIndex: "cycleCountMin",
            title: "Min",
            align: "center",
            render: (value) => value.toFixed(2),
          },
        ],
      },
      {
        title: "中止服務",
        children: [
          {
            dataIndex: "serviceDisruptionHour",
            title: "時數(Mins)",
            align: "center",
          },
          {
            dataIndex: "serviceDisruptionCapacity",
            title: "容量(MW)",
            align: "center",
            render: (value) => value.toFixed(2),
          },
        ],
      },
      {
        dataIndex: "totalAuxiliaryPower",
        title: "總輔電用電",
        align: "center",
      },
    ];
  }
  //取得表格tbody高度大於多少出現scroll
  const getTableScrollHeight = useCallback((offsetHeight) => {
    const rowHeight = 40;
    const offset = offsetHeight || 280;
    const rows = Math.floor((window.innerHeight - offset) / rowHeight);
    //若rows小於或等於0，則至少使用最小row
    const minRows = 5;
    return rows > 0 ? rows * rowHeight : minRows * rowHeight;
  }, []);

  return {
    getServiceQualityTableColumns,
    getPowerUsageTableColumns,
    getTableScrollHeight,
  };
}

export { useHelpers };
