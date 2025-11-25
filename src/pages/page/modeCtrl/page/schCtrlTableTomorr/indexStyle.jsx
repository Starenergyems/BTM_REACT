import styled from "styled-components";

const style = styled.div`
  margin: 5%;
  padding: 24;
  background: #0f1123;
  min-height: 100vh;

  .ant-table-cell {
    max-width: 136px;
  }

  .css-var-r1.ant-input-css-var {
    --ant-input-active-border-color: transparent;
    --ant-input-hover-border-color: transparent;
  }
  .ant-input-outlined {
    border-width: 0px;
  }
  .ant-input-outlined:focus-within {
    border-color: transparent;
    box-shadow: 0 0 0 0 transparent;
  }

  .ant-table-cell {
    .ant-input {
      box-shadow: none;
      --ant-color-text: #000;
    }
  }

  .edit-btn {
    margin: 20px 49%;
  }

  .return-btn {
    display: flex;
    span {
      vertical-align: top;
    }
    div {
      margin-left: auto;
      margin-bottom: 10px;

      img {
        margin-left: 10px;
        width: 20px;
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
