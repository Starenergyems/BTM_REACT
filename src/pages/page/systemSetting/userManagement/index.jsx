import { useRef, useState } from "react";
import { Flex, Table } from "antd";
import { Select } from "@/components/units";
import { ModalForm } from "@/components/widgets";
import { getTablePageSize } from "@/utils/table";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

function UserManagement() {
  const [mainState, setMainState] = useState({
    isModalOpen: false,
    isModalLoading: false,
    isTableLoading: false,
    tableData: [
      {
        employeeNumber: "SE0053",
        name: "江子晴",
        company: "星佑能源股份有限公司",
        department: "資訊處",
        email: "yuching@hdrenewables.com",
        permissions: "最高管理者",
        accountStatus: true,
        updateAt: "2000/01/01 23:59",
      },
      {
        employeeNumber: "SE0054",
        name: "江子晴2",
        company: "星佑能源股份有限公司",
        department: "資訊處",
        email: "yuching@hdrenewables.com",
        permissions: "開發人員",
        accountStatus: false,
        updateAt: "2001/01/01 23:59",
      },
    ],
  });
  const modalInnerFormRef = useRef();
  const { getTableColumns, setModalOpen } = useHelpers({
    setMainState,
  });

  return (
    <ScopeStyle>
      <Flex className="filter-container" gap={16} wrap>
        <Select
          selectAttr={{
            allowClear: true,
            options: [
              { label: "選項一", value: 1 },
              { label: "選項二", value: 2 },
            ],
            placeholder: "選擇公司名稱",
            showSearch: true,
          }}
        />
        <Select
          selectAttr={{
            allowClear: true,
            options: [
              { label: "選項一", value: 1 },
              { label: "選項二", value: 2 },
            ],
            placeholder: "選擇權限類別",
            showSearch: true,
          }}
        />
      </Flex>
      <Table
        className="mg-t-20"
        columns={getTableColumns(modalInnerFormRef)}
        dataSource={mainState.tableData}
        loading={mainState.isTableLoading}
        pagination={{
          pageSize: getTablePageSize(),
          position: ["bottomCenter"],
          showSizeChanger: false,
        }}
        rowClassName="custom-no-hover"
        rowKey="employeeNumber"
        scroll={{
          x: "max-content",
        }}
      />
      <ModalForm
        isLoading={mainState.isModalLoading}
        list={[
          {
            id: "employeeNumber",
            formItemAttr: {
              label: "工號",
              name: "employeeNumber",
              rules: [{ required: true, message: "請選擇工號" }],
            },
            type: "select",
            selectProps: {
              selectAttr: {
                options: [
                  { label: "選項一", value: 1 },
                  { label: "選項二", value: 2 },
                ],
                placeholder: "請選擇工號",
              },
            },
          },
          {
            id: "name",
            formItemAttr: {
              label: "姓名",
              name: "name",
              rules: [{ required: true, message: "請輸入姓名" }],
            },
            type: "input",
            inputProps: {
              inputAttr: {
                placeholder: "請輸入姓名",
              },
            },
          },
          {
            id: "company",
            formItemAttr: {
              label: "公司名稱",
              name: "company",
              rules: [{ required: true, message: "請輸入公司名稱" }],
            },
            type: "input",
            inputProps: {
              inputAttr: {
                placeholder: "請輸入公司名稱",
              },
            },
          },
          {
            id: "department",
            formItemAttr: {
              label: "所屬部門",
              name: "department",
              rules: [{ required: true, message: "請輸入所屬部門" }],
            },
            type: "input",
            inputProps: {
              inputAttr: {
                placeholder: "請輸入所屬部門",
              },
            },
          },
          {
            id: "permissions",
            formItemAttr: {
              label: "權限類別",
              name: "permissions",
              rules: [{ required: true, message: "請選擇權限類別" }],
            },
            type: "select",
            selectProps: {
              selectAttr: {
                options: [
                  { label: "選項一", value: 1 },
                  { label: "選項二", value: 2 },
                ],
                placeholder: "請選擇權限類別",
              },
            },
          },
          {
            id: "accountStatus",
            formItemAttr: {
              label: "帳戶狀態",
              name: "accountStatus",
              rules: [{ required: true, message: "請選擇帳戶狀態" }],
            },
            type: "select",
            selectProps: {
              selectAttr: {
                options: [
                  { label: "啟動", value: true },
                  { label: "關閉", value: false },
                ],
                placeholder: "請選擇帳戶狀態",
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
          title: "人員資料編輯",
          width: 650,
        }}
        onFormReady={(formInstance) => {
          modalInnerFormRef.current = formInstance;
        }}
      />
    </ScopeStyle>
  );
}

export default UserManagement;
