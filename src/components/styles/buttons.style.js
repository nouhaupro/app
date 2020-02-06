import styled from 'styled-components';
import colors from './colors.style';
import variables from './variables.style';

const ButtonBase = styled.button`
  font-family: inherit;
  border-radius: ${props =>
    props.small
      ? 'calc(' + variables.radiusForm + '* 0.5)'
      : variables.radiusForm};
  font-weight: 500;
  font-size: ${props => (props.small ? '0.9em' : '1em')};
  padding: ${props => (props.small ? '5px 10px' : '15px 30px')};
  margin: ${props => (props.block ? '0' : props.small ? '1px' : '5px')};
  text-transform: uppercase;
  letter-spacing: 0.02em;
  display: ${props => (props.block ? 'block' : 'inline-block')};
  width: ${props => (props.block ? '100%' : 'auto')};

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
    box-shadow: 0 2px 10px ${props => props.color || colors.primary};
  }
  &:active {
    background-color: black;
    box-shadow: 0 0 10px black;
    border: 1px solid black;
  }
`;

export const ButtonText = styled(ButtonBase)`
  background-color: transparent;
  color: ${props => props.color || colors.primary};
  border: none;

  &:hover {
    background-color: ${props => props.color || colors.primary};
    color: white;
  }

  &:active {
    background-color: black;
  }
`;

export const ButtonOutline = styled(ButtonText)`
  border: 1px solid ${props => props.color || colors.primary};

  &:active {
    border: 1px solid black;
  }
`;
