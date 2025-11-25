import { useLayoutEffect, useState } from "react";
import { Flex, Table } from "antd";
import { Icon } from "@iconify/react";
import { useHelpers } from "./indexHelper";
import { ScopeStyle } from "./indexStyle";

function InfoList() {
  const [mainState, setMainState] = useState({
    isTableLoading: false,
    powerUsageTableData: [...Array(30)].map((_, index) => ({
      day: index + 1,
      chargeAmount: null,
      dischargeAmount: null,
      totalPowerImport: 75,
      totalPowerExport: 60,
      totalPowerNet: 15,
      totalPowerNetRte: 80,
      cycleCount: 0.85,
      serviceDisruptionHour: 0,
      serviceDisruptionCapacity: 0,
    })),
    serviceQualityTableData: [...Array(30)].map((_, index) => ({
      day: index + 1,
      awardedQuantity: 10,
      serviceQualityOne: 1,
      serviceQualityZeroPointEight: 0,
      serviceQualityZeroPointSix: 0,
      serviceQualityZeroPointFour: 0,
      serviceQualityZeroPointTwo: 0,
      serviceQualityZero: 0,
      serviceQualityMinusOne: 0,
      sbspmMax: 100,
      sbspmAvg: 100,
      sbspmMin: 100,
    })),
    tableScrollHeight: undefined,
  });
  const {
    getServiceQualityTableColumns,
    getPowerUsageTableColumns,
    getTableScrollHeight,
  } = useHelpers();

  useLayoutEffect(() => {
    setMainState((prevState) => ({
      ...prevState,
      tableScrollHeight: getTableScrollHeight(420),
    }));
  }, [getTableScrollHeight]);

  return (
    <ScopeStyle>
      <section>
        <div className="section-title">
          <h2>服務品質報表</h2>
          <Flex align="center" className="excel-download" gap={8}>
            <Icon icon="vscode-icons:file-type-excel" fontSize={36} />
            <span>Download</span>
          </Flex>
        </div>
        <Table
          bordered
          className="theme-gradient-light custom-striped-table mg-t-20"
          columns={getServiceQualityTableColumns()}
          dataSource={mainState.serviceQualityTableData}
          pagination={false}
          rowClassName="custom-no-hover "
          rowKey="day"
          scroll={{
            x: "992px",
            y:
              mainState.tableScrollHeight < 320
                ? 320
                : mainState.tableScrollHeight,
          }}
          summary={(pageData) => {
            // 初始化統計欄位
            const totalArr = [
              { fieldName: "awardedQuantity", total: 0 },
              { fieldName: "serviceQualityOne", total: 0 },
              { fieldName: "serviceQualityZeroPointEight", total: 0 },
              { fieldName: "serviceQualityZeroPointSix", total: 0 },
              { fieldName: "serviceQualityZeroPointFour", total: 0 },
              { fieldName: "serviceQualityZeroPointTwo", total: 0 },
              { fieldName: "serviceQualityZero", total: 0 },
              { fieldName: "serviceQualityMinusOne", total: 0 },
              { fieldName: "sbspmMax", total: 0 },
              { fieldName: "sbspmAvg", total: 0 },
              { fieldName: "sbspmMin", total: 0 },
            ];
            pageData.forEach((row, rowIndex) => {
              totalArr.forEach((item, index, arr) => {
                arr[index].total += Number(row[item.fieldName] || 0);
                if (rowIndex === pageData.length - 1) {
                  arr[index].total = arr[index].total.toFixed(2);
                }
              });
            });
            return (
              <>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>全月統計</Table.Summary.Cell>
                  {totalArr.map((item, index) => {
                    return (
                      <Table.Summary.Cell
                        index={index + 1}
                        key={item.fieldName}
                      >
                        {item.total}
                      </Table.Summary.Cell>
                    );
                  })}
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>上月統計</Table.Summary.Cell>
                  {totalArr.map((item, index) => {
                    return (
                      <Table.Summary.Cell
                        index={index + 1}
                        key={item.fieldName}
                      >
                        0
                      </Table.Summary.Cell>
                    );
                  })}
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>去年同月</Table.Summary.Cell>
                  {totalArr.map((item, index) => {
                    return (
                      <Table.Summary.Cell
                        index={index + 1}
                        key={item.fieldName}
                      >
                        0
                      </Table.Summary.Cell>
                    );
                  })}
                </Table.Summary.Row>
              </>
            );
          }}
        />
      </section>
      <section className="mg-t-50">
        <div className="section-title">
          <h2>用電報表</h2>
        </div>
        <Table
          bordered
          className="theme-gradient-light custom-striped-table mg-t-20"
          columns={getPowerUsageTableColumns()}
          dataSource={mainState.powerUsageTableData}
          pagination={false}
          rowClassName="custom-no-hover "
          rowKey="day"
          scroll={{
            x: "992px",
            y:
              mainState.tableScrollHeight < 320
                ? 320
                : mainState.tableScrollHeight,
          }}
          summary={(pageData) => {
            // 初始化統計欄位
            const totalArr = [
              { fieldName: "chargeAmount", total: 0 },
              { fieldName: "dischargeAmount", total: 0 },
              { fieldName: "totalPowerImport", total: 0 },
              { fieldName: "totalPowerExport", total: 0 },
              { fieldName: "totalPowerNet", total: 0 },
              { fieldName: "totalPowerNetRte", total: 0 },
              { fieldName: "cycleCount", total: 0 },
              { fieldName: "serviceDisruptionHour", total: 0 },
              { fieldName: "serviceDisruptionCapacity", total: 0 },
            ];
            pageData.forEach((row, rowIndex) => {
              totalArr.forEach((item, index, arr) => {
                arr[index].total += Number(row[item.fieldName] || 0);
                if (rowIndex === pageData.length - 1) {
                  arr[index].total = arr[index].total.toFixed(2);
                }
              });
            });
            return (
              <>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>全月統計</Table.Summary.Cell>
                  {totalArr.map((item, index) => {
                    return (
                      <Table.Summary.Cell
                        index={index + 1}
                        key={item.fieldName}
                      >
                        {item.total}
                      </Table.Summary.Cell>
                    );
                  })}
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>上月統計</Table.Summary.Cell>
                  {totalArr.map((item, index) => {
                    return (
                      <Table.Summary.Cell
                        index={index + 1}
                        key={item.fieldName}
                      >
                        0
                      </Table.Summary.Cell>
                    );
                  })}
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>去年同月</Table.Summary.Cell>
                  {totalArr.map((item, index) => {
                    return (
                      <Table.Summary.Cell
                        index={index + 1}
                        key={item.fieldName}
                      >
                        0
                      </Table.Summary.Cell>
                    );
                  })}
                </Table.Summary.Row>
              </>
            );
          }}
        />
      </section>
    </ScopeStyle>
  );
}

export default InfoList;
