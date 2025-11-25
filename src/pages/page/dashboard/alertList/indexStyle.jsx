import styled from "styled-components";
import { levelStatus } from "./indexConfig";

const LevelStatusStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .level-status {
    display: inline-block;
    width: 10px;
    height: calc(100% - 2px);
    border-radius: 4px;
    background-color: ${(props) => levelStatus[props.$level - 1]};
    position: absolute;
    left: 0;
    top: 1;
  }
`;
const ScopeStyle = styled.div`
  .ant-table {
    --ant-table-border-color: #59707d;
  }
`;

export { LevelStatusStyle, ScopeStyle };
