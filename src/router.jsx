import { createBrowserRouter } from "react-router-dom";
import PageIndex from "@/pages/index";
import Login from "@/pages/page/accountPassword/index";
import ResetPassword from "@/pages/page/resetPassword/index";
import ProtectedRoute from "./pages/protectedRoute";
import NotFound from "./pages/page/notFound";
import SendEmail from "@/pages/page/sendEmail";
import ResetSuccess from "./pages/page/resetSuccess";

const pagesPathName = {
  // 設定頁面
  setting: {
    // 系統設定
    setting: { routeName: "setting", path: "/setting", pathName: "系統設定" },
    // 排程設定
    schedule: {
      routeName: "schedule",
      path: "setting/schedule",
      pathName: "排程設定",
    },
    // 需量設定
    demandRp: {
      routeName: "demandRp",
      path: "setting/demandRp",
      pathName: "需量設定",
    },
  },
  bill: {
    // 儲能系統
    storageBill: { routeName: "storageBill", path: "bill/storage", pathName: "儲能系統" },
    // 太陽能
    solarBill: { routeName: "solarBill", path: "bill/solar", pathName: "太陽能" },
    // 充電樁
    chargerBill: {
      routeName: "chargerBill",
      path: "bill/charger",
      pathName: "充電樁",
    },
    // 報表下載
    report: { routeName: "report", path: "bill/report", pathName: "報表下載" },
  },
  // 儲能系統
  storage: { routeName: "storage", path: "/storage", pathName: "儲能系統" },
  // 太陽能
  solar: { routeName: "solar", path: "/solar", pathName: "太陽能" },
  // 充電樁
  charger: {
    routeName: "charger",
    path: "/charger",
    pathName: "充電樁",
  },
  // 告警系統
  alarm: {
    real: {
      routeName: "real",
      path: "alarm/real",
      pathName: "即時告警",
    },
    historic: {
      routeName: "historic",
      path: "alarm/historic",
      pathName: "歷史告警",
    },
  },
  // 輔助服務 - 即時備轉
  realTimeSpinningReserve: {
    routeName: "realTimeSpinningReserve",
    path: "/realTimeSpinningReserve",
  },
  // 個人資料
  profile: {
    personal: {
      routeName: "personal",
      path: "/personal",
      pathName: "個人資料",
    }
  },
  // 權限管理設定
  systemSetting: {
    system: {
      routeName: "systemSettings",
      path: "/systemSettings",
      pathName: "權限管理設定",
    },
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
      // {
      //   // 測試頁
      //   path: pagesPathName.test.path,
      //   async lazy () {
      //     return getLazyComponent(await import("@/pages/page/test/index"));
      //   },
      // },
      {
        // 示範頁
        path: pagesPathName.demo.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/demo/index"));
        },
      },
      {
        // 首頁
        path: "",
        async lazy () {
          return getLazyComponent(await import("@/pages/page/home/index"));
        },
      },
      {
        // 系統設定
        path: pagesPathName.setting.setting.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/setting/index"));
        },
      },
      {
        // 排程設定
        path: pagesPathName.setting.schedule.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/schedule/index"));
        },
      },
      {
        // 需量設定
        path: pagesPathName.setting.demandRp.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/demandRp/index"));
        },
      },
      {
        // 儲能系統
        path: pagesPathName.bill.storageBill.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/storageBill/index"));
        },
      },
      {
        // 太陽能
        path: pagesPathName.bill.solarBill.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/solarBill/index"));
        },
      },
      {
        // 充電樁
        path: pagesPathName.bill.chargerBill.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/chargerBill/index"));
        },
      },
      {
        // 報表下載
        path: pagesPathName.bill.report.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/report/index"));
        },
      },
      {
        // 儲能系統
        path: pagesPathName.storage.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/storage/index"));
        },
      },
      {
        // 太陽能
        path: pagesPathName.solar.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/solar/index"));
        },
      },
      {
        // 充電樁
        path: pagesPathName.charger.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/charger/index"));
        },
      },
      {
        // 即時告警
        path: pagesPathName.alarm.real.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/real/index"));
        },
      },
      {
        // 歷史告警
        path: pagesPathName.alarm.historic.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/historic/index"));
        },
      },

      {
        // 即時備轉頁
        path: pagesPathName.realTimeSpinningReserve.routeName,
        async lazy () {
          return getLazyComponent(
            await import("@/pages/page/realTimeSpinningReserve/index")
          );
        },
      },
      {
        // 個人資料
        path: pagesPathName.profile.personal.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/personal/index"));
        },
      },
      {
        // 權限管理設定
        path: pagesPathName.systemSetting.system.path,
        async lazy () {
          return getLazyComponent(await import("@/pages/page/system/index"));
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
