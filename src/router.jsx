import { createBrowserRouter, Navigate } from "react-router-dom";
import PageIndex from "@/pages/index";
import Login from "@/pages/page/login/page/accountPassword/index";
import ResetPassword from "@/pages/page/login/page/resetPassword/index";
import ProtectedRoute from "./pages/protectedRoute";
import NotFound from "./pages/page/notFound";
import SendEmail from "@/pages/page/login/page/sendEmail";
import ResetSuccess from "./pages/page/login/page/resetSuccess";

/*
  1. 未設定permissions表示頁面為public，有設定permissions的需符合該權限身分才可以進入頁面
  2. 路由階層中，children若因設定permissions，而導致項目為0時，父層路由需也隱藏
  ※  Protected元件，負責處理網址列輸入後的路由權限
  ※  pages檔案中的indexHelper中，負責處理menu是否根據權限顯示
  例如：
  const pagesPathName = {
    userInfo: {
      routeName: "userInfo",
      path: "/userInfo",
      permissions: [omRole.normal, omRole.operator],
    },
  }
*/
const pagesPathName = {
  alarmLog: {
    routeName: "alarmLog",
    path: "/alarmLog",
  },
  annualReport: {
    //報表資訊-年報
    routeName: "annualReport",
    path: "/reportInfo/annualReport",
  },
  batRack: {
    //運轉資訊-電池與貨櫃
    routeName: "batRack",
    path: "/optInfo/batRack",
  },
  communicationArchitecture: {
    //系統控制-通訊架構圖
    routeName: "communicationArchitecture",
    path: "/systemControl/communicationArchitecture",
  },
  dashboard: {
    routeName: "dashboard",
    path: "/dashboard",
  },
  dailyReport: {
    //報表資訊-日報
    routeName: "dailyReport",
    path: "/reportInfo/dailyReport",
  },
  demo: {
    routeName: "demo",
    path: "/demo",
  },
  environmentControl: {
    //系統控制-環境控制
    routeName: "environmentControl",
    path: "/systemControl/environmentControl",
  },
  eventLog: {
    routeName: "eventLog",
    path: "/eventLog",
  },
  home: { routeName: "/", path: "/" },
  login: { routeName: "login", path: "/login" },
  resetPassword: { routeName: "resetPassword", path: "/resetPassword" },
  resetSuccess: { routeName: "resetSuccess", path: "/resetSuccess" },
  sendEmail: { routeName: "sendEmail", path: "/sendEmail" },
  meter: {
    //運轉資訊-電表資訊
    routeName: "meter",
    path: "/optInfo/meter",
  },
  modeCtrl: {
    //模式控制
    routeName: "modeCtrl",
    path: "/modeCtrl",
  },
  monthlyReport: {
    //報表資訊-月報
    routeName: "monthlyReport",
    path: "/reportInfo/monthlyReport",
  },
  optInfo: {
    //運轉資訊
    routeName: "optInfo",
    path: "/optInfo",
  },
  pcsSum: {
    //運轉資訊-pcs總覽
    routeName: "pcsSum",
    path: "/optInfo/pcsSum",
  },
  realTimeAndHistorical: {
    // 觀測圖表-即時圖與歷史圖
    routeName: "realTimeAndHistorical",
    path: "/realTimeAndHistorical",
  },
  reportInfo: {
    // 報表資訊
    routeName: "reportInfo",
    path: "/reportInfo",
  },
  sysCtrl: {
    //模式控制-系統控制
    routeName: "sysCtrl",
    path: "/modeCtrl/sysCtrl",
  },
  schCtrlTable: {
    //模式控制-排程設置-表格-今日
    routeName: "schCtrlTable",
    path: "/modeCtrl/schCtrlTable",
  },
  schCtrlTableTomorr: {
    //模式控制-排程設置-表格-明日
    routeName: "schCtrlTableTomorr",
    path: "/modeCtrl/schCtrlTableTomorr",
  },
  schCtrl: {
    //模式控制-排程設置-趨勢圖
    routeName: "schCtrl",
    path: "/modeCtrl/schCtrl",
  },
  subSysInfo: {
    //模式控制-子系統資訊
    routeName: "subSysInfo",
    path: "/modeCtrl/subSysInfo",
  },
  systemControl: {
    routeName: "systemControl",
    path: "/systemControl",
  },
  systemSetting: {
    routeName: "systemSetting",
    path: "/systemSetting",
  },
  userInformation: {
    routeName: "userInformation",
    path: "/userInformation",
  },
};

//動態載入頁面
function getLazyComponent(importUrl) {
  return {
    Component: importUrl.default,
  };
}

const routes = [
  {
    path: pagesPathName.home.routeName,
    element: <ProtectedRoute element={PageIndex} />,
    children: [
      {
        //首頁
        path: "",
        async lazy() {
          return getLazyComponent(await import("@/pages/page/home/index"));
        },
      },
      {
        //dashboard
        path: pagesPathName.dashboard.routeName,
        async lazy() {
          return getLazyComponent(await import("@/pages/page/dashboard/index"));
        },
      },
      {
        //示範頁面
        path: pagesPathName.demo.routeName,
        children: [
          {
            //示範客製化className使用
            path: "",
            async lazy() {
              return getLazyComponent(await import("@/pages/page/demo/index"));
            },
          },
        ],
      },
      {
        //模式控制
        path: pagesPathName.modeCtrl.routeName,
        children: [
          {
            index: true,
            element: <Navigate to={pagesPathName.sysCtrl.path} replace />,
          },
          {
            path: pagesPathName.sysCtrl.routeName,
            async lazy() {
              return getLazyComponent(
                await import("@/pages/page/modeCtrl/page/sysCtrl/index")
              );
            },
          },
          {
            path: pagesPathName.subSysInfo.routeName,
            async lazy() {
              return getLazyComponent(
                await import("@/pages/page/modeCtrl/page/subSysInfo/index")
              );
            },
          },
          {
            path: pagesPathName.schCtrl.routeName,
            async lazy() {
              return getLazyComponent(
                await import("@/pages/page/modeCtrl/page/schCtrl/index")
              );
            },
          },
          {
            path: pagesPathName.schCtrlTable.routeName,
            async lazy() {
              return getLazyComponent(
                await import("@/pages/page/modeCtrl/page/schCtrlTable/index")
              );
            },
          },
          {
            path: pagesPathName.schCtrlTableTomorr.routeName,
            async lazy() {
              return getLazyComponent(
                await import(
                  "@/pages/page/modeCtrl/page/schCtrlTableTomorr/index"
                )
              );
            },
          },
        ],
      },
      {
        //運轉資訊
        path: pagesPathName.optInfo.routeName,
        children: [
          {
            index: true,
            element: <Navigate to={pagesPathName.meter.path} replace />,
          },
          {
            path: pagesPathName.meter.routeName,
            async lazy() {
              return getLazyComponent(
                await import("@/pages/page/optInfo/page/meter/index")
              );
            },
          },
          {
            path: pagesPathName.pcsSum.routeName,
            async lazy() {
              return getLazyComponent(
                await import("@/pages/page/optInfo/page/pcsSum/index")
              );
            },
          },
          {
            path: pagesPathName.batRack.routeName,
            async lazy() {
              return getLazyComponent(
                await import("@/pages/page/optInfo/page/batRack/index")
              );
            },
          },
        ],
      },
      {
        //系統控制
        path: pagesPathName.systemControl.routeName,
        children: [
          {
            path: pagesPathName.communicationArchitecture.routeName,
            async lazy() {
              return getLazyComponent(
                await import(
                  "@/pages/page/systemControl/page/communicationArchitecture/index"
                )
              );
            },
          },
          {
            path: pagesPathName.environmentControl.routeName,
            async lazy() {
              return getLazyComponent(
                await import(
                  "@/pages/page/systemControl/page/environmentControl/index"
                )
              );
            },
          },
        ],
      },
      {
        //告警紀錄
        path: pagesPathName.alarmLog.routeName,
        async lazy() {
          return getLazyComponent(await import("@/pages/page/alarmLog/index"));
        },
      },
      {
        //事件紀錄
        path: pagesPathName.eventLog.routeName,
        async lazy() {
          return getLazyComponent(await import("@/pages/page/eventLog/index"));
        },
      },
      {
        //報表資訊
        path: pagesPathName.reportInfo.routeName,
        children: [
          {
            index: true,
            element: <Navigate to={pagesPathName.dailyReport.path} replace />,
          },
          {
            path: pagesPathName.dailyReport.routeName,
            async lazy() {
              return getLazyComponent(
                await import("@/pages/page/reportInfo/page/dailyReport/index")
              );
            },
          },
          {
            path: pagesPathName.monthlyReport.routeName,
            async lazy() {
              return getLazyComponent(
                await import("@/pages/page/reportInfo/page/monthlyReport/index")
              );
            },
          },
          {
            path: pagesPathName.annualReport.routeName,
            async lazy() {
              return getLazyComponent(
                await import("@/pages/page/reportInfo/page/annualReport/index")
              );
            },
          },
        ],
      },
      {
        //觀測圖表
        path: pagesPathName.realTimeAndHistorical.routeName,
        async lazy() {
          return getLazyComponent(
            await import("@/pages/page/realTimeAndHistorical/index")
          );
        },
      },
      {
        //使用者資訊
        path: pagesPathName.userInformation.routeName,
        async lazy() {
          return getLazyComponent(
            await import("@/pages/page/userInformation/index")
          );
        },
      },
      {
        //系統設定
        path: pagesPathName.systemSetting.routeName,
        async lazy() {
          return getLazyComponent(
            await import("@/pages/page/systemSetting/index")
          );
        },
      },
    ],
  },
  {
    path: pagesPathName.login.routeName,
    element: <Login />,
  },
  {
    path: pagesPathName.resetPassword.routeName,
    element: <ResetPassword />,
  },
  {
    path: pagesPathName.sendEmail.routeName,
    element: <SendEmail />,
  },
  {
    path: pagesPathName.resetSuccess.routeName,
    element: <ResetSuccess />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);
export { pagesPathName, router };
