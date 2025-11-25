import styled, { css } from "styled-components";
import { ModalForm } from "@/components/widgets";
import { color } from "@/styles/variable/indexStyle";

const ModalFormStyle = css`
  && {
    .ant-input-affix-wrapper {
      width: 118px;
    }
  }
  .title {
    margin-top: 4px;
    width: 30px;
  }
  .checkbox-remind {
    color: ${color.blueGray};
  }
  .ant-form-item {
    --ant-form-item-margin-bottom: 0px !important;
  }
  .modal-checked-note {
    &.error {
      color: ${color.alertRed};
    }
  }
`;

const ScopeStyle = styled(ModalForm)``;

export { ModalFormStyle, ScopeStyle };
