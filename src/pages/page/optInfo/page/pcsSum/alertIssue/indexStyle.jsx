import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  /* common */
  .info-box {
    width: 90%;

    .item-group {
      font-size: 16px;
      display: inline-flex;
      margin: 8px 0;
      line-height: 1;
      float: left;
      justify-content: space-between;
      min-width: 200px;
      padding: 0 20px;

      .title {
        text-align: right;
        min-width: 130px;
      }
      .content {
        color: ${color.lightBlue};

        .light-status {
          display: inline-block;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid ${color.white};
          background-color: ${color.lightBlue};
        }
      }
    }
  }
  .styled-container-info-circle {
    .container {
      width: auto;

      .circle {
        width: 70px;
        height: 70px;
        margin: 0 auto;

        .text {
          font-size: 20px;
        }
      }
      .title {
        margin-top: 5px;
        white-space: nowrap;
      }
    }
  }
  /* 整機告警狀態 */
  .category-all-alert {
    .item-group {
      &:nth-of-type(2n + 1) {
        clear: left;
      }
    }
  }
  /* 整機故障狀態 */
  .category-all-breakdown {
    .item-group {
      &:nth-of-type(4n + 1) {
        clear: left;
      }
    }
  }
  /* 告警狀態 */
  .category-alert {
    .item-group {
      &:nth-of-type(6n + 1) {
        clear: left;
      }
    }
  }
  /* 故障狀態 */
  .category-breakdown {
    .item-group {
      &:nth-of-type(6n + 1) {
        clear: left;
      }
    }
  }

  @media screen and (max-width: 1600px) {
    /* 告警狀態 */
    && {
      .category-alert {
        .item-group {
          clear: none;
        }
      }
    }
    /* 故障狀態 */
    && {
      .category-breakdown {
        .item-group {
          clear: none;
        }
      }
    }
  }
`;

export default style;
