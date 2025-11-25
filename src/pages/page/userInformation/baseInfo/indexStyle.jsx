import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  .table-with-border {
    border: 1px solid ${color.white};
    border-radius: 10px;
    padding: 15px;
  }
  .iconify {
    cursor: pointer;

    &.no-cursor {
      cursor: default;
    }
  }
`;

export default style;
