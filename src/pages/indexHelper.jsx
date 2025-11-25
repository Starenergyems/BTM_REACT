import { Badge } from "antd";
import { Icon } from "@iconify/react";
import { pagesPathName } from "@/router";
import {
  setSelectedKeys,
  setSeoncdarySelectedKeys,
  setSiderCollapsed,
} from "@/slices/menu";
import { clearToken } from "@/slices/api/main/token";
import { color } from "@/styles/variable/indexStyle";

function useHelpers({
  dispatch,
  instance,
  navigate,
  mcalAccounts,
  setMainState,
}) {
  //Menu 上方區塊
  function getMenuMainItems(omRole) {
    const items = [
      // {
      //   key: "demo",
      //   icon: <Icon icon="material-symbols:home-work-outline-rounded" />,
      //   label: "示範頁面",
      //   children: [
      //     {
      //       key: pagesPathName.demo.path,
      //       label: "示範客製化className使用",
      //     },
      //   ],
      // },
      {
        key: "modeCtrl",
        icon: <Icon icon="ant-design:control-outlined" />,
        label: "模式控制",
        children: [
          {
            key: pagesPathName.sysCtrl.path,
            label: "系統控制",
          },
          {
            key: pagesPathName.schCtrl.path,
            label: "排程設置",
          },
          {
            key: pagesPathName.subSysInfo.path,
            label: "子系統資訊",
          },
        ],
      },
      {
        key: "optInfo",
        icon: <Icon icon="tdesign:system-sum" />,
        label: "運轉資訊",
        children: [
          {
            key: pagesPathName.meter.path,
            label: "電表資訊",
          },
          {
            key: pagesPathName.pcsSum.path,
            label: "PCS",
          },
          {
            key: pagesPathName.batRack.path,
            label: "電池與貨櫃",
          },
        ],
      },
      {
        key: "systemControl",
        icon: <Icon icon="eos-icons:file-system-outlined" />,
        label: "系統控制",
        children: [
          {
            key: pagesPathName.communicationArchitecture.path,
            label: "通訊架構圖",
          },
          {
            key: pagesPathName.environmentControl.path,
            label: "環境控制",
          },
        ],
      },
      {
        key: pagesPathName.alarmLog.path,
        icon: <Icon icon="icon-park-outline:alarm" />,
        label: "告警紀錄",
      },
      {
        key: pagesPathName.eventLog.path,
        icon: <Icon icon="material-symbols:event-list-outline-rounded" />,
        label: "事件紀錄",
      },
      {
        key: "reportInfo",
        icon: <Icon icon="mingcute:report-forms-line" />,
        label: "報表資訊",
        children: [
          {
            key: pagesPathName.dailyReport.path,
            label: "日報",
          },
          {
            key: pagesPathName.monthlyReport.path,
            label: "月報",
          },
          {
            key: pagesPathName.annualReport.path,
            label: "年報",
          },
        ],
      },
      {
        key: pagesPathName.realTimeAndHistorical.path,
        icon: <Icon icon="mdi:report-areaspline" />,
        label: "觀測圖表",
      },
    ];
    const permissionsItems = [];
    for (const pageName of Object.keys(pagesPathName)) {
      const pageItem = pagesPathName[pageName];
      if (
        Array.isArray(pageItem.permissions) &&
        pageItem.permissions.length > 0
      ) {
        permissionsItems.push(pageItem);
      }
    }
    return filterMenuItem(items, permissionsItems, [], omRole);
  }
  //Menu 下方區塊
  function getMenuOtherItems(omRole) {
    const items = [
      {
        key: "importantInfo",
        icon: (
          <Badge dot color={color.red} offset={[-5, 2]}>
            <Icon
              icon="solar:bolt-circle-linear"
              className="icon-important-info"
              color={color.lightBlue}
            />
          </Badge>
        ),
        label: "重要數據",
      },
      {
        key: pagesPathName.userInformation.path,
        icon: <Icon icon="teenyicons:user-circle-outline" />,
        label: "使用者資訊",
      },
      {
        key: pagesPathName.systemSetting.path,
        icon: <Icon icon="mdi:gear" />,
        label: "系統設定",
      },
      {
        key: "logout",
        icon: <Icon icon="icon-park-outline:logout" />,
        label: "登出",
      },
      {
        key: "shutdown",
        icon: (
          <Icon
            className="icon-shutdown"
            color={color.red}
            icon="lets-icons:on-button"
          />
        ),
        label: "緊急停機",
      },
    ];
    const permissionsItems = [];
    for (const pageName of Object.keys(pagesPathName)) {
      const pageItem = pagesPathName[pageName];
      if (
        Array.isArray(pageItem.permissions) &&
        pageItem.permissions.length > 0
      ) {
        permissionsItems.push(pageItem);
      }
    }
    return filterMenuItem(items, permissionsItems, [], omRole);
  }
  //menu巢狀設計
  function filterMenuItem(items, permissionsItems, levelItems, omRole) {
    const arr = [];
    for (const [index, item] of items.entries()) {
      arr.push(item);
      for (const permissionsItem of permissionsItems) {
        if (item.key === permissionsItem.path) {
          if (!permissionsItem.permissions.includes(omRole)) {
            arr.pop();
            //同階層的項目為0
            if (arr.length < 1) {
              levelItems.splice(index, 1);
            }
          }
        }
        if (item.children) {
          item.children = filterMenuItem(
            item.children,
            permissionsItems,
            arr,
            omRole
          );
        }
      }
    }
    return arr;
  }
  //左側選單滑鼠移入事件
  function handleOnMouseEnter() {
    dispatch(setSiderCollapsed(false));
  }
  //左側選單滑鼠移出事件
  function handleOnMouseLeave() {
    dispatch(setSiderCollapsed(true));
  }
  //左側主選單收合/打開事件
  function handleSiderOpen(isCollapsed) {
    dispatch(setSiderCollapsed(isCollapsed));
  }
  //左側主選單選擇事件
  function menuOnSelect({ key }) {
    dispatch(setSelectedKeys(key));
    dispatch(setSeoncdarySelectedKeys([]));
    navigate(key);
  }
  //左側主選單功能選擇事件(重要數據、使用者資訊、系統設定、登出、緊急停機)
  function menuFeatureOnSelect({ key }) {
    dispatch(setSelectedKeys([]));
    dispatch(setSeoncdarySelectedKeys(key));
    switch (key) {
      case "logout": {
        dispatch(clearToken());
        dispatch({ type: "reset" });
        dispatch(setSelectedKeys([]));
        dispatch(setSeoncdarySelectedKeys([]));
        if (mcalAccounts.length > 0) {
          instance.logoutPopup();
        }
        navigate(pagesPathName.login.path);
        break;
      }
      case "importantInfo":
      case "shutdown": {
        //交由 menuFeatureOnClick 處理
        break;
      }
      default: {
        navigate(key);
      }
    }
  }
  //左側主選單功能click事件(重要數據、使用者資訊、系統設定、登出、緊急停機)
  function menuFeatureOnClick({ key }) {
    switch (key) {
      case "shutdown": {
        setModalOpen("isShutdownModalOpen", true);
        break;
      }
      case "importantInfo": {
        setModalOpen("isShowImportantInfoModalOpen", true);
        break;
      }
    }
  }
  //LOGO點擊事件
  function handleClickLogo() {
    dispatch(setSelectedKeys([]));
    dispatch(setSeoncdarySelectedKeys([]));
    navigate(pagesPathName.home.path);
  }
  // layout.sider移除內聯樣式(scrollbar)
  function removeSiderInlineStyle(element) {
    if (element) {
      element.style.removeProperty("scrollbar-gutter");
      element.style.removeProperty("scrollbar-width");
    }
  }
  //modal是否顯示
  function setModalOpen(type, isOpen) {
    setMainState((prevState) => ({
      ...prevState,
      [type]: isOpen,
    }));
  }

  return {
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
  };
}

export { useHelpers };
