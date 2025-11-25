import styled, { css } from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const ModalFormStyle = css`
  .custom-radio-group-container {
    display: flex;
    flex-direction: column;
    gap: 16px;

    label {
      --ant-radio-wrapper-margin-inline-end: 0;
      justify-content: center;
      direction: rtl;
    }
  }
  .checkbox-remind {
    color: ${color.blueGray};
    max-width: 215px;
    text-align: center;
    align-items: flex-start;
  }
`;

const ScopeStyle = styled.div`
  .light-status-container {
    background-color: ${color.themeDarkGray};
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transform: translateY(-3px);
  }
  .light-status {
    display: inline-block;
    border-radius: 50%;
    border: 1px solid ${color.white};
    width: 14px;
    height: 14px;
  }
  .iconify {
    cursor: pointer;

    &.no-cursor {
      cursor: default;
    }
  }
`;

export { ModalFormStyle, ScopeStyle };
