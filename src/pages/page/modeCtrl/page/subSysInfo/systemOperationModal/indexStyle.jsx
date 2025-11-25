import styled, { css } from "styled-components";
import { ModalForm } from "@/components/widgets";
import { color } from "@/styles/variable/indexStyle";

const ModalFormStyle = css`
  .ant-modal-content {
    .ant-modal-body {
      min-height: auto;
    }
  }
  .title {
    margin-top: 4px;
    width: 30px;
  }
  .ant-radio {
    + span {
      display: inline-block;
      width: 100px;
      text-align: left;
    }
  }
  .checkbox-remind {
    color: ${color.blueGray};

    .ant-checkbox {
      align-self: flex-start;
      margin-top: 4px;
    }
  }
  .ant-form-item {
    --ant-form-item-margin-bottom: 0px !important;
  }
  .modal-checked-note {
    max-width: 210px;
    text-align: center;

    &.error {
      color: ${color.alertRed};
    }
  }
`;

const ScopeStyle = styled(ModalForm)``;

export { ModalFormStyle, ScopeStyle };
