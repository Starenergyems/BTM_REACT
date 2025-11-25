import styled from "styled-components";

const style = styled.div`
  .winning-volume {
    width: 20%;

    .ant-card {
      height: 100%;
    }
    .ant-card-body {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .data-info {
    width: 80%;

    .data-info-row {
      width: 100%;

      &.light {
        .ant-card {
          background-color: #3a4365;
        }
      }
      .ant-card {
        width: 25%;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 992px) {
    .winning-volume {
      width: 100%;
    }
    .data-info {
      width: 100%;
    }
  }
`;

export default style;
