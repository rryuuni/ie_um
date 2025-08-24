import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

    * {
    box-sizing : border-box;
    }

    html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-family: 'Pretendard', sans-serif;
    background-color: #ffffff;
  }

    #root {
    max-width: 390px;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    background-color: #fdfdfd;
    position: relative;
    }

    button{
    cursor:pointer;
    border: none;
    }
`;

export default GlobalStyle;
