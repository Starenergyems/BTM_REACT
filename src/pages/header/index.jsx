import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Layout } from "antd";
import { toDateTimeStr } from "@/utils/format";
import ScopeStyle from "./indexStyle";

const getRandomStatus = () => {
  //假值
  const statuses = [
    "PCS8異常 - 配電供應異常",
    "BMS1異常 - 通訊故障",
    "VCB5異常 - 跳脫",
  ];

  const value = statuses[Math.floor(Math.random() * statuses.length)];
  return value;
};

function CustomHeader() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alertMsg, setAlertMsg] = useState("");

  const fetchData = async () => {
    try {
      const newMsg = getRandomStatus(); //假值
      setAlertMsg(() => newMsg);
    } catch (error) {
      toast.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const alertMsg = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(timer, alertMsg);
  }, []);

  return (
    <ScopeStyle>
      <Layout.Header className="header-style">
        {/* Left Side: Active Tab */}
        <div className="left-section-style">
          <span className="active-tab-style">調頻服務中</span>
          <span className="tab-style">即時訊息</span>
        </div>

        {/* Center: Alert Message */}
        <span className="text-style">{alertMsg}</span>

        {/* Right Side: Real-time Clock */}
        <span className="time-style">
          {toDateTimeStr(currentTime, "YYYY-MM-DD HH:mm:ss")}
        </span>
      </Layout.Header>
    </ScopeStyle>
  );
}

export default CustomHeader;
