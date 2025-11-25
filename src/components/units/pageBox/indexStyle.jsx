import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";
import { hexToRgba } from "@/styles/function";

const style = styled.div`
  color: ${color.white};
  position: relative;
  background: ${(props) => {
    if (typeof props?.$bgColorLinearGradient === "boolean") {
      if (props?.$bgColorLinearGradient === true) {
        return `linear-gradient(to bottom,#38404e 200px, transparent 0)`;
      }
      return "transparent";
    } else if (props?.$bgColorLinearGradient?.constructor === Object) {
      return `linear-gradient(to ${
        props?.$bgColorLinearGradient?.direction || "bottom"
      }, ${props?.$bgColorLinearGradient?.startColor || "#38404e"} ${
        props?.$bgColorLinearGradient?.startRange || "200px"
      }, ${props?.$bgColorLinearGradient?.endColor || "transparent"} ${
        props?.$bgColorLinearGradient?.endRange || "0"
      })`;
    }
  }};
  .icon-back {
    position: absolute;
    top: -10px;
    left: 0;
    cursor: pointer;
  }
  .header {
    background-color: #d9d9d9;
    width: 485px;
    height: 36px;
    position: relative;
    text-align: center;

    &::before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 36px 36px 0 0;
      border-color: #d9d9d9 transparent transparent transparent;
      position: absolute;
      right: -36px;
      top: 0;
      z-index: 1;
    }
    .header-title {
      color: ${color.white};
      background-color: ${hexToRgba(color.blueGray, 0.5)};
      height: 50px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(-36px, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      min-width: 320px;

      &::before,
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        z-index: 1;
        top: 0;
      }
      &::before {
        border-width: 0 40px 50px 0;
        border-color: transparent transparent ${hexToRgba(color.blueGray, 0.5)}
          transparent;
        position: absolute;
        left: -40px;
        transform: rotate(180deg);
      }
      &::after {
        border-width: 0 40px 50px 0;
        border-color: transparent transparent ${hexToRgba(color.blueGray, 0.5)}
          transparent;
        position: absolute;
        right: -40px;
      }
    }
  }
`;

export default style;
