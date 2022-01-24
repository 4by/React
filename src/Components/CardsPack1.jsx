import React from 'react';

import {
  Container, CardGroup, Card, CardImg, Button as BootstrapBut,
} from 'react-bootstrap';
import Img6 from '../assets/img6.jpg';
import Img7 from '../assets/img7.jpg';
import Img8 from '../assets/img8.jpg';
import ButtonList from './ButtonList';

const CardsPack1 = () => (
  <Container>
    <h2 className="text-center m-4">Our team</h2>
    <CardGroup className="m-4">
      <Card bg="warning">
        <CardImg variant="top" src={Img6} />
        <Card.Body>
          <Card.Title>Developers</Card.Title>
          <Card.Text>Lorem ipsum dolor</Card.Text>
          <BootstrapBut variant="primary">About</BootstrapBut>
        </Card.Body>
      </Card>

      <Card bg="info">
        <Card.Body>
          <Card.Title>Developers</Card.Title>
          <Card.Text>Lorem ipsum dolor</Card.Text>
          <BootstrapBut variant="primary">About</BootstrapBut>
        </Card.Body>
        <CardImg variant="bottom" src={Img7} />
      </Card>

      <Card text="primary">
        <CardImg variant="top" src={Img8} />
        <Card.Body>
          <Card.Title>Developers</Card.Title>
          <Card.Text>Lorem ipsum dolor</Card.Text>
          <ButtonList />
        </Card.Body>
      </Card>

    </CardGroup>
  </Container>
);

export default CardsPack1;
