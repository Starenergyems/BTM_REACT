import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";
import { customToolboxMap } from "./indexConfig";

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

      &.winning-volume-line {
        &::before {
          content: "";
          display: block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: ${color.white};
          border: 1px solid ${color.blue};
          position: relative;
          top: -2px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
  .chart-custom-toolbox {
    position: absolute;
    right: 30px;
    top: 24px;
    z-index: 1;

    .icon-container {
      position: relative;
      font-size: 0.9rem;

      &::before {
        position: absolute;
        right: 68px;
        bottom: -20px;
        width: 100%;
        white-space: nowrap;
      }
      &.icon-line-container {
        &:hover {
          &::before {
            content: "${customToolboxMap.line}";
          }
        }
      }
      &.icon-bar-container {
        &:hover {
          &::before {
            content: "${customToolboxMap.bar}";
          }
        }
      }
    }
    .iconify {
      cursor: pointer;
    }
  }
`;

export default style;
