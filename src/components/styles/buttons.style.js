import styled from 'styled-components';
import colors from './colors.style';
import variables from './variables.style';

const ButtonBase = styled.button`
  font-family: inherit;
  border-radius: ${variables.radiusForm};
  font-weight: 500;
  padding: 12px 32px;
  margin: 5px;
  text-transform: uppercase;
  letter-spacing: 0.02em;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled(ButtonBase)`
  background-color: ${props => props.color || colors.primary};
  color: white;
  border: 1px solid ${props => props.color || colors.primary};

  &:hover {
    background-color: ${props => props.color || colors.primary};
    box-shadow: 0 0 10px ${props => props.color || colors.primary};
  }
  &:active {
    background-color: black;
    box-shadow: 0 0 10px black;
    border: 1px solid black;
  }
`;

export const ButtonOutline = styled(ButtonBase)`
  background-color: transparent;
  color: ${props => props.color || colors.primary};
  border: 1px solid ${props => props.color || colors.primary};

  &:hover {
    background-color: ${props => props.color || colors.primary};
    color: white;
  }

  &:active {
    background-color: black;
    border: 1px solid black;
  }
`;
