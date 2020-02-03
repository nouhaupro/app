import styled from 'styled-components';
import colors from './colors.style';
import variables from './variables.style';

export const Botao = styled.a`
  appearance: none;
  font-family: inherit;
  font-size: 1em;
  border: none;
  border-radius: ${variables.radiusForm};
  background-color: ${colors.primary};
  color: ${colors.dark};
  letter-spacing: -0.02em;
  font-weight: bold;
  padding: 12px 32px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${colors.secondary};
  }
`;
