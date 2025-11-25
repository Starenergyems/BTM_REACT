import styled from "styled-components";

const style = styled.div`
  #react-flow-container {
    width: 90vw;
    height: 65vh;

    .react-flow__nodes {
      .react-flow__node {
        width: 125px;
        height: 125px;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    .react-flow__handle {
      &.connectionindicator {
        visibility: hidden; //隱藏dot
      }
    }
  }
  .react-flow__panel {
    &.bottom {
      &.right {
        display: none;
      }
    }
  }
`;

export default style;
