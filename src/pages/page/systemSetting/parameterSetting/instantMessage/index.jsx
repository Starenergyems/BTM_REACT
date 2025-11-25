import { useRef, useState } from "react";
import { Table } from "antd";
import { ModalForm } from "@/components/widgets";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

function InstantMessage() {
  const [mainState, setMainState] = useState({
    isModalOpen: false,
    isTableLoading: false,
    instantMessageTableData: [
      {
        id: 1,
        message: "你好! 歡迎登入EMS",
      },
    ],
  });
  const modalInnerFormRef = useRef();
  const { getInstantMessageTableColumns, setModalOpen } = useHelpers({
    setMainState,
  });

  return (
    <ScopeStyle>
      <Table
        className="mg-t-10"
        columns={getInstantMessageTableColumns(modalInnerFormRef)}
        dataSource={mainState.instantMessageTableData}
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
            id: "message",
            formItemAttr: {
              label: "即時訊息內容",
              name: "message",
              rules: [{ required: true, message: "請輸入即時訊息內容" }],
            },
            type: "textarea",
            inputProps: {
              noResize: true,
              inputAttr: {
                placeholder: "請輸入即時訊息內容",
                rows: 8,
              },
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

export default InstantMessage;
