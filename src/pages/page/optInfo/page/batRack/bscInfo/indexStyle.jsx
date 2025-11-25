import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  .info-circle-container {
    > div {
      width: calc(100% / 5);
      text-align: center;
    }
  }

  .light-status {
    /* background-color: ${(props) => props.$lightStatus?.connect?.color}; */
    background-color: #5daacd;
    display: inline-block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: solid 2px white;
  }

  .light-status.fault {
    background-color: ${color.alertRed};
  }

  .light-status.alarm {
    background-color: ${color.alertYellow};
  }

  .category-box-body {
    min-height: 270px;
    span {
      font-size: 18px;
    }
    .data-value {
      color: ${color.lightBlue};
    }
  }

  .category-box-2 > .category-box-body {
    min-height: 580px;
  }

  @media screen and (max-width: 1024px) {
    .info-circle-container {
      > div {
        width: calc(100% / 4);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .info-circle-container {
      > div {
        width: calc(100% / 4);
      }
    }
  }
`;

export default style;
