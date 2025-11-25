import ScopeStyle from "./indexStyle";
import { PageBox } from "@/components/units";
import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { getChartOption } from "./indexHelper";
import { Link } from "react-router-dom";
import { pagesPathName } from "@/router";

function SchCtrl() {
  const chartRef_1 = useRef(null);
  const chartRef_2 = useRef(null);
  const [bidStatToday, setBidStatToday] = useState("全日得標");
  const [bidStatTomorrow, setBidStatTomorrow] = useState("部分得標");

  useEffect(() => {
    if (!chartRef_1.current || !chartRef_2.current) return;

    const execRate = [
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      90,
      90,
      90,
      90,
      95,
      95,
      95,
      95,
      90,
      90,
      90,
      90,
      90,
      90,
      90,
      90,
      90,
      90,
      95,
      95,
      95,
      95,
      95,
      90,
      90,
      90,
      95,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      100,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];

    const socRef = [
      10, 10, 8, 6, 6, 12, 18, 25, 30, 40, 45, 45, 50, 55, 60, 70, 75, 65, 50,
      35, 20, 15, 10, 10, 10, 10, 8, 6, 6, 12, 18, 25, 30, 40, 45, 45, 50, 55,
      60, 70, 75, 65, 50, 35, 20, 15, 10, 10, 10, 10, 8, 6, 6, 12, 18, 25, 30,
      40, 45, 45, 50, 55, 60, 70, 75, 65, 50, 35, 20, 15, 10, 10, 10, 10, 8, 6,
      6, 12, 18, 25, 30, 40, 45, 45, 50, 55, 60, 70, 75, 65, 50, 35, 20, 15, 10,
      10,
    ];
    const dispatchPower = [
      0, 0, 0, -5000, -5000, 0, 0, 0, 0, -2500, -2500, 0, 0, 0, 5000, 5000,
      5000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -5000, -5000, 0, 0, 0, 0, -2500,
      -2500, 0, 0, 0, 5000, 5000, 5000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -5000,
      -5000, 0, 0, 0, 0, -2500, -2500, 0, 0, 0, 5000, 5000, 5000, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, -5000, -5000, 0, 0, 0, 0, -2500, -2500, 0, 0, 0, 5000,
      5000, 5000, 0, 0, 0, 0, 0, 0, 0,
    ];

    const todayChartInstance = echarts.init(chartRef_1.current);
    const todayOption = getChartOption(execRate, socRef, dispatchPower, true);
    todayChartInstance.setOption(todayOption);

    const tomorrowChartInstance = echarts.init(chartRef_2.current);
    const tomorrowOption = getChartOption(
      execRate,
      socRef,
      dispatchPower,
      false
    );
    tomorrowChartInstance.setOption(tomorrowOption);

    const handleResize = () => todayChartInstance.resize();
    window.addEventListener("resize", handleResize);

    const handleResizeTomorrow = () => tomorrowChartInstance.resize();
    window.addEventListener("resize", handleResizeTomorrow);

    return () => {
      todayChartInstance.dispose();
      tomorrowChartInstance.dispose();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResizeTomorrow);
    };
  }, []);

  return (
    <ScopeStyle>
      <PageBox
        bgColorLinearGradient
        headerTitle="排程設置 Schedule Configuration"
        headerStyle={{ width: "565px" }}
      ></PageBox>
      <div style={{ padding: 24, background: "#0f1123", minHeight: "100vh" }}>
        <h2 style={{ color: "#fff", textAlign: "center", marginBottom: 24 }}>
          今日排程趨勢圖
        </h2>
        <div className="bid-state">
          <p>
            <span>得標狀態：</span>
            <span>{bidStatToday}</span>
          </p>
          <div>
            <span>展開表格</span>
            <Link to={pagesPathName.schCtrlTable.path}>
              <img src="../src/assets/img/icon-vector.svg"></img>
            </Link>
          </div>
        </div>
        <div
          ref={chartRef_1}
          style={{ height: "350px", width: "100%", marginBottom: "40px" }}
        />
        <h2 style={{ color: "#fff", textAlign: "center", marginBottom: 24 }}>
          明日排程趨勢圖
        </h2>
        <div className="bid-state">
          <p>
            <span>得標狀態：</span>
            <span>{bidStatTomorrow}</span>
          </p>
          <div>
            <span>展開表格</span>
            <Link to={pagesPathName.schCtrlTableTomorr.path}>
              <img src="../src/assets/img/icon-vector.svg"></img>
            </Link>
          </div>
        </div>
        <div ref={chartRef_2} style={{ height: "350px", width: "100%" }} />
      </div>
    </ScopeStyle>
  );
}

export default SchCtrl;
