import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  .ant-table {
    --ant-table-border-color: #59707d;

    .ant-table-row {
      &.active {
        color: ${color.lightBlue};
      }
    }
  }
`;

export default style;
