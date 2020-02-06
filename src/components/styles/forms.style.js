import styled from 'styled-components';
import variables from './variables.style';
import colors from './colors.style';
import { setaUm, setaDois } from './icons.style';

export const Dropdown = styled.select`
  border-radius: ${variables.radiusForm};
  background: url(${setaUm}) no-repeat 92% 50%;
  border: 1px solid ${colors.gray3};
  color: ${colors.gray3};
  padding: 15px 30px 15px 15px;
  height: auto;
  display: ${props => (props.block ? 'block' : 'inline-block')};
  width: ${props => (props.block ? '100%' : 'auto')};

  &:focus,
  &:hover {
    outline: none;
    border-color: ${colors.dark};
    color: ${colors.dark};
    background: url(${setaDois}) no-repeat 92% 50%;
  }
`;

export const FormRow = styled.div`
  margin: 15px 0;
`;

export const Input = styled.input`
  background: transparent;
  border-radius: ${variables.radiusForm};
  border: 1px solid ${colors.gray3};
  padding: 15px 0 15px 15px;
  display: block;
  width: calc(100% - 15px);

  &:focus {
    outline: none;
    border-color: ${colors.dark};
  }
`;
