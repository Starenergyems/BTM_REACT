import { Modal } from "antd";
import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled(Modal)`
  color: ${color.darkGray};

  .ant-modal-body {
    width: 75%;
    margin: 0 auto;

    .styled-container-input {
      input {
        padding-left: 20px;
        color: ${color.darkGray};
      }
    }
    .info-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        display: flex;
        align-items: center;
        width: calc(50% - 10px);

        .title {
          width: 70px;
          color: ${color.themeBlack};
        }
      }
    }
  }
`;

export default style;
