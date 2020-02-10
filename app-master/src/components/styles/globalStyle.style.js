import { createGlobalStyle } from 'styled-components/macro';
import colors from './colors.style';

export default createGlobalStyle`

    body{
      background-color: ${colors.gray1};
      color: ${colors.dark};
      margin: 0;
      letter-spacing: -0.03em;
      font-size: 13px;
    }

    input,
    label,
    select,
    button,
    textarea
    {
      transition: 0.3s all ease;
      font-family: inherit;
      font-size: 1em;
      appearance: none;
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

    a:link, a:visited{
      font-weight: 500;
      text-decoration: none;
      color: ${colors.gray7};
    }

    a:hover{
      color: ${colors.primary};
    }

    
  
`;
