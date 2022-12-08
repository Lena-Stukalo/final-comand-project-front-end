import { createGlobalStyle } from 'styled-components';
import {
  ellipseRightD,
  ellipseRight,
  ellipseLeft,
  ellipseLeftD,
} from 'assets/media/icons';
import { device } from 'stylesheet/breakpoints';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0 auto;
  color: var(--black);
  font-family: 'Circe', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  background-color: var(--bg-color);
   @media ${device.tablet} {
    background: url(${ellipseRight}), url(${ellipseLeft}), linear-gradient(var(--bg-color), var(--bg-color));
  background-repeat: no-repeat;
  background-position: right top, left bottom;
  background-size: auto;
  background-attachment: fixed; 
  /* background-color: rgba(255, 255, 255, 0.4);
   backdrop-filter: blur(25px); */
  }
  @media ${device.desktop} {
    background: url(${ellipseRightD}), url(${ellipseLeftD}), linear-gradient(var(--bg-color), var(--bg-color));
  background-repeat: no-repeat;
  background-position: right top, left bottom;
  background-size: auto;
  background-attachment: fixed;
  /* background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px); */
  }
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;