import React, { Component } from 'react';
import { MenuBody, MenuLink } from './styles/menu.style';

export default class Menu extends Component {
  render() {
    return (
      <MenuBody>
        <MenuLink dashboard active>
          Dashboard
        </MenuLink>
        <MenuLink participantes>Participantes</MenuLink>
        <MenuLink mensagens>Mensagens</MenuLink>
        <MenuLink ajuda>Ajuda</MenuLink>
        <MenuLink config>Ajustes</MenuLink>
      </MenuBody>
    );
  }
}
