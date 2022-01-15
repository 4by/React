import {
  Container, CardGroup, Card, CardImg, Button as BootstrapBut,
} from 'react-bootstrap';
import Img6 from '../assets/img6.jpeg';
import Img7 from '../assets/img7.jpg';
import Img8 from '../assets/img8.jpeg';
import ButtonList from './ButtonList';

function Cards() {
  return (
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
}

export default Cards;
