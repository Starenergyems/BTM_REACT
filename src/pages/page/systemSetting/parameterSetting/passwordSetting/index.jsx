import { useRef, useState } from "react";
import { Flex, Table } from "antd";
import { ModalForm } from "@/components/widgets";
import { Select } from "@/components/units";
import { useHelpers } from "./indexHelper";
import { ModalFormStyle as modalFormStyle, ScopeStyle } from "./indexStyle";

function PasswordSetting() {
  const [mainState, setMainState] = useState({
    isTableLoading: false,
    modalFormCustomFields: {
      passwordStrongMinNumber: null,
      passwordStrongMaxNumber: null,
    },
    passwordTableData: [
      {
        id: "1",
        passwordLength: "5~10位",
        minNumber: "1位",
        minUppercaseNumber: "0位",
        minLowercaseNumber: "1位",
        minSymbol: "1位",
      },
    ],
  });
  const modalInnerFormRef = useRef();
  const { getPasswordTableColumns, setModalOpen } = useHelpers({
    setMainState,
  });

  return (
    <ScopeStyle>
      <Table
        className="mg-t-10"
        columns={getPasswordTableColumns(modalInnerFormRef)}
        dataSource={mainState.passwordTableData}
        loading={mainState.isTableLoading}
        pagination={false}
        rowClassName="custom-no-hover"
        rowKey="id"
        scroll={{
          x: "max-content",
        }}
        title={() => <h3 className="mg-b-0 mg-t-8-minus">密碼強度設置</h3>}
      />
      <ModalForm
        isLoading={mainState.isModalLoading}
        list={[
          {
            id: "custom-content",
            type: "custom",
            customProps: {
              children: (
                <div className="password-strong-setting">
                  <span>密碼強度限制</span>
                  <Flex align="center" gap={8}>
                    數字
                    <Select
                      selectAttr={{
                        name: "passwordStrongMinNumber",
                        options: [
                          { label: "選項一", value: 1 },
                          { label: "選項二", value: 2 },
                        ],
                        placeholder: "請選擇數字至少幾位",
                        style: { width: "100px" },
                        value:
                          mainState.modalFormCustomFields
                            .passwordStrongMinNumber,
                      }}
                      themeCategory="circle-light"
                    />
                    ~ 最高
                    <Select
                      selectAttr={{
                        name: "passwordStrongMaxNumber",
                        options: [
                          { label: "選項一", value: 1 },
                          { label: "選項二", value: 2 },
                        ],
                        placeholder: "請選擇數字最多幾位",
                        style: { width: "100px" },
                        value:
                          mainState.modalFormCustomFields
                            .passwordStrongMaxNumber,
                      }}
                      themeCategory="circle-light"
                    />
                  </Flex>
                </div>
              ),
            },
          },
          {
            id: "minNumber",
            formItemAttr: {
              label: "數字至少",
              name: "minNumber",
              rules: [{ required: true, message: "請選擇數字至少幾位" }],
            },
            type: "select",
            selectProps: {
              selectAttr: {
                options: [
                  { label: "0位", value: 0 },
                  { label: "1位", value: 1 },
                ],
                placeholder: "請選擇數字至少幾位",
              },
            },
          },
          {
            id: "minUppercaseNumber",
            formItemAttr: {
              label: "大寫字母至少",
              name: "minUppercaseNumber",
              rules: [{ required: true, message: "請選擇大寫字母至少幾位" }],
            },
            type: "select",
            selectProps: {
              selectAttr: {
                options: [
                  { label: "0位", value: 0 },
                  { label: "1位", value: 1 },
                ],
                placeholder: "請選擇大寫字母至少幾位",
              },
            },
          },
          {
            id: "minLowercaseNumber",
            formItemAttr: {
              label: "小寫字母至少",
              name: "minLowercaseNumber",
              rules: [{ required: true, message: "請選擇小寫字母至少幾位" }],
            },
            type: "select",
            selectProps: {
              selectAttr: {
                options: [
                  { label: "0位", value: 0 },
                  { label: "1位", value: 1 },
                ],
                placeholder: "請選擇小寫字母至少幾位",
              },
            },
          },
          {
            id: "minSymbol",
            formItemAttr: {
              label: "特殊字元至少",
              name: "minSymbol",
              rules: [{ required: true, message: "請選擇特殊字元至少幾位" }],
            },
            type: "select",
            selectProps: {
              selectAttr: {
                options: [
                  { label: "0位", value: 0 },
                  { label: "1位", value: 1 },
                ],
                placeholder: "請選擇特殊字元至少幾位",
              },
            },
          },
        ]}
        modalAttr={{
          cancelText: "取消",
          centered: true,
          forceRender: true,
          maskClosable: false,
          onCancel: () => setModalOpen(false),
          okText: "儲存",
          open: mainState.isModalOpen,
          title: "密碼強度設置",
          width: 650,
        }}
        onSuccess={(values) => {
          console.log(values);
        }}
        onFormReady={(formInstance) => {
          modalInnerFormRef.current = formInstance;
        }}
        styles={modalFormStyle}
      />
    </ScopeStyle>
  );
}

export default PasswordSetting;
