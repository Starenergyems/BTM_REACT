import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  .real-time-line-chart {
    min-height: 500px;
  }
  .custom-legend {
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
      border-radius: 2px;
    }
  }
`;

export default style;
