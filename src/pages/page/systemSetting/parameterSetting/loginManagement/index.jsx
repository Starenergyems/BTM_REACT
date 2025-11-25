import { useRef, useState } from "react";
import { Table } from "antd";
import { ModalForm } from "@/components/widgets";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

function LoginManagement() {
  const [mainState, setMainState] = useState({
    isModalOpen: false,
    isTableLoading: false,
    loginManagementTableData: [
      {
        id: 1,
        failCount: "3次",
        suspendExpired: "24hr",
        tip: "非經同意者，請勿隨意操作系統。違者需承擔法律責任",
      },
    ],
  });
  const modalInnerFormRef = useRef();
  const { getLoginManagementTableColumns, setModalOpen } = useHelpers({
    setMainState,
  });

  return (
    <ScopeStyle>
      <Table
        className="mg-t-10"
        columns={getLoginManagementTableColumns(modalInnerFormRef)}
        dataSource={mainState.loginManagementTableData}
        loading={mainState.isTableLoading}
        pagination={false}
        rowClassName="custom-no-hover"
        rowKey="id"
        scroll={{
          x: "max-content",
        }}
        title={() => <h3 className="mg-b-0">登入管理</h3>}
      />
      <ModalForm
        isLoading={mainState.isModalLoading}
        list={[
          {
            id: "failCount",
            formItemAttr: {
              label: "登入失敗上限",
              name: "failCount",
              rules: [{ required: true, message: "請選擇數字至少幾位" }],
            },
            type: "select",
            selectProps: {
              selectAttr: {
                options: [
                  { label: "1次", value: 1 },
                  { label: "2次", value: 2 },
                  { label: "3次", value: 3 },
                ],
                placeholder: "請選擇登入失敗上限次數",
              },
            },
          },
          {
            id: "suspendExpired",
            formItemAttr: {
              label: "每次停權時間",
              name: "suspendExpired",
              rules: [{ required: true, message: "請選擇每次停權時間" }],
            },
            type: "select",
            selectProps: {
              selectAttr: {
                options: [...Array(24)].map((_item, index) => ({
                  label: `${index + 1}hr`,
                  value: index + 1,
                })),
                placeholder: "請選擇每次停權時間",
              },
            },
          },
          {
            id: "tip",
            formItemAttr: {
              label: "登入畫面提示字元",
              name: "tip",
              rules: [{ required: true, message: "請輸入登入畫面提示字元" }],
            },
            type: "textarea",
            inputProps: {
              noResize: true,
              inputAttr: {
                placeholder: "請輸入登入畫面提示字元",
                rows: 8,
              },
            },
          },
        ]}
        modalAttr={{
          cancelButtonProps: {
            className: mainState.isModalFormSuccess ? "" : "btn-cancel",
          },
          cancelText: mainState.isModalFormSuccess ? "確認" : "取消",
          centered: true,
          forceRender: true,
          maskClosable: false,
          okButtonProps: {
            className: mainState.isModalFormSuccess ? "btn-none" : "",
          },
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
      />
    </ScopeStyle>
  );
}

export default LoginManagement;
