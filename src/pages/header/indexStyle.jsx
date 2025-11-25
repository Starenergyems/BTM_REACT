import styled from "styled-components";

const style = styled.div`
  // Styles
  .header-style {
    background: #1a2332; // Dark theme
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    height: 50px;
    z-index: 900;
    position: fixed;
    width: 100vw;
  }

  .left-section-style {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 100%;
  }

  .active-tab-style {
    background: #002a5b;
    color: #ffffff;
    padding: 0px 35px 0px 15px;
    border-radius: 3px;
    height: 100%;
    line-height: 50px;
    clip-path: polygon(
      0 0,
      80% 0,
      100% 100%,
      0 100%
    ); // Creates a slanted right edge
  }

  .tab-style {
    color: #ffffff;
    padding: 5px 10px;
  }

  .text-style {
    flex: 1;
    padding: 0px 20px;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .time-style {
    color: #ffffff;
    white-space: nowrap;
  }
`;

export default style;
