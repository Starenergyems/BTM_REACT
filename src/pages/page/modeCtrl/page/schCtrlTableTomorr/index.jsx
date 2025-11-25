import ScopeStyle from "./indexStyle";
import { useEffect, useState, useRef } from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/units";

function SchCtrlTable() {
  const [data, setData] = useState([
    {
      time: "00:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 48.8,
      soc_15_30: 48.8,
      soc_30_45: 48.8,
      soc_45_00: 48.8,
    },
    {
      time: "01:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "02:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "03:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "04:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 48.8,
      soc_15_30: 48.8,
      soc_30_45: 48.8,
      soc_45_00: 48.8,
    },
    {
      time: "05:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "06:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "07:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "08:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 48.8,
      soc_15_30: 48.8,
      soc_30_45: 48.8,
      soc_45_00: 48.8,
    },
    {
      time: "09:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "10:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "11:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "12:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 48.8,
      soc_15_30: 48.8,
      soc_30_45: 48.8,
      soc_45_00: 48.8,
    },
    {
      time: "13:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "14:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "15:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "16:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "17:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "18:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "19:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "20:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "21:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "22:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
    {
      time: "23:00",
      get_00_15: 10000,
      get_15_30: 10000,
      get_30_45: 10000,
      get_45_00: 10000,
      shift_00_15: -3000,
      shift_15_30: -3000,
      shift_30_45: -3000,
      shift_45_00: -3000,
      soc_00_15: 18.8,
      soc_15_30: 18.8,
      soc_30_45: 18.8,
      soc_45_00: 18.8,
    },
  ]);
  const [editable, setEditable] = useState(false);
  const tempDataValues = useRef(data);
  const navigate = useNavigate();
  const renderEditableCell = (dataIndex) => (_, record, rowIndex) => {
    return editable ? (
      <Input
        inputAttr={{
          defaultValue: record[dataIndex],
        }}
        onChange={(e) => {
          const newData = [...data];
          newData[rowIndex][dataIndex] = e.target.value;
          tempDataValues.current = newData;
        }}
        style={{ width: "100px" }}
      />
    ) : (
      record[dataIndex]
    );
  };

  const columns = [
    {
      title: "時段",
      dataIndex: "time",
      fixed: "left",
    },
    {
      title: "得標量(kW)",
      children: [
        {
          title: "00-15",
          dataIndex: "get_00_15",
          render: renderEditableCell("get_00_15"),
        },
        {
          title: "15-30",
          dataIndex: "get_15_30",
          render: renderEditableCell("get_15_30"),
        },
        {
          title: "30-45",
          dataIndex: "get_30_45",
          render: renderEditableCell("get_30_45"),
        },
        {
          title: "45-00",
          dataIndex: "get_45_00",
          render: renderEditableCell("get_45_00"),
        },
      ],
    },
    {
      title: "釋放量(kW)",
      children: [
        {
          title: "00-15",
          dataIndex: "shift_00_15",
          render: renderEditableCell("shift_00_15"),
        },
        {
          title: "15-30",
          dataIndex: "shift_15_30",
          render: renderEditableCell("shift_15_30"),
        },
        {
          title: "30-45",
          dataIndex: "shift_30_45",
          render: renderEditableCell("shift_30_45"),
        },
        {
          title: "45-00",
          dataIndex: "shift_45_00",
          render: renderEditableCell("shift_45_00"),
        },
      ],
    },
    {
      title: "SOC參考值(%)",
      children: [
        {
          title: "00-15",
          dataIndex: "soc_00_15",
          render: renderEditableCell("soc_00_15"),
        },
        {
          title: "15-30",
          dataIndex: "soc_15_30",
          render: renderEditableCell("soc_15_30"),
        },
        {
          title: "30-45",
          dataIndex: "soc_30_45",
          render: renderEditableCell("soc_30_45"),
        },
        {
          title: "45-00",
          dataIndex: "soc_45_00",
          render: renderEditableCell("soc_45_00"),
        },
      ],
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        const response = await fetch("/api/schedule-data"); // Replace with real endpoint
        const result = await response.json();
        const formatted = result.map((item, index) => ({
          key: index.toString(),
          ...item,
        }));
        setData(formatted);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScopeStyle>
      <h2 style={{ color: "#fff", textAlign: "center", marginBottom: 24 }}>
        明日排程趨勢圖
      </h2>
      <div className="return-btn">
        <div>
          <span>返回</span>
          <img
            src="../src/assets/img/arrow-right-circle.svg"
            style={{ color: "#fff" }}
            onClick={() => navigate(-1)}
          ></img>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
        scroll={{ x: "max-content", y: 570 }}
        style={{ background: "#1c1e30", color: "#fff" }}
        footer={() => <div></div>}
        className={`theme-gradient-gray ${editable ? "editable-mode" : ""}`}
        rowKey="time"
      />
      <Button
        className="edit-btn"
        type="primary"
        onClick={() => {
          setEditable(!editable);
          if (editable) {
            setData(tempDataValues.current);
          }
        }}
      >
        {editable ? "儲存" : "編輯"}
      </Button>
    </ScopeStyle>
  );
}

export default SchCtrlTable;
