import styled from 'styled-components';
import colors from './colors.style';
import variables from './variables.style';
import {
  iconeDashboard,
  iconeParticipantes,
  iconeAjuda,
  iconeMensagens,
  iconeConfig
} from './icons.style';

export const MenuBody = styled.div`
  width: 220px;
  height: calc(100vh - 100px);
  display: block;
  background-color: #ffffff;
  border-radius: 0 ${variables.radius} ${variables.radius} 0;
  padding: 5px;
  margin: 0 15px 0 0;
  position: fixed;
  box-shadow: ${variables.shadow};
`;

export const ListLink = styled.a`
  width: auto;
  font-weight: ${props => (props.active ? '500' : 'normal')};
  padding: 15px 0 15px 10px;
  display: flex;
  align-items: center;
  border-radius: calc(${variables.radius} * 0.5);
  margin: 5px;
  background-color: ${props => (props.active ? colors.gray2 : 'none')};

  &:link,
  &:visited {
    text-decoration: none;
    color: ${colors.dark};
  }

  &:hover {
    background-color: ${colors.gray2};
    color: ${colors.dark};
    cursor: pointer;
  }
`;

export const MenuLink = styled(ListLink)`
  &:before {
    display: block;
    content: '';
    width: 20px;
    height: 20px;
    margin-right: 8px;
    background: ${props =>
        props.dashboard ? 'url(' + iconeDashboard + ')' : ''}
      ${props => (props.participantes ? 'url(' + iconeParticipantes + ')' : '')}
      ${props => (props.ajuda ? 'url(' + iconeAjuda + ')' : '')}
      ${props => (props.mensagens ? 'url(' + iconeMensagens + ')' : '')}
      ${props => (props.config ? 'url(' + iconeConfig + ')' : '')} no-repeat
      center;
  }
`;
