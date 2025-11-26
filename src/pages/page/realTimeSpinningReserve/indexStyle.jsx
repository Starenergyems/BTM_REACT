import { color } from "@/styles/variable/indexStyle";
import styled from "styled-components";

const style = styled.div`
  .section-header {
    background-color: ${color.themeBlack};
    border-radius: 20px;

    .cloud-status-container {
      .status {
        font-size: 0.9rem;
        color: ${color.lightBlue};
      }
    }
  }
  .revenue-sharing-bar-stack-chart {
    min-height: 450px;
  }
  .custom-legend {
    position: relative;

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
