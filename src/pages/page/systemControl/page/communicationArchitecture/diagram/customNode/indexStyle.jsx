import styled, { css } from "styled-components";
import spritesRect from "@/assets/img/spritesRect.svg";
import spritesIrregular from "@/assets/img/spritesIrregular.svg";

const rectIconSize = 125;
const spacing = 20;
const padding = 20;
const columns = 5;
const rectClassNames = [
  "aem-drk",
  "cms",
  "dc",
  "ems",
  "ess",
  "et",
  "forti-net",
  "gc",
  "havc",
  "hmi",
  "mgc",
  "mte",
  "mvcb",
  "pcs",
  "pm335",
  "power-scada",
  "recloser",
  "switch",
  "tgw-725i",
  "ups",
  "ion900",
  "auxm",
];
let rectIconsStyle = `
  .rect-icon {
    width: ${rectIconSize}px;
    height: ${rectIconSize}px;
    background-image: url(${spritesRect});
    background-repeat: no-repeat;
    background-size: auto;
    display: inline-block;
    image-rendering: pixelated;
  }
`;
rectClassNames.forEach((name, index) => {
  const x = index % columns;
  const y = Math.floor(index / columns);
  const posX = -(padding + x * (rectIconSize + spacing));
  const posY = -(padding + y * (rectIconSize + spacing));
  rectIconsStyle += `
    .bg-${name} {
      background-position: ${posX}px ${posY}px;
    }
  `;
});
//不規則大小的Icon須個別客製設定
const irregularStyle = css`
  .bg-cht {
    display: inline-block;
    width: 72px;
    height: 72px;
    background: url(${spritesIrregular}) -20px -20px;
  }
  .bg-fiber-optic {
    display: inline-block;
    width: 154px;
    height: 72px;
    background: url(${spritesIrregular}) -112px -20px;
  }
  .bg-temp {
    display: inline-block;
    width: 79px;
    height: 42px;
    background: url(${spritesIrregular}) -285px -17px;
  }
`;

const style = styled.div`
  position: relative;

  [class*="sc-"] {
    display: grid;
  }
  ${irregularStyle};
  ${rectIconsStyle};
`;

export default style;
