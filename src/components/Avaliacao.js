import React, { Component } from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import { ListLink } from '../components/styles/menu.style';
import { Container, Grid, Row } from './styles/layout.style';
import { Card } from './styles/card.style';
import { Dropdown } from './styles/forms.style';
import { Button, ButtonOutline } from './styles/buttons.style';
import colors from './styles/colors.style';

const students = [
  {
    name: 'Alexia',
    active: true
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
    name: 'Gersika'
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
          <Grid rows='90px'>
            <Row margin='10px 15px 0 0' column='1/3'>
              <h2>Avaliação</h2>
              <Dropdown>
                <option>Turma Dezembro/18</option>
                <option>Turma Janeiro/19</option>
                <option>Turma Fevereiro/19</option>
              </Dropdown>
            </Row>
          </Grid>
          <Grid height='calc(100vh - 180px)' rows='repeat(5, 1fr)'>
            <Card column='1/3' row='1/6' padding='5px' overflow='auto'>
              {returnNames()}
            </Card>

            <Card column='3/10' row='1/6'>
              <h1>Gersika</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita inventore animi neque blanditiis rerum quam doloribus
                totam doloremque delectus, reprehenderit quisquam minima
                assumenda enim commodi a necessitatibus quis laboriosam incidunt
                beatae dolorem iste, aliquid eos quas? Quo necessitatibus eaque
                odio. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Porro exercitationem assumenda labore explicabo? Porro
                dignissimos ullam minima aliquam ex temporibus laborum
                excepturi, facere quo reprehenderit. At debitis vitae in tenetur
                sequi illum eius incidunt, facere inventore facilis, cumque
                voluptatum animi harum ut id quis enim velit, voluptas
                distinctio sint est placeat laudantium! Totam beatae rem nulla
                adipisci obcaecati aliquid, asperiores dolores suscipit itaque
                fugit voluptatibus possimus, molestias corrupti quia,
                praesentium assumenda eveniet inventore quis impedit. Blanditiis
                illo iste, labore eveniet explicabo error quasi officia dicta
                nihil atque corporis excepturi, a, optio laborum ratione unde
                veniam impedit vel rerum aperiam ex.
              </p>
              <Button>Salvar</Button>
              <ButtonOutline>Cancelar</ButtonOutline>
              <Button color={colors.danger}>Salvar</Button>
              <ButtonOutline color={colors.gray5}>Cancelar</ButtonOutline>
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
