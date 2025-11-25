import { useState } from "react";
import { Table } from "antd";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

function UserInfo() {
  const [
    mainState,
    // setMainState
  ] = useState({
    isTableLoading: false,
    userTableData: [
      {
        name: "江子晴",
        company: "星佑能源股份有限公司",
        employeeNumber: "SE0053",
        department: "電機研發處",
        email: "yuching@hdrenewables.com",
      },
      {
        name: "江子晴2",
        company: "星佑能源股份有限公司",
        employeeNumber: "SE0053",
        department: "電機研發處",
        email: "yuching2@hdrenewables.com",
      },
    ],
  });
  const { getUserTableColumns } = useHelpers();

  return (
    <ScopeStyle>
      <Table
        className="mg-t-10"
        columns={getUserTableColumns()}
        dataSource={mainState.userTableData}
        loading={mainState.isTableLoading}
        pagination={false}
        rowClassName="custom-no-hover"
        rowKey="email"
        scroll={{
          x: "max-content",
        }}
        title={() => <h3 className="mg-b-0 mg-t-8-minus">個人基本資料</h3>}
      />
    </ScopeStyle>
  );
}

export default UserInfo;
