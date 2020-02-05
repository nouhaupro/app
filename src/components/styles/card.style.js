import styled from 'styled-components';
import variables from './variables.style';
import colors from './colors.style';

const handleColorType = color => {
  switch (color) {
    case 'primary':
      return 'background-color:' + colors.primary;
    case 'secondary':
      return 'background-color:' + colors.secondary;
    case 'dark':
      return 'background-color:' + colors.dark + '; color: white';
    default:
      return 'background-color: #ffffff';
  }
};

export const Card = styled.div`
  ${({ color }) => handleColorType(color)};
  border-radius: ${variables.radius};
  box-shadow: ${variables.shadow};
  padding: ${props => props.padding || '15px'};

  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  overflow-y: ${props => props.overflow || 'hidden'};
  overflow-x: hidden;

  height: ${props => props.height};
  width: ${props => props.width};
  margin: ${props => props.margin};

  & p {
    line-height: 1.5em;
  }
`;

export const CardCap = styled.div`
  font-size: 0.8em;
  text-transform: uppercase;
  font-weight: bold;
`;
