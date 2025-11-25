import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMsal } from "@azure/msal-react";
import { Layout, Menu } from "antd";
import { getAccountsInfo } from "@/slices/api/main/accounts/indexHelper";
import logoSrc from "@/assets/img/logo.png";
import logoWithWordSrc from "@/assets/img/logoWithWord.png";
import ShutdownModal from "./shutdownModal";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

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

  useEffect(() => {
    if (tokenState?.access) {
      apiDispatch(getAccountsInfo()).unwrap();
    }
  }, [tokenState?.access, apiDispatch]);

  return (
    <ScopeStyle
      $layoutBackground={layoutState.background}
      $collapsed={menuState.siderIsCollapsed}
    >
      {/* {tokenState.access ? ( */}
      <>
        {/* {accountsState.omRole !== null && ( */}
        <Layout hasSider>
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
              items={getMenuMainItems(accountsState?.omRole)}
              mode="vertical"
              onSelect={menuOnSelect}
              selectedKeys={menuState.selectedKeys}
              theme="dark"
            />
            <Menu
              className="other-container"
              items={getMenuOtherItems(accountsState?.omRole)}
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
