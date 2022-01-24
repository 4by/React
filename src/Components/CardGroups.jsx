import React from 'react';

import {
  CardGroup, Card, CardImg, Button, ListGroup,
} from 'react-bootstrap';
import Img6 from '../assets/img6.jpg';
import Img7 from '../assets/img7.jpg';
import Img8 from '../assets/img8.jpg';
import ButtonList from './ButtonList';

export const CardGroup1 = () => (

  <CardGroup className="m-4">

    <Card bg="warning">
      <CardImg variant="top" src={Img6} />
      <Card.Body>
        <Card.Title>Developers</Card.Title>
        <Card.Text>Lorem ipsum dolor</Card.Text>
        <Button variant="primary">About</Button>
      </Card.Body>
    </Card>

    <Card bg="info">
      <Card.Body>
        <Card.Title>Developers</Card.Title>
        <Card.Text>Lorem ipsum dolor</Card.Text>
        <Button variant="primary">About</Button>
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

);

export const CardGroup2 = () => (

  <>
    <Card>
      <ListGroup variant="flush">
        <ListGroup.Item>Html/CSS</ListGroup.Item>
        <ListGroup.Item>Js</ListGroup.Item>
        <ListGroup.Item>Python</ListGroup.Item>
        <ListGroup.Item>Java</ListGroup.Item>
        <ListGroup.Item>C++</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card className="mt-3" bg="light">
      <Card.Body>
        <Card.Title>Side widget</Card.Title>
        <Card.Text>Lorem ipsu dorem</Card.Text>
      </Card.Body>
    </Card>
  </>

);
