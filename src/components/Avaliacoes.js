import React, { Component } from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import { ListLink } from '../components/styles/menu.style';
import { Container, Grid, Header } from './styles/layout.style';
import { Card } from './styles/card.style';
import { Dropdown } from './styles/forms.style';
import { Botao } from './styles/buttons.style';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Menu />
        <Container>
          <Grid rows='90px'>
            <Header column='1/3'>
              <h2>Avaliação</h2>
              <Dropdown>
                <option>Turma Dezembro/18</option>
                <option>Turma Janeiro/19</option>
                <option>Turma Fevereiro/19</option>
              </Dropdown>
            </Header>
            <Header column='4/13'>
              <Botao>Clica em mim</Botao>
            </Header>
          </Grid>
          <Grid height='calc(100vh - 180px)' rows='repeat(5, 1fr)'>
            <Card column='1/3' row='1/6' padding='5px' overflow='auto'>
              <ListLink>Alexia</ListLink>
              <ListLink>Ane</ListLink>
              <ListLink>Débora</ListLink>
              <ListLink>Emanuelly</ListLink>
              <ListLink>Gabryella</ListLink>
              <ListLink active>Gersika</ListLink>
              <ListLink>Jayme</ListLink>
              <ListLink>Karina</ListLink>
              <ListLink>Mariana</ListLink>
              <ListLink>Milton</ListLink>
              <ListLink>Robert</ListLink>
              <ListLink>Thaís</ListLink>
              <ListLink>Victor</ListLink>
              <ListLink>Vitor</ListLink>
              <ListLink>Vivianne</ListLink>
            </Card>

            <Card column='3/10' row='1/6'>
              <h1>Gersika</h1>
            </Card>

            <Card column='10/13' row='1/2' color='dark'>
              <h1>78%</h1>
              <p>avaliado por você.</p>
            </Card>
            <Card column='10/13' row='2/3'>
              <h1>95%</h1>
              <p>
                avaliado por <strong>Bia</strong>.
              </p>
            </Card>
            <Card column='10/13' row='3/4'>
              <h1>15%</h1>
              <p>
                avaliado por <strong>Talyta</strong>.
              </p>
            </Card>
            <Card column='10/13' row='4/5'>
              <h1>26%</h1>
              <p>
                avaliado por <strong>Monique</strong>.
              </p>
            </Card>
            <Card column='10/13' row='5/6'>
              <h1>19%</h1>
              <p>
                avaliado por <strong>Ana Paula</strong>.
              </p>
            </Card>
          </Grid>
        </Container>
      </div>
    );
  }
}
