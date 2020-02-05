import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row } from './styles/layout.style';
import { Card } from './styles/card.style';
import { Button } from './styles/buttons.style';
import LogoCor from '../assets/images/logo-cor.svg';

const ImagemLogin = styled.div`
  background-color: #10dcab;
  width: 100%;
  height: 100%;
  display: block;
`;

const FormLogin = styled(Row)`
  text-align: center;
`;

export default class Login extends Component {
  render() {
    return (
      <Card width='1000px' margin='100px auto' height='500px' padding='0'>
        <Grid>
          <Row column='1/9' padding='0'>
            <ImagemLogin />
          </Row>

          <FormLogin column='9/13' margin='20px 0 0 0'>
            <img src={LogoCor} alt='Logo Nouhau' />
            <p>
              <Button>Entrar</Button>
            </p>
          </FormLogin>
        </Grid>
      </Card>
    );
  }
}
