import React, { Component } from 'react';
import logoBranco from '../assets/images/logo-branco.svg';
import { Bar, Logo, AvatarBox } from './styles/navbar.style';

// import { Container } from './styles';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Bar>
          <Logo>
            <img src={logoBranco} alt='Nouhau Pro' />
          </Logo>
          <AvatarBox>Usuário</AvatarBox>
        </Bar>
      </div>
    );
  }
}
