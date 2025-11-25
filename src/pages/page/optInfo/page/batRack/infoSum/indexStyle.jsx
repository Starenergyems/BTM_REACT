import styled from "styled-components";

const style = styled.div`
  .info-circle-container {
    > div {
      width: calc(100% / 9);
      text-align: center;
    }
  }
  @media screen and (max-width: 1600px) {
    .info-circle-container {
      > div {
        width: calc(100% / 5);
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .info-circle-container {
      > div {
        width: calc(100% / 4);
      }
    }
  }
`;

export default style;