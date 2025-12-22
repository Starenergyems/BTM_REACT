import { createBrowserRouter } from "react-router-dom";
import PageIndex from "@/pages/index";
import Login from "@/pages/page/accountPassword/index";
import ResetPassword from "@/pages/page/resetPassword/index";
import ProtectedRoute from "./pages/protectedRoute";
import NotFound from "./pages/page/notFound";
import SendEmail from "@/pages/page/sendEmail";
import ResetSuccess from "./pages/page/resetSuccess";

const pagesPathName = {

  // 測試頁面
  test: { routeName: "test", path: "/test", pathName: "測試頁" },
  // 設定頁面
  setting: {
    // 系統設定
    setting: { routeName: "setting", path: "/setting", pathName: "系統設定" },
    // 排程設定
    schedule: {
      routeName: "schedule",
      path: "/setting/schedule",
      pathName: "排程設定",
    },
    // 需量設定
    demandRp: {
      routeName: "demandRp",
      path: "/setting/demandRp",
      pathName: "需量設定",
    },
  },
  calculation: {
    // 太陽能
    solarEnergy: { routeName: "solarEnergy", path: "/solar-energy", pathName: "太陽能" },
    // 充電樁
    chargingPile: {
      routeName: "chargingPile",
      path: "/charging-pile",
      pathName: "充電樁",
    },
    // 需量設定
    systemStorage: {
      routeName: "systemStorage",
      path: "/system-storage",
      pathName: "儲能系統",
    },
  },

  // 系統資訊
  system: {
    // 太陽能
    solarEnergyAlert: { routeName: "solarEnergyAlert", path: "/solar-energy-alert", pathName: "1a 太陽能告警" },
    // 充電樁
    chargingPileAlert: {
      routeName: "chargingPileAlert",
      path: "/charging-pile-alert",
      pathName: "2a 充電樁告警",
    },
    // 需量設定
    systemStorage: {
      routeName: "systemStorageAlert",
      path: "/system-storage-alert",
      pathName: "3a 儲能櫃告警",
    },
  },

  // 告警系統
  systemStorageAlert: {
    rightNowAlert: {
      routeName: "rightNowAlert",
      path: "/right-now-alert",
      pathName: "1即時告警",
    },
    historyAlert: {
      routeName: "historyAlert",
      path: "/history-alert",
      pathName: "2歷史告警",
    },
  },
  // 輔助服務 - 即時備轉
  realTimeSpinningReserve: {
    routeName: "realTimeSpinningReserve",
    path: "/realTimeSpinningReserve",
  },
  personalSettings: {
    routeName: "personalSettings",
    path: "/personalSettings",
  },
  // 示範頁
  demo: { routeName: "demo", path: "/demo", pathName: "示範頁" },
  // 首頁
  home: { routeName: "", path: "/" },
  // 登入頁
  login: { routeName: "login", path: "/login" },

  //重設密碼頁
  resetPassword: { routeName: "resetPassword", path: "/resetPassword" },
  //密碼變更成功頁
  resetSuccess: { routeName: "resetSuccess", path: "/resetSuccess" },
  sendEmail: { routeName: "sendEmail", path: "/sendEmail" },
};

//動態載入頁面
function getLazyComponent (importUrl) {
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
        // 測試頁
        path: pagesPathName.test.routeName,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/test/index"));
        },
      },
      {
        //首頁
        path: "",
        async lazy () {
          return getLazyComponent(await import("@/pages/page/home/index"));
        },
      },
      {
        //示範頁
        path: pagesPathName.demo.routeName,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/demo/index"));
        },
      },
      {
        //即時備轉頁
        path: pagesPathName.realTimeSpinningReserve.routeName,
        async lazy () {
          return getLazyComponent(
            await import("@/pages/page/realTimeSpinningReserve/index")
          );
        },
      },
    ],
  },
  {
    //登入頁
    path: pagesPathName.login.routeName,
    element: <Login />,
  },
  {
    //重設密碼頁
    path: pagesPathName.resetPassword.routeName,
    element: <ResetPassword />,
  },
  {
    //忘記密碼:寄送註冊信箱頁
    path: pagesPathName.sendEmail.routeName,
    element: <SendEmail />,
  },
  {
    //密碼變更成功頁
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
