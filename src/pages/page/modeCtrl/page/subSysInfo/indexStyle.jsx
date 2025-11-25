import { color } from "@/styles/variable/indexStyle";
import styled from "styled-components";

const style = styled.div`
  && {
    .filter-container {
      .ant-select-selector {
        background-color: transparent;
      }
      .btn-control {
        --ant-color-bg-solid: ${color.white};
        --ant-button-solid-text-color: ${color.darkGray};
        --ant-color-bg-solid-hover: ${color.white};
        --ant-button-primary-color: ${color.darkGray};
        --ant-color-bg-solid-active: ${color.white};

        .icon-edit {
          position: absolute;
          right: 10%;
        }
      }
    }
  }
`;

export default style;
