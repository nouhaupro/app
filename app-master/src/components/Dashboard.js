import React, { Component } from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import { Container, Grid } from './styles/layout.style';
import { Card, CardCap } from './styles/card.style';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Menu />
        <Container>
          <Grid rows='repeat(3, 180px)'>
            <Card column='1/5' color='dark'>
              <h1>Olá, Usuário!</h1>
              <p>
                Você é um avaliador Nouhau Pro. Tome um tempo para conhecer a
                plataforma e rever as evidências e competências.
              </p>
            </Card>

            <Card column='5/9' row=''>
              <h2>Dicas Nouhau</h2>
            </Card>

            <Card column='9/13' row=''>
              <CardCap>Suas avaliações</CardCap>
            </Card>
          </Grid>
        </Container>
      </div>
    );
  }
}
