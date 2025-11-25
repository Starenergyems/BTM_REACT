import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  /* common */
  .title,
  .content {
    display: inline-block;
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    &.title {
      font-size: 1.05rem;
    }
    &.content {
      color: ${color.lightBlue};
    }
  }
`;

export default style;
