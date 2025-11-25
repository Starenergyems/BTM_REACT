import styled, { css } from "styled-components";

const style = styled.div`
  position: relative;

  &::before {
    content: "${(props) => props.$label}";
    position: absolute;
    top: -40px;
    left: 0;
    transform: translate(-50%);
    font-size: 1.3rem;
    white-space: pre-wrap;
    ${(props) => css`
      ${props.$labelStyle}
    `}
  }
`;

export default style;
