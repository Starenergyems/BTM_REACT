import { DatePicker, Flex, Tabs } from "antd";
import { PageBox, Select } from "@/components/units";
import Diagram from "./diagram";
import InfoList from "./infoList";
import ScopeStyle from "./indexStyle";

const { RangePicker } = DatePicker;

function MonthlyReport() {
  const items = [
    {
      key: "diagram",
      label: "圖表",
      children: <Diagram />,
    },
    {
      key: "infoList",
      label: "列表",
      children: <InfoList />,
    },
  ];

  return (
    <ScopeStyle>
      <PageBox bgColorLinearGradient headerTitle="報表資訊 Report Information">
        <Tabs
          className="mg-t-30"
          destroyOnHidden
          items={items}
          tabBarExtraContent={{
            left: <span className="custom-tabs-title">月報</span>,
            right: (
              <Flex
                align="center"
                className="mg-x-30 mg-b-10"
                gap={16}
                justify="flex-end"
              >
                <Select
                  selectAttr={{
                    allowClear: true,
                    options: [
                      { label: "選項一", value: 1 },
                      { label: "選項二", value: 2 },
                    ],
                    placeholder: "選擇報表類型",
                    showSearch: true,
                  }}
                />
                <RangePicker
                  format="YYYY-MM-DD"
                  placeholder={["查詢起始", "查詢結束"]}
                  style={{ width: "260px" }}
                />
              </Flex>
            ),
          }}
          type="card"
        />
      </PageBox>
    </ScopeStyle>
  );
}

export default MonthlyReport;
