import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  .header-info {
    border-bottom: 1px solid ${color.white};
    margin: -15px -30px 0;
    position: sticky;
    top: 49px;
    padding-top: 15px;
    background-color: ${color.themeBlack};
    z-index: 2;

    .container {
      width: auto;
    }
  }
  .lc-item {
    &:first-of-type {
      margin-top: 20px;
    }
    margin-bottom: 20px;

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
    .lc-detail {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      font-size: 16px;
      width: 100%;

      .lc-detail-item-group {
        width: 20%;
        gap: 16px;

        .title {
          display: inline-block;
        }
        .content {
          color: ${color.lightBlue};
          vertical-align: middle;

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
  }

  @media screen and (max-width: 1600px) {
    .lc-item {
      .lc-detail {
        gap: 16px 0;

        .lc-detail-item-group {
          width: calc(100% / 3);
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .lc-item {
      .lc-detail {
        gap: 16px 0;

        .lc-detail-item-group {
          width: 50%;
        }
      }
    }
  }
  @media screen and (max-width: 992px) {
    .header-info {
      border-bottom: 1px solid ${color.white};
      margin: 0 -30px;
      position: sticky;
      top: 50px;
      background-color: #111525;

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
      }
    }
  }
`;

export default style;
