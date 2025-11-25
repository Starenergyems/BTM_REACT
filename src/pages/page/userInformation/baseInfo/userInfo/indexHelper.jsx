function useHelpers() {
  //個人基本資料表格所需格式
  function getUserTableColumns() {
    return [
      {
        dataIndex: "name",
        title: "姓名",
        align: "center",
        fixed: "left",
      },
      {
        dataIndex: "company",
        title: "公司名稱",
        align: "center",
      },
      {
        dataIndex: "employeeNumber",
        title: "工號",
        align: "center",
      },
      {
        dataIndex: "department",
        title: "所屬部門",
        align: "center",
      },
      {
        dataIndex: "email",
        title: "帳號名稱",
        align: "center",
      },
    ];
  }

  return {
    getUserTableColumns,
  };
}

export { useHelpers };
