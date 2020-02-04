import styled from 'styled-components';
import colors from './colors.style';
import variables from './variables.style';

export const Button = styled.a`
  appearance: none;
  font: inherit;
  border: 0.15em solid transparent;
  border-radius: ${variables.radiusForm};
  letter-spacing: -0.02em;
  font-weight: bold;
  padding: 12px 32px;
  margin: 5px;
  text-transform: uppercase;
  background-color: ${props => props.color || colors.primary};

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => props.color || colors.primary};
  }
`;
