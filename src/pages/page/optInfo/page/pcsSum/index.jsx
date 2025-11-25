import { useState } from "react";
import { Flex, Tabs } from "antd";
import { PageBox, Select } from "@/components/units";
import LcOverview from "./lcOverview";
import PcsInfo from "./pcsInfo";
import AlertIssue from "./alertIssue";
import ScopeStyle from "./indexStyle";

function PcsSum() {
  const [mainState, setMainState] = useState({
    tabActiveKey: "lcOverview",
  });
  const items = [
    { key: "lcOverview", label: "LC總覽", children: <LcOverview /> },
    { key: "pcsInfo", label: "PCS資訊", children: <PcsInfo /> },
    { key: "alertIssue", label: "告警與異常", children: <AlertIssue /> },
  ];

  return (
    <ScopeStyle>
      <PageBox bgColorLinearGradient headerTitle="PCS資訊 PCS Information">
        <Tabs
          className="mg-t-30"
          destroyOnHidden
          items={items}
          onChange={(activeKey) => {
            setMainState((prevState) => ({
              ...prevState,
              tabActiveKey: activeKey,
            }));
          }}
          tabBarExtraContent={{
            left: <span className="custom-tabs-title">【LC總覽】</span>,
            right: (
              <Flex justify="flex-end">
                {/* LC總覽tab頁籤旁的select */}
                {mainState.tabActiveKey === "lcOverview" && (
                  <Select
                    className="mg-x-30 mg-b-10"
                    selectAttr={{
                      allowClear: true,
                      options: [
                        { label: "選項一", value: 1 },
                        { label: "選項二", value: 2 },
                      ],
                      placeholder: "選擇PCS",
                      showSearch: true,
                    }}
                  />
                )}
                {/* PCS資訊tab頁籤旁的select */}
                {mainState.tabActiveKey === "pcsInfo" && (
                  <Select
                    className="mg-x-30 mg-b-10"
                    selectAttr={{
                      allowClear: true,
                      options: [
                        { label: "選項一", value: 1 },
                        { label: "選項二", value: 2 },
                      ],
                      placeholder: "選擇PCS",
                      showSearch: true,
                    }}
                  />
                )}
                {/* 告警與異常tab頁籤旁的select */}
                {mainState.tabActiveKey === "alertIssue" && (
                  <Select
                    className="mg-x-30 mg-b-10"
                    selectAttr={{
                      allowClear: true,
                      options: [
                        { label: "選項一", value: 1 },
                        { label: "選項二", value: 2 },
                      ],
                      placeholder: "選擇PCS",
                      showSearch: true,
                    }}
                  />
                )}
              </Flex>
            ),
          }}
          type="card"
        />
      </PageBox>
    </ScopeStyle>
  );
}

export default PcsSum;
