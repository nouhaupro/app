import styled from 'styled-components';
import variables from './variables.style';
import colors from './colors.style';
import { setaUm, setaDois } from './icons.style';

export const Dropdown = styled.select`
  border-radius: ${variables.radiusForm};
  background: url(${setaUm}) no-repeat 92% 50%;
  appearance: none;
  border: 1px solid ${colors.gray3};
  color: ${colors.gray3};
  font-family: inherit;
  padding: 12px 32px 12px 12px;
  height: auto;
  ${variables.transition};

  &:focus,
  &:hover {
    outline: none;
    border-color: ${colors.dark};
    color: ${colors.dark};
    background: url(${setaDois}) no-repeat 92% 50%;
    ${variables.transition}
  }
`;
