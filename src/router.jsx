import { createBrowserRouter } from "react-router-dom";
import PageIndex from "@/pages/index";
import Login from "@/pages/page/accountPassword/index";
import ResetPassword from "@/pages/page/resetPassword/index";
import ProtectedRoute from "./pages/protectedRoute";
import NotFound from "./pages/page/notFound";
import SendEmail from "@/pages/page/sendEmail";
import ResetSuccess from "./pages/page/resetSuccess";

const pagesPathName = {
  //示範頁
  demo: { routeName: "demo", path: "/demo" },
  //首頁
  home: { routeName: "", path: "/" },
  //登入頁
  login: { routeName: "login", path: "/login" },
  //重設密碼頁
  resetPassword: { routeName: "resetPassword", path: "/resetPassword" },
  //密碼變更成功頁
  resetSuccess: { routeName: "resetSuccess", path: "/resetSuccess" },
  sendEmail: { routeName: "sendEmail", path: "/sendEmail" },
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
        //示範頁
        path: pagesPathName.demo.routeName,
        async lazy() {
          return getLazyComponent(await import("@/pages/page/demo/index"));
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
