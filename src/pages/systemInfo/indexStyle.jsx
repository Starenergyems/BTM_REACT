import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  h3 {
    background-color: ${color.blueGray};
    border: 3px solid ${color.white};
    border-radius: 25px;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    min-width: 150px;
    padding: 5px 0;
    color: ${color.white};
  }
  .styled-container-category-box {
    width: 100%;

    .category-box-body {
      height: calc(100% - 36px);
    }
    .content-list {
      padding-left: 30px;
      padding-right: 30px;

      > li {
        display: flex;
        margin: 12px 0;
        gap: 32px;
      }
    }
    .secondary-title {
      font-size: 1.05rem;
      font-weight: bold;
      display: inline-block;
      margin-bottom: 10px;
      padding-left: 30px;
    }
    &.category-system-info,
    &.category-execution-status {
      .title {
        display: inline-block;
        white-space: nowrap;
      }
      .content {
        display: inline-block;
        white-space: nowrap;
      }
      &.category-system-info {
        .title {
          width: 40%;
        }
        .content {
          width: 60%;
        }
      }
      &.category-execution-status {
        .title {
          width: 50%;
        }
        .content {
          width: 50%;
        }
      }
    }
  }
  .edit-container {
    padding-left: 10%;

    h3 {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 0;
    }
    .title {
      width: 150px;
    }
    .content {
      width: 150px;

      .value {
        text-align: left;
      }
    }
  }

  @media screen and (max-width: 1600px) {
    .ring-container {
      width: calc(20%);
    }
    .styled-container-category-box {
      width: calc(40%);

      .content-list,
      .secondary-title {
        width: 50%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        padding-left: 0;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .styled-container-category-box {
      width: calc(40%);

      .content-list,
      .secondary-title {
        width: 100%;
        left: 30px;
        transform: none;
      }
    }
  }
  @media screen and (max-width: 992px) {
    .ring-container {
      margin-top: 10px;
    }
    .styled-container-category-box {
      .content-list,
      .secondary-title {
        left: 15px;
      }
    }
  }
`;

export default style;
