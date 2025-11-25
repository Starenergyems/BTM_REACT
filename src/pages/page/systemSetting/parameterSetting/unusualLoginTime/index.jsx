import { useRef, useState } from "react";
import { Table } from "antd";
import { ModalForm } from "@/components/widgets";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

function UnusualLoginTime() {
  const [mainState, setMainState] = useState({
    isModalOpen: false,
    isTableLoading: false,
    unusualLoginTimeTableData: [
      {
        id: 1,
        loginTime: "每日 22:00:00-06:00:00",
      },
    ],
  });
  const modalInnerFormRef = useRef();
  const { getUnusualLoginTimeTableColumns, setModalOpen } = useHelpers({
    setMainState,
  });

  return (
    <ScopeStyle>
      <Table
        className="mg-t-10"
        columns={getUnusualLoginTimeTableColumns(modalInnerFormRef)}
        dataSource={mainState.unusualLoginTimeTableData}
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
            id: "loginTimeStart",
            isFullWidth: true,
            formItemAttr: {
              label: "起始時間",
              name: "loginTimeStart",
              rules: [{ required: true, message: "請輸入起始時間" }],
            },
            type: "timePicker",
            timePickerProps: {
              className: "theme-circle",
              placeholder: "請輸入起始時間",
            },
          },
          {
            id: "loginTimeEnd",
            isFullWidth: true,
            formItemAttr: {
              label: "結束時間",
              name: "loginTimeEnd",
              rules: [{ required: true, message: "請輸入起始時間" }],
            },
            type: "timePicker",
            timePickerProps: {
              className: "theme-circle",
              placeholder: "請輸入起始時間",
            },
          },
        ]}
        modalAttr={{
          cancelText: "取消",
          centered: true,
          forceRender: true,
          maskClosable: false,
          okButtonProps: {
            className: mainState.isModalFormSuccess ? "btn-none" : "",
          },
          onCancel: () => setModalOpen(false),
          okText: "儲存",
          open: mainState.isModalOpen,
          styles: {
            header: { textAlign: "center" },
            body: { width: "60%", margin: "0 auto", minHeight: "auto" },
            footer: { textAlign: "center", direction: "rtl" },
          },
          title: "異常登入時間設定",
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

export default UnusualLoginTime;
