import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  .main-content {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
    height: 700px;

    /* common */
    .item-group {
      font-size: 16px;

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
    /* 左側大區塊 */
    .section-important {
      width: calc(100% * (3 / 5) - 16px);
      height: calc(100% - 54px);

      .infocircle-container {
        /* 功率、交流側、直流側、充放電容器 */
        + .ant-row {
          height: calc(100% - 158px);
        }
        .styled-container-info-circle {
          width: 25%;
          text-align: center;

          &.ac {
            .circle {
              .text {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
    /* 右側大區塊 */
    .section-secondary-focus {
      width: calc(100% * (2 / 5));
      height: calc(100% - 54px - 24px);
    }
  }

  @media screen and (max-width: 1600px) {
    .main-content {
      height: auto;
      /* 左側大區塊 */
      .section-important {
        width: calc(100%);
      }
      /* 右側大區塊 */
      .section-secondary-focus {
        margin-top: 48px;
        width: calc(100%);
      }
    }
  }
`;

export default style;
