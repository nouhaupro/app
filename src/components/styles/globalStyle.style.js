import { createGlobalStyle } from 'styled-components/macro';
import colors from './colors.style';

export default createGlobalStyle`

    body{
      background-color: ${colors.gray1};
      color: ${colors.dark};
      margin: 0;
      letter-spacing: -0.03em;
      font-size: 12px;
    }

    html{
      font-family: 'Nouhau-Gordita', sans-serif;
    }

    h1, h2, h3, h4{
      letter-spacing: -0.05em;
      margin-block-start: 0.2em;
    }

    a{
      transition: 0.3s all ease;
    }

    
  
`;
