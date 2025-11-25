import { Tabs } from "antd";
import { Select, PageBox } from "@/components/units";
import BscInfo from "./bscInfo";
import RackInfo from "./rackInfo";
import InfoSum from "./infoSum";
import ScopeStyle from "./indexStyle";

function BatRack() {
  const items = [
    { key: "bmsSum", label: "BMS總覽", children: <InfoSum /> },
    { key: "bscInfo", label: "BSC資訊", children: <BscInfo /> },
    { key: "rackInfo", label: "Rack資訊", children: <RackInfo /> },
  ];
  return (
    <ScopeStyle>
      <PageBox
        bgColorLinearGradient
        headerTitle="電池與貨櫃資訊 BMS Information"
        headerStyle={{ width: "565px" }}
      >
        <Tabs
          className="mg-t-30"
          destroyOnHidden
          items={items}
          tabBarExtraContent={{
            left: <span className="custom-tabs-title">BMS</span>,
            right: (
              <Select
                className="custom-select-container mg-r-30"
                // errorMessage="請填寫此欄位"
                isInvalid
                selectAttr={{
                  options: [
                    { label: "選項一", value: 1 },
                    { label: "選項二", value: 2 },
                  ],
                  onChange(value) {
                    console.log(value);
                  },
                  showSearch: true,
                  allowClear: true,
                }}
                // themeCategory="circle-light"
              />
            ),
          }}
          type="card"
        />
      </PageBox>
    </ScopeStyle>
  );
}

export default BatRack;
