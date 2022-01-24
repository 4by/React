import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const TabContents = () => (
  <>
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
  </>
);

export default TabContents;
