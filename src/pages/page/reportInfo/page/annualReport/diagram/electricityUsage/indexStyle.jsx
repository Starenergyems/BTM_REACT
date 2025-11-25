import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  .electricity-usage-bar-line-chart {
    min-height: 450px;
  }
  .custom-legend {
    .custom-legend-item {
      background-color: ${color.themeBlack};
      border-radius: 5px;
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
