import styled from "styled-components";

const style = styled.div`
  .bid-state {
    display: flex;
    p {
      margin-top: 0;
    }
    div {
      margin-left: auto;

      img {
        margin-left: 10px;
        width: 16px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      img:hover {
        transform: scale(1.2);
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export default style;
