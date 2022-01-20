import {
  Container, Row, Col, Card, ListGroup,
} from 'react-bootstrap';
import Post from '../Components/Post';

const Blog = () => (
  <Container>
    <Row>
      <Col md="9">
        <Post num="1" />
        <Post num="2" />
        <Post num="3" />
        <Post num="4" />
      </Col>

      <Col md="3">
        <h5 className="text-center mt-5">Categories</h5>
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

      </Col>

    </Row>
  </Container>
);

export default Blog;
