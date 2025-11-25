import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  && {
    .ant-table-wrapper {
      .ant-table-container {
        border-color: transparent;

        .ant-table-row {
          &:last-of-type {
            --ant-table-header-border-radius: 0;

            .ant-table-cell {
              position: relative;
              border-color: ${color.white};
            }
          }
        }
      }
    }
  }
  .ant-table-summary {
    position: sticky;
    bottom: 0;
    box-shadow: 0 -1px 1px var(--ant-table-border-color);

    tr {
      &:last-of-type {
        --ant-table-header-border-radius: 8px;

        .ant-table-cell {
          border-bottom-color: transparent;
        }
      }
    }
    .ant-table-cell {
      text-align: center;
      background-color: #575c70;

      &:first-of-type {
        background-image: ${`linear-gradient(to right, ${color.buttonGray},${color.white})`};
        color: ${color.themeBlack};
        height: 60px;
        border-color: ${color.white};
      }
    }
  }
  .tooltip-rte {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default style;
