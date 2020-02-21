import React, { Component } from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import { ListLink } from '../components/styles/menu.style';
import { Container, Grid, Row } from './styles/layout.style';
import { Card } from './styles/card.style';
import { Dropdown } from './styles/forms.style';
import { Button, ButtonText } from './styles/buttons.style';
// import colors from './styles/colors.style';

const students = [
  {
    name: 'Alexia'
  },
  {
    name: 'Ane'
  },
  {
    name: 'Débora'
  },
  {
    name: 'Emanuelly'
  },
  {
    name: 'Gabryella'
  },
  {
    name: 'Gersika',
    active: true
  }
];

const returnNames = () => {
  const names = students.map((elem, idx, arr) => {
    if (elem.active === true) {
      return (
        <ListLink key={idx} active>
          {elem.name}
        </ListLink>
      );
    } else {
      return <ListLink key={idx}>{elem.name}</ListLink>;
    }
  });

  return names;
};

export default class Avaliacao extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Menu />
        <Container>
          <Grid rows='60px'>
            <Row margin='5px 15px 0 0' column='1/3'>
              <h2>Avaliação</h2>
            </Row>
          </Grid>
          <Grid height='calc(100vh - 150px)' rows='repeat(5, 1fr)'>
            <Card row='1/2' column='1/3'>
              <Dropdown block>
                <option>Turma Dezembro/18</option>
                <option>Turma Janeiro/19</option>
                <option>Turma Fevereiro/19</option>
              </Dropdown>
            </Card>
            <Card column='1/3' row='2/6' padding='5px' overflow='auto'>
              {returnNames()}
            </Card>

            <Card column='3/10' row='1/6'>
              <h1>Gersika</h1>
              <Button>Salvar</Button>
              <ButtonText>Cancelar</ButtonText>
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
