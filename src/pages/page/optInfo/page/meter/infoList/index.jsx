import { useState } from "react";
import { Col, Flex, Row, Table } from "antd";
import { Icon } from "@iconify/react";
import { CategoryBox, Checkbox, Radio } from "@/components/units";
import EquipmentControlItem from "./equipmentControlItem";
import {
  equipmentStatusList,
  equipmentVcpList,
  meterList,
  protectiveRelayList,
} from "./indexConfig";
import { ModalFormStyle, ScopeStyle } from "./indexStyle";
import { useHelpers } from "./indexHelper";
import { ModalForm } from "@/components/widgets";

const initModalFormFields = {
  status: "connect",
  isChecked: false,
};

function InfoList() {
  const [mainState, setMainState] = useState({
    auxiliaryPowerTableData: [
      {
        id: 1,
        infoList: [
          {
            equipmentName: "高壓盤輔電",
            voltage: 999.999,
            current: 29.3,
            power: 2929.971,
            powerConsumption: 2.93,
          },
          {
            equipmentName: "ESS1-1 AUX",
            voltage: 999.999,
            current: 29.3,
            power: 2929.971,
            powerConsumption: 2.93,
          },
          {
            equipmentName: "ESS1-2 AUX",
            voltage: 999.999,
            current: 29.3,
            power: 2929.971,
            powerConsumption: 2.93,
          },
        ],
      },
      {
        id: 2,
        infoList: [
          {
            equipmentName: "高壓盤輔電",
            voltage: 999.999,
            current: 29.3,
            power: 2929.971,
            powerConsumption: 2.93,
          },
          {
            equipmentName: "ESS2-1 AUX",
            voltage: 999.999,
            current: 29.3,
            power: 2929.971,
            powerConsumption: 2.93,
          },
          {
            equipmentName: "ESS2-2 AUX",
            voltage: 999.999,
            current: 29.3,
            power: 2929.971,
            powerConsumption: 2.93,
          },
        ],
      },
    ],
    isModalOpen: false,
    isModalLoading: false,
    isTableLoading: false,
    modalFormFields: initModalFormFields,
    transformerTemperatureTableData: [
      {
        id: 1,
        infoList: [
          { equipmentName: "AUX-TR", temperature: 29.3 },
          { equipmentName: "A1-TR", temperature: 27.4 },
        ],
      },
      {
        id: 2,
        infoList: [
          { equipmentName: "A2-TR", temperature: 29.3 },
          { equipmentName: "A3-TR", temperature: 27.4 },
        ],
      },
      {
        id: 3,
        infoList: [
          { equipmentName: "B1-TR", temperature: 29.3 },
          { equipmentName: "B2-TR", temperature: 27.4 },
        ],
      },
      {
        id: 4,
        infoList: [{ equipmentName: "B3-TR", temperature: 29.3 }],
      },
    ],
  });
  const {
    getAuxiliaryPowerTableColumns,
    getTransformerTemperatureTableColumns,
    setModalOpen,
  } = useHelpers({ setMainState });

  return (
    <ScopeStyle>
      <ModalForm
        isLoading={mainState.isModalLoading}
        list={[
          {
            id: "custom-content",
            isFullWidth: true,
            type: "custom",
            customProps: {
              children: (
                <Flex gap={16} justify="center" wrap>
                  <Radio.Group
                    className="custom-radio-group-container w-100"
                    radioGroupAttr={{
                      onChange(e) {
                        setMainState((prevState) => ({
                          ...prevState,
                          modalFormFields: {
                            ...prevState.modalFormFields,
                            status: e.target.value,
                          },
                        }));
                      },
                      options: [
                        {
                          label: "全部投入",
                          value: "connect",
                        },
                        {
                          label: "全部切離",
                          value: "disConnect",
                        },
                      ],
                      value: mainState.modalFormFields.status,
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
                  >
                    <div className="mg-t-3-minus">
                      更改模式可能會導致服務暫停請務必確認操作無誤
                    </div>
                  </Checkbox>
                </Flex>
              ),
            },
          },
        ]}
        modalAttr={{
          afterClose() {
            setMainState((prevState) => ({
              ...prevState,
              modalFormFields: initModalFormFields,
            }));
          },
          cancelText: "取消",
          centered: true,
          forceRender: true,
          maskClosable: false,
          onCancel: () => setModalOpen(false),
          onOk() {
            console.log(mainState.modalFormFields);
          },
          okButtonProps: {
            disabled: !(
              mainState.modalFormFields.status &&
              mainState.modalFormFields.isChecked
            ),
          },
          okText: "儲存",
          open: mainState.isModalOpen,
          styles: {
            body: { width: "60%", margin: "0 auto", minHeight: "auto" },
          },
          title: "遙控操作",
        }}
        styles={ModalFormStyle}
      />
      <section>
        <div className="section-title">
          <h2>設備狀態</h2>
          <Flex gap={16}>
            {equipmentStatusList.map((item) => (
              <div
                className="light-status-container pd-y-5 pd-x-20"
                key={item.lightType?.color}
              >
                <span
                  className="light-status"
                  style={{ backgroundColor: item.lightType?.color }}
                ></span>
                <span>{item.text}</span>
              </div>
            ))}
          </Flex>
        </div>
        <Row gutter={[16, 16]}>
          {equipmentVcpList.map((item, index) => (
            <Col sm={24} lg={12} key={index}>
              <CategoryBox title={item.title}>
                <Row gutter={[16, 8]}>
                  {item.itemList.map((item, index) => (
                    <EquipmentControlItem
                      colType="light"
                      isEdit
                      key={index}
                      lightStatus={item.lightStatus}
                      setModalOpen={setModalOpen}
                      text={item.text}
                    />
                  ))}
                </Row>
              </CategoryBox>
            </Col>
          ))}
        </Row>
      </section>
      <section className="mg-t-30">
        <div className="section-title">
          <h2>保護電驛</h2>
          <Flex gap={16}>
            {equipmentStatusList.map((item) => (
              <div
                className="light-status-container pd-y-5 pd-x-20"
                key={item.lightType?.color}
              >
                <span
                  className="light-status"
                  style={{ backgroundColor: item.lightType?.color }}
                ></span>
                <span>{item.text}</span>
              </div>
            ))}
          </Flex>
        </div>
        <Row gutter={[16, 16]}>
          {protectiveRelayList.map((item, index) => (
            <Col sm={24} key={index}>
              <CategoryBox title={item.title}>
                <Row gutter={[16, 8]}>
                  {item.itemList.map((item, index) => (
                    <EquipmentControlItem
                      colType="light"
                      colAttr={{ sm: 8, xl: 4 }}
                      key={index}
                      lightStatus={item.lightStatus}
                      text={item.text}
                    />
                  ))}
                </Row>
              </CategoryBox>
            </Col>
          ))}
        </Row>
      </section>
      <section className="mg-t-30">
        <div className="section-title">
          <h2>電表資訊</h2>
        </div>
        <Row gutter={[16, 16]}>
          {meterList.map((item, index) => (
            <Col sm={24} key={index}>
              <CategoryBox title={item.title}>
                <Flex align="center" justify="space-around">
                  <div className="mg-l-10">
                    <Icon
                      className="no-cursor"
                      fontSize={70}
                      icon={item.iconType}
                    />
                  </div>
                  <Row gutter={[16, 8]}>
                    {item.itemList.map((item, index) => (
                      <EquipmentControlItem
                        colType="value"
                        colAttr={{ md: 12, lg: 8, xl: 6, xxl: 4 }}
                        key={index}
                        lightStatus={item.lightStatus}
                        text={item.text}
                        unit={item.unit}
                        value={item.value}
                      />
                    ))}
                  </Row>
                </Flex>
              </CategoryBox>
            </Col>
          ))}
        </Row>
      </section>
      <section className="mg-t-30">
        <div className="section-title">
          <h2>輔電資訊</h2>
        </div>
        <Row gutter={[16, 16]}>
          {mainState.auxiliaryPowerTableData.map((item) => (
            <Col key={item.id} span={12}>
              <Table
                columns={getAuxiliaryPowerTableColumns()}
                dataSource={item.infoList}
                loading={mainState.isTableLoading}
                pagination={false}
                rowClassName="custom-no-hover"
                rowKey="equipmentName"
                scroll={{
                  x: "max-content",
                  y:
                    mainState.auxiliaryPowerTableData.length > 3
                      ? 180
                      : undefined,
                }}
              />
            </Col>
          ))}
        </Row>
      </section>
      <section className="mg-t-30">
        <div className="section-title">
          <h2>變壓器油溫</h2>
        </div>
        <Row gutter={[16, 16]}>
          {mainState.transformerTemperatureTableData.map((item) => (
            <Col key={item.id} sm={12} lg={6}>
              <Table
                columns={getTransformerTemperatureTableColumns()}
                dataSource={item.infoList}
                loading={mainState.isTableLoading}
                pagination={false}
                rowClassName="custom-no-hover"
                rowKey="equipmentName"
                scroll={{
                  x: "max-content",
                  y:
                    mainState.auxiliaryPowerTableData.length > 3
                      ? 180
                      : undefined,
                }}
              />
            </Col>
          ))}
        </Row>
      </section>
    </ScopeStyle>
  );
}

export default InfoList;
