import { useEffect, useMemo, useRef, useState } from "react";
import { debounce } from "throttle-debounce";
import { Button, Col, Flex, Row } from "antd";
import { CategoryBox, WithUnitValue } from "@/components/units";
import { color } from "@/styles/variable/indexStyle";
import { hexToRgba } from "@/styles/function";
import FrequencyAndPowerModal from "./frequencyAndPowerModal";
import ReferenceCalueModal from "./referenceCalueModal";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";
import { customLegendNameMap, browseMode } from "./indexConfig";

// mode: read | edit
function ParameterSetting({ className, mode = browseMode.read }) {
  const [mainState, setMainState] = useState({
    frequency: [
      { title: "F_A", value: 59.5 },
      { title: "F_B", value: 59.5 },
      { title: "F_C", value: 59.5 },
      { title: "F_D", value: 59.5 },
      { title: "F_E", value: 59.5 },
      { title: "F_F", value: 59.5 },
    ],
    power: [
      { title: "P_t", value: 100 },
      { title: "P_u", value: 100 },
      { title: "P_v", value: 100 },
      { title: "P_w", value: 100 },
      { title: "P_x", value: 100 },
      { title: "P_y", value: 100 },
    ],
    isFqAndPowerMoadlOpen: false,
    isRefValueModalOpen: false,
    soc: {
      maxUpperLimit: "10",
      upperLimit: "",
      lowerLimit: "",
      minLowerLimit: "",
    },
    voltage: {
      maxUpperLimit: "",
      upperLimit: "",
      lowerLimit: "",
      minLowerLimit: "",
    },
  });
  const edRegRef = useRef(null);
  const edRegChartRef = useRef(null);
  const {
    getCustomLegendStyle,
    getEdRegOption,
    resizeChart,
    setEdRegChart,
    setModalOpen,
  } = useHelpers({ refs: { edRegRef, edRegChartRef }, setMainState });

  const debounceResizeEdRegChart = useMemo(
    () => debounce(350, () => resizeChart(edRegChartRef)),
    [resizeChart]
  );
  const edRegOption = getEdRegOption();

  //視窗變動
  useEffect(() => {
    window.addEventListener("resize", debounceResizeEdRegChart);
    return () => {
      window.removeEventListener("resize", debounceResizeEdRegChart);
    };
  }, [debounceResizeEdRegChart]);

  //繪製E-dReg頻率功率關係圖
  useEffect(() => {
    if (edRegRef.current && !edRegChartRef.current) {
      setEdRegChart(edRegOption);
    }
  }, [edRegOption, setEdRegChart]);

  return (
    <ScopeStyle className={className}>
      <div className="section-title">
        <h2>參數設定</h2>
      </div>
      <div className="section-content">
        <Row>
          <Col sm={24} lg={14}>
            <CategoryBox
              background={`linear-gradient(180deg, ${
                color.themeDarkGray
              },${hexToRgba(color.themeDarkGray, 0)})`}
              headerTextAlign="center"
              isShowBorder={false}
              title="E-dReg"
            >
              <div className="ed-reg-line-chart" ref={edRegRef}></div>
              <Flex
                className="custom-legend mg-t-30-minus"
                gap={16}
                justify="center"
              >
                {edRegOption.legend.data.map((item, index) => {
                  return (
                    <Flex
                      align="center"
                      className="custom-legend-item cursor-default pd-x-10 pd-y-4"
                      gap={16}
                      key={index}
                    >
                      <span
                        className="color-block mg-r-5"
                        style={getCustomLegendStyle(item)}
                      ></span>
                      <span>{customLegendNameMap[item]}</span>
                    </Flex>
                  );
                })}
              </Flex>
            </CategoryBox>
          </Col>
          <Col sm={24} lg={10} className="data-info-container">
            <Flex className="read-container">
              <Flex className="parameter-item w-50 h-100" vertical>
                <span className="parameter-item-title">頻率 (Freq)</span>
                <Flex className="mg-t-20 h-100" gap={16} vertical>
                  {mainState.frequency.map((item, index) => (
                    <Flex key={index} gap={16}>
                      <span className="title">{item.title}</span>
                      <span className="content">
                        <WithUnitValue
                          unit="Hz"
                          value={item.value}
                          valueWidth="35px"
                        />
                      </span>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
              <Flex className="parameter-item w-50 h-100" vertical>
                <span className="parameter-item-title">功率 (Power)</span>
                <Flex className="mg-t-20 h-100" gap={16} vertical>
                  {mainState.power.map((item, index) => (
                    <Flex key={index} gap={16}>
                      <span className="title">{item.title}</span>
                      <span className="content">
                        <WithUnitValue
                          unit="%"
                          value={item.value}
                          valueWidth="35px"
                        />
                      </span>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Flex>
            {mode === browseMode.edit && (
              <div className="edit-container mg-t-32 w-100">
                <Row>
                  <Col sm={12}>Freq&Power</Col>
                  <Col sm={12}>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        setMainState((prevState) => ({
                          ...prevState,
                          isFqAndPowerMoadlOpen: true,
                        }))
                      }
                    >
                      Set
                    </Button>
                  </Col>
                </Row>
                <Row className="mg-t-16">
                  <Col sm={12}>Reference Value </Col>
                  <Col sm={12}>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        setMainState((prevState) => ({
                          ...prevState,
                          isRefValueModalOpen: true,
                        }))
                      }
                    >
                      Set
                    </Button>
                  </Col>
                </Row>
                {/* 編輯Freq&Power Moadl */}
                <FrequencyAndPowerModal
                  frequencies={mainState.frequency}
                  isModalOpen={mainState.isFqAndPowerMoadlOpen}
                  powers={mainState.power}
                  setModalOpen={setModalOpen("isFqAndPowerMoadlOpen")}
                />
                {/* 編輯Reference Value Moadl */}
                <ReferenceCalueModal
                  isModalOpen={mainState.isRefValueModalOpen}
                  setModalOpen={setModalOpen("isRefValueModalOpen")}
                  soc={mainState.soc}
                  voltage={mainState.voltage}
                />
              </div>
            )}
          </Col>
        </Row>
      </div>
    </ScopeStyle>
  );
}

export default ParameterSetting;
