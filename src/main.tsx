import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from "./App.tsx";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lemon Slice';
    src: url('/fonts/lemon-slice.ttf') format('truetype');
    font-display: swap;
  }

  * { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: 'Baloo 2', cursive;
    background: pink;
    color: #666;
    font-size: calc(16px + 0.5vw);
    line-height: 1.5;
  }

  button, input { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  a { color: #81425b; }
  img { max-width: 100%; height: auto; }
  h1, h2, h3 { line-height: 1.25; overflow-wrap: anywhere; }
  h1 { font-family: 'Lemon Slice', 'Baloo 2', cursive; }
  h2 { font-size: calc(24px + 0.5vw); }
  h3 { font-size: calc(18px + 0.4vw); }
  p, li, td { overflow-wrap: anywhere; }
  :focus-visible { outline: 3px solid #9b4667; outline-offset: 4px; }
  
  
  @media (max-width: 750px) {
      body { font-size: calc(14px + 0.5vw); }
  }
`;
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyle />
        <App />
    </StrictMode>,
);
