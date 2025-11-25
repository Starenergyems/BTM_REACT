import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMsal } from "@azure/msal-react";
import { Layout, Menu } from "antd";
import { pagesPathName } from "@/router";
import { useRouteChange } from "@/hooks";
import { getAccountsInfo } from "@/slices/api/main/accounts/indexHelper";
import { getSystemMenuFunctionList } from "@/slices/api/main/system/indexHelper";
import { setBackground } from "@/slices/layout";
import CustomHeader from "@/pages/header";
import logoSrc from "@/assets/img/logo.png";
import logoWithWordSrc from "@/assets/img/logoWithWord.png";
import { color } from "@/styles/variable/indexStyle";
import ShutdownModal from "./shutdownModal";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";
import ImportantInfoModal from "./importantInfoModal";

function PageIndex() {
  const apiDispatch = useDispatch();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accountsState = useSelector((state) => state.apiAccounts);
  const layoutState = useSelector((state) => state.layout);
  const menuState = useSelector((state) => state.menu);
  const tokenState = useSelector((state) => state.apiToken);
  const { instance, accounts: mcalAccounts } = useMsal();
  const [mainState, setMainState] = useState({
    isShowImportantInfoModalOpen: false,
    isShutdownModalOpen: false,
  });
  const {
    getMenuMainItems,
    getMenuOtherItems,
    handleOnMouseEnter,
    handleOnMouseLeave,
    handleSiderOpen,
    handleClickLogo,
    menuOnSelect,
    menuFeatureOnClick,
    menuFeatureOnSelect,
    removeSiderInlineStyle,
    setModalOpen,
  } = useHelpers({ dispatch, instance, mcalAccounts, navigate, setMainState });

  //偵測路由變化，若為dashboard、子系統資訊頁則變更整個網頁背景色
  useRouteChange((location) => {
    if (
      location.pathname === pagesPathName.dashboard.path ||
      location.pathname === pagesPathName.sysCtrl.path ||
      location.pathname === pagesPathName.subSysInfo.path
    ) {
      dispatch(
        setBackground(`linear-gradient(180deg, #5f7784, ${color.themeBlack})`)
      );
    } else {
      if (layoutState.background !== color.themeBlack) {
        dispatch(setBackground(color.themeBlack));
      }
    }
  });

  useEffect(() => {
    if (tokenState.access) {
      apiDispatch(getAccountsInfo()).unwrap();
      apiDispatch(getSystemMenuFunctionList()).unwrap();
    }
  }, [tokenState.access, apiDispatch]);

  return (
    <ScopeStyle
      $layoutBackground={layoutState.background}
      $collapsed={menuState.siderIsCollapsed}
    >
      {/* {tokenState.access ? ( */}
      <>
        {/* {accountsState.omRole !== null && ( */}
        <Layout hasSider>
          <CustomHeader />
          {/* <Layout.Header style={{width:"100vw", backgroundColor:"red"}}>
          </Layout.Header> */}
          <Layout.Sider
            className="main-menu"
            collapsed={menuState.siderIsCollapsed}
            ref={removeSiderInlineStyle}
            onCollapse={handleSiderOpen}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            <div className="logo-container">
              {menuState.siderIsCollapsed ? (
                <img
                  className="img-logo"
                  src={logoSrc}
                  alt="logo"
                  onClick={handleClickLogo}
                />
              ) : (
                <img
                  className="img-logo-with-word"
                  src={logoWithWordSrc}
                  alt="logo with word"
                  onClick={handleClickLogo}
                />
              )}
            </div>

            <Menu
              className="mg-t-15"
              items={getMenuMainItems(accountsState.omRole)}
              mode="vertical"
              onSelect={menuOnSelect}
              selectedKeys={menuState.selectedKeys}
              theme="dark"
            />
            <Menu
              className="other-container"
              items={getMenuOtherItems(accountsState.omRole)}
              mode="vertical"
              onClick={menuFeatureOnClick}
              onSelect={menuFeatureOnSelect}
              selectedKeys={menuState.seoncdarySelectedKeys}
              theme="dark"
            />
          </Layout.Sider>
          <Layout className="layout-cotent">
            <Outlet />
          </Layout>
        </Layout>
        <ImportantInfoModal
          isModalOpen={mainState.isShowImportantInfoModalOpen}
          setModalOpen={(isOpen) =>
            setModalOpen("isShowImportantInfoModalOpen", isOpen)
          }
        />
        <ShutdownModal
          isModalOpen={mainState.isShutdownModalOpen}
          setModalOpen={(isOpen) => setModalOpen("isShutdownModalOpen", isOpen)}
        />

        {/* )} */}
      </>
      {/* ) : (  <Login />
       )} */}
    </ScopeStyle>
  );
}
export default PageIndex;
