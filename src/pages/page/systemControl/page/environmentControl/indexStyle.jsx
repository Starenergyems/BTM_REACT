import styled from "styled-components";
import {
  color,
  lightStatus as lightStatusStyle,
  sectionStitle,
} from "@/styles/variable/indexStyle";
import { lightStatus } from "./indexConfig";

const LightStatusStyle = styled.span`
  background-color: ${(props) => lightStatus?.[props.$lightStatus]?.color};
  ${lightStatusStyle}
`;

const ScopeStyle = styled.div`
  ${sectionStitle};

  .info-box {
    width: 90%;

    .item-group {
      font-size: 16px;
      display: inline-flex;
      gap: 16px;
      margin: 8px 0;
      line-height: 1;
      float: left;
      justify-content: center;
      padding: 0 20px;

      .title {
        text-align: right;
        min-width: 100px;
      }
      .content {
        color: ${color.lightBlue};
        min-width: 100px;
        text-align: left;

        .light-status {
          display: inline-block;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid ${color.white};
          background-color: ${color.lightBlue};
        }
      }
    }
  }
  /* 空調控制 */
  .section-air-conditioner {
    .info-box {
      .item-group {
        width: calc(100% / 3);
      }
    }
  }
  /* UPS 控制 */
  .section-ups {
    .info-box {
      .item-group {
        width: calc(100% / 5);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    /* UPS 控制 */
    .section-ups {
      .info-box {
        .item-group {
          width: calc(100% / 3);
        }
      }
    }
  }
`;

export { LightStatusStyle, ScopeStyle };
