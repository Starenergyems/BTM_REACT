import styled from "styled-components";
import { Col } from "antd";
import { color } from "@/styles/variable/indexStyle";
import { lightStatus } from "../indexConfig";

const style = styled(Col)`
  /* 具有燈號的類型*/
  &.col-type-light {
    .title {
      display: inline-block;
      min-width: 62px;
    }
    .light-status {
      background-color: ${(props) => lightStatus?.[props.$lightStatus]?.color};
    }
  }
  /* 具有數值的類型*/
  &.col-type-value {
    .title {
      display: inline-block;
      min-width: 80px;
    }
    .content {
      color: ${color.lightBlue};
      vertical-align: middle;
    }
  }
`;

export default style;
