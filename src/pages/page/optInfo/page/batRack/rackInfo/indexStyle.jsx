import styled from "styled-components";
import { color } from "@/styles/variable/indexStyle";

const style = styled.div`
  .light-status {
    /* background-color: ${(props) => props.$lightStatus?.connect?.color}; */
    background-color: #5daacd;
    display: inline-block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: solid 2px white;
  }

  .light-status.fault {
    background-color: ${color.alertRed};
  }

  .light-status.alarm {
    background-color: ${color.alertYellow};
  }
`;

export default style;
