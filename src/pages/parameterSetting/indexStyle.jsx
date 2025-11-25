import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  .category-box-header {
    min-height: 36px;
  }
  .ed-reg-line-chart {
    min-height: 300px;
    pointer-events: none;
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

      &:first-of-type {
        .color-block {
          border-radius: 50%;
          width: 10px;
          height: 10px;
        }
      }
    }
    .color-block {
      width: 24px;
      height: 5px;
      display: inline-block;
    }
  }
  .data-info-container {
    padding-left: 5%;

    .read-container {
      .parameter-item {
        .parameter-item-title {
          font-size: 1.1rem;
        }
        .title {
          min-width: 40px;
        }
        .content {
          min-width: auto;
        }
      }
    }
    .edit-container {
      .ant-col {
        align-items: center;
        display: flex;
        font-size: 1.1rem;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .data-info-container {
      padding-left: 20%;
    }
  }
`;

export default style;
