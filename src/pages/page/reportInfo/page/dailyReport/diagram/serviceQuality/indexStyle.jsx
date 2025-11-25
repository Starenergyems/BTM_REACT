import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  position: relative;

  .service-quality-pie-chart {
    min-height: 370px;
  }
  .custom-legend {
    display: inline-flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    .custom-legend-item {
      background-color: ${color.themeDarkGray};
      border-radius: 5px;
      cursor: pointer;
      color: ${color.white};

      &.cursor-default {
        cursor: default;
      }
    }
    .color-block {
      width: 34px;
      height: 10px;
      display: inline-block;
    }
  }

  @media screen and (max-width: 1600px) {
    .custom-legend {
      left: calc(50% - 155px);
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @media screen and (max-width: 992px) {
    .custom-legend {
      left: calc(50% - 185px);
    }
  }
`;

export default style;
