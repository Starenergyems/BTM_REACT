function useHelpers() {
  //設備控制table 格式
  function getTableColumns() {
    return [
      {
        title: "No.",
        dataIndex: "id",
        align: "center",
      },
      {
        title: "時間",
        dataIndex: "dateTime",
        align: "center",
      },
      {
        title: "類別",
        dataIndex: "type",
        align: "center",
      },
      {
        title: "設備名稱",
        dataIndex: "name",
        align: "center",
      },
      {
        title: "操作者",
        dataIndex: "operator",
        align: "center",
      },
      {
        title: "事件內容",
        dataIndex: "content",
        align: "center",
      },
    ];
  }
  return { getTableColumns };
}

export { useHelpers };
