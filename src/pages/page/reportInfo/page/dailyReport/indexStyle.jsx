import { color, sectionStitle } from "@/styles/variable/indexStyle";
import styled from "styled-components";

const style = styled.div`
  .section-title {
    position: relative;

    .excel-download {
      position: absolute;
      top: -13px;
      right: 0;
      color: ${color.white};
      font-size: 1.3rem;
      gap: 8px;
      background-color: #185c37;
      border-radius: 0 20px 20px 0;
      padding-right: 15px;
      cursor: pointer;

      > svg {
        margin-left: -10px;
      }
    }
  }
  ${sectionStitle};
`;

export default style;
