import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  .real-time-line-chart {
    min-height: 280px;
  }
  .custom-legend {
    .custom-legend-item {
      cursor: pointer;
      color: ${color.white};

      &.cursor-default {
        cursor: default;
      }
    }
    .color-block {
      width: 24px;
      height: 5px;
      display: inline-block;
    }
  }
`;

export default style;
