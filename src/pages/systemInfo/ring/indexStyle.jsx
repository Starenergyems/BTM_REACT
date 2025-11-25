import styled from "styled-components";
import { absoluteCenter, color } from "@/styles/variable/indexStyle";

const style = styled.div`
  position: relative;
  display: inline-block;
  transform: translateY(5px);
  margin-bottom: 30px;
  text-align: center;

  && {
    .ring {
      width: ${(props) =>
        parseInt(props.$widthHeight)
          ? `${parseInt(props.$widthHeight)}px`
          : "120px"};
      height: ${(props) =>
        parseInt(props.$widthHeight)
          ? `${parseInt(props.$widthHeight)}px`
          : "120px"};
      border-radius: 50%;
      background: ${(props) =>
        `linear-gradient(to bottom, ${props.$gradient.top || color.blueGray}, ${
          props.$gradient.bottom || "#e5f7ff"
        })`};
      mask: ${(props) => `
        radial-gradient(circle, transparent ${props.$thickness}%, black 41%)
        `};

      + .rign-border {
        border: 1px solid ${color.white};
        border-radius: 50%;
        width: ${(props) =>
          parseInt(props.$widthHeight)
            ? `${(parseInt(props.$widthHeight) * 87) / 130}px`
            : "85px"};
        height: ${(props) =>
          parseInt(props.$widthHeight)
            ? `${(parseInt(props.$widthHeight) * 87) / 130}px`
            : "85px"};
        ${absoluteCenter}
      }
    }
    .value {
      color: ${(props) => props.$valueColor};
      font-size: ${(props) => props.$valueFontSize};
      ${absoluteCenter};
    }
    .title {
      position: absolute;
      left: 50%;
      bottom: -40px;
      transform: translate(-50%, 0);
      color: ${(props) => props.$titleColor};
      font-size: ${(props) => props.$titleFontSize};
    }
  }
`;

export default style;
