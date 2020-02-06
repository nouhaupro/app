import styled from 'styled-components';
import colors from './colors.style';
import variables from './variables.style';

export const Nav = styled.div`
  text-transform: uppercase;
  list-style: none;
  padding-inline-start: 0;
  font-weight: 500;
  font-size: 0.9em;
  a {
    width: calc(100% / ${props => props.links});
  }
`;

export const NavLink = styled.a`
  display: inline-block;
  padding-bottom: 5px;
  border-bottom: 2px solid
    ${props => (props.active ? colors.primary : 'transparent')};
  ${variables.transition};
  color: ${props => (props.active ? colors.primary : '')};
  cursor: pointer;

  :hover {
    border-bottom: 2px solid ${colors.primary};
    color: ${colors.primary};
  }
`;
