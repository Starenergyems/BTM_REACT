import { useRef, useState } from "react";
import { Table } from "antd";
import { ModalForm } from "@/components/widgets";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";
import SuccessRemind from "./successRemind";

function UpdatePassword() {
  const [mainState, setMainState] = useState({
    isModalOpen: false,
    isModalLoading: false,
    isModalFormSuccess: false,
    isTableLoading: false,
    updatePasswordTableData: [{ password: "a1234567" }],
  });
  const modalInnerFormRef = useRef();
  const modalFormIsSubmittedRef = useRef(false);
  const {
    getUpdatePasswordTableColumns,
    setModalOpen,
    validateConfirmPassword,
  } = useHelpers({ setMainState });

  return (
    <ScopeStyle>
      <Table
        className="mg-t-30"
        columns={getUpdatePasswordTableColumns()}
        dataSource={mainState.updatePasswordTableData}
        loading={mainState.isTableLoading}
        pagination={false}
        rowClassName="custom-no-hover"
        rowKey="password"
        scroll={{
          x: "max-content",
        }}
        title={() => <h3 className="mg-b-0 mg-t-8-minus">重設密碼</h3>}
      />
      <ModalForm
        isLoading={mainState.isModalLoading}
        list={
          !mainState.isModalFormSuccess
            ? //表單驗證成功前
              [
                {
                  id: "oldPassword",
                  isFullWidth: true,
                  formItemAttr: {
                    label: "舊密碼",
                    name: "oldPassword",
                    rules: [{ required: true, message: "請輸入舊密碼" }],
                  },
                  type: "input",
                  inputProps: {
                    inputAttr: {
                      placeholder: "請輸入舊密碼",
                    },
                  },
                },
                {
                  id: "password",
                  isFullWidth: true,
                  formItemAttr: {
                    label: "新密碼",
                    name: "password",
                    rules: [{ required: true, message: "請輸入新密碼" }],
                  },
                  type: "input",
                  inputProps: {
                    inputAttr: {
                      placeholder: "請輸入新密碼",
                    },
                    onChange() {
                      if (modalFormIsSubmittedRef.current) {
                        modalInnerFormRef.current.validateFields([
                          "confirmPassword",
                        ]);
                      }
                    },
                  },
                },
                {
                  id: "confirmPassword",
                  isFullWidth: true,
                  formItemAttr: {
                    label: "確認新密碼",
                    name: "confirmPassword",
                    rules: [
                      { required: true, message: "請再次確認新密碼" },
                      validateConfirmPassword,
                    ],
                  },
                  type: "input",
                  inputProps: {
                    inputAttr: {
                      placeholder: "請再次確認新密碼",
                    },
                  },
                },
              ]
            : //表單驗證成功後
              [
                {
                  id: "custom-content",
                  isFullWidth: true,
                  type: "custom",
                  customProps: {
                    children: <SuccessRemind />,
                  },
                },
              ]
        }
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
          okText: "確認修改",
          onCancel: () => {
            setModalOpen(false);
            setMainState((prevState) => ({
              ...prevState,
              isModalFormSuccess: false,
            }));
          },
          open: mainState.isModalOpen,
          title: "修改密碼",
          styles: {
            header: { textAlign: "center" },
            body: { width: "60%", margin: "0 auto", minHeight: "auto" },
            footer: { textAlign: "center", direction: "rtl" },
          },
          width: 500,
        }}
        onSuccess={(values) => {
          console.log(values);
          setMainState((prevState) => ({
            ...prevState,
            isModalFormSuccess: true,
          }));
        }}
        onFormReady={(formInstance, isSubmitted) => {
          modalInnerFormRef.current = formInstance;
          modalFormIsSubmittedRef.current = isSubmitted;
        }}
      />
    </ScopeStyle>
  );
}

export default UpdatePassword;
