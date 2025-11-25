import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";
import { customToolboxMap } from "./indexConfig";

const style = styled.div`
  position: relative;

  .sbspm-bar-line-container {
    .sbspm-bar-line-chart {
      min-height: 380px;

      .chart-tooltip-title {
        display: inline-block;
        width: 45px;
      }
      .chart-tooltip-content {
        display: inline-block;
        width: 45px;
        text-align: right;
      }
      .chart-custom-tooltip {
        > .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          min-width: 100px;
        }
        .category {
          display: flex;
          align-items: center;
          gap: 8px;

          .icon {
            width: 10px;
            height: 10px;
            background-color: ${color.lightBlue};
            border-radius: 50%;

            &.rect {
              border-radius: 0;
            }
            &.diamond {
              border-radius: 0;
              transform: rotate(45deg);
            }
          }
        }
      }
    }
    .custom-legend {
      &.bar {
        position: relative;

        .custom-legend-item {
          background-color: ${color.themeBlack};
          cursor: default;
          color: ${color.white};
          border-radius: 5px;
          gap: 4px;

          &.cursor-default {
            cursor: default;
          }
        }
        .color-block {
          width: 15px;
          height: 8px;
          display: inline-block;

          &.diamond {
            width: 8px;
            transform: rotate(45deg);
          }
        }
      }
      &.line {
        .custom-legend-item {
          background-color: ${color.themeBlack};
          border-radius: 5px;
          cursor: default;
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
