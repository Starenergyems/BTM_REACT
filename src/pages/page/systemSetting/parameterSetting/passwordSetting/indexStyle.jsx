import styled, { css } from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const ModalFormStyle = css`
  .ant-modal-content {
    .ant-select-selection-item {
      text-align: center;
      white-space: 10px;
    }
    .password-strong-setting {
      color: ${color.darkGray};
    }
  }
`;

const ScopeStyle = styled.div``;

export { ModalFormStyle, ScopeStyle };
