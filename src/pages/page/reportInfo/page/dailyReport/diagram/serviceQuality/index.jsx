import { useEffect, useMemo, useRef, useState } from "react";
import { debounce } from "throttle-debounce";
import { Flex } from "antd";
import { useHelpers } from "./indexHelper";
import ScopeStyle from "./indexStyle";

function ServiceQuality() {
  const [mainState, setMainState] = useState({
    customLegend: {
      ...Object.fromEntries(
        useHelpers()
          .getServiceQualityOption()
          .legend.data.map((key) => [key, true])
      ),
    },
  });

  const serviceQualityRef = useRef(null);
  const serviceQualityChartRef = useRef(null);
  const {
    customLegendOnClick,
    getCustomLegendColor,
    getServiceQualityOption,
    resizeChart,
    setServiceQualityChart,
  } = useHelpers({
    refs: {
      serviceQualityRef,
      serviceQualityChartRef,
    },
    setMainState,
  });
  const debounceResizeRealTimeChart = useMemo(
    () => debounce(350, () => resizeChart(serviceQualityChartRef)),
    [resizeChart]
  );
  const serviceQualityOption = getServiceQualityOption();

  //視窗變動
  useEffect(() => {
    window.addEventListener("resize", debounceResizeRealTimeChart);
    return () => {
      window.removeEventListener("resize", debounceResizeRealTimeChart);
    };
  }, [debounceResizeRealTimeChart]);

  //服務品質指標pie圖繪製
  useEffect(() => {
    if (serviceQualityRef.current && !serviceQualityChartRef.current) {
      setServiceQualityChart(serviceQualityOption);
    }
  }, [serviceQualityOption, setServiceQualityChart]);

  return (
    <ScopeStyle>
      <div className="section-title">
        <h2>服務品質指標</h2>
      </div>
      <div ref={serviceQualityRef} className="service-quality-pie-chart"></div>
      <Flex className="custom-legend mg-t-20" gap={16} justify="center">
        {serviceQualityOption.legend.data.map((item, index) => {
          return (
            <Flex
              align="center"
              className="custom-legend-item pd-x-10 pd-y-4"
              gap={16}
              key={index}
              onClick={() =>
                customLegendOnClick(item, serviceQualityChartRef.current)
              }
            >
              <span
                className="color-block mg-r-5"
                style={{
                  backgroundColor: getCustomLegendColor(
                    serviceQualityOption?.series?.[1]?.data,
                    item
                  ),
                }}
              ></span>
              <span
                style={{
                  opacity: mainState.customLegend[item] ? 1 : 0.3,
                }}
              >
                {item}
              </span>
            </Flex>
          );
        })}
      </Flex>
    </ScopeStyle>
  );
}

export default ServiceQuality;
