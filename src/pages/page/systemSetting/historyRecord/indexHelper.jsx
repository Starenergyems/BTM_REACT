function useHelpers() {
  //表格所需格式
  function getTableColumns() {
    return [
      {
        title: "工號",
        dataIndex: "employeeNumber",
        align: "center",
        fixed: "left",
      },
      {
        title: "姓名",
        dataIndex: "name",
        align: "center",
      },
      {
        title: "公司名稱",
        dataIndex: "company",
        align: "center",
      },
      {
        title: "所屬部門",
        dataIndex: "department",
        align: "center",
      },
      {
        title: "帳戶名稱",
        dataIndex: "email",
        align: "center",
      },
      {
        title: "權限類別",
        dataIndex: "permissions",
        align: "center",
      },
      {
        title: "最後登入時間",
        dataIndex: "updateAt",
        align: "center",
      },
    ];
  }

  return {
    getTableColumns,
  };
}

export { useHelpers };
