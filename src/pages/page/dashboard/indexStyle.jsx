import styled from "styled-components";
import { color, sectionStitle } from "@/styles/variable/indexStyle";

const style = styled.div`
  /* common */
  .title,
  .content {
    font-size: 1.05rem;
  }
  .content {
    color: ${color.lightBlue};
    font-size: 1.05rem;
  }
  .section-content {
    min-height: 365px;
  }
  ${sectionStitle}
`;

export default style;
