import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row } from './styles/layout.style';
import { Card } from './styles/card.style';
import { Button } from './styles/buttons.style';
import LogoCor from '../assets/images/logo-cor.svg';
import { Input, FormRow } from './styles/forms.style';
import { Nav, NavLink } from './styles/nav.style';

const ImagemLogin = styled.div`
  background-color: #10dcab;
  width: 100%;
  height: 100%;
  display: block;
`;

const FormLogin = styled(Row)`
  text-align: center;

  & img {
    margin: 30px auto 15px auto;
  }
`;

class Entrar extends Component {
  render() {
    return (
      <>
        <Nav links='2'>
          <NavLink active>Login</NavLink>
          <NavLink>Cadastre-se</NavLink>
        </Nav>

        <FormRow>
          <Input placeholder='Nome' />
        </FormRow>

        <FormRow>
          <Input type='password' placeholder='Senha' />
        </FormRow>

        <Button block>Entrar</Button>
        <p>
          <a href='http://google.com'>Esqueceu a senha?</a>
        </p>
      </>
    );
  }
}

class Cadastro extends Component {
  render() {
    return (
      <>
        <Nav links='2'>
          <NavLink>Login</NavLink>
          <NavLink active>Cadastre-se</NavLink>
        </Nav>

        <FormRow>
          <Input placeholder='Nome' />
        </FormRow>

        <FormRow>
          <Input placeholder='E-mail' />
        </FormRow>

        <FormRow>
          <Input type='password' placeholder='Senha' />
        </FormRow>

        <Button block>Cadastrar</Button>
      </>
    );
  }
}

export default class Login extends Component {
  render() {
    return (
      <Card width='1000px' margin='100px auto' height='500px' padding='0'>
        <Grid>
          <Row column='1/9' padding='0'>
            <ImagemLogin />
          </Row>

          <FormLogin column='9/13' padding='0 15px 0 0'>
            <img src={LogoCor} alt='Logo Nouhau' />

            <Cadastro />
          </FormLogin>
        </Grid>
      </Card>
    );
  }
}
